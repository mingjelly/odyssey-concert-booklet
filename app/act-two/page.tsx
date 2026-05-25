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
    description: '',
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
    description: '',
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
    description: '',
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
    description: '',
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
      { voice: 'Soprano 1', names: 'Hao Rui' },
      { voice: 'Soprano 2', names: 'Riley' },
      { voice: 'Mezzo', names: 'Nicole' },
      { voice: 'Alto', names: 'Katherine' },
      { voice: 'Tenor 1', names: 'Ming Yang' },
      { voice: 'Tenor 2', names: 'Danish' },
      { voice: 'Bass', names: 'Matthew Loh' },
      { voice: 'VP', names: 'Garrick' },
    ],
    description: '',
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
          actTitle="Act Two: Flux"
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <VideoPlaceholder label="Act Two — Full Performance" />

          {songs.map((song) => (
            <SongCard key={song.number} {...song} />
          ))}

          <ActNavigation
            prevHref="/act-one"
            prevLabel="Act One"
            nextHref="/act-three"
            nextLabel="Act Three"
          />
        </div>

      </div>
    </main>
  );
}