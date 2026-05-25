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
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.3rem', color: 'rgba(201,168,76,0.8)', marginBottom: '2rem', lineHeight: 1.7 }}>
            "Add a meaningful opening quote or dedication here."
          </p>

          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.35)', fontStyle: 'italic' }}>
            [This is where the foreword text will appear. Write a warm welcome from the director or president — introduce the concert's theme, share what inspired this year's programme, and invite the audience into the world you've created. Typically 3–5 paragraphs.]
          </p>

          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.35)', fontStyle: 'italic' }}>
            [Second paragraph: speak about the group's journey this year, the work put in by arrangers, performers, and the committee.]
          </p>

          <p style={{ marginBottom: '1.5rem', color: 'rgba(245,240,232,0.35)', fontStyle: 'italic' }}>
            [Third paragraph: express gratitude and wishes for the audience's experience tonight.]
          </p>
        </div>

        {/* Signature */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.3rem', color: 'rgba(245,240,232,0.6)', marginBottom: '0.25rem' }}>
            [Director / President Name]
          </div>
          <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '0.9rem', color: 'rgba(201,168,76,0.5)', letterSpacing: '0.1em' }}>
            [Title] · [Group Name]
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
