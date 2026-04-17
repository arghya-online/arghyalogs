import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function BlogCard({ blog, type }) {
  const categorySlug = blog?.category?.toLowerCase() || "uncategorized";

  if (!blog) return null;

  const toLink = blog.link || (type === 'project' ? `/projects/${blog.slug}` : `/${categorySlug}/${blog.slug}`);
  const isExternal = toLink.startsWith('http');

  const CardContent = () => (
    <>
      {blog.thumbnail && (
        <div className="w-full mb-4 overflow-hidden  -md bg-surface" style={{ aspectRatio: '16/9' }}>
          <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover" />
        </div>
      )}
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

      {blog.tech && (
        <div className="flex flex-wrap gap-2 mt-3">
          {blog.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 border border-border text-text-secondary bg-surface"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </>
  );

  const className = cn(
    "block group p-4 -mx-4  -lg border border-transparent transition-colors",
    "hover:bg-surface hover:border-border"
  );

  if (isExternal) {
    return (
      <a href={toLink} target="_blank" rel="noopener noreferrer" className={className}>
        <CardContent />
      </a>
    );
  }

  return (
    <Link to={toLink} className={className}>
      <CardContent />
    </Link>
  );
}