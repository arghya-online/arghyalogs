import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import SearchModal from "@/components/features/SearchModal";

export default function Layout() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Global keyboard shortcut for search (Cmd+K / Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="flex min-h-screen bg-background text-text-primary font-sans">
            <Sidebar onOpenSearch={() => setIsSearchOpen(true)} />
            <MobileNav onOpenSearch={() => setIsSearchOpen(true)} />

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-5xl mx-auto p-6 pt-20 md:p-12 md:pt-12 relative">
                <Outlet />
            </main>
        </div>
    );
}
