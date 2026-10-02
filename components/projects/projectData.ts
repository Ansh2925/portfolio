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
    id: "cognitive-signal",
    number: "01",
    title: "Cognitive Signal",
    tagline: "Multidimensional temporal anomaly detection & predictive neural telemetry",
    category: "AI & Machine Learning",
    categoryTag: "NEURAL INFERENCE ENGINE",
    description:
      "A deep learning inference system designed to analyze high-velocity sensor streams and isolate anomalies with sub-20ms latency.",
    fullDescription:
      "Cognitive Signal is an end-to-end machine intelligence platform engineered for temporal series decomposition and real-time failure prediction. By fusing quantized transformer encoders with asynchronous FastAPI microservices, the system processes continuous streams while filtering noise and preventing false alarms.",
    accent: "#d4b36a",
    accentColor: "#d4b36a",
    visualType: "neural",
    metrics: [
      { label: "Inference Latency", value: "<18ms" },
      { label: "Detection Precision", value: "94.8%" },
      { label: "Throughput", value: "2.4k req/s" },
    ],
    problem:
      "Traditional industrial telemetry relies on rigid threshold triggers that miss subtle multivariate anomalies while generating high rates of operational fatigue.",
    solution:
      "Constructed an autoencoder-transformer model trained on high-dimensional temporal distributions, paired with rolling dynamic confidence intervals for real-time drift adaptation.",
    architecture:
      "PyTorch quantized model runtime wrapped in an asynchronous FastAPI inference container with Redis-backed streaming buffers and an interactive WebGL telemetry client.",
    technologies: ["Python", "PyTorch", "FastAPI", "React", "Docker", "Redis"],
    github: "https://github.com/Ansh2925",
    demo: "https://github.com/Ansh2925",
  },
  {
    id: "city-muse",
    number: "02",
    title: "CityMuse Voice Flow",
    tagline: "Ambient voice-guided urban discovery & spatial intelligence platform",
    category: "Full-Stack Web",
    categoryTag: "SPATIAL & AUDIO WEB",
    description:
      "An audio-first urban exploration application combining interactive mapping, real-time voice synthesis, and dynamic landmark discovery.",
    fullDescription:
      "CityMuse Voice Flow replaces screen-heavy travel guides with an intuitive, hands-free conversational audio tour. Designed with modern Web Audio APIs and responsive spatial geometries, it contextualizes landmarks as users navigate through urban spaces.",
    accent: "#7ebfb8",
    accentColor: "#7ebfb8",
    visualType: "audio",
    metrics: [
      { label: "Audio Stream Delay", value: "85ms" },
      { label: "POI Match Accuracy", value: "98.2%" },
      { label: "Client FPS", value: "60fps stable" },
    ],
    problem:
      "Standard navigation interfaces force users to stare continuously at handheld screens, breaking their visual and sensory connection to physical environments.",
    solution:
      "Implemented a low-latency spatial index that triggers contextual audio generation and ambient voice assistance whenever users approach notable coordinates.",
    architecture:
      "Next.js App Router frontend with Web Audio API synthesizers, integrated with Python geographic geocoding microservices and vector similarity routing.",
    technologies: ["TypeScript", "Next.js", "Python", "Tailwind CSS", "Web Audio API"],
    github: "https://github.com/Ansh2925/CityMuse",
    demo: "https://github.com/Ansh2925/citymuse-voice-flow",
  },
  {
    id: "asset-flow",
    number: "03",
    title: "AssetFlow Governance",
    tagline: "Cryptographic event ledger & enterprise hardware lifecycle system",
    category: "Full-Stack Web",
    categoryTag: "ENTERPRISE ARCHITECTURE",
    description:
      "An enterprise asset management system providing automated checkout validation, role-based telemetry, and audit traceability.",
    fullDescription:
      "AssetFlow was architected to eliminate multi-department inventory chaos. With an event-sourced ledger, every equipment transfer, calibration check, and depreciation event is immutably timestamped and verified across enterprise permission trees.",
    accent: "#9ab8ff",
    accentColor: "#9ab8ff",
    visualType: "ledger",
    metrics: [
      { label: "Audit Reconciliation", value: "100%" },
      { label: "Checkout Verification", value: "320ms" },
      { label: "Tracked Units", value: "12,000+" },
    ],
    problem:
      "Siloed spreadsheets lead to lost hardware, untracked warranty expirations, and regulatory audit non-compliance across distributed teams.",
    solution:
      "Delivered an event-sourced ledger with biometric & RFID verification, automatic maintenance triggers, and comprehensive audit report generation.",
    architecture:
      "React and TypeScript interface backed by a modular Node.js API with strict PostgreSQL relational schemas, row-level security, and automated worker daemons.",
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/Ansh2925/AssetFlow_Bug_Hunters_011_odoo",
    demo: "https://github.com/Ansh2925/AssetFlow_Bug_Hunters_011_odoo",
  },
  {
    id: "autonomous-crm",
    number: "04",
    title: "Autonomous CRM Engine",
    tagline: "Predictive deal qualification & autonomous communication sentiment pipeline",
    category: "Systems & Cloud",
    categoryTag: "INTELLIGENT SYSTEMS",
    description:
      "An automated customer relationship intelligence suite that evaluates inbound lead signals and orchestrates pipeline movement.",
    fullDescription:
      "The Autonomous CRM Engine analyzes incoming enterprise communications, classifies prospect intent, extracts negotiation sentiment, and dynamically updates deal health metrics without requiring manual sales rep data entry.",
    accent: "#d6ff70",
    accentColor: "#d6ff70",
    visualType: "pipeline",
    metrics: [
      { label: "Manual Data Entry", value: "-75%" },
      { label: "Lead Scoring Speed", value: "<150ms" },
      { label: "Model Accuracy", value: "91.4%" },
    ],
    problem:
      "Sales teams waste significant weekly capacity logging calls and guessing prospect urgency, leading to stalled pipeline momentum.",
    solution:
      "Developed NLP-driven classification jobs and webhook workers that instantly assess message urgency, update stage milestones, and draft context-aware follow-ups.",
    architecture:
      "Python FastAPI asynchronous workers processing Celery queues backed by Redis, streaming live socket updates to a responsive Next.js operational dashboard.",
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com/Ansh2925/CRM",
    demo: "https://github.com/Ansh2925/CRM",
  },
  {
    id: "resolve-engine",
    number: "05",
    title: "Resolve / Entity Engine",
    tagline: "ML-driven deduplication & fuzzy entity matching engine across heterogenous sets",
    category: "AI & Machine Learning",
    categoryTag: "ENTITY RESOLUTION & NLP",
    description:
      "A high-throughput record disambiguation service pairing candidate blocking with gradient-boosted similarity feature rankers.",
    fullDescription:
      "Resolving duplicate and fuzzy entities across messy enterprise databases requires balancing quadratic pairwise comparisons with high classification accuracy. Resolve / Engine applies locality-sensitive hashing for fast candidate blocking, followed by a calibrated feature-scoring ensemble.",
    accent: "#c59aff",
    accentColor: "#c59aff",
    visualType: "graph",
    metrics: [
      { label: "Search Space Reduction", value: "99.2%" },
      { label: "Disambiguation F1", value: "0.962" },
      { label: "Records Processed/sec", value: "85,000" },
    ],
    problem:
      "Massive databases with typos, missing attributes, and alternate spellings trigger costly duplicate outreach and fragmented customer profiles.",
    solution:
      "Designed a two-stage pipeline: Locality Sensitive Hashing (LSH) for sub-linear candidate generation, followed by a gradient-boosted pairwise classifier.",
    architecture:
      "Distributed Python workers with Scikit-Learn and vector embeddings, persisted in PostgreSQL with custom trigram indexing.",
    technologies: ["Python", "Scikit-Learn", "NLP", "PostgreSQL", "Docker", "FastAPI"],
    github: "https://github.com/Ansh2925",
    demo: "https://github.com/Ansh2925",
  },
  {
    id: "atlas-core",
    number: "06",
    title: "Atlas Distributed Core",
    tagline: "High-throughput asynchronous API gateway & distributed cache orchestrator",
    category: "Systems & Cloud",
    categoryTag: "DISTRIBUTED CLOUD",
    description:
      "A resilient microservice coordinator providing rate-limiting, edge caching, and fault-tolerant service routing.",
    fullDescription:
      "Atlas Distributed Core is a high-performance gateway engine designed to absorb bursty web traffic, enforce zero-trust authentication tokens, and distribute cache invalidation signals across multi-region server clusters.",
    accent: "#ff9a76",
    accentColor: "#ff9a76",
    visualType: "cluster",
    metrics: [
      { label: "Peak RPS", value: "18,500" },
      { label: "P99 Latency", value: "4.2ms" },
      { label: "Cache Hit Ratio", value: "96.4%" },
    ],
    problem:
      "Microservice architectures often face cascade failures when sudden spikes bypass front-line web servers and overload origin database clusters.",
    solution:
      "Built an asynchronous token-bucket rate limiter with multi-tier Redis caching, automatic backpressure throttling, and circuit breakers.",
    architecture:
      "AsyncIO Python backend clustered behind NGINX load balancers, with distributed Redis clusters and Prometheus telemetry monitoring.",
    technologies: ["Python", "AsyncIO", "Redis", "Docker", "AWS", "NGINX"],
    github: "https://github.com/Ansh2925/Backend",
    demo: "https://github.com/Ansh2925/Backend",
  },
];
