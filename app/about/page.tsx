import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--dark)', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }} />
            <div style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'Cinzel, serif', fontSize: '0.7rem' }}>✦</div>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }} />
          </div>
          <div className="act-badge" style={{ display: 'block', marginBottom: '1rem' }}>Who We Are</div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5f0e8', letterSpacing: '0.1em' }}>
            About NUS Resonance
          </h1>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '2rem auto' }} />
        </div>

        {/* About photo placeholder */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/7',
            marginBottom: '3rem',
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <Image
            src="/images/about/reso_group.jpg"
            alt="NUS Resonance Group Photo"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="prose-booklet" style={{ fontSize: '1.1rem', lineHeight: 2 }}>
          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.35)', fontStyle: 'italic' }}>
            Formed in 2001, NUS Resonance is NUS’ pioneer and premier collegiate a cappella group, made up of people bound by a common love for singing. Members come from diverse musical backgrounds, and they sing just about anything – from contemporary pop to choral music, alternative rock to swing, and even the occasional techno tune.
          </p>
          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.35)', fontStyle: 'italic' }}>
            NUS Resonance continually strives towards promoting a greater awareness of a cappella music both within and outside of campus. For gig enquiries, contact us through our website www.nusresonance.com or drop us an email at contact@nusresonance.com.
          </p>
          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.35)', fontStyle: 'italic' }}>
            NUS Resonance performs regularly for school, corporate and other events, including gala dinners and appreciation nights. Below are some notable clients that we have worked with:
          </p>
        </div>
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            marginTop: '3rem',
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <Image
            src="/images/partners.jpg"
            alt="NUS Resonance Collabs"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          <Link href="/foreword" className="nav-btn">← Prev</Link>
          <Link href="/home" className="nav-btn">⬥ Home</Link>
          <Link href="/act-one" className="nav-btn">Next →</Link>
        </div>
      </div>
    </main>
  );
}
