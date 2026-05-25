import React from 'react';

interface SongCardProps {
  number: number;
  title: string;
  images?: { image: string }[];
  originalBy?: string;
  medley?: { title: string }[];
  arranger?: string;
  cast?: { voice: string; names: string }[];
  soloist?: string[];
  description?: string;
  youtubeUrl?: string;
}

export default function SongCard({ number, title, images, originalBy, medley, arranger, cast, soloist, description, youtubeUrl }: SongCardProps) {
  return (
    <div style={{ marginBottom: '5rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>

      {/* Song header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '0.5rem' }}>
        <span style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontStyle: 'italic',
          color: 'rgba(201,168,76,0.8)', letterSpacing: '0.05em', flexShrink: 0,
        }}>
          {String(number).padStart(2, '0')}
        </span>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif', fontWeight: 500,
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          color: '#f5f0e8', letterSpacing: '0.03em', lineHeight: 1.2, margin: 0,
        }}>
          {title}
        </h2>
      </div>

      {/* Original artist + arranger */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 2rem', marginBottom: '1.25rem', paddingLeft: '2.8rem' }}>
        {originalBy && (
          <span style={{ fontFamily: 'EB Garamond, serif', fontSize: '1rem', color: 'rgba(201,168,76,0.9)', fontStyle: 'italic' }}>
            Originally by {originalBy}
          </span>
        )}
        {arranger && (
          <span style={{ fontFamily: 'EB Garamond, serif', fontSize: '1rem', color: 'rgba(245,240,232,0.6)' }}>
            Arranged by {arranger}
          </span>
        )}
      </div>

      {/* Medley list — inline with dots */}
      {medley && (
        <div style={{ paddingLeft: '2.8rem', marginBottom: '1.5rem' }}>
          <p style={{
            fontFamily: 'EB Garamond, serif', fontSize: '0.95rem',
            color: 'rgba(201,168,76,0.8)', fontStyle: 'italic', lineHeight: 1.9, margin: 0,
          }}>
            {medley.map((item, i) => (
              <span key={i}>
                &ldquo;{item.title}&rdquo;{i < medley.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </div>
      )}

      {/* Gold rule */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(201,168,76,0.25), transparent)', marginBottom: '2rem' }} />

      {/* Photos */}
      {images && images.length >= 3 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <div style={{ gridColumn: '1 / -1', height: '750px', overflow: 'hidden' }}>
            <img src={images[0].image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ height: '320px', overflow: 'hidden' }}>
            <img src={images[1].image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ height: '320px', overflow: 'hidden' }}>
            <img src={images[2].image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      )}

      {/* Cast — inline wrapping */}
      {cast && cast.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <p style={{
            fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.25em',
            color: 'rgba(201,168,76,0.9)', textTransform: 'uppercase', marginBottom: '0.6rem',
          }}>
            Voices
          </p>
          <p style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.65)', margin: 0 }}>
            {cast.map((c, i) => (
              <span key={i}>
                <span style={{ color: 'rgba(201,168,76,0.9)', fontStyle: 'italic' }}>{c.voice}:</span>
                {' '}{c.names}{i < cast.length - 1 ? '  ·  ' : ''}
              </span>
            ))}
          </p>
        </div>
      )}
      {/* Soloists */}
      {soloist && soloist.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <p style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.58rem',
            letterSpacing: '0.25em',
            color: 'rgba(201,168,76,0.9)',
            textTransform: 'uppercase',
            marginBottom: '0.6rem',
          }}>
            Soloists
          </p>

          <p style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'rgba(245,240,232,0.7)',
            margin: 0,
          }}>
            {soloist.join(' · ')}
          </p>
        </div>
      )}

      {/* Programme notes */}
      <div>
        <p style={{
          fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.25em',
          color: 'rgba(201,168,76,0.8)', textTransform: 'uppercase', marginBottom: '0.6rem',
        }}>
          Programme Notes
        </p>
        <p style={{
          fontFamily: 'EB Garamond, serif', fontSize: '1.1rem', lineHeight: 2,
          color: description ? 'rgba(245,240,232,0.8)' : 'rgba(245,240,232,0.22)',
          fontStyle: description ? 'normal' : 'italic', margin: 0,
        }}>
          {description || 'Programme notes to be added.'}
        </p>
      </div>

      {/* YouTube embed */}
      {youtubeUrl && (
        <div style={{ marginTop: '2rem' }}>
          <iframe
            src={youtubeUrl}
            style={{ width: '100%', aspectRatio: '16/9', border: '1px solid rgba(201,168,76,0.15)' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}