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
        gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',

        height: '64px',

        gap: '0.75rem',
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
            justifyContent: 'center',

            minWidth: 0,
            width: '100%',
            height: '64px',

            padding: '0 1rem',

            fontSize: 'clamp(0.8rem, 3vw, 1rem)',
            lineHeight: 1.2,

            textAlign: 'center',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
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
          height: '64px',

          padding: '0 1rem',

          fontSize: 'clamp(0.8rem, 3vw, 1rem)',
          lineHeight: 1.2,

          whiteSpace: 'normal',
          textAlign: 'center',
          wordBreak: 'break-word',
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
            justifyContent: 'center',

            minWidth: 0,
            width: '100%',
            height: '64px',

            padding: '0 1rem',

            fontSize: 'clamp(0.8rem, 3vw, 1rem)',
            lineHeight: 1.2,

            textAlign: 'center',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
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