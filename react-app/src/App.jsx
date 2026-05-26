import { useEffect, useMemo, useRef, useState } from 'react'
import rubyLogo from './assets/ruby-logo.png'
import './App.css'

const A = '/varick-assets/'

const assets = {
  careersHero: `${A}01-cGz0LQNhmLBmFvCdD30isPmCtY-0d977df2.jpg`,
  careersOffice: `${A}02-u0o4FvvBPvv3z1HVH0grZyNmlc-8e2d01b8.png`,
  financeHero: `${A}04-AO8phxLkXEgC9fXn1ZFK1rdnU-63dd318e.jpg`,
  operationsHero: `${A}05-oU0gLreIsWbKNRruw6rOI6Af0do-0a245dad.jpg`,
  salesHero: `${A}06-gDYDO50VR5mntl3uihRNYiE7Ew-c8e45756.jpg`,
  auditImage: `${A}14-fvm7A4Yo6XPB4bQYGudn8MTULng-a4ed45f9.jpg`,
  architectureImage: `${A}15-CcQeXdjVKMaXrxCBVlUR4BPviA-f730a220.jpg`,
  dashboardSmall: `${A}16-LsCvsrsPNR7F3KYryIc5oezavOw-bfbfaf45.png`,
  officeImage: `${A}17-gO7oqH62CdjjxnyUBSU5GJTvFnk-1ee4116b.jpg`,
  dashboardWide: `${A}18-8jSFJjrfGbscAi9PTwPj8IiOA-202ed2a1.png`,
  cityQuote: `${A}36-HiPPfmEMFm4qCcm1xvXRJBxHI-ebaa1dd8.png`,
  deployImage: `${A}37-RohVjH8LD19M5pOyyfxbtGYExSw-8a1cdcc9.jpg`,
}

const integrationIcons = [
  `${A}24-DHMA9bupbmnjXcJs9QxWcGQVEE-cb634b52.svg`,
  `${A}25-Orp8yDUfvlEEyHqeIbWs82X5uDU-3a3aff53.svg`,
  `${A}26-4cimmgp3ejkiGn8hD4Xu9hwH4-527f8e3e.png`,
  `${A}27-euM0gFcfxpMaPDdO9CEHXg4B7xw-ac1df3ae.png`,
  `${A}28-agMFv75BoZfTStbeUHCLgotJM-d1c820ab.svg`,
  `${A}29-4zXM9IZTMSBpezLnIA1j671hHI-f6fa9726.png`,
  `${A}30-oCV9dJrom4u4FLlPbuztw9bZL4-23af5bc7.webp`,
  `${A}31-12SFGiX5sc1z3aT7bDwidIgdLo-75bafd46.png`,
  `${A}32-A4J99mBlpW63AMd4S2bGmOQs-0907fd11.jpg`,
  `${A}33-AGjHVvFf5wE26Mg1xjAAUo5z0oA-7ce15a64.jpeg`,
  `${A}34-1N5DUSsf48ruEe2HTOXH62UgMLE-d4a33035.png`,
  `${A}35-QtqvWpTmHIQqsfG2jJEpkFNRaVU-f25bd24b.png`,
]

const roles = [
  ['PRODUCT', 'AI Engagement Manager', 'SAN FRANCISCO, CA', '$200,000 - $320,000 + EQUITY'],
  ['PRODUCT', 'Forward Deployed AI Strategist', 'SAN FRANCISCO, CA', '$140,000 - $280,000 + EQUITY'],
  ['ENGINEERING', 'Staff Engineer', 'SAN FRANCISCO, CA', '$220,000 - $380,000 + EQUITY'],
  ['ENGINEERING', 'AI Engineer', 'SAN FRANCISCO, CA', '$175,000 - $325,000 + EQUITY'],
  ['ENGINEERING', 'Full Stack Engineer', 'SAN FRANCISCO, CA', '$175,000 - $325,000 + EQUITY'],
  ['ENGINEERING', 'Software Engineering Intern', 'SAN FRANCISCO, CA', '$72,000 - $96,000'],
]

const agentCards = [
  {
    number: 'Agent 01',
    title: 'Finance Ops Agents',
    tone: 'light',
    body: 'Agents built for your finance department after embedding with your team and mapping how work actually moves across AP, AR, close, treasury, and FP&A. Deployed across your existing ERP, expense, and reporting systems. No migration, no new software.',
    capabilities: [
      'AP exception triage and resolution',
      'Cross system reconciliation',
      'Close readiness tracking',
      'Payment timing optimization',
      'Cash position and forecasting',
    ],
    caseHref: '/case-studies-finance',
    demoHref: 'https://demo.varickagents.com/client-001',
  },
  {
    number: 'Agent 02',
    title: 'Revenue Ops Agents',
    tone: 'dark',
    body: 'Agents built for your sales org after mapping every handoff from lead intake through deal desk, forecasting, comp, and customer handoff. Deployed across CRM, call recording, CLM, and enablement tools.',
    capabilities: [
      'Deal orchestration and approval routing',
      'CRM auto-enrichment',
      'Forecast intelligence',
      'Security questionnaire automation',
      'Commission validation',
    ],
    caseHref: '/case-studies-sales',
    demoHref: 'https://demo.varickagents.com/client-002',
  },
  {
    number: 'Agent 03',
    title: 'Logistics Ops Agents',
    tone: 'accent',
    body: 'Agents built for your operations team after mapping exception flows, demand planning, procurement, and warehouse coordination. Deployed across your existing ERP, WMS, and planning systems.',
    capabilities: [
      'Exception detection and routing',
      'Demand sensing',
      'Supplier scorecard unification',
      'Inventory and allocation optimization',
      'Quality defect pattern detection',
    ],
    caseHref: '/case-studies-operations',
    demoHref: 'https://demo.varickagents.com/client-003',
  },
]

const faqItems = [
  ['What happens during the discovery call?', 'We map your highest-friction workflows, identify where an agent could create immediate leverage, and decide whether a deeper audit is worth your time.'],
  ['How much involvement is required from our internal org?', 'We embed with operators and system owners during discovery, then keep feedback loops lightweight. The goal is production output without turning your team into a software project team.'],
  ['How long does it take to deploy an AI agent?', 'Most first deployments take 10 to 16 weeks after audit, depending on system access, approval paths, and the complexity of the workflow being automated.'],
  ['How do you ensure security and governance?', 'Agents run against least-privilege access, log every action, and keep human review where judgment, compliance, or financial exposure requires it.'],
  ['What kinds of tasks can AI agents actually perform?', 'Exception routing, reconciliation, report assembly, workflow monitoring, document intake, approval orchestration, CRM hygiene, forecasting support, and similar cross-system operational work.'],
  ['Can agents be fully customized for our workflows?', 'Yes. The agents are designed around your systems, roles, handoffs, policies, and edge cases rather than a generic template.'],
  ['Can agents work with our existing enterprise tools?', 'Yes. The operating layer connects to your current stack and avoids forcing a rip-and-replace migration.'],
  ['How does pricing work?', 'Engagements are scoped around the workflow, integration surface, and deployment timeline after discovery.'],
]

const caseStudies = {
  '/case-studies-finance': {
    title: 'Finance Department Transformation',
    label: 'CASE STUDY',
    image: assets.financeHero,
    facts: ['$4B REVENUE INDUSTRIAL MANUFACTURER', 'PE-BACKED', '280-PERSON FINANCE ORG'],
    profile: [
      'Revenue: $4B | 3,200 employees | 14 entities across 6 countries',
      'Finance Org: 280 people across AP, AR, Close Management, Treasury, FP&A, Tax',
      'Tech Stack: NetSuite, Oracle (2 entities migrating), Ramp, Concur (phasing out), Snowflake, Excel',
    ],
    challenge: [
      'Finance operations were fragmented across systems and spreadsheets, with high exception rates and long close cycles. The team needed an operating layer that reduced manual reconciliation and surfaced issues early.',
    ],
    audit: [
      'A Forward Deployed Engineer embedded across the full finance org, mapping every handoff between every sub-function. The audit documented 23 distinct workflows across 6 sub-functions and uncovered systemic patterns.',
      'The consistent pattern across all 23 workflows: people spending most of their time gathering and reconciling data across systems, and very little time on actual analysis or judgment.',
    ],
    architectureIntro: 'Not a handful of point solutions. A full finance operating layer spanning every sub-function in the department.',
    architecture: [
      ['Accounts Payable', 'Invoice intake agent ingesting from email, vendor portals, and Ramp, extracting line-item data, matching against POs in NetSuite, and auto-coding GL entries. Exception triage agent classifying exceptions by type, auto-resolving routine cases, and routing genuine problems to the right person.'],
      ['Accounts Receivable', 'Collections prioritization agent scoring outstanding invoices using payment history patterns, customer segment, invoice characteristics, and relationship signals. Cash application agent matching incoming payments across all entities.'],
      ['Close Management', 'Intercompany reconciliation agent matching transactions across NetSuite and Oracle using fuzzy logic on vendor names, amounts, dates, and entity codes. Close readiness agent tracking every close task across all entities in real time.'],
      ['Expense Management', 'Ramp-to-NetSuite sync agent mapping spend categories to GL codes, reconciling card transactions against expense reports, flagging policy violations, and auto-posting clean entries.'],
      ['Treasury', 'Cash position agent pulling real-time balances from bank accounts across currencies, delivering daily cash position by 7am, and running a rolling 13-week cash forecast.'],
      ['FP&A', 'Variance analysis agent auto-generating the monthly variance package as soon as close entries are posted, flagging material variances with root-cause context.'],
      ['Tax and Compliance', 'Quarterly estimate assembly agent pulling entity-level P&Ls, applying jurisdictional tax rates, and generating the consolidated estimate workbook with traceability.'],
    ],
    implementation: ['Month-by-month focus and results.', 'Weeks 1-4: AP/AR intake, exception taxonomy, and close readiness. Weeks 5-10: reconciliation and cash position. Weeks 11-16: reporting, compliance logging, and rollout.'],
    results: [
      ['70%', 'less manual reconciliation'],
      ['16', 'roles redeployed'],
      ['$11.4M+', 'year one value'],
    ],
    roi: 'ROI: $11.4-$14.7M Year One Value',
    roiBody: 'All value estimates use conservative assumptions: fully-loaded employee cost of $130-160K, year-one realization discounted for ramp, and revenue attribution held to directly measurable outcomes.',
    impact: 'Finance agents flagged procurement workflow problems in business units, fed real-time margin data into sales deal profitability models, and became the connective tissue other departments pulled from.',
  },
  '/case-studies-sales': {
    title: 'Sales Department Transformation',
    label: 'CASE STUDY',
    image: assets.salesHero,
    facts: ['$2.8B ARR ENTERPRISE SAAS', 'PRE-IPO', '420-PERSON SALES ORG'],
    profile: [
      'Revenue: $2.8B ARR | 4,600 employees | Fortune 500 buyer base',
      'Sales Org: 420 people across AEs, SDRs, Deal Desk, Sales Ops, Enablement',
      'Tech Stack: Salesforce Enterprise, Gong, Clari, DocuSign CLM, Slack, CPQ, Tableau, Highspot',
    ],
    challenge: [
      'Average enterprise deal was $1.2M ACV with a 9-month sales cycle. Reps were strong closers but spent 38% of their time on internal work: updating Salesforce, chasing deal desk approvals, routing contracts through legal, reconciling comp disputes, and prepping forecast calls.',
      'Deals did not die because the buyer said no. They died because internal process took so long that the buyer budget cycle moved on.',
    ],
    audit: [
      'FDE embedded across the full sales org, shadowing enterprise AEs, sitting with the deal desk, and mapping every touchpoint from lead to closed-won to CS handoff.',
      'Systemic patterns showed the same problem across the funnel: strong commercial work slowed by internal coordination and stale system data.',
    ],
    architectureIntro: 'Full sales operating layer from lead intake to customer handoff.',
    architecture: [
      ['Lead Management', 'Lead scoring agent enriching inbound leads with firmographic, technographic, and intent data, scoring against ICP, and routing to the right SDR based on territory, segment, and capacity.'],
      ['Pipeline and CRM Intelligence', 'CRM enrichment agent auto-updating Salesforce from Gong transcripts, email threads, calendar events, and Slack conversations. Pipeline hygiene agent identifying stale deals and missing fields.'],
      ['Deal Desk Orchestration', 'Deal routing agent monitoring every open enterprise deal, tracking position in the approval chain, auto-triggering next steps, and escalating stalled approvals after SLA breach.'],
      ['Security and Compliance', 'Security questionnaire agent matching questions against prior responses and auto-filling the standard majority. RFP response agent pulling relevant specs and certifications.'],
      ['Forecasting', 'Forecast intelligence agent building weekly forecasts from actual deal signals rather than rep self-reporting.'],
      ['Enablement', 'Content recommendation agent surfacing relevant assets based on deal context and flagging stale content. Win/loss analysis agent ingesting transcripts to identify recurring patterns.'],
      ['Comp and Operations', 'Commission calculation agent tracing every closed deal through CPQ, DocuSign, and NetSuite, validating against comp plan rules.'],
      ['Customer Handoff', 'CS transition agent assembling a complete implementation kickoff package on the day the deal closes.'],
    ],
    implementation: ['Month-by-month focus and results.', 'Weeks 1-4: lead and CRM hygiene. Weeks 5-10: deal desk and security response. Weeks 11-16: forecasting, comp validation, and handoff automation.'],
    results: [
      ['31%', 'faster enterprise cycle'],
      ['70%', 'standard security responses automated'],
      ['$16.5M+', 'year one value'],
    ],
    roi: 'ROI: $16.5-$24.5M Year One Value',
    roiBody: 'Revenue attribution uses conservative methodology: cycle compression value calculated from historical pipeline velocity and conversion rates, with estimates discounted for year-one realization.',
    impact: 'Sales agents fed closed-deal data into finance revenue recognition, surfaced finance margin data inside deal orchestration, and fed CS handoff context back into win/loss analysis.',
  },
  '/case-studies-operations': {
    title: 'Operations Department Transformation',
    label: 'CASE STUDY',
    image: assets.operationsHero,
    facts: ['$3.5B REVENUE CONSUMER GOODS MANUFACTURER', '9 DCS', '340 SUPPLIERS'],
    profile: [
      'Revenue: $3.5B | 5,200 employees | 380-person operations org',
      'Operations Org: Supply chain, demand planning, warehouse ops, procurement, inbound logistics, quality, returns',
      'Tech Stack: SAP ECC, Manhattan WMS, Blue Yonder, Ariba, custom supplier portal, Outlook, Excel',
    ],
    challenge: [
      'Supply chain exception management was entirely manual. When a disruption hit, the ops team had to check SAP, Manhattan, and Blue Yonder, then call or email multiple people to coordinate the response.',
      'The ops team was the integration layer between systems. When someone quit, their institutional knowledge walked out with them.',
    ],
    audit: [
      'FDE embedded across the full operations org, shadowing the daily war room, visiting distribution centers, and spending a week with procurement watching PO flows.',
      'The audit mapped 47 distinct exception types across all sub-functions and separated repeatable routing from cases requiring human judgment.',
    ],
    architectureIntro: 'Full operations layer spanning every sub-function from demand signal to customer delivery.',
    architecture: [
      ['Exception Management', 'Exception detection agent monitoring SAP, Manhattan, and Blue Yonder for disruption signals and creating structured exception tickets with full pre-assembled context.'],
      ['Demand Planning', 'Demand sensing agent running continuous forecast updates by correlating internal signals with external signals like weather, port congestion, and raw material pricing.'],
      ['Procurement', 'Intelligent PO agent validating MRP-suggested quantities against real-time demand signals, supplier lead time variability, and open PO status.'],
      ['Warehouse and Logistics', 'Inbound visibility agent pulling real-time shipment status from carrier APIs and supplier portals, feeding into labor planning and allocation optimization.'],
      ['Quality Management', 'Quality signal agent connecting quality hold data to supplier scorecards, identifying trending defect patterns, and triggering corrective action requests.'],
    ],
    implementation: ['Month-by-month focus and results.', 'Weeks 1-4: exception taxonomy and disruption response. Weeks 5-10: demand and procurement. Weeks 11-16: warehouse allocation, quality, and supplier scorecards.'],
    results: [
      ['2-4 days', 'response cut to hours'],
      ['$9.3M', 'working capital released'],
      ['$10.1M+', 'recurring annual value'],
    ],
    roi: 'ROI: $10.1-$13.7M Recurring + $9.3M One-Time',
    roiBody: 'This engagement produced both a one-time working capital release and ongoing annual value. The working capital release is realized once, while recurring savings grow as agent accuracy improves.',
    impact: 'Ops agents fed supplier reliability scores into finance AP prioritization. Finance fed spend concentration risk back into supplier strategy. Demand sensing data fed into sales forecasting.',
  },
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  useRevealEffects(path)

  if (path === '/careers') {
    return (
      <PageShell>
        <CareersPage />
      </PageShell>
    )
  }

  if (caseStudies[path]) {
    return (
      <PageShell>
        <CaseStudyPage study={caseStudies[path]} />
      </PageShell>
    )
  }

  return (
    <PageShell>
      <RubyHero />
      <HomePage />
    </PageShell>
  )
}

function useRevealEffects(routeKey) {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal, .reveal-line, .reveal-fast')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [routeKey])

  useEffect(() => {
    if (!window.location.hash) return

    const timeout = window.setTimeout(() => {
      document.querySelector(window.location.hash)?.scrollIntoView({ block: 'start' })
    }, 120)

    return () => window.clearTimeout(timeout)
  }, [routeKey])
}

function PageShell({ children }) {
  return (
    <div className="page-shell">
      <Header />
      {children}
    </div>
  )
}

function Header() {
  return (
    <nav className="ruby-nav" aria-label="Primary">
      <a className="ruby-logo-link" href="/#ruby-hero">
        <span className="ruby-logo-mark">R</span>
        <span>Ruby Advisory</span>
      </a>
      <ul className="nav-links">
        <li><a href="/#features">About</a></li>
        <li><a href="/#agents">Services</a></li>
        <li><a href="/#case-studies">Work</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/#book">Contact</a></li>
      </ul>
    </nav>
  )
}

function RubyHero() {
  return (
    <section className="hero" id="ruby-hero" aria-label="Ruby Advisory opening animation">
      <div className="ruby-container">
        <iframe src="/ruby-ascii-static.html" title="Ruby ASCII Hero" />
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main className="varick-clone">
      <SiteHero />
      <LogoStrip label="Built by engineers from" logos={['Google', 'OpenAI', 'Meta', 'amazon', 'Palantir', 'TESLA']} />
      <Features />
      <NativeOrg />
      <LogoStrip label="Partnering with the Industry&apos;s Best" logos={['NVIDIA', 'Microsoft', 'Databricks', 'Anthropic', 'Snowflake']} />
      <DeploymentBenefits />
      <Systems />
      <Agents />
      <QuoteBand />
      <BookSection />
      <FaqSection />
      <FooterCta />
      <Footer />
    </main>
  )
}

function SiteHero() {
  return (
    <section className="site-hero" id="hero-section">
      <div className="hero-copy reveal">
        <h1>Transform Your Enterprise With AI</h1>
        <p>
          Custom AI implementations tailored to your business that automate entire
          departments from the inside, end to end. No generalized software that only
          does half the job. No 18-month timelines or migrations required.
        </p>
      </div>
      <div className="hero-actions reveal-fast">
        <a className="tile-link accent" href="#book">Book a Call <span>↗</span></a>
        <a className="tile-link dark" href="#case-studies">Case Studies <span>↗</span></a>
      </div>
      <ParticleField className="hero-particles" color="rgba(32,32,32,.38)" density={25} wave />
    </section>
  )
}

function LogoStrip({ label, logos }) {
  return (
    <section className="logo-strip reveal-line" aria-label={label.replace('&apos;', "'")}>
      <p dangerouslySetInnerHTML={{ __html: label }} />
      <div className="logo-row">
        {logos.map((logo) => <span key={logo}>{logo}</span>)}
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="center-heading reveal">
        <h2>We Don&apos;t Just Automate Tasks.<br /><span>We Transform Departments.</span></h2>
        <p>
          A single automation that answers emails isn&apos;t transformation. We architect
          agent systems that handle end-to-end workflows - from intake to execution
          to reporting - replacing entire process chains, not individual steps.
        </p>
      </div>
      <div className="feature-grid">
        <FeatureCard
          label="STEP 1"
          title="AI Opportunity Audit"
          text="We conduct a structured audit of how work moves through your organization across teams, systems, and decision points. The goal is to identify where AI can reduce operational overhead, accelerate execution, or replace manual coordination entirely."
          image={assets.auditImage}
          href="https://audit.varickagents.com/demo"
          large
        />
        <FeatureCard
          label="STEP 2"
          title="Process Architecture & Redesign"
          text="Ruby designs and builds the AI agent system that will execute the workflow - integrating it with the enterprise tools, data, and operational logic that power the process. You're kept in the loop the entire time."
          image={assets.architectureImage}
        />
        <FeatureCard
          label="STEP 3"
          title="Production Deployment"
          text="Ruby deploys the AI agent system into the enterprise stack, connecting it to live systems and workflows so it can begin executing operational work in production. Agents are built on top of your existing software."
          image={assets.officeImage}
        />
        <FeatureCard
          label="AUTONOMOUS SYSTEM"
          title="Agent System Optimization"
          text="After deployment, Ruby improves how the agent operates over time - strengthening its decision logic, increasing reliability, and extending it into new operational responsibilities."
          image={assets.dashboardWide}
          imageOverlay={assets.dashboardSmall}
          wide
        />
      </div>
    </section>
  )
}

function FeatureCard({ label, title, text, image, imageOverlay, href, large, wide }) {
  const className = ['feature-card', large ? 'feature-card-large' : '', wide ? 'feature-card-wide' : ''].join(' ')
  return (
    <article className={`${className} reveal`}>
      <img src={image} alt="" />
      <div className="feature-card-shade" />
      <div className="feature-card-content">
        <span className="mono-badge">{label}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        {href && <a className="button light" href={href}>Case Study <span>↗</span></a>}
      </div>
      {imageOverlay && <img className="dashboard-overlay" src={imageOverlay} alt="" />}
    </article>
  )
}

function NativeOrg() {
  return (
    <section className="native-section" id="how-it-works">
      <div className="native-copy reveal">
        <h2>Only AI Native<br /><span>Orgs Will Survive</span></h2>
        <p>AI agents don&apos;t just automate tasks - they remove operational bottlenecks that slow organizations down.</p>
      </div>
      <FlowLines />
      <div className="native-steps">
        {[
          ['.01', 'Reduce Operational Overhead', 'AI agents remove manual coordination, approvals, and repetitive operational work across systems.'],
          ['.02', 'Accelerate Execution', 'Processes that once required multiple team handoffs can now execute continuously.'],
          ['.03', 'Scale Without Hiring', 'Operational output increases without adding headcount or new coordination layers.'],
        ].map(([number, title, text]) => (
          <article className="native-step reveal" key={number}>
            <strong>{number}</strong>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
        <a className="button accent" href="#book">Book a Call <span>↗</span></a>
      </div>
    </section>
  )
}

function FlowLines() {
  const paths = useMemo(() => Array.from({ length: 12 }, (_, i) => {
    const spread = (i - 5.5) * 32
    return `M0 220 C 210 ${220 + spread * 0.12}, 430 ${220 + spread * 1.15}, 760 ${220 + spread * 2.1}`
  }), [])

  return (
    <svg className="flow-lines" viewBox="0 0 820 460" aria-hidden="true">
      {paths.map((d, i) => (
        <path key={d} d={d} style={{ animationDelay: `${i * 90}ms` }} />
      ))}
    </svg>
  )
}

function DeploymentBenefits() {
  const items = [
    ['Finance Operations', 'Agents handle accounts payable, accounts receivable, card reconciliation, runways and forecasting, and more. Close your books in record time without the overhead.'],
    ['Procurement', 'Agents manage vendor onboarding, purchasing approvals, contract coordination, and supplier communication. Cut procurement cycle times and stop losing money to off-contract spend.'],
    ['Revenue Operations', 'Agents handle CRM hygiene, deal desk approvals, pipeline reporting, and forecast assembly. Keep your sales data clean and your reps selling instead of doing sales operations work.'],
    ['Compliance & Risk', 'Agents track regulatory deadlines, assemble audit documentation, monitor policy adherence, and flag exceptions before they become findings. Stay audit-ready without the manual overhead.'],
  ]

  return (
    <section className="benefits-section">
      <div className="center-heading reverse reveal">
        <h2>Where Our Agents Are Deployed</h2>
        <p>Ruby deploys AI agent systems inside enterprise organizations and large teams across the operational functions that run the business.</p>
      </div>
      <div className="benefit-grid">
        {items.map(([title, text]) => (
          <article className="benefit reveal" key={title}>
            <span className="small-square" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <span className="mono-badge outline">...AND 300+ ADDITIONAL ENTERPRISE WORKFLOWS</span>
    </section>
  )
}

function Systems() {
  return (
    <section className="systems-section">
      <div className="grid-floor" aria-hidden="true" />
      <div className="systems-copy reveal">
        <span className="mono-badge outline dark-text">FULLY INTEGRATED</span>
        <h2>Built to Work<br />With Your Systems</h2>
        <p>
          Ruby operates across your existing tools, connecting data, workflows,
          and systems into a single operational layer. We&apos;ll never force you to
          migrate off your systems, but we&apos;ll help you through the process if you&apos;d like.
        </p>
        <a className="button accent" href="#book">Book a Call <span>↗</span></a>
      </div>
      <div className="integrations-panel reveal">
        {integrationIcons.map((src, index) => (
          <span className="integration-orb" style={{ '--delay': `${index * -0.18}s` }} key={src}>
            <img src={src} alt="" />
          </span>
        ))}
      </div>
    </section>
  )
}

function Agents() {
  return (
    <section className="agents-section" id="agents">
      <span className="anchor-target" id="case-studies" aria-hidden="true" />
      <div className="section-heading split reveal">
        <h2>Ruby Advisory Live in Production</h2>
        <p>These are real AI agents deployed inside enterprise systems, executing work the old operating model left between teams.</p>
      </div>
      <div className="agent-stack">
        {agentCards.map((agent) => <AgentCard agent={agent} key={agent.title} />)}
      </div>
    </section>
  )
}

function AgentCard({ agent }) {
  return (
    <article className={`agent-card ${agent.tone}`}>
      <div className="agent-intro">
        <div className="card-dots"><span /><span /><span /></div>
        <p>{agent.number}</p>
        <h3>{agent.title}</h3>
        <p>{agent.body}</p>
      </div>
      <div className="agent-capabilities">
        <span>CAPABILITIES</span>
        {agent.capabilities.map((capability) => (
          <p key={capability}><b aria-hidden="true">✦</b>{capability}</p>
        ))}
      </div>
      <div className="agent-actions">
        <a className="button contrast" href={agent.caseHref}>View Case Study <span>↗</span></a>
        <a className="button secondary" href={agent.demoHref}>View Demo <span>↗</span></a>
      </div>
    </article>
  )
}

function QuoteBand() {
  return (
    <section className="quote-band">
      <img src={assets.cityQuote} alt="" />
      <div className="quote-overlay" />
      <div className="quote-content reveal">
        <span>”</span>
        <h2>&quot;Enterprise operations were designed for human coordination. The next generation will be designed for intelligent execution.&quot;</h2>
        <p>- Ruby Advisory</p>
      </div>
    </section>
  )
}

function BookSection() {
  return (
    <section className="book-section" id="book">
      <div className="center-heading reveal">
        <h2>Explore what AI agents could look like inside your company</h2>
        <p>A short conversation with the Ruby team to identify operational workflows where our agents could deliver immediate impact.</p>
      </div>
      <form className="booking-card reveal" onSubmit={(event) => event.preventDefault()}>
        <header>
          <h3>Ruby Advisory | Book Discovery Call</h3>
          <p>Please fill in relevant information that will allow us to route your call appropriately.</p>
        </header>
        <label>Your Name<input type="text" /></label>
        <label>Your Role<input type="text" /></label>
        <label>Work Email<input type="email" /></label>
        <label>Company Name<input type="text" /></label>
        <label>Company Annual Revenue<select><option /></select></label>
        <button type="submit">Continue</button>
      </form>
    </section>
  )
}

function FaqSection() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq-section" id="faq">
      <h2 className="reveal">Frequently Asked Questions.</h2>
      <div className="faq-grid">
        {faqItems.map(([question, answer], index) => (
          <button
            className={`faq-item ${open === index ? 'open' : ''}`}
            key={question}
            type="button"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span>{question}</span>
            <b>+</b>
            <p>{answer}</p>
          </button>
        ))}
      </div>
    </section>
  )
}

function FooterCta() {
  return (
    <section className="footer-cta">
      <a className="cta-card solid" href="#book">
        <ParticleField color="rgba(255,255,255,.7)" density={32} />
        <span><i />SCHEDULE DISCOVERY</span>
        <h2>Deploy Your<br />First AI Agent</h2>
        <b>Book a Call <span>↗</span></b>
      </a>
      <a className="cta-card image" href="https://demo.varickagents.com/">
        <img src={assets.deployImage} alt="" />
        <span><i />CASE STUDIES</span>
        <h2>Watch Ruby<br />Advisory in Action</h2>
        <b>View Deployments <span>↗</span></b>
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="footer-logo"><img src={rubyLogo} alt="" />Ruby Advisory</span>
        <p>Ruby designs and deploys AI agent systems that execute operational workflows inside enterprise organizations.</p>
      </div>
      <div className="footer-nav">
        <a href="/">1.1&nbsp;&nbsp; HOME</a>
        <a href="/#features">1.2&nbsp;&nbsp; HOW IT WORKS</a>
        <a href="/careers">1.3&nbsp;&nbsp; CAREERS</a>
        <a href="/#case-studies">1.4&nbsp;&nbsp; CASE STUDIES</a>
        <a href="/#faq">1.5&nbsp;&nbsp; FAQ</a>
      </div>
      <div className="footer-nav">
        <a href="https://x.com/varickagents">2.1&nbsp;&nbsp; @RUBYADVISORY ON X</a>
        <a href="https://www.linkedin.com/company/varick-agents/">2.2&nbsp;&nbsp; LINKEDIN</a>
      </div>
      <p className="legal">© 2026 Ruby Advisory. All rights reserved. Company names and logos are trademarks of their respective owners.</p>
    </footer>
  )
}

function CareersPage() {
  return (
    <main className="subpage careers-page">
      <PageHero
        label="CAREERS"
        title="Everything changes when the right people focus on what matters."
        image={assets.careersHero}
        cta="SEE OPEN POSITIONS"
        href="#open-roles"
      />
      <section className="white-panel career-intro reveal">
        <span className="mono-badge outline dark-text">WHO WE ARE</span>
        <h2>Ruby Advisory is changing how companies operate.</h2>
        <p>Ruby is an applied AI company that replaces the manual work employees do between systems at enterprise companies. We build AI agents that handle exception routing, cross-system coordination, data reconciliation, and the hundreds of operational tasks that are too complex for traditional automation but too repetitive for your best people.</p>
        <p>We embed engineers directly inside client organizations generating billions in revenue and deploy production AI systems that run inside their existing tools. No rip-and-replace. No demos that never ship.</p>
        <span className="career-mark"><img src={rubyLogo} alt="" />Ruby Advisory</span>
      </section>
      <section className="roles-section" id="open-roles">
        <div className="section-heading split reveal">
          <h2>Open roles<br /><span>We&apos;re always seeking talented individuals.</span></h2>
          <p>Come build the operating layer for AI-native enterprises.</p>
        </div>
        <div className="role-list">
          {roles.map(([team, title, location, salary]) => (
            <a className="role-row" href="https://jobs.ashbyhq.com/Varick-Agents/" key={title}>
              <span>{team}</span>
              <h3>{title}</h3>
              <span>{location}</span>
              <span>{salary}</span>
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>
      <FooterCta />
      <Footer />
    </main>
  )
}

function PageHero({ label, title, image, cta, href }) {
  return (
    <section className="page-hero reveal">
      <img src={image} alt="" />
      <div className="image-wash" />
      <div className="page-hero-content">
        <span className="mono-badge">{label}</span>
        <h1>{title}</h1>
        {cta && <a className="button black" href={href}>{cta}</a>}
      </div>
    </section>
  )
}

function CaseStudyPage({ study }) {
  return (
    <main className="subpage case-page">
      <PageHero label={study.label} title={study.title} image={study.image} />
      <div className="case-facts">
        {study.facts.map((fact) => <span key={fact}>{fact}</span>)}
      </div>
      <CaseBlock title="Company Profile" body={study.profile} />
      <CaseBlock title="The Challenge" body={study.challenge} />
      <CaseBlock title="The Audit (4 Weeks)" body={study.audit} badge="Systemic patterns" />
      <section className="case-block reveal">
        <h2>The Architecture</h2>
        <p>{study.architectureIntro}</p>
        <div className="architecture-grid">
          {study.architecture.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CaseBlock title="Implementation (4 months)" body={study.implementation} />
      <section className="case-block reveal">
        <h2>Results</h2>
        <div className="result-grid">
          {study.results.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>
      <CaseBlock title={study.roi} body={[study.roiBody]} badge="Value Drivers" />
      <CaseBlock title="Cross-Department Impact" body={[study.impact]} />
      <FooterCta />
      <Footer />
    </main>
  )
}

function CaseBlock({ title, body, badge }) {
  return (
    <section className="case-block reveal">
      <h2>{title}</h2>
      {body.map((item) => <p key={item}>{item}</p>)}
      {badge && <span className="mono-badge outline dark-text">{badge}</span>}
    </section>
  )
}

function ParticleField({ className = '', color = 'rgba(255,255,255,.8)', density = 18, wave = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const context = canvas.getContext('2d')
    let frame = 0
    let width = 0
    let height = 0
    let animationId

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width * window.devicePixelRatio))
      height = Math.max(1, Math.floor(rect.height * window.devicePixelRatio))
      canvas.width = width
      canvas.height = height
    }

    const draw = () => {
      frame += 0.012
      context.clearRect(0, 0, width, height)
      context.fillStyle = color

      const step = Math.max(12, density)
      for (let x = -step; x < width + step; x += step) {
        const drift = Math.sin(frame + x * 0.003) * step * 0.8
        const baseY = wave
          ? height * 0.38 + Math.sin(frame * 1.8 + x * 0.012) * height * 0.12
          : height * 0.5 + Math.sin(frame + x * 0.01) * height * 0.42

        for (let row = 0; row < (wave ? 6 : 3); row += 1) {
          const y = baseY + row * step * 1.4 + drift + Math.sin(frame + row) * 5
          const opacity = wave ? Math.max(0.08, 0.55 - row * 0.08) : 0.55
          context.globalAlpha = opacity
          context.fillRect(x + Math.sin(frame + row * 2) * 4, y, 2 * window.devicePixelRatio, 2 * window.devicePixelRatio)
        }
      }

      context.globalAlpha = 1
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [color, density, wave])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}

export default App
