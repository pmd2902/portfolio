export interface SkillItem {
  name: string
  category: 'Languages' | 'Frameworks' | 'State & Data' | 'UI & Styling' | 'Architecture' | 'Tools & DevOps'
  iconName: string
  proficiency: string
  description: string
  highlight?: boolean
}

export interface ProjectMission {
  id: string
  code: string
  name: string
  subtitle: string
  company: string
  period: string
  role: string
  description: string
  objectives: string[]
  achievements: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  badge: string
  telemetry: {
    label: string
    value: string
  }[]
  caseStudy: {
    challenge: string
    solution: string
    architecture: string
    impact: string
  }
}

export interface WorkExperience {
  id: string
  company: string
  role: string
  period: string
  location: string
  isCurrent?: boolean
  description: string
  projects: {
    name: string
    overview: string
    bullets: string[]
    stack: string[]
  }[]
}

export interface EducationItem {
  institution: string
  period: string
  degree: string
  grade: string
  focus: string
}

export const PROFILE = {
  name: 'Phan Minh Duc',
  callsign: 'PMD-2902',
  title: 'Middle Front-End Developer',
  orbitRole: 'Specialized in Real-Time UI Architecture & Micro-Frontends',
  summary:
    'Frontend Developer with nearly 4 years of industry experience building scalable web and cross-platform desktop applications. Strong expertise in real-time UI architecture, high-frequency hardware data rendering, Micro-Frontends, and performance optimization. Currently collaborating with an international Agile team in Singapore, working closely across frontend interfaces, native desktop applications, and hardware services.',
  location: 'Ho Chi Minh City, Vietnam',
  coordinates: '10.8231° N, 106.6297° E',
  missionStatus: 'ACTIVE FLIGHT (ORBIT NOMINAL)',
  experienceYears: 'Nearly 4 Years',
  email: 'pmdphan@gmail.com',
  phone: '+84 933 770 783',
  phoneRaw: '+84933770783',
  github: 'https://github.com/pmd2902',
  githubUsername: 'pmd2902',
  linkedin: 'https://www.linkedin.com/in/pmd2902/',
  cvPdfPath: '/Phan_Minh_Duc_CV_Frontend_Developer.pdf',
  stats: [
    { label: 'FLIGHT EXPERIENCE', value: '4 yrs', desc: 'Industry engineering tenure' },
    { label: 'LAG REDUCTION', value: '~15%', desc: 'High-frequency telemetry optimization' },
    { label: 'BUNDLE SAVING', value: '~30%', desc: 'Code splitting & lazy loading' },
    { label: 'COLLABORATION', value: 'Singapore', desc: 'Cross-border Agile teams' },
  ]
}

export const SKILLS_DATA: SkillItem[] = [
  // Languages
  {
    name: 'TypeScript',
    category: 'Languages',
    iconName: 'FileCode2',
    proficiency: 'Core Specialization',
    description: 'Strict type safety across large enterprise apps and desktop architecture.',
    highlight: true,
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Languages',
    iconName: 'Code',
    proficiency: 'Expert',
    description: 'Modern asynchronous programming, DOM APIs, and event loops.',
    highlight: true,
  },
  {
    name: 'English',
    category: 'Languages',
    iconName: 'Globe',
    proficiency: 'Intermediate (Working)',
    description: 'Daily technical collaboration in cross-border Singapore agile sprints.',
  },

  // Frameworks
  {
    name: 'React.js',
    category: 'Frameworks',
    iconName: 'Atom',
    proficiency: 'Core Expertise',
    description: 'Component architecture, custom hooks, virtualized rendering, and memoization.',
    highlight: true,
  },
  {
    name: 'Electron.js',
    category: 'Frameworks',
    iconName: 'Monitor',
    proficiency: 'Specialized',
    description: 'Cross-platform desktop application engineering for Razer gaming peripherals.',
    highlight: true,
  },
  {
    name: 'Next.js',
    category: 'Frameworks',
    iconName: 'Layers',
    proficiency: 'Advanced',
    description: 'Fullstack React framework, SSR/SSG rendering, routing, and modern web apps.',
    highlight: true,
  },

  // State & Data
  {
    name: 'Redux / Redux Toolkit',
    category: 'State & Data',
    iconName: 'Workflow',
    proficiency: 'Advanced',
    description: 'Predictable state management for complex enterprise modules.',
  },
  {
    name: 'Zustand',
    category: 'State & Data',
    iconName: 'Sparkles',
    proficiency: 'Advanced',
    description: 'Lightweight reactive state management for rapid contract signing workflows.',
  },
  {
    name: 'WebSocket',
    category: 'State & Data',
    iconName: 'Radio',
    proficiency: 'Specialized',
    description: 'Streaming real-time biometric and smart-card hardware data to operator dashboards.',
    highlight: true,
  },
  {
    name: 'RESTful APIs',
    category: 'State & Data',
    iconName: 'Network',
    proficiency: 'Advanced',
    description: 'Robust API integration, telemetry polling, and contract data synchronization.',
  },

  // UI & Styling
  {
    name: 'Tailwind CSS',
    category: 'UI & Styling',
    iconName: 'Palette',
    proficiency: 'Advanced',
    description: 'Utility-first rapid UI development and design token systems.',
    highlight: true,
  },
  {
    name: 'Shadcn/ui',
    category: 'UI & Styling',
    iconName: 'Component',
    proficiency: 'Advanced',
    description: 'Accessible, unstyled component primitives customized for enterprise workflows.',
  },
  {
    name: 'React Bits',
    category: 'UI & Styling',
    iconName: 'Sparkles',
    proficiency: 'Proficient',
    description: 'Interactive animated React components, creative UI patterns, and particle micro-interactions.',
    highlight: true,
  },
  {
    name: 'Material UI (MUI)',
    category: 'UI & Styling',
    iconName: 'LayoutGrid',
    proficiency: 'Proficient',
    description: 'Enterprise data tables, dashboards, and cohesive component ecosystems.',
  },
  {
    name: 'Responsive & Accessible Design',
    category: 'UI & Styling',
    iconName: 'Smartphone',
    proficiency: 'Standard',
    description: 'Cross-device fluid responsiveness, ARIA keyboard navigation, and contrast adherence.',
  },

  // Architecture
  {
    name: 'Micro-Frontend (Module Federation)',
    category: 'Architecture',
    iconName: 'Cpu',
    proficiency: 'Specialized',
    description: 'Decomposed monolithic frontends into independent, scalable micro-apps.',
    highlight: true,
  },
  {
    name: 'High-Frequency Rendering Optimization',
    category: 'Architecture',
    iconName: 'Zap',
    proficiency: 'Specialized',
    description: 'Throttling, React memoization, and virtualization for real-time hardware telemetry.',
    highlight: true,
  },
  {
    name: 'Code Splitting & Lazy Loading',
    category: 'Architecture',
    iconName: 'Maximize2',
    proficiency: 'Advanced',
    description: 'Route-based splitting cutting initial bundle load time by ~30%.',
  },
  {
    name: 'BroadcastChannel & Hardware IPC',
    category: 'Architecture',
    iconName: 'Share2',
    proficiency: 'Specialized',
    description: 'Zero-latency bidirectional communication between native hardware middleware and UI.',
    highlight: true,
  },

  // Tools & DevOps
  {
    name: 'Git & Bitbucket',
    category: 'Tools & DevOps',
    iconName: 'GitBranch',
    proficiency: 'Standard',
    description: 'Version control, multi-branching strategies, and collaborative code reviews.',
  },
  {
    name: 'Docker',
    category: 'Tools & DevOps',
    iconName: 'Container',
    proficiency: 'Working Knowledge',
    description: 'Containerized micro-services and consistent build environments.',
  },
  {
    name: 'Jenkins (CI/CD)',
    category: 'Tools & DevOps',
    iconName: 'RefreshCw',
    proficiency: 'Proficient',
    description: 'Monitoring build & packaging pipelines for seamless release schedules.',
  },
  {
    name: 'Postman & JMeter',
    category: 'Tools & DevOps',
    iconName: 'CheckCircle2',
    proficiency: 'Proficient',
    description: 'Automated API validation, regression testing, and load/stress bottleneck analysis.',
  },
  {
    name: 'Jira & Agile Workflows',
    category: 'Tools & DevOps',
    iconName: 'Kanban',
    proficiency: 'Advanced',
    description: 'Sprint planning, ticket tracking, and cross-timezone sync with Singapore teams.',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 's3corp',
    company: 'S3Corp',
    role: 'Frontend Developer',
    period: '2/2025 – Present',
    location: 'Ho Chi Minh City (Collaborating with Singapore)',
    isCurrent: true,
    description:
      'Spearheading frontend development for enterprise gaming peripherals desktop suite Synapse 4 within a massive distributed codebase, serving as Macro Module Frontend Lead while partnering closely with multinational engineering teams across Vietnam and Singapore.',
    projects: [
      {
        name: 'Synapse 4 (Cross-Platform Gaming Device Desktop Application)',
        overview:
          'Mission-critical, enterprise-grade cross-platform desktop suite orchestrating peripheral hardware controls, telemetry streaming, and macro automation across a massive multi-module codebase.',
        bullets: [
          'Mastered and navigated a massive enterprise codebase (multi-module Electron + React desktop ecosystem), maintaining deep comprehension of complex system architecture, IPC layers, and strict modular boundaries.',
          'Served as Frontend Lead for the Macro Module, spearheading end-to-end technical design, architectural RFCs, and feature delivery for complex macro recording, sequence editing, and device key-binding.',
          'Collaborated seamlessly in a cross-border distributed engineering setup, partnering daily with international Product Managers, C++ Native Middleware engineers, and QA teams across Singapore and Vietnam via English Agile sprints.',
          'Implemented real-time bidirectional communication between C++ hardware middleware and UI via BroadcastChannel & IPC protocols, ensuring zero-latency device synchronization and high stability.',
          'Optimized high-frequency telemetry rendering (lighting cycles, key-presses, macro triggers) using React memoization, virtualized lists, and event throttling, driving a ~15% reduction in UI lag and memory overhead.',
          'Maintained rapid, reliable deployment cadence via Jenkins CI/CD pipelines, collaborating across timezones to troubleshoot packaging and build pipelines for timely release deliveries.',
        ],
        stack: ['Electron.js', 'React.js', 'TypeScript', 'Micro-Frontend', 'BroadcastChannel', 'Jenkins', 'Jira'],
      },
    ],
  },
  {
    id: 'vtc-smarttech',
    company: 'VTC Smarttech',
    role: 'Frontend Developer',
    period: '10/2022 – 1/2025',
    location: 'Ho Chi Minh City',
    description:
      'Engineered enterprise identity management platforms and digital signature workflows with micro-frontends and hardware integration.',
    projects: [
      {
        name: 'Citizen Identity Card (CIC) Authentication Platform',
        overview:
          'Mission-critical enterprise national identity management solution streaming smart-card scans and biometric verification in real time.',
        bullets: [
          'Designed and developed scalable frontend architecture using React.js, TypeScript, Redux, and Micro-Frontend (Module Federation) to modularize enterprise identity management workflows.',
          'Integrated RESTful APIs and WebSockets to stream real-time smart-card scanning and biometric verification results to operator dashboards.',
          'Built a companion desktop authentication client using C# (.NET Core, WinForms) to interface with physical ID card readers and securely bridge hardware data to the web application.',
        ],
        stack: ['React.js', 'TypeScript', 'Redux', 'Micro-Frontend (Module Federation)', 'WebSockets', 'C# .NET Core', 'REST APIs'],
      },
      {
        name: 'Edocsign (Digital Signature & Contract Management Platform)',
        overview:
          'Full-cycle cloud digital signature system supporting interactive multi-step contract approval and drag-and-drop signature placement.',
        bullets: [
          'Developed end-to-end digital signing interfaces using React.js, Tailwind CSS, and Shadcn/ui, enabling interactive PDF preview, drag-and-drop signature placement, and multi-step approval workflows.',
          'Enhanced application performance and reduced initial bundle load time by ~30% through route-based code splitting, lazy loading, and efficient state management with Zustand/Redux.',
          'Partnered with Product Owners and UI/UX Designers to refine technical feasibility and elevate user experience across desktop and mobile browsers.',
        ],
        stack: ['React.js', 'Tailwind CSS', 'Shadcn/ui', 'Zustand', 'Redux', 'PDF Workflows', 'Code Splitting'],
      },
    ],
  },
  {
    id: 'smartlog',
    company: 'SMARTLOG',
    role: 'Web Manual Tester',
    period: '6/2022 – 9/2022',
    location: 'Ho Chi Minh City',
    description:
      'Quality assurance engineering for complex logistics systems, formulating robust test strategies applied in subsequent frontend engineering.',
    projects: [
      {
        name: 'Logistics UI/UX & API Quality Assurance',
        overview:
          'Comprehensive manual and automated verification across end-to-end supply chain logistics operations.',
        bullets: [
          'Designed and executed comprehensive test plans and test cases covering complex logistics UI/UX workflows and business logic.',
          'Conducted automated/manual API testing via Postman and load/stress testing using JMeter to identify performance bottlenecks prior to production deployment.',
          'Collaborated directly with Frontend and Backend engineers to reproduce edge-case defects, establishing a strong quality-assurance mindset applied throughout subsequent frontend development roles.',
        ],
        stack: ['Postman', 'JMeter', 'Test Planning', 'Regression Testing', 'Bug Reproduction'],
      },
    ],
  },
  {
    id: 'lofivn',
    company: 'LOFIVN company',
    role: 'Frontend Intern',
    period: '5/2021 – 8/2021',
    location: 'Ho Chi Minh City',
    description: 'Early foundational frontend training developing cross-browser web portals.',
    projects: [
      {
        name: 'Responsive Web Portals & CMS Customization',
        overview:
          'Customizing responsive websites with strong emphasis on accessibility, cross-browser stability, and SEO.',
        bullets: [
          'Built and customized responsive WordPress websites, ensuring cross-browser compatibility, UI consistency, and SEO-friendly structure.',
        ],
        stack: ['JavaScript', 'HTML5', 'CSS3', 'WordPress', 'SEO Optimization'],
      },
    ],
  },
]

export const PROJECTS_DATA: ProjectMission[] = [
  {
    id: 'synapse-4',
    code: 'MISSION-RAZER',
    name: 'Synapse 4 Gaming Suite',
    subtitle: 'Cross-Platform Peripheral Architecture & Macro Engine',
    company: 'S3Corp',
    period: '2025 – Present',
    role: 'Frontend Developer & Macro Lead',
    badge: 'FLAGSHIP DESKTOP',
    description:
      'Enterprise-grade cross-platform desktop suite orchestrating hardware key-binding, high-frequency telemetry, and macro sequences across a massive multi-module codebase with multinational engineering teams.',
    objectives: [
      'Master and navigate a massive enterprise-scale desktop architecture across Electron and modular Micro-Frontends.',
      'Lead engineering for the Macro Module from technical design RFCs to production-grade deployment.',
      'Collaborate cross-functionally and cross-border with international teams in Singapore (C++ Middleware, QA, Product Management).',
      'Bridge native hardware middleware with frontend UI with zero latency, eliminating memory leaks and frame drops.',
    ],
    achievements: [
      'Mastered and navigated a massive enterprise codebase, demonstrating deep system comprehension across multi-tiered micro-frontends, complex state, and native IPC layers.',
      'Served as Frontend Lead for the Macro Module, spearheading technical design, sequence editing workflows, and device key-binding.',
      'Drove effective cross-border teamwork and technical communication with Singapore engineering hubs, collaborating with C++ middleware devs and QA for seamless integration.',
      'Reduced UI lag and memory overhead by ~15% via React memoization, virtualized rendering, and hardware event throttling.',
      'Maintained smooth, continuous release schedules with Jenkins CI/CD pipelines across Singapore and Vietnam development cycles.',
    ],
    technologies: ['Electron.js', 'React.js', 'TypeScript', 'Micro-Frontend', 'BroadcastChannel', 'Jenkins', 'Jira', 'Cross-Border Teamwork'],
    telemetry: [
      { label: 'Codebase Scale', value: 'Enterprise Monorepo' },
      { label: 'Cross-Border Team', value: 'Singapore & VN Sprints' },
      { label: 'Latency Overhead', value: '-15% Memory & Lag' },
      { label: 'Hardware Channel', value: 'BroadcastChannel IPC' },
    ],
    caseStudy: {
      challenge:
        'Navigating an extensive, multi-tier enterprise codebase with high-frequency hardware telemetry updates (lighting cycles, DPI tracking, macro triggers) that previously overloaded the React render loop. Crucially, the mission required coordinating across diverse functional domains (C++ native middleware, firmware, QA) and cross-border international stakeholders in Singapore under strict sprint milestones.',
      solution:
        'Established deep architectural comprehension of the massive desktop system to implement clean module boundaries and virtualized list rendering. Standardized bidirectional IPC communication via BroadcastChannel with C++ middleware engineers, introduced event throttling on high-frequency streams, and actively drove daily cross-border technical syncs, code reviews, and bilingual communication between Vietnam and Singapore teams.',
      architecture:
        'Large-scale enterprise Electron desktop application hosting decoupled Micro-Frontend modules, communicating with low-level C++ hardware middleware through zero-latency BroadcastChannel/IPC bridges and synchronized via multinational Jenkins CI/CD pipelines.',
      impact:
        'Achieved a ~15% reduction in memory overhead and eliminated noticeable UI stutter during high-intensity gaming peripheral operations, while ensuring 100% on-time release milestones backed by seamless cross-border collaboration and high team trust.',
    },
  },
  {
    id: 'cic-auth',
    code: 'MISSION-ID-SEC',
    name: 'Citizen Identity Card (CIC) Platform',
    subtitle: 'National Identity Verification & Biometric Stream',
    company: 'VTC Smarttech',
    period: '2022 – 2025',
    role: 'Frontend Developer & Hardware Bridge Author',
    badge: 'ENTERPRISE IDENTITY',
    description:
      'Enterprise platform modularizing identity verification workflows, streaming smart-card scans and biometric data in real time.',
    objectives: [
      'Modularize identity workflows using Micro-Frontend Module Federation.',
      'Stream real-time card scanning and biometric verification to operator dashboards.',
      'Bridge physical chip card readers on client workstations to the cloud web application.',
    ],
    achievements: [
      'Designed scalable frontend architecture with React.js, TypeScript, and Module Federation.',
      'Integrated WebSockets and REST APIs for zero-delay biometric verification display.',
      'Engineered standalone C# (.NET Core, WinForms) companion client interfacing with physical card readers.',
    ],
    technologies: ['React.js', 'TypeScript', 'Redux', 'Micro-Frontend (Module Federation)', 'WebSockets', 'C# .NET Core', 'RESTful APIs'],
    telemetry: [
      { label: 'Streaming Protocol', value: 'WebSocket & REST' },
      { label: 'Hardware Client', value: 'C# .NET Core' },
      { label: 'Modularity', value: 'Webpack Module Federation' },
    ],
    caseStudy: {
      challenge:
        'Web browsers cannot directly communicate with physical USB chip card readers and biometric scanners without compromising system security.',
      solution:
        'Built a native C# (.NET Core) companion client that runs locally on operator workstations, reading hardware chip data securely and streaming it to the React dashboard via encrypted local sockets.',
      architecture:
        'Modular React micro-frontends subscribed to live WebSocket streams originating from the local C# driver service.',
      impact:
        'Enabled frictionless, legally compliant citizen authentication across enterprise operator booths with instant biometric feedback.',
    },
  },
  {
    id: 'edocsign',
    code: 'MISSION-DOC-FLOW',
    name: 'Edocsign Digital Signature Platform',
    subtitle: 'Interactive PDF Preview & Drag-and-Drop Workflow',
    company: 'VTC Smarttech',
    period: '2022 – 2024',
    role: 'Frontend Developer',
    badge: 'FINTECH / SAAS',
    description:
      'High-performance digital signature and contract management suite featuring drag-and-drop signing and multi-tier approval paths.',
    objectives: [
      'Deliver fluid, responsive PDF preview with accurate coordinate mapping for digital signatures.',
      'Cut initial bundle load times across mobile and desktop browsers.',
      'Partner with designers to build an accessible, modern SaaS interface.',
    ],
    achievements: [
      'Developed drag-and-drop signature placement and multi-step approval workflows using React, Tailwind CSS, and Shadcn/ui.',
      'Reduced initial bundle load time by ~30% through route-based code splitting and lazy loading.',
      'Implemented lightweight state management using Zustand and Redux.',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Shadcn/ui', 'Zustand', 'Redux', 'Code Splitting', 'Responsive Design'],
    telemetry: [
      { label: 'Bundle Load Reduction', value: '~30% Faster' },
      { label: 'State Model', value: 'Zustand + Redux' },
      { label: 'Design System', value: 'Tailwind + Shadcn/ui' },
    ],
    caseStudy: {
      challenge:
        'Large PDF contract documents and complex signing interfaces resulted in heavy initial bundle downloads and sluggish drag interactions on mobile devices.',
      solution:
        'Divided the application into lazy-loaded route boundaries, transitioned reactive modal state to lightweight Zustand stores, and optimized canvas-based signature placement.',
      architecture:
        'Component-driven UI with Shadcn/ui and Tailwind CSS, separated into signing workflow chunks loaded on demand.',
      impact:
        'Cut bundle load time by ~30%, providing a silky smooth signing experience on both high-end desktop monitors and mobile touchscreens.',
    },
  },
  {
    id: 'smartlog-qa',
    code: 'MISSION-QA-CORE',
    name: 'Logistics QA & Bottleneck Analysis',
    subtitle: 'Automated API & Stress Verification Framework',
    company: 'SMARTLOG',
    period: '2022',
    role: 'Web Manual Tester',
    badge: 'QUALITY ENGINEERING',
    description:
      'Deep quality-assurance execution uncovering critical performance bottlenecks and establishing rock-solid software stability standards.',
    objectives: [
      'Formulate comprehensive test matrices for complex supply chain logistics.',
      'Detect system capacity limits using automated API testing and load stress testing.',
      'Establish a preventive QA mindset to eliminate frontend regression.',
    ],
    achievements: [
      'Executed automated and manual API test suites in Postman and load testing in JMeter.',
      'Reproduced complex edge-case defects alongside Frontend and Backend engineers.',
      'Instituted regression verification practices later applied to all frontend architecture builds.',
    ],
    technologies: ['Postman', 'JMeter', 'API Testing', 'Load Testing', 'Regression Suites'],
    telemetry: [
      { label: 'Test Scope', value: 'Full Logistics Matrix' },
      { label: 'Bottleneck Detection', value: 'Postman & JMeter' },
      { label: 'Defect Rate', value: 'Substantially Reduced' },
    ],
    caseStudy: {
      challenge:
        'High concurrency during peak logistics dispatch caused latency spikes and unhandled edge-case race conditions in user interfaces.',
      solution:
        'Constructed repeatable JMeter stress scenarios mirroring realistic peak loads, identifying exact API endpoints and frontend state mismatches causing race conditions.',
      architecture:
        'Systematic test plans mapped to supply chain state machines with automated Postman test scripts.',
      impact:
        'Eliminated critical production deployment defects and built the foundation for Duc’s high-stability frontend engineering philosophy.',
    },
  },
]

export const EDUCATION_DATA: EducationItem = {
  institution: 'Ho Chi Minh City University of Natural Resources and Environment',
  period: '2018 – 2022',
  degree: "Engineer's Degree in Information Technology",
  grade: 'Good',
  focus: 'Software Engineering, Computer Science Fundamentals, Networking & System Architecture',
}

export const AI_KNOWLEDGE_BASE = [
  {
    keywords: ['who', 'about', 'duc', 'phan', 'role', 'experience', 'background', 'intro'],
    answer:
      'Phan Minh Duc is a Middle Front-End Developer with nearly 4 years of industry experience. He specializes in scalable web and cross-platform desktop applications (React, Next.js, Electron.js), Micro-Frontends (Module Federation), high-frequency hardware rendering optimization, and real-time data streaming (WebSockets, BroadcastChannel). He is currently at S3Corp, navigating a massive enterprise codebase as Macro Module Frontend Lead in Synapse 4, collaborating closely with international engineering teams across Vietnam and Singapore.',
  },
  {
    keywords: ['synapse', 'razer', 's3corp', 'gaming', 'macro', 'desktop', 'electron', 'codebase', 'teamwork', 'monorepo'],
    answer:
      'At S3Corp (2/2025 – Present), Duc works on Synapse 4, an enterprise gaming peripheral desktop suite built with Electron, React.js, TypeScript, and Micro-Frontends. As Frontend Lead for the Macro Module, he mastered a massive enterprise codebase with comprehensive system comprehension, spearheading macro recording and key-binding. He integrated real-time BroadcastChannel IPC communication with C++ native middleware, reduced UI lag and memory overhead by ~15%, and collaborated daily in cross-border Agile sprints with engineering teams in Singapore.',
  },
  {
    keywords: ['lag', 'optimization', 'performance', 'memory', '15%', 'render'],
    answer:
      'Duc achieved a ~15% reduction in UI lag and memory overhead on Synapse 4 by tackling high-frequency hardware updates (device telemetry, lighting effects, macro profiles). He applied strategic React memoization, event throttling on incoming hardware streams, and virtualized rendering for long macro sequences.',
  },
  {
    keywords: ['bundle', 'edocsign', 'vtc', '30%', 'speed', 'load'],
    answer:
      'On the Edocsign platform at VTC Smarttech, Duc reduced initial bundle load times by ~30% through route-based code splitting, lazy loading, and replacing bulky global state with efficient Zustand stores alongside Redux.',
  },
  {
    keywords: ['cic', 'identity', 'card', 'c#', 'hardware', 'biometric', 'socket'],
    answer:
      'On the Citizen Identity Card (CIC) platform at VTC Smarttech, Duc designed micro-frontends with Module Federation, integrated WebSockets for streaming live smart-card scans and biometric data, and engineered a companion desktop client in C# (.NET Core, WinForms) to securely bridge physical USB card readers to the web app.',
  },
  {
    keywords: ['skills', 'tech', 'stack', 'languages', 'tools'],
    answer:
      'Duc’s technical arsenal includes:\n• Languages: TypeScript, JavaScript (ES6+), English (Working proficiency)\n• Frameworks: React.js, Next.js, Electron.js\n• State & Data: Redux Toolkit, Zustand, RESTful APIs, WebSocket, BroadcastChannel\n• UI: Tailwind CSS, Shadcn/ui, React Bits, Material UI (MUI), Responsive & Accessible Design\n• Architecture: Micro-Frontends (Module Federation), High-Frequency Rendering Optimization, Code Splitting\n• Tools/DevOps: Git, Docker, Jenkins CI/CD, Postman, JMeter, Jira, Bitbucket.',
  },
  {
    keywords: ['contact', 'email', 'phone', 'hire', 'linkedin', 'github'],
    answer:
      'You can reach Duc directly:\n• Email: pmdphan@gmail.com\n• Phone: +84 933 770 783\n• LinkedIn: linkedin.com/in/minh-duc-phan-11a556332/\n• GitHub: github.com/pmd2902\n• Location: Ho Chi Minh City, Vietnam (Ready for remote / international cross-border teams).',
  },
  {
    keywords: ['education', 'degree', 'university', 'college', 'gpa'],
    answer:
      'Duc graduated from Ho Chi Minh City University of Natural Resources and Environment (2018 – 2022) with an Engineer’s Degree in Information Technology, achieving a Graduation Grade of "Good".',
  },
]
