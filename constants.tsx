import React from 'react';
import { Category, Season, Project, Parameter } from './types';

// Image URLs
export const USER_PHOTO = "https://i.ibb.co/hxscwyKc/Passport-Size-Photo.jpg";
const BCG_LOGO = "https://i.ibb.co/N0wj409/Bcg-logo-PNG1.png";
const BITS_LOGO = "https://i.ibb.co/jPy20Q6H/Screenshot-2026-01-21-at-2-46-40-AM.png";
const MILLENNIUM_LOGO = "https://i.ibb.co/dw0kwBQ0/Screenshot-2026-01-21-at-2-53-32-AM.png";
const AUGSD_LOGO = "https://i.ibb.co/wFcRJrSH/Screenshot-2026-01-21-at-12-58-27-PM.png";
const ABHIVYAKTI_LOGO = "https://i.ibb.co/fVnw2W7Z/Screenshot-2026-01-21-at-1-17-04-PM.png";
const BOOK_COVER = "https://i.ibb.co/hFs5xMs2/Screenshot-2026-01-21-at-2-57-23-AM.png";
const MOBILE_MSK_LOGO = "https://cdn-icons-png.flaticon.com/512/2103/2103633.png";
const DEPUTY_PM_LOGO = "https://i.ibb.co/xKfGSgRm/Screenshot-2026-01-21-at-1-21-25-PM.png";

// Season 1 Images
const S1_E1_IMG = "https://i.ibb.co/VP6PFsJ/Screenshot-2026-01-22-at-8-43-53-PM.png";
const S1_E2_IMG = "https://i.ibb.co/67J2NyVX/Screenshot-2026-01-22-at-8-44-52-PM.png";
const S1_E3_IMG = "https://i.ibb.co/GvvkKBf3/Screenshot-2026-01-22-at-8-47-42-PM.png";

// Season 2 Images
const S2_E1_IMG = "https://i.ibb.co/Vk01k66/Screenshot-2026-01-22-at-9-31-43-PM.png";
const S2_E2_IMG = "https://i.ibb.co/ZRk6mzXc/Screenshot-2026-01-22-at-9-23-57-PM.png";
const S2_E3_IMG = "https://i.ibb.co/nqXJ1125/Screenshot-2026-01-22-at-9-35-17-PM.png";
const S2_E4_IMG = "https://i.ibb.co/9H2fjcR9/Screenshot-2026-01-22-at-9-35-53-PM.png";
const S2_E5_IMG = "https://i.ibb.co/27BBPkrG/Screenshot-2026-01-22-at-9-35-41-PM.png";

// TA Project Images
const TA_BAV_IMG = "https://i.ibb.co/bjys8WL0/Screenshot-2026-01-21-at-3-52-31-PM.png";
const TA_OOP_IMG = "https://i.ibb.co/jvsTLkbz/Screenshot-2026-01-21-at-3-51-40-PM.png";
const TA_POM_IMG = "https://i.ibb.co/d0h2ZHy6/Screenshot-2026-01-21-at-3-52-57-PM.png";
const TA_MICRO_IMG = "https://i.ibb.co/TzX08zV/Screenshot-2026-01-21-at-3-53-50-PM.png";

// Volunteering Images
const PEER_MENTOR_IMG = "https://i.ibb.co/TDPZbdSD/Screenshot-2026-01-21-at-3-59-47-PM.png";
const LIBRARY_TEAM_IMG = "https://i.ibb.co/zVTTJ69w/Screenshot-2026-01-21-at-4-01-58-PM.png";

// Competition Cinematic Screenshots
const HACKATHON_SCREENSHOT = "https://i.ibb.co/DgrSNthR/Screenshot-2026-01-21-at-4-11-32-PM.png";
const DEBATE_SCREENSHOT = "https://i.ibb.co/27wW0jpz/Screenshot-2026-01-21-at-4-12-00-PM.png";
const CHESS_SCREENSHOT = "https://i.ibb.co/030W8CN/Screenshot-2026-01-21-at-4-12-24-PM.png";

export const RESUME_LINKS = {
  Technical: "https://drive.google.com/file/d/1292nzo7CQ27C8WSMM-G1tkf67N20_qb8/view?usp=sharing",
  Product: "https://drive.google.com/file/d/1bBlsodIk2vzkQOINwxSz3Q6Vdral0UlB/view?usp=sharing",
  Finance: "https://drive.google.com/file/d/10UY9Fjct9XGqIJFmZrPNGXN_gxUjIRVf/view?usp=sharing"
};

export const COURSES = {
  "Computer Science": [
    { name: "Computer programming", grade: "A-" }, 
    { name: "Digital Design (DD)", grade: "A-" }, 
    { name: "Data Structures and Algorithms (DSA)", grade: "B" }, 
    { name: "Microprocessors and Interfacing", grade: "A-" }, 
    { name: "Object Oriented Programming (OOP)", grade: "A-" }, 
    { name: "Computer Architecture", grade: "A-" }, 
    { name: "Database Management Systems (DBMS)", grade: "A-" }, 
    { name: "Compiler Construction", grade: "Ongoing" }, 
    { name: "Computer Networks", grade: "Ongoing" }, 
    { name: "Operating Systems", grade: "A-" } 
  ],
  "Economics": [
    { name: "Principles of Economics", grade: "A" }, 
    { name: "Probability and Statistics", grade: "A-" }, 
    { name: "Economic Environment of Business", grade: "A-" }, 
    { name: "Mathematical and Statistical Methods", grade: "A" }, 
    { name: "Money Banking and Financial Markets", grade: "A" }, 
    { name: "Econometric Methods", grade: "B" }, 
    { name: "Public Finance Theory and Policy", grade: "A" }, 
    { name: "Applied Econometrics", grade: "A-" } 
  ],
  "Finance": [
    { name: "Fundamentals of Finance and Accounting", grade: "B" }, 
    { name: "Security Analysis and Portfolio Management", grade: "B" }, 
    { name: "Financial Management", grade: "A" }, 
    { name: "Derivatives and Risk Management", grade: "A" }, 
    { name: "Business Analysis and Asset Valuation", grade: "A" }, 
    { name: "Financial Risk and Asset management", grade: "A" } 
  ]
};

export const SEASONS: Season[] = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Origins & Resilience",
    years: "2004 - 2021",
    description: "Formative school years marked by leadership, national accolades, and the crucible of competitive exams.",
    color: "from-blue-900/40 to-slate-900",
    episodes: [
      { 
        id: 1, 
        title: "Baby Steps", 
        subtitle: "2004 - 2019", 
        description: "Completed schooling from Ryan International School, ICSE in Surat City. Consistent top academic performance in school with a 96.4% in X ICSE board exams. Winner of the National Hindi Debate in the Teen Camp 2018. Actively participated in high-level elocutions and city-state level competitions, honing public speaking and strategic thinking early on. Chess state level player. Medalled in SOF Olympiads. Deputy Prime Minister in School Student Council. Got title of RYAN PRINCE twice.", 
        type: "achievement", 
        duration: "15 Years",
        imageUrl: S1_E1_IMG
      },
      { 
        id: 2, 
        title: "The Turning Point", 
        subtitle: "2019 - 2021", 
        description: "Began with a strong inclination toward Science and Computer Science, developing early exposure to coding and preparing for competitive exams. A combination of personal difficulties, health issues, and the COVID period led to an academic low; however, the experience strengthened my resilience, and I scored 95% in 12th board exams and went on to clear JEE Advanced, albeit without securing my desired branch.", 
        type: "personal", 
        duration: "The Crucible",
        imageUrl: S1_E2_IMG
      },
      { 
        id: 3, 
        title: "Resilience & BITS Goa", 
        subtitle: "2021 - 2022", 
        description: "Opted for a drop year to strengthen my academic standing, but encountered further hurdles, including an accident. Although the outcome wasn’t ideal, securing admission to BITS Goa (M.Sc. Economics) opened a new chapter. I began this phase with humility, renewed drive, and a mindset of having everything to gain and nothing to lose.", 
        type: "personal", 
        duration: "New Horizons",
        imageUrl: S1_E3_IMG
      }
    ]
  },
  {
    id: 2,
    title: "The BITSian Journey",
    subtitle: "Academics & Leadership",
    years: "2022 - 2025",
    description: "The college chapter: from merit scholarships and dual degrees to student senate and strategy consulting.",
    color: "from-red-900/40 to-black",
    episodes: [
      { 
        id: 1, 
        title: "Finding My Footing", 
        subtitle: "2022 - 2023", 
        description: "Experiencing campus life independently for the first time, I explored clubs, student organizations, and campus culture while forming strong connections and learning to navigate life away from home. Alongside this personal growth, I achieved a BITS Merit Scholarship and earned a dual-degree allocation in Computer Science through sustained academic excellence.", 
        type: "academic", 
        duration: "Year 1",
        imageUrl: S2_E1_IMG
      },
      { 
        id: 2, 
        title: "Markets, Meaning, and Making Things", 
        subtitle: "2023 - 2024", 
        description: "As I delved into Economics and Finance, I developed a strong grasp of market dynamics and strategic decision-making, while simultaneously exploring new domains across campus through student organizations, volunteering, project work, and event organization.", 
        type: "academic", 
        duration: "Domain Focus",
        imageUrl: S2_E2_IMG
      },
      { 
        id: 3, 
        title: "Learning while leading", 
        subtitle: "2024", 
        description: "While exploring Computer Science, I simultaneously held two leadership roles, balancing academic depth with responsibilities as a Literary Arts Coordinator and a Coordinator for the AUGSD Students’ Team. During this period, I managed dual-degree course logistics, led student coordination efforts, and executed multiple technical and economics-focused projects, gaining hands-on experience in balancing rigorous academics with organizational leadership.", 
        type: "leadership", 
        duration: "Impact",
        imageUrl: S2_E3_IMG
      },
      { 
        id: 4, 
        title: "From Exploration to Conviction", 
        subtitle: "2024 - 2025", 
        description: "I then entered a phase of intensive focus on high-stakes finance projects and consulting preparation, deliberately bridging engineering-driven analytical rigor with business and strategy-oriented thinking. During this transition toward my final year, I undertook advanced finance coursework, worked on investment and valuation projects, and actively pursued competitive internship applications, sharpening my ability to operate at the intersection of data, decision-making, and execution.", 
        type: "career", 
        duration: "Strategy",
        imageUrl: S2_E4_IMG
      },
      { 
        id: 5, 
        title: "Choosing the Road Ahead", 
        subtitle: "2025", 
        description: "This phase culminated in my appointment as Student Senator, securing the BCG Summer Associate offer, completing my Finance minor, and publishing Creative Space globally. Having consolidated my academic and project experience, I made a deliberate transition toward finance, business, and consulting, closing Season 2 and stepping into the next chapter of my professional journey.", 
        type: "career", 
        duration: "The Finale",
        imageUrl: S2_E5_IMG
      }
    ]
  },
  {
    id: 3,
    title: "The Corporate",
    subtitle: "Professional Debut",
    years: "2026 - Future",
    description: "Stepping into high-impact strategy consulting and professional excellence.",
    color: "from-emerald-900/40 to-black",
    episodes: [
      { 
        id: 1, 
        title: "BCG Intern", 
        subtitle: "Upcoming June 2026", 
        description: "Starting the professional journey with an upcoming internship at Boston Consulting Group, focusing on high-impact strategic advisory and management consulting.", 
        type: "career", 
        date: "Upcoming",
        imageUrl: BCG_LOGO
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  // CAREER / ORIGINALS
  {
    id: 'bcg',
    title: "Upcoming Summer Associate",
    description: "Set to join BCG as a Summer Associate during summer 2026.",
    category: Category.CAREER,
    matchScore: 98,
    tags: ['Consulting', 'Strategy', 'BCG'],
    imageUrl: BCG_LOGO,
    displayMode: 'logo'
  },
  {
    id: 'creative',
    title: "Creative Space (Book)",
    description: "Authored and published the globally listed poetry book \"Creative Space\", recipient of the 21st Century Emily Dickinson Award.\n\nAmazon Link: https://shorturl.at/HQjQx",
    category: Category.CAREER,
    matchScore: 88,
    tags: ['Poetry', 'Publication', 'Award'],
    imageUrl: BOOK_COVER,
    displayMode: 'cover'
  },
  
  // INTERNSHIPS
  {
    id: 'equity-mmf',
    title: "Equity Research Intern",
    description: "Jun 2025 – Jul 2025 | Millennium Money (Mumbai, India) | Remote\n\n• Conducted equity valuation modelling across small- and mid-cap stocks, including IPO performance analysis using valuation frameworks and historical data from Bloomberg and Screener to support clients’ investment decisions.\n\n• Clients’ IPO application returns increased from around 10% to more than 18% following the research-driven analysis.",
    category: Category.FINANCE,
    matchScore: 95,
    tags: ['Finance', 'Equity Research', 'Valuation'],
    imageUrl: MILLENNIUM_LOGO,
    displayMode: 'logo'
  },
  {
    id: 'ml-intern',
    title: "ML Intern",
    description: "May 2024 – Jul 2024 | MobileMSK LLC (Minnesota, U.S.) | Remote\n\n• Built an end-to-end NLP pipeline using GPT-2 for document intelligence, enabling keyword extraction and text analysis for U.S.-based insurance documents, trained on Kaggle datasets using Python and PyTorch.\n\n• Delivered client-facing support for health insurance comparison by enabling automated clause and benefit analysis.",
    category: Category.FINANCE,
    matchScore: 93,
    tags: ['NLP', 'GPT-2', 'Python', 'PyTorch'],
    imageUrl: MOBILE_MSK_LOGO,
    displayMode: 'logo'
  },

  // RESPONSIBILITIES
  {
    id: 'senator',
    title: "Student Senator",
    description: "Student Senator | BITS Pilani Senate | Jul 2025 - Present\n\n• Sole Student Representative from BITS Goa in the University Senate, working alongside Vice-Chancellor and Deans.\n\n• Influenced university-wide curriculum reforms, attendance policies, and thesis regulations, including thesis credit system revisions and formalization of off-campus internships, impacting over 12,000 students across 3 campuses.",
    category: Category.LEADERSHIP,
    matchScore: 94,
    tags: ['Governance', 'Policy', 'Leadership'],
    imageUrl: BITS_LOGO,
    displayMode: 'logo'
  },
  {
    id: 'abhivyakti',
    title: "Abhivyakti",
    description: "Chief Coordinator – Abhivyakti (Literary Arts Club)\nMay 2024 – Apr 2025\n\n• Planned and executed club activities and events for a 60+ member club, organizing workshops, 4 open mics, more than 10 public jams, and two large-scale original auditorium productions attended by more than 1,000people.",
    category: Category.EXTRACURRICULAR,
    matchScore: 95,
    tags: ['Literary', 'Arts', 'Music'],
    imageUrl: ABHIVYAKTI_LOGO,
    displayMode: 'logo'
  },
  {
    id: 'augsd',
    title: "Coordinator",
    description: "Coordinator | AUGSD Students’ Team | July 2024 – Sep 2025\n\n• Led a 16-member team under Academic Dean managing campus-wide academic grievances for over 5,000 students.\n\n• Improved academic operations by resolving 4,000+ campus-wide queries, helping optimise seat allocations and timetable clashes, and reducing response time from over a week to within one day, lowering administrative overhead.",
    category: Category.LEADERSHIP,
    matchScore: 92,
    tags: ['Admin', 'Leadership', 'Operations'],
    imageUrl: AUGSD_LOGO,
    displayMode: 'logo'
  },
  {
    id: 'deputy_pm',
    title: "Deputy Prime Minister",
    description: "Deputy Prime Minister | Ryan Students' Council | 2017 – 2018\n\n• Led student initiatives, organized impactful events, and played a key role in decision-making to enhance student life and welfare.\n\n• Represented the student body in administrative meetings and championed initiatives for overall student excellence.",
    category: Category.LEADERSHIP,
    matchScore: 85,
    tags: ['Council', 'Leadership', 'Governance'],
    imageUrl: DEPUTY_PM_LOGO,
    displayMode: 'logo'
  },

  // FINANCE PROJECTS
  {
    id: 'fin-power',
    title: "Power Industry",
    description: "Power Industry | Jun 2025 – Jul 2025\n\n• Conducted comprehensive industry and company analysis of Tata Power, AdaniPower, andTorrent Power using BCG Matrix, PESTEL, SWOT, Porter’s Five Forces, competitive benchmarking, and value chain analysis.\n\n• Built end-to-end valuation models including financial ratio analysis, WACC, DCF valuation, and three relative valuation methods, concluding on valuation and deriving investor-oriented insights to guide buy/sell positioning.\n\nLink: https://drive.google.com/drive/u/0/folders/1Tk-5ESU2-oaUE5NGBn4fvjFbVJBJiir2?ths=true",
    category: Category.FINANCE,
    matchScore: 96,
    tags: ['DCF', 'Valuation', 'Strategy'],
    displayMode: 'logo'
  },
  {
    id: 'fin-risk',
    title: "Financial Risk Analysis & Corporate Finance",
    description: "Financial Risk Analysis & Corporate Finance | Aug 2025 – Nov 2025\n\n• Developed a portfolio risk management framework using historical simulation to estimate VaR and Expected Shortfall, applied Sharpe ratio optimization, Greeks, and backtesting to assess risk-adjusted performance.\n\n• Performed end-to-end corporate finance analysis for Tata Motors, including beta estimation, peer benchmarking, GARCH-based robustness testing, WACC and NPV-based investment evaluation with sensitivity analysis.\n\nLink: https://drive.google.com/drive/u/0/folders/1IS6VRsP74FBrl3xgJXcvj0h7mhPFXsuk?ths=true",
    category: Category.FINANCE,
    matchScore: 93,
    tags: ['VaR', 'Portfolio', 'Risk'],
    displayMode: 'logo'
  },
  {
    id: 'fin-equity-opt',
    title: "Equity Analysis and Portfolio Optimization",
    description: "Equity Analysis and Portfolio Optimization | Dec 2023 – Apr 2024\n\n• Conducted fundamental and technical analysis of 10 equities using fundamental metrics and trend indicators.\n\n• Designed, tested, and evaluated portfolio allocation strategies using risk–return diagnostics, Efficient Frontier modeling, and diversification principles to optimize risk-adjusted returns across multiple market scenarios.\n\nLink: https://drive.google.com/drive/u/0/folders/1mlnz7pTLnkEeEAVTT3OgJGGGuiCpYQ0D?ths=true",
    category: Category.FINANCE,
    matchScore: 91,
    tags: ['Efficient Frontier', 'Portfolio'],
    displayMode: 'logo'
  },
  {
    id: 'fin-nykaa',
    title: "Nykaa IPO Analysis",
    description: "Sep 2023 – Dec 2023\n\nConducted a comprehensive analysis of Nykaa’s IPO and post-listing market performance, evaluating valuation metrics, investor sentiment, and strategic positioning to assess IPO timing effectiveness and draw actionable comparisons for investment decision-making.",
    category: Category.FINANCE,
    matchScore: 88,
    tags: ['IPO', 'Nykaa', 'Valuation'],
    displayMode: 'logo'
  },

  // ECONOMICS PROJECTS
  {
    id: 'eco-inclusion',
    title: "Development Economics",
    description: "Jan 2025 - Present\n\n• Analyzed the impact of public policies on India’s financial inclusion post-liberalization, identifying key trends and structural gaps.\n\n• Preparing a research paper on India’s financial inclusion and benchmarking credit access and other metrics across BRICS economies.",
    category: Category.ECONOMICS,
    matchScore: 95,
    tags: ['Development', 'Policy', 'Research'],
    displayMode: 'logo'
  },
  {
    id: 'eco-carbon',
    title: "Replicated Study",
    description: "Jan 2025 - Apr 2025\n\nIndependently replicated a published econometric research paper across a new multi-country dataset, developing original statistical models and methodology, and performing regression analysis in Stata to validate and extend the paper’s findings for the new dataset.",
    category: Category.ECONOMICS,
    matchScore: 92,
    tags: ['Econometrics', 'Stata', 'Regression'],
    displayMode: 'logo'
  },
  {
    id: 'eco-tariff',
    title: "International Economics",
    description: "Aug 2024 - Dec 2024\n\nAnalyzed Indian government’s policy of increasing Basic Customs Duty (BCD) on pulse imports, using economic models, graphical analysis to assess market impact, trade trends; evaluated policy, international trends, and proposed data-backed recommendations.",
    category: Category.ECONOMICS,
    matchScore: 90,
    tags: ['Trade', 'Tariffs', 'Policy'],
    displayMode: 'logo'
  },
  {
    id: 'eco-land',
    title: "Land Economy",
    description: "Aug 2024 - Dec 2024\n\nAnalyzed land barriers to economic development in India using policy evaluation and empirical data to propose scalable solutions.",
    category: Category.ECONOMICS,
    matchScore: 91,
    tags: ['Policy', 'Land', 'Research'],
    displayMode: 'logo'
  },

  // TECHNICAL PROJECTS
  {
    id: 'tech-fault',
    title: "Fault Tolerant Systems",
    description: "Dec 2024 - Dec 2025\n\n• Developed a real-time scheduling simulator to benchmark scheduling algorithms (e.g., CCEDF, LAEDF) under mixed-criticality workloads, reducing deadline misses and improving worst-case response time (WCRT) predictability for high-criticality tasks.\n\n• Optimised the core scheduler using Pillai-Shin real time analysis enabling power savings via dynamic power management (DPM).",
    category: Category.TECHNICAL,
    matchScore: 97,
    tags: ['OS', 'Real-time', 'Scheduling'],
    displayMode: 'logo'
  },
  {
    id: 'tech-os',
    title: "OS Design - PintOS",
    description: "Aug 2025 - Dec 2025\n\nBuilt and extended core Operating Systems functionality in PintOS, implementing bootloader execution, thread scheduling policies, virtual memory management, concurrency control mechanisms, with deadlock-free synchronization and efficient context switching.",
    category: Category.TECHNICAL,
    matchScore: 95,
    tags: ['C', 'Kernels', 'PintOS'],
    displayMode: 'logo'
  },
  {
    id: 'tech-foodscout',
    title: "FoodScout System",
    description: "Aug 2024 - Dec 2024\n\nDesigned and developed a food delivery management system using Object-Oriented Programming (OOP) principles, implementing class hierarchies, object encapsulation and a modular, extensible architecture to manage users, orders, payments, and othe logistics.",
    category: Category.TECHNICAL,
    matchScore: 93,
    tags: ['OOP', 'Web Dev', 'Java'],
    displayMode: 'logo'
  },
  {
    id: 'tech-bpgcnews',
    title: "BPGC News Platform",
    description: "Jan 2025 - Apr 2025\n\nDeveloped a secure, full-stack news platform, implementing role based access control (RBAC), robust user authentication protected routing mechanisms to safeguard content access, ensure data integrity, and support maintainable frontend and backend integration.",
    category: Category.TECHNICAL,
    matchScore: 94,
    tags: ['Full Stack', 'Security', 'RBAC'],
    displayMode: 'logo'
  },

  // TEACHING ASSISTANTSHIPS
  {
    id: 'ta-bav',
    title: "Teaching Assistant",
    description: "Assisted in academic management for over 200 undergraduate students through course delivery, invigilation, and technical project mentorship.",
    category: Category.EXTRACURRICULAR,
    matchScore: 92,
    tags: ['TAship', 'Finance', 'Valuation'],
    imageUrl: TA_BAV_IMG,
    displayMode: 'cover'
  },
  {
    id: 'ta-oop',
    title: "Course Mentor",
    description: "Mentored over 300 students, designing comprehensive lab exercises and hosting bootcamps ensuring smooth academic delivery.",
    category: Category.EXTRACURRICULAR,
    matchScore: 94,
    tags: ['Mentor', 'OOP', 'CS'],
    imageUrl: TA_OOP_IMG,
    displayMode: 'cover'
  },
  {
    id: 'ta-pom',
    title: "Teaching Assistant",
    description: "Assisted in academic management for over 200 undergraduate students through course delivery, invigilation, and technical project mentorship.",
    category: Category.EXTRACURRICULAR,
    matchScore: 90,
    tags: ['TAship', 'Management', 'Academic'],
    imageUrl: TA_POM_IMG,
    displayMode: 'cover'
  },
  {
    id: 'ta-micro',
    title: "Teaching Assistant",
    description: "Mentored over 300 students, designing comprehensive lab exercises and hosting bootcamps ensuring smooth academic delivery.",
    category: Category.EXTRACURRICULAR,
    matchScore: 94,
    tags: ['TAship', 'Microprocessors', 'CS'],
    imageUrl: TA_MICRO_IMG,
    displayMode: 'cover'
  },

  // CLUBS & DEPARTMENTS
  {
    id: 'bitsmun',
    title: "BITSMUN",
    description: "No. of Years Active: 2\n\nBITS Model United Nations. Procedural excellence and diplomatic simulation.",
    category: Category.EXTRACURRICULAR,
    matchScore: 88,
    tags: ['MUN', 'Leadership', 'Diplomacy'],
    displayMode: 'logo'
  },
  {
    id: 'cel',
    title: "CEL",
    description: "No. of Years Active: 2\n\nCentre For Entrepreneurship and Leadership. Supporting campus startup culture.",
    category: Category.EXTRACURRICULAR,
    matchScore: 91,
    tags: ['Entrepreneurship', 'Leadership', 'Strategy'],
    displayMode: 'logo'
  },
  {
    id: 'depp',
    title: "DEPP",
    description: "No. of Years Active: 1\n\nDepartment Of Publicity and PR. High-impact campus visibility campaigns.",
    category: Category.EXTRACURRICULAR,
    matchScore: 87,
    tags: ['PR', 'Publicity', 'Communications'],
    displayMode: 'logo'
  },
  {
    id: 'dofam',
    title: "DoFAM",
    description: "No. of Years Active: 1\n\nDepartment of Finance and Management. Financial planning and budget oversight.",
    category: Category.EXTRACURRICULAR,
    matchScore: 93,
    tags: ['Finance', 'Management', 'Operations'],
    displayMode: 'logo'
  },
  {
    id: 'quark',
    title: "Quark",
    description: "No. of Years Active: 2\n\nTech Fest Controls Team. Core controls team for campus tech fest.",
    category: Category.EXTRACURRICULAR,
    matchScore: 89,
    tags: ['Tech Fest', 'Controls', 'Logistics'],
    displayMode: 'logo'
  },

  // COMPETITIONS
  {
    id: 'hackenza',
    title: "Hackathon - Hackenza",
    description: "1) Developed a dashboard to visualize and analyze key metrics from PCAPNG files, enabling interpretation of complex network traffic.\n\n2) Earned a Special Mention and was later recognized as a faculty-mentored project due to its quality and real-world applicability.",
    category: Category.EXTRACURRICULAR,
    matchScore: 95,
    tags: ['Hackathon', 'Security', 'Python'],
    imageUrl: HACKATHON_SCREENSHOT,
    displayMode: 'cover'
  },
  {
    id: 'hindi-debate',
    title: "National Hindi Debate Champion",
    description: "National Recognition | Ryan Teen Camp | Dec 2018\n\n• Exceptional oratory skills and critical thinking.",
    category: Category.EXTRACURRICULAR,
    matchScore: 89,
    tags: ['Debate', 'Award', 'National'],
    imageUrl: DEBATE_SCREENSHOT,
    displayMode: 'cover'
  },
  {
    id: 'chess-early',
    title: "State & District Chess Player",
    description: "Early School Days\n\nCompeted at state and district levels, demonstrating strategic thinking and perseverance from a very young age.",
    category: Category.EXTRACURRICULAR,
    matchScore: 86,
    tags: ['Chess', 'Strategy', 'Early Years'],
    imageUrl: CHESS_SCREENSHOT,
    displayMode: 'cover'
  },

  // OTHER
  {
    id: 'ryan-prince',
    title: "Ryan Prince Accolade",
    description: "School Accolades | Ryan International School | Feb 2019\n\n• Honored as \"Ryan Prince\" for two consecutive years.",
    category: Category.EXTRACURRICULAR,
    matchScore: 85,
    tags: ['Award', 'Leadership', 'School'],
    displayMode: 'logo'
  },
  {
    id: 'peer-mentor',
    title: "Peer Mentorship Program",
    description: "Volunteered as a peer mentor for 50+ juniors and provided all necessary guidance.",
    category: Category.EXTRACURRICULAR,
    matchScore: 88,
    tags: ['Mentoring', 'Volunteering', 'Education'],
    imageUrl: PEER_MENTOR_IMG,
    displayMode: 'cover'
  },
  {
    id: 'library-team',
    title: "Library Students Team",
    description: "Managed Library Book Bank operations to streamline book issuance and returns for a book bank managing books for over 200 course on campus.",
    category: Category.EXTRACURRICULAR,
    matchScore: 84,
    tags: ['Admin', 'Volunteering', 'Operations'],
    imageUrl: LIBRARY_TEAM_IMG,
    displayMode: 'cover'
  }
];

export const INITIAL_PARAMETERS: Parameter[] = [
  { id: 'risk', label: 'Risk Appetite', value: 70, leftLabel: 'Conservative', rightLabel: 'Bold' },
  { id: 'style', label: 'Work Style', value: 60, leftLabel: 'Ambiguous', rightLabel: 'Structured' },
  { id: 'horizon', label: 'Time Horizon', value: 80, leftLabel: 'Short-term', rightLabel: 'Long-term' },
  { id: 'dynamics', label: 'Team Dynamics', value: 75, leftLabel: 'Solo', rightLabel: 'Collaborative' }
];

export const TECH_STACK = ['React', 'TypeScript', 'Tailwind', 'Python', 'PyTorch', 'Stata', 'Bloomberg Terminal'];
