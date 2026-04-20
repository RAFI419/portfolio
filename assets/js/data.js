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
    status: '🎯 Selective opportunities for backend roles',
    cardRole: 'Backend Engineer · Microservices Architect',
    summary: 'Enterprise-scale backend engineer with <strong>4+ years</strong> architecting production systems serving millions. Specializing in <strong>distributed microservices</strong>, high-performance REST APIs, and scalable infrastructure. Track record: <strong>30% API optimizations, 40% CI/CD improvements, 1500+ problems mastered</strong>.',
    typing: ['Scalable Microservices','Distributed Systems','RESTful APIs','High-Availability Backends','Event-Driven Architecture'],
  },
  fullstack: {
    status: '🎯 Selective opportunities for full-stack roles',
    cardRole: 'Full Stack Architect · Java + React',
    summary: 'Full Stack engineer with <strong>4+ years</strong> building end-to-end <strong>enterprise applications</strong> — robust Java/Spring backends + modern React/Angular frontends. Delivered <strong>5+ production systems</strong> with focus on performance, security, and scalability.',
    typing: ['Full-Stack Applications','React + Spring Boot','Enterprise UIs','REST API Integration','Production Apps'],
  },
  cloud: {
    status: '🎯 Selective opportunities for cloud roles',
    cardRole: 'Cloud Architect · AWS · DevOps',
    summary: 'Cloud architect with hands-on expertise across <strong>AWS (EC2, Lambda, S3, Step Functions, API Gateway)</strong>, container orchestration, and sophisticated CI/CD. Delivered <strong>40% release cycle reductions and 20% cost optimizations</strong> in production enterprise environments.',
    typing: ['Cloud-Native Architecture','AWS Solutions','CI/CD at Scale','Kubernetes Orchestration','Serverless Design'],
  },
  ai: {
    status: '🎯 Selective opportunities for AI engineer roles',
    cardRole: 'AI Engineer · GenAI Specialist',
    summary: '<strong>AI engineer</strong> pioneering <strong>LLM integration, RAG architectures, and intelligent automation</strong> into enterprise Java systems. Combined backend mastery with OpenAI, LangChain, AWS Bedrock, and vector databases. Impact: <strong>35% manual effort reduction, 80% self-service adoption</strong>.',
    typing: ['AI-Powered Backends','RAG Architectures','LLM Integration','Intelligent Automation','GenAI Pipelines'],
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
  { emoji:'🧩', name:'Competitive Coding & Problem Solving',
    desc:'<strong>1500+ algorithmic challenges mastered</strong> on LeetCode & platforms. Ranked <strong>69th nationally</strong> in CodeKaze among 25,000+ engineers. Demonstrates elite computational thinking and pattern recognition.',
    tags:['DSA','Algorithms','LeetCode'], glow:'var(--purple)', impact:'🏆 Top 69 nationally' },
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

const HIGHLIGHTS = [
  { icon:'🏗️', title:'Enterprise-Scale Architecture', text:'Architect and deploy distributed microservices systems handling millions of transactions with proven high availability, sub-100ms latency, and zero-downtime deployments.' },
  { icon:'☁️', title:'Cloud-Native Excellence', text:'Expert-level AWS proficiency — EC2, Lambda, S3, Step Functions, API Gateway — building and optimizing production cloud systems with 99.99% uptime SLAs.' },
  { icon:'🤖', title:'AI/GenAI Innovation', text:'Pioneer LLM integration and RAG architectures into enterprise Java systems. Delivered 6+ production AI features using OpenAI, LangChain, and AWS Bedrock with measurable business impact.' },
  { icon:'�', title:'DevOps & Automation', text:'Sophisticated CI/CD pipelines with Jenkins and Docker delivering 40% faster releases, zero-downtime deployments, and automated infrastructure scaling.' },
  { icon:'🧠', title:'Elite Problem Solving', text:'1500+ algorithmic challenges mastered, ranked top 69 nationally. Applies structured problem-solving and system design expertise to production challenges.' },
  { icon:'🤝', title:'Technical Leadership', text:'Led cross-functional teams across healthcare, IoT, and enterprise domains. Mentored junior engineers, enforced best practices, and consistently delivered on aggressive timelines.' },
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
  { icon:'💻', text:'Mastered <strong>1500+ algorithmic challenges</strong> across LeetCode, GeeksforGeeks, and competitive platforms — elite-tier problem solving.' },
  { icon:'🚀', text:'Built <strong>5+ full-stack web projects</strong> showcasing complete frontend and backend engineering skills.' },
  { icon:'🤖', text:'Delivered <strong>6+ AI/GenAI integrations</strong> into production Java enterprise systems.' },
  { icon:'�', text:'Proposed and implemented solutions that <strong>reduced operational costs by 20%</strong> through cloud optimization.' },
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

// ───── CODE DEMOS ────────────────────────────────────────────────────
const CODE_DEMOS = [
  {
    lang: 'Java',
    title: 'Spring Boot REST Controller',
    desc: 'A simple REST endpoint with dependency injection and JSON response.',
    code: `@RestController\n@RequestMapping("/api")\npublic class UserController {\n    \n    @Autowired\n    private UserService userService;\n    \n    @GetMapping("/users")\n    public ResponseEntity<List<User>> getUsers() {\n        List<User> users = userService.getAllUsers();\n        return ResponseEntity.ok(users);\n    }\n}`,
    runnable: false
  },
  {
    lang: 'Python',
    title: 'Flask API with ML Prediction',
    desc: 'A Flask endpoint that loads a scikit-learn model and makes predictions.',
    code: `from flask import Flask, request, jsonify\nimport joblib\nimport numpy as np\n\napp = Flask(__name__)\nmodel = joblib.load('model.pkl')\n\n@app.route('/predict', methods=['POST'])\ndef predict():\n    data = request.get_json()\n    features = np.array(data['features']).reshape(1, -1)\n    prediction = model.predict(features)[0]\n    return jsonify({'prediction': int(prediction)})\n\nif __name__ == '__main__':\n    app.run(debug=True)`,
    runnable: false
  },
  {
    lang: 'JavaScript',
    title: 'Node.js Express Server',
    desc: 'Basic Express.js server with middleware and routing.',
    code: `const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.get('/health', (req, res) => {\n    res.json({ status: 'OK', timestamp: new Date() });\n});\n\napp.post('/echo', (req, res) => {\n    res.json({ echo: req.body, received: true });\n});\n\napp.listen(3000, () => {\n    console.log('Server running on port 3000');\n});`,
    runnable: false
  },
  {
    lang: 'TypeScript',
    title: 'React Component with Hooks',
    desc: 'A TypeScript React component using hooks for state management.',
    code: `import React, { useState, useEffect } from 'react';\n\ninterface User {\n    id: number;\n    name: string;\n}\n\nconst UserList: React.FC = () => {\n    const [users, setUsers] = useState<User[]>([]);\n    const [loading, setLoading] = useState(true);\n\n    useEffect(() => {\n        fetch('/api/users')\n            .then(res => res.json())\n            .then(data => {\n                setUsers(data);\n                setLoading(false);\n            });\n    }, []);\n\n    return (\n        <div>\n            {loading ? (\n                <p>Loading...</p>\n            ) : (\n                <ul>\n                    {users.map(user => (\n                        <li key={user.id}>{user.name}</li>\n                    ))}\n                </ul>\n            )}\n        </div>\n    );\n};\n\nexport default UserList;`,
    runnable: false
  },
  {
    lang: 'Go',
    title: 'Goroutine Concurrency',
    desc: 'Go program demonstrating goroutines and channels for concurrent processing.',
    code: `package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\nfunc worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {\n    defer wg.Done()\n    for j := range jobs {\n        fmt.Printf("Worker %d processing job %d\\n", id, j)\n        results <- j * 2\n    }\n}\n\nfunc main() {\n    jobs := make(chan int, 100)\n    results := make(chan int, 100)\n    var wg sync.WaitGroup\n\n    for w := 1; w <= 3; w++ {\n        wg.Add(1)\n        go worker(w, jobs, results, &wg)\n    }\n\n    for j := 1; j <= 5; j++ {\n        jobs <- j\n    }\n    close(jobs)\n\n    wg.Wait()\n    close(results)\n\n    for r := range results {\n        fmt.Printf("Result: %d\\n", r)\n    }\n}`,
    runnable: false
  },
  {
    lang: 'Rust',
    title: 'Ownership and Borrowing',
    desc: 'Rust code showcasing ownership, borrowing, and lifetimes.',
    code: `fn main() {\n    let s1 = String::from("hello");\n    let len = calculate_length(&s1);\n    println!("The length of '{}' is {}.", s1, len);\n\n    let mut s = String::from("hello");\n    change(&mut s);\n    println!("{}", s);\n}\n\nfn calculate_length(s: &String) -> usize {\n    s.len()\n}\n\nfn change(some_string: &mut String) {\n    some_string.push_str(", world");\n}`,
    runnable: false
  }
];
