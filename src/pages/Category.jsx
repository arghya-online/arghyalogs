import { useParams } from "react-router-dom";
import { getBlogsByCategory } from "@/lib/blogs";
import BlogCard from "@/components/features/BlogCard";

export default function Category() {
    const { category } = useParams();
    const blogs = getBlogsByCategory(category);

    return (
        <div className="space-y-8">
            <div className="border-b border-border pb-6">
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
