import { useParams, Navigate, Link } from "react-router-dom";
import { getBlogBySlug, getBlogsByCategory } from "@/lib/blogs";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Helmet } from 'react-helmet-async';
import BlogCard from "@/components/features/BlogCard";

export default function BlogPost() {
    const { category, slug } = useParams();
    const blog = getBlogBySlug(slug);

    if (!blog) {
        return <div className="p-12 text-center">Post not found</div>;
    }

    const Component = blog.component;
    const relatedBlogs = getBlogsByCategory(category).filter(b => b.slug !== slug).slice(0, 3);

    return (
        <article className="w-full mx-auto pb-12">
            <Helmet>
                <title>{blog.title} - Arghya Logs</title>
                <meta name="description" content={blog.summary} />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.summary} />
                <meta property="og:type" content="article" />
            </Helmet>

            <Link
                to={`/${category}`}
                className={cn(
                    "inline-flex items-center gap-2 text-sm text-text-secondary mb-8 transition-colors",
                    "hover:text-text-primary"
                )}
            >
                <ArrowLeft className="h-4 w-4" />
                Back to {category}
            </Link>

            <header className={cn(
                "mb-10 border-b border-border pb-6"
            )}>
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

            {relatedBlogs.length > 0 && (
                <div className="mt-16 pt-8 border-t border-border">
                    <h3 className="text-2xl font-bold mb-6 text-text-primary">Read Next</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {relatedBlogs.map(related => (
                            <BlogCard key={related.slug} blog={related} />
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}
