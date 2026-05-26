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
    description: 'Originally performed by Gloria Gaynor, “I Will Survive” is a classic disco anthem about walking away from a bad relationship with style and confidence. Arranged by Matthew Chang, this rendition embraces the sassiness of the lyrics, heightening the camp and playfulness of the original with references inspired by various covers of the song.',
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
      { voice: 'Soprano 1', names: 'Napin' },
      { voice: 'Soprano 2', names: 'Haorui' },
      { voice: 'Mezzo 1', names: 'Solange' },
      { voice: 'Mezzo 2', names: 'Shennon' },
      { voice: 'Alto', names: 'Katherine' },
      { voice: 'VP', names: 'Xin Hui' },
    ],
    description: "IVE's hit song I AM is an explosive, high-energy anthem of self-love and fearless individuality, empowering us to take control, embrace our fears and be our genuine selves. Be inspired by NUS Resonance's very own K-pop girl group as they wow you with their powerful voices, dazzling choreography and unapologetic confidence. 'Be a writer, 장르로는 fantasy' - you are the author of your own destiny. How will you craft your masterpiece?",
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
    arranger: 'Marvin Choo',
    cast: [
      { voice: 'Soprano', names: 'Raeanne' },
      { voice: 'Mezzo', names: 'Chantrice' },
      { voice: 'Alto', names: 'Ashley' },
      { voice: 'Tenor', names: 'Joseph' },
      { voice: 'Bass', names: 'Oak' },
      { voice: 'VP', names: 'Garrick' },
    ],
    description: "A love letter to NUS Resonance, this piece reflects upon the solace this club has provided us after long days at school or work. While the original discusses the comfort of family, arranger Marvin re-interprets the song to express his gratitude to the NUS Resonance family and the safe space it has provided for its members to flourish. Listen out for the interpolation of “Valerie” by Mark Ronson and Amy Winehouse, a song which has been covered by many generations of Resonance members as part of the Resonance First-Year (RFY) course! Fun fact: In the prechorus, grentperez sings, 'take me back to ‘01, where life just begun.' Guess which a cappella club also began its life in ‘01? (Happy 25th, Reso!)",
    images: [
       {image: '/images/act4/wttid_group.jpg'},
       {image: '/images/act4/wttid_2.jpg'},
       {image: '/images/act4/wttid_3.jpg'},
    ]
  },
  {
    number: 19,
    title: 'We Made It',
    originalBy: 'Sammy Rae & The Friends ft. Celisse',
    arranger: 'Bryan Tan',
    cast: [
      { voice: 'Soprano', names: 'Xu En' },
      { voice: 'Mezzo', names: 'Pia' },
      { voice: 'Alto', names: 'Yi Cheng' },
      { voice: 'Tenor', names: 'Luis' },
      { voice: 'Bass', names: 'Howie' },
      { voice: 'VP', names: 'Edlyn' },
    ],
    description: 'Sammy Rae & The Friends once again pulls into a groovy tune narrating the hard work put in by the everyday people for their success, from the early morning jobs, creating communities, and of course, standing up after repeated failures. And for us, it is also a celebration of all the efforts we have collectively invested into making this concert a success, and we have finally reached the end of our journey. We made it!',
    images: [
       {image: '/images/act4/wemadeit_group.jpg'},
       {image: '/images/act4/wemadeit_2.jpg'},
       {image: '/images/act4/wemadeit_3.jpg'},
    ]
  },
  {
    number: 20,
    title: 'Dog Days Are Over',
    originalBy: 'Florence + The Machine',
    arranger: 'Bryan Tan',
    cast: [
      { voice: 'Mezzo', names:'Raeanne' },
      { voice: 'Alto 1', names:'Shirin' },
      { voice: 'Alto 2', names:'Vicelya' },
      { voice: 'Alto 3', names:'Yi Cheng' },
      { voice: 'Baritone', names:'Nicky' },
      { voice: 'Bass 1', names:'Oak' },
      { voice: 'Bass 2', names:'Matthias' }
    ],
    description: 'A farewell piece from the graduating batch of NUS Resonance, “Dog Days Are Over” by Florence + The Machine is an exuberant celebration of their joyful time in the group. More than just an ending, it is a heartfelt thank you to NUS Resonance for helping them wade through the difficult dog days of their studies and personal lives. In this rendition, familiar melodic fragments are interwoven to create a sense of nostalgia and fulfilment that the singers experience as they close an unforgettable chapter in their journey.',
  },
  {
    number: 21,
    title: 'FINALE: Another Day of Sun',
    originalBy: 'La La Land',
    arranger: 'Napin Limcharoen and Oliver Li',
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
    description: '“Another Day of the Sun” brings a grand end to Odyssey, but certainly not the end of our journey. Hailing from the movie La La Land, this piece is a vibrant tribute to dreamers in you. Set against the story backdrop of an aspiring artist, and interwoven with a brief return to “Epilogue” from La La Land, this finale captures our members’ hard work, perseverance, and shared memories that created this concert. As the final chords ring out, we hope that you feel the same as us: happy, fulfilled and expectant for the next journey to start!',
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
          actTitle="Transcendence"
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

          {songs.map((song) => (
            <SongCard key={song.number} {...song} />
          ))}

          <ActNavigation
            prevHref="/act-three"
            prevLabel="Prev"
            nextHref="/acknowledgements"
            nextLabel="Next"
          />
        </div>

      </div>
    </main>
  );
}