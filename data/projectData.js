export const projectsData = [
  {
    "id": "haseri",
    "title": "Haseri — Local Technician Finder Platform",
    "category": "Web-Based Local Technician Finder",
    "shortDescription": "A verified service marketplace connecting customers with trusted technicians for secure hiring and streamlined service delivery.",
    "problem": "In Ethiopia, finding reliable technicians is often unstructured and inefficient. People depend on Telegram groups, social media, or word-of-mouth, which leads to lack of trust, no verification, and poor accountability. At the same time, skilled workers struggle to find consistent and visible job opportunities.",
    "solution": "I built Haseri as a unified platform where customers can post jobs, hire verified technicians, communicate in real-time, and make secure payments. Technicians can build professional profiles, get verified, apply for jobs, and earn reputation through reviews.",
    "role": "Full-stack Developer",
    "techStack": ["Next.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
    "keyFeatures": [
      "Job posting and technician hiring system",
      "Verified technician profiles with ratings and reviews",
      "Real-time chat between users",
      "Secure payments via Chapa",
      "Admin dashboard for user and job management",
      "Document-based technician verification"
    ],
    "challenge": "One major challenge was building a trustworthy verification system. I solved this by implementing an admin approval workflow where technicians submit IDs and certificates for validation before getting verified badges.",
    "outcome": "The platform improves trust and efficiency in hiring local technicians by centralizing services, reducing reliance on informal channels, and introducing structured job management and verification.",
    "github": "https://github.com/Leta-Kasahun/haseri",
    "image": "haseri.png",
    "caseStudyLink": "/projects/haseri"
  },
  {
    "id": "etworks",
    "title": "Etworks — Job Site Marketplace Platform",
    "category": "Web-Based Job Portal & HR Tech",
    "shortDescription": "An intelligent job portal enabling secure recruitment, AI-powered candidate matching, and structured hiring workflows."
    ,
    "problem": "Traditional job searching platforms often suffer from fragmented workflows, limited verification, and lack of structured communication between employers and job seekers. This leads to inefficient hiring processes and poor candidate matching.",
    "solution": "The system provides a centralized job portal where users can register, manage profiles, post and apply for jobs, and track applications. It also includes admin verification, CV building tools, payment processing, and AI-powered job assistance to improve hiring efficiency.",
    "role": "Backend & Database Developer",
    "techStack": ["Spring Boot", "Java", "PostgreSQL", "React", "Tailwind CSS"],
    "keyFeatures": [
      "Secure authentication (JWT, OTP, OAuth2, role-based access)",
      "Job posting, filtering, saving, and application system",
      "Employer company profiles with verification workflow",
      "Seeker profile management and CV builder system",
      "Admin dashboard for users, jobs, and analytics",
      "Payment integration for job posting and verification",
      "Notifications and AI-powered job assistant",
      "Job matching and recommendation system"
    ],
    "challenge": "One major challenge was designing a scalable relational database that supports complex relationships between users, jobs, applications, and companies. I solved this using normalized PostgreSQL schema design with Flyway migrations and carefully structured API layering for consistency.",
    "outcome": "The system delivers a complete job portal ecosystem with structured hiring workflows, improved job matching, and centralized management for seekers, employers, and admins.",
    "github": "https://github.com/Leta-Kasahun/Jobsphere",
    "image": "Etworks.png",
    "caseStudyLink": "/projects/etworks"
  },
  {
    "id": "bondex",
    "title": "Bondex — CRM System",
    "category": "Web-Based CRM & Lead Management",
    "shortDescription": "A centralized CRM platform for lead management, business communication, and multi-channel customer engagement automation."
    ,
    "problem": "Businesses face difficulty managing leads coming from different sources such as web forms, email, and messaging platforms. This leads to disorganized data, missed follow-ups, and inefficient communication with potential customers.",
    "solution": "I built a centralized full-stack CRM platform that unifies lead management and communication. It streamlines the entire workflow from lead capture to conversion, with integrations for AI assistance and messaging tools to improve response efficiency.",
    "role": "Full-stack Developer",
    "techStack": ["TypeScript", "Node.js", "Express", "PostgreSQL"],
    "keyFeatures": [
      "User and admin authentication system",
      "Lead lifecycle management (create, track, convert)",
      "Business and deal tracking system",
      "AI-powered assistance for lead analysis and replies",
      "Gmail and Telegram integration for communication",
      "Notification system for updates and alerts",
      "Role-based access control (admin/user)"
    ],
    "challenge": "Integrating multiple external services (AI, Gmail, Telegram) while keeping the system modular was challenging. I solved this by organizing the project into feature-based modules with consistent validation, middleware, and service separation.",
    "outcome": "The system improves lead organization, automates communication workflows, and provides a scalable solution for managing customer relationships across multiple channels.",
    "github": "https://github.com/Leta-Kasahun/bondex_frontend",
    "image": "bondex.png",
    "caseStudyLink": "/projects/bondex"
  },
  {
    "id": "ethiointernship",
    "title": "Ethio Internship — Internship Management Platform",
    "category": "Web-Based Internship & Career Platform",
    "shortDescription": "A web based internship platform connecting students with opportunities through secure applications and AI-powered recommendations."
    , "problem": "Students often struggle to find structured internship opportunities, while companies lack a centralized system for managing applications, filtering candidates, and tracking internship workflows efficiently.",
    "solution": "I developed a full-stack internship platform that connects students and companies through a secure system for internship discovery, application management, AI-powered recommendations, and candidate tracking.",
    "role": "Full-stack Developer",
    "techStack": ["Next.js", "TypeScript", "PostgreSQL", "Express"],
    "keyFeatures": [
      "Secure authentication with Google and GitHub OAuth",
      "Student profile creation with CV upload",
      "Internship posting and management system",
      "Advanced internship search and filtering",
      "Application tracking dashboard",
      "AI-powered internship recommendations",
      "Company applicant management dashboard",
      "Role-based access control"
    ],
    "challenge": "Designing secure multi-role authentication while integrating third-party OAuth providers and maintaining smooth application workflows was challenging. I solved this by implementing structured role-based access control and modular authentication architecture.",
    "outcome": "The platform streamlines internship discovery and application workflows, making it easier for students to find opportunities and for companies to identify qualified candidates efficiently.",
    "github": "https://github.com/Leta-Kasahun/EthioInternShip",
    "image": "ethiointernship.png",
    "caseStudyLink": "/projects/ethiointernship"
  },
  {

    "id": "shopsphere",
    "title": "ShopSphere — E-Commerce Platform",
    "category": "Web-Based E-Commerce",
    "shortDescription": "A scalable e-commerce marketplace supporting product discovery, secure checkout, seller management, and real-time order tracking."
    , "problem": "Traditional small-scale online selling often lacks a unified platform where sellers can manage products and orders while customers enjoy a smooth shopping experience with proper search, filtering, and order tracking.",
    "solution": "I developed a full-stack e-commerce platform that connects customers and sellers in one system. It provides structured product management, secure authentication, cart and order workflows, and seller dashboards for managing stores and sales.",
    "role": "Full-stack Developer",
    "techStack": ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    "keyFeatures": [
      "User authentication with OTP and JWT",
      "Product catalog with filtering, sorting, and search",
      "Shopping cart and wishlist system",
      "Secure checkout and order tracking",
      "Seller dashboard for product and order management",
      "Role-based access (Customer & Seller)",
      "Analytics dashboard for sales insights"
    ],
    "challenge": "Managing complex state across cart, orders, and seller dashboards was challenging. I solved this using Zustand for centralized state management and modular component design for scalability and maintainability.",
    "outcome": "The platform delivers a complete e-commerce experience with smooth user interaction, efficient seller management, and scalable architecture suitable for real-world online marketplace systems.",
    "github": "https://github.com/Leta-Kasahun/CodeAlpha_Ecommerce_Frontend",
    "image": "shopsphere.png",
    "caseStudyLink": "/projects/shopsphere"
  },

  {
    "id": "sharesphere",
    "title": "ShareSphere — Social Media Platform",
    "category": "Web-Based Social Networking",
    "shortDescription": "A full-stack social networking platform enabling content sharing, real-time interactions, user engagement, and profile management.",
    "problem": "Most basic social media clones either lack real interaction features or do not implement a complete full-stack workflow. There is often missing functionality in authentication, media handling, and user interaction systems.",
    "solution": "I developed a full-stack social platform that supports user authentication, post creation, engagement features, and profile management. The system integrates frontend UI with backend APIs to provide a complete social networking experience including stories, media uploads, and Google OAuth login.",
    "role": "Full-stack Developer",
    "techStack": ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    "keyFeatures": [
      "User authentication (email/password + Google Sign-In)",
      "Create, edit, delete posts with images and text",
      "Like and comment system",
      "User profiles with editable information",
      "Stories feature with 24-hour expiry",
      "Media upload and storage using Cloudinary",
      "Protected routes and secure API integration"
    ],
    "challenge": "A key challenge was managing real-time user interactions (posts, likes, comments) while keeping frontend and backend data synchronized. I solved this through structured API design, centralized state management using Zustand, and clean separation of concerns in components and services.",
    "outcome": "The project delivers a complete full-stack social media experience with smooth user interaction, scalable architecture, and practical implementation of authentication, media handling and social features.",
    "github": "https://github.com/Leta-Kasahun/CodeAlpha_SocialMediaApp_Frontend",
    "image": "sharesphere.png",
    "caseStudyLink": "/projects/sharesphere"
  }
];