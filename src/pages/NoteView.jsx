import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import matter from "gray-matter";
import { ArrowLeft, Terminal, Calendar } from "lucide-react";
import gsap from "gsap";

export default function NoteView() {
    const { slug } = useParams();
    const [content, setContent] = useState("");
    const [frontmatter, setFrontmatter] = useState({});
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                // Dynamically import the specific file based on slug
                // Note: Vite glob import must be static, so we import all and find the one matching
                const modules = import.meta.glob('../content/notes/*.md', { query: '?raw', import: 'default' });

                const matchPath = `../content/notes/${slug}.md`;

                if (!modules[matchPath]) {
                    setNotFound(true);
                    return;
                }

                const markdown = await modules[matchPath]();
                const { data, content } = matter(markdown);

                setFrontmatter(data);
                setContent(content);

                // Animate entry
                gsap.fromTo(".note-content",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
                );

            } catch (error) {
                console.error("Error loading note:", error);
                setNotFound(true);
            }
        };

        fetchNote();
    }, [slug]);

    if (notFound) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-4xl font-bold mb-4">404: FILE_NOT_FOUND</h1>
                <p className="text-text-secondary mb-8">The requested packet could not be retrieved from the garden.</p>
                <Link to="/notes" className="text-accent hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Return to Index
                </Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-32 pb-20 max-w-3xl mx-auto px-6 font-mono">
            <Link to="/notes" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8 group pl-2">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                ./cd ..
            </Link>

            <header className="mb-12 border-b border-border/40 pb-6 note-content">
                <div className="flex flex-wrap gap-2 mb-4">
                    {frontmatter.tags && frontmatter.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 bg-accent/5 text-accent border border-accent/20">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4 leading-tight">
                    {frontmatter.title || slug}
                </h1>
                <div className="flex items-center gap-2 text-xs text-text-secondary uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    <span>Last Execute: {frontmatter.date ? new Date(frontmatter.date).toLocaleDateString() : 'Unknown'}</span>
                </div>
            </header>

            <div className="note-content prose prose-invert prose-headings:font-normal prose-h1:text-3xl prose-h2:text-2xl prose-p:text-text-secondary prose-a:text-accent prose-code:text-accent prose-code:bg-surface prose-pre:bg-surface prose-pre:border prose-pre:border-border max-w-none">
                <Markdown>{content}</Markdown>
            </div>
        </article>
    );
}
