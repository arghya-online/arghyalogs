import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import SearchModal from "@/components/features/SearchModal";
import BackToTop from "@/components/BackToTop";

export default function Layout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <main className="flex-1 w-full max-w-5xl mx-auto p-6 pt-16 md:p-12 md:pt-8 relative">
        {location.pathname !== "/" && (
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors disabled:opacity-50"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <Outlet />
            <footer className="mt-20 pt-8 border-t border-border text-center text-text-secondary text-sm">
              <p>
                Thanks for dropping by! Hope you found something useful (or at least
                mildly entertaining).
              </p>
              <p className="mt-2">
                &copy; {new Date().getFullYear()} Arghya Logs. Built with coffee and
                confusion.
              </p>
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
      <BackToTop />
    </div>
  );
}
