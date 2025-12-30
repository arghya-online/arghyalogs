import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function BlogCard({ blog }) {
    // Construct link: /category-slug/blog-slug
    const categorySlug = blog.category.toLowerCase();

    return (
        <Link
            to={`/${categorySlug}/${blog.slug}`}
            className="block group p-4 -mx-4 rounded-lg transition-colors hover:bg-surface border border-transparent hover:border-border"
        >
            <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
            </div>
            <h3 className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                {blog.title}
            </h3>
            <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                {blog.summary}
            </p>
        </Link>
    );
}
