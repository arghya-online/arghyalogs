import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import gsap from "gsap";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function MobileNav({ onOpenSearch }) {
    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef(null);
    const overlayRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (isOpen) {
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: "block" });
            gsap.to(drawerRef.current, { x: "0%", duration: 0.3, ease: "power2.out" });
        } else {
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, onComplete: () => gsap.set(overlayRef.current, { display: "none" }) });
            gsap.to(drawerRef.current, { x: "-100%", duration: 0.3, ease: "power2.in" });
        }
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <div className="md:hidden">
            <header className="fixed top-0 left-0 right-0 h-14 bg-background/80 backdrop-blur-md border-b border-border z-40 flex items-center justify-between px-4 md:hidden">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-2 text-text-primary hover:bg-surface rounded-md transition-colors"
                        aria-label="Open Menu"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                    <span className="font-bold text-sm">Arghya Logs</span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={onOpenSearch}
                        className="p-2 text-text-primary hover:bg-surface rounded-md transition-colors"
                        aria-label="Search"
                    >
                        <Search className="h-5 w-5" />
                    </button>
                    <ThemeToggle />
                </div>
            </header>

            <div
                ref={overlayRef}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 hidden opacity-0"
            />

            <div
                ref={drawerRef}
                className="fixed inset-y-0 left-0 w-72 bg-background border-r border-border z-50 transform -translate-x-full shadow-xl flex flex-col"
            >
                <div className="p-4 flex items-center justify-between border-b border-border">
                    <h2 className="font-bold text-lg">Menu</h2>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-surface rounded">
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-2">
                        {CATEGORIES.map((category) => (
                            <li key={category.slug}>
                                <NavLink
                                    to={category.slug}
                                    className={({ isActive }) => cn(
                                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                                        isActive ? "bg-surface text-text-primary font-medium" : "text-text-secondary hover:text-text-primary"
                                    )}
                                >
                                    <category.icon className="h-4 w-4" />
                                    {category.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
