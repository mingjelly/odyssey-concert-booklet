interface VideoPlaceholderProps {
  label?: string;
}

export default function VideoPlaceholder({ label = 'Act Performance Video' }: VideoPlaceholderProps) {
  return (
    <div className="video-placeholder rounded-sm mb-12" style={{ maxWidth: '900px', margin: '0 auto 3rem' }}>
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
        {/* Play button */}
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          border: '2px solid rgba(201,168,76,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem',
          background: 'rgba(201,168,76,0.08)',
        }}>
          <div style={{
            width: 0, height: 0,
            borderTop: '14px solid transparent',
            borderBottom: '14px solid transparent',
            borderLeft: '22px solid rgba(201,168,76,0.7)',
            marginLeft: '4px',
          }} />
        </div>
        <div style={{
          fontFamily: 'Cinzel, serif', fontSize: '0.75rem',
          letterSpacing: '0.2em', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: 'EB Garamond, serif', fontSize: '0.85rem',
          color: 'rgba(245,240,232,0.3)', fontStyle: 'italic',
        }}>
          YouTube embed — replace src with video URL
        </div>
      </div>
    </div>
  );
}
