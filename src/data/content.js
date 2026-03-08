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
    title: "Quality Pulse - Construction QA System",
    description: "Real-time construction quality assurance platform streamlining multi-site inspections. Reduced inspection delays by 30% and improved compliance accuracy through live metrics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Shraddhagupta37/Quality-Pulse-Construction-QA",
    date: "Nov 2025 - Dec 2025",
    mockups: ["/project1-1.png", "/project1-2.png", "/project1-3.png"], // Add your mockups later
    features: [
      "Real-time analytics dashboard",
      "High-performance RESTful APIs",
      "99.9% data reliability",
      "Multi-site inspection tracking"
    ]
  },
  {
    id: 2,
    title: "ToddleUp - Kids Learning Application",
    description: "Offline-first desktop learning app for toddlers with rich visual and audio interactions. Features 6 learning modules with 100% offline reliability and sub-1 second load times.",
    tech: ["Java", "Swing", "AWT", "OOP", "Graphics2D"],
    github: "https://github.com/Shraddhagupta37/ToddleUp-Kids-Learning-App",
    date: "July 2025 - Aug 2025",
    mockups: ["/project2-1.png", "/project2-2.png"],
    features: [
      "6 interactive learning modules",
      "MVC-inspired architecture",
      "Multimedia integration",
      "Tested with 15+ users"
    ]
  },
  {
    id: 3,
    title: "CodeLens - Proctor Exam Platform",
    description: "Secure full-stack online proctoring platform for hackathons and recruitment exams. Features RBAC, automated evaluation, and comprehensive proctoring controls.",
    tech: ["PHP", "MySQL", "TailwindCSS", "JavaScript", "HTML5"],
    github: "https://github.com/Shraddhagupta37/CodeLens-Proctor-Exam-Platform",
    date: "Feb 2025 - May 2025",
    mockups: ["/project3-1.png", "/project3-2.png"],
    features: [
      "RBAC authentication",
      "Automated MCQ & code evaluation",
      "Tab-switch detection",
      "Analytics dashboard"
    ]
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
    name: "Build Generative AI Apps",
    issuer: "Infosys",
    date: "Sep 2025",
    link: "ude.my/UC-016ab957-007f-455b-8add-95ba826f2b52",
    image: "/cert1.jpg"
  },
  {
    name: "Computational Theory",
    issuer: "Infosys",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/10ccvblG71XUn1LqDxnyhPFMz0o28OoKR/view",
    image: "/cert2.jpg"
  },
  {
    name: "Master Generative AI",
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
    name: "Computer Networking",
    issuer: "Coursera",
    date: "Sep 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/WOSC82OZAA4I",
    image: "/cert5.jpg"
  },
  {
    name: "Responsive Web Design",
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