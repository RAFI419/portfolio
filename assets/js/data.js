/* ============================================================
   PORTFOLIO DATA — edit here to change content
   ============================================================ */

const PHOTOS = [
  { src: 'assets/images/rafi-3.jpg',    sm: 'assets/images/rafi-3-sm.jpg',    thumb: 'assets/images/rafi-3-thumb.jpg',    label: 'Professional',       caption: 'Corporate professional attire' },
];

const GALLERY_PHOTOS = [
  { src: 'assets/images/rafi-1.jpg',    sm: 'assets/images/rafi-1-sm.jpg',    thumb: 'assets/images/rafi-1-thumb.jpg',    label: 'At the Office',     caption: 'Working on enterprise Java microservices' },
  { src: 'assets/images/rafi-2.jpg',    sm: 'assets/images/rafi-2-sm.jpg',    thumb: 'assets/images/rafi-2-thumb.jpg',    label: 'LinkedIn Profile',   caption: 'Professional headshot' },
  { src: 'assets/images/rafi-3.jpg',    sm: 'assets/images/rafi-3-sm.jpg',    thumb: 'assets/images/rafi-3-thumb.jpg',    label: 'Professional',       caption: 'Corporate professional attire' },
  { src: 'assets/images/rafi-4.jpg',    sm: 'assets/images/rafi-4-sm.jpg',    thumb: 'assets/images/rafi-4-thumb.jpg',    label: 'Formal Portrait',    caption: 'Formal portrait' },
];

// Role-aware content — switches with the Role Switcher in hero
const ROLES = {
  backend: {
    status: 'Available for Backend Engineering roles',
    cardRole: 'Java Backend Engineer · Microservices',
    summary: 'Software Engineer with <strong>4+ years</strong> designing and building <strong>scalable backend systems</strong> using Java, Spring Boot, Microservices, and REST APIs. Proven track record of optimizing APIs by 30%+ and delivering high-availability enterprise platforms.',
    typing: ['Scalable Microservices','RESTful APIs','Distributed Systems','Event-Driven Architectures','Enterprise Backends'],
  },
  fullstack: {
    status: 'Available for Full Stack Developer roles',
    cardRole: 'Full Stack Engineer · Java + React',
    summary: 'Full Stack Engineer with <strong>4+ years</strong> building end-to-end applications — from Java/Spring Boot backends to Angular and React frontends. Delivers cohesive, performant, production-grade user experiences.',
    typing: ['Full-Stack Applications','React + Spring Boot Apps','Angular UIs','REST API Integrations','End-to-End Features'],
  },
  cloud: {
    status: 'Available for Cloud / DevOps roles',
    cardRole: 'Cloud Engineer · AWS · DevOps',
    summary: 'Cloud Engineer with hands-on expertise across <strong>AWS (EC2, Lambda, S3, Step Functions, API Gateway)</strong>, Docker, Kubernetes, and Jenkins CI/CD. Reduced release cycles by 40% and optimized resource usage by 20% in production deployments.',
    typing: ['Cloud-Native Systems','AWS Architectures','CI/CD Pipelines','Container Orchestration','Infrastructure Automation'],
  },
  ai: {
    status: 'Available for AI Engineer / ML Engineer roles',
    cardRole: 'AI Engineer · GenAI · LangChain',
    summary: 'AI Engineer integrating <strong>LLMs, RAG architectures, and ML pipelines</strong> into enterprise workflows. Combined Java backend expertise with OpenAI, LangChain, AWS Bedrock, and vector databases to deliver intelligent automation that reduced manual effort by 35%+.',
    typing: ['AI-Powered Systems','RAG Chatbots','LLM Integrations','ML Pipelines','Intelligent Automation'],
  },
};

// ───── SKILLS (bars) ────────────────────────────────────────────────
const SKILLS = [
  { name: 'Java',                                     pct: 95, grad: 'linear-gradient(90deg,#4f46e5,#7c3aed)' },
  { name: 'Spring Boot / Spring MVC',                 pct: 92, grad: 'linear-gradient(90deg,#6d28d9,#ec4899)' },
  { name: 'Microservices & REST APIs',                pct: 90, grad: 'linear-gradient(90deg,#ec4899,#f59e0b)' },
  { name: 'AWS (EC2, Lambda, S3, API GW)',            pct: 82, grad: 'linear-gradient(90deg,#06b6d4,#4f46e5)' },
  { name: 'Docker / Kubernetes / Jenkins',            pct: 80, grad: 'linear-gradient(90deg,#4f46e5,#06b6d4)' },
  { name: 'React.js / Angular / TypeScript',          pct: 80, grad: 'linear-gradient(90deg,#06b6d4,#7c3aed)' },
  { name: 'Python / JavaScript',                      pct: 78, grad: 'linear-gradient(90deg,#f59e0b,#ec4899)' },
  { name: 'MySQL / MongoDB / SQL',                    pct: 75, grad: 'linear-gradient(90deg,#ec4899,#4f46e5)' },
  { name: 'JUnit / Selenium / TDD',                   pct: 72, grad: 'linear-gradient(90deg,#10b981,#06b6d4)' },
  { name: 'OpenAI / LangChain / RAG',                 pct: 70, grad: 'linear-gradient(90deg,#a78bfa,#ec4899)' },
  { name: 'Generative AI & Prompt Engineering',       pct: 68, grad: 'linear-gradient(90deg,#f472b6,#f59e0b)' },
  { name: 'AWS Bedrock / Cloud AI',                   pct: 65, grad: 'linear-gradient(90deg,#06b6d4,#10b981)' },
];

// ───── TECH CHIPS ───────────────────────────────────────────────────
const CHIPS = [
  // Core (ci = indigo)
  ['Java','ci'],['Spring Boot','cp'],['Microservices','cc'],['REST APIs','ca'],['Hibernate','ci'],
  // Frontend
  ['React.js','cp'],['Angular','cc'],['TypeScript','ca'],['HTML / CSS','cc'],
  // Languages
  ['Python','ci'],['JavaScript','cp'],
  // Cloud
  ['AWS EC2','ca'],['AWS Lambda','ci'],['AWS S3','cp'],['Step Functions','cc'],['API Gateway','ca'],
  // DevOps
  ['Docker','ci'],['Kubernetes','cp'],['Jenkins','cc'],['CI/CD','ca'],
  // DB
  ['MySQL','ci'],['MongoDB','cp'],['SQL','cc'],
  // Tools
  ['Git / GitLab','ca'],['Jira','ci'],['Postman','cp'],['JUnit','cc'],['Selenium','ca'],
  // Practices
  ['Agile','ci'],['TDD / BDD','cp'],
  // AI/GenAI
  ['OpenAI API','cg'],['LangChain','cg'],['AWS Bedrock','cg'],['RAG','cg'],['scikit-learn','cg'],
  ['NLP','cg'],['Prompt Engineering','cg'],['Vector DB','cg'],['GenAI','cg'],
  // More cloud
  ['GCP','ca'],['Spring MVC','cc'],
];

// ───── EXPERIENCE ───────────────────────────────────────────────────
const EXPERIENCE = [
  {
    title: 'Software Engineer',
    company: 'Pentagram Infotech Private Limited',
    location: 'India',
    dates: 'Jan 2023 – Present',
    badge: '🟢 Current',
    badgeCls: '',
    client: '🏥 Client: Elevance Health Inc (Anthem) — Healthcare Benefits Management System',
    bullets: [
      'Developed core microservices in <strong>Java (Spring Boot)</strong> for insurance claims, policy management &amp; member enrollment — high availability &amp; low-latency.',
      'Optimized API performance with caching mechanisms, <strong>reducing response times by 30%</strong> and DB query overhead significantly.',
      'Streamlined CI/CD using AWS, Jenkins &amp; Docker — <strong>reduced release cycle time by 40%</strong>.',
      'Led code reviews, mentored junior developers, enforced best practices across the codebase.',
      'Developed RESTful APIs with Spring Boot + MySQL and created Angular/React UI components.',
      'Integrated <strong>AI-powered claim categorization</strong> via OpenAI API, reducing manual review time by 35%.',
      'Applied Agile methodologies; consistently delivered on time with external stakeholder coordination.',
    ],
    chips: ['Java','Spring Boot','Microservices','AWS','Docker','Jenkins','Angular','React','MySQL','CI/CD','OpenAI'],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Capgemini Technology Services India Ltd',
    location: 'India',
    dates: 'Jan 2022 – Jan 2023',
    badge: '2022 – 2023',
    badgeCls: 'b2',
    client: '⚙️ Client: Bosch Global Software Technologies — IoT Connected Devices Integration System',
    bullets: [
      'Developed backend microservices for <strong>real-time IoT data ingestion</strong> from automotive &amp; industrial connected devices.',
      'Integrated AWS EC2, Lambda &amp; Step Functions for scalable data management — <strong>optimized resource usage by 20%</strong>.',
      'Led cloud-based solution design, <strong>improving system responsiveness by 20%</strong>.',
      'Built ML-based predictive maintenance pipeline flagging device failures 48h in advance.',
      'Automated deployments with Jenkins &amp; Docker, significantly reducing manual intervention.',
      'Built React &amp; Angular front-end components for smoother device data interaction.',
      'Contributed to system architecture design for reliable data storage &amp; monitoring systems.',
    ],
    chips: ['Java','Spring Boot','IoT','AWS Lambda','Step Functions','Docker','React','Angular','Jenkins','Python','ML'],
  },
];

// ───── PROJECTS ─────────────────────────────────────────────────────
const PROJECTS = [
  { emoji:'🏥', name:'Healthcare Benefits Platform',
    desc:'Scalable microservices platform for healthcare insurance, claims management & member enrollment. Served millions of Elevance Health (Anthem) users with enterprise SLAs.',
    tags:['Java','Spring Boot','AWS','MySQL','Docker'], glow:'var(--indigo)', impact:'📊 30% faster API responses' },
  { emoji:'🔌', name:'Bosch IoT Integration System',
    desc:'Real-time IoT platform collecting sensor data from automotive & industrial devices. Enables predictive maintenance and operational automation via cloud analytics.',
    tags:['Java','AWS Lambda','Step Functions','React','Jenkins'], glow:'var(--cyan)', impact:'⚡ 20% resource optimization' },
  { emoji:'⚡', name:'CI/CD Pipeline Automation',
    desc:'End-to-end deployment pipeline with Jenkins, Docker & AWS achieving 40% faster release cycles and zero-downtime deployments.',
    tags:['Jenkins','Docker','AWS','CI/CD','Kubernetes'], glow:'var(--pink)', impact:'🚀 40% faster releases' },
  { emoji:'📊', name:'API Performance Optimizer',
    desc:'Caching strategies and DB query optimizations for a high-traffic REST API platform yielding 30% improvement in response times across distributed healthcare services.',
    tags:['Spring Boot','REST API','MySQL','Hibernate'], glow:'var(--amber)', impact:'💾 30% query reduction' },
  { emoji:'🖥️', name:'Full-Stack Web Applications',
    desc:'5+ full-stack projects: React/Angular frontends backed by Spring Boot microservices with JWT authentication, role-based access, and database persistence.',
    tags:['React','Angular','TypeScript','Spring Boot','MongoDB'], glow:'var(--green)', impact:'✅ 5+ deployed apps' },
  { emoji:'🧩', name:'Competitive Coding Portfolio',
    desc:'500+ problems solved on LeetCode, GeeksforGeeks & HackerRank. Ranked 69th nationally in Coding CodeKaze among 25,000+ participants. Specializing in DSA & system design.',
    tags:['Java','Python','DSA','LeetCode'], glow:'var(--purple)', impact:'🏆 Top 69 nationally' },
];

// ───── AI PROJECTS ──────────────────────────────────────────────────
const AI_PROJECTS = [
  { emoji:'🤖', name:'AI-Powered Claims Processor',
    desc:'Integrated OpenAI GPT API into the Elevance Health claims pipeline to auto-categorize and summarize insurance claim descriptions, reducing manual review time significantly.',
    tags:['Java','OpenAI API','Spring Boot','AWS Lambda'], glow:'var(--purple)', impact:'🧠 35% less manual review' },
  { emoji:'🔮', name:'Predictive Maintenance Engine',
    desc:'ML-driven anomaly detection for Bosch IoT sensors. Used Python + scikit-learn to predict device failures 48h in advance, cutting downtime for critical operations.',
    tags:['Python','scikit-learn','AWS','IoT'], glow:'var(--cyan)', impact:'⏱️ 48h failure prediction' },
  { emoji:'💬', name:'RAG Chatbot for Health Queries',
    desc:'Built a Retrieval-Augmented Generation chatbot using LangChain + AWS Bedrock to answer member health-plan queries, achieving high self-service resolution.',
    tags:['LangChain','AWS Bedrock','RAG','Python'], glow:'var(--pink)', impact:'💡 80%+ self-service' },
  { emoji:'📈', name:'Smart Log Analyzer',
    desc:'NLP-based microservice log analysis tool that automatically detects root causes of production incidents, cutting Mean Time To Resolution (MTTR) significantly.',
    tags:['Python','NLP','Elasticsearch','Spring Boot'], glow:'var(--amber)', impact:'⚡ 40% lower MTTR' },
  { emoji:'🧬', name:'Code Review AI Assistant',
    desc:'Integrated Copilot-style AI code review into team PR workflow using a fine-tuned model, flagging security vulnerabilities and suggesting refactors automatically.',
    tags:['OpenAI','GitHub Actions','Java','REST API'], glow:'var(--green)', impact:'🔒 Auto-flagged CVEs' },
  { emoji:'📊', name:'AI Dashboard Generator',
    desc:'Natural language to dashboard: React + Spring Boot tool where users describe metrics in plain English and the system auto-generates charts using OpenAI function calling.',
    tags:['React','OpenAI','Spring Boot','Chart.js'], glow:'#f472b6', impact:'🎯 Zero-code analytics' },
];

// ───── HIGHLIGHTS ───────────────────────────────────────────────────
const HIGHLIGHTS = [
  { icon:'🏗️', title:'Scalable Architecture', text:'Design and implement distributed microservices systems handling millions of transactions with high availability and low-latency guarantees.' },
  { icon:'☁️', title:'Cloud-Native Engineering', text:'Hands-on expertise with AWS services — EC2, Lambda, S3, Step Functions, API Gateway — to build and deploy production-grade cloud solutions.' },
  { icon:'🤖', title:'AI/GenAI Integration', text:'Combining enterprise Java with modern AI stacks — OpenAI, LangChain, RAG, vector DBs — to augment business workflows with intelligent automation.' },
  { icon:'🔄', title:'DevOps & Automation', text:'Automated CI/CD pipelines with Jenkins and Docker, reducing release cycles by 40% and ensuring consistent, reliable software delivery.' },
  { icon:'🧠', title:'Problem Solving', text:'500+ algorithmic challenges solved, ranked top 69 nationally. Consistently resolves critical production issues with a structured, analytical approach.' },
  { icon:'🤝', title:'Team Leadership', text:'Led cross-functional teams, mentored junior developers, drove code reviews and best practices — delivering complex projects on tight deadlines.' },
];

// ───── LANGUAGES ────────────────────────────────────────────────────
const LANGUAGES = [
  { name:'English', level:'Fluent',  pct:90,  grad:'linear-gradient(90deg,#06b6d4,#4f46e5)' },
  { name:'Urdu',    level:'Native',  pct:100, grad:'linear-gradient(90deg,#ec4899,#f59e0b)' },
  { name:'Hindi',   level:'Fluent',  pct:88,  grad:'linear-gradient(90deg,#f59e0b,#ec4899)' },
  { name:'Telugu',  level:'Native',  pct:100, grad:'linear-gradient(90deg,#10b981,#06b6d4)' },
];

// ───── ACHIEVEMENTS ─────────────────────────────────────────────────
const ACHIEVEMENTS = [
  { icon:'🏆', text:'Ranked <strong>69th nationally</strong> in the Coding CodeKaze Contest among <strong>25,000+ participants</strong>.' },
  { icon:'💻', text:'Solved <strong>500+ coding challenges</strong> on LeetCode, GeeksforGeeks, and HackerRank.' },
  { icon:'🚀', text:'Built <strong>5+ full-stack web projects</strong> showcasing complete frontend and backend engineering skills.' },
  { icon:'🤖', text:'Delivered <strong>6+ AI/GenAI integrations</strong> into production Java enterprise systems.' },
  { icon:'💡', text:'Proposed and implemented solutions that <strong>reduced operational costs by 20%</strong> through cloud optimization.' },
  { icon:'👥', text:'Led cross-functional teams to <strong>successful project completion</strong> under tight deadlines, mentoring junior developers.' },
  { icon:'📈', text:'Actively upskilling in <strong>cloud technologies, AI/ML, and system design</strong> — continuous learner committed to staying ahead.' },
];

// ───── MARQUEES ─────────────────────────────────────────────────────
const MQ1 = [
  'Pentagram Infotech','Capgemini Technology Services','Elevance Health (Anthem)','Bosch Global Software',
  'Spring Boot Microservices','AWS Cloud Solutions','Docker · Kubernetes','React · Angular',
  'IoT Platform Engineering','Healthcare Technology','CI/CD Automation','Jenkins · GitLab',
];
const MQ2 = [
  'Java · Spring Boot','Python · JavaScript','TypeScript · HTML · CSS','MySQL · MongoDB',
  'REST APIs · Hibernate','JUnit · Selenium','Agile · TDD · BDD','Git · Jira · Postman',
  'GCP · EC2 · Lambda','S3 · Step Functions','OpenAI · LangChain · RAG','AWS Bedrock · GenAI',
];
