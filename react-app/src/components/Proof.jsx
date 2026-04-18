import { useEffect, useState } from 'react'

const CASES = [
  {
    year: '2024',
    sector: 'Health & Wellness',
    client: 'Real Truth About Health',
    summary:
      'A custom AI system that drives their entire research library to produce the content their audience wants. Reach tripled.',
    metricValue: '70',
    metricUnit: '%',
    metricLabel: 'Less manual work',
    study: {
      challenge:
        'A 20-year research archive of health interviews and articles was trapped in disparate formats — impossible to reuse, republish, or mine for new audiences. The content team spent 30+ hours/week manually repackaging old material.',
      approach: [
        'Ingested the entire archive into a vector knowledge base with topical + speaker metadata.',
        'Built a custom LLM pipeline that drafts social posts, newsletters, and long-form articles grounded only in the archive.',
        'Paired every draft with source citations so the editorial team can verify in one click.',
        'Deployed an internal dashboard for publishing, scheduling, and performance tracking.',
      ],
      outcome:
        'Weekly output tripled while editorial time dropped by 70%. The team now spends their time on strategy and storytelling, not reformatting.',
      stack: 'OpenAI, Pinecone, Next.js, Supabase',
    },
  },
  {
    year: '2023',
    sector: 'Wellness Center',
    client: 'East to West Wellness',
    summary:
      'Automated voice calls, email follow-ups, and a unified lead pipeline across three locations.',
    metricValue: '4',
    metricUnit: '×',
    metricLabel: 'Qualified leads per week',
    study: {
      challenge:
        'Three clinic locations were running on three different booking tools, spreadsheets, and email threads. Lead response time averaged 36 hours and ~40% of inbound inquiries went cold.',
      approach: [
        'Unified intake across all three locations into a single CRM of record.',
        'Deployed an AI voice agent that answers, qualifies, and books appointments 24/7.',
        'Built an automated follow-up sequence for every lead touchpoint.',
        'Piped every interaction into a single ops dashboard for the leadership team.',
      ],
      outcome:
        'Lead response dropped from 36 hours to under 2 minutes. Booking conversion rose 58% across all locations in the first quarter.',
      stack: 'Twilio, HubSpot, Make, OpenAI Realtime',
    },
  },
  {
    year: '2025',
    sector: 'Fitness Coaching',
    client: 'Coach Gabriel Fitness',
    summary:
      'Smart client tracking that scaled a one-on-one practice into a real business without losing the personal touch.',
    metricValue: '3',
    metricUnit: '×',
    metricLabel: 'Coaching capacity',
    study: {
      challenge:
        'A one-on-one coaching practice was capped at ~25 active clients — beyond that, personalized programming and check-ins broke down. Gabriel was burning out and turning away revenue.',
      approach: [
        'Built a client portal that captures daily metrics, workouts, and adherence data.',
        'Deployed an AI co-coach that drafts personalized program adjustments for Gabriel to review and approve.',
        'Automated check-ins, reminders, and progress reports — fully branded.',
        'Gave Gabriel a single dashboard showing which clients need his attention first.',
      ],
      outcome:
        'Active client capacity 3×ed without hiring. NPS held steady. Gabriel works fewer hours and takes on higher-value engagements.',
      stack: 'Next.js, Supabase, OpenAI, Stripe',
    },
  },
]

function CaseModal({ c, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="case-backdrop" onClick={onClose}>
      <div className="case-modal" onClick={(e) => e.stopPropagation()}>
        <button className="case-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <span className="case-eyebrow">
          {c.year} · {c.sector}
        </span>
        <h3 className="case-title">{c.client}</h3>
        <div className="case-metric">
          {c.metricValue}
          <span className="unit">{c.metricUnit}</span>{' '}
          {c.metricLabel.toLowerCase()}
        </div>
        <p className="case-body">{c.summary}</p>

        <div className="case-section-title">Challenge</div>
        <p className="case-body">{c.study.challenge}</p>

        <div className="case-section-title">What we built</div>
        <ul className="case-list">
          {c.study.approach.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>

        <div className="case-section-title">Outcome</div>
        <p className="case-body">{c.study.outcome}</p>

        <div className="case-section-title">Stack</div>
        <p className="case-body">{c.study.stack}</p>
      </div>
    </div>
  )
}

export default function Proof() {
  const [openCase, setOpenCase] = useState(null)

  return (
    <section className="proof-section" id="work">
      <div className="proof-frame">
        <ol className="proof-list">
          {CASES.map((c, i) => (
            <li
              className="proof-card-wrap"
              key={c.client}
              data-reveal
              data-reveal-delay={`${i * 0.08}`}
            >
              <p className="proof-card-name">{c.client}</p>
              <div
                className="proof-card"
                role="button"
                tabIndex={0}
                onClick={() => setOpenCase(c)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setOpenCase(c)
                  }
                }}
              >
                <div className="proof-card-top">
                  <div className="proof-card-metric">
                    {c.metricValue}
                    <span className="unit">{c.metricUnit}</span>
                  </div>
                  <span className="proof-card-metric-label">{c.metricLabel}</span>
                </div>
                <div className="proof-card-bottom">
                  <p className="proof-card-summary">{c.summary}</p>
                  <span className="proof-card-open">
                    Case study
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M3 6h6M6.5 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      {openCase && <CaseModal c={openCase} onClose={() => setOpenCase(null)} />}
    </section>
  )
}
