export type FeatureIcon = 'person' | 'calendar' | 'layers';

export interface BulletPoint {
  title: string;
  body: string;
}

export interface FeatureScreen {
  number: string;
  title: string;
  description: string;
  icon: FeatureIcon;
  image?: string;
  imageAlt?: string;
}

export interface CaseStudyProject {
  id: string;
  client: string;
  year: string;
  headline: string;
  tags: string[];
  heroImage?: string;
  challenge: { label: string; title: string; bullets: BulletPoint[] };
  architecture: { label: string; title: string; image?: string; imageAlt?: string };
  highlights: { label: string; title: string; bullets: BulletPoint[] };
  keyFeatures: { label: string; title: string; screens: FeatureScreen[] };
  impact: { label: string; title: string; body: string };
  footerNav: {
    prev?: { label: string; href: string };
    next?: { label: string; href: string };
  };
}

export const projects: CaseStudyProject[] = [
  {
    id: 'academix',
    client: 'ACADEMIX',
    year: '2025',
    headline:
      'unified platform providing a streamlined end to end infrastructure that centralizes the entire onboarding and management lifecycle',
    tags: ['UX / UI Design', 'Data Visualization'],
    challenge: {
      label: 'The Challenge',
      title: 'Three core issues impacting team performance',
      bullets: [
        {
          title: 'Data Fragmentation',
          body: 'Each commander used a unique format for feedback, preventing performance benchmarking or the creation of team wide standards.',
        },
        {
          title: 'Lack of Visibility',
          body: 'Disjointed data prevents management from identifying and supporting recruits in real time.',
        },
        {
          title: 'Cognitive Overload',
          body: 'Commanders wasted valuable management time on maintaining files instead of focusing on mentoring the recruits.',
        },
      ],
    },
    architecture: {
      label: 'Site Architecture',
      title: 'Site Architecture',
    },
    highlights: {
      label: 'Design Highlights',
      title: 'Where the complexity lived',
      bullets: [
        {
          title: 'Complex Permission Management',
          body: 'Developed a permission mechanism that allows functional managers to handle command staff securely, demonstrating expertise in complex B2B and Enterprise systems.',
        },
        {
          title: 'Clean Design in Data Heavy Systems',
          body: 'Selected a calm visual language with clear separation between information hierarchies to minimize cognitive load and assist commanders in real time decision making.',
        },
      ],
    },
    keyFeatures: {
      label: 'Key Features',
      title: 'Three engines. One cognitive flow.',
      screens: [
        {
          number: '01',
          title: 'Trainee Overview',
          description:
            'The dashboard provides commanders with a real time overview of recruit progress, enabling them to track individual performance, identify skill gaps, and monitor team development through integrated evaluation feeds, task tracking, and analytical performance data.',
          icon: 'person',
          image: 'דף_משובים_כולל__ציונים_.jpg',
          imageAlt: 'Trainee overview dashboard',
        },
        {
          number: '02',
          title: 'Scheduling Engine',
          description: "Provides full transparency regarding the recruit's workload on any given day.",
          icon: 'calendar',
          image: 'הוספת_ציר_-_לאחר_לחיצה_על_כפתור.jpg',
          imageAlt: 'Scheduling engine calendar',
        },
        {
          number: '03',
          title: 'Content Management',
          description:
            'The platform features an intuitive interface that allows management to organize training content into distinct learning pillars and update curricula in real time.',
          icon: 'layers',
        },
      ],
    },
    impact: {
      label: 'Impact & Reflection',
      title: 'A manual process, transformed',
      body: "This project sharpened my ability to break down complex business processes into an intuitive interface, reaffirming that the true value of design lies in the user's ability to make evidence based decisions, on time, and with ease.",
    },
    footerNav: {},
  },
];
