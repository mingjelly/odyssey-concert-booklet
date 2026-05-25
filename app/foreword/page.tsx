import Link from 'next/link';

export default function Foreword() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--dark)', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }} />
            <div style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'Cinzel, serif', fontSize: '0.7rem' }}>✦</div>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }} />
          </div>
          <div className="act-badge" style={{ display: 'block', marginBottom: '1rem' }}>Opening</div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5f0e8', letterSpacing: '0.1em' }}>
            Foreword
          </h1>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '2rem auto' }} />
        </div>

        {/* Foreword content */}
        <div className="prose-booklet" style={{ fontSize: '1.1rem', lineHeight: 2 }}>

          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.6)', fontStyle: 'italic' }}>
            Welcome to Odyssey, a journey of growth, discovery, and pure a cappella.
          </p>

          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.6)', fontStyle: 'italic' }}>
            As NUS Resonance celebrates its 25th anniversary tonight, we invite you to look back with us on the incredible journey the club has undergone over the past quarter-century. From our fledgling beginnings, through seasons of profound uncertainty, and across the many transformations we have faced — we have ultimately emerged fully realised and confident in the artists we are today.
          </p>

          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.6)', fontStyle: 'italic' }}>
            This production is the culmination of months of tireless dedication from all our members. From original arrangements, costumes, and photoshoots, to the countless hours spent perfecting both music and choreography, everyone on this stage has poured their heart and soul into preparing for this concert.
          </p>

          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.6)', fontStyle: 'italic' }}>
            Being in NUS Resonance has been somewhat of a personal odyssey for me. As a newcomer to a cappella, I never expected to find a place where my voice would feel so at home. After three years of learning and growing as a singer, I look back and am amazed by how much this community has shaped me, More than just the music, the passion, talent, and camaraderie in Resonance is truly something special, and I will forever be grateful to have been given the chance to be here.] 
          </p>

          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.6)', fontStyle: 'italic' }}>
            I hope this Odyssey invites you to reminisce on your own personal journey, and that our music serves as a comforting reminder of the guiding lights in your own life.
          </p>

          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.6)', fontStyle: 'italic' }}>
            Thank you for travelling through this Odyssey with us.
          </p>
        </div>

        {/* Signature */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.3rem', color: 'rgba(245,240,232,0.6)', marginBottom: '0.25rem' }}>
            Katherine Fontanilla
          </div>
          <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '0.9rem', color: 'rgba(201,168,76,0.5)', letterSpacing: '0.1em' }}>
            President · NUS Resonance
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          <Link href="/home" className="nav-btn">← Programme</Link>
          <Link href="/about" className="nav-btn">About Us →</Link>
        </div>
      </div>
    </main>
  );
}
