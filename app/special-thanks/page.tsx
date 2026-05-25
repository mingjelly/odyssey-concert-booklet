import Link from 'next/link';

const sections = [
  {
    title: 'Venue & Production',
    items: [
      { role: 'Production Coordinator', name: 'Muhammad Farhan' },
      { role: 'Venue Manager', name: 'Wong Ju Le' },
    ],
  },
  {
    title: 'Sound',
    items: [{ name: 'Steven Cheong' }],
  },
  {
    title: 'Lighting',
    items: [{ name: 'AK Kumarran' }],
  },
  {
    title: 'Photography',
    items: [
      { name: 'Kevin Wang' },
      { name: 'Julian Tham' },
      { name: 'YK Teo' },
    ],
  },
  {
    title: 'Videography',
    items: [{ name: 'NEXUS Productions' }],
  },
  { title: 'Stage Managers',
    items: [{ name: 'Wan Xin'},
        {name: 'Meiwen'},
    ],
  },
    { title: 'Emcees',
    items: [{ name: 'Bryan'},
        {name: 'Riley'},
        {name: 'Pia'}
    ],
  },
  {
    title: 'Office of Student Affairs - Centre for the Arts (OSA-CFA)',
    items: [
      { name: '', note: 'For their generous support' },
      { name: 'Group Manager: Liyana' },
      { name: 'Financial Matters: Juwita' },
    ],
  },
];

export default function SpecialThanks() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

      {/* BACKGROUND (blurred, stationary) */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(10,10,10,0.6), rgba(10,10,10,0.85)),
            url('/images/specialthanks_bg.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) saturate(1.4) contrast(1.1)',
          transform: 'scale(1.05)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }} />
              <span style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'Cinzel, serif', fontSize: '0.7rem' }}>✦</span>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }} />
            </div>

            <div className="act-badge" style={{ display: 'block', marginBottom: '1rem' }}>
              With Gratitude
            </div>

            <h1 style={{
              fontFamily: 'Cinzel, serif',
              fontWeight: 400,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#f5f0e8',
              letterSpacing: '0.1em'
            }}>
              Special Thanks
            </h1>

            <div style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
              margin: '2rem auto'
            }} />
          </div>

          {/* Sections */}
          {sections.map((section, i) => (
            <div key={i} style={{ marginBottom: '3rem' }}>

              <h2 style={{
                fontFamily: 'Cinzel, serif',
                fontWeight: 400,
                fontSize: '1rem',
                color: 'rgba(201,168,76,0.85)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(201,168,76,0.15)',
              }}>
                {section.title}
              </h2>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontFamily: 'EB Garamond, serif',
                      fontSize: '1.1rem',
                      color: 'rgba(245,240,232,0.85)',
                      padding: '0.3rem 0',
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'baseline',
                    }}
                  >
                    {'role' in item && item.role && (
                      <span style={{
                        color: 'rgba(201,168,76,0.85)',
                        fontStyle: 'italic',
                        minWidth: '180px'
                      }}>
                        {item.role}:
                      </span>
                    )}

                    <span>{item.name}</span>

                    {'note' in item && item.note && (
                      <span style={{
                        color: 'rgba(245,240,232,0.4)',
                        fontStyle: 'italic',
                        fontSize: '0.95rem'
                      }}>
                        — {item.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

            </div>
          ))}

          {/* Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(201,168,76,0.15)'
          }}>
            <Link href="/acknowledgements" className="nav-btn">← Prev</Link>
            <Link href="/home" className="nav-btn">⬥ Home</Link>
          </div>

        </div>
      </div>
    </main>
  );
}