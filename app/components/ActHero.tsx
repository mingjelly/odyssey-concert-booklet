interface ActHeroProps {
  actNumber: number;
  actTitle: string;
  subtitle?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function ActHero({ actNumber, actTitle, subtitle, gradientFrom = '#2d1f0e', gradientTo = '#1a1510' }: ActHeroProps) {
  return (
    <div style={{
      position: 'relative',
      minHeight: '55vh',
      display: 'flex',
      alignItems: 'flex-end',
      background: `transparent`,
      overflow: 'hidden',
      marginBottom: '4rem',
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 50%)',
      }} />

      {/* Large act number watermark */}
      <div style={{
        position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(10rem, 20vw, 18rem)',
        fontWeight: 300, fontStyle: 'italic', color: 'rgba(201,168,76,0.06)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>
        {actNumber}
      </div>

      {/* Ornamental lines */}
      <div style={{
        position: 'absolute', top: '2rem', left: '3rem', right: '3rem',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }} />
      <div style={{
        position: 'absolute', top: '2.5rem', left: '3rem', right: '3rem',
        borderTop: '1px solid rgba(201,168,76,0.08)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '3rem', paddingBottom: '4rem' }}>
        <div className="act-badge" style={{ display: 'block', marginBottom: '1rem' }}>
          Act {actNumber}
        </div>
        <h1 style={{
          fontFamily: 'Cinzel, serif', fontWeight: 400,
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          color: '#f5f0e8', letterSpacing: '0.06em',
          marginBottom: subtitle ? '1rem' : 0,
          lineHeight: 1.15,
        }}>
          {actTitle}
        </h1>
        {subtitle && (
          <p style={{
            fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
            fontSize: '1.2rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.04em',
          }}>
            {subtitle}
          </p>
        )}
        <div style={{
          width: '60px', height: '2px', marginTop: '2rem',
          background: 'linear-gradient(to right, var(--gold), transparent)',
        }} />
      </div>
    </div>
  );
}
