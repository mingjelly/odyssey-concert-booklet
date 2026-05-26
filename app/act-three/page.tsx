import ActHero from '../components/ActHero';
import SongCard from '../components/SongCard';
import ActNavigation from '../components/ActNavigation';
import VideoPlaceholder from '../components/VideoPlaceholder';

const songs = [
  {
    number: 11,
    title: 'Life is a Highway',
    originalBy: 'Rascal Flatts',
    arranger: 'Jolene Toh',
    cast: [
      { voice: 'Tenor 1', names: 'Yu Heng' },
      { voice: 'Tenor 2', names: 'Luis' },
      { voice: 'Tenor 3', names: 'Xavier' },
      { voice: 'Tenor 4', names: 'Matthew' },
      { voice: 'Baritone 1', names: 'Nicky' },
      { voice: 'Baritone 2', names: 'Oak' },
      { voice: 'Bass', names: 'Zacharius' },
      { voice: 'VP', names: 'Ian' },
    ],
    description: "Originally written and performed by Tom Cochrane in 1991 and covered by Rascal Flatts for the Pixar animated film Cars (2006), 'Life Is a Highway' is a carefree embrace of all of life's twists and turns, and the joy that comes with riding it out with the people you love. This a cappella rendition leans into fun and exuberance, pulling inspiration from Alex Melton's pop-punk cover of the song and iconic boy bands like *NSYNC, Backstreet Boys, and The Treblemakers, as well as featuring several cheeky easter eggs from various songs about... well, cars. ᵏᵃ⁻ᶜʰᵒʷ⚡️",
    images: [
       {image: '/images/act3/highway_group.jpg'},
       {image: '/images/act3/highway_2.jpg'},
       {image: '/images/act3/highway_3.jpg'},
    ]
  },
  {
    number: 12,
    title: 'Born Again',
    originalBy: 'LISA ft. Doja Cat & RAYE',
    arranger: 'Shirin Fadhlin',
    cast: [
      { voice: 'Soprano', names: 'Rinny' },
      { voice: 'Mezzo 1', names: 'Chloe' },
      { voice: 'Mezzo 2', names: 'Megha' },
      { voice: 'Alto', names: 'Sandy' },
      { voice: 'Bass', names: 'Derek' },
      { voice: 'VP', names: 'Aditya' },
    ],
    description: 'Originally performed by LISA, Doja Cat and RAYE, “Born Again” is an empowerment anthem narrating the stories of women leaving toxic relationships and feeling the rejuvenation of being born anew. A pop mix of fierce and smooth vocals and vicious rap verses, the song encourages the gathering of strength among those who want to create a new life for themselves. ',
    images: [
       {image: '/images/act3/bornagain_group.jpg'},
       {image: '/images/act3/bornagain_2.jpg'},
       {image: '/images/act3/bornagain_3.jpg'},
    ]
  },
  {
    number: 13,
    title: 'The Rise and Fall of a Midwest Princess Mashup',
    originalBy: 'Chappell Roan',
    arranger: 'Sandhya Ramachandran',
    cast: [
      { voice: 'Soprano', names: 'Huay Ping' },
      { voice: 'Mezzo', names: 'Laura' },
      { voice: 'Alto', names: 'Vicelya' },
      { voice: 'Tenor', names: 'Isaac Ling' },
      { voice: 'Bass', names: 'Matthias' },
      { voice: 'VP', names: 'Xin Hui' },
    ],
    description: 'This mashup of Chappell Roan’s debut album, The Rise and Fall of Midwest Princess, embodies the colourful vibrancy of her songs: electric, witty, and campy. Arranged by Sandhya, this piece pulls together narrative threads in each of the 14 songs in the album into one cohesive story, a chaotic journey of self-discovery. It is also a reflection of Chappell Roan’s own life journey that many will surely connect with.',
    images: [
       {image: '/images/act3/chappell_group.jpg'},
       {image: '/images/act3/chappell_2.jpg'},
       {image: '/images/act3/chappell_3.jpg'},
    ]
  },
  {
    number: 14,
    title: 'Cardboard Box',
    originalBy: 'FLO',
    arranger: 'Nguyen Minh Hoang',
    cast: [
      { voice: 'Soprano', names: 'Yi Hui' },
      { voice: 'Mezzo 1', names: 'Eunice' },
      { voice: 'Mezzo 2', names: 'Cassia' },
      { voice: 'Alto', names: 'Vienna' },
      { voice: 'Tenor', names: 'Syaz' },
      { voice: 'Bass', names: 'Benny' },
      { voice: 'VP', names: 'Lei' },
    ],
    description: 'This a cappella piece starts with “Supermarket” by Say Now before slowly morphing into “Cardboard Box” by British R&B girl group FLO. It tells the story of a person overwhelmed with thoughts and emotions following a breakup before finding the path forward, by the packing of their ex’s things in cardboard boxes. Arranger Hoang captured the essence of R&B with this arrangement, taking the audience on a soulful journey of resolve and healing.',
    images: [
       {image: '/images/act3/cbb_group.jpg'},
       {image: '/images/act3/cbb_2.jpg'},
       {image: '/images/act3/cbb_3.jpg'},
    ]
  },
  {
    number: 15,
    title: 'MEDIEVAL',
    originalBy: 'shazza',
    arranger: 'Joseph Neo',
    cast: [
      { voice: 'Soprano', names: 'Solstice' },
      { voice: 'Mezzo', names: 'Shennon' },
      { voice: 'Alto', names: 'Sandy' },
      { voice: 'Tenor', names: 'Ming Yang' },
      { voice: 'Bass', names: 'You Hung' },
      { voice: 'VP', names: 'Xiang Rong' },
    ],
    description: '"MEDIEVAL" by shazza is an empowering anthem that calls on women to be fearlessly true to themselves. It explores the emotional depth and powerful resilience of womanhood, drawing on symbolism from the Middle Ages to reflect the struggles that women may face due to society’s often reductive expectations. Our a cappella rendition, arranged by Joseph, amplifies this emotional intensity through a darker, more immersive vocal energy, reflecting the raw tension between strength and fragility, honesty and inner conflict.',
    images: [
       {image: '/images/act3/medieval_group.jpg'},
       {image: '/images/act3/medieval_2.jpg'},
       {image: '/images/act3/medieval_3.jpg'},
    ]
  },
  
];

export default function ActThree() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

      {/* GLOBAL BACKGROUND */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(10,10,10,0.55), rgba(10,10,10,0.75)),
            url('/images/act3/act3_bg.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) saturate(1.35)',
          transform: 'scale(1.05)',
          zIndex: 0,
        }}
      />

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        <ActHero
          actNumber={3}
          actTitle="Metamorphosis"
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

          {songs.map((song) => (
            <SongCard key={song.number} {...song} />
          ))}

          <ActNavigation
            prevHref="/act-two"
            prevLabel="Prev"
            nextHref="/act-four"
            nextLabel="Next"
          />
        </div>

      </div>
    </main>
  );
}