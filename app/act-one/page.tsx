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
    description: '“The Greatest Show” is the exhilarating song from the movie The Greatest Showman. This piece is a celebration of one’s dreams, of achieving the impossible. As the opening number of the night, the song sets the stage for our Odyssey, a vibrant journey of passion and discovery. \n\nThis a cappella rendition, arranged by Isaac, also features other iconic songs from The Greatest Showman, bringing together the theme of pursuing one’s goals. Through the contrast of powerful chants with flowing counter-melodies, the song evokes a feeling of awe and wonder in the audience.',
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
    description: '“Classic” brings an upbeat groove to the first act of Odyssey. Originally performed by American pop music duo MKTO, this piece acts as a serenade to timeless beauties by referencing iconic celebrities and artistes of the past. \n\nArranger Marvin infuses this rendition with signature motifs from famous Motown, funk, and R&B artists such as Michael Jackson and Prince, bringing a fresh but on-theme twist. He also includes a mashup with Jackson 5’s “I Want You Back”, bringing a sugar-sweet yearning that seeks to sweep the audience off their feet.',
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
    description: '“Hypotheticals” by Lake Street Dive is a playful song about the rollercoaster of emotions one goes through while having a crush. From envisioning a myriad of what-ifs, to finding the courage to take action, this piece encapsulates a familiar experience reminiscent of adolescence.\n\nArranged by Sherwin, this rendition introduces a swing section and light, rhythmic vocals, driving home the fuzzy feeling associated with infatuation. It aims to bring out a sense of fun and youthful expression from the vocalists, a spirit we hope will be shared with the audience as well.',
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
    description: 'Originally performed by Indonesian singers Raisa and Isyana Sarasvati, “Anganku Anganmu” is a piece that advocates for overcoming differences and meaningless arguments among friends. It highlights the importance of forgiveness and communication, in order to forge closer relationships with the people around us.\n\nArranged by Vicelya, its expressive duets backed by layered background voices depict the strength of friendship and unity of ideas, both powerful tools used to overcome challenges and work towards one single purpose.',
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
    description: '“WHERE IS MY HUSBAND!” is a riveting piece, by British singer-songwriter RAYE, that mixes R&B and jazz-pop genres. It explores the longing for a partner, intertwined with the frustration of finding someone who checks all the boxes. This frustration is playfully portrayed in the iconic line, “I would like a ring!”.\n\nGabriel’s a cappella arrangement builds on the song’s already clever writing and lively music, retaining its bombastic energy with big band style background vocalists. He also reimagines it in a way that highlights Resonance’s greatest strength, its brilliantly creative members, to bring new colour and character to the song. The audience will surely enjoy the journey that this arrangement takes them on.',
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