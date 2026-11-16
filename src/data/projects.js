import rawProjectsData from "./projects.json";

// Support both array shape [ ... ] and object shape { projects: [ ... ] }
const rawList = Array.isArray(rawProjectsData)
  ? rawProjectsData
  : rawProjectsData?.projects || [];

export const projects = rawList.map((item, index) => {
  const totalCount = String(rawList.length).padStart(2, "0");
  const num = item.number || String(index + 1).padStart(2, "0");
  const title = item.name || item.title || "";
  const slug = item.slug || item.id || "";
  const tech = item.technologies || item.tech || [];
  const live = item.liveUrl || item.live || "";
  const github =
    item.githubUrl !== undefined ? item.githubUrl : item.github || null;

  return {
    ...item,
    id: item.id || slug,
    slug,
    number: num,
    total: item.total || totalCount,
    title,
    name: title,
    description: item.description || "",
    summary: item.summary || item.description || "",
    content: item.content || item.description || "",
    tech,
    technologies: tech,
    image: item.image || `/images/projects/${item.id}.webp`,
    imageAlt: item.imageAlt || `${title} website screenshot`,
    live,
    liveUrl: live,
    github,
    githubUrl: github,
    category: item.category || "Production System",
    readTime: item.readTime || "Web Application",
    featured: item.featured !== undefined ? item.featured : true,
  };
});

export const techColors = {
  HTML: "#e34c26",
  CSS: "#264de4",
  JavaScript: "#f7df1e",
  React: "#61dafb",
  "React 19": "#61dafb",
  "Node.js": "#68a063",
  MongoDB: "#47a248",
  "C++": "#00599c",
  TailwindCSS: "#38bdf8",
  "Tailwind CSS": "#38bdf8",
  Docker: "#2496ed",
  TypeScript: "#3178c6",
  "Next.js": "#18181b",
  PostgreSQL: "#336791",
  Supabase: "#3ecf8e",
  Clerk: "#6c47ff",
  "Clerk Auth": "#6c47ff",
  Express: "#71717a",
  "Express.js": "#71717a",
  "Better Auth": "#f59e0b",
  "Framer Motion": "#e11d48",
  GSAP: "#0ae448",
  Vite: "#bd34fe",
  "React Router": "#ca4246",
  "TanStack Router": "#f59e0b",
  "TanStack Query": "#ef4444",
  "shadcn/ui": "#18181b",
  JWT: "#d63aff",
  "React Hook Form": "#ec5990",
  "ChatCN UI": "#06b6d4",
  "Google Apps Script": "#4285f4",
  "Google Sheets": "#0f9d58",
};
