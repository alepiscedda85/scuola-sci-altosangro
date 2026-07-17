import { useEffect, useRef, useState } from 'react'
import { publicAsset } from '../../lib/assets'

export function LogoExperience() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    let disposed = false
    let resizeObserver: ResizeObserver | undefined
    let renderer: import('three').WebGLRenderer | undefined
    let model: import('three').Object3D | undefined
    let frame = 0

    Promise.all([import('three'), import('three/examples/jsm/loaders/GLTFLoader.js')]).then(([THREE, loaderModule]) => {
      if (disposed) return
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
      camera.position.set(0, 0.1, 8.4)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
      renderer.outputColorSpace = THREE.SRGBColorSpace
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.15
      mount.appendChild(renderer.domElement)

      scene.add(new THREE.HemisphereLight(0xeaf5f7, 0x08243b, 2.6))
      const key = new THREE.DirectionalLight(0xffffff, 4.6)
      key.position.set(4, 5, 7)
      scene.add(key)
      const rim = new THREE.PointLight(0xf1cf28, 24, 16)
      rim.position.set(-4, 1, 4)
      scene.add(rim)

      new loaderModule.GLTFLoader().load(publicAsset('/models/logo.glb'), (gltf) => {
        if (disposed) return
        model = gltf.scene
        const bounds = new THREE.Box3().setFromObject(model)
        const center = bounds.getCenter(new THREE.Vector3())
        const size = bounds.getSize(new THREE.Vector3())
        const wrapper = new THREE.Group()
        model.position.sub(center)
        wrapper.scale.setScalar(4.8 / Math.max(size.x, size.y, 0.001))
        wrapper.rotation.set(-0.08, -0.2, 0.04)
        wrapper.add(model)
        model = wrapper
        scene.add(wrapper)
        setReady(true)
      })

      const resize = () => {
        if (!renderer) return
        const width = Math.max(mount.clientWidth, 1)
        const height = Math.max(mount.clientHeight, 1)
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }
      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(mount)
      resize()

      const reduced = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const render = () => {
        frame += 1
        if (model && !reduced) {
          model.rotation.y += 0.0022
          model.position.y = Math.sin(frame * 0.012) * 0.08
        }
        renderer?.render(scene, camera)
      }
      renderer.setAnimationLoop(render)
    })

    return () => {
      disposed = true
      resizeObserver?.disconnect()
      renderer?.setAnimationLoop(null)
      renderer?.dispose()
      renderer?.domElement.remove()
      model?.traverse((object) => {
        const mesh = object as import('three').Mesh
        mesh.geometry?.dispose()
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
        materials.filter(Boolean).forEach((material) => material.dispose())
      })
    }
  }, [])

  return <div ref={mountRef} className="relative h-full min-h-[360px] w-full" aria-hidden="true">
    <img src={publicAsset('/images/logo.svg')} alt="" className={`absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${ready ? 'opacity-0' : 'opacity-70'}`} />
  </div>
}
