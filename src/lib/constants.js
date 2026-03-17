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
  { name: "Portfolio", slug: "/portfolio", icon: Briefcase },
  { name: "Take Home", slug: "/", icon: Home },
  { name: "Codes", slug: "/codes", icon: Code },
  { name: "Mathematics", slug: "/mathematics", icon: Calculator },
  { name: "JavaScript", slug: "/javascript", icon: FileCode },
  { name: "Programming", slug: "/programming", icon: Code },
  { name: "Networking", slug: "/networking", icon: Server },
  { name: "Physics", slug: "/physics", icon: Atom },
  { name: "Astronomy", slug: "/astronomy", icon: Telescope },
  { name: "3AM Thoughts", slug: "/3amthoughts", icon: Leaf },
];
