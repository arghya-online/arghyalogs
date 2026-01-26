import React from 'react';
import { getLatestBlogs } from "@/lib/blogs";
import BlogCard from "@/components/features/BlogCard";
import { Github, Twitter, Youtube } from "lucide-react";

export default function Home() {
    const latestBlogs = getLatestBlogs();

    return (
        <div className="space-y-12">
            <section>
                <h1 className="text-3xl font-bold mb-4">Who Am I?</h1>
                <p className="text-text-secondary leading-relaxed max-w-prose mb-6">
                    Hi, I’m Arghya, a engineer from Kolkata who likes to build things. Most of the time I am either building something on the web or trying to understand a concept properly enough to explain it in simple words.
                    <br /><br />
                    This space is where I keep those explanations. I write about mathematics, physics, frontend, backend, and sometimes astronomy, not as tutorials but as organized notes for my future self. If any of it helps someone else think a little clearer or solve a small problem, then this page has done its job.
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
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-6 text-text-primary flex items-center gap-2">
                    Latest Notes
                    <span className="text-xs font-normal text-text-secondary px-2 py-0.5 rounded-full border border-border">
                        {latestBlogs.length}
                    </span>
                </h2>

                <div className="space-y-2">
                    {latestBlogs.length > 0 ? (
                        latestBlogs.map(blog => (
                            <BlogCard key={blog.slug} blog={blog} />
                        ))
                    ) : (
                        <p className="text-text-secondary italic">No notes found.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
