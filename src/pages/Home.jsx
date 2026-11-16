import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "@/lib/blogs";
import BlogCard from "@/components/features/BlogCard";
import { Helmet } from "react-helmet-async";
import { techColors } from "@/data/projects";
import { youtubeVideos } from "@/data/youtube";
import { socialNotes } from "@/data/socialNotes";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const allBlogs = getAllBlogs();
  const displayedBlogs = allBlogs.slice(0, 3);
  const displayedVideos = youtubeVideos.slice(0, 2);
  const displayedNotes = socialNotes.slice(0, 2);

  const [showLoading, setShowLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("arghya_visited");
    }
    return false;
  });

  const [heroReady, setHeroReady] = useState(() => {
    if (typeof window !== "undefined") {
      return !!sessionStorage.getItem("arghya_visited");
    }
    return true;
  });

  const techStack = Object.keys(techColors);

  return (
    <div className="space-y-24 sm:space-y-32 md:space-y-40">
      {showLoading && (
        <LoadingScreen
          onComplete={() => {
            setShowLoading(false);
            setHeroReady(true);
          }}
        />
      )}

      <Helmet>
        <title>Arghya Majumdar</title>
        <meta
          name="description"
          content="I build websites and applications that solve real problems. Personal portfolio and logs."
        />
      </Helmet>

      {/* HERO SECTION */}
      <Hero shouldAnimate={heroReady} />

      <section className="space-y-4 max-w-prose">
        <h2 className="text-2xl font-bold text-text-primary">About</h2>
        <p className="text-text-secondary leading-relaxed">
          I'm Arghya, from Kolkata.
        </p>
        <p className="text-text-secondary leading-relaxed">
          I build websites and apps. That's mostly what I do all day. Just
          trying to make things that actually work and are useful.
        </p>
        <p className="text-text-secondary leading-relaxed">
          I usually work with React, Node.js, and whatever database fits. I try
          to keep things simple and clean. Nothing too fancy.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Coding isn't always fun. Most of the time it's just fixing small bugs
          again and again. But when it finally works, that feeling is different.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Outside of that, I build robots sometimes. I also do a bit of CAD
          modeling and 3D printing, mostly just as a hobby, trying things out
          and seeing what works.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Also started making some YouTube videos, nothing serious, just sharing
          stuff I learn.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Still figuring things out.
        </p>
      </section>

      {/* TECH STACK SECTION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-text-primary">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 border border-border text-text-secondary bg-surface"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* YOUTUBE SECTION */}
      <section
        className="space-y-6 p-6 -mx-6 border-l-4  -r-lg"
        style={{ borderColor: "#ff0000", backgroundColor: "#ff00000a" }}
      >
        <div className="flex items-center justify-between">
          <h2
            className="text-2xl font-bold flex items-center gap-3"
            style={{ color: "#ff0000" }}
          >
            <svg
              className="w-7 h-7 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Latest Videos
          </h2>
          <a
            href="https://www.youtube.com/@arghya_explains_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: "#ff0000" }}
          >
            View Channel →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedVideos.map((video) => (
            <BlogCard key={video.id} blog={video} type="youtube" />
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-text-primary border-t border-border pt-8 mt-2 flex items-center justify-between">
          Recent Notes
          <span className="text-sm font-mono text-accent opacity-60">
            {allBlogs.length} total
          </span>
        </h2>

        <div className="space-y-2">
          {displayedBlogs.length > 0 ? (
            displayedBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))
          ) : (
            <p className="text-text-secondary italic">No notes found.</p>
          )}
        </div>

        <div className="mt-8">
          <Link
            to="/blogs"
            className="px-6 py-2.5 text-sm font-medium bg-surface hover:bg-border text-text-primary  -md transition-colors border border-border mt-4 inline-block"
          >
            View All Blogs
          </Link>
        </div>
      </section>
    </div>
  );
}
