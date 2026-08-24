import { Project, SkillCategory, ExperienceItem, EducationItem } from './types';

export const personalInfo = {
  name: 'Nabin Gurung',
  role: 'Mobile App Developer',
  specialization: 'Mid Level Flutter Developer & Mobile Specialist',
  bio: "Flutter Developer for past 3 years so far, specialized in a mobile application development. With vast and deep experience of Flutter, I add some spices in your app. Let's give your idea a reality.",
  location: 'Samakhusi, Kathmandu, Nepal',
  email: 'lama.gurung.nabin@gmail.com',
  phone: '+977 9846458568',
  website: 'https://gurungnabin.com.np',
  github: 'https://github.com/NabinGrz',
  linkedin: 'https://www.linkedin.com/in/nabin-gurung',
  instagram: 'https://www.instagram.com/nabin_grz',
  availability: 'Open for Mobile Development & Engineering Roles',
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Production Mobile Apps', value: '8+' },
    { label: 'Architecture & State', value: 'BLoC/MobX' },
    { label: 'Industry Sectors', value: 'Fintech & GPS' },
  ]
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Mobile Frameworks & Languages',
    description: 'Specialized in cross-platform Flutter and native Android ecosystems.',
    iconName: 'Smartphone',
    skills: [
      { name: 'Flutter & Dart', level: 'Core Expertise', highlight: 'Multi-flavor, Custom Render, Isolates' },
      { name: 'Android (Kotlin / Java)', level: 'Advanced', highlight: 'Native channels, Services, SDKs' },
      { name: 'State Management (BLoC / Cubit)', level: 'Core Expertise', highlight: 'Event-driven architecture, flutter_bloc' },
      { name: 'MobX & Provider', level: 'Advanced', highlight: 'Reactive observables and state flow' },
      { name: 'Riverpod & GetX', level: 'Proficient', highlight: 'Dependency injection & modular states' },
      { name: 'Local Database (Hive / SQLite)', level: 'Core Expertise', highlight: 'Offline caching, indexing, ObjectBox' },
    ]
  },
  {
    title: 'Architecture & Patterns',
    description: 'Modular enterprise structures ensuring separation of concerns and maintainability.',
    iconName: 'Layers',
    skills: [
      { name: 'Clean Architecture (3-Layer)', level: 'Core Expertise', highlight: 'Domain / Data / Presentation separation' },
      { name: 'Dependency Injection (GetIt / Injectable)', level: 'Core Expertise', highlight: 'IoC containers, Service Locators' },
      { name: 'Immutable Models (Freezed & JSON)', level: 'Core Expertise', highlight: 'Type-safe serialization & union classes' },
      { name: 'Declarative Routing (AutoRoute / GoRouter)', level: 'Advanced', highlight: 'Deep linking, auth guards, nested tabs' },
      { name: 'Unit & State Testing (bloc_test)', level: 'Advanced', highlight: 'State transition verification & mocks' },
    ]
  },
  {
    title: 'Fintech, Geolocation & Backend',
    description: 'Securing financial flows, real-time tracking, and cloud service integrations.',
    iconName: 'CloudLightning',
    skills: [
      { name: 'Fintech & QR Payment Gateways', level: 'Core Expertise', highlight: 'Fonepay, Wallet APIs, KYC verification' },
      { name: 'Real-time GPS & Live Tracking', level: 'Core Expertise', highlight: 'Google Maps SDK, background telemetry' },
      { name: 'REST APIs & Dio Networking', level: 'Core Expertise', highlight: 'Interceptors, Token Refresh, Dio Caching' },
      { name: 'Firebase Suite', level: 'Advanced', highlight: 'FCM Notifications, Auth, Firestore, Crashlytics' },
      { name: 'WebSockets & Live Sockets', level: 'Advanced', highlight: 'Real-time dispatch & instant messaging' },
    ]
  },
  {
    title: 'DevOps, CI/CD & Design Tools',
    description: 'Deployment pipelines, app store publishing, and design translation.',
    iconName: 'Wrench',
    skills: [
      { name: 'Play Store & App Store Publishing', level: 'Core Expertise', highlight: 'Signing, release tracks, review compliance' },
      { name: 'Multi-Flavor Environment Setup', level: 'Core Expertise', highlight: 'Dev, Staging, Production configurations' },
      { name: 'Git & Version Control', level: 'Core Expertise', highlight: 'Branching strategies, code review workflows' },
      { name: 'Figma to Pixel-Perfect Flutter', level: 'Core Expertise', highlight: 'Custom animations, responsive constraints' },
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'city-pay',
    title: 'CityPay Digital Wallet',
    category: 'Fintech & Payments',
    tagline: 'Comprehensive digital payment gateway with QR transactions & utility payments',
    description: 'A production digital wallet app built with Flutter. Enables frictionless digital payments across Nepal including merchant QR scanner, inter-bank fund transfers, utility and telecom bills, split payments, and comprehensive KYC account verification.',
    role: 'Mid Level Flutter Developer (Ekbana Solutions)',
    company: 'Ekbana Solutions',
    platform: 'Flutter',
    techStack: ['Flutter', 'Dart', 'BLoC', 'Dio', 'QR Scanner', 'Biometrics', 'REST API', 'FCM'],
    metrics: [
      'High-security biometric auth & encrypted payload',
      'Seamless multi-bank fund transfer integration',
      'Instant merchant QR scanning in <200ms'
    ],
    features: [
      'Dynamic QR code scanner for instant merchant checkout',
      'Inter-bank transfers and wallet-to-wallet transactions',
      'Utility payments (Electricity, Water, Internet, Top-up)',
      'Tiered KYC verification workflow with document upload'
    ],
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    screenType: 'citypay',
    featured: true,
    githubUrl: 'https://github.com/NabinGrz',
    liveUrl: 'https://gurungnabin.com.np'
  },
  {
    id: 'namaste-pay',
    title: 'Namaste Pay',
    category: 'Fintech & Telecom',
    tagline: 'Leading national digital wallet with mobile recharge, flight bookings & bank linking',
    description: 'Prominent digital payment application in Nepal developed with high-performance Flutter state management. Supports telecom recharge, flight ticket purchases, offline USSD compatibility flows, split bills, and direct bank account integration.',
    role: 'Flutter Developer (Kodiary Technologies)',
    company: 'Kodiary Technologies',
    platform: 'Flutter',
    techStack: ['Flutter', 'Dart', 'MobX', 'Dio', 'Google Maps', 'FCM', 'Secure Storage'],
    metrics: [
      'Over thousands of daily active mobile recharges',
      'Zero unauthorized transaction state leaks',
      'Real-time flight booking and seat reservation'
    ],
    features: [
      'One-tap mobile top-up and data pack subscriptions',
      'Domestic flight ticket search, comparison, and booking',
      'Direct bank account linking and instant fund pull',
      'Split-bill feature with contact list integration'
    ],
    color: '#3b82f6',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    screenType: 'namaste',
    featured: true,
    githubUrl: 'https://github.com/NabinGrz',
    liveUrl: 'https://gurungnabin.com.np'
  },
  {
    id: 'sajilo-krishi-beema',
    title: 'Sajilo Krishi Beema',
    category: 'Agriculture & Insurance',
    tagline: 'Digital agricultural insurance portal for crop & livestock claims',
    description: 'A transformative Gov/Enterprise mobile platform simplifying agriculture insurance for farmers across Nepal. Allows farmers to browse subsidized insurance schemes, register livestock/crop details, calculate premiums, and submit damage claims directly from the field.',
    role: 'Mid Level Flutter Developer (Ekbana Solutions)',
    company: 'Ekbana Solutions',
    platform: 'Flutter',
    techStack: ['Flutter', 'Dart', 'BLoC', 'Camera', 'Offline Caching', 'Location Geotag', 'Dio'],
    metrics: [
      'Geotagged image validation for claim integrity',
      'Offline submission caching in remote farming regions',
      'Simplified UI for high accessibility in rural Nepal'
    ],
    features: [
      'Crop and livestock insurance policy purchase',
      'Real-time government subsidy calculator',
      'Field claim submission with GPS geotagged photo capture',
      'Live tracking of insurance claim approval stages'
    ],
    color: '#10b981',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    screenType: 'agri',
    featured: true,
    githubUrl: 'https://github.com/NabinGrz',
    liveUrl: 'https://gurungnabin.com.np'
  },
  {
    id: 'cronlink',
    title: 'Cronlink Construction Tracker',
    category: 'Workforce & IoT Tracking',
    tagline: 'Real-time construction management, live fleet route tracking & job dispatch',
    description: 'An enterprise tracker and management dashboard mobile application designed to coordinate construction machinery, concrete dispatch, and job site requests with sub-second GPS route tracking and shift scheduling.',
    role: 'Flutter Developer (Kodiary Technologies)',
    company: 'Kodiary Technologies',
    platform: 'Flutter',
    techStack: ['Flutter', 'Dart', 'BLoC', 'Google Maps SDK', 'WebSockets', 'Hive', 'Background GPS'],
    metrics: [
      'Live GPS telemetry update with <500ms latency',
      'Battery-optimized location polling during transit',
      'Comprehensive job request dispatch system'
    ],
    features: [
      'Real-time vehicle and machinery fleet tracking on interactive map',
      'Dynamic geofencing around active construction sites',
      'Driver shift status, concrete batch logging, and arrival ETAs',
      'Instant job dispatch alerts and proof of delivery capture'
    ],
    color: '#f59e0b',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    screenType: 'cronlink',
    featured: true,
    githubUrl: 'https://github.com/NabinGrz',
    liveUrl: 'https://gurungnabin.com.np'
  },
  {
    id: 'kharcha-app',
    title: 'Kharcha - Personal Finance Manager',
    category: 'Finance Management',
    tagline: 'Minimalist daily expense logging, category limits & savings tracker',
    description: 'A clean, responsive personal expense and budget management application built with Flutter. Provides instant expense entry, category-wise spending limits, monthly trend analysis, and offline-first storage.',
    role: 'Personal Mobile Project',
    platform: 'Flutter',
    techStack: ['Flutter', 'Dart', 'BLoC', 'Hive DB', 'FL Chart', 'Material 3'],
    metrics: [
      '100% offline-first with zero lag',
      'Interactive visual breakdown by category',
      'Configurable monthly budget alarms'
    ],
    features: [
      'Quick single-tap income and expense entry',
      'Interactive visual expense distribution charts',
      'Configurable monthly category spending limits',
      'Historical monthly reports with CSV backup'
    ],
    color: '#8b5cf6',
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    screenType: 'kharcha',
    featured: true,
    githubUrl: 'https://github.com/NabinGrz',
    liveUrl: 'https://gurungnabin.com.np'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-veda',
    role: 'Mid Level Flutter Developer',
    company: 'Veda Studios',
    location: 'Kathmandu, Nepal',
    period: 'May 2024 - Present',
    type: 'Full-time',
    description: 'Leading design and development of high-quality, performant Flutter applications with scalable architectures and clean codebases for consumer and enterprise clients.',
    achievements: [
      'Engineered core Flutter application modules with Clean Architecture and strict BLoC state management',
      'Optimized app startup performance and frame rendering times down to consistent 60fps',
      'Mentored junior engineers on clean coding standards, code generation, and test-driven development'
    ],
    technologies: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'Dio', 'Firebase', 'Git']
  },
  {
    id: 'exp-ekbana',
    role: 'Mid Level Flutter Developer',
    company: 'Ekbana Solutions',
    location: 'Kathmandu, Nepal',
    period: 'May 15, 2023 - Oct 15, 2023',
    type: 'Full-time',
    description: 'Led UI/UX module designs and codebase refactoring for prominent client applications including Sajilo Krishi Beema and CityPay digital wallet.',
    achievements: [
      'Architected digital payment and QR transaction flows for CityPay digital wallet',
      'Built geotagged offline-first claim filing engine for Sajilo Krishi Beema agricultural insurance',
      'Refactored legacy modules into maintainable BLoC pattern, reducing bug reports by 35%'
    ],
    projectsMentioned: ['CityPay Digital Wallet', 'Sajilo Krishi Beema'],
    technologies: ['Flutter', 'Dart', 'BLoC', 'REST API', 'QR Scanner', 'Dio', 'FCM']
  },
  {
    id: 'exp-kodiary',
    role: 'Junior Flutter Developer',
    company: 'Kodiary Technologies',
    location: 'Kathmandu, Nepal',
    period: 'Mar 4, 2022 - Apr 29, 2023',
    type: 'Full-time',
    description: 'Implemented features using BLoC and MobX architectures, integrated real-time tracking systems, flight booking, and telecom recharge integrations.',
    achievements: [
      'Contributed to Namaste Pay digital wallet (telecom recharge, flight bookings, bank integrations)',
      'Engineered live vehicle GPS tracking and dispatch workflows for Cronlink construction tracker',
      'Developed core components for SiteDeck project'
    ],
    projectsMentioned: ['Namaste Pay', 'Cronlink', 'SiteDeck'],
    technologies: ['Flutter', 'Dart', 'MobX', 'BLoC', 'Google Maps', 'WebSockets', 'Hive']
  },
  {
    id: 'exp-thakur',
    role: 'Flutter Developer Intern',
    company: 'Thakur International',
    location: 'Kathmandu, Nepal',
    period: 'Aug 29, 2021 - Dec 29, 2021',
    type: 'Internship',
    description: 'Developed front-end and admin components of a restaurant management system, handled WordPress data integration, and published apps on Google Play Store.',
    achievements: [
      'Built responsive restaurant POS and ordering UI for mobile and tablet form factors',
      'Handled REST API and WordPress backend synchronization',
      'Successfully packaged, signed, and published applications to Google Play Store'
    ],
    technologies: ['Flutter', 'Dart', 'REST API', 'WordPress', 'Google Play Console']
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science & Information Technology (B.Sc. CSIT)',
    institution: 'Tribhuvan University',
    period: '2018 - 2022',
    location: 'Kathmandu, Nepal',
    details: 'Specialized in Software Engineering, Mobile Computing, Data Structures & Algorithms, and Distributed Systems.'
  }
];
