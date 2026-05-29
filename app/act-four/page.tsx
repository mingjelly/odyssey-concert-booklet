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
      { voice: 'Mezzo', names: 'Shira' },
      { voice: 'Alto', names: 'Yasmin' },
      { voice: 'Tenor', names: 'Danial' },
      { voice: 'Bass', names: 'Zacharius' },
      { voice: 'VP', names: 'Oak' },
    ],
    description: 'Originally performed by Gloria Gaynor, “I Will Survive” is a classic disco hit about walking away from a bad relationship with style and confidence. It encourages listeners to remain defiant and stay true to themselves during tough times.\n\nArranged by Matthew Chang, this rendition embraces the sassiness of the lyrics, heightening the camp and playfulness of the original. He further injects 80s disco groove with references inspired by various covers of the song, demonstrating how the song has survived through the decades.',
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
    description: `IVE's hit song “I AM” is an explosive, high-energy anthem of self-love and fearless individuality. The song motivates the listeners to take control of their lives and to pursue their dreams. "Be a writer, 장르로는 fantasy" - everyone is the author of their own destiny.\n\nRaymond’s arrangement features NUS Resonance's very own K-pop girl group. Staying true to the K-pop genre, this rendition allows each individual part a turn in the spotlight, including a singing part from the vocal percussionist. It allows the vocalists’ distinct personalities to shine through.`,
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
    description: "Originally performed by grentperez, “When the Day is Done” is a bright, feel-good track that celebrates the idea that “there’s no place like home”. Its lyrics paint a vivid picture evocative of childhood memories and sun-soaked days.\n\nThis arrangement by Marvin is a dedication and love letter to NUS Resonance as a safe space for members to flourish. It reflects upon the solace this club has provided to all members after long days at school or work. He creates a sense of nostalgia by weaving in segments of “Valerie” by Mark Ronson and Amy Winehouse, a staple song in the club’s training programme for new members.",
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
    description: 'Sammy Rae & The Friends once again pulls into a groovy tune narrating the hard work put in by the everyday people for their success, from the early morning jobs, creating communities, and of course, standing up after repeated failures.\n\nArranged by Bryan, this rendition opens with Sir Duke, a similarly jazzy track that enhances the theatrics of the piece. It is a commemoration of all the efforts our members have collectively invested into making this concert a success, marking the end of our journey. We made it!',
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
    description: 'A farewell piece from the graduating batch of NUS Resonance, “Dog Days Are Over” by Florence + The Machine is a whimsical celebration of their joyful time in the group. The track embodies the bittersweet emotions that come with change, but accepting it all the same.\n\nIn this rendition, Bryan sprinkles familiar melodic fragments to create a sense of nostalgia and fulfilment that the singers experience as they close an unforgettable chapter in their journey. More than just an ending, it is a heartfelt thank you to NUS Resonance for helping them wade through the difficult dog days of their studies and personal lives.',
  },
  {
    number: 21,
    title: 'FINALE: Another Day of Sun',
    originalBy: 'La La Land',
    arranger: 'Napin Limcharoen and Oliver Li',
    cast: [
      { voice: 'Soprano', names:'Haorui' },
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
    description: '“Another Day of the Sun” brings a grand end to Odyssey, but certainly not the end of our voyage. As the opening number to the movie La La Land, this piece is a vibrant tribute to dreamers, set against the story backdrop of an aspiring artist. This finale captures our members’ hard work, perseverance, and shared memories that created this concert.\n\nApart from “Another Day of Sun”, this arrangement by Napin and Oliver interweaves the “Epilogue” from La La Land into it as well, symbolising that the beginning and the end of a journey is simply two sides of the same coin. The arrangers also include references to other songs from this concert as fun easter eggs for audience members with keen ears.\n\nAs the final chords ring out, we hope that the audience feel the same as us: happy, fulfilled and expectant for the next journey to start!',
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