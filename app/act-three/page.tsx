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
      { voice: 'Baritone 2', names: 'Dave' },
      { voice: 'Bass', names: 'Zacharius' },
      { voice: 'VP', names: 'Ian' },
    ],
    description: '',
    images: [
       {image: '/images/act3/highway_group.jpg'},
       {image: '/images/act3/highway_2.jpg'},
       {image: '/images/act3/highway_3.jpg'},
    ]
  },
  {
    number: 12,
    title: 'Born Again',
    originalBy: 'Lisa',
    arranger: 'Shirin Fadhlin',
    cast: [
      { voice: 'Soprano', names: 'Rinny' },
      { voice: 'Mezzo 1', names: 'Chloe' },
      { voice: 'Mezzo 2', names: 'Megha' },
      { voice: 'Alto', names: 'Sandy' },
      { voice: 'Bass', names: 'Derek' },
      { voice: 'VP', names: 'Aditya' },
    ],
    description: '',
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
    arranger: 'Sandhya',
    cast: [
      { voice: 'Soprano', names: 'Huay Ping' },
      { voice: 'Mezzo', names: 'Laura' },
      { voice: 'Alto', names: 'Vicelya' },
      { voice: 'Tenor', names: 'Isaac Ling' },
      { voice: 'Bass', names: 'Matthias Khoo' },
      { voice: 'VP', names: 'Xin Hui' },
    ],
    description: '',
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
    arranger: 'Hoang',
    cast: [
      { voice: 'Soprano', names: 'Yi Hui' },
      { voice: 'Mezzo 1', names: 'Eunice' },
      { voice: 'Mezzo 2', names: 'Cassia Yap' },
      { voice: 'Alto', names: 'Vienna' },
      { voice: 'Tenor', names: 'Syaz' },
      { voice: 'Bass', names: 'Benny' },
      { voice: 'VP', names: 'Tee Lei' },
    ],
    description: '',
    images: [
       {image: '/images/act3/cbb_group.jpg'},
       {image: '/images/act3/cbb_2.jpg'},
       {image: '/images/act3/cbb_3.jpg'},
    ]
  },
  {
    number: 15,
    title: 'Medieval',
    originalBy: 'Shazza',
    arranger: 'Joseph',
    cast: [
      { voice: 'Soprano', names: 'Solstice' },
      { voice: 'Mezzo', names: 'Shennon' },
      { voice: 'Alto', names: 'Sandy' },
      { voice: 'Tenor', names: 'Ming Yang' },
      { voice: 'Bass', names: 'You Hung' },
      { voice: 'VP', names: 'Xiang Rong' },
    ],
    description: '',
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
          actTitle="Act Three: Metamorphosis"
          gradientFrom="#1a0e0e"
          gradientTo="#1a1510"
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <VideoPlaceholder label="Act Three — Full Performance" />

          {songs.map((song) => (
            <SongCard key={song.number} {...song} />
          ))}

          <ActNavigation
            prevHref="/act-two"
            prevLabel="Act Two"
            nextHref="/act-four"
            nextLabel="Act Four"
          />
        </div>

      </div>
    </main>
  );
}