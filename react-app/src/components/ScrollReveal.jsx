import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const elements = document.querySelectorAll('[data-reveal]')

    const triggers = []
    elements.forEach((el) => {
      const delay = parseFloat(el.dataset.revealDelay || '0')

      if (prefersReduced) {
        gsap.set(el, { opacity: 1, y: 0, filter: 'blur(0px)' })
        return
      }

      gsap.set(el, { opacity: 0, y: 28, filter: 'blur(6px)' })

      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.95,
            delay,
            ease: 'power3.out',
          })
        },
      })
      triggers.push(st)
    })

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [])

  return null
}
