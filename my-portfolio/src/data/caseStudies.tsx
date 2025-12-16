export const caseStudiesData = [
  {
    id: 'ai-ecommerce',
    title: 'AI-Powered E-Commerce Platform',
    description: 'Built a scalable e-commerce platform with AI-driven product recommendations, reducing cart abandonment by 35%.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'Node.js', 'AI/ML', 'AWS', 'PostgreSQL'],
    problem: 'A mid-sized online retailer was experiencing 65% cart abandonment rates and struggling with generic product recommendations that failed to engage customers.',
    solution: 'Implemented an AI-powered recommendation engine using collaborative filtering and real-time user behavior analysis, integrated with a redesigned checkout flow that reduced friction points.',
    architecture: {
      description: 'Microservices architecture with event-driven design, utilizing AWS Lambda for serverless AI inference and Redis for real-time caching.',
      diagram: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      components: [
        'React frontend with Next.js SSR for SEO',
        'Node.js API Gateway with rate limiting',
        'Python ML service using TensorFlow',
        'PostgreSQL for transactional data',
        'Redis cache layer for recommendations',
        'AWS S3 + CloudFront for asset delivery',
        'Stripe payment integration',
        'Real-time analytics with WebSocket'
      ]
    },
    techDecisions: [
      {
        decision: 'Chose TensorFlow over PyTorch for the recommendation engine',
        rationale: 'Better production deployment support with TensorFlow Serving, extensive documentation, and superior mobile optimization for potential future app.',
        impact: 'Reduced model inference time by 40% and simplified deployment pipeline, enabling 3-hour deployment cycles instead of daily updates.'
      },
      {
        decision: 'Implemented Redis caching layer for recommendations',
        rationale: 'Real-time personalization required sub-100ms response times, which database queries alone could not achieve at scale.',
        impact: 'Achieved 95% cache hit rate, reducing database load by 70% and improving recommendation response time from 800ms to 45ms.'
      },
      {
        decision: 'Adopted event-driven architecture with RabbitMQ',
        rationale: 'Need to process user actions asynchronously without blocking the main application flow, ensuring scalability during traffic spikes.',
        impact: 'System now handles 10x traffic spikes without degradation, with automatic scaling based on queue depth.'
      }
    ],
    results: [
      { metric: 'Cart Abandonment', before: '65%', after: '42%', improvement: '35% reduction' },
      { metric: 'Page Load Time', before: '3.2s', after: '1.1s', improvement: '65% faster' },
      { metric: 'Conversion Rate', before: '2.1%', after: '3.8%', improvement: '81% increase' },
      { metric: 'Revenue per User', before: '$45', after: '$73', improvement: '62% growth' }
    ],
    challenges: [
      {
        challenge: 'Cold start problem for new users with no browsing history',
        solution: 'Implemented a hybrid recommendation system combining content-based filtering for new users and collaborative filtering for returning users, with A/B testing to optimize the transition point.'
      },
      {
        challenge: 'ML model training pipeline consuming excessive resources',
        solution: 'Moved to incremental learning with mini-batch updates every 4 hours instead of full retraining, reducing compute costs by 80% while maintaining model accuracy.'
      },
      {
        challenge: 'Payment gateway failures during high traffic periods',
        solution: 'Implemented circuit breaker pattern with automatic retry logic and fallback to alternative payment processors, reducing payment failures from 12% to 0.8%.'
      }
    ],
    improvements: [
      'Implement GraphQL to reduce over-fetching and improve mobile performance',
      'Add A/B testing framework for continuous optimization of recommendation algorithms',
      'Integrate real-time inventory management to prevent overselling',
      'Implement progressive web app (PWA) features for offline browsing',
      'Add multi-currency support for international expansion'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80'
    ],
    timeline: '6 months',
    teamSize: 'Team of 4',
    role: 'Lead Developer & Architect',
    github: 'https://github.com',
    demo: 'https://demo.com',
    testimonial: {
      content: 'The platform transformation exceeded our expectations. Revenue increased 50% in the first quarter, and customer satisfaction scores improved dramatically.',
      author: 'Sarah Johnson',
      role: 'CEO, RetailCo'
    }
  },
  {
    id: 'analytics-dashboard',
    title: 'Real-Time Analytics Dashboard',
    description: 'Developed a comprehensive analytics platform processing 1M+ events daily with sub-second latency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'WebSocket', 'Python', 'MongoDB', 'Redis'],
    problem: 'Enterprise clients needed real-time visibility into user behavior and system performance but were limited by batch processing that updated only once daily, creating a 24-hour data lag.',
    solution: 'Built a streaming analytics platform using event sourcing and CQRS patterns, enabling real-time data ingestion, processing, and visualization with sub-second latency.',
    architecture: {
      description: 'Event-driven architecture using Apache Kafka for stream processing, MongoDB for time-series data storage, and WebSocket connections for real-time dashboard updates.',
      diagram: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      components: [
        'React dashboard with D3.js visualizations',
        'WebSocket server for real-time updates',
        'Apache Kafka for event streaming',
        'Python data processing pipeline',
        'MongoDB with time-series collections',
        'Redis for aggregation caching',
        'Elasticsearch for log analytics',
        'Grafana for system monitoring'
      ]
    },
    techDecisions: [
      {
        decision: 'Selected Apache Kafka over AWS Kinesis for event streaming',
        rationale: 'Required on-premise deployment option for enterprise clients with strict data residency requirements, plus better control over retention policies.',
        impact: 'Successfully deployed to 15 enterprise clients with varying compliance requirements, with 99.95% uptime across all deployments.'
      },
      {
        decision: 'Implemented CQRS pattern for read/write separation',
        rationale: 'Analytics queries were impacting write performance, causing event ingestion delays during peak hours.',
        impact: 'Increased write throughput by 300% and reduced query response time from 5s to 200ms, enabling true real-time analytics.'
      },
      {
        decision: 'Used MongoDB time-series collections over InfluxDB',
        rationale: 'Team already familiar with MongoDB, and time-series collections provide 50% storage reduction with comparable query performance.',
        impact: 'Reduced storage costs by 45% and simplified deployment by eliminating an additional database system.'
      }
    ],
    results: [
      { metric: 'Data Latency', before: '24 hours', after: '0.8s', improvement: '99.9% faster' },
      { metric: 'Events/Second', before: '100', after: '15,000', improvement: '150x capacity' },
      { metric: 'Query Response', before: '5.2s', after: '0.2s', improvement: '96% faster' },
      { metric: 'Storage Costs', before: '$12k/mo', after: '$6.6k/mo', improvement: '45% savings' }
    ],
    challenges: [
      {
        challenge: 'Memory leaks in WebSocket connections causing server crashes',
        solution: 'Implemented connection pooling with automatic cleanup, heartbeat monitoring, and graceful degradation to HTTP polling when WebSocket connections exceed threshold.'
      },
      {
        challenge: 'Data inconsistencies during Kafka partition rebalancing',
        solution: 'Added idempotent consumers with exactly-once semantics and automatic state recovery, using Kafka transactions and offset management.'
      }
    ],
    improvements: [
      'Add machine learning for anomaly detection in metrics',
      'Implement data retention policies with automatic archival',
      'Create customizable alerting system with multiple notification channels',
      'Add data export functionality for compliance reporting'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    ],
    timeline: '8 months',
    teamSize: 'Team of 5',
    role: 'Technical Lead',
    github: 'https://github.com',
    demo: 'https://demo.com',
    testimonial: {
      content: 'This platform transformed how we make decisions. Having real-time data visibility has been a game-changer for our operations team.',
      author: 'Michael Chen',
      role: 'CTO, DataFlow Inc.'
    }
  },
  {
    id: 'security-audit',
    title: 'Cybersecurity Audit Tool',
    description: 'Created an automated security scanning tool that identified vulnerabilities across 500+ enterprise applications.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    tags: ['Python', 'Security', 'Docker', 'PostgreSQL', 'OWASP'],
    problem: 'Manual security audits were time-consuming, inconsistent, and failed to keep pace with rapid application deployments, leaving critical vulnerabilities undetected for weeks.',
    solution: 'Developed an automated security scanning platform that integrates with CI/CD pipelines, performing comprehensive OWASP Top 10 checks, dependency scanning, and security best practice validation.',
    architecture: {
      description: 'Containerized scanning engine with pluggable security modules, centralized vulnerability database, and RESTful API for CI/CD integration.',
      diagram: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      components: [
        'Python scanning engine with async execution',
        'Docker containers for isolated scan environments',
        'PostgreSQL vulnerability database',
        'REST API for CI/CD integration',
        'React admin dashboard',
        'PDF report generation',
        'Slack/Email notification system',
        'JIRA integration for ticket creation'
      ]
    },
    techDecisions: [
      {
        decision: 'Built custom scanner instead of using existing open-source tools',
        rationale: 'Needed enterprise-specific checks for proprietary frameworks and ability to customize rules for client compliance requirements (HIPAA, PCI-DSS, SOC2).',
        impact: 'Identified 40% more vulnerabilities than generic scanners, with 90% reduction in false positives through custom rule tuning.'
      },
      {
        decision: 'Implemented async Python with multiprocessing for scanning',
        rationale: 'Initial synchronous implementation took 45 minutes per application, unacceptable for CI/CD integration.',
        impact: 'Reduced scan time from 45 minutes to 6 minutes per application, enabling integration into every deployment pipeline.'
      },
      {
        decision: 'Used PostgreSQL for vulnerability tracking with temporal tables',
        rationale: 'Required full audit trail of vulnerability lifecycle - when discovered, when fixed, who acknowledged - for compliance reporting.',
        impact: 'Enabled comprehensive compliance reporting and reduced audit preparation time by 80%.'
      }
    ],
    results: [
      { metric: 'Scan Time', before: '45 min', after: '6 min', improvement: '87% faster' },
      { metric: 'Vulnerabilities Found', before: '600', after: '1,200+', improvement: '100% increase' },
      { metric: 'False Positives', before: '35%', after: '3.5%', improvement: '90% reduction' },
      { metric: 'MTTR', before: '14 days', after: '2.5 days', improvement: '82% faster' }
    ],
    challenges: [
      {
        challenge: 'High false positive rate causing alert fatigue',
        solution: 'Implemented machine learning classifier trained on historical scan results to prioritize findings by likelihood of being true positives, with confidence scoring.'
      },
      {
        challenge: 'Scanning proprietary authentication systems',
        solution: 'Created plugin architecture allowing clients to add custom security modules for their specific tech stacks, with safe execution in sandboxed environments.'
      }
    ],
    improvements: [
      'Add automated remediation suggestions with code snippets',
      'Implement blockchain for immutable audit logs',
      'Create vulnerability trending and prediction models',
      'Add support for infrastructure-as-code scanning'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
    ],
    timeline: '10 months',
    teamSize: 'Solo → Team of 3',
    role: 'Creator & Lead Security Engineer',
    github: 'https://github.com',
    testimonial: {
      content: 'This tool has become essential to our security operations. We\'ve prevented multiple major breaches and significantly improved our security posture.',
      author: 'Emily Rodriguez',
      role: 'CISO, SecureBank'
    }
  },
];