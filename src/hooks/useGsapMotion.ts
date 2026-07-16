import { useEffect, type RefObject } from 'react'

function motionAllowed() {
  return typeof window !== 'undefined' && (typeof window.matchMedia !== 'function' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
}

export function useGsapHomeStory(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!scope.current || !motionAllowed()) return
    let context: { revert: () => void } | undefined
    let cancelled = false

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([gsapModule, triggerModule]) => {
      if (cancelled || !scope.current) return
      const gsap = gsapModule.gsap
      const ScrollTrigger = triggerModule.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      context = gsap.context(() => {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .from('.story-hero-copy > *', { y: 42, opacity: 0, duration: 0.9, stagger: 0.09 })
          .from('.story-scroll-cue', { opacity: 0, y: 12, duration: 0.5 }, '-=0.25')

        gsap.to('.story-hero-image', {
          yPercent: 13,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: { trigger: '.story-hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
        })

        gsap.utils.toArray<HTMLElement>('.motion-reveal').forEach((element) => {
          gsap.from(element, {
            y: 54,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 86%', once: true },
          })
        })

        gsap.utils.toArray<HTMLElement>('.motion-card-grid').forEach((grid) => {
          gsap.from(grid.children, {
            y: 60,
            opacity: 0,
            rotateX: 6,
            transformOrigin: 'center bottom',
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: grid, start: 'top 82%', once: true },
          })
        })

        const chapters = gsap.utils.toArray<HTMLElement>('.story-chapter')
        const storyTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '.story-shell',
            start: 'top top',
            end: '+=280%',
            pin: '.story-stage',
            scrub: 0.8,
            anticipatePin: 1,
          },
        })

        chapters.forEach((chapter, index) => {
          if (index === 0) return
          storyTimeline
            .to(chapters[index - 1], { autoAlpha: 0, y: -34, duration: 0.35 })
            .fromTo(chapter, { autoAlpha: 0, y: 48 }, { autoAlpha: 1, y: 0, duration: 0.45 })
            .to('.story-logo-3d', { rotation: index % 2 ? 2.5 : -2.5, scale: 1 + index * 0.035, duration: 0.45 }, '<')
            .to('.story-progress-fill', { scaleY: (index + 1) / chapters.length, duration: 0.45 }, '<')
        })

        ScrollTrigger.refresh()
      }, scope)
    })

    return () => {
      cancelled = true
      context?.revert()
    }
  }, [scope])
}

export function useGsapPageHero(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!scope.current || !motionAllowed()) return
    let context: { revert: () => void } | undefined
    let cancelled = false

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([gsapModule, triggerModule]) => {
      if (cancelled || !scope.current) return
      const gsap = gsapModule.gsap
      const ScrollTrigger = triggerModule.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)
      context = gsap.context(() => {
        gsap.from('.page-hero-copy > *', { y: 38, opacity: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out' })
        gsap.to('.page-hero-image', {
          yPercent: 12,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: { trigger: scope.current, start: 'top top', end: 'bottom top', scrub: 0.8 },
        })
      }, scope)
    })

    return () => {
      cancelled = true
      context?.revert()
    }
  }, [scope])
}
