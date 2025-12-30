import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { getAllBlogs } from "@/lib/blogs";
import gsap from "gsap";

export default function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const modalRef = useRef(null);
    const navigate = useNavigate();
    const inputRef = useRef(null);

    // Search logic
    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }
        const allBlogs = getAllBlogs();
        const filtered = allBlogs.filter((blog) =>
            blog.title.toLowerCase().includes(query.toLowerCase()) ||
            blog.summary.toLowerCase().includes(query.toLowerCase()) ||
            blog.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    }, [query]);

    // Animation and focus
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Prevent scrolling
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

    // Keyboard shortcut (ESC) is handled by parent or here?
    // Let's handle generic ESC here as backup
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isOpen) onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const handleSelect = (category, slug) => {
        navigate(`/${category.toLowerCase()}/${slug}`);
        onClose();
        setQuery("");
    };

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-start justify-center pt-24 px-4"
            onClick={onClose}
        >
            <div
                className="bg-background w-full max-w-xl rounded-lg border border-border shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center border-b border-border px-4 py-3 gap-3">
                    <Search className="h-5 w-5 text-text-secondary" />
                    <input
                        ref={inputRef}
                        type="text"
                        className="flex-1 bg-transparent border-none outline-none text-lg text-text-primary placeholder:text-text-secondary"
                        placeholder="Search posts..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={onClose} className="p-1 hover:bg-surface rounded text-text-secondary">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto p-2">
                    {query === "" && (
                        <div className="p-8 text-center text-text-secondary text-sm">
                            Type to search by title, summary, or category.
                        </div>
                    )}

                    {query !== "" && results.length === 0 && (
                        <div className="p-8 text-center text-text-secondary text-sm">
                            No results found for "{query}".
                        </div>
                    )}

                    {results.length > 0 && (
                        <ul className="space-y-1">
                            {results.map((blog) => (
                                <li key={blog.slug}>
                                    <button
                                        onClick={() => handleSelect(blog.category, blog.slug)}
                                        className="w-full text-left p-3 rounded hover:bg-surface transition-colors flex flex-col gap-1 group"
                                    >
                                        <span className="font-medium text-text-primary group-hover:text-accent">
                                            {blog.title}
                                        </span>
                                        <div className="flex items-center gap-2 text-xs text-text-secondary">
                                            <span className="capitalize text-accent/70">{blog.category}</span>
                                            <span>•</span>
                                            <span>{blog.date}</span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="px-4 py-2 border-t border-border bg-surface/50 text-xs text-text-secondary flex justify-between">
                    <span>Press <kbd className="font-mono bg-background px-1 rounded border border-border">ESC</kbd> to close</span>
                    <span>{results.length} results</span>
                </div>
            </div>
        </div>
    );
}
