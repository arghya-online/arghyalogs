export const skills = {
    languages: ["HTML5", "CSS3", "JavaScript ES6+", "C++"],
    frameworks: ["React", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    tools: ["Git", "GitHub", "Arduino", "Vercel", "Netlify", "Appwrite"]
};

export const projects = [
    {
        title: "ApkaJob",
        description: "Built ApkaJob, a full-stack role-based hiring platform with separate Recruiter and Candidate dashboards. Implemented authentication using Clerk and backend services with Supabase (PostgreSQL, RLS, and storage). Recruiters can post and manage jobs, while candidates can browse, apply with resume uploads, and track application status. Developed using React, Vite, React Router, Tailwind CSS, and shadcn/ui, focusing on role-based access control, API integration, and responsive UI design.",
        tags: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Clerk", "Supabase"],
        link: "https://apkajob.arghyalogs.in/",
        github: "https://github.com/arghya-online/ApkaJob/tree/main",
        featured: true
    },
    {
        title: "Paisabachao",
        description: "Developed Paisabachao, a retro-styled personal finance management Progressive Web App (PWA) designed to simplify expense tracking and budgeting. The application enables voice-based expense entry, smart category budgeting with real-time visual indicators, bill splitting with debt tracking, and a unified dashboard covering expenses, subscriptions, investments, side income, and net worth. Built using React, Vite, Tailwind CSS, shadcn/ui, Firebase (Authentication and Firestore), and Recharts, the project emphasizes privacy-first architecture with strict user-level data segregation and secure backend rules. Deployed on Vercel, the platform delivers a fast, installable, cross-device experience.",
        tags: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Firebase", "Recharts"],
        link: "https://paisabacha.vercel.app/welcome",
        github: "https://github.com/arghya-online/Paisabachao-PWA-",
        featured: true
    },
    {
        title: "Promethix3D",
        description: "Developed Promethix3D, a high-performance e-commerce platform for 3D printed products, custom mechanical parts, and premium desk decor. Built using React 19 and Vite, the application features a dynamic product catalog, custom order requests, a fully functional cart system using React Context API, and secure authentication via Clerk. The platform emphasizes performance and UX through route-based code splitting, lazy loading, LCP and CLS optimizations, GPU-accelerated animations using Framer Motion and GSAP, and a mobile-first responsive design. Styled with Tailwind CSS and Radix UI primitives, the project demonstrates strong frontend architecture, state management, animation optimization, and production-level performance tuning.",
        tags: ["React 19", "Vite", "Tailwind CSS", "Radix UI", "Framer Motion", "GSAP", "Clerk"],
        link: "https://promethix3d.vercel.app/",
        featured: true
    },
    {
        title: "Likho",
        description: "Developed Likho – Not Another Social Media, a minimal writing platform designed as a private digital space for users to express thoughts, feelings, and personal reflections without the noise of traditional social media. The application focuses on simplicity, privacy, and emotional comfort, ensuring that user content remains secure and accessible only to its owner. Built using React for the frontend, Tailwind CSS for clean and responsive styling, and Appwrite for backend services and authentication, the project emphasizes secure data handling, structured component architecture, and a distraction-free user experience.",
        tags: ["React", "Tailwind CSS", "Appwrite"],
        link: "https://likho1.vercel.app/",
        featured: false
    },
    {
        title: "IEI IEM SITE",
        description: "Developed the official website for the IEI-IEM Mechanical Engineering Students’ Chapter, serving as the digital presence of the institution’s student body. Built using React and Tailwind CSS, the platform delivers a fast, clean, and fully responsive experience across devices. Integrated Framer Motion to enhance user engagement through smooth, modern animations while maintaining performance and accessibility standards.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        link: "https://ieiiemstudentchapter.vercel.app/",
        featured: false
    }
];
