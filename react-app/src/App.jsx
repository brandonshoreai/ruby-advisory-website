import { useEffect, useRef, useState } from 'react'
import LiquidGlass from 'liquid-glass-react'
import rubyLogo from './assets/ruby-logo.png'
import SmoothScroll from './components/SmoothScroll'
import ScrollReveal from './components/ScrollReveal'
import LogoMarquee from './components/LogoMarquee'
import WhatWeDo from './components/WhatWeDo'
import Proof from './components/Proof'
import Process from './components/Process'
import CTA from './components/CTA'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)
  const asciiRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    const send = () => {
      asciiRef.current?.contentWindow?.postMessage(
        { type: 'ruby-ascii-theme', dark },
        '*',
      )
    }
    send()
    const iframe = asciiRef.current
    iframe?.addEventListener('load', send)
    return () => iframe?.removeEventListener('load', send)
  }, [dark])

  const toggleDark = () => setDark((d) => !d)

  return (
    <div className="page-shell">
      <SmoothScroll />
      <ScrollReveal />

      <nav>
        <div className="logo-group">
          <button
            className="logo-mark"
            onClick={toggleDark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <polygon points="16,4 27,12 22,27 10,27 5,12" fill="currentColor" />
              <polygon points="16,4 27,12 22,12 16,12" fill="#d92a4a" opacity="0.85" />
              <polygon points="5,12 10,27 16,12" fill="#7a0b20" opacity="0.75" />
            </svg>
          </button>
          <div className="logo">Ruby Advisory</div>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#audit">Free Audit</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="ruby-container">
          <iframe
            ref={asciiRef}
            src="/ruby-ascii-static.html"
            title="Ruby ASCII Hero"
          />
        </div>
      </section>

      <LogoMarquee />
      <WhatWeDo />
      <Proof />
      <Process />
      <CTA />

      <div className="henry-button">
        <LiquidGlass
          displacementScale={64}
          blurAmount={0.1}
          saturation={130}
          aberrationIntensity={2}
          elasticity={0.35}
          cornerRadius={100}
          padding="8px 16px"
          onClick={() => console.log('Button clicked!')}
        >
          <span className="henry-button-text">
            <img src={rubyLogo} alt="" className="henry-button-logo" />
            Call Ruby
          </span>
        </LiquidGlass>
      </div>
    </div>
  )
}

export default App
