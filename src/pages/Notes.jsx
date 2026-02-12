import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";
import { Terminal, FileText, Calendar } from "lucide-react";
import gsap from "gsap";

export default function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            // Import all markdown files from the notes directory
            const modules = import.meta.glob('../content/notes/*.md', { query: '?raw', import: 'default' });

            const loadedNotes = await Promise.all(
                Object.entries(modules).map(async ([path, contentPromise]) => {
                    const content = await contentPromise();
                    const { data } = matter(content);
                    // Extract slug from filename: ../content/notes/hello-world.md -> hello-world
                    const slug = path.split('/').pop().replace('.md', '');
                    return {
                        slug,
                        frontmatter: data,
                        path
                    };
                })
            );

            // Sort by date (newest first)
            const sortedNotes = loadedNotes.sort((a, b) => {
                return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
            });

            setNotes(sortedNotes);

            // Animate items
            gsap.fromTo(".note-item",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
            );
        };

        fetchNotes();
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6 font-mono">

            <header className="mb-16 border-b border-border/40 pb-6">
                <div className="flex items-center gap-3 text-accent mb-2">
                    <Terminal className="w-6 h-6" />
                    <span className="text-sm font-bold uppercase tracking-widest">// Brain_Dump</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                    Digital Garden
                </h1>
                <p className="mt-4 text-text-secondary max-w-xl">
                    A collection of raw notes, thoughts, and learnings directly from my Obsidian vault.
                </p>
            </header>

            <div className="grid gap-4">
                {notes.map((note) => (
                    <Link
                        to={`/notes/${note.slug}`}
                        key={note.slug}
                        className="note-item group block p-6 border border-border bg-surface/30 hover:border-accent hover:bg-surface/60 transition-all"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors mb-2">
                                    {note.frontmatter.title || note.slug}
                                </h2>
                                <div className="flex flex-wrap gap-2 text-xs text-text-secondary">
                                    {note.frontmatter.tags && note.frontmatter.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 bg-background border border-border/50 rounded-none">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-text-secondary opacity-60 font-mono shrink-0">
                                <Calendar className="w-3 h-3" />
                                {note.frontmatter.date ? new Date(note.frontmatter.date).toLocaleDateString() : 'Draft'}
                            </div>
                        </div>
                    </Link>
                ))}

                {notes.length === 0 && (
                    <div className="py-20 text-center text-text-secondary italic border border-dashed border-border">
                        System Empty. Initialize new thought processes...
                    </div>
                )}
            </div>
        </div>
    );
}
