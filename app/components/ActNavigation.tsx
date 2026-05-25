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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        gap: '1rem',

        maxWidth: '900px',
        margin: '4rem auto 0',

        padding: '2.5rem 0',
        borderTop: '1px solid rgba(201,168,76,0.2)',

        flexWrap: 'wrap',
      }}
    >
      {/* LEFT */}
      {prevHref ? (
        <Link
          href={prevHref}
          className="nav-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'flex-start',

            height: '44px',
            padding: '0 1rem',

            whiteSpace: 'nowrap',
            fontSize: 'clamp(0.8rem, 3vw, 1rem)',

            flex: '0 0 auto',
          }}
        >
          ← {prevLabel}
        </Link>
      ) : (
        <div style={{ flex: '0 0 auto' }} />
      )}

      {/* CENTER */}
      <Link
        href="/home"
        className="nav-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',

          height: '44px',
          padding: '0 1rem',

          whiteSpace: 'nowrap',
          fontSize: 'clamp(0.8rem, 3vw, 1rem)',

          flex: '0 0 auto',
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
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'flex-end',

            height: '44px',
            padding: '0 1rem',

            whiteSpace: 'nowrap',
            fontSize: 'clamp(0.8rem, 3vw, 1rem)',

            flex: '0 0 auto',
          }}
        >
          {nextLabel} →
        </Link>
      ) : (
        <div style={{ flex: '0 0 auto' }} />
      )}
    </div>
  );
}