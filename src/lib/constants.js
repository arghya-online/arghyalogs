import {
    Home,
    Calculator,
    Telescope,
    Atom,
    Bot,
    Server,
    Monitor,
    Layers,
    Code
} from "lucide-react";

export const CATEGORIES = [
    { name: "Take Home", slug: "/", icon: Home },
    { name: "Mathematics", slug: "/mathematics", icon: Calculator },
    { name: "Astronomy", slug: "/astronomy", icon: Telescope },
    { name: "Programming", slug: "/programming", icon: Code },
    { name: "Physics", slug: "/physics", icon: Atom },
    { name: "Robotics", slug: "/robotics", icon: Bot },
    { name: "Backend", slug: "/backend", icon: Server },
    { name: "Frontend", slug: "/frontend", icon: Monitor },
    { name: "Fullstack", slug: "/fullstack", icon: Layers },
];
