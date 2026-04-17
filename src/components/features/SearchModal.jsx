import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, Layers, Code, Play } from "lucide-react";
import { getAllBlogs } from "@/lib/blogs";
import { projects } from "@/data/projects";
import { youtubeVideos } from "@/data/youtube";
import gsap from "gsap";

export default function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const modalRef = useRef(null);
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const q = query.toLowerCase();

        // 1. Map Blogs
        const mappedBlogs = getAllBlogs().map(b => ({
            id: b.slug,
            title: b.title,
            summary: b.summary,
            type: "blog",
            label: b.category,
            path: `/${b.category.toLowerCase()}/${b.slug}`
        }));

        // 2. Map Projects
        const mappedProjects = projects.map(p => ({
            id: p.slug,
            title: p.title,
            summary: p.description,
            type: "project",
            label: "Project",
            path: `/projects/${p.slug}`
        }));

        // 3. Map YouTube
        const mappedVideos = youtubeVideos.map(v => ({
            id: v.slug,
            title: v.title,
            summary: v.description,
            type: "youtube",
            label: "YouTube",
            href: v.link
        }));

        const unifiedIndex = [...mappedBlogs, ...mappedProjects, ...mappedVideos];

        const filtered = unifiedIndex.filter((item) =>
            item.title.toLowerCase().includes(q) ||
            item.summary?.toLowerCase().includes(q) ||
            item.label?.toLowerCase().includes(q)
        );

        setResults(filtered);
    }, [query]);

    // Animation and focus
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            gsap.to(modalRef.current, { opacity: 1, duration: 0.2, display: "flex" });
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            document.body.style.overflow = "";
            gsap.to(modalRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    if (modalRef.current) gsap.set(modalRef.current, { display: "none" });
                }
            });
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isOpen) onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const handleSelect = (item) => {
        if (item.href) {
            window.open(item.href, '_blank');
        } else {
            navigate(item.path);
        }
        onClose();
        setQuery("");
    };

    const getIconForType = (type) => {
        if (type === "project") return <Code className="w-3.5 h-3.5 text-accent" />;
        if (type === "youtube") return <Play className="w-3.5 h-3.5 text-red-500" />;
        return <Layers className="w-3.5 h-3.5 text-accent/70" />;
    }

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-start justify-center pt-24 px-4"
            onClick={onClose}
        >
            <div
                className="bg-background w-full max-w-2xl border border-border mt-4 sm:mt-10 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center border-b border-border px-4 py-3 gap-3">
                    <Search className="h-5 w-5 text-text-secondary" />
                    <input
                        ref={inputRef}
                        type="text"
                        className="flex-1 bg-transparent border-none outline-none text-base sm:text-lg text-text-primary placeholder:text-text-secondary"
                        placeholder="Search blogs, projects, videos..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={onClose} className="p-1 hover:bg-surface text-text-secondary transition-colors">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto p-2">
                    {query === "" && (
                        <div className="p-8 text-center text-text-secondary text-sm">
                            What are you looking for? (Try "robot", "react", or "weather")
                        </div>
                    )}

                    {query !== "" && results.length === 0 && (
                        <div className="p-8 text-center text-text-secondary text-sm">
                            No results found for "{query}".
                        </div>
                    )}

                    {results.length > 0 && (
                        <ul className="space-y-1">
                            {results.map((item) => (
                                <li key={item.id + item.type}>
                                    <button
                                        onClick={() => handleSelect(item)}
                                        className="w-full text-left p-3 hover:bg-surface transition-colors flex flex-col gap-1 group border border-transparent hover:border-border"
                                    >
                                        <div className="flex items-center gap-2">
                                            {getIconForType(item.type)}
                                            <span className="font-medium text-text-primary group-hover:text-text-primary transition-colors">
                                                {item.title}
                                            </span>
                                        </div>
                                        <p className="text-xs text-text-secondary line-clamp-1 ml-5">
                                            {item.summary}
                                        </p>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="px-4 py-2 border-t border-border bg-surface/50 text-xs text-text-secondary flex justify-between">
                    <span>Press <kbd className="font-mono bg-background px-1   border border-border">ESC</kbd> to close</span>
                    <span>{results.length} results</span>
                </div>
            </div>
        </div>
    );
}
