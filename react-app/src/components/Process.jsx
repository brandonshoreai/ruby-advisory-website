import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'We learn your business.',
    body: 'A week inside your operation. We sit with your team, observe how work actually moves, and document what we find.',
  },
  {
    num: '02',
    title: 'We find what\u2019s hidden.',
    body: 'The bottlenecks and inefficiencies that cost you time but never show up on a report — we surface them.',
  },
  {
    num: '03',
    title: 'We design the fix.',
    body: 'A clear plan in plain English. What we\u2019ll build, what it will do, and how your operation changes when it ships.',
  },
  {
    num: '04',
    title: 'We build and hand it over.',
    body: 'We develop, deploy, and stabilize the system. You receive working software, full documentation, and a team that stays through adoption.',
  },
]

export default function Process() {
  const listRef = useRef(null)
  const roadRef = useRef(null)
  const [pathD, setPathD] = useState('')
  const [viewBox, setViewBox] = useState('0 0 1000 800')

  useLayoutEffect(() => {
    const compute = () => {
      const list = listRef.current
      if (!list) return
      const listRect = list.getBoundingClientRect()
      const W = listRect.width
      const H = listRect.height
      const dots = list.querySelectorAll('.process-step-dot')
      if (!dots.length) return
      const points = []
      dots.forEach((d) => {
        const r = d.getBoundingClientRect()
        points.push({
          x: r.left - listRect.left + r.width / 2,
          y: r.top - listRect.top + r.height / 2,
        })
      })
      let d = `M ${points[0].x} ${points[0].y}`
      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1]
        const p1 = points[i]
        const midY = (p0.y + p1.y) / 2
        const c1x = p0.x
        const c1y = midY
        const c2x = p1.x
        const c2y = midY
        d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p1.x} ${p1.y}`
      }
      setPathD(d)
      setViewBox(`0 0 ${W} ${H}`)
    }
    compute()
    const ro = new ResizeObserver(compute)
    if (listRef.current) ro.observe(listRef.current)
    window.addEventListener('resize', compute)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', compute)
    }
  }, [])

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const onScroll = () => {
      const rect = list.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.7
      const end = vh * 0.3
      const total = rect.height + (start - end)
      const progressed = start - rect.top
      const p = Math.max(0, Math.min(1, progressed / total))
      if (roadRef.current) roadRef.current.style.setProperty('--p', p)

      const dots = list.querySelectorAll('.process-step')
      const count = dots.length
      dots.forEach((step, i) => {
        const threshold = (i + 0.5) / count
        step.classList.toggle('is-reached', p >= threshold)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathD])

  return (
    <section className="process-section" id="process">
      <div className="process-frame">
        <header className="process-head" data-reveal>
          <span className="process-eyebrow">How we work</span>
          <h2 className="process-headline">
            Four steps from diagnosis <em>to running system.</em>
          </h2>
        </header>
        <ol className="process-list" ref={listRef}>
          <svg
            className="process-road"
            ref={roadRef}
            viewBox={viewBox}
            preserveAspectRatio="xMinYMin meet"
            aria-hidden="true"
          >
            {pathD && <path className="process-road-bg" d={pathD} pathLength="1" />}
            {pathD && <path className="process-road-fg" d={pathD} pathLength="1" />}
          </svg>
          {STEPS.map((step, i) => (
            <li
              className="process-step"
              key={step.num}
              data-reveal
              data-reveal-delay={`${i * 0.1}`}
            >
              <span className="process-step-dot" aria-hidden="true" />
              <div className="process-step-inner">
                <p className="process-step-num">{step.num}</p>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-copy">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
