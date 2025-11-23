import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../blogs';

const BlogPage = () => {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                <h2 className="text-2xl font-bold text-(--color-text-primary) mb-4">Post not found</h2>
                <p className="text-(--color-text-secondary) mb-6">The note you are looking for does not exist.</p>
                <Link
                    to="/"
                    className="text-(--color-text-primary) underline hover:text-(--color-text-secondary)"
                >
                    Back to Home
                </Link>
            </div>
        );
    }

    const { Component, title, date, category, readingTime } = post;

    return (
        <div className="animate-fade-in max-w-3xl mx-auto">
            <Link
                to="/"
                className="inline-flex items-center text-sm text-(--color-text-secondary) hover:text-(--color-text-primary) mb-8 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Notes
            </Link>

            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-(--color-text-primary) mb-4 leading-tight">
                    {title}
                </h1>
                <div className="flex items-center text-sm text-(--color-text-secondary) space-x-4 font-medium">
                    <span>{date}</span>
                    <span className="w-1 h-1 bg-(--color-text-secondary)"></span>
                    <span className="uppercase tracking-wider">{category}</span>
                    {readingTime && (
                        <>
                            <span className="w-1 h-1 bg-(--color-text-secondary)"></span>
                            <span>{readingTime}</span>
                        </>
                    )}
                </div>
            </header>

            <div className="max-w-none">
                <Component />
            </div>
        </div>
    );
};

export default BlogPage;
