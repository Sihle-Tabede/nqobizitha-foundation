import { socialLinks } from './content'

// Editorial reflections, not attributed testimony. Do not publish participant quotes without consent.
export const reflections = [
  {
    id: 'dignity',
    number: '01',
    category: 'Family relief',
    title: 'Support begins by listening',
    summary: 'When a family faces sudden hardship, the first step is to understand what they need, protect their dignity and clearly explain how a community can respond.',
    prompt: 'How can emergency assistance be both practical and respectful?',
  },
  {
    id: 'opportunity',
    number: '02',
    category: 'Youth opportunity',
    title: 'Access matters as much as ambition',
    summary: 'Talent exists in uPhongolo. Young people still need pathways to training, recreation, mentoring and opportunity that are affordable and close enough to reach.',
    prompt: 'What would make skills and education easier to access locally?',
  },
  {
    id: 'recognition',
    number: '03',
    category: 'Community recognition',
    title: 'Give people their flowers while they are here',
    summary: 'The Umuntu Ubongwa Esaphila Awards place value on recognising living contributors to everyday community progress and celebrating examples that can inspire others.',
    prompt: 'Who has made a difference in your community, and how?',
  },
]

export const pastWinners = [
  {
    id: 'gugu-portia',
    name: 'Gugu Portia',
    category: 'Best Businesswoman',
    year: 2024,
    sourceName: 'Zululand Observer, 19 Dec 2024',
    sourceUrl: socialLinks.recognitionArticle,
    evidence: 'Identified in a published photo caption; full official results still need organiser verification.',
  },
  {
    id: 'malume-wabashana',
    name: 'Malume Wabashana',
    category: 'Best Social Media Influencer',
    year: 2024,
    sourceName: 'Zululand Observer, 19 Dec 2024',
    sourceUrl: socialLinks.recognitionArticle,
    evidence: 'Identified in a published photo caption; full official results still need organiser verification.',
  },
]

/**
 * Selected from the photograph archive provided for this website.
 * Image context, dates and publication permissions must be verified by the
 * Foundation; subjects are not identified or attributed here.
 */
export const galleryItems = [
  {
    id: 'boxing-tournament', category: 'Boxing', title: 'Community boxing in action',
    kicker: 'Sport & participation',
    description: 'Boxing scenes from the supplied photograph collection. The foundation also organises the Nqobizitha Boxing Tournament to bring people together around sport.',
    photo: '/images/activities/boxing-ring-action.webp',
    photoAlt: 'Two boxers competing inside a boxing ring',
    sourceName: 'Background reporting on the boxing tournament',
    sourceUrl: 'https://www.snl24.com/dailysun/celebs/uzalo-stars-cebo-mthembu-and-thembinkosi-thwala-to-box-in-real-life-at-nqobizitha-tournament-in-kzn-20250608/',
  },
  {
    id: 'awards-celebration', category: 'Awards', title: 'Celebrating community recognition',
    kicker: 'Community appreciation',
    description: 'Award-recognition photographs from the provided collection. The Umuntu Ubongwa Esaphila Awards celebrate service, creativity and positive contributions.',
    photo: '/images/activities/awards-stage.webp',
    photoAlt: 'Group of people holding certificates during an awards presentation',
    sourceName: 'Background reporting on the awards', sourceUrl: socialLinks.recognitionArticle,
  },
  {
    id: 'charity-walk', category: 'Campaigns', title: 'Walking with purpose',
    kicker: 'Community walks',
    description: 'Community walking moments from the supplied archive. Long-distance walks are part of the foundation’s approach to awareness and support for families.',
    photo: '/images/activities/walk-landscape.webp',
    photoAlt: 'Small group walking through a green open landscape',
    sourceName: 'Foundation public updates', sourceUrl: socialLinks.facebook,
  },
  {
    id: 'boxing-bout', category: 'Boxing', title: 'In the ring',
    kicker: 'Boxing',
    description: 'A photograph of a bout taken from the provided collection.',
    photo: '/images/activities/boxing-bout.webp', photoAlt: 'Boxers participating in a ring bout',
  },
  {
    id: 'awards-recognition', category: 'Awards', title: 'A moment of recognition',
    kicker: 'Awards',
    description: 'A recognition moment from the provided photo collection; individual identities and ceremony dates have not been verified.',
    photo: '/images/activities/awards-recognition.webp',
    photoAlt: 'People lifting a person in front of an event backdrop',
  },
  {
    id: 'community-walk', category: 'Campaigns', title: 'Along the journey',
    kicker: 'Walking together',
    description: 'Group walking photograph from the supplied archive.',
    photo: '/images/activities/walk-community.webp',
    photoAlt: 'Group of walkers outdoors near a road and open landscape',
  },
  {
    id: 'boxing-training', category: 'Boxing', title: 'Boxing moments',
    kicker: 'Sport',
    description: 'Another boxing-action photograph from the supplied collection.',
    photo: '/images/activities/boxing-training.webp',
    photoAlt: 'Two boxers facing each other during a boxing match',
  },
  {
    id: 'awards-presentation', category: 'Awards', title: 'Recognition and appreciation',
    kicker: 'Awards',
    description: 'An awards presentation from the provided photo collection.',
    photo: '/images/activities/awards-presentation.webp',
    photoAlt: 'Two people standing together during an award presentation',
  },
  {
    id: 'walking-team', category: 'Activities', title: 'Community on the move',
    kicker: 'Collective action',
    description: 'A community group photograph from the supplied walking collection.',
    photo: '/images/activities/walk-team.webp',
    photoAlt: 'A group of people walking together along a road',
  },
  {
    id: 'boxing-gathering', category: 'Boxing', title: 'Boxing gathering',
    kicker: 'Community sport',
    description: 'A group image from the boxing photographs provided for this website.',
    photo: '/images/activities/boxing-gathering.webp',
    photoAlt: 'People gathered in a boxing venue',
  },
  {
    id: 'awards-ceremony', category: 'Awards', title: 'Celebrating achievement',
    kicker: 'Recognition',
    description: 'A photograph of an awards presentation from the supplied archive.',
    photo: '/images/activities/awards-ceremony.webp',
    photoAlt: 'Two attendees photographed during a recognition ceremony',
  },
  {
    id: 'walk-route', category: 'Campaigns', title: 'Steps along the route',
    kicker: 'Campaigns',
    description: 'A photograph of community walkers from the supplied collection.',
    photo: '/images/activities/walk-route.webp',
    photoAlt: 'Walkers and road signs along a route',
  },
  {
    id: 'walk-group', category: 'Activities', title: 'Together outdoors',
    kicker: 'Community activities',
    description: 'Community participation photograph from the supplied collection.',
    photo: '/images/activities/walk-group.webp',
    photoAlt: 'Community members outside together during a walk',
  },
  {
    id: 'awards-celebration-photo', category: 'Awards', title: 'Community awards',
    kicker: 'Awards',
    description: 'Another moment from the supplied awards collection.',
    photo: '/images/activities/awards-celebration.webp',
    photoAlt: 'People standing together at a recognition event',
  },
]
