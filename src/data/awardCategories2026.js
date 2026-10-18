// Award category titles and numbering follow the foundation's supplied 2026 list.
// Eligibility below is a proposed draft for organiser approval, NOT an official rulebook.
// Category 14 was absent from the supplied list and is intentionally not invented.
// No 2026 nominee names, codes, vote totals or results are published in this feature.

const citizen = 'The nominee must be a South African citizen with a verifiable home, work or meaningful community connection to uPhongolo/Pongola.'
const entityCitizen = 'The organisation or venture must be represented or led by at least one South African citizen with a verifiable connection to uPhongolo/Pongola.'
const eventCitizen = 'The event must have a lead organiser who is a South African citizen with a verifiable connection to uPhongolo/Pongola.'

export const awardCategories2026 = [
  {
    number: 1, title: 'Best Maskandi Artist', group: 'Arts & media', kind: 'person',
    requirements: [citizen,
      'Must actively perform, record or create Maskandi music.',
      'Must have made original musical contributions or performed for an audience during the relevant awards period.',
      'Must be able to provide a verifiable recording, performance reference or public portfolio.',
      'Must demonstrate respectful conduct and a positive connection with the local music community.'],
  },
  {
    number: 2, title: 'Best Hip Hop Artist', group: 'Arts & media', kind: 'person',
    requirements: [citizen,
      'Must actively produce, write or perform Hip Hop music.',
      'Must demonstrate creative work released or performed during the relevant awards period.',
      'Must have verifiable examples of original songs, collaborations or live performances.',
      'Must contribute positively to local artistic expression or emerging talent.'],
  },
  {
    number: 3, title: 'Best DJ', group: 'Arts & media', kind: 'person',
    requirements: [citizen,
      'Must be active as a DJ at public, community or professionally organised events.',
      'Must show evidence of performances or mixes during the relevant awards period.',
      'Must demonstrate skill in music selection, mixing and audience engagement.',
      'Must maintain professional and respectful conduct in public performances.'],
  },
  {
    number: 4, title: 'Best Primary/High School Teacher', group: 'Education & service', kind: 'person',
    requirements: [citizen,
      'Must currently teach, or have taught during the relevant awards period, at a recognised primary or high school.',
      'Must demonstrate commitment to learners’ educational development.',
      'Must show evidence of positive teaching practice, mentorship or school contribution.',
      'Must be in good professional standing, subject to verification with the school or employer.'],
  },
  {
    number: 5, title: 'Best Taxi Driver', group: 'Education & service', kind: 'person',
    requirements: [citizen,
      'Must actively transport passengers in the local taxi or passenger-transport sector.',
      'Must hold the licences and permissions required for the service they provide.',
      'Must demonstrate safe, courteous and dependable passenger service.',
      'Must have a verifiable record of service or positive passenger/community feedback.'],
  },
  {
    number: 6, title: 'Best Retail Store/Garage/Restaurant Employee', group: 'Education & service', kind: 'person',
    requirements: [citizen,
      'Must work in a retail store, garage, restaurant or comparable customer-facing business.',
      'Must have been active in that role during the relevant awards period.',
      'Must demonstrate helpful, reliable customer service and good teamwork.',
      'Must have a verifiable employer or customer reference describing their contribution.'],
  },
  {
    number: 7, title: 'Best Business Man', group: 'Business & enterprise', kind: 'person',
    requirements: [citizen,
      'Must identify as a man and own, co-own or actively lead a business.',
      'Must demonstrate sustained business activity during the relevant awards period.',
      'Must show responsible trading practices and a tangible contribution to local economic activity.',
      'Must provide a verifiable description of the venture and its products or services.'],
  },
  {
    number: 8, title: 'Best Business Woman', group: 'Business & enterprise', kind: 'person',
    requirements: [citizen,
      'Must identify as a woman and own, co-own or actively lead a business.',
      'Must demonstrate sustained business activity during the relevant awards period.',
      'Must show responsible trading practices and a tangible contribution to local economic activity.',
      'Must provide a verifiable description of the venture and its products or services.'],
  },
  {
    number: 9, title: 'Best Service (Business)', group: 'Business & enterprise', kind: 'business',
    requirements: [entityCitizen,
      'Must offer an identifiable product or service that is accessible to the Pongola community.',
      'Must have actively served customers during the relevant awards period.',
      'Must show reliability, fairness and a positive customer-service record.',
      'Must provide a verifiable business name, service description and operating location.'],
  },
  {
    number: 10, title: 'Best Entertainment Event', group: 'Business & enterprise', kind: 'event',
    requirements: [eventCitizen,
      'Must be a genuine entertainment event held in, or meaningfully serving, uPhongolo/Pongola.',
      'Must have taken place within the relevant awards period.',
      'Must demonstrate safe and responsible event planning and audience care.',
      'Must have verifiable event details such as a programme, poster or public event record.'],
  },
  {
    number: 11, title: 'Best Non Profit Organisation', group: 'Community & sport', kind: 'organisation',
    requirements: [entityCitizen,
      'Must operate on a not-for-profit basis with a clear community-benefit mission.',
      'Must demonstrate actual programmes, outreach or services benefiting people in uPhongolo/Pongola.',
      'Must show responsible stewardship and be transparent about its activities.',
      'Must provide verifiable organisational details and evidence of community work.'],
  },
  {
    number: 12, title: 'Best Sportsperson', group: 'Community & sport', kind: 'person',
    requirements: [citizen,
      'Must actively participate in an identifiable competitive sport or sporting discipline.',
      'Must demonstrate participation or achievement during the relevant awards period.',
      'Must show dedication, sportsmanship and respect for fellow competitors.',
      'Must provide verifiable results, team references, competition records or similar evidence.'],
  },
  {
    number: 13, title: 'Best Clothing Brand', group: 'Business & enterprise', kind: 'brand',
    requirements: [entityCitizen,
      'Must be an identifiable clothing, apparel or fashion brand.',
      'Must have released, designed or sold clothing during the relevant awards period.',
      'Must demonstrate originality, product quality or a distinct creative identity.',
      'Must provide verifiable examples of garments, a catalogue or a public business presence.'],
  },
  {
    number: 15, title: 'Best Social Media Influencer', group: 'Arts & media', kind: 'person',
    requirements: [citizen,
      'Must regularly create public-facing social media content.',
      'Must demonstrate meaningful audience engagement during the relevant awards period.',
      'Must produce attributable, original or responsibly credited content.',
      'Must demonstrate responsible online conduct and positive community influence.'],
  },
  {
    number: 16, title: 'Best Radio Presenter/Podcast', group: 'Arts & media', kind: 'person',
    requirements: [citizen,
      'Must actively present or produce a radio programme or podcast.',
      'Must have released or broadcast episodes during the relevant awards period.',
      'Must demonstrate communication skill, audience engagement and responsible content practices.',
      'Must have verifiable broadcasts, episode links or station/production references.'],
  },
  {
    number: 17, title: 'Best Photographer', group: 'Arts & media', kind: 'person',
    requirements: [citizen,
      'Must actively create photographs professionally, commercially or as a recognised community creative.',
      'Must demonstrate original work produced during the relevant awards period.',
      'Must show technical skill, creative expression and responsible image use.',
      'Must provide a verifiable portfolio or credited examples of photographic work.'],
  },
  {
    number: 18, title: 'Best Community Builder/Leader', group: 'Community & sport', kind: 'person',
    requirements: [citizen,
      'Must have contributed to a community initiative, local organisation or civic effort.',
      'Must demonstrate measurable or clearly described positive impact on local residents.',
      'Must promote inclusion, cooperation and respectful community engagement.',
      'Must have verifiable community references or examples of service during the relevant awards period.'],
  },
  {
    number: 19, title: 'Lifetime Achievement Award', group: 'Community & sport', kind: 'person',
    requirements: [citizen,
      'Must have sustained meaningful contribution over several years rather than a single event.',
      'Must demonstrate an enduring positive legacy in their chosen field or community service.',
      'Must have influenced, supported or mentored others through their work.',
      'Must provide a verifiable record of long-term achievements or trusted community references.'],
  },
]

export const awardGroups2026 = ['All categories', 'Arts & media', 'Education & service', 'Business & enterprise', 'Community & sport']

export function getAwardCategory2026(value) {
  return awardCategories2026.find(category => String(category.number) === String(value)) || null
}

export function nomineeLabelForKind(kind) {
  return ({ person: 'Person', business: 'Business', organisation: 'Organisation', event: 'Event', brand: 'Clothing brand' })[kind] || 'Nominee'
}
