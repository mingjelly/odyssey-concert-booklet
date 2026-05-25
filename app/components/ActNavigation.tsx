import Link from 'next/link';

interface ActNavigationProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

export default function ActNavigation({
  prevHref,
  prevLabel = 'Previous',
  nextHref,
  nextLabel = 'Next',
}: ActNavigationProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',

        padding: '2.5rem 0',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        marginTop: '4rem',
        gap: '0.75rem',
      }}
    >
      {/* LEFT */}
      {prevHref ? (
        <Link
          href={prevHref}
          className="nav-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',

            minWidth: 0,
            overflow: 'hidden',

            height: '44px',
            padding: '0 1rem',

            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',

            fontSize: 'clamp(0.8rem, 3vw, 1rem)',
          }}
        >
          ← {prevLabel}
        </Link>
      ) : (
        <div />
      )}

      {/* CENTER */}
      <Link
        href="/home"
        className="nav-btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          height: '44px',
          padding: '0 1rem',

          whiteSpace: 'nowrap',
          fontSize: 'clamp(0.8rem, 3vw, 1rem)',
        }}
      >
        ⬥ Home
      </Link>

      {/* RIGHT */}
      {nextHref ? (
        <Link
          href={nextHref}
          className="nav-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',

            minWidth: 0,
            overflow: 'hidden',

            height: '44px',
            padding: '0 1rem',

            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',

            fontSize: 'clamp(0.8rem, 3vw, 1rem)',
          }}
        >
          {nextLabel} →
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}