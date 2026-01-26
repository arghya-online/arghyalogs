import React from 'react';
import { getLatestBlogs } from "@/lib/blogs";
import BlogCard from "@/components/features/BlogCard";
import { Github, Twitter, Youtube } from "lucide-react";

export default function Home() {
    const latestBlogs = getLatestBlogs();

    return (
        <div className="space-y-16 max-w-3xl mx-auto">
            <section className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-text-primary">About Arghya</h1>
                <div className="prose prose-lg prose-invert prose-neutral max-w-none prose-p:text-text-secondary prose-p:leading-relaxed">
                    <p>
                        Hi, I’m Arghya, a engineer from Kolkata who likes to build things. Most of the time I am either building something on the web or trying to understand a concept properly enough to explain it in simple words.
                    </p>
                    <p>
                        This space is where I keep those explanations. I write about mathematics, physics, frontend, backend, and sometimes astronomy, not as tutorials but as organized notes for my future self. If any of it helps someone else think a little clearer or solve a small problem, then this page has done its job.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start">
                    <a
                        href="https://github.com/arghya-online"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
                    >
                        <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium font-serif italic">GitHub</span>
                    </a>
                    <a
                        href="https://x.com/arghyabuilds"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
                    >
                        <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium font-serif italic">Twitter</span>
                    </a>
                    <a
                        href="https://www.youtube.com/@arghya_explains_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
                    >
                        <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium font-serif italic">YouTube</span>
                    </a>
                </div>
            </section>

            <section>
                <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
                    <h2 className="text-3xl font-serif font-bold text-text-primary">
                        Latest Notes
                    </h2>
                    <span className="text-sm font-mono text-text-secondary">
                        {latestBlogs.length} posts
                    </span>
                </div>

                <div className="space-y-6">
                    {latestBlogs.length > 0 ? (
                        latestBlogs.map(blog => (
                            <BlogCard key={blog.slug} blog={blog} />
                        ))
                    ) : (
                        <p className="text-text-secondary italic font-serif">No notes found.</p>
                    )}
                </div>
            </section>


        </div >
    );
}
