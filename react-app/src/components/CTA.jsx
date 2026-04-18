import { useState } from 'react'

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="cta-section" id="audit">
      <div className="cta-frame">
        <div className="cta-head" data-reveal>
          <span className="cta-eyebrow">Free audit</span>
          <h2 className="cta-headline">Request a free audit.</h2>
          <p className="cta-lede">
            One week inside your workflows. You receive a complete operational
            map — every bottleneck, every opportunity, every quick win.
          </p>
        </div>

        <form className="cta-form" onSubmit={onSubmit} data-reveal data-reveal-delay="0.12">
          <div className="cta-field">
            <label htmlFor="cta-name">Your name</label>
            <input
              id="cta-name"
              name="name"
              type="text"
              value={form.name}
              onChange={onChange}
              placeholder="Jane Merrick"
              required
            />
          </div>

          <div className="cta-field">
            <label htmlFor="cta-email">Work email</label>
            <input
              id="cta-email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="jane@company.com"
              required
            />
          </div>

          <div className="cta-field">
            <label htmlFor="cta-message">What's on your mind?</label>
            <textarea
              id="cta-message"
              name="message"
              rows={3}
              value={form.message}
              onChange={onChange}
              placeholder="Tell us about your business and what you're trying to solve."
            />
          </div>

          <button type="submit" className="cta-submit" disabled={submitted}>
            <span>{submitted ? 'Request received' : 'Request audit'}</span>
            <span className="cta-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>

          <p className="cta-fine">
            We respond within 24 hours. Four audits per month.
          </p>
        </form>
      </div>
    </section>
  )
}
