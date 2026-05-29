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
    description: `Originally written and performed by Tom Cochrane in 1991 and covered by Rascal Flatts for the Pixar animated film Cars (2006), "Life Is a Highway" is a joyride on the road of life. It expresses the need to embrace the uncertainties in life and steel oneself against all odds.\n\nThis a cappella rendition, arranged by Jolene, leans into fun and exuberance, reimagining it as an all-guys boyband with influences from iconic groups like *NSYNC, Backstreet Boys, and The Treblemakers. She also ramps up the energy of the song with a pop-punk twist, inspired by Alex Melton's cover of the song. To further drive the point home, there are several cheeky easter eggs from various songs about... well, cars. ᵏᵃ⁻ᶜʰᵒʷ⚡️`,
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
    description: '“Born Again” speaks of leaving toxic relationships and loving oneself. Originally performed by prominent female artistes LISA, Doja Cat and RAYE, the track features a pop mix of smooth vocals and savage rap verses, cementing its place as a woman empowerment anthem.\n\nIn this a cappella arrangement, Shirin has kept the central theme of the original song with strong female solos. However, she also finds opportunities to give all parts their moment to shine, with solo lines that put them in the limelight.',
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
    description: 'Chappell Roan’s debut album, The Rise and Fall of a Midwest Princess is electric, witty, and kitschy.It is also a reflection of Chappell Roan’s own youth as she sings of partying, dealing with breakups, falling in love, and more.\n\nIn this mashup, Sandhya strings together narrative threads in each of the 14 songs in the album into one cohesive story, a chaotic journey of self-discovery. She embodies the kaleidoscopic vibrancy of the album with bubbly pop vocals and peppy spoken parts in a piece that is sure to delight the audience with carefree fun.',
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
    description: '“Cardboard Box” depicts the process of moving on after a breakup, by packing up an ex’s things in cardboard boxes. Originally performed by British R&B girl group FLO, it spins a bitter encounter into something more upbeat.\n\nIn this a cappella rendition, Hoang adds a dramatic flair by starting the arrangement with “Supermarket” by Say Now, signifying the initial whirlwind of emotions after finding out one’s partner had betrayed them. Hoang captures the essence of R&B through soaring riffs and crunchy chords, taking the audience on a soulful journey of resolve and healing.',
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
    description: '"MEDIEVAL" by shazza is an empowering piece that calls on women to be fearlessly true to themselves. It explores the emotional depth and powerful resilience of womanhood, drawing on symbolism from the Middle Ages to reflect the struggles that women may face due to society’s often reductive expectations.\n\nThis a cappella arrangement by Joseph amplifies the emotional intensity through a darker, more immersive vocal energy, reflecting the raw tension between strength and fragility, honesty and inner conflict.',
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