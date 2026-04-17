import {
  Home,
  Calculator,
  Telescope,
  Atom,
  Bot,
  Server,
  Monitor,
  Layers,
  Code,
  Leaf,
  Briefcase,
  FileCode,
} from "lucide-react";

export const CATEGORIES = [
  { name: "Take Home", slug: "/", icon: Home },
  { name: "Portfolio", slug: "/portfolio", icon: Briefcase },
  { name: "Projects", slug: "/projects", icon: Code },
  { name: "Blogs", slug: "/blogs", icon: FileCode },
  { name: "YouTube", slug: "/youtube", icon: Telescope },
];

export const BLOG_CATEGORIES = [
  { name: "JavaScript", slug: "/javascript", icon: FileCode },
  { name: "Mathematics", slug: "/mathematics", icon: Calculator },
  { name: "Programming", slug: "/programming", icon: Code },
  { name: "Networking", slug: "/networking", icon: Server },
  { name: "Physics", slug: "/physics", icon: Atom },
  { name: "Astronomy", slug: "/astronomy", icon: Telescope },
  { name: "3AM Thoughts", slug: "/3amthoughts", icon: Leaf },
];
