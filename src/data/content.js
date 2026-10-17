import {
  BookOpenCheck,
  HandHeart,
  HouseHeart,
  Medal,
  Megaphone,
  Trophy,
  UsersRound,
} from 'lucide-react'

export const socialLinks = {
  facebook: 'https://www.facebook.com/nqobizithabraputsi.thabede/',
  instagram: 'https://www.instagram.com/nqoba_thabede/',
  recognitionArticle:
    'https://www.citizen.co.za/zululand-observer/news-headlines/local-news/2024/12/19/pongola-npo-recognises-good-deeds/',
  awardsFacebook:
    'https://www.facebook.com/p/Umuntu-Ubongwa-Esaphila-Awards-61563852213218/',
  educationPetition:
    'https://www.petitions.com/pongola_deserves_its_tvet_college',
}

export const awards2026 = {
  edition: '5th Annual Awards',
  year: 2026,
  title: 'Umuntu Ubongwa Esaphila Awards',
  tagline: 'Honouring people while they are still here to feel the appreciation.',
  description:
    'An annual community recognition programme founded by Nqobizitha Thabede to celebrate living individuals, organisations and businesses whose work creates positive impact and community pride.',
  milestones: [
    { label: 'Nominees announced', date: '5 October 2026', iso: '2026-10-05' },
    { label: 'Voting opens', date: '11 October 2026', iso: '2026-10-11' },
    { label: 'Voting closes', date: '15 November 2026', iso: '2026-11-15' },
    { label: 'VIP ticket sales close', date: '16 November 2026', iso: '2026-11-16' },
    { label: 'Awards night', date: '4 December 2026', iso: '2026-12-04' },
  ],
  groups: ['Artists', 'Influencers', 'Entrepreneurs', 'Employees', 'Hustlers', 'Community leaders'],
  recognition: ['Award trophy', 'Recognition certificate', 'Cash prize / cheque where applicable'],
}


export const programmes = [
  {
    id: 'relief',
    title: 'Disaster & Family Relief',
    category: 'Community care',
    description:
      'Mobilising practical help for households facing sudden hardship, including families affected by fires and other emergencies.',
    icon: HouseHeart,
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=65',
    detail: 'Emergency response • Family support • Community fundraising',
  },
  {
    id: 'youth',
    title: 'Youth Skills & Opportunity',
    category: 'Youth empowerment',
    description:
      'Creating conversations, connections and pathways that help young people access education, skills development and opportunity.',
    icon: UsersRound,
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=65',
    detail: 'Skills exposure • Mentorship • Opportunity linkages',
  },
  {
    id: 'education',
    title: 'Education Advocacy',
    category: 'Learning & skills',
    description:
      'Advocating for stronger local access to post-school learning, including the long-term vision of a TVET college and skills centres in uPhongolo.',
    icon: BookOpenCheck,
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=65',
    detail: 'TVET access • Skills centres • Youth development',
  },
  {
    id: 'sport',
    title: 'Sport, Boxing & Recreation',
    category: 'Positive youth participation',
    description:
      'Using sport as a positive gathering point for young people through community activities such as the Nqobizitha Boxing Tournament.',
    icon: Trophy,
    image:
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=65',
    detail: 'Boxing • Recreation • Community building',
  },
  {
    id: 'recognition',
    title: 'Community Recognition',
    category: 'Celebrate good',
    description:
      'Recognising people whose everyday actions strengthen unity, service and positive change within Pongola communities.',
    icon: Medal,
    image:
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=65',
    detail: 'Local awards • Good deeds • Community unity',
  },
  {
    id: 'mobilisation',
    title: 'Community Mobilisation',
    category: 'Action together',
    description:
      'Bringing residents, volunteers, donors and sponsors together around causes that need collective attention and practical support.',
    icon: HandHeart,
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=65',
    detail: 'Volunteers • Sponsors • Grassroots action',
  },
]

export const campaigns = [
  {
    id: 'journey-to-promise-land',
    title: 'Journey to the Promise Land',
    subtitle: 'Pongola → Durban charity walk',
    description:
      'A 370+ kilometre charity walk created to raise funds to help rebuild the homes of the Mamba and Malinga families after devastating fires.',
    goal: 300000,
    raised: null,
    distance: '370+ km',
    purpose: 'Rebuild two family homes',
    status: 'Campaign updates shared by the foundation',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=65',
  },
]

export const activities = [
  {
    id: 'boxing',
    title: 'Nqobizitha Boxing Tournament',
    type: 'Annual community sport',
    status: 'Date announced through official channels',
    location: 'Pongola, KwaZulu-Natal',
    description:
      'A community boxing event designed to keep young people active, connected and engaged in positive local activities.',
    image:
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=65',
  },
  {
    id: 'recognition-awards',
    title: 'Umuntu Ubongwa Esaphila Awards',
    type: 'Annual community awards',
    status: '5th Annual Awards • 2026',
    location: 'Pongola, KwaZulu-Natal',
    description:
      'Celebrating living people whose work, enterprise, creativity and service make a positive difference — while they are still here to receive the appreciation.',
    to: '/awards',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=65',
  },
  {
    id: 'charity-walks',
    title: 'Extreme Charity Walks',
    type: 'Fundraising & awareness',
    status: 'Campaign-based activity',
    location: 'KwaZulu-Natal',
    description:
      'Long-distance walks that turn endurance into awareness and fundraising for families facing serious hardship.',
    image:
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=65',
  },
]

export const communityPromises = [
  {
    icon: Megaphone,
    title: 'Clearer updates',
    text: 'Keep campaigns, activities and opportunities in one place instead of relying on people to find an old social-media post.',
  },
  {
    icon: HandHeart,
    title: 'Easier participation',
    text: 'Give supporters a simple path to volunteer, sponsor, donate, nominate someone or request assistance.',
  },
  {
    icon: HouseHeart,
    title: 'People before paperwork',
    text: 'Use simple, respectful forms that collect what the foundation needs without making community members feel like a case number.',
  },
]
