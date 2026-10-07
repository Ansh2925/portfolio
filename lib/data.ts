export const profile = {
  fullName: "Ansh Patel",
  github: "Ansh2925",
  githubUrl: "https://github.com/Ansh2925",
  linkedinUrl: "https://www.linkedin.com/in/ansh2925",
  email: "anshe2925@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/193214135?v=4",
  bio: "AI Engineer & Full-Stack Developer building intelligent systems, scalable web applications, and products that turn ambitious ideas into reality.",
  publicRepos: 18,
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const aboutCards = [
  {
    key: "ai-intelligence",
    title: "Artificial Intelligence & Models",
    copy: "Building autonomous systems, multimodal LLM pipelines, and fine-tuned neural models designed to turn complex raw signals into direct, actionable intelligence.",
  },
  // {
  //   key: "full-stack-web",
  //   title: "Full-Stack Web Architecture",
  //   copy: "Crafting end-to-end resilient applications with modern React/Next.js frameworks, performant state management, and ergonomic component architectures.",
  // },
  // {
  //   key: "backend-distributed",
  //   title: "Backend Services & High Scale",
  //   copy: "Architecting high-concurrency microservices with FastAPI and Node.js, utilizing Redis caching and PostgreSQL for high reliability and throughput.",
  // },
  // {
  //   key: "interactive-3d",
  //   title: "Spatial & Interactive Experiences",
  //   copy: "Pushing browser boundaries with Three.js, shaders, and physics-driven micro-interactions that make digital software feel tangible and alive.",
  // },
];

export const skillGroups = [
  {
    group: "AI / Machine Learning",
    tag: "01 / NEURAL & INTELLIGENCE",
    accent: "#d4b36a",
    description:
      "Developing neural architectures, fine-tuned LLM agents, and real-time inference pipelines that extract meaning from raw multi-modal inputs.",
    highlight: "Real-time inference & quantized models",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
    ],
  },
  {
    group: "Frontend & Interactive 3D",
    tag: "02 / SPATIAL & REACTIVE WEB",
    accent: "#7ebfb8",
    description:
      "Crafting tactile web applications, interactive 3D simulations, and reactive interfaces designed with physics-based spring animations.",
    highlight: "Fluid 60fps graphics & spatial interactions",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Framer Motion",
      "WebGL",
      "Web Audio API",
    ],
  },
  {
    group: "Backend & Systems",
    tag: "03 / DISTRIBUTED COMPUTING",
    accent: "#d4b36a",
    description:
      "Engineering resilient asynchronous microservices, event-driven pipelines, caching strategies, and structured relational datastores.",
    highlight: "High concurrency & sub-millisecond routing",
    items: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AsyncIO",
    ],
  },
  {
    group: "Cloud & DevOps",
    tag: "04 / PRODUCTION PLATFORMS",
    accent: "#7ebfb8",
    description:
      "Containerizing production microservices, writing automated CI/CD workflows, and architecting robust cloud environments.",
    highlight: "Zero-downtime deployment & telemetry",
    items: [
      "Docker",
      "AWS",
      "Git",
      "GitHub Actions",
      "Linux / Bash",
      "Vercel",
    ],
  },
];

export const projects = [
  {
    id: "spendly-android-app",
    index: "01",
    tag: "GEMINI AI & ANDROID",
    title: "Spendly",
    description:
      "A modern native Android expense tracker leveraging the Google Gemini API to analyze daily spending, parse receipts, and automate budgeting.",
    technologies: ["Kotlin", "Jetpack Compose", "Gemini API", "Room DB", "Supabase", "Dagger Hilt"],
    problem:
      "Manual expense tracking apps suffer from high cognitive friction and rigid category setups, causing users to abandon recording their daily expenditures.",
    solution:
      "Developed an intelligent, lightweight tracker using Gemini AI to understand contextual expense entries, paired with an offline-first reactive Room database.",
    github: "https://github.com/Ansh2925/spendly-android-app",
    demo: "https://github.com/Ansh2925/spendly-android-app",
  },
  {
    id: "portfolio",
    index: "02",
    tag: "SPATIAL & INTERACTIVE 3D",
    title: "3D Cybernetic Portfolio",
    description:
      "An immersive personal portfolio platform showcasing software engineering work through interactive 3D WebGL scenes, card physics, and spatial typography.",
    technologies: ["Next.js", "React 19", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS"],
    problem:
      "Conventional web portfolios rely on static templates that fail to communicate deep systems competence or leave a memorable sensory impression.",
    solution:
      "Constructed a cybernetic digital landscape fusing Three.js particle systems, dynamic viewport lighting, and spatial audio-visual card animations.",
    github: "https://github.com/Ansh2925/portfolio",
    demo: "https://github.com/Ansh2925/portfolio",
  },
  {
    id: "minimised-crm",
    index: "03",
    tag: "ENTERPRISE DISTRIBUTED SYSTEM",
    title: "Minimised CRM",
    description:
      "A clean, high-performance Customer Relationship Management suite featuring automated sales pipelines, JWT auth with silent refresh, and background task queues.",
    technologies: ["Python", "Django REST Framework", "React 19", "Vite", "Tailwind CSS", "Celery", "Redis"],
    problem:
      "Bloated enterprise CRMs overwhelm sales teams with excessive complexity and lack fast asynchronous pipelines for managing high-volume leads and follow-ups.",
    solution:
      "Delivered a streamlined full-stack architecture with real-time deal stage transitions, automated Celery follow-up queues, and silent JWT token renewal.",
    github: "https://github.com/AKNursumar/Minimised-version-of-CRM",
    demo: "https://github.com/AKNursumar/Minimised-version-of-CRM",
  },
  {
    id: "ration-bridge",
    index: "04",
    tag: "COMMUNITY LOGISTICS & CLOUD",
    title: "RationBridge",
    description:
      "A community-driven food logistics platform connecting commercial food donors with shelters and recipients to eliminate food waste.",
    technologies: ["Node.js", "Express.js", "Supabase", "PostgreSQL", "JavaScript", "Docker"],
    problem:
      "Commercial businesses and events discard substantial volumes of edible food daily due to lack of a direct, low-friction channel to connect with local recipients.",
    solution:
      "Architected a centralized redistribution portal with real-time food claim notifications, pickup location tracking, and verified profile credentials.",
    github: "https://github.com/AKNursumar/RationBridge",
    demo: "https://github.com/AKNursumar/RationBridge",
  },
];

export const experience = [
  {
    id: "Competitive Coding",
    year: "2025 — PRESENT",
    title: "COMPETITIVE CODING",
    copy: "Building consistency through competitive coding, problem solving, algorithms and data structures.",
  },
  {
    id: "hackathons-competitive",
    year: "2024 — Present",
    title: "HACKATHONS & COMPETITIVE BUILDING",
    copy: "Participated in 10+ hackathons and was shortlisted in 5, building and presenting projects under tight time constraints.",
  },
];

export const languageMix = [
  { name: "Python", value: 42 },
  { name: "TypeScript", value: 34 },
  { name: "JavaScript", value: 20 },
  { name: "Kotlin", value: 16 },
  { name: "HTML / CSS", value: 10 },
];

export const githubRepos = [
  {
    name: "spendly-android-app",
    url: "https://github.com/Ansh2925/spendly-android-app",
    language: "Kotlin",
    description: "Modern Android expense tracker powered by Google Gemini API, Room DB, and Supabase.",
  },
  {
    name: "portfolio",
    url: "https://github.com/Ansh2925/portfolio",
    language: "TypeScript",
    description: "Interactive 3D developer portfolio built with Next.js 15, Three.js, and Framer Motion.",
  },
  {
    name: "Minimised-version-of-CRM",
    url: "https://github.com/AKNursumar/Minimised-version-of-CRM",
    language: "Python",
    description: "Full-stack enterprise CRM with Django REST Framework, Celery background workers, and React 19.",
  },
  {
    name: "RationBridge",
    url: "https://github.com/AKNursumar/RationBridge",
    language: "JavaScript",
    description: "Community surplus food redistribution platform built with Node.js, Express, and Supabase.",
  },
];
