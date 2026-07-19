export type FeatureIcon = 'person' | 'calendar' | 'layers' | 'sun' | 'play' | 'check' | 'heart' | 'star';

export interface BulletPoint {
  title: string;
  body: string;
}

export interface FeatureScreen {
  number: string;
  title: string;
  description: string;
  descriptionTitle?: string;
  icon: FeatureIcon;
  image?: string;
  imageAlt?: string;
  images?: { src: string; alt: string }[];
  subSections?: { title: string; description?: string; image: string; imageAlt: string }[];
}

export interface StrategyCard {
  label: string;
  title: string;
  body: string;
}

export interface KpiCard {
  label?: string;
  title: string;
  description: string;
  icon: FeatureIcon;
}

export interface StoryCard {
  label: string;
  paragraphs: string[];
}

export interface ValueCard {
  title: string;
  body: string;
}

export interface StatBox {
  number: string;
  body: string;
}

export interface ScenarioCard {
  tag: string;
  body: string;
}

export interface RoadmapItem {
  title: string;
  body: string;
  badge: string;
  icon?: 'family' | 'money';
}

export interface RimonData {
  problem: {
    label: string;
    title: string;
    intro: string;
    reasons: string[];
    implications: string[];
    interviews: { title: string; body: string };
  };
  researchInsights: {
    label: string;
    title: string;
    body: string;
    values: ValueCard[];
    conclusions: string[];
  };
  targetAudience: {
    label: string;
    title: string;
    primaryTarget: string;
    stats: StatBox[];
    mainChallenges: string[];
    coreValues: { headline: string; bullets: string[] };
    goal: string;
  };
  successMetrics: {
    label: string;
    title: string;
    initial: string[];
    advanced: string[];
  };
  keyScreens: {
    label: string;
    title: string;
    screens: { label: string; image?: string; imageAlt?: string }[];
  };
  uiDesign: {
    label: string;
    title: string;
    screens: { label: string; image?: string; imageAlt?: string }[];
  };
  businessModel: {
    label: string;
    title: string;
    body: string;
  };
  roadmap: {
    label: string;
    title: string;
    items: RoadmapItem[];
  };
}

export interface CaseStudyProject {
  id: string;
  client: string;
  year: string;
  headline: string;
  subtitle?: string;
  tags: string[];
  heroImage?: string;
  heroImagePosition?: string;
  heroBg?: string;
  heroBgMobile?: string;
  heroBgDarkText?: boolean;

  // Academix sections
  problem?: { label: string; title: string; body?: string };
  causes?: { label: string; title: string; bullets: string[]; result: string };
  targetAudience?: { label: string; title: string; groups: { title: string; body: string }[] };
  marketResearch?: { label: string; title: string; findings: { number: string; title: string; body: string }[] };
  solution?: { label: string; body: string; valueLabel: string; values: string[] };

  // Neon Odyssey sections
  rootCauses?: { label: string; title: string; bullets: BulletPoint[] };
  consequences?: { label: string; title: string; bullets: BulletPoint[] };
  overview?: { label: string; title: string; body: string; boldLead?: string };
  strategy?: { label: string; title: string; cards: StrategyCard[] };
  research?: { label: string; title: string; body?: string; bullets: BulletPoint[] };
  game?: { label: string; title: string; bullets: BulletPoint[] };
  narrative?: { label: string; title: string; intro: string; story: StoryCard };
  b2b?: { label: string; title: string; body?: string; image?: string; imageAlt?: string };
  kpis?: { label: string; title: string; body?: string; cards: KpiCard[] };

  // Rimon sections
  rimon?: RimonData;
  targetAudienceImage?: string;

  challenge: { label: string; title: string; bullets: BulletPoint[] };
  architecture: { label: string; title: string; image?: string; imageMobile?: string; imageAlt?: string; iframeUrl?: string };
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
    headline: 'Unified platform for seamless employee training',
    tags: ['Dashboard', 'Complex System'],
    heroImage: '/images/home/aca.jpg',
    heroImagePosition: 'right',
    heroBg: '/images/academix/acaTop.jpg',
    heroBgMobile: '/images/academix/acaTopMobile.jpg',
    heroBgDarkText: true,
    problem: {
      label: 'The Problem',
      title: 'Commanders struggle to track recruit progress throughout the training and onboarding process.',
    },
    causes: {
      label: 'Causes of the Problem',
      title: 'Why do things get complicated?',
      bullets: [
        'Course management requires fragmented tracking of personal commanders’ schedules and tasks, alongside the individual progress of each and every recruit.',
        'Commanders rely on disparate systems, Excel files, and personal notebooks to consolidate data, making it a long and cumbersome process to obtain a broad overview.',
        'Recruit assessment varies from commander to commander, lacking consistency.',
        'The schedule is personalized and changes dynamically for each recruit, making it difficult to ensure alignment between what the recruit understands and what the commander plans.',
      ],
      result: 'Waste of time and effort, information misalignment, and professional gaps discovered late in the field.',
    },
    targetAudience: {
      label: 'Target Audience',
      title: 'The Academix system serves three different levels within the training process, all of whom are highly tech-savvy individuals aged 18-23:',
      groups: [
        {
          title: 'Course Commanders (The Managing Level)',
          body: 'Require a macro-level view of all teams. They need a tool that surfaces trends, gaps, and a synchronous, real-time overview without having to manually dig through data.',
        },
        {
          title: 'Personal Commanders / Onboarders (The Guided Level)',
          body: 'Manage the day-to-day routine of onboarding in the field. They need a simple, fast tool to log objective metrics and update tasks on the go.',
        },
        {
          title: 'Recruits (The Learning Level)',
          body: 'Undergo a dynamic and personalized training process. They need a clear reflection of their progress path and upcoming steps.',
        },
      ],
    },
    marketResearch: {
      label: 'Market Research',
      title: 'I explored learning management systems (LMS), employee onboarding software, talent management platforms, and project management systems.',
      findings: [
        {
          number: '01',
          title: 'Role-based workspace isolation',
          body: 'Because complex management systems prevent cognitive overload by separating macro and micro views, I recommended designing a system of 5 separate dashboards that provide each command level with only the data relevant to them.',
        },
        {
          number: '02',
          title: 'Streamlined field reporting with structured tags',
          body: 'Because employee onboarding platforms reduce administrative burden through focused forms, I recommended replacing fragmented tracking files with a fast feedback interface based on selecting strength and weakness tags.',
        },
        {
          number: '03',
          title: 'Real-time anomaly detection via smart alerts',
          body: 'Because task management systems save managerial time by utilizing exception-based notifications, I recommended integrating prominent deviation counters and response-time metrics into the leading dashboard to instantly highlight where intervention is needed.',
        },
      ],
    },
    solution: {
      label: 'The Solution',
      body: 'Digital web platform designed to simplify and synchronize the onboarding and training process for commanders.\nSo they can focus on what they are really good at - leading, mentoring, and developing their people.',
      valueLabel: 'The Value',
      values: ['Time-saving.', 'Regaining control of the situation.', 'Increasing the chances of successful training.'],
    },
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
      image: '/images/academix/sitemap-desktop.jpg',
      imageMobile: '/images/academix/sitemap-mobile.jpg',
      imageAlt: 'Academix site architecture map',
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
          descriptionTitle: 'Soldier Personal Dashboard',
          description:
            'The personal dashboard provides soldiers with a real time overview of their course progress, enabling them to manage their daily schedule, track test performance, and identify personal strengths and learning gaps through integrated data and feedback.',
          icon: 'person',
          image: '/images/academix/dashboard.jpg',
          imageAlt: 'Trainee dashboard showing personal progress overview and performance data',
          subSections: [
            {
              title: 'Teams - Commander View',
              description:
                'The dashboard provides commanders with a real time overview of recruit progress, enabling them to track individual performance, identify skill gaps, and monitor team development through integrated evaluation feeds, task tracking, and analytical performance data.',
              image: '/images/academix/teams-commander.png',
              imageAlt: 'Teams view from the perspective of a unit commander showing cohort overview',
            },
          ],
        },
        {
          number: '02',
          title: 'Scheduling Engine',
          description: "Provides full transparency regarding the recruit's workload on any given day.",
          icon: 'calendar',
          image: '/images/academix/calendar-new.png',
          imageAlt: 'Monthly calendar view of the scheduling engine showing trainee workload',
        },
        {
          number: '03',
          title: 'Drag-to-Schedule',
          description: 'An intuitive drag-and-drop interface that allows coordinators to assign events and training sessions with minimal friction, reducing scheduling errors and saving time.',
          icon: 'layers',
          image: '/images/academix/drag-schedule.png',
          imageAlt: 'Drag-and-drop event scheduling interface for managing training sessions',
        },
      ],
    },
    impact: {
      label: 'Impact & Reflection',
      title: 'A manual process, transformed',
      body: "This project sharpened my ability to break down complex business processes into an intuitive interface, reaffirming that the true value of design lies in the user's ability to make evidence based decisions, on time, and with ease.",
    },
    footerNav: {
      prev: { label: 'Neon Odyssey', href: '/case-study/neon-odyssey' },
      next: { label: 'Rimon', href: '/case-study/rimon' },
    },
  },
  {
    id: 'rimon',
    client: 'RIMON',
    year: '2026',
    headline: 'Closing the gap to your full entitlements',
    subtitle: 'Native Mobile Application for Managing and Utilizing Rights and Financial Benefits',
    tags: ['Product Strategy', 'Mobile App'],
    heroBg: '/images/rimon/rimonTop.jpg',
    heroBgMobile: '/images/rimon/rimonMobile.jpg',
    heroBgDarkText: true,
    rimon: {
      problem: {
        label: 'The Problem',
        title: 'Many users struggle to fully utilize their financial rights and entitlements',
        intro: 'There is a significant difficulty in tracking and managing these rights and benefits effectively.',
        reasons: [
          'Lack of awareness regarding benefits',
          'Benefits originate from a variety of different sources',
          'Difficulty in understanding the details of a benefit',
        ],
        implications: [
          'Many rights remain unclaimed',
          'Financial loss',
          'Waste of time and effort',
          'Feelings of confusion and dissatisfaction, or the sense of being taken advantage of leading to a lack of control and security',
        ],
        interviews: {
          title: 'Talking to them',
          body: "During the research phase, I conducted in-depth user interviews to understand the issue comprehensively. I chose interviews over questionnaires to grasp each person's motivations, needs, challenges, and frustrations better. These interviews included military reservists, victims of hostile acts, and individuals with government recognized disabilities, capturing insights from a broad spectrum of users.",
        },
      },
      researchInsights: {
        label: 'User Research Insights',
        title: "The issue is not a lack of information, it's an overload of fragmented information and a lack of transparency",
        body: 'Interviewees described feelings of confusion, burden, and a lack of control. Many expressed frustration with the need to log into various websites and track everything manually or in their heads.',
        values: [
          { title: 'Real-time control and management', body: 'Instant visibility into all available benefits and their current status' },
          { title: 'Saving time and money', body: 'Reducing the hours spent navigating bureaucracy and eliminating unclaimed financial loss' },
          { title: 'Simplicity and transparency', body: 'Clear language and a frictionless interface that removes the sense of bureaucratic burden' },
          { title: 'A sense of satisfaction and utility', body: 'Users feel rewarded when they successfully redeem a benefit they didn\'t know they had' },
          { title: 'Personalization tailored to interests', body: 'Recommendations and notifications scoped to what actually matters to each individual user' },
        ],
        conclusions: [
          'Consolidation and automated monitoring in a single interface',
          'Smart notifications before expiration dates or when new benefits become available',
          'A "Total Savings" display',
          'An accessible, non-bureaucratic user experience',
        ],
      },
      targetAudience: {
        label: 'Target Audience',
        title: "Who We're Designing For",
        primaryTarget: 'Reservists, victims of hostilities, and individuals with disabilities who are eligible for a wide range of financial benefits and services (treatments, vacations, equipment, etc.) but struggle to track and actually utilize them.',
        stats: [
          { number: '1.25M', body: 'people recognized as disabled by the National Insurance Institute as of 2022 - approximately 20% of the population' },
          { number: '89,712', body: 'civilian victims of hostilities in Israel, of whom 75,995 have been recognized since the October 7th disaster and throughout the war' },
        ],
        mainChallenges: [
          'Difficulty in managing and utilizing rights',
          'Lack of time and energy for bureaucratic processes',
        ],
        coreValues: {
          headline: 'Convenience | A sense of control and security.',
          bullets: [
            'Automatic utilization of rights without the need to track or remember criteria and dates',
            'Real-time financial savings, refunds, vouchers, and benefits redeemed',
            'A sense of satisfaction from finding the most valuable benefits',
          ],
        },
        goal: 'Centralizing all rights in one place, including status and expiration dates to assist in actual utilization',
      },
      successMetrics: {
        label: 'Success Metrics',
        title: 'How We Measure Impact',
        initial: [
          'Number of users who registered and entered basic details',
          'Number of benefits identified for each user',
        ],
        advanced: [
          'Utilization of at least one benefit per user',
          'Reduction in average time required to utilize a benefit compared to the current process',
        ],
      },
      keyScreens: {
        label: 'Wireframes',
        title: 'Onboarding',
        screens: [
          { label: 'Intro Carousel', image: '/images/rimon/onboarding-intro-carousel.jpg', imageAlt: 'Onboarding welcome and login screen' },
          { label: 'ID Verification', image: '/images/rimon/onboarding-id-verification.jpg', imageAlt: 'Onboarding screen for entering personal ID number' },
          { label: 'Personalization', image: '/images/rimon/onboarding-personalization.jpg', imageAlt: 'Onboarding screen for selecting areas of interest' },
        ],
      },
      uiDesign: {
        label: 'UI Design',
        title: 'The Product Solution',
        screens: [
          { label: 'Main Dashboard', image: '/images/rimon/ui-main-dashboard.jpg', imageAlt: 'Main dashboard UI screen' },
          { label: 'Claim Tracking', image: '/images/rimon/ui-claim-tracking.jpg', imageAlt: 'Claim tracking UI screen' },
          { label: 'Benefits Map', image: '/images/rimon/ui-benefits-map.jpg', imageAlt: 'Benefits map UI screen' },
        ],
      },
      businessModel: {
        label: 'Business Model',
        title: 'White Label for Scale',
        body: 'The app will operate in partnership with official bodies (such as the National Insurance Institute or "Behatzlacha"). This will allow these organizations to increase their benefit utilization rates, while we receive a stable model of licensing and recurring payments.',
      },
      roadmap: {
        label: 'Roadmap',
        title: "What's Next",
        items: [
          {
            title: 'Family Entitlement Management',
            body: 'Sync and combine benefits between spouses for smart, unified household budgeting.',
            badge: 'Planned',
            icon: 'family',
          },
          {
            title: 'Auto Reimbursement',
            body: 'Connect to financial systems to track open claims and notify users the moment funds are deposited.',
            badge: 'Planned',
            icon: 'money',
          },
        ],
      },
    },
    heroImage: '/images/home/RIMON.jpg',
    targetAudienceImage: '/images/rimon/interests.png',
    challenge: { label: 'The Challenge', title: '', bullets: [] },
    architecture: { label: 'Site Architecture', title: 'Site Architecture' },
    highlights: { label: 'Design Highlights', title: '', bullets: [] },
    keyFeatures: { label: 'Key Features', title: '', screens: [] },
    impact: { label: 'Impact & Reflection', title: '', body: '' },
    footerNav: {
      prev: { label: 'Academix', href: '/case-study/academix' },
      next: { label: 'Neon Odyssey', href: '/case-study/neon-odyssey' },
    },
  },
  {
    id: 'neon-odyssey',
    client: 'NEON ODYSSEY',
    year: '2025',
    headline: 'Transforming static quizzes into an interactive gaming experience',
    tags: ['Gamification', 'EdTech', 'Original Artwork'],
    heroImage: '/images/home/NEON.jpg',
    heroBg: '/images/neon/neonTop.jpg',
    heroBgMobile: '/images/neon/neonMobile.jpg',
    problem: {
      label: 'The Problem',
      title: 'Educators struggle to drive effective student engagement and motivation through traditional text based learning methods.',
    },
    rootCauses: {
      label: 'Root Causes',
      title: 'Root Causes',
      bullets: [
        {
          title: 'Attention Gap',
          body: 'Static text cannot compete with the fast-paced digital stimuli students are accustomed to.',
        },
        {
          title: 'Technological Barrier',
          body: 'Educators lack the time and technical skills to build interactive experiences from scratch.',
        },
        {
          title: 'Lack of Instant Feedback',
          body: 'Traditional learning methods miss the reward and progression systems (gamification) crucial for intrinsic motivation.',
        },
      ],
    },
    consequences: {
      label: 'Consequence',
      title: 'Consequence',
      bullets: [
        { title: 'Wasted Time & Effort', body: '' },
        { title: 'Learner Frustration & Boredom', body: '' },
        { title: 'Educator Burnout', body: '' },
      ],
    },
    overview: {
      label: 'Project Overview',
      title: 'From static quizzes to a living visual ecosystem',
      boldLead: 'I designed and illustrated',
      body: ' Neon Odyssey, a dual-sided web platform built to solve a core educational challenge: How do we turn static "True or False" quizzes into highly engaging digital experiences without causing cognitive overload?',
    },
    strategy: {
      label: 'Product Strategy & Foundations',
      title: 'Two audiences, one platform',
      cards: [
        {
          label: '',
          title: 'Content Creators',
          body: 'Educators, instructors, and corporate trainers looking to build custom knowledge sorting games.',
        },
        {
          label: '',
          title: 'Learners',
          body: 'Students (ages 12+) and adult learners.',
        },
      ],
    },
    research: {
      label: 'Research & Behavioral Insights',
      title: 'Research-Driven Design Process',
      body: 'To ensure an effective learning experience, I grounded my UI/UX decisions in cognitive psychology principles:',
      bullets: [
        {
          title: 'Spatial Anchoring (Based on Dual Coding Theory)',
          body: 'Research shows that users retain information better when it is spatially anchored. Therefore, instead of using static text lists, I designed the navigation interface so that each topic is linked to a visual landmark (such as neon signs on buildings). This creates a mental map that reduces cognitive load.',
        },
        {
          title: 'Non-Punitive Feedback Loops',
          body: 'To encourage safe "trial and error," I avoided traditional "X" marks that can cause frustration. Instead, in-game mistakes trigger playful and immediate visual feedback (gamified consequences), which lowers stress levels and prevents user abandonment.',
        },
      ],
    },
    game: {
      label: 'The Game',
      title: 'How the mechanics work',
      bullets: [
        {
          title: '',
          body: 'Neon Odyssey is an educational content generator game where players are presented with "True or False" questions. The player must collect neon lights from signs that represent the correct answers. Each sign glowing with neon light symbolizes the right response.',
        },
        {
          title: '',
          body: 'If the player answers incorrectly, instead of collecting neon lights, the mosquito will encounter a mosquito zapper, getting shocked and losing progress.',
        },
        {
          title: '',
          body: 'As the player successfully collects the required amount of neon lights, the mosquito will be able to spread and restore the Northern Lights across the landscapes of America, bringing back their breathtaking glow.',
        },
      ],
    },
    narrative: {
      label: 'Conceptual Framework & Narrative',
      title: 'A story that makes the mechanics stick',
      intro: 'To give the educational mechanics a cohesive visual anchor, the interface uses a light thematic story.',
      story: {
        label: 'The Story',
        paragraphs: [
          'In the 1950s, the rise of neon lights in America had a devastating impact on the balance of light in the world, threatening the very existence of the Northern Lights.',
          'A mosquito with extraordinary magical powers embarks on a mission to collect neon lights. She will use the energy she gathers to restore the glow of the Northern Lights.',
        ],
      },
    },
    b2b: {
      label: 'B2B Platform Focus',
      title: 'The Creator Platform CMS Editor',
      image: '/images/neon-odyssey/b2b-editor.png',
      imageAlt: 'Desktop mockup of the Neon Odyssey CMS editor showing the game creation interface',
    },
    kpis: {
      label: 'Product KPIs & Success Metrics',
      title: 'Measuring what matters',
      body: 'To ensure Neon Odyssey succeeds as an educational tool, I defined distinct KPIs for each user persona:',
      cards: [
        {
          title: 'Content Creators',
          description: 'I measure Time to Create (TTC). My goal is to minimize the effort required to build a lesson, ensuring the editor feels intuitive rather than burdensome.',
          icon: 'calendar',
        },
        {
          title: 'Player',
          description: 'I measure Lesson Completion Rate. This is the primary indicator of engagement; low completion suggests the UI or difficulty curve needs to be re-evaluated to better support learning outcomes.',
          icon: 'person',
        },
      ],
    },
    challenge: {
      label: 'The Challenge',
      title: 'Coming soon',
      bullets: [],
    },
    architecture: { label: 'Site Architecture', title: 'Site Architecture' },
    highlights: { label: 'Design Highlights', title: 'Coming soon', bullets: [] },
    keyFeatures: {
      label: 'The Screens',
      title: 'UX / UI Deep Dive',
      screens: [
        {
          number: '01',
          title: 'Jukebox Stage Selection',
          description:
            'Serving as the main progression hub, this menu maps out classification levels in a clear numerical sequence providing an intuitive user journey from first launch to final stage without any decision fatigue.',
          icon: 'sun',
          image: '/images/neon-odyssey/neon-6.jpg',
          imageAlt: 'Jukebox stage selection screen showing numbered level records',
        },
        {
          number: '02',
          title: 'In Game, Real Time Sorting',
          description:
            'Text data is dynamically mapped onto glowing neon signs across a cityscape. Learners navigate the avatar to collect only the valid target data points based on the level\'s objective.',
          icon: 'play',
          images: [
            { src: '/images/neon-odyssey/neon-1-v2.jpg', alt: 'Gameplay screen showing the firefly avatar collecting neon signs across a blue city nightscape' },
            { src: '/images/neon-odyssey/neon-2-v2.jpg', alt: 'Gameplay screen showing a second section of the night city with more neon signs' },
          ],
        },
        {
          number: '03',
          title: 'Multiple Level Environments',
          description:
            'Each level introduces a distinct visual environment. From a neon-lit city at night to a warm carnival fairground. Keeping learners visually engaged across the full experience.',
          icon: 'play',
          image: '/images/neon-odyssey/neon-4.jpg',
          imageAlt: 'Gameplay screen showing a warm-toned fairground level with neon signs on carnival attractions',
        },
        {
          number: '04',
          title: 'Character States & Micro-Interactions',
          description: '',
          icon: 'check',
          image: '/images/neon-odyssey/states.jpg',
          imageAlt: 'Character state illustrations showing success and failure animations for the mosquito avatar',
        },
        {
          number: '05',
          title: 'Emotional Closure',
          description:
            'Upon completing all criteria, the interface rewards the user by displaying the fully restored Northern Lights landscape.',
          icon: 'heart',
          image: '/images/neon-odyssey/neon-5.jpg',
          imageAlt: 'Victory screen showing the fully restored Northern Lights aurora with a congratulatory sign',
        },
      ],
    },
    impact: {
      label: 'Impact & Reflection',
      title: 'Coming soon',
      body: '',
    },
    footerNav: {
      prev: { label: 'Rimon', href: '/case-study/rimon' },
      next: { label: 'Academix', href: '/case-study/academix' },
    },
  },
];
