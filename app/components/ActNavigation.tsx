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
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        gap: '0.5rem',
        padding: '2.5rem 0',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        marginTop: '4rem',
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
            width: '100%',

            height: '44px',
            padding: '0 1rem',

            fontSize: 'clamp(0.8rem, 3vw, 1rem)',

            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
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

          minWidth: 0,
          width: '100%',

          height: '44px',
          padding: '0 1rem',

          fontSize: 'clamp(0.8rem, 3vw, 1rem)',

          whiteSpace: 'nowrap',
        }}
      >
        ⬥ Programme
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
            width: '100%',

            height: '44px',
            padding: '0 1rem',

            fontSize: 'clamp(0.8rem, 3vw, 1rem)',

            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
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