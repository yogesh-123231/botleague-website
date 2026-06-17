# BOTLEAGUE - Production Frontend Requirements

## 1. Project Overview
**Goal**: Build a pixel-perfect, responsive website for "BOTLEAGUE" — India's Ultimate Robotics Arena — based on the attached Figma design screenshots. Includes authentication (Login/Register) with mock JWT.

**Tech Stack**: React 18+ with TypeScript, Vite, Tailwind CSS, React Router v6, Redux Toolkit, Axios, React Hook Form.

---

## 2. Design Tokens (Based on Screenshots)

### Colors
- **Background**: `#0A0A1A` (dark navy/black)
- **Primary Accent**: `#FF6B00` (orange)
- **Cards/Containers**: `#1A1A2E` or `bg-white/5 backdrop-blur-sm`
- **Text**: White (`text-white`), Gray (`text-gray-300`)
- **Gradient Text**: Orange to Yellow (`from-brand-orange to-yellow-400`)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `text-4xl md:text-6xl font-extrabold`
- **Subheadings**: `text-xl font-semibold`
- **Body**: `text-sm text-gray-300`

### Spacing
- **Section Padding**: `py-16 md:py-24`
- **Container**: `max-w-7xl mx-auto px-4 md:px-8`
- **Card Gap**: `gap-4 md:gap-6`

---

## 3. Pages & Routes

| Route | Component | Auth Required |
|-------|-----------|---------------|
| `/` | `Home` | No |
| `/login` | `Login` | No |
| `/register` | `Register` | No |
| `/dashboard` | `Dashboard` | Yes |

---

## 4. Component Structure

### 4.1 Common Components
- **`Button.tsx`**: primary (orange gradient), secondary (outline)
- **`Input.tsx`**: dark background, white border, orange focus ring
- **`Navbar.tsx`**: logo, nav links, auth buttons
- **`Footer.tsx`**: quick links, social icons

### 4.2 Section Components
1. **`Hero.tsx`**: Tag + "WATCH LIVE", Main heading, 2 CTAs
2. **`Competitions.tsx`**: Tabs (Live/Upcoming/Past), cards with status badges
3. **`UserJourney.tsx`**: 4-step horizontal/vertical timeline
4. **`WhatIsBotLeague.tsx`**: 4 numbered feature cards
5. **`Categories.tsx`**: 4 category cards with "LEARN MORE"
6. **`Disciplines.tsx`**: Sports title + grid of disciplines with emojis
7. **`WhyRegister.tsx`**: 4 benefit cards with icons
8. **`JoinEcosystem.tsx`**: 3 sign-up cards
9. **`Sponsors.tsx`**: Grid of sponsor names

### 4.3 Pages
- **`Home.tsx`**: Renders all sections in order
- **`Login.tsx`**: Email + Password, mock JWT auth
- **`Register.tsx`**: Name + Email + Password + Confirm
- **`Dashboard.tsx`**: Protected welcome page

---

## 5. Mock Data (from `mockData.ts`)

### `MOCK_COMPETITIONS`
```typescript
{ id: 1, title: 'Bengaluru Regionals', location: 'Bengaluru', status: 'live', description: 'Lorem Ipsum' }
{ id: 2, title: 'Event in Mumbai', location: 'BKC', date: '11/11/25', category: 'Lorem', status: 'upcoming' }
{ id: 3, title: 'Event in Delhi', location: 'BKC', date: '11/11/25', category: 'Lorem', status: 'upcoming' }
{ id: 4, title: 'Bengaluru Regionals', location: 'Bengaluru', status: 'past', description: 'Lorem Ipsum' }
{ id: 5, title: 'Bengaluru Regionals', location: 'Bengaluru', status: 'past', description: 'Lorem Ipsum' }
MOCK_DISCIPLINES
typescript
{ id: 1, name: 'Robo Race', icon: '🏎️' }
{ id: 2, name: 'Line Follower', icon: '🤖' }
{ id: 3, name: 'RC Racing', icon: '🚗' }
{ id: 4, name: 'FPV Drone Racing', icon: '🚁' }
{ id: 5, name: 'Aeromodelling', icon: '✈️' }
{ id: 6, name: 'Robo Hockey', icon: '🏒' }
{ id: 7, name: 'Robo War', icon: '⚔️' }
MOCK_BENEFITS
typescript
{ id: 1, title: 'LEADERBOARD', description: 'Benchmark your skills on India\'s official robotics leaderboard.', icon: '📊' }
{ id: 2, title: 'NATIONAL RECOGNITION', description: 'Compete with confidence under standardized, expert-led evaluation.', icon: '🏆' }
{ id: 3, title: 'FAIR JUDGING', description: 'Bridge the gap between arena victories and top-tier tech placements.', icon: '⚖️' }
{ id: 4, title: 'CAREER OPS', description: 'Join a nationwide community of elite innovators and robotics athletes.', icon: '💼' }
{ id: 5, title: 'HIGH-ENERGY ECO', description: 'Join a nationwide community of elite innovators and robotics athletes.', icon: '🔥' }
MOCK_JOURNEY
typescript
{ id: 1, step: 'STEP 1', title: 'BUILD YOUR TEAM' }
{ id: 2, step: 'STEP 2', title: 'COMPETE ACROSS INDIA' }
{ id: 3, step: 'STEP 3', title: 'EARN NATIONAL RANKING & VALUE' }
{ id: 4, step: 'STEP 4', title: 'JOIN THE LEAGUE' }
MOCK_LEAGUE_FEATURES
typescript
{ id: 1, title: 'STRUCTURED EVENTS', description: '"From one-off events to a year-round competitive season."', icon: '1' }
{ id: 2, title: 'DIGITAL IDENTITY', description: '"Your professional robotics legacy, tracked and verified."', icon: '2' }
{ id: 3, title: 'NATIONAL RANKING', description: '"Benchmark your skills against the best engineers in India."', icon: '3' }
{ id: 4, title: 'CAREER PATHWAY', description: '"Turning arena victories into real-world industry opportunities."', icon: '4' }
MOCK_CATEGORIES
typescript
{ id: 1, name: 'MINI MAKERS', subtitle: 'Where Creativity Meets Logic.', description: 'Ages 6-9' }
{ id: 2, name: 'JUNIOR INNOVATORS', subtitle: 'Engineering & Strategy Fundamentals.', description: 'Ages 10-13' }
{ id: 3, name: 'YOUNG ENGINEERS', subtitle: 'Advanced Wireless & Autonomous Control.', description: 'Ages 14-17' }
{ id: 4, name: 'ROBO MINDS', subtitle: 'Elite Professional Sports & Robotics.', description: 'Ages 18+' }
MOCK_ECOSYSTEM
typescript
{ id: 1, title: 'BECOME IN JUDGE', fields: ['Name', 'Location', 'Enroll'], buttonText: 'SIGN UP' }
{ id: 2, title: 'VOLUNTEER', fields: ['Name', 'Location', 'Enroll'], buttonText: 'SIGN UP' }
{ id: 3, title: 'COMMUNITY MEMBER', fields: ['Name', 'Location', 'Enroll'], buttonText: 'SIGN UP' }
MOCK_SPONSORS
typescript
['NIT DELHI', 'ROBO COMPANY', 'INDIAN BIT', 'INDIAN BIT', 'NIT SILCHAR', 'ROBO COMPANY', 'IIT BOMBAY', 'General Robotics', 'ROBO COMPANY']
QUICK_LINKS
typescript
['The Arena', 'Episodes', 'National Rankings', 'Programs', 'Rulebooks', 'Join the Team', 'Sponsorships', 'Help Center', 'Contact Us', 'Legal']
SOCIAL_MEDIA
typescript
[{ name: 'LinkedIn', url: 'https://linkedin.com/' }, { name: 'Twitter', url: 'https://twitter.com/' }, { name: 'Facebook', url: 'https://facebook.com/' }, { name: 'Instagram', url: 'https://instagram.com/' }]
6. Tailwind Configuration
tailwind.config.js
javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
});
7. Folder Structure
text
botleague-frontend/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── api/
    │   └── axiosInstance.ts
    ├── components/
    │   ├── common/
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   ├── Navbar.tsx
    │   │   └── Footer.tsx
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── Competitions.tsx
    │       ├── UserJourney.tsx
    │       ├── WhatIsBotLeague.tsx
    │       ├── Categories.tsx
    │       ├── Disciplines.tsx
    │       ├── WhyRegister.tsx
    │       ├── JoinEcosystem.tsx
    │       └── Sponsors.tsx
    ├── hooks/
    │   └── useAuth.ts
    ├── pages/
    │   ├── Home.tsx
    │   ├── Login.tsx
    │   ├── Register.tsx
    │   └── Dashboard.tsx
    ├── store/
    │   ├── index.ts
    │   └── authSlice.ts
    ├── types/
    │   └── index.ts
    └── utils/
        └── mockData.ts
8. Authentication (Mock JWT)
Login: test@botleague.com / password123

On success: Store token in localStorage, navigate to /dashboard

Logout: Clear state + localStorage

9. Implementation Checklist
Project setup with Vite + React + TS

Tailwind CSS configured

Redux store + authSlice created

Axios instance with interceptor

Navbar and Footer built

Login & Register pages with validation

Protected Dashboard route

ALL 9 sections built and rendered in Home.tsx

All mock data loaded

Responsive on mobile, tablet, desktop

text

---

## 🚀 Section-by-Section Prompts for Antigravity

### Prompt 1: Project Setup
> *"I've attached the BOTLEAGUE design image. First, set up the React + TypeScript + Vite project. Install Tailwind, Redux Toolkit, React Router, Axios, and React Hook Form. Create the folder structure as described in the `frontend-requirements.md` document. Build the Navbar and Footer components matching the design (dark background, orange accents, proper links). Do NOT build other sections yet."*

### Prompt 2: Hero Section
> *"Build the Hero component matching the design:*
> - *Top: 'LIVE: Episode 14 - Bengaluru Regionals' with an orange 'WATCH LIVE' button.*
> - *Main heading: 'Build.Compete.Rank.The National Ecosystem for Robotics Arena' with orange gradient text.*
> - *Two CTAs: 'CREATE ACCOUNT' (orange gradient button) and 'EXPLORE EVENTS' (outline button).*
> - *Background: dark gradient. Match exact font sizes and spacing from the image."*

### Prompt 3: Competitions
> *"Build the Competitions section:*
> - *Title: 'COMPETITIONS & EVENTS'*
> - *Three tabs: 'LIVE NOW', 'UPCOMING', 'PAST RESULTS'*
> - *For LIVE: Show 'Ongoing' badge in orange.*
> - *For UPCOMING: Show date, location, category + 'REGISTER' button.*
> - *For PAST: Show cards with description.*
> - *Use MOCK_COMPETITIONS data. Match the layout from the image exactly."*

### Prompt 4: User Journey
> *"Build the User Journey section:*
> - *Title: 'USER JOURNEY' + 'YOUR PATH TO THE LEAGUE'*
> - *4 steps horizontally: BUILD YOUR TEAM → COMPETE ACROSS INDIA → EARN NATIONAL RANKING & VALUE → JOIN THE LEAGUE*
> - *Each step has 'STEP X' badge and title below.*
> - *Match the exact spacing and layout from the image."*

### Prompt 5: What is BotLeague
> *"Build the 'What is BotLeague' section:*
> - *Title: 'WHAT IS BOTLEAGUE?'*
> - *4 numbered feature cards: STRUCTURED EVENTS, DIGITAL IDENTITY, NATIONAL RANKING, CAREER PATHWAY*
> - *Each card has a number (1-4), title, and description in quotes.*
> - *Match the grid layout from the image (2x2 or 4 columns)."*

### Prompt 6: Categories
> *"Build the Categories section:*
> - *Title: 'CATEGORIES'*
> - *4 cards: MINI MAKERS, JUNIOR INNOVATORS, YOUNG ENGINEERS, ROBO MINDS*
> - *Each card: Name (large), Subtitle (small), Description, 'LEARN MORE' link*
> - *Match the exact styling from the image (glassmorphism cards)."*

### Prompt 7: Disciplines
> *"Build the Disciplines section:*
> - *Title: 'SPORTS' + 'COMPETITION DISCIPLINES'*
> - *Show all disciplines: Robo Race, Line Follower, RC Racing, FPV Drone Racing & Aeromodelling, Robo Hockey, Robo War*
> - *Each card: Large emoji icon, Name below.*
> - *Grid layout matching the image."*

### Prompt 8: Why Register (Benefits)
> *"Build the 'Why Register' section:*
> - *Title: 'WHY REGISTER? THE LEAGUE ADVANTAGE'*
> - *5 benefit cards: LEADERBOARD, NATIONAL RECOGNITION, FAIR JUDGING, CAREER OPS, HIGH-ENERGY ECO*
> - *Each: Icon, UPPERCASE title, description.*
> - *Match the exact grid layout from the image."*

### Prompt 9: Join Ecosystem + Sponsors
> *"Build two sections:*
> - *Join Ecosystem: Title 'JOIN THE ECOSYSTEM'. 3 cards (BECOME IN JUDGE, VOLUNTEER, COMMUNITY MEMBER). Each has fields (Name, Location, Enroll) and 'SIGN UP' button.*
> - *Sponsors: Title 'SPONSORS'. Grid of sponsor names (NIT DELHI, ROBO COMPANY, INDIAN BIT, etc.).*
> - *Match both sections exactly to the design."*

### Prompt 10: Login & Register Pages
> *"Build Login and Register pages:*
> - *Login: Email + Password fields, 'Login' button, link to Register.*
> - *Register: Name + Email + Password + Confirm Password fields, 'Create Account' button.*
> - *Both pages: Dark background, glassmorphism card, centered layout.*
> - *Use React Hook Form for validation. Mock credentials: test@botleague.com / password123."*

### Prompt 11: Dashboard & Polish
> *"Build the Dashboard page: Simple protected page showing 'Welcome to Dashboard' with user email. Then polish everything:*
> - *Make all sections responsive (mobile, tablet, desktop).*
> - *Add correct spacing (py-16 on sections).*
> - *Ensure colors match the design (orange accents, dark backgrounds).*
> - *Connect all sections in Home.tsx in the correct order."*

---

## ✅ Final Instructions for Antigravity

1. **Save** the `frontend-requirements.md` document above.
2. **Upload** the full design image.
3. **Start** with Prompt 1 (Project Setup).
4. **After it builds**, send Prompt 2, then Prompt 3, and so on.
5. **For each prompt**, upload the cropped image of that specific section for best results.

This will give you a **pixel-perfect, production-ready BOTLEAGUE website** with JWT authentication, matching the Figma design 90%+! 🚀