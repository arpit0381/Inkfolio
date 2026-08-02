export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  domain?: string;
  problem: string;
  solution: string;
  stack: string[];
  outcomes: string[];
  liveUrl?: string;
  githubUrl?: string;
  stickyColor?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export interface LeadershipItem {
  role: string;
  organization: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; checked: boolean }[];
}

export const RESUME_DATA = {
  personal: {
    name: "Arpit Bajpai",
    title: "Full Stack Web Developer | React.js · Next.js · Node.js · PostgreSQL",
    headline: "Hello, I'm Arpit Bajpai. Full Stack Developer, Problem Solver, Builder & Dreamer.",
    email: "arpitbajpai038@gmail.com",
    phone: "+91 9235823255",
    location: "Kanpur, UP, India",
    summary:
      "Full Stack Web Developer experienced in building and deploying responsive web and mobile apps with React.js, Next.js, Node.js, Express.js, and PostgreSQL. Skilled in RESTful API development, UI/UX design, and SQL/NoSQL database management (PostgreSQL, MySQL, MongoDB), with additional experience in Python and Flutter. Strong track record of cross-functional collaboration, team leadership, and driving measurable results.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      portfolio: "https://ink-folio-craft.base44.app/",
    },
  },

  skills: [
    {
      category: "Languages & Frameworks",
      skills: [
        { name: "Next.js 16", checked: true },
        { name: "React.js 19", checked: true },
        { name: "TypeScript", checked: true },
        { name: "Node.js", checked: true },
        { name: "Express.js", checked: true },
        { name: "JavaScript (ES6+)", checked: true },
        { name: "Python", checked: true },
        { name: "FastAPI", checked: true },
        { name: "C / C++", checked: true },
        { name: "HTML5 & CSS3", checked: true },
        { name: "Tailwind CSS v4", checked: true },
        { name: "Bootstrap", checked: true },
      ],
    },
    {
      category: "Full Stack & Mobile Development",
      skills: [
        { name: "REST API Design", checked: true },
        { name: "Full Stack Web Dev", checked: true },
        { name: "MERN Stack", checked: true },
        { name: "Server-Side Rendering", checked: true },
        { name: "Responsive UI/UX Design", checked: true },
        { name: "Flutter & Dart", checked: true },
        { name: "React Native", checked: true },
        { name: "Firebase Sync", checked: true },
      ],
    },
    {
      category: "Databases & Platforms",
      skills: [
        { name: "PostgreSQL", checked: true },
        { name: "MongoDB", checked: true },
        { name: "MySQL", checked: true },
        { name: "Git & GitHub", checked: true },
        { name: "Linux (Ubuntu)", checked: true },
        { name: "VS Code & Postman", checked: true },
        { name: "Power BI & Analytics", checked: true },
        { name: "Jira, Slack & Figma", checked: true },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      role: "Website Developer",
      company: "Sulax Solar Industries",
      location: "Kanpur, India",
      period: "July 2024 – Present",
      highlights: [
        "Built and deployed a full-stack, responsive company website (React.js, Next.js, Tailwind CSS) showcasing services, projects, and government subsidy schemes.",
        "Collaborated with the marketing team to align UI/UX and content strategy with brand identity, boosting visitor engagement and lead generation.",
        "Maintained codebase with Git/GitHub version control, delivering continuous front-end updates and reusable components.",
      ],
      skills: ["React.js", "Next.js", "Tailwind CSS", "UI/UX Strategy", "Git/GitHub"],
    },
    {
      role: "Sales Captain",
      company: "Posterwa",
      location: "Bangalore, India",
      period: "Jan 2024 – Jan 2025",
      highlights: [
        "Led regional sales campaigns across college events, exceeding targets by 200% within 2 months through strategic outreach.",
        "Developed marketing strategies, social campaigns, and partnership pitches to drive event promotion and brand visibility.",
      ],
      skills: ["Team Leadership", "Strategic Outreach", "Marketing", "Event Promotion"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "formstuff",
      title: "FormStuff",
      subtitle: "Dynamic Form Builder Platform",
      domain: "formstuff.in",
      problem: "Traditional web forms lack dynamic schema generation and quick RESTful integration for modern web builders.",
      solution: "Engineered a full-stack dynamic form-builder platform powered by React and Express with robust PostgreSQL schema management.",
      stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
      outcomes: ["Dynamic field validation", "Instant RESTful API generation", "High performance PostgreSQL queries"],
      liveUrl: "https://formstuff.in",
      stickyColor: "bg-amber-100 dark:bg-amber-900/40 text-amber-950 dark:text-amber-100 border-amber-300 dark:border-amber-700/50",
    },
    {
      id: "lifereceipt",
      title: "LifeReceipt",
      subtitle: "Mobile Digital Receipt Vault",
      domain: "lifereceipt.in",
      problem: "Paper receipts are easily misplaced, faded, or difficult to audit during tax returns and expense tracking.",
      solution: "Developed a cross-platform mobile application in Flutter with cloud sync for digitizing and categorizing purchase receipts.",
      stack: ["Flutter", "Dart", "Firebase Cloud", "Mobile UX"],
      outcomes: ["Real-time cloud database sync", "Cross-platform iOS/Android compatibility", "Instant receipt search & audit"],
      liveUrl: "https://lifereceipt.in",
      stickyColor: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-950 dark:text-emerald-100 border-emerald-300 dark:border-emerald-700/50",
    },
    {
      id: "sulaxsolar",
      title: "Sulax Solar Website",
      subtitle: "Enterprise Solar Business Portal",
      domain: "sulaxsolar.com",
      problem: "Sulax Solar required a modern, highly responsive online platform to explain complex government subsidy schemes to solar buyers.",
      solution: "Created a lightning-fast Next.js business website with structured UI components, subsidy calculators, and lead capture forms.",
      stack: ["React.js", "Next.js", "Tailwind CSS", "SEO Optimization"],
      outcomes: ["Boosted lead generation & inquiry conversion", "100% Mobile responsive layout", "Instant page load speed"],
      liveUrl: "https://sulaxsolar.com",
      stickyColor: "bg-sky-100 dark:bg-sky-900/40 text-sky-950 dark:text-sky-100 border-sky-300 dark:border-sky-700/50",
    },
    {
      id: "ompower",
      title: "Om Power Solution",
      subtitle: "Industrial Energy Showcase & Lead Engine",
      problem: "Needed a clean digital presence to showcase heavy electrical solutions and service packages to industrial clients.",
      solution: "Built a full-stack platform with custom service catalog components and lead tracking backend.",
      stack: ["React.js", "Node.js", "PostgreSQL", "Express.js"],
      outcomes: ["Streamlined business inquiries", "High availability API backend"],
      stickyColor: "bg-rose-100 dark:bg-rose-900/40 text-rose-950 dark:text-rose-100 border-rose-300 dark:border-rose-700/50",
    },
    {
      id: "ignitia2k26",
      title: "PSIT's Ignitia 2K26 Website",
      subtitle: "College Tech Fest Official Portal",
      problem: "Managing high-concurrency event registrations and schedule announcements for thousands of festival attendees.",
      solution: "Designed and implemented a high-performance web portal built with Next.js and Go for backend speed.",
      stack: ["Next.js", "PostgreSQL", "Go", "Tailwind CSS"],
      outcomes: ["Handled high event traffic seamlessly", "Real-time registration tracking"],
      stickyColor: "bg-purple-100 dark:bg-purple-900/40 text-purple-950 dark:text-purple-100 border-purple-300 dark:border-purple-700/50",
    },
    {
      id: "clubsphere",
      title: "ClubSphere",
      subtitle: "Community & Club Coordination Platform",
      domain: "clubsphere.in",
      problem: "College clubs lack a unified system for member coordination, event scheduling, and resource allocation.",
      solution: "Architected a community management web application for organizing club events, member roles, and announcements.",
      stack: ["React.js", "Node.js", "PostgreSQL", "REST APIs"],
      outcomes: ["Centralized club operations", "Streamlined event scheduling & member activity"],
      liveUrl: "https://clubsphere.in",
      stickyColor: "bg-orange-100 dark:bg-orange-900/40 text-orange-950 dark:text-orange-100 border-orange-300 dark:border-orange-700/50",
    },
  ] as ProjectItem[],

  leadership: [
    {
      role: "Founder & CEO",
      organization: "Catalyst Crew",
      description: "Led a student-run team, driving strategic direction, innovation initiatives, and overall team management.",
    },
    {
      role: "Technical Head",
      organization: "Logix Club, PSIT-CHE",
      description: "Directed technical projects, organized coding bootcamps, and mentored club members on modern web development.",
    },
    {
      role: "Secretary",
      organization: "Energy Club, PSIT-CHE",
      description: "Coordinated club operations, inter-departmental workshops, sustainability events, and member engagement.",
    },
    {
      role: "Joint Website Head",
      organization: "Ignitia, PSIT",
      description: "Managed end-to-end development, deployment, and real-time maintenance of the official college festival web app.",
    },
  ] as LeadershipItem[],

  certifications: [
    { title: "HTML, CSS & JavaScript", issuer: "Infosys Springboard" },
    { title: "Basics of Python", issuer: "Infosys Springboard" },
    { title: "Node.js", issuer: "Udemy" },
    { title: "Programming in C", issuer: "Infosys Springboard" },
    { title: "Power BI", issuer: "Udemy" },
    { title: "Technology Job Simulation", issuer: "Deloitte (Forage)" },
  ] as CertificationItem[],

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Pranveer Singh Institute of Technology (PSIT)",
    location: "Kanpur, UP, India",
    period: "Jul 2024 – Jun 2027",
    cgpa: "Pursuing",
    handwrittenNotes: "Focusing on Software Engineering, Data Structures, Web Architectures & Database Systems.",
  },
};
