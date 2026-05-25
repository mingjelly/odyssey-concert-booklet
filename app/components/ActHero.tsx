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
      minHeight: 'clamp(30vh, 40vh, 55vh)',
      display: 'flex',
      alignItems: 'flex-end',
      background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 60%, #1a1510 100%)`,
      overflow: 'hidden',
      marginBottom: '2rem',
    }}>
      {/* Decorative glow */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)',
      }} />

      {/* Large act number watermark — hidden on small screens */}
      <div style={{
        position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(6rem, 18vw, 18rem)',
        fontWeight: 300, fontStyle: 'italic', color: 'rgba(201,168,76,0.06)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>
        {actNumber}
      </div>

      {/* Top ornamental lines */}
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem', borderTop: '1px solid rgba(201,168,76,0.15)' }} />
      <div style={{ position: 'absolute', top: '2rem', left: '1.5rem', right: '1.5rem', borderTop: '1px solid rgba(201,168,76,0.08)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(1.5rem, 4vw, 3rem)', paddingBottom: 'clamp(2rem, 5vw, 4rem)' }}>
        <div className="act-badge" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Act {actNumber}
        </div>
        <h1 style={{
          fontFamily: 'Cinzel, serif', fontWeight: 400,
          fontSize: 'clamp(1.8rem, 6vw, 4rem)',
          color: '#f5f0e8', letterSpacing: '0.06em',
          marginBottom: subtitle ? '0.75rem' : 0,
          lineHeight: 1.15,
        }}>
          {actTitle}
        </h1>
        {subtitle && (
          <p style={{
            fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(201,168,76,0.7)', letterSpacing: '0.04em', margin: 0,
          }}>
            {subtitle}
          </p>
        )}
        <div style={{ width: '60px', height: '2px', marginTop: '1.5rem', background: 'linear-gradient(to right, var(--gold), transparent)' }} />
      </div>
    </div>
  );
}