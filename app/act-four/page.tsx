import ActHero from '../components/ActHero';
import SongCard from '../components/SongCard';
import ActNavigation from '../components/ActNavigation';
import VideoPlaceholder from '../components/VideoPlaceholder';

const songs = [
  {
    number: 16,
    title: 'I Will Survive',
    originalBy: 'Gloria Gaynor',
    arranger: 'Matthew Chang',
    cast: [
      { voice: 'Soprano', names: 'Rinny' },
      { voice: 'Mezzo', names: 'Shira*' },
      { voice: 'Alto', names: 'Yasmin' },
      { voice: 'Tenor', names: 'Danial' },
      { voice: 'Bass', names: 'Zacharius' },
      { voice: 'VP', names: 'Oak' },
    ],
    description: '',
    images: [
       {image: '/images/act4/survive_group.jpg'},
       {image: '/images/act4/survive_2.jpg'},
       {image: '/images/act4/survive_3.jpg'},
    ]
  },
  {
    number: 17,
    title: 'I AM',
    originalBy: 'IVE',
    arranger: 'Raymond Chan',
    cast: [
      { voice: 'Soprano 1', names: 'Hao Rui' },
      { voice: 'Soprano 2', names: 'Napin' },
      { voice: 'Mezzo 1', names: 'Solange' },
      { voice: 'Mezzo 2', names: 'Shennon' },
      { voice: 'Alto', names: 'Katherine' },
      { voice: 'VP', names: 'Xin Hui' },
    ],
    description: '',
    images: [
       {image: '/images/act4/iam_group.jpg'},
       {image: '/images/act4/iam_2.jpg'},
       {image: '/images/act4/iam_3.jpg'},
    ]
  },
  {
    number: 18,
    title: 'When the Day is Done',
    originalBy: 'grentperez',
    arranger: 'Marvin',
    cast: [
      { voice: 'Soprano', names: 'Raeanne' },
      { voice: 'Mezzo', names: 'Chantrice' },
      { voice: 'Alto', names: 'Ashley' },
      { voice: 'Tenor', names: 'Joseph' },
      { voice: 'Bass', names: 'Oak' },
      { voice: 'VP', names: 'Garrick' },
    ],
    description: '',
    images: [
       {image: '/images/act4/wttid_group.jpg'},
       {image: '/images/act4/wttid_2.jpg'},
       {image: '/images/act4/wttid_3.jpg'},
    ]
  },
  {
    number: 19,
    title: 'We Made It',
    originalBy: 'Sammy Rae & The Friends',
    arranger: 'Bryan Tan',
    cast: [
      { voice: 'Soprano', names: 'Xu En' },
      { voice: 'Mezzo', names: 'Pia' },
      { voice: 'Alto', names: 'Yi Cheng' },
      { voice: 'Tenor', names: 'Luis' },
      { voice: 'Bass', names: 'Howie' },
      { voice: 'VP', names: 'Edlyn' },
    ],
    description: '',
    images: [
       {image: '/images/act4/wemadeit_group.jpg'},
       {image: '/images/act4/wemadeit_2.jpg'},
       {image: '/images/act4/wemadeit_3.jpg'},
    ]
  },
  {
    number: 20,
    title: 'Dog Days are Over',
    originalBy: 'Florence + The Machine',
    arranger: 'Bryan Tan',
    cast: [
      { voice: 'Mezzo', names:'Raeanne' },
      { voice: 'Alto 1', names:'Shirin' },
      { voice: 'Alto 2', names:'Vicelya' },
      { voice: 'Alto 3', names:'Yi Cheng' },
      { voice: 'Baritone', names:'Nicky' },
      { voice: 'Bass 1', names:'Oak' },
      { voice: 'Bass 2', names:'Matthias Khoo' }
    ],
    description: '',
  },
  {
    number: 21,
    title: 'FINALE: Another Day of Sun',
    originalBy: 'La La Land',
    arranger: 'Bryan Tan',
    cast: [
      { voice: 'Soprano', names:'Hao Rui' },
      { voice: 'Mezzo', names:'Shennon' },
      { voice: 'Alto', names:'Katherine' },
      { voice: 'Tenor', names:'Ming Yang' },
      { voice: 'Bass', names:'Derek' },
      { voice: 'VP', names:'Ian' },
    ],
    soloist: [
      'Zea', 
      'Riley', 
      'Solstice', 
      'Matthew Chang',  
      'Rinny', 
      'Danial', 
      'Laura', 
      'Marvin',
      'Chantrice',
      'Naomi',
      'Eunice',
      'Vienna'
    ],
    description: '',
  }
];

export default function ActFour() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

      {/* GLOBAL BACKGROUND */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(10,10,10,0.55), rgba(10,10,10,0.75)),
            url('/images/act4/act4_bg.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) saturate(1.65) contrast(1.1)',
          transform: 'scale(1.05)',
          zIndex: 0,
        }}
      />

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        <ActHero
          actNumber={4}
          actTitle="Act Four: Transcendence"
          gradientFrom="#0e1a12"
          gradientTo="#1a1510"
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <VideoPlaceholder label="Act Four — Full Performance" />

          {songs.map((song) => (
            <SongCard key={song.number} {...song} />
          ))}

          <ActNavigation
            prevHref="/act-three"
            prevLabel="Act Three"
            nextHref="/acknowledgements"
            nextLabel="Acknowledgements"
          />
        </div>

      </div>
    </main>
  );
}