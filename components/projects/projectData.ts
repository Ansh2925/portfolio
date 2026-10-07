export type ProjectCategory =
  | "All"
  | "AI & Machine Learning"
  | "Full-Stack Web"
  | "Systems & Cloud";

export type ProjectItem = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: "AI & Machine Learning" | "Full-Stack Web" | "Systems & Cloud";
  categoryTag: string;
  description: string;
  fullDescription: string;
  accent: string;
  accentColor: string;
  visualType: "neural" | "audio" | "ledger" | "pipeline" | "graph" | "cluster";
  metrics: Array<{ label: string; value: string }>;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  github: string;
  demo?: string;
};

export const projectCategories: ProjectCategory[] = [
  "All",
  "AI & Machine Learning",
  "Full-Stack Web",
  "Systems & Cloud",
];

export const projectItems: ProjectItem[] = [
  {
    id: "spendly-android-app",
    number: "01",
    title: "Spendly",
    tagline: "AI-powered native Android expense tracker & intelligent budget assistant",
    category: "AI & Machine Learning",
    categoryTag: "GEMINI AI & ANDROID",
    description:
      "A modern native Android expense tracker leveraging the Google Gemini API to analyze daily spending, parse receipts, and automate budgeting.",
    fullDescription:
      "Spendly is an offline-first mobile personal finance application built with Kotlin and Jetpack Compose following modern Android architecture. By integrating the Google Gemini API, it provides intelligent natural-language expense logging and automated spending categorization. It features a Room local database for instantaneous offline access paired with Supabase for secure cloud sync and authentication, alongside reactive Vico charts for spending telemetry.",
    accent: "#d4b36a",
    accentColor: "#d4b36a",
    visualType: "neural",
    metrics: [
      { label: "Inference Speed", value: "<250ms" },
      { label: "Offline Storage", value: "Room DB" },
      { label: "Cloud Sync", value: "Supabase" },
    ],
    problem:
      "Manual expense tracking apps suffer from high cognitive friction and rigid category setups, causing users to abandon recording their daily expenditures.",
    solution:
      "Developed an intelligent, lightweight tracker using Gemini AI to understand contextual expense entries, paired with an offline-first reactive Room database.",
    architecture:
      "Kotlin MVVM architecture with Jetpack Compose UI, Material 3 theming, Dagger Hilt dependency injection, Room ORM, and Supabase Postgrest backend.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Gemini API",
      "Room DB",
      "Supabase",
      "Dagger Hilt",
      "Android SDK",
    ],
    github: "https://github.com/Ansh2925/spendly-android-app",
    demo: "https://github.com/Ansh2925/spendly-android-app",
  },
  {
    id: "portfolio",
    number: "02",
    title: "3D Cybernetic Portfolio",
    tagline: "Tactile spatial portfolio with WebGL shaders, Three.js 3D deck & reactive physics",
    category: "Full-Stack Web",
    categoryTag: "SPATIAL & INTERACTIVE 3D",
    description:
      "An immersive personal portfolio platform showcasing software engineering work through interactive 3D WebGL scenes, card physics, and spatial typography.",
    fullDescription:
      "An interactive developer portfolio engineered from the ground up using Next.js 15, React 19, Three.js, and Framer Motion. Features custom GLSL shaders, orbital point-cloud geometry, an interactive 3D project deck with gyroscope/parallax response, smooth card manipulation, and sub-second initial load times.",
    accent: "#7ebfb8",
    accentColor: "#7ebfb8",
    visualType: "cluster",
    metrics: [
      { label: "Frame Rate", value: "60fps Stable" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Response Time", value: "<16ms" },
    ],
    problem:
      "Conventional web portfolios rely on static templates that fail to communicate deep systems competence or leave a memorable sensory impression.",
    solution:
      "Constructed a cybernetic digital landscape fusing Three.js particle systems, dynamic viewport lighting, and spatial audio-visual card animations.",
    architecture:
      "Next.js App Router and React 19 architecture pairing React Three Fiber canvas layers with Framer Motion spring physics and Tailwind CSS styling.",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/Ansh2925/portfolio",
    demo: "https://ansh25.vercel.app/",
  },
  {
    id: "minimised-crm",
    number: "03",
    title: "Minimised CRM",
    tagline: "Full-stack enterprise CRM with asynchronous pipeline workers & role-based access",
    category: "Systems & Cloud",
    categoryTag: "ENTERPRISE DISTRIBUTED SYSTEM",
    description:
      "A clean, high-performance Customer Relationship Management suite featuring automated sales pipelines, JWT auth with silent refresh, and background task queues.",
    fullDescription:
      "Minimised CRM is an enterprise-grade relationship management engine developed with Django REST Framework and React 19. It delivers real-time deal stage progression, contact association, automated follow-up scheduling via Celery and Redis, and strict Role-Based Access Control (RBAC) across sales teams, managers, and system administrators.",
    accent: "#d6ff70",
    accentColor: "#d6ff70",
    visualType: "pipeline",
    metrics: [
      { label: "Task Queue", value: "Celery/Redis" },
      { label: "Auth Flow", value: "Silent JWT" },
      { label: "Access Control", value: "Role-Based RBAC" },
    ],
    problem:
      "Bloated enterprise CRMs overwhelm sales teams with excessive complexity and lack fast asynchronous pipelines for managing high-volume leads and follow-ups.",
    solution:
      "Delivered a streamlined full-stack architecture with real-time deal stage transitions, automated Celery follow-up queues, and silent JWT token renewal.",
    architecture:
      "Django REST Framework backend with Celery asynchronous workers, Redis cache, and relational storage, coupled with a React 19, Vite, and Tailwind CSS frontend.",
    technologies: [
      "Python",
      "Django REST Framework",
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Celery",
      "Redis",
      "JWT",
    ],
    github: "https://github.com/AKNursumar/Minimised-version-of-CRM",
    demo: "https://github.com/AKNursumar/Minimised-version-of-CRM",
  },
  {
    id: "ration-bridge",
    number: "04",
    title: "RationBridge",
    tagline: "Community surplus food redistribution platform & real-time donor bridge",
    category: "Full-Stack Web",
    categoryTag: "COMMUNITY LOGISTICS & CLOUD",
    description:
      "A community-driven food logistics platform connecting commercial food donors with shelters and recipients to eliminate food waste.",
    fullDescription:
      "RationBridge (Bridge Food Connect) connects surplus food donors, NGOs, and individuals in need. Engineered with Node.js, Express, and Supabase, it features end-to-end listing lifecycles (available, requested, completed), geolocation pickup coordination, and secure role-based authentication.",
    accent: "#9ab8ff",
    accentColor: "#9ab8ff",
    visualType: "graph",
    metrics: [
      { label: "Listing Lifecycles", value: "Real-time" },
      { label: "Backend Latency", value: "<40ms" },
      { label: "Database Scaling", value: "Supabase PG" },
    ],
    problem:
      "Commercial businesses and events discard substantial volumes of edible food daily due to lack of a direct, low-friction channel to connect with local recipients.",
    solution:
      "Architected a centralized redistribution portal with real-time food claim notifications, pickup location tracking, and verified profile credentials.",
    architecture:
      "Node.js and Express REST API service integrated with Supabase PostgreSQL, row-level security (RLS) policies, Supabase Auth, and Docker containerization.",
    technologies: [
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "JavaScript",
      "Docker",
      "REST APIs",
    ],
    github: "https://github.com/AKNursumar/RationBridge",
    demo: "https://github.com/AKNursumar/RationBridge",
  },
];
