export interface Competition {
  id: number;
  title: string;
  location: string;
  status: 'live' | 'upcoming' | 'past';
  description?: string;
  date?: string;
  category?: string;
}

export interface Discipline {
  id: number;
  name: string;
  icon: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface JourneyStep {
  id: number;
  step: string;
  title: string;
}

export interface LeagueFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Category {
  id: number;
  name: string;
  subtitle: string;
  description: string;
}

export interface EcosystemCard {
  id: number;
  title: string;
  fields: string[];
  buttonText: string;
}

export interface SocialMedia {
  name: string;
  url: string;
  icon?: string;
}

export interface User {
  email: string;
  name?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}
