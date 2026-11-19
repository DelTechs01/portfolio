export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  problem: string;
  solution: string;
  architecture: {
    description: string;
    diagram: string;
    components: string[];
  };
  techDecisions: {
    decision: string;
    rationale: string;
    impact: string;
  }[];
  results: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  improvements: string[];
  screenshots: string[];
  timeline: string;
  teamSize: string;
  role: string;
  github?: string;
  demo?: string;
  // When set, the card's button opens a "coming soon" drawer instead of the
  // live link (link is retained in `demo` for when it's ready).
  comingSoon?: string;
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };
}

// Real projects. The card (Projects page) uses: title, description, image, tags, demo.
// The longer fields feed the detail page  copy is drafted from what each project does;
// tweak the wording and swap `tags` for your real stack any time.
export const caseStudiesData: CaseStudy[] = [
  {
    id: 'eastmedic-hms',
    title: 'EastMedic HMS - Hospital Management System',
    description: 'A comprehensive hospital management system that digitizes patient records, appointments, billing, pharmacy, and inventory for clinics and mid-sized hospitals.',
    image: '/projects/eastmedic.webp',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Role-Based Access'],
    problem: 'Clinics relied on paper records and disconnected spreadsheets, causing slow patient check-ins, billing errors, lost histories, and no real-time visibility into pharmacy stock.',
    solution: 'Built a unified HMS with electronic medical records, appointment scheduling, automated billing, pharmacy/inventory tracking, and role-based dashboards for doctors, nurses, pharmacists, and administrators.',
    architecture: {
      description: 'Modular web application with a typed REST API, a relational database, and role-based access control protecting sensitive patient data.',
      diagram: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      components: [
        'React + TypeScript frontend with role-specific dashboards',
        'Node.js REST API with input validation and audit logging',
        'PostgreSQL for patient records, billing, and inventory',
        'Role-Based Access Control (RBAC) for staff permissions',
        'Appointment scheduling with reminders and notifications',
        'Pharmacy and stock management with low-stock alerts',
        'Encrypted storage for sensitive medical data'
      ]
    },
    techDecisions: [
      {
        decision: 'Adopted role-based access control from day one',
        rationale: 'Healthcare data is sensitive and access must be scoped per staff role.',
        impact: 'Reduced risk of unauthorised access and simplified compliance.'
      },
      {
        decision: 'Chose a relational database (PostgreSQL)',
        rationale: 'Patient, billing, and inventory data is highly relational and needs strong integrity.',
        impact: 'Consistent records and reliable cross-department reporting.'
      },
      {
        decision: 'TypeScript across the stack',
        rationale: 'Strong typing reduces runtime errors in a domain where mistakes are costly.',
        impact: 'Fewer production bugs and safer refactors.'
      }
    ],
    results: [
      { metric: 'Patient Check-in', before: 'Manual', after: 'Digital', improvement: 'Faster, paperless intake' },
      { metric: 'Billing Errors', before: 'Frequent', after: 'Automated', improvement: 'Fewer manual mistakes' },
      { metric: 'Records Access', before: 'Scattered', after: 'Centralised', improvement: 'Single source of truth' }
    ],
    challenges: [
      {
        challenge: 'Protecting sensitive patient data',
        solution: 'Implemented RBAC, encryption at rest, and audit trails for every record access.'
      },
      {
        challenge: 'Keeping pharmacy stock in sync with dispensing',
        solution: 'Linked dispensing actions to live inventory with automatic low-stock alerts.'
      }
    ],
    improvements: [
      'Add lab results and medical imaging integration',
      'Offline-first mode for low-connectivity facilities',
      'Insurance and claims processing module'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80'
    ],
    timeline: 'Ongoing',
    teamSize: 'Solo / small team',
    role: 'Full-Stack Developer',
    demo: 'https://eastmedic-hms.vercel.app/'
  },
  {
    id: 'zynthos-orchestrator',
    title: 'Zynthos Orchestrator - AI Agent Platform',
    description: 'A platform for building, deploying, and running AI agents, with a built-in copilot that helps you connect tools and manage your agents from a single dashboard.',
    image: '/projects/zynthos.webp',
    tags: ['AI Agents', 'LLM', 'Automation', 'React', 'Dashboard'],
    problem: 'Building and running AI agents usually means stitching together SDKs, prompts, tools, and hosting by hand  with no single place to deploy, monitor, and manage them.',
    solution: 'Zynthos lets users build agents, connect tools, deploy, and run them from one dashboard. An in-app copilot guides setup and troubleshooting  e.g. spinning up agents like Tech Post Pro and WhatsApp Support and connecting new tools to them.',
    architecture: {
      description: 'Web platform with an agent runtime, pluggable tool connectors, a conversational copilot, and a dashboard for deploying and monitoring agents.',
      diagram: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
      components: [
        'Dashboard to build, deploy, and monitor agents',
        'Agent runtime that executes multi-step tasks',
        'Pluggable connectors for external tools and APIs',
        'In-app copilot for guided setup and troubleshooting',
        'Per-agent logs and run history',
        'Authentication and workspace management'
      ]
    },
    techDecisions: [
      {
        decision: 'Copilot-first onboarding',
        rationale: 'A conversational assistant lowers the barrier to configuring and connecting agents.',
        impact: 'Users get agents running without wrestling with raw configuration.'
      },
      {
        decision: 'Pluggable tool connectors',
        rationale: 'Agents are only as useful as the tools they can reach.',
        impact: 'New integrations can be added without rebuilding an agent.'
      }
    ],
    results: [
      { metric: 'Agent Setup', before: 'Manual/code', after: 'Guided', improvement: 'Faster time-to-first-agent' },
      { metric: 'Tool Integration', before: 'Custom glue', after: 'Connectors', improvement: 'Reusable, pluggable tools' },
      { metric: 'Visibility', before: 'None', after: 'Dashboard', improvement: 'Live status and run history' }
    ],
    challenges: [
      {
        challenge: 'Making agent configuration approachable',
        solution: 'Added a copilot that walks users through building and connecting agents.'
      },
      {
        challenge: 'Running many agents reliably',
        solution: 'Isolated agent runs with per-agent logging and history for debugging.'
      }
    ],
    improvements: [
      'Marketplace of prebuilt agents and tools',
      'Team roles and shared workspaces',
      'Usage analytics per agent'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80'
    ],
    timeline: 'Ongoing',
    teamSize: 'Solo / small team',
    role: 'Founder & Full-Stack Engineer',
    demo: 'https://zynthos-lab.vercel.app/'
  },
  {
    id: 'cloud-sms-engine',
    title: 'Cloud SMS Engine - Bulk SMS Platform',
    description: 'A cloud SMS platform for sending, scheduling, and tracking bulk and transactional messages through a simple dashboard and API.',
    image: '/projects/cloudsms.webp',
    tags: ['Bulk SMS', 'SMS API', 'Scheduling', 'Dashboard', 'Cloud'],
    problem: 'Businesses needed a reliable way to send bulk and transactional SMS at scale, schedule campaigns, and track delivery  without building messaging infrastructure themselves.',
    solution: 'Built a cloud SMS engine with a dashboard for composing and scheduling campaigns, contact management, delivery tracking, and an API so other apps can send messages programmatically.',
    architecture: {
      description: 'Web dashboard and API backed by a message queue that dispatches SMS to gateway providers and records delivery status.',
      diagram: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      components: [
        'Dashboard for composing, scheduling, and tracking messages',
        'Send API for transactional and programmatic messaging',
        'Queue-based dispatch to SMS gateway providers',
        'Contact lists and group management',
        'Delivery status tracking and reporting',
        'Account balance and usage management'
      ]
    },
    techDecisions: [
      {
        decision: 'Queue-based message dispatch',
        rationale: 'Bulk sends must not block the app or overwhelm the SMS gateway.',
        impact: 'Smooth, throttled delivery even for large campaigns.'
      },
      {
        decision: 'Public send API alongside the dashboard',
        rationale: 'Other apps need to trigger SMS programmatically (OTPs, alerts).',
        impact: 'The engine doubles as messaging infrastructure for other products.'
      }
    ],
    results: [
      { metric: 'Bulk Sending', before: 'Manual', after: 'Scheduled', improvement: 'Campaigns sent hands-off' },
      { metric: 'Delivery Insight', before: 'None', after: 'Tracked', improvement: 'Per-message delivery status' },
      { metric: 'Integration', before: 'None', after: 'API', improvement: 'Other apps send via one endpoint' }
    ],
    challenges: [
      {
        challenge: 'Handling gateway failures and retries',
        solution: 'Added a queue with retry and status tracking so failed sends are recovered.'
      },
      {
        challenge: 'Sending at volume without throttling issues',
        solution: 'Rate-limited dispatch to stay within provider limits while maximising throughput.'
      }
    ],
    improvements: [
      'Two-way SMS and inbox replies',
      'Delivery and engagement analytics dashboard',
      'Multi-provider failover routing'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    ],
    timeline: 'Ongoing',
    teamSize: 'Solo / small team',
    role: 'Full-Stack Developer',
    demo: 'https://cloudsmsengine.co.ke/'
  },
  {
    id: 'cloud-isp-engine',
    title: 'Cloud ISP Engine - ISP Billing & Management',
    description: 'A billing and management system for Internet Service Providers: customer accounts, subscription plans, invoicing, M-Pesa payments, and MikroTik PPPoE and hotspot control from one console.',
    image: '/projects/cloudisp.webp',
    tags: ['ISP Billing', 'M-Pesa', 'MikroTik', 'PPPoE & Hotspot', 'RADIUS'],
    problem: 'Internet Service Providers juggled customer accounts, plans, invoices, and payments across spreadsheets and manual processes, making billing slow and error-prone.',
    solution: 'Built a cloud billing engine that manages customers and subscription plans, generates invoices automatically, tracks payments, and gives operators a dashboard for the whole billing lifecycle.',
    architecture: {
      description: 'Web application with a customer and billing database, automated invoice generation, and payment tracking, exposed through an operator dashboard.',
      diagram: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
      components: [
        'Customer accounts and subscription plan management',
        'Automated invoice generation on billing cycles',
        'Payment recording and reconciliation',
        'Operator dashboard for the billing lifecycle',
        'Plan and pricing configuration',
        'Reports on revenue and outstanding balances'
      ]
    },
    techDecisions: [
      {
        decision: 'Automated recurring invoicing',
        rationale: 'Subscriptions bill on cycles  doing this manually is slow and error-prone.',
        impact: 'Invoices are generated consistently without manual work.'
      },
      {
        decision: 'Centralised customer and billing data',
        rationale: 'Accounts, plans, invoices, and payments are tightly related.',
        impact: 'One source of truth for the whole billing lifecycle.'
      }
    ],
    results: [
      { metric: 'Invoicing', before: 'Manual', after: 'Automated', improvement: 'Recurring invoices generated automatically' },
      { metric: 'Payment Tracking', before: 'Spreadsheets', after: 'Centralised', improvement: 'Clear view of paid vs outstanding' },
      { metric: 'Operations', before: 'Scattered', after: 'One dashboard', improvement: 'Whole billing lifecycle in one place' }
    ],
    challenges: [
      {
        challenge: 'Getting recurring billing cycles right',
        solution: 'Automated invoice generation tied to each plan and billing period.'
      },
      {
        challenge: 'Keeping payments reconciled with invoices',
        solution: 'Linked payments to invoices so balances update automatically.'
      }
    ],
    improvements: [
      'Integrated online payment collection (e.g. M-Pesa)',
      'Automated reminders for overdue invoices',
      'Self-service customer portal'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
    ],
    timeline: 'Ongoing',
    teamSize: 'Solo / small team',
    role: 'Full-Stack Developer',
    demo: 'https://billing-system-livid-pi.vercel.app/',
    comingSoon: 'ISP Billing coming soon'
  },
  {
    id: 'mua-odel',
    title: 'MUA ODEL - University E-Learning Portal',
    description: 'The Open, Distance & E-Learning (ODEL) portal for Management University of Africa, giving students online access to their courses, learning materials, and activities.',
    image: '/projects/muaodel.webp',
    tags: ['E-Learning', 'ODEL', 'LMS', 'Education', 'Web'],
    problem: 'Distance-learning students needed one online place to reach their courses, study materials, and activities without having to be on campus.',
    solution: 'An ODEL portal where students log in to access enrolled courses, download materials, and take part in online learning for Management University of Africa.',
    architecture: {
      description: 'Authenticated web learning portal serving course content and resources to students on any device.',
      diagram: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
      components: [
        'Student login and enrolment-based access',
        'Course catalogue and downloadable materials',
        'Online learning activities and resources',
        'Announcements and course updates',
        'Responsive access on any device'
      ]
    },
    techDecisions: [
      {
        decision: 'Web-first, responsive portal',
        rationale: 'Distance students access learning from many devices and locations.',
        impact: 'Course content is reachable anywhere, on any screen.'
      },
      {
        decision: 'Enrolment-based access control',
        rationale: 'Students should only see the courses they are enrolled in.',
        impact: 'Relevant, personalised access to learning materials.'
      }
    ],
    results: [
      { metric: 'Course Access', before: 'On-campus', after: 'Online', improvement: 'Learn from anywhere' },
      { metric: 'Materials', before: 'Scattered', after: 'Centralised', improvement: 'One place per course' },
      { metric: 'Reach', before: 'Limited', after: 'Distance-friendly', improvement: 'Supports remote study' }
    ],
    challenges: [
      {
        challenge: 'Serving learning content reliably to remote students',
        solution: 'Built a responsive portal with organised, per-course access to materials.'
      }
    ],
    improvements: [
      'Integrated video lectures and live sessions',
      'Progress tracking and assessments',
      'Mobile app for offline study'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    ],
    timeline: 'Ongoing',
    teamSize: 'Solo / small team',
    role: 'Developer',
    demo: 'https://odel.mua.ac.ke/'
  },
  {
    id: 'campustribe-social',
    title: 'CampusTribe Social - Campus Community Platform',
    description: 'A social platform for campus communities, with verified student groups ("tribes"), event feeds, and real-time discussions.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    tags: ['React', 'Flask', 'PostgreSQL', 'WebSocket', 'REST API'],
    problem: 'Students lacked a dedicated, trusted space to find campus groups, discover events, and discuss topics without the noise of general social media.',
    solution: 'Built a campus-focused social platform with verified communities, event feeds, real-time group chat, and moderation tools that keep discussions relevant and safe.',
    architecture: {
      description: 'React frontend with a Flask REST API, PostgreSQL storage, and WebSocket connections powering real-time chat and notifications.',
      diagram: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      components: [
        'React frontend with feed, groups, and events',
        'Flask REST API for content and membership',
        'PostgreSQL for users, tribes, posts, and events',
        'WebSocket server for real-time chat and notifications',
        'Student verification and community moderation',
        'Event creation, RSVPs, and reminders'
      ]
    },
    techDecisions: [
      {
        decision: 'Community-first ("tribe") data model',
        rationale: 'Campus life revolves around groups, so communities are the core entity.',
        impact: 'Natural organisation of content and easier discovery.'
      },
      {
        decision: 'WebSockets for real-time interaction',
        rationale: 'Discussions and notifications feel alive without page reloads.',
        impact: 'Higher engagement and responsiveness.'
      },
      {
        decision: 'Flask for a lightweight, fast-iterating backend',
        rationale: 'Kept the API simple and quick to evolve.',
        impact: 'Rapid feature delivery.'
      }
    ],
    results: [
      { metric: 'Community Building', before: 'Fragmented', after: 'Centralised', improvement: 'Verified tribes in one place' },
      { metric: 'Event Discovery', before: 'Word of mouth', after: 'In-app feed', improvement: 'Higher event turnout' },
      { metric: 'Engagement', before: 'Low', after: 'Real-time', improvement: 'Active group discussions' }
    ],
    challenges: [
      {
        challenge: 'Keeping communities authentic and safe',
        solution: 'Added student verification plus reporting and moderation tools.'
      },
      {
        challenge: 'Real-time messaging at scale',
        solution: 'Optimised WebSocket broadcasting and connection handling.'
      }
    ],
    improvements: [
      'Native mobile apps for iOS and Android',
      'AI-assisted content moderation',
      'Cross-campus community discovery'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1496469888073-80de7e952517?w=800&q=80',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80'
    ],
    timeline: 'Ongoing',
    teamSize: 'Solo / small team',
    role: 'Full-Stack Developer',
    demo: 'https://www.campustribe.tech/',
    comingSoon: 'CampusTribe is being rehosted - back online soon'
  }
];
