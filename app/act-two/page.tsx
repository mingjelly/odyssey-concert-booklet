import ActHero from '../components/ActHero';
import SongCard from '../components/SongCard';
import ActNavigation from '../components/ActNavigation';
import VideoPlaceholder from '../components/VideoPlaceholder';

const songs = [
  {
    number: 6,
    title: 'WILDFLOWER',
    originalBy: 'Billie Eilish',
    arranger: 'Ng Hao Ming',
    cast: [
      { voice: 'Soprano', names: 'Heera' },
      { voice: 'Mezzo', names: 'Krystal' },
      { voice: 'Alto', names: 'Angel' },
      { voice: 'Tenor', names: 'Marvin' },
      { voice: 'Bass', names: 'Isaac Lee' }
    ],
    description: 'The second act of Odyssey opens with “WILDFLOWER”, a heartbreaking tale of loving someone who still carries the shadow of a past love, and the accompanying guilt and isolation. This idea of being placed in tumultuous circumstances and having to navigate them encapsulates the theme of Act II: Flux.\n\nThis piece, arranged by Hao Ming, lacks a vocal percussionist, putting the focus onto the layered and complex harmonies. This brings out the raw emotions from the vocalists, immersing the audience in sorrow and agony.',
    images: [
       {image: '/images/act2/wildflower_group.jpg'},
       {image: '/images/act2/wildflower_2.jpg'},
       {image: '/images/act2/wildflower_3.jpg'},
    ]
  },
  {
    number: 7,
    title: 'Situations',
    originalBy: 'Nicolina',
    arranger: 'Teo Jia Yu',
    cast: [
      { voice: 'Soprano', names: 'Zea' },
      { voice: 'Mezzo', names: 'Pia' },
      { voice: 'Alto', names: 'Chantrice' },
      { voice: 'Tenor', names: 'Nicky' },
      { voice: 'Bass', names: 'Bryan' },
      { voice: 'VP', names: 'Edlyn' },
    ],
    description: 'Originally performed by Nicolina, “Situations” explores the highs, the lows, the twists and turns of a situationship. The song describes someone who is in constant turmoil of false expectations, yet unable to move on from it due to the excitement it brings.\n\nJia Yu’s a cappella rendition heightens the distress with clashing dissonant chords. However, he still maintains the intensity of the original song through the inclusion of powerful belts and synchronized choruses.',
    images: [
       {image: '/images/act2/situations_group.jpg'},
       {image: '/images/act2/situations_2.jpg'},
       {image: '/images/act2/situations_3.jpg'},
    ]
  },
  {
    number: 8,
    title: "讨厌 (Can't Stand It)",
    originalBy: 'Rui En',
    arranger: 'Kyla Yew',
    cast: [
      { voice: 'Soprano', names: 'Xu En' },
      { voice: 'Mezzo', names: 'Raeanne' },
      { voice: 'Alto', names: 'Naomi' },
      { voice: 'Tenor', names: 'Titus' },
      { voice: 'Bass', names: 'You Hung' },
      { voice: 'VP', names: 'Lei' },
    ],
    description: '讨厌 (“Can’t Stand It”), originally performed by Singaporean singer Rui En, is an upbeat pop-R&B track that describes the frustration of being with a partner who treats love like a game. It captures the emotional exhaustion of being stuck in a one-sided relationship, falling out of love and eventually leaving.\n\nKyla preserves the Y2K Mandopop style of this piece through funky chords and a music video-esque monologue. The rhythmic beats and catchy melodies bring a contrasting lightness to an otherwise unpleasant experience.',
    images: [
       {image: '/images/act2/taoyan_group.jpg'},
       {image: '/images/act2/taoyan_2.jpg'},
       {image: '/images/act2/taoyan_3.jpg'},
    ]
  },
  {
    number: 9,
    title: 'The Door',
    originalBy: 'Teddy Swims',
    arranger: 'Krystal Chiang & Xavier L. Opena',
    cast: [
      { voice: 'Mezzo', names: 'Laura' },
      { voice: 'Alto', names: 'Shirin' },
      { voice: 'Tenor', names: 'Xavier' },
      { voice: 'Baritone', names: 'Reuben' },
      { voice: 'Bass', names: 'Josiah' },
      { voice: 'VP', names: 'Ryan' },
    ],
    description: 'Originally performed by Teddy Swims, “The Door” is a powerful reflection on protecting one’s sanity by walking away from an abusive relationship. It emphasizes the importance of loving oneself, recognizing when a relationship is no longer healthy and resolutely cutting ties.\n\nThe arrangers, Krystal and Xavier, add an imaginative twist to the piece, with the arrangement featuring two halves of a couple, taking turns telling their side of the story theatrically. This brings out the messy drama and the fallout of a broken relationship.',
    images: [
       {image: '/images/act2/door_group.jpg'},
       {image: '/images/act2/door_2.jpg'},
       {image: '/images/act2/door_3.jpg'},
    ]
  },
  {
    number: 10,
    title: 'Soft Universe',
    originalBy: 'AURORA',
    arranger: 'Sunny Wang',
    cast: [
      { voice: 'Solo', names: 'Zea' },
      { voice: 'Soprano 1', names: 'Haorui' },
      { voice: 'Soprano 2', names: 'Riley' },
      { voice: 'Mezzo', names: 'Nicole' },
      { voice: 'Alto', names: 'Katherine' },
      { voice: 'Tenor 1', names: 'Ming Yang' },
      { voice: 'Tenor 2', names: 'Danish' },
      { voice: 'Bass', names: 'Matthew Loh' },
      { voice: 'VP', names: 'Garrick' },
    ],
    description: 'Originally performed by the Norwegian artist AURORA, this atmospheric piece speaks of the immense pain that one goes through in life and the longing desire for protection from this pain. Its lyrics hope for a peaceful sanctuary from the chaos of the world, and sing of the belief that love is the shelter that is required.\n\nSunny utilises the full extent of the human voice, from haunting whispers to thundering chants, in this 9-part a cappella rendition to enhance the ethereal nature of the song. The dramatic energy changes throughout this arrangement brings a new depth to this piece.',
    images: [
       {image: '/images/act2/softuni_group.jpg'},
       {image: '/images/act2/softuni_2.jpg'},
       {image: '/images/act2/softuni_3.jpg'},
    ]
  },
];

export default function ActTwo() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

      {/* GLOBAL BACKGROUND (same pattern as Act One) */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(10,10,10,0.55), rgba(10,10,10,0.75)),
            url('/images/act2/act2_bg.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) saturate(1.3)',
          transform: 'scale(1.05)',
          zIndex: 0,
        }}
      />

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        <ActHero
          actNumber={2}
          actTitle="Flux"
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {songs.map((song) => (
            <SongCard key={song.number} {...song} />
          ))}

          <ActNavigation
            prevHref="/act-one"
            prevLabel="Prev"
            nextHref="/act-three"
            nextLabel="Next"
          />
        </div>

      </div>
    </main>
  );
}