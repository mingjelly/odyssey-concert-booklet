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
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '3rem 0', borderTop: '1px solid rgba(201,168,76,0.2)', marginTop: '4rem'
    }}>
      <div>
        {prevHref && (
          <Link href={prevHref} className="nav-btn">
            ← {prevLabel}
          </Link>
        )}
      </div>
      <Link href="/home" className="nav-btn" style={{ letterSpacing: '0.2em' }}>
        ⬥ Programme
      </Link>
      <div>
        {nextHref && (
          <Link href={nextHref} className="nav-btn">
            {nextLabel} →
          </Link>
        )}
      </div>
    </div>
  );
}
