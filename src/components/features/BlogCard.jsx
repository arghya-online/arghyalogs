import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function BlogCard({ blog }) {
  const categorySlug = blog?.category?.toLowerCase() || "uncategorized";

  if (!blog || !blog.slug) return null;

  return (
    <Link
      to={`/${categorySlug}/${blog.slug}`}
      className={cn(
        "block group p-4 -mx-4 rounded-lg border border-transparent transition-colors",
        "hover:bg-surface hover:border-border"
      )}
    >
      <div className="flex items-center justify-between text-xs text-text-secondary mb-2 font-mono">
        <time>{blog.date}</time>
        <span>{blog.readTime}</span>
      </div>

      <h3 className={cn(
        "text-lg font-medium text-text-primary transition-colors",
        "group-hover:text-accent"
      )}>
        {blog.title}
      </h3>

      <p className="text-sm text-text-secondary mt-1 line-clamp-2">
        {blog.summary}
      </p>
    </Link>
  );
}