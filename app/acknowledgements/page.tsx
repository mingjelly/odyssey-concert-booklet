import Link from 'next/link';

const committee = [
  { role: 'President', name: 'Katherine' },
  { role: 'Vice President (Internal)', name: 'Oak' },
  { role: 'Vice President (External)', name: 'Vicelya' },
  { role: 'Musical Director', name: 'Napin' },
  { role: 'Musical Director', name: 'Luis' },
  { role: 'Secretary', name: 'Vienna' },
  { role: 'Pubs Director', name: 'Rinny'},
  { role: 'Member Relations Director', name: 'Danial'},
  { role: 'Resource Manager', name: 'Ming Yang'},
];

const subcommittees = [
  {
    title: 'Publicity Subcommittee',
    subsections: [
      { label: '', names: ['Rinny','Nicky', 'Xin Hui', 'Titus', 'Marvin','Edlyn','Riley','Vicelya','Wan Xin', 'Meiwen', 'Josiah', 'Chloe', 'Oak','Sandy','Naomi'] },
      { label: 'ACT Teasers, Interviews and Odyssey Airline Editors', names: ['Rinny', 'Nicky', 'Xin Hui', 'Marvin']},
      { label: 'ACT Teaser actors', names: ['Eunice', 'Zea', 'Luis', 'Chantrice', 'Isaac Lee', ' Marvin', 'Yi Cheng', 'Josiah', 'Xin Hui', 'Rinny', 'Napin']},
      { label: 'Photoshoot Helpers', names: ['Nicky', 'Rinny', 'Shira', 'Napin', 'Danial', 'Yi Cheng', 'Justin', 'Katherine', 'Riley', 'Shennon', 'Meiwen', 'Xin Hui', 'Josiah', 'Chloe', 'Ming Yang', 'Oak'] },
      { label: 'Website Team', names: ['Cleon', 'Raymond']},
      { label: 'Concert Booklet', names: ['Ming Yang']}
    ]
  },
  {
    title: 'Welfare Subcommittee',
    subsections: [
      { label: '', names: ['Danial','Xin Hui', 'Titus', 'Solange', 'Zea', 'Edlyn', 'Naomi', 'Yi Cheng', 'Lershan', 'Rinny', 'Isaac Ling']}
    ]
  },
  {
    title: 'Audio Subcommittee',
    subsections: [
      { label: '', names: ['Ian', 'Marvin', 'Dave', 'Andre', 'Joshua Chiang', 'Edlyn', 'Xin Hui', 'Titus', 'Ming Yang'] },
    ],
  },
];

export default function Acknowledgements() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--dark)', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
    {/* GLOBAL BACKGROUND */}
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(10,10,10,0.65), rgba(10,10,10,0.85)),
          url('/images/ack_bg.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(10px) saturate(1.4) contrast(1.05)',
        transform: 'scale(1.05)',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
    <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }} />
            <span style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'Cinzel, serif', fontSize: '0.7rem' }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }} />
          </div>
          <div className="act-badge" style={{ display: 'block', marginBottom: '1rem' }}>Thank You</div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5f0e8', letterSpacing: '0.1em' }}>
            Acknowledgements
          </h1>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '2rem auto' }} />
        </div>

        {/* Committee */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '1rem',
            color: 'rgba(201,168,76,0.8)', letterSpacing: '0.15em', textTransform: 'uppercase',
            marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,168,76,0.15)',
          }}>
            Committee 25/26
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {committee.map((item, i) => (
              <li key={i} style={{
                fontFamily: 'EB Garamond, serif', fontSize: '1.1rem',
                color: 'rgba(245,240,232,0.8)', padding: '0.3rem 0',
                display: 'flex', gap: '0.75rem', alignItems: 'baseline',
              }}>
                <span style={{ color: 'rgba(201,168,76,0.6)', fontStyle: 'italic', minWidth: '240px' }}>
                  {item.role}:
                </span>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Subcommittees */}
        {subcommittees.map((sub, i) => (
          <div key={i} style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '1rem',
              color: 'rgba(201,168,76,0.8)', letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(201,168,76,0.15)',
            }}>
              {sub.title}
            </h2>
            {sub.subsections.map((section, j) => (
              <div key={j} style={{ marginBottom: '1.25rem' }}>
                {section.label && (
                  <p style={{
                    fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.2em',
                    color: 'rgba(201,168,76,0.45)', textTransform: 'uppercase', marginBottom: '0.6rem',
                  }}>
                    {section.label}
                  </p>
                )}
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem 1rem',
                }}>
                  {section.names.map((name, k) => (
                    <span key={k} style={{
                      fontFamily: 'EB Garamond, serif', fontSize: '1.1rem',
                      color: 'rgba(245,240,232,0.8)', padding: '0.2rem 0',
                    }}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

    {/* Vocal Coach */}
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{
        fontFamily: 'Cinzel, serif',
        fontWeight: 400,
        fontSize: '1rem',
        color: 'rgba(201,168,76,0.9)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '0.8rem',
        paddingBottom: '0.5rem',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
      }}>
        Vocal Coach
      </h2>

      <p style={{
        fontFamily: 'EB Garamond, serif',
        fontSize: '1.2rem',
        color: 'rgba(245,240,232,0.85)',
        margin: 0,
      }}>
        Emmeline Koh
      </p>
    </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          <Link href="/act-four" className="nav-btn">← Act Four</Link>
          <Link href="/home" className="nav-btn">⬥ Programme</Link>
          <Link href="/special-thanks" className="nav-btn">Special Thanks →</Link>
        </div>
      </div>
      </div>
    </main>
  );
}