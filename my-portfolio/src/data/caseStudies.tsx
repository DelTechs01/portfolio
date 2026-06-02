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
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  // ── Featured projects ───────────────────────────────────────────────
  // NOTE: Add your live links in the `demo` field of each (currently '').
  // Descriptions/results are drafts written from the project names — tweak
  // the copy to match the real projects.
  {
    id: 'eastmedic-hms',
    title: 'EastMedic HMS — Hospital Management System',
    description: 'A comprehensive hospital management system that digitizes patient records, appointments, billing, pharmacy, and inventory for clinics and mid-sized hospitals.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
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
    title: 'Zynthos Orchestrator Labs — Workflow Automation Platform',
    description: 'A workflow orchestration platform for defining, scheduling, and monitoring automated jobs and multi-step pipelines across services.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    tags: ['Python', 'FastAPI', 'Docker', 'Redis', 'React'],
    problem: 'Teams ran critical scripts and integrations manually or via scattered cron jobs, with no central visibility, retries, or alerting when something failed.',
    solution: 'Created an orchestration platform where users define pipelines as steps, schedule them, and monitor runs in real time with automatic retries, logging, and failure alerts.',
    architecture: {
      description: 'Containerised microservice architecture with an API layer, a task queue, worker processes, and a real-time monitoring dashboard.',
      diagram: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
      components: [
        'FastAPI backend exposing pipeline and run APIs',
        'Redis-backed task queue for distributing jobs',
        'Worker processes executing pipeline steps',
        'React dashboard for real-time run monitoring',
        'Retry, timeout, and alerting policies per step',
        'Centralised logging and full run history',
        'Dockerised services for reproducible deployments'
      ]
    },
    techDecisions: [
      {
        decision: 'Queue-based execution with Redis',
        rationale: 'Decouples scheduling from execution and lets workers scale independently.',
        impact: 'Reliable job distribution under load.'
      },
      {
        decision: 'Containerised every service with Docker',
        rationale: 'Reproducible environments across development and production.',
        impact: 'Faster, safer deployments.'
      },
      {
        decision: 'FastAPI for the backend',
        rationale: 'Async support and automatic API docs suit a job-heavy system.',
        impact: 'High throughput and a great developer experience.'
      }
    ],
    results: [
      { metric: 'Job Scheduling', before: 'Manual', after: 'Automated', improvement: 'Hands-off, repeatable runs' },
      { metric: 'Failure Visibility', before: 'None', after: 'Real-time', improvement: 'Instant alerts on failures' },
      { metric: 'Reliability', before: 'Best-effort', after: 'Retried', improvement: 'Automatic recovery from transient errors' }
    ],
    challenges: [
      {
        challenge: 'Handling failed and stuck jobs gracefully',
        solution: 'Added configurable retries, timeouts, and dead-letter handling per step.'
      },
      {
        challenge: 'Scaling workers with demand',
        solution: 'Used a queue-based design so workers scale horizontally without code changes.'
      }
    ],
    improvements: [
      'Visual drag-and-drop pipeline builder',
      'Role-based access for teams',
      'Pluggable integrations marketplace'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80'
    ],
    timeline: 'Ongoing',
    teamSize: 'Solo / small team',
    role: 'Backend & Platform Engineer',
    demo: '' // TODO: add live link
  },
  {
    id: 'campustribe-social',
    title: 'CampusTribe Social — Campus Community Platform',
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
    demo: 'https://www.campustribe.tech/'
  },
  {
    id: 'uniconnectke',
    title: 'UniConnectKE - University Social Platform',
    description: 'A social platform connecting Kenyan university students, supporting verified communities, event sharing, and academic collaboration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'Flask', 'PostgreSQL', 'AI Integration', 'WebSocket'],
    problem: 'Kenyan university students lacked a verified platform to connect, share memories, and collaborate academically, leading to fragmented communication and limited networking opportunities.',
    solution: 'Developed a university-specific social platform with student verification, community grouping, post sharing, and event management. Integrated real-time chat and AI-driven suggestions for groups and events.',
    architecture: {
      description: 'Monolithic Flask backend with React frontend, PostgreSQL database, and WebSocket connections for real-time updates.',
      diagram: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      components: [
        'React frontend with responsive design',
        'Flask backend with RESTful API',
        'PostgreSQL for relational data',
        'WebSocket server for real-time chat and notifications',
        'AI module for content suggestions',
        'Authentication system with student verification',
        'File upload and storage for posts and events'
      ]
    },
    techDecisions: [
      {
        decision: 'Chose Flask over Django for simplicity and faster iteration',
        rationale: 'Project required a lightweight backend to support rapid development and integration with AI modules.',
        impact: 'Enabled quick prototyping and deployment, with minimal overhead for small-scale student communities.'
      },
      {
        decision: 'Used WebSockets for real-time chat',
        rationale: 'Needed live communication between students without frequent page reloads or polling.',
        impact: 'Delivered instant messaging experience with high responsiveness, improving engagement.'
      },
      {
        decision: 'Implemented PostgreSQL for relational data storage',
        rationale: 'Structured data like user profiles, events, and posts required relational integrity.',
        impact: 'Ensured secure and consistent data management, enabling complex queries efficiently.'
      }
    ],
    results: [
      { metric: 'Active Users', before: '0', after: '500+', improvement: 'Platform adoption across multiple universities' },
      { metric: 'Community Groups', before: '0', after: '50+', improvement: 'Students organized into verified communities' },
      { metric: 'Real-Time Messages', before: '0', after: '10k+', improvement: 'Enhanced student collaboration and engagement' }
    ],
    challenges: [
      {
        challenge: 'Ensuring student verification without exposing personal data',
        solution: 'Implemented university email verification and secure hashing for sensitive info.'
      },
      {
        challenge: 'Handling concurrent chat and notifications for many users',
        solution: 'Optimized WebSocket connections with efficient event broadcasting and load testing.'
      }
    ],
    improvements: [
      'Integrate AI-based moderation to detect spam or inappropriate content',
      'Add mobile app version for iOS and Android',
      'Introduce advanced analytics for student engagement'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    ],
    timeline: '6 months',
    teamSize: 'Team of 4',
    role: 'Lead Developer & Architect',
    github: 'https://github.com/QuantumTech/UniConnectKE',
    demo: 'https://uniconnectke-demo.com',
    testimonial: {
      content: 'UniConnectKE has transformed student networking. Communities are more engaged, and academic collaboration has increased significantly.',
      author: 'Lucy Mwangi',
      role: 'CTO, StudentTech Hub'
    }
  },
  {
    id: 'ai-learning-platform',
    title: 'AI-Powered Learning Platform',
    description: 'An AI-driven learning system delivering personalized daily lessons and interactive training for students.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Python', 'Flask', 'AI Integration', 'React', 'PostgreSQL'],
    problem: 'Students needed personalized learning schedules and adaptive training, but existing platforms provided only static content.',
    solution: 'Built an AI tutor that adapts to student progress, delivers daily training, and provides interactive exercises. Non-AI courses display admin-uploaded content, and live reference chat is available for all courses.',
    architecture: {
      description: 'Flask backend serving AI-generated lessons, React frontend, PostgreSQL for data, with AI logic integrated for personalized delivery.',
      diagram: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      components: [
        'React frontend with AI lesson interface',
        'Flask backend for course management and AI integration',
        'PostgreSQL for tracking student progress',
        'AI module for adaptive learning',
        'Live reference chat for all courses',
        'Code editor for AI-supported programming courses',
        'Authentication and profile management'
      ]
    },
    techDecisions: [
      {
        decision: 'AI integration per course basis',
        rationale: 'Only some courses needed AI, while others used uploaded materials.',
        impact: 'Optimized resource usage and allowed flexible course management.'
      },
      {
        decision: 'Real-time progress tracking',
        rationale: 'To ensure AI can adapt lessons accurately.',
        impact: 'Enhanced learning personalization and engagement.'
      }
    ],
    results: [
      { metric: 'Student Engagement', before: 'Low', after: 'High', improvement: 'Significant increase in daily interaction' },
      { metric: 'Course Completion', before: '45%', after: '78%', improvement: '73% improvement in completion rates' }
    ],
    challenges: [
      {
        challenge: 'Ensuring AI lessons match student progress',
        solution: 'Implemented tracking algorithms and feedback loops to adjust difficulty and pacing.'
      }
    ],
    improvements: [
      'Voice-enabled AI tutor',
      'Gamification for increased engagement',
      'Analytics dashboard for course creators'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    ],
    timeline: '5 months',
    teamSize: 'Team of 3',
    role: 'Lead Developer & AI Integrator',
    github: 'https://github.com/QuantumTech/AI-Learning-Platform',
    demo: 'https://ai-learning-demo.com',
    testimonial: {
      content: 'The AI tutor has greatly improved student learning and engagement, providing personalized experiences that were impossible before.',
      author: 'John Kamau',
      role: 'Director, EduTech Solutions'
    }
  },
  {
    id: 'm-pesa-ecommerce',
    title: 'M-Pesa Integrated E-Commerce System',
    description: 'A secure e-commerce system with M-Pesa payment integration, enabling seamless transactions for Kenyan users.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'M-Pesa API', 'MySQL'],
    problem: 'Local merchants lacked an e-commerce system with reliable M-Pesa payment support, limiting online sales and revenue growth.',
    solution: 'Developed a full-stack e-commerce platform with M-Pesa API integration for payments, inventory management, and order tracking, ensuring smooth and secure transactions.',
    architecture: {
      description: 'Monolithic PHP backend with MySQL, frontend using HTML/CSS/JS, M-Pesa API for payments.',
      diagram: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      components: [
        'PHP backend with RESTful endpoints',
        'MySQL database for users, products, and orders',
        'HTML/CSS/JS frontend with responsive design',
        'M-Pesa API for secure payments',
        'Admin dashboard for merchants',
        'Email/SMS notifications for orders'
      ]
    },
    techDecisions: [
      {
        decision: 'Integrated M-Pesa API directly',
        rationale: 'Required seamless payment experience for Kenyan users.',
        impact: 'Reduced payment failures and improved customer trust.'
      },
      {
        decision: 'Monolithic PHP backend',
        rationale: 'Simplified development for a small-to-medium scale project with quick deployment.',
        impact: 'Faster delivery and easier maintenance for clients.'
      }
    ],
    results: [
      { metric: 'Successful Transactions', before: '0', after: '1,500+', improvement: 'Enabled smooth e-commerce experience' },
      { metric: 'Revenue Growth', before: '$0', after: '$7,000/mo', improvement: 'Significant increase in merchant income' }
    ],
    challenges: [
      {
        challenge: 'Handling M-Pesa API timeouts and errors',
        solution: 'Implemented retry logic and logging to ensure successful transaction completion.'
      }
    ],
    improvements: [
      'Add product recommendation engine',
      'Implement order analytics dashboard',
      'Introduce multi-vendor support'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
    ],
    timeline: '4 months',
    teamSize: 'Team of 2',
    role: 'Full-Stack Developer & Payment Integrator',
    github: 'https://github.com/QuantumTech/M-Pesa-Ecommerce',
    demo: 'https://mpesa-ecommerce-demo.com',
    testimonial: {
      content: 'The M-Pesa integration worked flawlessly, and merchants are now able to sell online reliably.',
      author: 'David Otieno',
      role: 'CEO, LocalMart'
    }
  }
];
