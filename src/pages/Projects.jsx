import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ExternalLink, Github, ArrowUpRight, Code2, Sparkles, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, techColors } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

/**
 * Editorial Image Preview with 16:9 Horizontal Widescreen Aspect Ratio,
 * Parallax Scroll, Clip-path Reveal, and Neutral Fallback Placeholder.
 */
function ProjectPreviewImage({ project, sectionRef }) {
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      if (imageWrapperRef.current) {
        gsap.set(imageWrapperRef.current, { autoAlpha: 1, clipPath: "none" });
      }
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Clip-path reveal animation when section enters viewport
      gsap.fromTo(
        imageWrapperRef.current,
        {
          clipPath: "inset(10% 0% 10% 0%)",
          autoAlpha: 0.3,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          autoAlpha: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Parallax vertical travel during natural scroll
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -4, scale: 1.05 },
          {
            yPercent: 4,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <div className="w-full">
      <div
        ref={imageWrapperRef}
        className="w-full aspect-[16/9] relative rounded-sm overflow-hidden border border-border/80 bg-surface shadow-md group transition-all duration-500 hover:border-amber-500/60 hover:shadow-xl"
      >
        {/* Subtle Editorial Top Browser Meta Bar inside frame */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3.5 py-2 bg-gradient-to-b from-black/75 via-black/40 to-transparent pointer-events-none select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 opacity-80">
              <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="font-mono text-[10px] tracking-wider text-zinc-300 uppercase pl-1.5 border-l border-zinc-700">
              {project.category}
            </span>
          </div>
          <span className="font-mono text-[10px] text-zinc-400">
            {project.number} / {project.total || "05"}
          </span>
        </div>

        {/* Fallback Neutral Placeholder if image is missing or errors */}
        {imageError ? (
          <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-zinc-950 text-zinc-300 select-none">
            {/* Technical grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-widest text-amber-500 uppercase">
                {project.number} — SYSTEM ARCHIVE
              </span>
              <span className="text-[11px] font-mono text-zinc-500">PROD // LIVE</span>
            </div>

            <div className="relative z-10 my-auto text-center py-4">
              <div className="w-11 h-11 mx-auto mb-2.5 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400">
                <Code2 className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-lg font-bold font-jakarta text-white">
                {project.title || project.name}
              </p>
              <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest block mt-0.5">
                16:9 Widescreen Screenshot Preview
              </span>
            </div>

            <div className="relative z-10 border-t border-zinc-800/80 pt-2.5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>{project.slug || project.id}</span>
              <span>16:9 WIDESCREEN</span>
            </div>
          </div>
        ) : (
          <div className="w-full h-full relative overflow-hidden bg-surface/50">
            <img
              ref={imageRef}
              src={project.image}
              alt={project.imageAlt || `Screenshot preview of ${project.title || project.name}`}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover object-top select-none transition-opacity duration-700 ease-out group-hover:scale-[1.02] ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
            />
            {/* Loading shimmer while image parses */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-surface animate-pulse flex items-center justify-center">
                <span className="font-mono text-xs text-text-secondary">
                  Loading preview...
                </span>
              </div>
            )}
          </div>
        )}

        {/* Bottom subtle gradient vignette */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

/**
 * Single Editorial Project Section
 */
function EditorialProjectSection({ project, index, total }) {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);

  const title = project.title || project.name || "";
  const slug = project.slug || project.id || "";
  const techList = project.technologies || project.tech || [];
  const liveUrl = project.liveUrl || project.live || "";
  const githubUrl =
    project.githubUrl !== undefined ? project.githubUrl : project.github || null;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      if (infoRef.current) {
        gsap.set(infoRef.current.children, { autoAlpha: 1, y: 0 });
      }
      return;
    }

    const ctx = gsap.context(() => {
      // Text content reveal stagger
      const children = infoRef.current?.children;
      if (children) {
        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 76%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const isLast = index === total - 1;

  return (
    <article
      ref={sectionRef}
      className="relative scroll-mt-20"
      aria-label={`Project: ${title}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-center">
        {/* LEFT COLUMN: 16:9 Horizontal Preview Container */}
        <div className="lg:col-span-7 xl:col-span-7">
          <ProjectPreviewImage project={project} sectionRef={sectionRef} />
        </div>

        {/* RIGHT COLUMN: Project Information */}
        <div
          ref={infoRef}
          className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6"
        >
          {/* 1. Project numbering & category metadata */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold text-amber-500 tracking-wider">
              {project.number}
            </span>
            <span className="font-mono text-xs sm:text-sm text-border">/</span>
            <span className="font-mono text-xs sm:text-sm text-text-secondary tracking-wider">
              {project.total || "05"}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-text-secondary">
              {project.readTime || project.category || "Web App"}
            </span>
          </div>

          {/* 2. Large expressive title + tagline */}
          <div className="space-y-1.5 sm:space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-text-primary font-jakarta leading-tight">
              <Link
                to={`/projects/${slug}`}
                className="hover:text-amber-500 transition-colors inline-block"
              >
                {title}
                <span className="text-amber-500">.</span>
              </Link>
            </h2>
            {project.tagline && (
              <p className="font-mono text-xs sm:text-sm text-text-secondary tracking-wide">
                {project.tagline}
              </p>
            )}
          </div>

          {/* 3. Concise 2-3 line description */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-sans max-w-xl">
            {project.description}
          </p>

          {/* 4. Highlighted Tech Stack with brand accent dots and comfortable spacing */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-text-secondary flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-500" />
                <span>Tech Stack & Architecture</span>
              </span>
              <span className="font-mono text-[10px] text-text-secondary/70">
                {techList.length} technologies
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {techList.map((technology) => {
                const color = techColors[technology] || "#f59e0b";
                return (
                  <span
                    key={technology}
                    className="group/tech inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium rounded-sm border border-border/80 bg-surface/90 text-text-primary transition-all duration-300 hover:border-amber-500/70 hover:bg-surface hover:-translate-y-0.5 hover:shadow-[0_2px_10px_rgba(0,0,0,0.06)] select-none"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0 ring-1 ring-border/50 transition-transform duration-300 group-hover/tech:scale-125"
                      style={{
                        backgroundColor: color,
                        boxShadow: `0 0 6px ${color}66`,
                      }}
                      aria-hidden="true"
                    />
                    <span className="tracking-tight text-text-primary group-hover/tech:text-amber-500 transition-colors">
                      {technology}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* 5. Clear Accessible Links: Live Demo & GitHub Repository */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-3 border-t border-border/70">
            {/* Live Demo Link */}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link relative inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-text-primary hover:text-amber-500 transition-colors py-1"
                aria-label={`Open live demo of ${title}`}
              >
                <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-full after:bg-amber-500 after:origin-left after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:duration-300">
                  Live Demo
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-amber-500" />
              </a>
            )}

            {/* GitHub Repository Link (hidden gracefully if null) */}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link relative inline-flex items-center gap-2 text-sm sm:text-base font-medium text-text-secondary hover:text-text-primary transition-colors py-1"
                aria-label={`View GitHub repository for ${title}`}
              >
                <Github className="w-4 h-4 transition-colors group-hover/link:text-text-primary" />
                <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-full after:bg-text-primary after:origin-left after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:duration-300">
                  GitHub
                </span>
              </a>
            )}

            {/* Read Documentation link */}
            <Link
              to={`/projects/${slug}`}
              className="group/link text-xs sm:text-sm font-mono text-text-secondary hover:text-amber-500 transition-colors inline-flex items-center gap-1.5 ml-auto py-1"
            >
              <span>Overview</span>
              <span className="transition-transform group-hover/link:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Editorial Separator between consecutive project sections */}
      {!isLast && (
        <div
          className="w-full my-20 sm:my-28 lg:my-36 border-t border-border/70 relative flex items-center justify-between"
          aria-hidden="true"
        >
          <div className="absolute -top-[9px] left-0 px-2 bg-background font-mono text-[10px] text-text-secondary uppercase tracking-widest select-none">
            {project.number} ✦ NEXT
          </div>
          <div className="absolute -top-[9px] right-0 px-2 bg-background font-mono text-[10px] text-text-secondary uppercase tracking-widest select-none">
            INDEX 0{index + 2}
          </div>
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const progressBarRef = useRef(null);

  // Robust array extraction supporting both raw array and { projects: [...] } object
  const projectList = Array.isArray(projects)
    ? projects
    : projects?.projects || [];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );

      // Scroll progress line across entire projects page
      if (progressBarRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      <Helmet>
        <title>Projects — Arghya Majumdar</title>
        <meta
          name="description"
          content="Premium editorial showcase of full-stack engineering projects, applications, and systems built by Arghya Majumdar."
        />
      </Helmet>

      {/* Floating editorial scroll progress line */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 origin-left z-50 pointer-events-none"
        aria-hidden="true"
      />

      {/* Page Header */}
      <header
        ref={headerRef}
        className="border-b border-border pb-10 sm:pb-12 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-surface text-xs font-mono text-text-secondary rounded-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>EDITORIAL SHOWCASE · SELECTED WORKS (2024–2026)</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary font-jakarta">
          Featured Projects<span className="text-amber-500">.</span>
        </h1>

        <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
          A curated collection of web applications, platforms, and full-stack
          systems. Each system explores high-reliability architecture, clean
          user experience, and production-grade engineering.
        </p>

        {/* Quick jump indices */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-text-secondary">
          <span className="uppercase tracking-widest text-[10px]">Jump to:</span>
          {projectList.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="hover:text-amber-500 transition-colors border-b border-dashed border-border hover:border-amber-500 pb-0.5"
            >
              {p.number}. {p.title || p.name}
            </a>
          ))}
        </div>
      </header>

      {/* Vertical Stack of Editorial Projects */}
      <main className="space-y-16 sm:space-y-20 lg:space-y-24">
        {projectList.map((project, index) => (
          <div key={project.id} id={project.id}>
            <EditorialProjectSection
              project={project}
              index={index}
              total={projectList.length}
            />
          </div>
        ))}
      </main>

      {/* Section End Note */}
      <section className="border-t border-border pt-12 pb-6 text-center space-y-3">
        <p className="font-mono text-xs text-text-secondary uppercase tracking-wider">
          More experiment logs & open source repos available on{" "}
          <a
            href="https://github.com/arghya-online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary underline hover:text-amber-500 transition-colors"
          >
            GitHub
          </a>
        </p>
      </section>
    </div>
  );
}
