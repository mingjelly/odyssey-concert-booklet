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
      <div style={{
        position: 'relative',
        height: '100vh',
        minHeight: '500px',
        maxHeight: '900px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <img src="/images/odyssey_hero.png" alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,21,16,0.15) 0%, rgba(26,21,16,0.05) 50%, rgba(26,21,16,1) 100%)',
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '0 2rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>

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
          fontSize: '1rem', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.1em',
          textAlign: 'center', marginBottom: '2rem',
        }}>
          Programme
        </div>

        {/* Act cards — full width horizontal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {acts.map((act) => (
            <Link key={act.href} href={act.href} style={{
              textDecoration: 'none', display: 'block',
              position: 'relative', overflow: 'hidden', height: 'clamp(240px, 60vw, 420px)',
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
                position: 'relative', zIndex: 2, padding: '2rem', height: '100%',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                  fontSize: '0.8rem', letterSpacing: '0.25em', color: 'rgba(201,168,76,0.9)',
                  textTransform: 'uppercase', marginBottom: '0.4rem',
                }}>
                  Act {act.number}
                </div>
                <h2 style={{
                  fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '1.4rem',
                  color: '#f5f0e8', letterSpacing: '0.08em', marginBottom: '1.25rem',
                }}>
                  {act.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {act.songs.map((song, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'baseline', gap: '0.5rem',
                      fontFamily: 'EB Garamond, serif', fontSize: '0.95rem',
                      color: 'rgba(245,240,232,0.8)',
                    }}>
                      <span style={{
                        fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                        fontSize: '0.75rem', color: 'rgba(201,168,76,0.9)', flexShrink: 0,
                      }}>
                        {String((act.number - 1) * 5 + i + 1).padStart(2, '0')}
                      </span>
                      {song}
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