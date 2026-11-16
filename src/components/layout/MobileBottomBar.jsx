import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Code, Briefcase, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MobileBottomBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const isHome = location.pathname === "/";
  const isProjects = location.pathname.startsWith("/projects");
  const isPortfolio = location.pathname === "/portfolio";
  const isBlogs =
    location.pathname.startsWith("/blogs") ||
    location.pathname.startsWith("/javascript") ||
    location.pathname.startsWith("/mathematics") ||
    location.pathname.startsWith("/programming") ||
    location.pathname.startsWith("/networking") ||
    location.pathname.startsWith("/physics") ||
    location.pathname.startsWith("/3amthoughts");

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.06)] select-none pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-1.5"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around w-full max-w-md mx-auto px-1">
        {/* 1. Android-Style Back Button */}
        <button
          onClick={handleBack}
          className={cn(
            "flex-1 flex flex-col items-center justify-center py-1 px-1 transition-all active:scale-90 group",
            isHome
              ? "text-text-secondary/50 cursor-default"
              : "text-text-secondary hover:text-text-primary"
          )}
          aria-label="Go back"
          title="Back"
        >
          <div className="flex items-center justify-center px-3 py-1 rounded-full transition-colors group-hover:bg-surface">
            <ArrowLeft className="w-5 h-5 transition-transform group-active:-translate-x-0.5" />
          </div>
          <span className="text-[10px] font-mono tracking-tight font-medium mt-0.5">
            Back
          </span>
        </button>

        {/* 2. Android Home Button */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "flex-1 flex flex-col items-center justify-center py-1 px-1 transition-all active:scale-90 group",
              isActive && isHome
                ? "text-amber-500 font-semibold"
                : "text-text-secondary hover:text-text-primary"
            )
          }
          aria-label="Home page"
        >
          {({ isActive }) => (
            <>
              <div
                className={cn(
                  "flex items-center justify-center px-3 py-1 rounded-full transition-all duration-200",
                  isActive && isHome
                    ? "bg-amber-500/15 text-amber-500 dark:bg-amber-500/25"
                    : "group-hover:bg-surface"
                )}
              >
                <Home className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono tracking-tight font-medium mt-0.5">
                Home
              </span>
            </>
          )}
        </NavLink>

        {/* 3. Projects Showcase Button */}
        <NavLink
          to="/projects"
          className={cn(
            "flex-1 flex flex-col items-center justify-center py-1 px-1 transition-all active:scale-90 group",
            isProjects
              ? "text-amber-500 font-semibold"
              : "text-text-secondary hover:text-text-primary"
          )}
          aria-label="Projects showcase"
        >
          <div
            className={cn(
              "flex items-center justify-center px-3 py-1 rounded-full transition-all duration-200",
              isProjects
                ? "bg-amber-500/15 text-amber-500 dark:bg-amber-500/25"
                : "group-hover:bg-surface"
            )}
          >
            <Code className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono tracking-tight font-medium mt-0.5">
            Projects
          </span>
        </NavLink>

        {/* 4. Portfolio / Profile Button */}
        <NavLink
          to="/portfolio"
          className={cn(
            "flex-1 flex flex-col items-center justify-center py-1 px-1 transition-all active:scale-90 group",
            isPortfolio
              ? "text-amber-500 font-semibold"
              : "text-text-secondary hover:text-text-primary"
          )}
          aria-label="Portfolio profile"
        >
          <div
            className={cn(
              "flex items-center justify-center px-3 py-1 rounded-full transition-all duration-200",
              isPortfolio
                ? "bg-amber-500/15 text-amber-500 dark:bg-amber-500/25"
                : "group-hover:bg-surface"
            )}
          >
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono tracking-tight font-medium mt-0.5">
            Portfolio
          </span>
        </NavLink>

        {/* 5. Blogs Button */}
        <NavLink
          to="/blogs"
          className={cn(
            "flex-1 flex flex-col items-center justify-center py-1 px-1 transition-all active:scale-90 group",
            isBlogs
              ? "text-amber-500 font-semibold"
              : "text-text-secondary hover:text-text-primary"
          )}
          aria-label="Blogs and notes"
        >
          <div
            className={cn(
              "flex items-center justify-center px-3 py-1 rounded-full transition-all duration-200",
              isBlogs
                ? "bg-amber-500/15 text-amber-500 dark:bg-amber-500/25"
                : "group-hover:bg-surface"
            )}
          >
            <FileCode className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono tracking-tight font-medium mt-0.5">
            Blogs
          </span>
        </NavLink>
      </div>
    </nav>
  );
}
