import { useParams } from "react-router-dom";
import { getBlogsByCategory } from "@/lib/blogs";
import BlogCard from "@/components/features/BlogCard";
import { cn } from "@/lib/utils";
import { Helmet } from 'react-helmet-async';

export default function Category() {
    const { category } = useParams();
    const blogs = getBlogsByCategory(category);

    return (
        <div className="space-y-8">
            <Helmet>
                <title>{category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Category'} - Arghya Logs</title>
                <meta name="description" content={`Explore all engineering and science notes in the ${category} category.`} />
            </Helmet>
            <div className={cn(
                "border-b border-border pb-6"
            )}>
                <h1 className="text-3xl font-bold capitalize">{category}</h1>
                <p className="text-text-secondary mt-1">
                    {blogs.length} {blogs.length === 1 ? 'Note' : 'Notes'}
                </p>
            </div>

            <div className="space-y-2">
                {blogs.length > 0 ? (
                    blogs.map(blog => (
                        <BlogCard key={blog.slug} blog={blog} />
                    ))
                ) : (
                    <div className="py-12 text-center">
                        <p className="text-text-secondary">No posts found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
