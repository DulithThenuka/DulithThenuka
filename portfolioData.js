export const portfolioData = {
  personal: {
    name: "Dulith Thenuka",
    role: "Associate Software Engineer",
    subtitle: "Full-Stack Software Engineer & Enterprise Backend Specialist",
    headline: "Architecting resilient enterprise backends, scalable RESTful APIs, and responsive full-stack applications with Spring Boot and modern web frameworks.",
    bio: "Software Engineering Undergraduate and Full-Stack Developer with dedicated expertise in enterprise backend development, distributed service design, and modern frontend ecosystems. Experienced in architecting robust Spring Boot microservices, building responsive user interfaces, and designing normalized relational databases. Driven by clean code architecture, SOLID principles, and continuous technical evolution to engineer high-performance, fault-tolerant software systems.",
    careerGoals: "Committed to engineering scalable, cloud-native enterprise platforms and distributed systems by leveraging modern Java/Spring Boot architectures, rigorous design patterns, and collaborative Agile engineering practices.",
    location: "Colombo, Sri Lanka",
    phone: "+94 71 566 7783",
    email: "duliththenuka912@gmail.com",
    github: "https://github.com/DulithThenuka",
    linkedin: "https://www.linkedin.com/in/dulith-thenuka-0a85443b0",
    resumeUrl: "/Dulith_Thenuka_CV.pdf",
    status: "Available for Associate Software Engineer & Full-Stack Roles"
  },

  stats: [
    { label: "Core Specialization", value: "Java & Spring Boot Ecosystem" },
    { label: "Architectural Focus", value: "RESTful APIs & Microservices" },
    { label: "Open Source Repos", value: "10+ Production Repositories" },
    { label: "Academic Standing", value: "BSc (Hons) Software Engineering" }
  ],

  // Core highlighted competencies prioritized for technical recruiters
  coreHighlights: [
    { name: "Java", category: "Backend Architecture", level: "Proficient" },
    { name: "Spring Boot", category: "Microservices & APIs", level: "Advanced" },
    { name: "React", category: "Frontend Engineering", level: "Advanced" },
    { name: "MySQL / PostgreSQL", category: "Database Engineering", level: "Advanced" },
    { name: "Docker", category: "Containerization & DevOps", level: "Intermediate" },
    { name: "Python", category: "Scripting & Data Analysis", level: "Proficient" }
  ],

  skills: {
    "Backend & System Architecture": [
      { name: "Java (SE/EE)", level: "Proficient" },
      { name: "Spring Boot & Spring MVC", level: "Advanced" },
      { name: "Spring Data JPA & Hibernate", level: "Advanced" },
      { name: "Spring Security & JWT", level: "Intermediate" },
      { name: "RESTful API Design & Integration", level: "Advanced" },
      { name: "Microservices Architecture", level: "Intermediate" },
      { name: "Python", level: "Proficient" },
      { name: "PHP (MVC Architecture)", level: "Intermediate" }
    ],
    "Frontend & Cross-Platform": [
      { name: "React.js", level: "Advanced" },
      { name: "Angular", level: "Intermediate" },
      { name: "JavaScript (ES6+) & TypeScript", level: "Advanced" },
      { name: "Tailwind CSS & Modern CSS", level: "Advanced" },
      { name: "React Native", level: "Intermediate" },
      { name: "Responsive UI/UX Engineering", level: "Advanced" }
    ],
    "Database & Cloud Infrastructure": [
      { name: "MySQL & Query Optimization", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Database Schema Design & Normalization", level: "Advanced" },
      { name: "Docker & Containerization", level: "Intermediate" },
      { name: "AWS Cloud Fundamentals", level: "Working Knowledge" },
      { name: "Git & Version Control Workflows", level: "Advanced" }
    ],
    "Engineering Methodologies & Quality": [
      { name: "Object-Oriented Design (OOP & SOLID)", level: "Advanced" },
      { name: "Agile / Scrum Methodologies", level: "Practitioner" },
      { name: "Clean Architecture & Design Patterns", level: "Intermediate" },
      { name: "Figma UI/UX Prototyping", level: "Intermediate" }
    ]
  },

  projects: [
    {
      id: "agrolink",
      title: "AgroLink – Smart Agriculture Marketplace",
      category: "Enterprise Full-Stack Application",
      featured: true,
      description: "A centralized digital agricultural marketplace connecting commercial produce buyers directly with regional farmers, eliminating intermediary markup while optimizing transaction throughput.",
      techStack: ["Java", "Spring Boot", "MySQL", "JavaScript", "Spring Security", "BCrypt", "Tailwind CSS"],
      highlights: [
        "Architected multi-tier Role-Based Access Control (RBAC: Farmer, Buyer, Admin) with secure session management and password hashing.",
        "Engineered real-time inventory queries featuring server-side pagination, soft-deletion mechanisms, and multi-criteria location filtering.",
        "Constructed an automated order lifecycle pipeline (Pending -> Confirmed -> Dispatched -> Delivered) with asynchronous transaction confirmation."
      ],
      github: "https://github.com/DulithThenuka/agrolink",
      live: "https://github.com/DulithThenuka/agrolink"
    },
    {
      id: "disaster-management",
      title: "Araksha-LK – Humanitarian Crisis & Relief System",
      category: "Disaster Tech & Geospatial Platform",
      featured: true,
      description: "A mission-critical disaster management platform coordinating real-time emergency response, shelter capacity telemetry, and volunteer resource dispatch during natural crises across Sri Lanka.",
      techStack: ["Spring Boot", "React", "Leaflet GIS", "MySQL", "WebSocket", "Tailwind CSS"],
      highlights: [
        "Implemented real-time emergency dispatch workflows with multi-level severity triage and administrative territorial tracking.",
        "Integrated Leaflet GIS mapping for dynamic shelter occupancy visualization and emergency routing.",
        "Built asynchronous bi-directional communication channels via WebSockets for rapid field coordination."
      ],
      github: "https://github.com/DulithThenuka/Araksha-LK-Disaster-Relief-System",
      live: "https://github.com/DulithThenuka/humanitarian-crisis-management-platform"
    },
    {
      id: "oceansafe",
      title: "OceanSafe – Marine Telemetry & Hazard Alert System",
      category: "Maritime Safety & Geospatial IoT",
      featured: true,
      description: "A maritime safety telemetry solution designed for coastal authorities and small-craft operators, broadcasting live weather risk assessments and tracking offshore emergency distress signals.",
      techStack: ["Java", "Spring Boot", "React", "MySQL", "Leaflet GIS", "Tailwind CSS"],
      highlights: [
        "Developed spatial coordinate tracking to plot geofenced marine hazard perimeters and offshore storm fronts.",
        "Engineered automated SOS distress beacon logging with sub-second backend ingestion and harbor authority alerting.",
        "Optimized relational indexing for spatial telemetry records to maintain low-latency query performance under load."
      ],
      github: "https://github.com/DulithThenuka/Araksha-LK-Disaster-Relief-System",
      live: "https://github.com/DulithThenuka"
    },
    {
      id: "growlink",
      title: "GrowLink – Collaborative Skill Exchange Platform",
      category: "Enterprise Web Platform",
      featured: true,
      description: "A professional networking and collaborative development platform facilitating developer peer pairing, skill mentoring, and co-engineering workspace creation.",
      techStack: ["Java", "Spring Boot", "React", "Angular", "MySQL", "REST APIs"],
      highlights: [
        "Built modular domain services for user capability profiles, collaboration discovery, and project-based team workspaces.",
        "Designed decoupled RESTful microservices paired with event-driven notifications for mentorship requests."
      ],
      github: "https://github.com/DulithThenuka/GrowLink",
      live: "https://github.com/DulithThenuka/GrowLink"
    },
    {
      id: "ai-devsec",
      title: "AI DevSec – Automated Code Analysis & CI/CD Platform",
      category: "DevSecOps & Cloud Security",
      featured: false,
      description: "An automated DevSecOps platform integrating static application security testing (SAST), AI-assisted code vulnerability detection, and containerized deployment pipelines.",
      techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "AWS", "JWT"],
      highlights: [
        "Designed static code analysis engine delivering vulnerability scoring and automated remediation suggestions.",
        "Containerized core microservices using Docker and deployed stateless, JWT-authenticated endpoints on cloud infrastructure."
      ],
      github: "https://github.com/DulithThenuka/ai-devsec-platform",
      live: "https://github.com/DulithThenuka/ai-devsec-platform"
    },
    {
      id: "studyflow-ai",
      title: "StudyFlow AI – Academic Workflow & Productivity SaaS",
      category: "Web Application SaaS",
      featured: false,
      description: "A productivity SaaS application empowering university students to streamline deadline tracking, prioritize complex coursework with Pomodoro focus cycles, and analyze learning patterns.",
      techStack: ["PHP (MVC)", "MySQL", "JavaScript", "Chart.js", "Tailwind CSS"],
      highlights: [
        "Engineered task scheduling algorithms sorting assignments by urgency, difficulty coefficient, and target deadlines.",
        "Integrated interactive telemetry dashboards using Chart.js to visualize daily study trends and productivity metrics."
      ],
      github: "https://github.com/DulithThenuka/studyflow-ai",
      live: "https://github.com/DulithThenuka/studyflow-ai"
    },
    {
      id: "nextgen-mobile-care",
      title: "NextGen Mobile Care – Service Management & E-Commerce",
      category: "Full-Stack Web System",
      featured: false,
      description: "An enterprise service management and e-commerce platform orchestrating end-to-end device diagnostic workflows, repair status tracking, and spare parts procurement.",
      techStack: ["PHP (MVC)", "MySQL", "Tailwind CSS", "JavaScript"],
      highlights: [
        "Architected strict separation of concerns via Custom MVC architecture, isolating diagnostic processing from the retail checkout engine.",
        "Created an intuitive client tracking portal reflecting real-time technician stage updates."
      ],
      github: "https://github.com/DulithThenuka/nextgen-mobile-care",
      live: "https://github.com/DulithThenuka/nextgen-mobile-care"
    },
    {
      id: "gamehub-pro",
      title: "GameHub Pro – Interactive Catalog & Review Portal",
      category: "Web Application",
      featured: false,
      description: "A database-driven digital media catalog application providing granular filtering, dynamic rating calculations, and relational metadata indexing.",
      techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Thymeleaf"],
      highlights: [
        "Implemented Spring Data JPA repository abstractions to manage complex multi-table relational associations.",
        "Leveraged server-side Thymeleaf template rendering for fast, SEO-friendly page delivery."
      ],
      github: "https://github.com/DulithThenuka/gamehub-pro",
      live: "https://github.com/DulithThenuka/gamehub-pro"
    },
    {
      id: "fleetpro",
      title: "FleetPro – Enterprise Transport & Fleet Logistics",
      category: "Enterprise Desktop System",
      featured: false,
      description: "A logistics and fleet management software system handling corporate vehicle lifecycle audits, preventive maintenance scheduling, and fuel cost tracking.",
      techStack: ["C#", ".NET 10", "WPF", "SQL Server", "Clean Architecture"],
      highlights: [
        "Implemented Clean Architecture with strict dependency inversion, repository patterns, and domain isolation.",
        "Engineered comprehensive audit logging and operational cost analytics for commercial transportation fleets."
      ],
      github: "https://github.com/DulithThenuka/FleetPro",
      live: "https://github.com/DulithThenuka/FleetPro"
    }
  ],

  education: [
    {
      institution: "NSBM Green University",
      degree: "BSc (Hons) in Software Engineering",
      period: "2025 – Present",
      status: "Undergraduate",
      description: "Specialized undergraduate program focused on enterprise software architecture, object-oriented systems design, distributed systems, and modern database engineering.",
      highlights: [
        "Core academic focus: Enterprise Java (Spring Boot), Distributed Systems, Data Structures & Algorithms, Database Engineering",
        "Active technical contributor to university software engineering symposiums and hackathons"
      ]
    },
    {
      institution: "D.S. Senanayake College, Colombo",
      degree: "G.C.E. Advanced Level & Ordinary Level",
      period: "2009 – 2022",
      status: "Alumnus",
      description: "Rigorous academic curriculum with foundational specialization in Physical Sciences, Combined Mathematics, and Information Technology.",
      highlights: [
        "Active leadership involvement in the school Information and Communication Technology Society (ICTS)"
      ]
    }
  ],

  experience: [
    {
      role: "Industry Liaison & Event Coordinator – Career Fair 2026",
      organization: "Career Guidance Unit, NSBM Green University",
      period: "2026",
      type: "University Leadership & Corporate Engagement",
      responsibilities: [
        "Coordinated logistics and bilateral communications with visiting enterprise IT and software engineering firms.",
        "Facilitated on-site technical interviews and streamline candidate evaluation sessions for tech recruiters.",
        "Managed stage operations, scheduling, and brand presence for participating multinational corporate partners."
      ]
    },
    {
      role: "Software Engineering & Project Delivery",
      organization: "Academic & Collaborative Initiatives",
      period: "2024 – Present",
      type: "Independent Full-Stack Engineering",
      responsibilities: [
        "Engineered production-grade RESTful backends utilizing Java, Spring Boot, Spring Security, and relational databases (MySQL/PostgreSQL).",
        "Constructed responsive, accessible client interfaces leveraging React, Angular, and Tailwind CSS.",
        "Practiced rigorous Git workflows, atomic commits, architectural documentation, and defensive programming standards."
      ]
    }
  ],

  reference: {
    name: "Sherien Abeygoonesekera",
    title: "Head of Department – Career Guidance Unit",
    organization: "NSBM Green University",
    email: "careerguidance@nsbm.ac.lk",
    contact: "+94 71 672 6007"
  }
};
