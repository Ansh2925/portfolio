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
  // {
  //   key: "ai-intelligence",
  //   title: "Artificial Intelligence & Models",
  //   copy: "Building autonomous systems, multimodal LLM pipelines, and fine-tuned neural models designed to turn complex raw signals into direct, actionable intelligence.",
  // },
  {
    key: "full-stack-web",
    title: "Full-Stack Web Architecture",
    copy: "Crafting end-to-end resilient applications with modern React/Next.js frameworks, performant state management, and ergonomic component architectures.",
  },
  {
    key: "backend-distributed",
    title: "Backend Services & High Scale",
    copy: "Architecting high-concurrency microservices with FastAPI and Node.js, utilizing Redis caching and PostgreSQL for high reliability and throughput.",
  },
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
    icon: "brain",
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
    icon: "sparkles",
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
    icon: "server",
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
    icon: "cloud",
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
    id: "cognitive-signal",
    index: "01",
    tag: "AI / MACHINE LEARNING",
    title: "Cognitive Signal",
    description:
      "An intelligent neural representation system designed to analyze multidimensional time-series and generate predictive anomaly detection in real time.",
    technologies: ["Python", "PyTorch", "FastAPI", "React", "Docker"],
    problem:
      "Industrial sensors produce high-velocity multidimensional streams that overwhelm traditional static threshold monitors, resulting in false alerts.",
    solution:
      "Designed a real-time transformer-based encoder with quantized inference on FastAPI workers, achieving sub-20ms latency and 94% anomaly precision.",
    github: "https://github.com/Ansh2925",
    demo: "https://github.com/Ansh2925",
  },
  {
    id: "city-muse",
    index: "02",
    tag: "VOICE & URBAN AI",
    title: "CityMuse Voice Flow",
    description:
      "An audio-first urban intelligence platform combining interactive maps, real-time voice synthesis, and dynamic point-of-interest discovery.",
    technologies: ["TypeScript", "Next.js", "Python", "Web Audio API", "Tailwind CSS"],
    problem:
      "Traditional city navigation apps demand continuous screen attention, disrupting the user's natural exploration and engagement with surroundings.",
    solution:
      "Engineered an ambient voice-guidance engine with spatial POI indexing and streaming audio synthesis for hands-free contextual discovery.",
    github: "https://github.com/Ansh2925/CityMuse",
    demo: "https://github.com/Ansh2925/citymuse-voice-flow",
  },
  {
    id: "asset-flow",
    index: "03",
    tag: "ENTERPRISE SYSTEMS",
    title: "AssetFlow Management",
    description:
      "A comprehensive asset tracking and workflow optimization engine built to streamline hardware lifecycle governance and audit verification.",
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
    problem:
      "Enterprise teams lose thousands of hours reconciling disparate equipment inventories across silos without centralized traceability.",
    solution:
      "Built an event-sourced asset ledger with automated checkout validations, real-time status telemetry, and granular role-based permissions.",
    github: "https://github.com/Ansh2925/AssetFlow_Bug_Hunters_011_odoo",
    demo: "https://github.com/Ansh2925/AssetFlow_Bug_Hunters_011_odoo",
  },
  {
    id: "autonomous-crm",
    index: "04",
    tag: "INTELLIGENT AUTOMATION",
    title: "Autonomous CRM Engine",
    description:
      "A customer relationship automation suite with predictive lead scoring, communication sentiment tracking, and autonomous deal pipeline updates.",
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis"],
    problem:
      "Sales organizations spend over 30% of their bandwidth manually tagging prospect communications and guessing lead priority.",
    solution:
      "Deployed NLP-driven sentiment analysis and automated workflow triggers that qualify incoming opportunities and orchestrate next actions.",
    github: "https://github.com/Ansh2925/CRM",
    demo: "https://github.com/Ansh2925/CRM",
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
  { name: "C++ / Systems", value: 12 },
  { name: "HTML / CSS", value: 10 },
];

export const githubRepos = [
  {
    name: "AssetFlow_Bug_Hunters_011_odoo",
    url: "https://github.com/Ansh2925/AssetFlow_Bug_Hunters_011_odoo",
    language: "TypeScript",
    description: "Asset tracking and enterprise workflow management platform built with modern TypeScript and web services.",
  },
  {
    name: "Backend",
    url: "https://github.com/Ansh2925/Backend",
    language: "Python",
    description: "High-performance asynchronous backend services with database connectivity and modular API routing.",
  },
  {
    name: "CityMuse",
    url: "https://github.com/Ansh2925/CityMuse",
    language: "TypeScript",
    description: "Interactive urban discovery and location-aware recommendations powered by modern web frontend technologies.",
  },
  {
    name: "CRM",
    url: "https://github.com/Ansh2925/CRM",
    language: "Python",
    description: "Intelligent customer relationship management application with automated pipeline tracking and lead insights.",
  },
];
