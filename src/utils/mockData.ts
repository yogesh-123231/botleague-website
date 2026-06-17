import { 
  Competition, 
  Discipline, 
  Benefit, 
  JourneyStep, 
  LeagueFeature, 
  Category, 
  EcosystemCard, 
  SocialMedia 
} from '../types';

export const MOCK_COMPETITIONS: Competition[] = [
  { 
    id: 1, 
    title: 'Bengaluru Regionals', 
    location: 'Bengaluru', 
    status: 'live', 
    description: 'The standard robotic arena matches with elite regional tech teams competing head-to-head.' 
  },
  { 
    id: 2, 
    title: 'Event in Mumbai', 
    location: 'BKC, Mumbai', 
    date: '11/11/25', 
    category: 'Robo Race', 
    status: 'upcoming' 
  },
  { 
    id: 3, 
    title: 'Event in Delhi', 
    location: 'IIT Delhi, Delhi', 
    date: '25/11/25', 
    category: 'Robo War', 
    status: 'upcoming' 
  },
  { 
    id: 4, 
    title: 'Bengaluru Regionals (Qualifier A)', 
    location: 'Bengaluru', 
    status: 'past', 
    description: 'Round A qualifications for elite divisions completed under standardized rules.' 
  },
  { 
    id: 5, 
    title: 'Bengaluru Regionals (Qualifier B)', 
    location: 'Bengaluru', 
    status: 'past', 
    description: 'Round B qualifiers showcasing high-speed autonomous path finding algorithms.' 
  }
];

export const MOCK_DISCIPLINES: Discipline[] = [
  { id: 1, name: 'Robo Race', icon: '🏎️' },
  { id: 2, name: 'Line Follower', icon: '🤖' },
  { id: 3, name: 'RC Racing', icon: '🚗' },
  { id: 4, name: 'FPV Drone Racing & Aeromodelling', icon: '🚁' },
  { id: 5, name: 'Robo Hockey', icon: '🏒' },
  { id: 6, name: 'Robo War', icon: '⚔️' }
];

export const MOCK_BENEFITS: Benefit[] = [
  {
    id: 1,
    title: 'LEADERBOARD',
    description: 'Benchmark your skills on India\'s official robotics leaderboard.',
    icon: '📊'
  },
  {
    id: 2,
    title: 'NATIONAL RECOGNITION',
    description: '"Compete with confidence under standardized, expert-led evaluation."',
    icon: '🏆'
  },
  {
    id: 3,
    title: 'FAIR JUDGING',
    description: '"Bridge the gap between arena victories and top-tier tech placements."',
    icon: '⚖️'
  },
  {
    id: 4,
    title: 'CAREER OPS',
    description: '"Join a nationwide community of elite innovators and robotics athletes."',
    icon: '💼'
  }
];

export const MOCK_JOURNEY: JourneyStep[] = [
  { id: 1, step: 'STEP 1', title: 'BUILD YOUR TEAM' },
  { id: 2, step: 'STEP 2', title: 'COMPETE ACROSS INDIA' },
  { id: 3, step: 'STEP 3', title: 'EARN NATIONAL RANKING & VALUE' },
  { id: 4, step: 'STEP 4', title: 'JOIN THE LEAGUE' }
];

export const MOCK_LEAGUE_FEATURES: LeagueFeature[] = [
  { 
    id: 1, 
    title: 'STRUCTURED EVENTS', 
    description: '"From one-off events to a year-round competitive season."', 
    icon: '1' 
  },
  { 
    id: 2, 
    title: 'DIGITAL IDENTITY', 
    description: '"Your professional robotics legacy, tracked and verified."', 
    icon: '2' 
  },
  { 
    id: 3, 
    title: 'NATIONAL RANKING', 
    description: '"Benchmark your skills against the best engineers in India."', 
    icon: '3' 
  },
  { 
    id: 4, 
    title: 'CAREER PATHWAY', 
    description: '"Turning arena victories into real-world industry opportunities."', 
    icon: '4' 
  }
];

export const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: 'MINI MAKERS', subtitle: 'Where Creativity Meets Logic.', description: 'Ages 6-9' },
  { id: 2, name: 'JUNIOR INNOVATORS', subtitle: 'Engineering & Strategy Fundamentals.', description: 'Ages 10-13' },
  { id: 3, name: 'YOUNG ENGINEERS', subtitle: 'Advanced Wireless & Autonomous Control.', description: 'Ages 14-17' },
  { id: 4, name: 'ROBO MINDS', subtitle: 'Elite Professional Sports & Robotics.', description: 'Ages 18+' }
];

export const MOCK_ECOSYSTEM: EcosystemCard[] = [
  {
    id: 1,
    title: 'BECOME IN JUDGE',
    fields: ['Name', 'Location', 'Enroll'],
    buttonText: 'SIGN UP'
  },
  {
    id: 2,
    title: 'VOLUNTEER',
    fields: ['Name', 'Location', 'Enroll'],
    buttonText: 'SIGN UP'
  },
  {
    id: 3,
    title: 'COMMUNITY MEMBER',
    fields: ['Name', 'Location', 'Enroll'],
    buttonText: 'SIGN UP'
  }
];

export const MOCK_SPONSORS = [
  { id: 1, name: 'NIT DELHI', logo: '/assets/sponsors/nit-delhi.png' },
  { id: 2, name: 'ROBO COMPANY', logo: '/assets/sponsors/robo-company.png' },
  { id: 3, name: 'INDIAN BIT', logo: '/assets/sponsors/indian-bit.png' },
  { id: 4, name: 'NIT SILCHAR', logo: '/assets/sponsors/nit-silchar.png' },
  { id: 5, name: 'IIT BOMBAY', logo: '/assets/sponsors/iit-bombay.png' },
  { id: 6, name: 'General Robotics', logo: '/assets/sponsors/general-robotics.png' }
];

export const QUICK_LINKS = [
  'The Arena',
  'Episodes',
  'National Rankings',
  'Programs',
  'Rulebooks',
  'Sponsorships',
  'Help Center',
  'Contact Us',
  'Legal'
];

export const SOCIAL_MEDIA: SocialMedia[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/', icon: '📷' },
  { name: 'Twitter', url: 'https://twitter.com/', icon: '🐦' },
  { name: 'Facebook', url: 'https://facebook.com/', icon: '📸' },
  { name: 'Instagram', url: 'https://instagram.com/', icon: '🎥' }
];