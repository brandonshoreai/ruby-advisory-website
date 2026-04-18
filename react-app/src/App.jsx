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
  return (
    <div className="page-shell">
      <SmoothScroll />
      <ScrollReveal />

      <nav>
        <div className="logo">Ruby Advisory</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#audit">Free Audit</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="ruby-container">
          <iframe src="/ruby-ascii-static.html" title="Ruby ASCII Hero" />
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
