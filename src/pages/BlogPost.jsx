import { useParams, Navigate, Link } from "react-router-dom";
import { getBlogBySlug } from "@/lib/blogs";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
    const { category, slug } = useParams();
    const blog = getBlogBySlug(slug);

    if (!blog) {
        return <div className="p-12 text-center">Post not found</div>;
    }

    const Component = blog.component;

    return (
        <article className="w-full mx-auto">
            <Link
                to={`/${category}`}
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to {category}
            </Link>

            <header className="mb-10 border-b border-border pb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
                    {blog.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-text-secondary font-mono">
                    <time>{blog.date}</time>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                </div>
            </header>

            <div className="prose prose-sm md:prose-base prose-invert prose-neutral max-w-none">
                <Component />
            </div>
        </article>
    );
}
