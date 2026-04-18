const LOGOS = [
  'Clover Holdings',
  'Kestrel Health',
  'Northfield Group',
  'Parallax',
  'Meridian Coaching',
  'Atlas Wellness',
  'Rowan & Stone',
  'Lighthouse Ops',
  'Saltbay Studio',
  'Juniper Clinic',
  'Fielder Partners',
  'Everley',
]

export default function LogoMarquee() {
  const strip = [...LOGOS, ...LOGOS]

  return (
    <section className="marquee-section" aria-label="Selected clients">
      <p className="marquee-caption">A few of the businesses running on Ruby</p>
      <div className="marquee-track" aria-hidden="true">
        <div className="marquee-row">
          {strip.map((name, i) => (
            <span className="marquee-logo" key={`${name}-${i}`}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
