const CASES = [
  {
    year: '2024',
    sector: 'Health & Wellness',
    client: 'Real Truth About Health',
    body: 'A custom AI system that draws from their entire research library to produce the content their audience wants. Reach tripled.',
    metricValue: '70',
    metricUnit: '%',
    metricLabel: 'Less manual work',
  },
  {
    year: '2023',
    sector: 'Wellness Center',
    client: 'East to West Wellness',
    body: 'Automated voice calls, email follow-ups, and lead pipeline — unified across three locations into one operating system.',
    metricValue: '3',
    metricUnit: '×',
    metricLabel: 'Locations, one system',
  },
  {
    year: '2025',
    sector: 'Fitness Coaching',
    client: 'Coach Gabriel Fitness',
    body: 'Smart client tracking that scaled a one-on-one practice into a real business without losing the personal touch.',
    metricValue: '3',
    metricUnit: '×',
    metricLabel: 'Coaching capacity',
  },
]

export default function Proof() {
  return (
    <section className="proof-section" id="work">
      <div className="proof-frame">
        <header className="proof-head" data-reveal>
          <span className="proof-eyebrow">Recent work</span>
          <h2 className="proof-headline">
            Real results. <em>Real businesses.</em>
          </h2>
          <p className="proof-lede">
            Every engagement below is a system still running in production today.
          </p>
        </header>

        <ol className="proof-list">
          {CASES.map((c, i) => (
            <li className="proof-row" key={c.client} data-reveal data-reveal-delay={`${i * 0.08}`}>
              <div className="proof-meta">
                <span className="proof-year">{c.year}</span>
                <span className="proof-sector">{c.sector}</span>
              </div>
              <h3 className="proof-client">{c.client}</h3>
              <p className="proof-body">{c.body}</p>
              <div className="proof-metric">
                <span className="proof-metric-value">
                  {c.metricValue}
                  <span className="proof-metric-unit">{c.metricUnit}</span>
                </span>
                <span className="proof-metric-label">{c.metricLabel}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
