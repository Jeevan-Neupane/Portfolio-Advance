export const linkedinUrl = "https://www.linkedin.com/in/jeevanneupane1/";
export const inspanPostUrl =
  "https://www.linkedin.com/posts/jeevanneupane1_inspan-iitmadras-iitmpravartak-activity-7491449531385970688-w7dl";
export const paperUrl = "https://arxiv.org/abs/2609.06437";
export const apieReportUrl =
  "https://soi.asia/apie-camp-in-ub-hands-on-learning-collaboration-and-growth/";

export const internationalPrograms = [
  {
    id: "indonesia",
    country: "Indonesia",
    city: "Malang, East Java",
    dates: "February 10–14, 2025",
    title: "A week of internet engineering in Malang.",
    program: "APIE Camp #06 · Universitas Brawijaya",
    description:
      "I travelled to Indonesia for APIE Camp #06, selected as a top-performing student for the international program run by SOI Asia and Universitas Brawijaya.",
    detail:
      "The five-day camp brought together 24 students from across Asia. Its practical sessions covered network design, Linux and virtualization, DNS, cloud computing, IoT, and security, with engineers from APNIC, AWS, UB, and Keio University.",
    topics: ["Network design", "Linux & DNS", "Cloud & IoT"],
    image: "/images/apie-indonesia.webp",
    alt: "APIE Camp participants watching a demonstration of optical networking equipment at Universitas Brawijaya",
    width: 940,
    height: 705,
    caption: "A practical session at APIE Camp #06. Photo: SOI Asia.",
    url: apieReportUrl,
    linkLabel: "Read the camp report",
  },
  {
    id: "india",
    country: "India",
    city: "Chennai, Tamil Nadu",
    dates: "June–July 2026",
    title: "Eight weeks thinking beyond the technology.",
    program: "IN-SPAN Cohort 2 · IIT Madras Pravartak",
    description:
      "I represented A.I. Lab in the eight-week India–Nepal Startup Partnership Network program, hosted by IIT Madras Pravartak with the Embassy of India, Kathmandu.",
    detail:
      "The first month covered business models, finance, leadership, and fundraising. The second focused on research and collaboration: time with Deepaarogya AI on healthcare workflows, conversations with AI4Bharat, and a visit to Agnikul.",
    topics: [
      "Healthcare workflows",
      "Startup fundamentals",
      "Research collaboration",
    ],
    image: "/images/linkedin/inspan-3.webp",
    alt: "IN-SPAN participants together at an event in the IIT Madras auditorium",
    width: 800,
    height: 600,
    caption: "With fellow IN-SPAN participants in Chennai. From my LinkedIn.",
    url: inspanPostUrl,
    linkLabel: "My notes from Chennai",
  },
];

export const fieldPhotos = [
  {
    image: "/images/linkedin/inspan-2.webp",
    alt: "IN-SPAN participants and organizers together in the IIT Madras auditorium",
    caption: "The IN-SPAN cohort, IIT Madras",
    width: 800,
    height: 601,
  },
  {
    image: "/images/linkedin/inspan-3.webp",
    alt: "A group of IN-SPAN participants together after an event at IIT Madras",
    caption: "With fellow participants in Chennai",
    width: 800,
    height: 600,
  },
  {
    image: "/images/linkedin/inspan-4.webp",
    alt: "Jeevan standing on a walkway outside a modern campus building in Chennai",
    caption: "A visit during the Chennai program",
    width: 800,
    height: 600,
  },
];

export const recentWork = [
  {
    label: "HEALTHCARE / 2026",
    title: "An EMR demo at Kathmandu Model Hospital",
    description:
      "Our team demonstrated an AI-powered EMR for telemedicine and gathered feedback from medical professionals on clinical workflows.",
    url: linkedinUrl,
    linkLabel: "Updates on LinkedIn",
  },
  {
    label: "TEACHING / DEC 2025 – JAN 2026",
    title: "Teaching assistant at Nepal AI School",
    description:
      "I completed the 6th Annual Nepal AI School and supported the hands-on lab sessions as a teaching assistant.",
    url: "https://www.linkedin.com/posts/sumanrajbista_anais2025-activity-7421102026811576320-imWx",
    linkLabel: "From the organizers",
  },
  {
    label: "COMMUNITY / JUN 2025 – APR 2026",
    title: "LOCUS & AWS Cloud Club",
    description:
      "Led the LOCUS Open Source Team and served as Secretary of AWS Cloud Club IOE Pulchowk, working on software, events, and coordination.",
    url: linkedinUrl,
    linkLabel: "View experience",
  },
];

export const projects = [
  {
    slug: "shruti",
    title: "Shruti — clinical documentation",
    category: "Healthcare AI",
    year: "2025 — Present",
    image: "/images/shruti.svg",
    alt: "Illustrated speech waveform flowing into a structured clinical note",
    illustration: true,
    summary:
      "Turning Nepali-English doctor-patient conversations into structured medical notes.",
    tags: ["Speech recognition", "LLM pipelines", "Healthcare AI"],
    context: "Co-founder & CTO · A.I Lab",
    url: "https://www.ailab.com.np/",
    linkLabel: "Visit AI Lab",
    overview:
      "Shruti is a voice-first clinical documentation system for doctor-patient conversations. The work brings together code-mixed medical speech recognition and structured note generation in the context of healthcare workflows.",
    contributions: [
      "Developing and evaluating Nepali-English medical speech recognition and diarization.",
      "Working on LLM pipelines for structured clinical notes.",
      "Building backend APIs, deploying models, and working on EMR integration.",
      "Supporting pilot testing with healthcare partners and clinics.",
    ],
    focus:
      "Connecting speech models, language models, and backend services into a workflow that can be evaluated with healthcare partners. This is ongoing development and pilot work.",
  },
  {
    slug: "xray-3d",
    title: "X-ray to 3D reconstruction",
    category: "Computer vision",
    year: "2025 — 2026",
    image: "/images/xray.svg",
    alt: "Conceptual wireframe bone reconstruction with X-ray projection planes",
    illustration: true,
    summary:
      "Reconstructing 3D bone shapes with TransVert CNN, SwinX2S, and synthetic X-ray projections.",
    tags: ["TransVert CNN", "SwinX2S", "DRR generation"],
    context: "Medical imaging research · NAAMII",
    url: "https://github.com/Jeevan-Neupane/Xray3D-Reconstruction",
    linkLabel: "View source",
    overview:
      "This project explores the reconstruction of 3D bone shapes from X-ray images using convolutional and transformer-based models, alongside synthetic projection data.",
    contributions: [
      "Implemented TransVert CNN and SwinX2S transformer approaches.",
      "Generated digitally reconstructed radiograph (DRR) data.",
      "Worked with mesh deformation and deep learning approaches for 3D reconstruction.",
    ],
    focus:
      "Learning the relationship between two-dimensional projections and three-dimensional geometry. The project combines data generation, model implementation, and medical imaging research.",
  },
  {
    slug: "locus",
    title: "LOCUS registration & gaming",
    category: "Full-stack",
    year: "2026",
    image: "/images/locus.svg",
    alt: "Illustrated LOCUS event registration pass and leaderboard",
    illustration: true,
    summary:
      "Registration, gaming, and live leaderboards for about 2,000 LOCUS participants.",
    tags: ["Event platform", "Score tracking", "Live leaderboards"],
    context: "LOCUS Registration & Gaming System",
    url: "https://register.locus.com.np/register",
    linkLabel: "Visit platform",
    overview:
      "A registration and gaming platform built for LOCUS 2026, supporting about 2,000 participants and bringing event registration and score tracking into one system.",
    contributions: [
      "Built participant registration functionality.",
      "Implemented score tracking for gaming activities.",
      "Built live leaderboards to surface participant standings.",
    ],
    focus:
      "Delivering connected event workflows for participants and organizers, from registration to tracking scores throughout the festival.",
  },
  {
    slug: "human-action",
    title: "Human action recognition",
    category: "Computer vision",
    year: "Selected project",
    image: "/images/motion.svg",
    alt: "Illustrated sequence of human poses showing motion recognition",
    illustration: true,
    summary:
      "Fine-tuned video transformers on UCF-101 and NTU RGB+D 120, plus a custom 10-action dataset.",
    tags: ["Video transformers", "UCF-101", "NTU RGB+D 120"],
    context: "Human Action Recognition",
    url: "https://github.com/Jeevan-Neupane/Human-action-recognition",
    linkLabel: "View source",
    overview:
      "A computer vision project focused on understanding human actions in video using transformer-based models and multiple action-recognition datasets.",
    contributions: [
      "Implemented and fine-tuned transformer-based video models.",
      "Worked with UCF-101 and NTU RGB+D 120.",
      "Created a custom dataset covering 10 actions.",
    ],
    focus:
      "Combining model fine-tuning with dataset creation to explore how temporal visual information represents human activity.",
  },
  {
    slug: "viton",
    title: "VITON — virtual try-on",
    category: "Computer vision",
    year: "Selected project",
    image: "/images/viton.webp",
    alt: "VITON virtual try-on project interface",
    illustration: false,
    summary:
      "A deep-learning virtual try-on prototype with an interactive outfit preview interface.",
    tags: ["Stable Diffusion", "IP-Adapter", "FastAPI", "React"],
    context: "KU Hackfest 2024 · AI & Data Science track winner",
    url: "https://github.com/Jeevan-Neupane/viton_frontend",
    linkLabel: "View source",
    overview:
      "A virtual clothing try-on application for e-commerce, built with IP-Adapter and Stable Diffusion. The project won the AI and Data Science track at KU Hackfest 2024.",
    contributions: [
      "Built virtual clothing try-on with IP-Adapter and Stable Diffusion.",
      "Connected image processing with a FastAPI backend.",
      "Created a React interface for digital outfit preview.",
    ],
    focus:
      "Connecting a computer vision prototype with an interface people can interact with, bridging model inference and frontend development.",
  },
];
export const experience = [
  {
    role: "Co-founder & Chief Technology Officer",
    company: "A.I Lab",
    type: "Kathmandu, Nepal",
    dates: "2025 — Present",
    description:
      "Building Shruti, a voice-first clinical documentation system. Working across medical ASR, LLM pipelines, backend APIs, model deployment, and healthcare pilot testing.",
  },
  {
    role: "Fullstack Intern",
    company: "Fusemachines",
    type: "Hybrid",
    dates: "Feb — Apr 2026",
    description:
      "Developed the Fuse AI Fellowship Learning Management System across frontend, backend, and database components, including API development, testing, and integration.",
  },
  {
    role: "Teaching Assistant (TA)",
    company: "6th Annual Nepal AI School (ANAIS)",
    type: "Organized by NAAMII",
    dates: "Dec 29, 2025 — Jan 8, 2026",
    description:
      "Supported participants during hands-on lab sessions while completing the AI school program, which covered machine learning, deep learning, transformers, computer vision, and responsible AI.",
  },
  {
    role: "Research Intern",
    company: "NAAMII",
    type: "Part time",
    dates: "Feb 2025 — Jan 2026",
    description:
      "Worked on X-ray to 3D bone reconstruction and retinal disease classification with CNNs, transformers, and ensemble methods.",
  },
  {
    role: "Software Engineering Intern",
    company: "Institute of Engineering",
    type: "Part time",
    dates: "Dec 2024 — Dec 2025",
    description:
      "Contributed to the frontend of an examination and result management system and documented system roles and workflows.",
  },
];
export const skills = [
  {
    title: "AI & machine learning",
    items:
      "PyTorch · Hugging Face · NVIDIA NeMo · Scikit-learn · NumPy · Pandas · Matplotlib",
  },
  {
    title: "Speech & language",
    items:
      "ASR · Code-mixed speech · Diarization · Medical note generation · LLM pipelines",
  },
  {
    title: "Frontend engineering",
    items: "React · Next.js · Redux · JavaScript · TypeScript",
  },
  {
    title: "Backend & data",
    items:
      "Node.js · Express · FastAPI · Nest.js · Socket.io · MongoDB · MySQL",
  },
  { title: "Programming", items: "Python · C/C++ · JavaScript · TypeScript" },
  {
    title: "Systems & deployment",
    items: "Linux (Ubuntu / Debian) · GPU model deployment · AWS (basic)",
  },
];
export const achievements = [
  {
    date: "Jun – Jul 2026",
    title: "IN-SPAN · 2nd Cohort",
    category: "international",
    description:
      "Represented A.I. Lab in an eight-week program at IIT Madras Pravartak. Studied startup fundamentals, spent time with Deepaarogya AI on healthcare workflows, interacted with AI4Bharat, and visited Agnikul.",
    source: inspanPostUrl,
  },
  {
    date: "Dec 2025 – Jan 2026",
    title: "Teaching Assistant · 6th Annual Nepal AI School",
    category: "teaching",
    description:
      "Completed ANAIS 2025, organized by NAAMII from December 29 to January 8, and supported participants during lab sessions.",
    source:
      "https://www.linkedin.com/posts/sumanrajbista_anais2025-activity-7421102026811576320-imWx",
  },
  {
    date: "Jan 2026",
    title: "National Telemedicine & Digital Health Conference",
    description:
      "Attended the fourth National Telemedicine and first National Digital Health Conference on January 23–24, joining discussions on EMR implementation and AI in healthcare.",
    source: linkedinUrl,
  },
  {
    date: "Jun 2025 – Apr 2026",
    title: "Team Lead · LOCUS Open Source Team",
    description:
      "Led software development for the LOCUS technology festival, including website improvements and the registration system.",
    source: linkedinUrl,
  },
  {
    date: "Jun 2025 – Apr 2026",
    title: "Secretary · AWS Cloud Club IOE Pulchowk",
    description: "Coordinated events, documentation, and team activities.",
    source: linkedinUrl,
  },
  {
    date: "Feb 2025",
    title: "APIE Camp #06 · Indonesia",
    category: "international",
    description:
      "Selected as a top-performing student for the international program by SOI Asia and Universitas Brawijaya.",
  },
  {
    date: "Nov 2024",
    title: "Winner · KU Hackfest, Data Science & AI",
    description:
      "First place among 9 teams for a virtual clothing try-on application using IP-Adapter and Stable Diffusion.",
    source: linkedinUrl,
  },
  {
    date: "Sep 2024",
    title: "Winner · Hackademia 2.0, Best AI Integration",
    description: "First place among 17 teams for AI implementation.",
  },
  {
    date: "Nov 2023",
    title: "Winner · Hackademia 1.0, Best Presentation",
    description: "Recognized for the most impactful presentation.",
  },
];
