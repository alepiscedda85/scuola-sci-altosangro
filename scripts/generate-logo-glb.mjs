/* global process */
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { DOMParser } from '@xmldom/xmldom'
import {
  Box3,
  Color,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  Vector3,
} from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'

globalThis.DOMParser = class SvgDomParser {
  parseFromString(source, mimeType) {
    const document = new DOMParser().parseFromString(source, mimeType)
    document.querySelectorAll = () => []
    return document
  }
}
globalThis.FileReader = class FileReader {
  result = null
  onloadend = null

  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((result) => {
      this.result = result
      this.onloadend?.()
    })
  }
}

const source = resolve('public/images/logo.svg')
const destination = resolve('public/models/logo.glb')
const svg = await readFile(source, 'utf8')
const data = new SVGLoader().parse(svg)
const logo = new Group()
logo.name = 'ScuolaSciAltoSangroLogo'

for (const [pathIndex, path] of data.paths.entries()) {
  const className = path.userData?.node?.getAttribute?.('class')
  // The unclassed paths are the tiny wordmark outlines. The 3D mark uses the
  // recognizable wolf emblem only, keeping the web asset lightweight.
  if (!className) continue
  const shapes = path.toShapes(true)
  const classColors = { 'cls-1': '#f4f11a', 'cls-2': '#03030a', 'cls-3': '#f0f0f0', 'cls-4': '#0083cb' }
  const color = new Color(classColors[className] || path.color || '#03030a')
  const material = new MeshStandardMaterial({
    color,
    metalness: color.getHexString() === '03030a' ? 0.35 : 0.12,
    roughness: 0.46,
  })

  for (const [shapeIndex, shape] of shapes.entries()) {
    const geometry = new ExtrudeGeometry(shape, {
      depth: 3.6,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.55,
      bevelThickness: 0.55,
      curveSegments: 3,
    })
    const mesh = new Mesh(geometry, material)
    mesh.name = `LogoPath_${pathIndex}_${shapeIndex}`
    mesh.position.z = pathIndex * 0.025
    logo.add(mesh)
  }
}

const bounds = new Box3().setFromObject(logo)
const center = bounds.getCenter(new Vector3())
const size = bounds.getSize(new Vector3())
const normalizedLogo = new Group()
normalizedLogo.name = 'ScuolaSciAltoSangroLogo3D'
normalizedLogo.add(logo)
logo.position.set(-center.x, -center.y, -center.z)
normalizedLogo.scale.setScalar(4.8 / Math.max(size.x, size.y))
normalizedLogo.rotation.x = Math.PI

const exporter = new GLTFExporter()
const glb = await exporter.parseAsync(normalizedLogo, {
  binary: true,
  onlyVisible: true,
  truncateDrawRange: true,
})

await mkdir(dirname(destination), { recursive: true })
await writeFile(destination, new Uint8Array(glb))
process.stdout.write(`Generated ${destination} (${Math.round(glb.byteLength / 1024)} KB, ${logo.children.length} meshes)\n`)
