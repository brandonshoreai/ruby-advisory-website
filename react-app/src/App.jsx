import LiquidGlass from 'liquid-glass-react'
import './App.css'

function App() {
  return (
    <div className="page-shell">
      <nav>
        <div className="logo">Ruby Advisory</div>
        <ul className="nav-links">
          <li><a href="#value-prop">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#audit">Free Audit</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="ruby-container">
          <iframe src="/ruby-ascii-static.html" title="Ruby ASCII Hero" />
        </div>
      </section>

      <section id="value-prop">
        <div className="value-content">
          <div className="value-left">
            <h2><span className="nowrap">A week's worth of</span><br />work in hours.</h2>
            <p className="value-subtext">
              AI systems that automate your operations so your team spends less time on process and more time on what matters
            </p>

            <div className="glass-pills">
              <div className="glass-pill-slot">
                <LiquidGlass
                  displacementScale={42}
                  blurAmount={0.06}
                  saturation={120}
                  aberrationIntensity={1.25}
                  elasticity={0.18}
                  cornerRadius={999}
                  padding="16px 22px"
                  className="glass-pill"
                >
                  <span aria-hidden="true"></span>
                </LiquidGlass>
              </div>

              <div className="glass-pill-slot">
                <LiquidGlass
                  displacementScale={42}
                  blurAmount={0.06}
                  saturation={120}
                  aberrationIntensity={1.25}
                  elasticity={0.18}
                  cornerRadius={999}
                  padding="16px 22px"
                  className="glass-pill"
                >
                  <span aria-hidden="true"></span>
                </LiquidGlass>
              </div>

              <div className="glass-pill-slot">
                <LiquidGlass
                  displacementScale={42}
                  blurAmount={0.06}
                  saturation={120}
                  aberrationIntensity={1.25}
                  elasticity={0.18}
                  cornerRadius={999}
                  padding="16px 22px"
                  className="glass-pill"
                >
                  <span aria-hidden="true"></span>
                </LiquidGlass>
              </div>
            </div>
          </div>

          <div className="value-right">
            <div className="video-placeholder">
              <p>Video goes here</p>
              <p className="video-note">(Provide video link to embed)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
