import ActHero from '../components/ActHero';
import SongCard from '../components/SongCard';
import ActNavigation from '../components/ActNavigation';
import VideoPlaceholder from '../components/VideoPlaceholder';

const songs = [
  {
    number: 1,
    title: 'The Greatest Show',
    originalBy: 'The Greatest Showman',
    medley: [
      { title: 'The Greatest Show' },
      { title: "This is Me" },
      { title: 'Come Alive' },
      { title: 'Rewrite the Stars' },
      { title: 'A Million Dreams' },
      { title: 'Never Enough' },
    ],
    arranger: 'Isaac Ling',
    cast: [
      { voice: 'Soprano', names: 'Ariel' },
      { voice: 'Mezzo', names: 'Solange' },
      { voice: 'Alto 1', names: 'Ler Shan' },
      { voice: 'Alto 2', names: 'Ashley' },
      { voice: 'Tenor 1', names: 'Syaz' },
      { voice: 'Tenor 2', names: 'Reuben' },
      { voice: 'Bass', names: 'Justin' },
      { voice: 'VP', names: 'Lei' },
    ],
    description: 'Opening the concert is “The Greatest Show”, a rendition of the exhilarating opening number of the movie The Greatest Showman. This piece encapsulates the longing for one’s dream and passion, a celebration of the richness and diversity of experience that culminates in this one grand show. Arranger Isaac brings forward this feeling of unity and diversity through contrasting powerful chants in unison with overflowing counter-melodies, setting the tone of this Odyssey with a festive, jubilant beginning. ',
    images: [
       {image: '/images/act1/showman_group.jpg'},
       {image: '/images/act1/showman_2.jpg'},
       {image: '/images/act1/showman_3.jpg'},
    ]
  },
  {
    number: 2,
    title: 'Classic',
    originalBy: 'MKTO',
    arranger: 'Marvin Choo',
    cast: [
      { voice: 'Tenor 1', names: 'Titus' },
      { voice: 'Tenor 2', names: 'Joseph' },
      { voice: 'Tenor 3', names: 'Danial' },
      { voice: 'Baritone', names: 'Dave' },
      { voice: 'Bass', names: 'Derek' },
      { voice: 'VP', names: 'Ian' },
    ],
    description: 'Dive into the upbeat groove of Odyssey with “Classic”, originally performed by American pop music duo MKTO. A mashup with Jackson 5’s “I Want You Back”,  arranger Marvin infuses this piece with signature motifs from iconic Motown, funk, and R&B artists, such as Michael Jackson and Prince. To all the timeless beauties in the crowd: get ready to be serenaded by our very own boy band! ',
    images: [
       {image: '/images/act1/classic_group.jpg'},
       {image: '/images/act1/classic_2.jpg'},
       {image: '/images/act1/classic_3.jpg'},
    ]
  },
  {
    number: 3,
    title: 'Hypotheticals',
    originalBy: 'Lake Street Dive',
    arranger: 'Sherwin Lam',
    cast: [
      { voice: 'Soprano', names: 'Napin' },
      { voice: 'Mezzo', names: 'Vienna' },
      { voice: 'Alto', names: 'Naomi' },
      { voice: 'Tenor', names: 'Cleon' },
      { voice: 'Bass', names: 'Josiah' },
      { voice: 'VP', names: 'Xiang Rong' },
    ],
    description: '“Hypotheticals” by Lake Street Dive is a playful song envisioning the plethora of what-ifs that entail from a potential romantic relationship and the courage to face those uncertainties.  Arranged by Sherwin, this rendition aims to bring out a sense of fun and youthful expression from the singers, a spirit we hope will be shared with the audience as well. ',
    images: [
       {image: '/images/act1/hypo_group.jpg'},
       {image: '/images/act1/hypo_2.jpg'},
       {image: '/images/act1/hypo_3.jpg'},
    ]
  },
  {
    number: 4,
    title: 'Anganku Anganmu',
    originalBy: 'Isyana Sarasvati & Raisa',
    arranger: 'Vicelya Visakha',
    cast: [
      { voice: 'Soprano', names: 'Eunice' },
      { voice: 'Mezzo', names: 'Shira' },
      { voice: 'Alto', names: 'Vicelya' },
      { voice: 'Tenor', names: 'Isaac Ling' },
      { voice: 'Bass', names: 'Howie' },
      { voice: 'VP', names: 'Ryan' },
    ],
    description: 'Originally performed by Indonesian singers Raisa and Isyana Sarasvati, “Anganku Anganmu” is a piece that advocates for overcoming differences and meaningless arguments among friends. Arranged by Vicelya, its evocative duets backed by layered background voices depict the strength of friendship and unity of ideas, both powerful tools used to overcome challenges and work towards one single purpose. ',
    images: [
       {image: '/images/act1/anganku_group.jpg'},
       {image: '/images/act1/anganku_2.jpg'},
       {image: '/images/act1/anganku_3.jpg'},
    ]
  },
  {
    number: 5,
    title: 'WHERE IS MY HUSBAND!',
    originalBy: 'RAYE',
    arranger: 'Gabriel Song',
    cast: [
      { voice: 'RAYE 1', names: 'Chloe' },
      { voice: 'RAYE 2', names: 'Yasmin' },
      { voice: 'RAYE 3', names: 'Yi Hui' },
      { voice: 'Soprano', names: 'Solstice' },
      { voice: 'Mezzo', names:'Shirin'},
      { voice: 'Alto', names: 'Yi Cheng' },
      { voice: 'Tenor', names: 'Dave' },
      { voice: 'Bass', names: 'Bryan' },
      { voice: 'VP', names: 'Ian' },
    ],
    description: 'British singer RAYE’s “WHERE IS MY HUSBAND!” is a riveting piece mixing R&B and pop tracks that explores the longing for a husband, intertwined with the frustration and exasperation that can come with the search for love. Gabriel’s a cappella rendition of this song builds on its already clever writing, reimagining in a way that highlights Resonance’s greatest strength, its brilliantly creative members, to bring new colour and character to the song.',
    images: [
       {image: '/images/act1/husband_group.jpg'},
       {image: '/images/act1/husband_2.jpg'},
       {image: '/images/act1/husband_3.jpg'},
    ]
  },
];

export default function ActOne() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

      {/* ✅ SINGLE GLOBAL BACKGROUND */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(10,10,10,0.55), rgba(10,10,10,0.75)),
            url('/images/act1/act1_bg.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) saturate(1.3)',
          transform: 'scale(1.05)',
          zIndex: 0,
        }}
      />

      {/* CONTENT ABOVE BACKGROUND */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        <ActHero
          actNumber={1}
          actTitle="Genesis"
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {songs.map((song) => (
            <SongCard key={song.number} {...song} />
          ))}

          <ActNavigation
            prevHref="/about"
            prevLabel="Prev"
            nextHref="/act-two"
            nextLabel="Next"
          />
        </div>

      </div>
    </main>
  );
}