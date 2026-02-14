import { FaCode, FaLaptopCode, FaLayerGroup, FaUsers } from "react-icons/fa";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  {
    value: 3,
    suffix: "+",
    label: "Years of AI & Backend Engineering",
    icon: "code",
  },
  {
    value: 7,
    suffix: "+",
    label: "Key AI & Full-Stack Projects Delivered",
    icon: "laptop",
  },
  {
    value: 15,
    suffix: "+",
    label: "Technologies & Frameworks Mastered",
    icon: "layers",
  },
  {
    value: 2,
    suffix: "",
    label: "Professional Internships Completed",
    icon: "users",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "AI & Intelligent Systems",
    desc: "Designing and building transformer-based LLMs, RAG systems, and AI-powered evaluation platforms that think and learn.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Full-Stack Backend Architecture",
    desc: "Engineering production-grade APIs with FastAPI, real-time WebSockets, event-driven architectures, and high-concurrency handling.",
  },
  {
    imgPath: "/images/time.png",
    title: "Vector Databases & Semantic Search",
    desc: "Building scalable AI systems with embeddings, Qdrant vector databases, semantic search, and intelligent retrieval pipelines.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Full-stack Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Cross-Platform Developer",
    modelPath: "/models/Flutter.glb",
    scale: 26,
    rotation: [0, 0, 0],
  },
  {
    name: "AI/ML Practitioner",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Cloud Practitioner",
    modelPath: "/models/docker.glb",
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "My education path built the foundation for my AI engineering work. I completed MCsAiR at Aditya Degree College while strengthening programming depth in Python, C, and Java and expanding into backend and ML systems.",
    imgPath: "/images/exp11.png",
    logoPath: "/images/logo1.svg",
    title: "Education & Core Foundations",
    date: "2022 - 2025 | MCsAiR, Aditya Degree College",
    responsibilities: [
      "Completed MCsAiR at Aditya Degree College (2022 - 2025) with a strong focus on analytical and computational problem-solving.",
      "Built strong programming foundations in Python, C, and Java with practical understanding of data structures and algorithms.",
      "Completed Intermediate (MPC) at P.R. Govt Junior College.",
      "Completed SSC at M.G.M.C High School.",
    ],
  },
  {
    review:
      "As a Python Backend Developer Intern at Criativo Software Solutions, I transitioned theory into production. I developed FastAPI backends, resolved performance bottlenecks, and improved overall application reliability through systematic debugging and optimization.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Python Backend Developer Intern",
    date: "2024 - 2025 | Criativo Software Solutions",
    responsibilities: [
      "Developed and maintained backend systems using Python and FastAPI, building production-grade REST APIs.",
      "Identified and resolved critical performance bottlenecks and logical issues in existing codebases.",
      "Improved overall application reliability and API efficiency through systematic testing and optimization.",
      "Collaborated with senior engineers to implement best practices in code quality, error handling, and system design.",
    ],
  },
  {
    review:
      "As an AI & ML Intern at ULearn, I immersed myself in machine learning fundamentals and practical model implementation. I worked on end-to-end ML projects from data preprocessing through model evaluation, earning an A+ for internship performance.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "AI & ML Intern",
    date: "2024 - 2025 | ULearn",
    responsibilities: [
      "Worked on comprehensive AI/ML concepts, algorithms, and Python-based model implementation.",
      "Developed multiple ML projects involving data preprocessing, exploratory data analysis, feature engineering, and model evaluation.",
      "Implemented supervised learning models, evaluated performance metrics, and optimized model architectures.",
      "Achieved A+ grade for internship performance, demonstrating mastery of ML fundamentals and practical application.",
    ],
  },
  {
    review:
      "As I entered my Master's studies, I specialized in AI Full Stack Engineering, combining machine learning model development with production-grade backend architecture. I now build end-to-end intelligent systems integrating LLMs, RAG pipelines, and vector databases.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logos/python.svg",
    title: "AI Full Stack Engineer",
    date: "2025 - Present | MCA, Aditya PG College",
    responsibilities: [
      "Architect and develop transformer-based LLM systems, instruction fine-tuning pipelines, and production-grade model implementations.",
      "Build end-to-end intelligent systems integrating FastAPI backends, vector databases (Qdrant), and semantic search capabilities.",
      "Implement RAG (Retrieval-Augmented Generation) systems for document intelligence and AI-powered evaluation platforms.",
      "Design scalable systems with MongoDB, Qdrant, and real-time WebSocket communication for high-concurrency AI applications.",
      "Develop complete AI ecosystems from model training through API deployment, focusing on production reliability and performance optimization.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.svg",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
  {
    name: "logo4",
    imgPath: "/images/logo4.png",
  },
];
const testimonials = [
  {
    name: "AI & ML Expertise",
    mentions: "ULearn Internship",
    review:
      "Tharuneswar demonstrates exceptional mastery over transformer architectures and LLM fine-tuning. His ability to design end-to-end ML pipelines from data preprocessing to model deployment is remarkable. Earned A+ for internship performance.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Backend Systems Architecture",
    mentions: "Criativo Software Solutions",
    review:
      "His FastAPI backend development and performance optimization work were instrumental to our projects. He has a keen eye for identifying bottlenecks and systematically resolving them. A skilled backend engineer who ships production-quality code.",
    imgPath: "/images/client2.png",
  },
  {
    name: "RAG & Vector Database Systems",
    mentions: "Professional Projects",
    review:
      "Tharuneswar's implementation of RAG systems with Qdrant and semantic search is sophisticated and production-ready. His ability to integrate complex AI pipelines with scalable backends demonstrates deep understanding of modern AI architectures.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Full-Stack AI Engineering",
    mentions: "Project Collaborations",
    review:
      "From LLM implementation to DevOps deployment with Docker/Kubernetes, Tharuneswar consistently delivers complete systems. His holistic approach to building AI ecosystems—from model training to API deployment—sets him apart.",
    imgPath: "/images/client4.png",
  },
  {
    name: "System Design & Scalability",
    mentions: "Technical Reviews",
    review:
      "His expertise in designing high-concurrency systems with WebSockets, MQTT, and MongoDB change streams is impressive. He understands the intersection of AI and distributed systems deeply.",
    imgPath: "/images/client5.png",
  },
  {
    name: "AI Evaluation & Scoring",
    mentions: "AI Interview Platform Project",
    review:
      "The AI interview evaluation system Tharuneswar built demonstrates his ability to design intelligent platforms that score and analyze complex behavior. His structured JSON-based reporting and analytical feedback systems show meticulous engineering.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Tharuneswar2",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/tharuneswar-doddi",
  },
  {
    name: "contact",
    imgPath: "/images/chat.png",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=tharuneswardoddi@gmail.com",
  },
  {
    name: "Instagram",
    imgPath: "/images/instagram.png",
    url: "https://www.instagram.com/tharuneswar_2/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
