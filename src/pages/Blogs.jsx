import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import { getAllBlogs } from '@/lib/blogs';
import { BLOG_CATEGORIES } from '@/lib/constants';
import BlogCard from '@/components/features/BlogCard';

export default function Blogs() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentCategory = searchParams.get('c') || 'All';
    const [searchQuery, setSearchQuery] = useState('');

    const allBlogs = getAllBlogs();

    const filteredBlogs = useMemo(() => {
        let result = allBlogs;

        // Filter by category
        if (currentCategory !== 'All') {
            result = result.filter(
                blog => blog.category?.toLowerCase() === currentCategory.toLowerCase()
            );
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                blog =>
                    blog.title.toLowerCase().includes(query) ||
                    blog.description?.toLowerCase().includes(query)
            );
        }

        return result;
    }, [allBlogs, currentCategory, searchQuery]);

    const handleCategoryClick = (categoryName) => {
        if (categoryName === 'All') {
            searchParams.delete('c');
        } else {
            searchParams.set('c', categoryName);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="space-y-8">
            <Helmet>
                <title>Blogs - Arghya Logs</title>
                <meta name="description" content="Read my thoughts, tutorials, and notes on software engineering, physics, and more." />
            </Helmet>

            {/* Header & Search */}
            <header className="space-y-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Logs & Notes</h1>
                    <p className="text-text-secondary leading-relaxed max-w-prose">
                        Thoughts, tutorials, and documentations on things I build or learn.
                    </p>
                </div>

                <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-text-secondary" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search logs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-surface border border-border text-text-primary px-3 py-2 pl-9 focus:outline-none focus:border-accent transition-colors"
                    />
                </div>
            </header>

            {/* Category Navbar */}
            <nav className="flex flex-wrap gap-2 border-b border-border pb-4">
                <button
                    onClick={() => handleCategoryClick('All')}
                    className={`px-4 py-1.5 text-sm font-medium border transition-colors ${
                        currentCategory === 'All'
                            ? 'bg-text-primary text-background border-text-primary'
                            : 'bg-surface text-text-secondary border-border hover:border-text-primary hover:text-text-primary'
                    }`}
                >
                    All
                </button>
                {BLOG_CATEGORIES.map(cat => (
                    <button
                        key={cat.name}
                        onClick={() => handleCategoryClick(cat.name)}
                        className={`px-4 py-1.5 text-sm font-medium border transition-colors flex items-center gap-2 ${
                            currentCategory.toLowerCase() === cat.name.toLowerCase()
                                ? 'bg-text-primary text-background border-text-primary'
                                : 'bg-surface text-text-secondary border-border hover:border-text-primary hover:text-text-primary'
                        }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </nav>

            {/* Blog List */}
            <div className="space-y-4">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map(blog => (
                        <BlogCard key={blog.slug} blog={blog} />
                    ))
                ) : (
                    <div className="py-12 border border-dashed border-border text-center">
                        <p className="text-text-secondary">No blogs found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
