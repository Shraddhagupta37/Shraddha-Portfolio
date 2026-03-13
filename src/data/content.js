export const personalInfo = {
  name: "Shraddha Gupta",
  title: "Full Stack Developer & AI Enthusiast",
  email: "gshraddha246850@gmail.com",
  github: "https://github.com/Shraddhagupta37",
  linkedin: "https://www.linkedin.com/in/shraddha-gupta-8ab9b828a/",
  phone: "+91-8840557386",
  about: "I'm a passionate developer with a CGPA of 9.08, winner of DevFest Jalandhar Gen-AI hackathon, and creator of innovative full-stack solutions. I love building intelligent systems and crafting beautiful user experiences."
};

export const skills = {
  languages: [
    { name: "Python", icon: "SiPython" },
    { name: "C", icon: "SiC" },
    { name: "C++", icon: "SiCplusplus" },
    { name: "Java", icon: "SiJava" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "PHP", icon: "SiPhp" },
    { name: "TypeScript", icon: "SiTypescript" } // Added for completeness
  ],
  frameworks: [
    { name: "React", icon: "SiReact" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "SiCss3" },
    { name: "TailwindCSS", icon: "SiTailwindcss" },
    { name: "Swing", icon: "SiJava" }, // Fallback to Java icon
    { name: "AWT", icon: "SiJava" }     // Fallback to Java icon
  ],
  databases: [ // New separate category
    { name: "MySQL", icon: "SiMysql" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "PostgreSQL", icon: "SiPostgresql" }
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
    { name: "Excel", icon: "SiMicrosoftexcel" },
    { name: "Windows", icon: "SiWindows" },
    { name: "Linux", icon: "SiLinux" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Quality Pulse",
    description: "Real-time construction quality assurance platform",
    fullDescription: "Architected a real-time construction quality assurance platform to streamline multi-site inspections and improve compliance accuracy using the MERN stack. Delivered high-performance RESTful APIs and a React-based analytics dashboard with MongoDB integration ensuring 99.9% data reliability. Reduced inspection delays by 30%.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Shraddhagupta37/Quality-Pulse-Construction-QA",
    date: "Dec 2025",
    image: "../../public/project1.png",
    featured: true
  },
  {
    id: 2,
    title: "ToddleUp",
    description: "Offline-first kids learning application",
    fullDescription: "Crafted a fully offline, kid-friendly desktop learning app for toddlers with rich visual and audio interactions. Features 6 learning modules (alphabets, numbers, shapes, colours, drawing pad, quizzes) using Java Swing/AWT. Achieved 100% offline reliability and sub-1 second load times.",
    tech: ["Java", "Swing", "AWT"],
    github: "https://github.com/Shraddhagupta37/ToddleUp-Kids-Learning-App",
    date: "Aug 2025",
    image: "../../public/project2.png",
    featured: true
  },
  {
    id: 3,
    title: "CodeLens",
    description: "Secure online proctoring platform",
    fullDescription: "Engineered a secure full-stack online proctoring platform for hackathons and recruitment exams. Features RBAC authentication, automated MCQ and code evaluation, proctoring controls (tab-switch detection, fullscreen enforcement), and analytics dashboard.",
    tech: ["PHP", "MySQL", "TailwindCSS", "JavaScript"],
    github: "https://github.com/Shraddhagupta37/CodeLens-Proctor-Exam-Platform",
    date: "May 2025",
    image: "../../public/project3.png",
    featured: true
  },
  {
    id: 4,
    title: "MDM System",
    description: "Mobile Device Management System",
    fullDescription: "A full-stack Mobile Device Management (MDM) system that enables centralized management, monitoring, and updating of Android devices. Provides real-time visibility into device health, version distribution, and update execution through a modern, analytics-driven dashboard.",
    tech: ["React", "Material UI", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Shraddhagupta37/MDM-System",
    date: "Mar 2026",
    image: "../../public/project4.png",
    features: [
      "Secure authentication using JWT",
      "Device enrollment and management",
      "Software / firmware version tracking",
      "Scheduled and phased update rollouts",
      "Real-time update job monitoring",
      "Detailed audit logging",
      "Interactive analytics dashboard",
      "Role-based access control"
    ]
  },
  {
    id: 5,
    title: "Portfolio 2026",
    description: "Interactive developer portfolio",
    fullDescription: "A modern, interactive portfolio website featuring fluid cursor effects, metallic gold/copper accents, terminal-style project displays, and smooth animations. Built with React, TailwindCSS, and Framer Motion.",
    tech: ["React", "TailwindCSS", "Framer Motion", "JavaScript"],
    github: "https://github.com/Shraddhagupta37/Shraddha-Portfolio",
    date: "Mar 2026",
    image: "../../public/project5.png"
  }
];

export const experience = [
  {
    title: "Java Maestro Trainee Developer",
    company: "Lovely Professional University",
    date: "June 2025 - July 2025",
    description: "Gained strong proficiency in Core Java through hands-on exercises. Created multiple GUI-based mini-projects using Java Swing/AWT. Developed capstone project 'ToddleUp' integrating media and interactive modules.",
    certificate: "https://drive.google.com/file/d/1SrwS0FTCN776-9HD5pZC6ZBW8Yg3GblO/view"
  }
];

export const achievements = [
  "Winner of DevFest Jalandhar: Gen-AI hackathon, GDC Jalandhar (Jan 2025)",
  "2nd Runner-up in Analytical Competition, LPU (Nov 2024)",
  "University Honor Roll for academic performance (Aug 2024)"
];

export const certificates = [
  {
    name: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Infosys",
    date: "Sep 2025",
    link: "ude.my/UC-016ab957-007f-455b-8add-95ba826f2b52",
    image: "/cert1.jpg"
  },
  {
    name: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/10ccvblG71XUn1LqDxnyhPFMz0o28OoKR/view",
    image: "/cert2.jpg"
  },
  {
    name: "Master Generative AI and Generative AI Tools (ChatGPT and more)",
    issuer: "Udemy",
    date: "Jul 2025",
    link: "https://www.udemy.com/certificate/UC-886f605e-d025-453a-aa99-73dfc2430f46/",
    image: "/cert3.jpg"
  },
  {
    name: "Cloud Computing (Elite)",
    issuer: "NPTEL",
    date: "Apr 2025",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S133730006404235727.pdf",
    image: "/cert4.jpg"
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/WOSC82OZAA4I",
    image: "/cert5.jpg"
  },
  {
    name: "Legacy Responsive Web Design V8",
    issuer: "FreeCodeCamp",
    date: "Oct 2023",
    link: "https://www.freecodecamp.org/certification/fccbb4c3504-1de3-4546-9353-231ace85f3a7/responsive-web-design",
    image: "/cert6.jpg"
  }
];

export const education = [
  {
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    startDate: "Aug 2023",
    endDate: "Present",
    score: "CGPA: 9.08",
    achievements: ["University Honor Roll", "DevFest Winner"],
    logo: "/college-logo.png" // Add a logo later
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Udaya Public School",
    location: "Ayodhya, UP",
    startDate: "Apr 2021",
    endDate: "May 2022",
    score: "88%",
    board: "CBSE"
  },
  {
    degree: "Matriculation (Class X)",
    institution: "Udaya Public School",
    location: "Ayodhya, UP",
    startDate: "Apr 2019",
    endDate: "May 2020",
    score: "97.2%",
    board: "CBSE"
  }
];