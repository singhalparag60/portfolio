export const personalInfo = {
  name: "PARAG SINGHAL",
  role: "B.Tech Student",
  tagline: "B.Tech Student | AI & Technology Enthusiast",
  college: "JECRC UNIVERSITY",
  location: "Jaipur, Rajasthan, India",
  email: "singhalparag60@gmail.com",
  linkedin: "https://www.linkedin.com/in/parag-singhal-4574142b2/",
  github: "https://github.com/singhalparag60",
  bio: "I am a B.Tech student interested in technology, artificial intelligence, web development and digital productivity. I am learning modern technologies and building practical projects.",
  extendedBio: "I am driven by curiosity and the rapid evolution of digital intelligence. Currently pursuing my Bachelor of Technology at JECRC University, my focus centers on mastering modern full-stack web technologies, exploring applied artificial intelligence, and designing high-efficiency digital workflows. I believe in learning by doing — transforming theoretical computer science concepts into usable, well-crafted applications that solve everyday challenges.",
  highlights: [
    { label: "Degree Track", value: "B.Tech Undergrad" },
    { label: "Institution", value: "JECRC University" },
    { label: "Core Focus", value: "AI & Modern Web" },
    { label: "Status", value: "Open for Opportunities" }
  ]
};

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "JECRC University",
    location: "Jaipur, India",
    period: "2023 – 2027 (Expected)",
    badge: "Currently Pursuing",
    description: "Rigorous undergraduate program with a comprehensive curriculum emphasizing foundational computer science principles, software engineering, and emerging technologies.",
    relevantLearningAreas: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Web Technologies & Frameworks",
      "Artificial Intelligence & Machine Learning",
      "Computer Networks & Operating Systems",
      "Software Engineering & Agile Methodologies"
    ],
    highlights: [
      "Active participant in technical student clubs and developer communities",
      "Hands-on lab work in modern programming languages and web development",
      "Continuous exploration of applied AI tools and automation workflows"
    ]
  },
  {
    degree: "Senior Secondary (XII - Science & Mathematics)",
    institution: "Recognized Higher Secondary Board",
    location: "India",
    period: "Completed",
    badge: "Foundation",
    description: "Solid academic foundation in Physics, Chemistry, and Mathematics, instilling strong analytical thinking and quantitative problem-solving skills.",
    relevantLearningAreas: [
      "Advanced Mathematics & Calculus",
      "Physics & Logical Reasoning",
      "Foundations of Computer Science & Information Technology"
    ]
  }
];

export const skillsData = [
  {
    name: "HTML",
    category: "Web Development",
    level: "Advanced",
    percentage: 90,
    description: "Semantic HTML5, Web Accessibility (a11y), SEO optimization, modern markup structures",
    iconName: "Code2",
    color: "from-orange-500 to-amber-500",
    tags: ["HTML5", "Semantic UI", "Accessibility", "SEO"]
  },
  {
    name: "CSS",
    category: "Web Development",
    level: "Advanced",
    percentage: 88,
    description: "Tailwind CSS, Flexbox, Grid, CSS3 animations, glassmorphism, responsive mobile layouts",
    iconName: "Palette",
    color: "from-blue-500 to-cyan-500",
    tags: ["Tailwind CSS", "Flexbox & Grid", "Responsive Design", "Animations"]
  },
  {
    name: "JavaScript",
    category: "Web Development",
    level: "Proficient",
    percentage: 82,
    description: "Modern ES6+, DOM manipulation, Asynchronous JS, Promises, Fetch API, Event-driven code",
    iconName: "FileCode2",
    color: "from-yellow-400 to-amber-500",
    tags: ["ES6+", "Async/Await", "DOM APIs", "Event Loop"]
  },
  {
    name: "Python",
    category: "Programming & AI",
    level: "Proficient",
    percentage: 80,
    description: "Core Python, scripting, data handling, object-oriented concepts, automation scripts",
    iconName: "Terminal",
    color: "from-emerald-400 to-teal-500",
    tags: ["Python 3", "Automation", "Data Handling", "OOP"]
  },
  {
    name: "Artificial Intelligence",
    category: "AI & Innovation",
    level: "Intermediate",
    percentage: 75,
    description: "Foundational AI/ML algorithms, neural networks intuition, supervised learning, data preprocessing",
    iconName: "Cpu",
    color: "from-purple-500 to-indigo-600",
    tags: ["Machine Learning", "Neural Networks", "Algorithm Logic", "Model Evaluation"]
  },
  {
    name: "Generative AI",
    category: "AI & Innovation",
    level: "Proficient",
    percentage: 85,
    description: "LLM prompting & tuning, Gemini & OpenAI APIs, AI-assisted development, autonomous agent workflows",
    iconName: "Sparkles",
    color: "from-cyan-400 to-blue-600",
    tags: ["Prompt Engineering", "LLM APIs", "Autonomous Agents", "AI Workflows"]
  },
  {
    name: "Web Development",
    category: "Web Development",
    level: "Proficient",
    percentage: 85,
    description: "React.js, component architecture, single page apps, state management, Vite build tool, Git",
    iconName: "Globe",
    color: "from-indigo-400 to-purple-500",
    tags: ["React.js", "Vite", "REST APIs", "Modern Tooling"]
  },
  {
    name: "Digital Productivity",
    category: "Productivity & Tools",
    level: "Advanced",
    percentage: 92,
    description: "Workflow optimization, Notion systems, Git version control, automation pipelines, focus management",
    iconName: "Zap",
    color: "from-pink-500 to-rose-500",
    tags: ["Git & GitHub", "Workflow Systems", "Task Automation", "Markdown"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "Web Development",
    shortDescription: "A modern, high-performance developer portfolio crafted with React, Vite, and Tailwind CSS featuring a sleek dark aesthetic, responsive layout, and smooth interactions.",
    fullDescription: "Built from the ground up to showcase my skills, education, and technical journey. Features include glassmorphic styling, responsive navigation with mobile drawer, interactive skill proficiency indicators, project filtering, achievements section, and direct communication channels.",
    technologies: ["React", "Vite", "Tailwind CSS", "Lucide React", "Responsive UI"],
    githubUrl: "https://github.com/singhalparag60",
    liveUrl: "#",
    featured: true,
    highlights: [
      "100% responsive across mobile, tablet, and desktop viewports",
      "Polished glassmorphism design with ambient gradient lighting",
      "Interactive contact form and one-click copy email feedback",
      "Designed for seamless zero-config deployment on Vercel"
    ],
    metric: "100/100 Lighthouse Performance"
  },
  {
    id: 2,
    title: "AI Website Project",
    category: "Artificial Intelligence",
    shortDescription: "An intelligent web application integrating modern Generative AI capabilities to provide dynamic text generation, intelligent summarization, and interactive assistance.",
    fullDescription: "An interactive platform exploring the potential of LLMs and generative artificial intelligence. The application communicates with AI endpoints to assist users with content generation, code explanations, and rapid query resolution through a clean, accessible interface.",
    technologies: ["Python", "React", "Generative AI APIs", "Tailwind CSS", "RESTful Architecture"],
    githubUrl: "https://github.com/singhalparag60",
    liveUrl: "#",
    featured: true,
    highlights: [
      "Context-aware prompt templates tailored for developer and student needs",
      "Streaming responses with real-time UI updates",
      "Clean markdown formatting and code syntax highlighting",
      "Secure API handling with environment-driven architecture"
    ],
    metric: "Fast AI Inference UI"
  },
  {
    id: 3,
    title: "Student Productivity Project",
    category: "Digital Productivity",
    shortDescription: "A specialized digital productivity dashboard engineered to help university students track semester goals, manage assignment deadlines, and stay focused.",
    fullDescription: "A dedicated study companion application combining a Pomodoro focus timer, syllabus milestone tracker, smart note-taking, and daily habit tracker. Designed to combat academic burnout and instill structured digital productivity habits.",
    technologies: ["JavaScript", "HTML5", "CSS3 / Tailwind", "LocalStorage API", "Productivity Systems"],
    githubUrl: "https://github.com/singhalparag60",
    liveUrl: "#",
    featured: true,
    highlights: [
      "Integrated Pomodoro timer with customizable work/break intervals",
      "Local storage persistence for offline-first zero latency usage",
      "Assignment priority matrix based on Eisenhower Decision Model",
      "Distraction-free minimalist interface"
    ],
    metric: "30%+ Focus Boost"
  }
];

export const achievementsData = [
  {
    category: "Certifications",
    items: [
      {
        title: "Python for Problem Solving & Programming",
        issuer: "Online Learning / Accredited Course",
        date: "2024",
        status: "Completed",
        description: "Mastered core Python programming concepts, data structures, file handling, and algorithmic logic.",
        badge: "Certified"
      },
      {
        title: "Foundations of Artificial Intelligence & LLMs",
        issuer: "Industry Recognized Program",
        date: "2024",
        status: "Completed",
        description: "Explored machine learning principles, prompt engineering, generative models, and ethical AI deployment.",
        badge: "Specialization"
      },
      {
        title: "Responsive Web Design & Modern Frontend",
        issuer: "Web Developer Curriculum",
        date: "2023",
        status: "Completed",
        description: "Comprehensive training in semantic HTML5, CSS3 Grid/Flexbox, responsive design, and accessibility.",
        badge: "Certified"
      }
    ]
  },
  {
    category: "Hackathons",
    items: [
      {
        title: "University Level Innovation Hackathon",
        issuer: "JECRC University Tech Fest",
        date: "2024",
        status: "Participant / Finalist",
        description: "Collaborated in an intensive 24-hour sprint to build a tech-enabled solution addressing student workflow optimization.",
        badge: "Team Hackathon"
      },
      {
        title: "Smart Solutions AI Challenge",
        issuer: "Developer Community",
        date: "2024",
        status: "Participant",
        description: "Pitched and prototyped an AI-powered assistant for automated study summaries and question answering.",
        badge: "Ideation & Build"
      }
    ]
  },
  {
    category: "Courses",
    items: [
      {
        title: "Data Structures and Algorithms Essentials",
        issuer: "B.Tech Curriculum & Self-Paced Practice",
        date: "Ongoing",
        status: "In Progress",
        description: "Actively solving algorithmic problems covering arrays, strings, recursion, linked lists, and search/sort algorithms.",
        badge: "Core CS"
      },
      {
        title: "Modern React & Frontend Engineering",
        issuer: "Online Specialization",
        date: "2024",
        status: "Completed",
        description: "In-depth study of React Hooks, component lifecycle, state management, and modern bundling with Vite.",
        badge: "Frontend"
      }
    ]
  },
  {
    category: "Awards & Honors",
    items: [
      {
        title: "Consistent Academic Standing in B.Tech",
        issuer: "JECRC University",
        date: "2023 - Present",
        status: "Active",
        description: "Maintaining strong academic performance with dedicated commitment to computer science coursework and lab practicals.",
        badge: "Academic"
      },
      {
        title: "Active Contributor to Tech Club Activities",
        issuer: "Departmental Student Community",
        date: "2024",
        status: "Contributor",
        description: "Engaging in student developer workshops, knowledge-sharing sessions, and peer-to-peer programming circles.",
        badge: "Community"
      }
    ]
  }
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
