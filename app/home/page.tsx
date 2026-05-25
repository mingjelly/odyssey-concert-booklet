import Link from 'next/link';

const acts = [
  { number: 1, title: 'Genesis', href: '/act-one', image: '/images/act1.jpg', songs: ['The Greatest Show', 'Classic', 'Hypotheticals', 'Anganku Anganmu', 'WHERE IS MY HUSBAND!'] },
  { number: 2, title: 'Flux', href: '/act-two', image: '/images/act2.jpg', songs: ['WILDFLOWER', 'Situations', "讨厌 (Can't Stand It)", 'The Door', 'Soft Universe'] },
  { number: 3, title: 'Metamorphosis', href: '/act-three', image: '/images/act3.png', songs: ['Life is a Highway', 'Born Again', 'The Rise and Fall of a Midwest Princess Mashup', 'Cardboard Box', 'MEDIEVAL'] },
  { number: 4, title: 'Transcendance', href: '/act-four', image: '/images/act4.png', songs: ['I Will Survive', 'I AM', 'When the Day is Done', 'We Made It'] },
];

const pages = [
  { label: 'Foreword', href: '/foreword' },
  { label: 'About Us', href: '/about' },
  { label: 'Acknowledgements', href: '/acknowledgements' },
  { label: 'Special Thanks', href: '/special-thanks'},
];

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--dark)', position: 'relative' }}>

    {/* Hero */}
    <div
      style={{
        position: 'relative',
        height: 'clamp(420px, 70vh, 900px)',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0805',
        textAlign: 'center',
      }}
    >
      {/* Image (fully visible, no cropping) */}
      <img
        src="/images/odyssey_hero.jpg"
        alt="NUS Resonance Odyssey"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Dark overlay for readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.2), rgba(0,0,0,0.75))',
        }}
      />

    {/* TITLE TEXT */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        zIndex: 2,
        padding: '2rem',
      }}
    >
      {/* Main brand */}
      <h1
        style={{
          fontFamily: 'Glacial Indifference, sans-serif',
          fontWeight: 400,
          letterSpacing: '0.35em',

          fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',

          color: 'rgba(245,240,232,0.85)',

          margin: 0,
        }}
      >
        ODYSSEY 2026
      </h1>

      {/* divider */}
      <div
        style={{
          margin: '1.2rem 0',
          width: '120px',
          height: '1px',
          background: 'rgba(201,168,76,0.6)',
        }}
      />

      {/* Main title */}
      <h2
        style={{
          fontFamily: 'The Seasons, serif',
          fontWeight: 300,

          fontSize: 'clamp(3rem, 9vw, 6rem)',

          letterSpacing: '0.08em',
          lineHeight: 1,

          color: '#f5f0e8',

          margin: 0,

          textShadow: '0 10px 35px rgba(0,0,0,0.65)',
        }}
      >
        NUS Resonance
      </h2>
    </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '0 clamp(0.9rem, 4vw, 1.6rem) 4rem', maxWidth: '1100px', margin: '0 auto' }}>

        {/* Foreword / About / Acknowledgements nav bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
          marginBottom: '4rem',
        }}>
          {pages.map((page, i) => (
            <Link
              key={page.href}
              href={page.href}
              className="nav-btn"
              style={{
                padding: '1rem 1.25rem',
                borderBottom:
                  i < pages.length - 1
                    ? '1px solid rgba(201,168,76,0.2)'
                    : 'none',

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                textAlign: 'center',
                fontSize: 'clamp(0.85rem, 3vw, 1rem)',

                whiteSpace: 'normal',
                wordBreak: 'break-word',
              }}
            >
              {page.label}
            </Link>
          ))}
        </div>

        {/* Programme label */}
        <div style={{
          fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
          fontSize: 'clamp(0.9rem, 3vw, 1rem)', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.1em',
          textAlign: 'center', marginBottom: '2rem',
        }}>
          Programme
        </div>

        {/* Act cards — full width horizontal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {acts.map((act) => (
            <Link key={act.href} href={act.href} style={{
              textDecoration: 'none', display: 'block',
              position: 'relative', overflow: 'hidden', minHeight: 'clamp(280px, 80vw, 420px)',
            }}>
              {act.image && (
                <img src={act.image} alt="" style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                }} />
              )}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,8,5,0.95) 0%, rgba(10,8,5,0.55) 55%, rgba(10,8,5,0.1) 100%)',
              }} />
              <div style={{
                position: 'relative', zIndex: 2, padding: 'clamp(1rem, 4vw, 2rem)', height: '100%',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                  fontSize: 'clamp(0.65rem, 2vw, 0.85rem)', letterSpacing: '0.25em', color: 'rgba(201,168,76,0.9)',
                  textTransform: 'uppercase', marginBottom: '0.4rem',
                }}>
                  Act {act.number}
                </div>
                <h2 style={{
                  fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(1.25rem, 5.2vw, 2rem)',
                  color: '#f5f0e8', letterSpacing: '0.08em', marginBottom: '1.25rem', lineHeight: 1.15,
                }}>
                  {act.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {act.songs.map((song, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'baseline', gap: '0.5rem',
                      fontFamily: 'EB Garamond, serif', fontSize: 'clamp(0.82rem, 3vw, 1.05rem)',
                      color: 'rgba(245,240,232,0.8)', lineHeight: 1.3, flexWrap: 'wrap',
                    }}>
                      <span style={{
                        fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                        fontSize: 'clamp(0.7rem, 2.2vw, 0.9rem)', color: 'rgba(201,168,76,0.9)', flexShrink: 0,
                      }}>
                        {String((act.number - 1) * 5 + i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ overflowWrap: 'anywhere' }}>
                        {song}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center', padding: '2rem',
        borderTop: '1px solid rgba(201,168,76,0.12)',
      }}>
        <div style={{
          fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
          fontSize: '0.9rem', color: 'rgba(245,240,232,0.2)', letterSpacing: '0.08em',
        }}>
          NUS Resonance · 2026
        </div>
      </div>

    </main>
  );
}