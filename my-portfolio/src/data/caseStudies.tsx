export const caseStudiesData = [
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
