import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Sync Lenis scroll events → ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Run Lenis on GSAP's unified ticker (shared RAF loop)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Let Lenis be the source of truth for scroll position
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
