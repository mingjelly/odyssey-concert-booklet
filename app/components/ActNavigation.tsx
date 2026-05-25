import Link from 'next/link';

interface ActNavigationProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

export default function ActNavigation({ prevHref, prevLabel = 'Previous', nextHref, nextLabel = 'Next' }: ActNavigationProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      padding: '2rem 0',
      borderTop: '1px solid rgba(201,168,76,0.2)',
      marginTop: '4rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        {prevHref && (
          <Link href={prevHref} className="nav-btn" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.6rem 1rem',
            flex: '1 1 auto',
            minHeight: '44px',
            textAlign: 'center',
            fontSize: 'clamp(0.8rem, 3vw, 1rem)',
          }}>
            ← {prevLabel}
          </Link>
        )}
      </div>
      <Link href="/home" className="nav-btn" style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.6rem 1rem',
        flex: '1 1 auto',
        minHeight: '44px',
        textAlign: 'center',
        fontSize: 'clamp(0.8rem, 3vw, 1rem)',
      }}>
        ⬥ Programme
      </Link>
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.6rem 1rem',
            flex: '1 1 auto',
            minHeight: '44px',
            textAlign: 'center',
            fontSize: 'clamp(0.8rem, 3vw, 1rem)',
          }}>
        {nextHref && (
          <Link href={nextHref} className="nav-btn" style={{
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            height: '44px',
            padding: '0 1.2rem',
          }}>
            {nextLabel} →
          </Link>
        )}
      </div>
    </div>
  );
}
