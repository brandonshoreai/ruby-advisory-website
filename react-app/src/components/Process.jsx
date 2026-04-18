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
  return (
    <section className="process-section" id="process">
      <div className="process-frame">
        <header className="process-head" data-reveal>
          <span className="process-eyebrow">How we work</span>
          <h2 className="process-headline">
            Four steps from diagnosis <em>to running system.</em>
          </h2>
        </header>

        <ol className="process-list">
          {STEPS.map((step, i) => (
            <li className="process-step" key={step.num} data-reveal data-reveal-delay={`${i * 0.1}`}>
              <div className="process-step-num">{step.num}</div>
              <div className="process-step-body">
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
