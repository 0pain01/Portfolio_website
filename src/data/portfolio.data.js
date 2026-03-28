// ─────────────────────────────────────────────────────────────────
//  portfolio.data.js
//  ► Single source of truth for ALL portfolio content.
//  ► Edit this file to update any text, links, or entries.
// ─────────────────────────────────────────────────────────────────

export const PERSONAL = {
  name:       "Pankaj Singh",
  nameDisplay: { line1: "PANKAJ", line2: "SINGH" },
  tagline:    "Associate Consultant @ KPMG · Full Stack Engineer building scalable backends, cloud-native systems, and compliance-grade platforms.",
  status:     "Open to opportunities",
  location:   "Bangalore, IN",
  phone:      "+91 95584 41174",
  email:      "koranga.yug.098@gmail.com",
  github:     "https://github.com/0pain01",
  linkedin:   "https://linkedin.com/in/pankajsingh872000",
  resumeUrl:  "https://drive.google.com/file/d/1pjbAhWFHa5cEYK1PUmlcyKfj2n7oi21m/view?usp=sharing",          // ← replace with actual CV link
  brandName:  "PORTFOLIO",
  leetcode:   "https://leetcode.com/u/Pain01/",  // ← added LeetCode profile link
};

// ─── ABOUT ────────────────────────────────────────────────────────
export const ABOUT = {
  headline: "I build systems where compliance meets performance — from global regulatory trade platforms to microservices-backed banking infrastructure.",
  bio: "Currently an Associate Consultant at KPMG (Client: Goldman Sachs), working on NILE — a global regulatory compliance platform processing trade, stock, and market datasets using Spark-driven ETL pipelines across multiple regions. Previously at Axis Bank, where I built Spring Boot RESTful APIs, optimised AWS RDS queries, and maintained Informatica IICS pipelines. Published IEEE research on real-time IoT weapon detection using YOLOv4. Graduated from Graphic Era University with a B.Tech in Computer Engineering (GPA 8.89/10).",
  cards: [
    { icon: "terminal", color: "var(--primary)",   title: "Backend & APIs", desc: "Spring Boot, RESTful APIs, Microservices, FastAPI" },
    { icon: "database", color: "var(--secondary)", title: "Data & Cloud",   desc: "AWS EC2/RDS/DynamoDB, Spark ETL, Informatica IICS" },
    { icon: "code",     color: "var(--primary)",   title: "Languages",      desc: "Java, Python, JavaScript, C++, SQL" },
  ],
};

// ─── PROJECTS ─────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "01",
    title: "DIGITAL_WALLET_SYS",
    tags: [
      { label: "Spring Boot", color: "var(--primary)"   },
      { label: "FastAPI",     color: "var(--secondary)" },
      { label: "MongoDB",     color: "var(--primary)"   },
      { label: "Redis",       color: "var(--secondary)" },
    ],
    desc: "Secure digital wallet backend with JWT auth, wallet management, transaction processing, spending analytics, and AI-powered expense insights — built in a microservices architecture using Spring Boot, FastAPI, MongoDB and Redis.",
    img:  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    links: [{ label: "View Project", icon: "arrow_outward", color: "#8ff5ff", href: "https://github.com/0pain01/Digital-wallet-system" }],
  },
  {
    id: "02",
    title: "PATIENT_MGMT_SYS",
    tags: [
      { label: "React.js",     color: "var(--primary)"   },
      { label: "Spring Boot",  color: "var(--secondary)" },
      { label: "MySQL",        color: "var(--primary)"   },
    ],
    desc: "Full-stack healthcare platform enabling patient registration, appointment scheduling, and admin-controlled appointment management — with separate patient and admin access roles.",
    img:  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    links: [{ label: "View Project", icon: "arrow_outward", color: "#d575ff", href: "https://carepulse-frontend-two.vercel.app/" }],
  },
  {
    id: "03",
    title: "IOT_WEAPON_DETECT",
    tags: [
      { label: "YOLOv4", color: "var(--primary)"   },
      { label: "IoT",    color: "var(--secondary)" },
      { label: "Python", color: "var(--primary)"   },
    ],
    desc: "Published IEEE research — real-time weapon detection system using YOLOv4 and IoT devices, achieving 70–95% accuracy. Trained on 8,000+ images with live video stream integration for automated security alerts. DOI: 10.1109/ICCES51350.2021.9489224",
    img:  "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    links: [{ label: "IEEE Paper", icon: "menu_book", color: "#8ff5ff", href: "https://doi.org/10.1109/ICCES51350.2021.9489224" }],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────
//  side: "right" | "left"  — alternates the timeline card position
//  active: true  — highlights the node with primary colour (current role)
export const EXPERIENCES = [
  {
    icon: "work", active: true, side: "right",
    title:   "Associate Consultant",
    period:  "Nov 2025 — Present",
    company: "KPMG · Client: Goldman Sachs",
    location: "Bangalore",
    bullets: [
      "Contributing to NILE — a global regulatory compliance platform handling stock, trade & market validations across multiple regions.",
      "Working on Spark-driven ETL pipelines in Linux-based distributed systems, enhancing data validation logic for compliance.",
      "Contributing to API data contracts and integration points, building exposure toward Spring Boot-based service development.",
      "Building domain knowledge across trade lifecycle, stock market data structures, and regulatory validation checks.",
    ],
  },
  {
    icon: "account_balance", active: false, side: "left",
    title:   "Associate Tech Engineer (Dy. Manager)",
    period:  "Aug 2023 — Oct 2025",
    company: "Axis Bank",
    location: "Mumbai",
    bullets: [
      "Built internal customer data aggregation platform on microservices backend, consolidating data from multiple banking systems.",
      "Developed Spring Boot RESTful APIs for secure customer data exposure to downstream JSON-based integrations.",
      "Performed SQL optimisation on AWS RDS — queries, views, stored procedures — improving performance by 10–15%.",
      "Built & maintained Informatica IICS ETL pipelines ensuring timely data synchronisation from source systems.",
      "Supported AWS EC2/RDS/DynamoDB cost monitoring contributing to 15% cost optimisation and maintaining uptime.",
    ],
  },
  {
    icon: "code", active: false, side: "right",
    title:   "Java FullStack Intern",
    period:  "Mar 2023 — Jul 2023",
    company: "Cognizant",
    location: "Gurgaon",
    bullets: [
      "Acquired proficiency in Java Core and front-end technologies — HTML, CSS, JavaScript — with solid understanding of MySQL basics and advanced topics.",
      "Developed a comprehensive Customer Management System using Spring Boot and Maven, integrating Angular for a robust and responsive UI.",
      "Demonstrated expertise in REST APIs, microservices architecture, and key technologies: FeignClient, JWT Security, Swagger, Eureka Server, and Mockito.",
      "Expanded Angular development skills, enhancing functionality and user experience of web applications.",
    ],
  },
  {
    icon: "school", active: false, side: "left",
    title:   "B.Tech — Computer Engineering",
    period:  "June 2019 — June 2023",
    company: "Graphic Era University",
    location: "Dehradun · GPA: 8.89 / 10",
    bullets: [
      "Published IEEE research on IoT-based weapon detection using YOLOv4 — 70–95% accuracy on 8,000+ image dataset.",
      "Developed full-stack projects in Java, Python, and JavaScript throughout the programme.",
    ],
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────
export const SKILLS = {
  coreLanguages: ["Java", "Python", "JavaScript", "C++", "SQL"],
  backend:       ["Spring Boot", "REST APIs", "Microservices", "FastAPI", "JUnit", "Mockito"],
  cloud:         ["AWS EC2 / RDS / DynamoDB", "Docker (Basics)", "Git / Maven / Linux"],
  data:          ["Oracle SQL / MySQL / MongoDB", "Redis", "Spark ETL", "Informatica IICS"],
  liveStatus:    "Currently deep-diving into distributed compliance systems, Spark-based data engineering, and Spring Boot microservices at scale.",
  techIcons: [
    { icon: "terminal",   label: "Backend"    },
    { icon: "layers",     label: "Frontend"   },
    { icon: "database",   label: "Data"       },
    { icon: "cloud",      label: "Cloud"      },
    { icon: "security",   label: "Compliance" },
    { icon: "monitoring", label: "DevOps"     },
  ],
};

// ─── FOOTER / SOCIAL ──────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GITHUB",   href: "https://github.com/0pain01" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/pankajsingh872000" },
  { label: "EMAIL",    href: "mailto:koranga.yug.098@gmail.com" },
];
