import { Education, ResearchExperience, WorkExperience, Project, Certification, SkillCategory, DomainItem, TimelineMilestone, EventHackathon } from '../types';

export const PERSONAL_INFO = {
  name: "Soham Khan",
  title: "3rd Year B.Tech ECE Student @ IEM Saltlake",
  subTitle: "AI & Embedded Systems Enthusiast | RF • VLSI • Circuit Design",
  positioning: "Building Next-Generation Wireless & Integrated Circuit Solutions",
  email: "Soham.khan.dgp@gmail.com",
  phone: "+91 9933637166",
  location: "Durgapur, West Bengal, India",
  linkedinUrl: "https://www.linkedin.com/in/soham-khan-53114327a",
  devfolioUrl: "https://devfolio.co/@SOHAMKHAN11",
  githubUrl: "https://github.com/Soham-technovation",
  twitterUrl: "https://x.com/Soham_eleven",
  resumePdfUrl: "/resume.pdf",
  profileImageUrl: "/soham_profile.jpg",
  objective: "Electronics and Communication Engineering undergraduate with a strong foundation in circuit design, RF engineering, and embedded systems. Aspiring to build a career in RF technologies integrated with VLSI and semiconductor systems, leveraging research, innovation, and engineering expertise to develop next-generation wireless and integrated circuit solutions.",
  heroHeadline: "SOHAM KHAN",
  heroSubheadline: "3rd Year B.Tech ECE Student @ IEM Saltlake | AI & Embedded Systems Enthusiast | RF • VLSI • Circuit Design | Building Next-Gen Circuit Solutions",
  heroText: "Electronics & Communication Engineering undergraduate at IEM Salt Lake with a strong foundation in circuit design, RF engineering, semiconductor devices, and embedded systems.",
};

export const EDUCATION_LIST: Education[] = [
  {
    institution: "Institute of Engineering and Management, Salt Lake",
    degree: "Bachelor of Technology - BTech, Electronics and Communications Engineering",
    location: "Kolkata, India",
    period: "Jul 2024 - Jun 2028",
    gpa: "7.88",
    details: "Specializing in Circuit Design, RF Engineering, Embedded Systems, Semiconductor Devices & VLSI Fundamentals."
  },
  {
    institution: "Hem Sheela Model School",
    degree: "Senior Secondary, Science (PCMB)",
    location: "Durgapur, India",
    period: "Apr 2019 - May 2023",
    details: "Physics, Chemistry, Mathematics, and Biology foundation."
  }
];

export const RESEARCH_EXPERIENCE: ResearchExperience = {
  title: "AI-Based Environmental Sensing & RF Engineering Lead",
  organization: "ISRO Bharatiya Antariksh Hackathon & IEM Research",
  location: "Kolkata, India",
  period: "May 2026 - Jul 2026",
  projectTopic: "High-Resolution Surface AQI Prediction & HCHO Hotspot Identification",
  highlights: [
    "Built an AI-powered framework for high-resolution AQI prediction and HCHO hotspot identification using multi-source satellite data.",
    "Developed a CNN–LSTM with Attention model integrating INSAT-3D, Sentinel-5P, CPCB, MODIS, and ERA5 datasets for spatiotemporal environmental analysis.",
    "Engaged in electromagnetic circuit design, antenna simulations in CST Studio Suite, and signal processing."
  ],
  pipelineSteps: [
    {
      step: "Satellite Data Ingestion",
      description: "Multi-source retrieval from INSAT-3D, Sentinel-5P, CPCB, MODIS, ERA5",
      icon: "Radio"
    },
    {
      step: "Spatiotemporal Processing",
      description: "Data cleaning, missing value interpolation & spatial alignment",
      icon: "Activity"
    },
    {
      step: "CNN-LSTM Attention",
      description: "Integrated deep learning model for atmospheric hotspot prediction",
      icon: "Target"
    },
    {
      step: "Hardware & RF Design",
      description: "Electromagnetic simulations, circuit prototyping & sensor interfacing",
      icon: "Cpu"
    },
    {
      step: "Interactive Deployment",
      description: "Google Earth Engine and Streamlit dashboard interface",
      icon: "HeartPulse"
    }
  ],
  techStack: ["Python", "TensorFlow", "Google Earth Engine", "Streamlit", "CST Studio Suite", "LTSpice", "Altium Designer"]
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    role: "Operational Lead",
    organization: "IEEE IEM SB SIGHT Group",
    period: "May 2026 – Present",
    employmentType: "Full-time",
    location: "Salt Lake, Kolkata",
    workMode: "On-site",
    isCurrent: true,
    linkedInUrl: "https://www.linkedin.com/in/soham-khan-53114327a",
    highlights: [],
    keywords: ["Operations Management"]
  },
  {
    role: "Sanchar Mitra (Internship)",
    organization: "Department of Telecommunications ( DOT )",
    period: "Sep 2025 - Present",
    location: "Kolkata & WB LSA, India",
    highlights: [
      "Telecom awareness & outreach, cybersecurity awareness, and community engagement.",
      "Developed skills in telecom fraud prevention, mobile security, and cybersecurity awareness.",
      "Gained experience in grassroots outreach and community engagement by working with local communities, NGOs, WB LSA and authorities.",
      "Enhanced coordination and report-building skills for addressing telecom-related issues."
    ],
    keywords: ["Telecom Outreach", "Cybersecurity Awareness", "Mobile Security", "Telecom Fraud Prevention", "Grassroots Engagement", "Report Building"]
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "aqi-satellite-ai",
    title: "AI-Based Surface AQI & HCHO Hotspot Identification using Satellite Data",
    eventOrContext: "ISRO Bharatiya Antariksh Hackathon 2026",
    period: "May 2026 - Jul 2026",
    summary: "Built an AI-powered framework for high-resolution AQI prediction and HCHO hotspot identification using multi-source satellite data.",
    highlights: [
      "Built an AI-powered framework for high-resolution AQI prediction and HCHO hotspot identification using multi-source satellite data.",
      "Developed a CNN–LSTM with Attention model integrating INSAT-3D, Sentinel-5P, CPCB, MODIS, and ERA5 datasets for spatiotemporal environmental analysis."
    ],
    techStack: ["Python", "TensorFlow", "Google Earth Engine", "Streamlit", "GitHub", "CNN-LSTM Attention", "INSAT-3D", "Sentinel-5P", "MODIS", "ERA5"],
    githubUrl: "https://devfolio.co/@SOHAMKHAN11",
    demoUrl: "https://devfolio.co/@SOHAMKHAN11",
    category: "AI & Environmental",
    pipeline: [
      { title: "Satellite Ingestion", desc: "INSAT-3D, Sentinel-5P, CPCB, MODIS, ERA5 datasets" },
      { title: "Data Preprocessing", desc: "Spatiotemporal alignment in Google Earth Engine" },
      { title: "CNN-LSTM Attention", desc: "Spatial & temporal sequence feature extraction" },
      { title: "Prediction Engine", desc: "High-resolution air quality and chemical hotspot forecasting" },
      { title: "Geospatial Dashboard", desc: "Interactive Streamlit environmental map" }
    ]
  },
  {
    id: "soil-health-ai",
    title: "AI Powered Soil Health Monitoring System",
    eventOrContext: "Google Solution Challenge 2025",
    period: "Dec 2024 - Feb 2025",
    summary: "Engineered an intelligent predictive machine learning solution for soil health monitoring and forecasting.",
    highlights: [
      "Achieved a 96% accuracy rate in forecasting performance by developing and deploying a machine learning model.",
      "Managed data integrity by handling missing values and encoding categorical variables, enhancing data quality by 33%.",
      "Conducted experiments with both classification and regression algorithms to identify the most suitable approach."
    ],
    techStack: ["Python", "TensorFlow", "Machine Learning", "Classification & Regression", "Data Preprocessing"],
    githubUrl: "https://devfolio.co/@SOHAMKHAN11",
    demoUrl: "https://devfolio.co/@SOHAMKHAN11",
    category: "AI & Environmental",
    pipeline: [
      { title: "Data Ingestion", desc: "Soil parameters & environmental dataset feeds" },
      { title: "Data Cleaning", desc: "Handled missing data & boosted data quality by 33%" },
      { title: "ML Architecture", desc: "Classification & regression algorithms (96% accuracy)" },
      { title: "Report Generation", desc: "Generates actionable soil health insights" }
    ]
  },
  {
    id: "arduino-gate-counter",
    title: "Bi-Directional Gate Counter using Arduino UNO",
    eventOrContext: "Hardware & Embedded Systems Project",
    period: "Jul 2024 - Sep 2024",
    summary: "Developed a bi-directional visitor counter system using Arduino Uno and IR sensors to track people entering and exiting a space.",
    highlights: [
      "Developed a bi-directional visitor counter system using Arduino Uno and IR sensors to track people entering and exiting a space.",
      "Designed and programmed the system in Embedded C/Arduino IDE, optimizing sensor accuracy and response time.",
      "Demonstrated applications in classrooms, offices, and public halls for efficient resource utilization, crowd management, and energy savings (e.g., automating lights/fans based on occupancy)."
    ],
    techStack: ["Arduino UNO", "Embedded C", "Arduino IDE", "IR Sensors", "Hardware Interfacing", "Occupancy Relay"],
    githubUrl: "https://devfolio.co/@SOHAMKHAN11",
    category: "Embedded Systems",
    pipeline: [
      { title: "Dual IR Sensors", desc: "Beam-break detection for sequential entry and exit" },
      { title: "Arduino UNO MCU", desc: "Real-time state machine filtering sensor noise" },
      { title: "Occupancy Counter", desc: "Increment / decrement digital count in real time" },
      { title: "Relay Power Control", desc: "Automates room power management based on count" }
    ]
  }
];

export const DOMAINS_LIST: DomainItem[] = [
  {
    title: "RF & Microwave Engineering",
    subtitle: "CST Studio Suite, ANSYS HFSS, Altium & Electromagnetic Simulation",
    items: [
      "CST Studio Suite",
      "ANSYS HFSS",
      "Electromagnetic Simulation",
      "Circuit Design",
      "RF Engineering"
    ],
    icon: "Radio",
    color: "from-cyan-500/20 to-blue-600/20"
  },
  {
    title: "Embedded Systems & Hardware",
    subtitle: "Microcontrollers, Sensors, PCB Design & Altium Designer",
    items: [
      "Arduino IDE",
      "Embedded C / Python",
      "Altium Designer (PCB)",
      "Sensor Interfacing",
      "Hardware Interfacing"
    ],
    icon: "Cpu",
    color: "from-blue-500/20 to-indigo-600/20"
  },
  {
    title: "Semiconductor & VLSI Fundamentals",
    subtitle: "Solid-state device physics, integrated circuits & IISc Bangalore Certified",
    items: [
      "Semiconductor Devices",
      "VLSI Fundamentals",
      "NPTEL IISc Bangalore Certified",
      "Circuit Simulation (LTSpice)"
    ],
    icon: "Layers",
    color: "from-indigo-500/20 to-violet-600/20"
  },
  {
    title: "Design & Simulation Toolchain",
    subtitle: "MATLAB, Simulink, LTSpice, Altium Designer & PyCharm",
    items: [
      "MATLAB & Simulink",
      "LTSpice Simulation",
      "Altium Designer",
      "Visual Studio Code / PyCharm",
      "Experimental Analysis"
    ],
    icon: "Wrench",
    color: "from-amber-500/20 to-cyan-600/20"
  },
  {
    title: "AI & Data Analytics",
    subtitle: "TensorFlow, Google Earth Engine, Streamlit & Machine Learning",
    items: [
      "Python / TensorFlow",
      "Google Earth Engine",
      "Streamlit App Development",
      "Data Analytics & ML",
      "Classification & Regression"
    ],
    icon: "BrainCircuit",
    color: "from-cyan-500/20 to-emerald-600/20"
  },
  {
    title: "Professional Skills & Outreach",
    subtitle: "Sanchar Mitra (DoT), Technical Documentation & Report Writing",
    items: [
      "Technical Documentation",
      "Experimental Analysis",
      "Technical Report Writing",
      "Telecom Fraud Prevention",
      "Community Engagement"
    ],
    icon: "Code2",
    color: "from-slate-500/20 to-cyan-600/20"
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    categoryName: "Programming & Development",
    skills: ["Python", "C", "APIs", "Arduino IDE", "Java"],
    icon: "Terminal"
  },
  {
    categoryName: "Domain Knowledge",
    skills: [
      "RF Engineering",
      "Embedded Systems",
      "PCB Design",
      "Circuit Design",
      "Electromagnetic Simulation",
      "Semiconductor Devices & VLSI Fundamentals"
    ],
    icon: "Zap"
  },
  {
    categoryName: "Design & Simulation Tools",
    skills: [
      "Altium Designer",
      "LTSpice",
      "MATLAB",
      "Simulink",
      "CST Studio Suite",
      "ANSYS HFSS"
    ],
    icon: "Sliders"
  },
  {
    categoryName: "Platforms & Professional Skills",
    skills: [
      "PyCharm",
      "Jupyter Notebook",
      "Visual Studio Code",
      "Technical Documentation",
      "Experimental Analysis",
      "Technical Report Writing"
    ],
    icon: "FileCheck"
  }
];

export const CERTIFICATIONS_LIST: Certification[] = [
  {
    title: "Fundamentals of Semiconductor Devices",
    issuer: "NPTEL, IISc Bangalore (April 2026) — [MAJOR CERTIFICATION]",
    date: "April 2026",
    verificationUrl: "https://devfolio.co/@SOHAMKHAN11"
  },
  {
    title: "Internet of Things and AI Cloud Specialization",
    issuer: "University of California San Diego",
    date: "October 2025",
    verificationUrl: "https://devfolio.co/@SOHAMKHAN11"
  },
  {
    title: "McKinsey.org Forward Program",
    issuer: "Issued by McKinsey & Company",
    date: "July 2025",
    verificationUrl: "https://devfolio.co/@SOHAMKHAN11"
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "March 2025",
    verificationUrl: "https://devfolio.co/@SOHAMKHAN11"
  },
  {
    title: "Programming with Generative AI",
    issuer: "IIT Guwahati",
    date: "December 2024",
    verificationUrl: "https://devfolio.co/@SOHAMKHAN11"
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "October 2024",
    verificationUrl: "https://devfolio.co/@SOHAMKHAN11"
  },
  {
    title: "Build Real World AI Applications with Gemini and Imagen Skill Badge",
    issuer: "Google Cloud / Google AI",
    date: "2026",
    verificationUrl: "https://devfolio.co/@SOHAMKHAN11"
  }
];

export const EVENTS_HACKATHONS: EventHackathon[] = [
  {
    title: "Build with AI Bootcamp – Kolkata",
    organization: "GDG TIU",
    date: "August 2026",
    location: "Kolkata, India",
    roleOrAchievement: "Participant & AI Bootcamp Attendee",
    description: "Hands-on bootcamp focusing on Google Cloud AI, Generative AI APIs, and developer toolchains.",
    tag: "GDG TIU"
  },
  {
    title: "Running Local AI Models on Android and iOS",
    organization: "GDG IEM KOLKATA",
    date: "August 2026",
    location: "Kolkata, India",
    roleOrAchievement: "On-Device AI Workshop",
    description: "Hands-on workshop exploring local quantized SLM and ML model inference on mobile platforms.",
    tag: "GDG IEM KOLKATA"
  },
  {
    title: "HACKSTORM WINNER",
    organization: "ECE DEPARTMENT, IEM SALTLAKE KOLKATA",
    date: "May 2026",
    location: "Kolkata, India",
    roleOrAchievement: "1st Place Winner",
    description: "Won 1st prize in the departmental hackathon for designing an innovative embedded system & circuit prototype.",
    tag: "Winner / 1st Place"
  },
  {
    title: "Stellar Bootcamp Day – Kolkata",
    organization: "RiseIn × GDG IEM Kolkata",
    date: "April 2026",
    location: "Kolkata, India",
    roleOrAchievement: "Participant & Bootcamp Attendee",
    description: "Developer bootcamp on Web3 infrastructure, decentralized networks, and smart contract architectures.",
    tag: "GDG IEM / RiseIn"
  },
  {
    title: "Recognised as a Sanchar Mitra",
    organization: "Department of Telecommunications ( DOT ), Govt. of India",
    date: "15th October 2025",
    location: "Kolkata & WB LSA, India",
    roleOrAchievement: "Official Recognition",
    description: "Formally recognized by DoT for outreach in telecom fraud prevention, mobile security, and community cyber safety.",
    tag: "DoT Govt. Honor"
  },
  {
    title: "PHYCATHON WINNER",
    organization: "BSH DEPARTMENT, IEM SALTLAKE KOLKATA",
    date: "February 2025",
    location: "Kolkata, India",
    roleOrAchievement: "1st Place Winner",
    description: "Secured 1st Place in the Basic Sciences & Humanities Phycathon for physics-based technical innovation.",
    tag: "Winner / 1st Place"
  },
  {
    title: "GOOGLE SOLUTION CHALLENGE - Hackathon",
    organization: "GDG HERITAGE KOLKATA",
    date: "August 2024",
    location: "Kolkata, India",
    roleOrAchievement: "Hackathon Participant",
    description: "Developed AI-backed agricultural monitoring & soil health prediction solutions using Google Cloud technologies.",
    tag: "Google Solution Challenge"
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2026",
    period: "August 2026",
    title: "Build with AI Bootcamp & Running Local AI Models",
    type: "Project",
    description: "Participated in GDG TIU & GDG IEM Kolkata workshops on on-device ML on Android/iOS and Google AI.",
    tag: "GDG TIU / IEM"
  },
  {
    year: "2026",
    period: "May 2026",
    title: "HACKSTORM WINNER — ECE Dept, IEM Saltlake",
    type: "Project",
    description: "Secured 1st Place Winner in HACKSTORM hardware & circuit design hackathon.",
    tag: "Hackathon Winner"
  },
  {
    year: "2026",
    period: "April 2026",
    title: "Stellar Bootcamp Day - KOLKATA by Rise & GDG IEM",
    type: "Project",
    description: "Developer bootcamp focusing on Web3 architectures and decentralized developer toolchains.",
    tag: "Bootcamp"
  },
  {
    year: "2025",
    period: "15th Oct 2025",
    title: "Recognised as a Sanchar Mitra by DoT (Govt. of India)",
    type: "Experience",
    description: "Honored by Department of Telecommunications for telecom security, cyber fraud prevention, and community awareness.",
    tag: "Sanchar Mitra"
  },
  {
    year: "2025",
    period: "February 2025",
    title: "PHYCATHON WINNER — BSH Dept, IEM Saltlake",
    type: "Project",
    description: "Won 1st prize in the Physics & Applied Sciences hackathon for scientific hardware prototyping.",
    tag: "Hackathon Winner"
  },
  {
    year: "2024",
    period: "August 2024",
    title: "GOOGLE SOLUTION CHALLENGE — GDG Heritage Kolkata",
    type: "Project",
    description: "Engineered predictive AI soil health monitoring system aligning with UN SDGs.",
    tag: "Google Hackathon"
  },
  {
    year: "2024",
    period: "Jul 2024 - Jun 2028",
    title: "Institute of Engineering and Management, Salt Lake",
    type: "Education",
    description: "Bachelor of Technology in Electronics and Communications Engineering (GPA: 7.88). Focus on RF, VLSI, Embedded Systems and Circuit Design.",
    tag: "IEM Salt Lake"
  }
];

export const CURRENTLY_EXPLORING = [
  {
    title: "Semiconductor Devices & VLSI Fundamentals",
    description: "Solid-state device physics, IC fabrication, and advanced semiconductor concepts certified by IISc Bangalore.",
    icon: "Layers"
  },
  {
    title: "RF Engineering & Antenna Design",
    description: "Electromagnetic modeling, microstrip patch antennas, ANSYS HFSS, and CST Studio Suite simulations.",
    icon: "Radio"
  },
  {
    title: "Embedded Systems & Altium PCB Design",
    description: "Microcontrollers, sensor hardware interfacing, Embedded C, and Altium Designer PCB layout.",
    icon: "Cpu"
  },
  {
    title: "AI & Satellite Remote Sensing Data",
    description: "Deep learning models (CNN-LSTM), Google Earth Engine, Streamlit, and environmental monitoring.",
    icon: "BrainCircuit"
  },
  {
    title: "Telecom Security & Fraud Outreach",
    description: "Department of Telecommunications (DOT) Sanchar Mitra initiative, mobile security, and community outreach.",
    icon: "Radar"
  }
];
