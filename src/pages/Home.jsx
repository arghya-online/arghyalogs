import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { getAllBlogs } from "@/lib/blogs";
import BlogCard from "@/components/features/BlogCard";
import { Github, Twitter, Youtube, Briefcase } from "lucide-react";
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const allBlogs = getAllBlogs();
    const [displayCount, setDisplayCount] = useState(5);

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 5);
    };

    const displayedBlogs = allBlogs.slice(0, displayCount);

    return (
        <div className="space-y-12">
            <Helmet>
                <title>Arghya Logs - Engineering & Science Notes</title>
                <meta name="description" content="Arghya's personal blog and digital garden covering web development, computer science, and engineering." />
            </Helmet>
            <section>
                <h1 className="text-3xl font-bold mb-4">Who Am I?</h1>
                <p className="text-text-secondary leading-relaxed max-w-prose mb-6">
                    Visit my portfolio. But before give a read to my write-ups.
                </p>
                <p className="text-text-secondary leading-relaxed max-w-prose mb-4">
                    You can also catch me hanging out in these zones:
                </p>
                <div className="flex flex-wrap gap-6">
                    <a
                        href="https://github.com/arghya-online"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
                    >
                        <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">GitHub</span>
                    </a>
                    <a
                        href="https://x.com/arghyabuilds"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
                    >
                        <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Twitter</span>
                    </a>
                    <a
                        href="https://www.youtube.com/@arghya_explains_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
                    >
                        <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">YouTube</span>
                    </a>
                    <Link
                        to="/portfolio"
                        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
                    >
                        <Briefcase className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Portfolio</span>
                    </Link>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-6 text-text-primary flex items-center gap-2">
                    All Notes
                    <span className="text-xs font-normal text-text-secondary px-2 py-0.5 rounded-full border border-border">
                        {allBlogs.length}
                    </span>
                </h2>

                <div className="space-y-2">
                    {displayedBlogs.length > 0 ? (
                        displayedBlogs.map(blog => (
                            <BlogCard key={blog.slug} blog={blog} />
                        ))
                    ) : (
                        <p className="text-text-secondary italic">No notes found.</p>
                    )}
                </div>

                {displayCount < allBlogs.length && (
                    <div className="mt-8 text-center flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-2.5 text-sm font-medium bg-surface hover:bg-border text-text-primary rounded-md transition-colors border border-border mt-4"
                        >
                            Load More Notes
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}
