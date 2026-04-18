export default function WhatWeDo() {
  return (
    <section className="whatwedo-section" id="about">
      <div className="whatwedo-frame">
        <span className="whatwedo-eyebrow">What we do</span>
        <h2 className="whatwedo-headline" data-reveal>
          We build the systems <em>your business is missing.</em>
        </h2>
        <p className="whatwedo-body" data-reveal data-reveal-delay="0.08">
          Every company runs on work that a system should be doing. We spend a
          week inside your operation, identify where automation and AI belong,
          and build what's missing. You receive a production system — documented,
          tested, and running — not a recommendation.
        </p>
        <ul className="whatwedo-disciplines" data-reveal data-reveal-delay="0.16">
          <li>Operations</li>
          <li>AI</li>
          <li>Automation</li>
          <li>Custom software</li>
        </ul>
      </div>
    </section>
  )
}
