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
      display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
      padding: '3rem 0', borderTop: '1px solid rgba(201,168,76,0.2)', marginTop: '4rem'
    }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {prevHref && (
          <Link href={prevHref} className="nav-btn" style={{
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            height: '44px',
            padding: '0 1.2rem',
          }}>
            ← {prevLabel}
          </Link>
        )}
      </div>
      <Link href="/home" className="nav-btn" style={{
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        height: '44px',
        padding: '0 1.2rem',
        letterSpacing: '0.2em',
      }}>
        ⬥ Programme
      </Link>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
