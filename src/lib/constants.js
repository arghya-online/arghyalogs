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
  Briefcase
} from "lucide-react";

export const CATEGORIES = [
  { name: "Portfolio", slug: "/portfolio", icon: Briefcase },
  { name: "Take Home", slug: "/", icon: Home },
  { name: "Mathematics", slug: "/mathematics", icon: Calculator },
  { name: "Astronomy", slug: "/astronomy", icon: Telescope },
  { name: "Programming", slug: "/programming", icon: Code },
  { name: "Networking", slug: "/networking", icon: Server },
  { name: "Physics", slug: "/physics", icon: Atom },
  { name: "Robotics", slug: "/robotics", icon: Bot },
  { name: "3AM Thoughts", slug: "/3amthoughts", icon: Leaf },
];
