import LiquidGlass from 'liquid-glass-react'
import rubyLogo from './assets/ruby-logo.png'
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
            <h2><span className="nowrap">Human first</span><br /><span className="nowrap">Automated Systems</span></h2>
            <p className="value-subtext">
              AI systems that automate your operations so your team spends less time on process and more time on what really matters
            </p>

            <div className="glass-pills">
              <div className="glass-pill">
                <span className="glass-pill-num">35+</span>
                <span className="glass-pill-label">CLIENTS&nbsp;SERVED</span>
              </div>
              <div className="glass-pill">
                <span className="glass-pill-num">10K+</span>
                <span className="glass-pill-label">HOURS&nbsp;SAVED</span>
              </div>
              <div className="glass-pill">
                <span className="glass-pill-num">100%</span>
                <span className="glass-pill-label">SHIP&nbsp;RATE</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* § PRACTICE — Offering detail */}
      <section id="services" className="practice">
        <div className="section-frame">
          <header className="section-head">
            <span className="section-label">§ Practice</span>
            <h2 className="section-title">
              Four disciplines.<br />
              <span className="section-title-em">One outcome.</span>
            </h2>
            <p className="section-lede">
              We don't sell decks. We build and ship the systems that make the difference show up on Monday.
            </p>
          </header>

          <ol className="practice-list">
            <li className="practice-row">
              <span className="row-index">01</span>
              <div className="row-name"><h3>Operations<br />Consulting</h3></div>
              <div className="row-body">
                <p className="row-copy">
                  We audit workflows end to end — the loud parts and the quiet bottlenecks nobody measures. Then we redesign the system to remove friction without replacing the people.
                </p>
                <ul className="row-deliverables">
                  <li>Workflow audit &amp; bottleneck map</li>
                  <li>Process redesign playbook</li>
                  <li>KPI &amp; measurement framework</li>
                </ul>
              </div>
            </li>

            <li className="practice-row">
              <span className="row-index">02</span>
              <div className="row-name"><h3>AI<br />Implementation</h3></div>
              <div className="row-body">
                <p className="row-copy">
                  Custom models, agents, and pipelines built for your stack. No off-the-shelf wrappers — we ship production systems that integrate with the tools your team already uses.
                </p>
                <ul className="row-deliverables">
                  <li>Custom LLM applications</li>
                  <li>Agent orchestration</li>
                  <li>Model selection &amp; fine-tuning</li>
                </ul>
              </div>
            </li>

            <li className="practice-row">
              <span className="row-index">03</span>
              <div className="row-name"><h3>Process<br />Automation</h3></div>
              <div className="row-body">
                <p className="row-copy">
                  Repetitive work is a tax your team pays every day. We build automations that run overnight so your people can focus on the work only they can do.
                </p>
                <ul className="row-deliverables">
                  <li>End-to-end workflow automation</li>
                  <li>API &amp; system integrations</li>
                  <li>Monitoring &amp; error handling</li>
                </ul>
              </div>
            </li>

            <li className="practice-row">
              <span className="row-index">04</span>
              <div className="row-name"><h3>Custom<br />Solutions</h3></div>
              <div className="row-body">
                <p className="row-copy">
                  When off-the-shelf software almost fits, it's usually cheaper to build. We design bespoke tools that map to how your business actually works — not how SaaS vendors think it should.
                </p>
                <ul className="row-deliverables">
                  <li>Internal tools &amp; admin panels</li>
                  <li>Custom dashboards &amp; reporting</li>
                  <li>Bespoke client-facing products</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* § WORK — Proof */}
      <section id="work" className="work">
        <div className="section-frame">
          <header className="section-head">
            <span className="section-label">§ Selected Work · 2022—2026</span>
            <h2 className="section-title">
              Real systems.<br />
              <span className="section-title-em">Real numbers.</span>
            </h2>
            <p className="section-lede">
              Every engagement below is a working production system still in use today.
            </p>
          </header>

          <ol className="work-list">
            <li className="work-row">
              <div className="work-meta">
                <span className="work-year">2024</span>
                <span className="work-sector">Health &amp; Wellness</span>
              </div>
              <h3 className="work-client">Real Truth<br />About Health</h3>
              <p className="work-copy">
                An AI-driven content engine and audience intelligence pipeline that replaced four manual roles — while reaching three times more people.
              </p>
              <div className="work-metric">
                <span className="metric-value">70<span className="metric-unit">%</span></span>
                <span className="metric-label">less manual work</span>
              </div>
            </li>

            <li className="work-row">
              <div className="work-meta">
                <span className="work-year">2023</span>
                <span className="work-sector">Wellness Center</span>
              </div>
              <h3 className="work-client">East to West<br />Wellness Center</h3>
              <p className="work-copy">
                Custom scheduling, intake, and patient management unified across three practice locations — one shared operating system.
              </p>
              <div className="work-metric">
                <span className="metric-value">3<span className="metric-unit">×</span></span>
                <span className="metric-label">locations unified</span>
              </div>
            </li>

            <li className="work-row">
              <div className="work-meta">
                <span className="work-year">2025</span>
                <span className="work-sector">Fitness Coaching</span>
              </div>
              <h3 className="work-client">Coach Gabriel<br />Fitness</h3>
              <p className="work-copy">
                Intelligent client tracking and personalized workout automation that scaled a one-on-one practice into a sustainable coaching business.
              </p>
              <div className="work-metric">
                <span className="metric-value">3<span className="metric-unit">×</span></span>
                <span className="metric-label">coaching capacity</span>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* § PRINCIPLES — Credibility */}
      <section id="principles" className="principles">
        <div className="section-frame">
          <header className="section-head principles-head">
            <span className="section-label">§ Principles</span>
            <h2 className="section-title">How we work.</h2>
          </header>

          <ol className="principles-list">
            <li className="principle">
              <span className="principle-num">i.</span>
              <p>
                <em>We ship, we don't suggest.</em> Every engagement ends with systems running in production — not PDFs in a drive.
              </p>
            </li>
            <li className="principle">
              <span className="principle-num">ii.</span>
              <p>
                <em>Humans first.</em> AI should make your team faster, not smaller. We design around the people doing the work.
              </p>
            </li>
            <li className="principle">
              <span className="principle-num">iii.</span>
              <p>
                <em>One week, one result.</em> Our engagements are short and sharp. You'll see the change before the invoice lands.
              </p>
            </li>
            <li className="principle">
              <span className="principle-num">iv.</span>
              <p>
                <em>Boring is good.</em> We pick the simplest tools that work. No hype, no vendor lock-in, no tool-of-the-month syndrome.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Floating Henry button — fixed to bottom-right, always visible */}
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

      {/* § AUDIT — Conversion */}
      <section id="audit" className="audit">
        <div className="audit-rule" aria-hidden="true"></div>
        <div className="audit-frame">
          <span className="audit-label">§ Free Audit</span>
          <h2 className="audit-title">
            Show us your<br />
            <span className="audit-title-em">operations.</span>
          </h2>
          <p className="audit-lede">
            Spend a week with us inside your workflows. We'll hand you a map — every bottleneck, every opportunity, every quick win. No deck. No obligation.
          </p>

          <form className="audit-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="audit-email" className="audit-field-label">Your work email</label>
            <div className="audit-input-group">
              <input
                id="audit-email"
                type="email"
                placeholder="you@company.com"
                className="audit-input"
              />
              <button type="submit" className="audit-submit">
                <span>Request audit</span>
                <span className="audit-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </form>

          <p className="audit-fine">
            We respond within 24 hours · Limit of four audits a month
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
