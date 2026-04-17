import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CATEGORIES, BLOG_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Sidebar({ onOpenSearch }) {
    const [isBlogsOpen, setIsBlogsOpen] = useState(false);
    const location = useLocation();
    return (
        <aside className="hidden md:flex flex-col w-[260px] h-screen sticky top-0 border-r border-border bg-background">
            <div className="p-6 border-b border-border">
                <h1
                    onClick={() => (window.location.href = "/")}
                    role="button"
                    tabIndex={0}
                    className="text-xl font-bold tracking-tight cursor-pointer select-none"
                >
                    Arghya Logs
                </h1>

                <p className="text-xs text-text-secondary mt-1">
                    Engineering & Science Notes
                </p>

                <button
                    onClick={onOpenSearch}
                    className="mt-6 w-full flex items-center gap-2 px-3 py-1.5 text-xs text-text-secondary border border-border  -md bg-surface hover:border-accent hover:text-text-primary transition-colors text-left"
                >
                    <Search className="h-3 w-3" />
                    <span className="flex-1">Search...</span>
                    <kbd className="font-mono text-[10px] border border-border px-1  ">Ctrl+K</kbd>
                </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-3">
                <ul className="space-y-1">
                    {CATEGORIES.map((category) => (
                        <li key={category.name}>
                            <NavLink
                                to={category.slug}
                                className={({ isActive }) =>
                                    cn(
                                        "flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors hover:bg-surface hover:text-text-primary",
                                        isActive && category.slug !== "/"
                                            ? "bg-surface text-text-primary border-l-2 border-accent"
                                            : isActive && category.slug === "/" && location.pathname === "/"
                                                ? "bg-surface text-text-primary border-l-2 border-accent"
                                                : "text-text-secondary"
                                    )
                                }
                            >
                                <category.icon className="h-4 w-4" />
                                {category.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t border-border flex items-center justify-between gap-2">
                <p className="text-xs text-text-secondary">
                    &copy; {new Date().getFullYear()} Arghya Logs
                </p>
                <ThemeToggle />
            </div>
        </aside>
    );
}
