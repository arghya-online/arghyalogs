import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Github,
    Mail,
    ExternalLink,
    Code2,
    Cpu,
    Globe,
    Terminal,
    Database
} from "lucide-react";

import { cn } from "@/lib/utils";
import { skills, projects } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const techStackRef = useRef(null);
    const projectsRef = useRef(null);

    // --- Animations ---
    useEffect(() => {
        const ctx = gsap.context(() => {

            // Hero: Fade up + stagger
            gsap.from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Section Headers: Slide up
            gsap.utils.toArray(".section-header").forEach(header => {
                gsap.from(header, {
                    scrollTrigger: {
                        trigger: header,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8
                });
            });

            // Tech Stack: Staggered reveal
            gsap.from(".tech-item", {
                scrollTrigger: {
                    trigger: techStackRef.current,
                    start: "top 75%"
                },
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05
            });

            // Project Cards: Staggered list
            gsap.from(".project-card", {
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                clearProps: "transform,opacity"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen pb-20">

            {/* --- Hero Section --- */}
            <section ref={heroRef} className="py-20 md:py-32 flex flex-col justify-center">
                <div className="space-y-6 max-w-3xl">

                    {/* Availability Badge */}
                    <div className={cn(
                        "hero-text inline-flex items-center gap-2 px-3 py-1 text-sm font-medium",
                        "bg-accent/10 text-accent rounded-none"
                    )}>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-none h-2 w-2 bg-accent"></span>
                        </span>
                        Available for work
                    </div>

                    {/* Main Title */}
                    <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight text-text-primary">
                        Arghya
                        <span className="block mt-2 text-xl md:text-2xl text-accent font-normal font-mono">
                            @arghyabuilds
                        </span>
                    </h1>

                    {/* Bio */}
                    <div className="hero-text space-y-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
                        <p>
                            Hey, I’m Arghya. I’m a developer based in Kolkata. I spend most of my time building websites and applications that actually help in some way.
                            I love when something I build ends up helping someone or solving a real problem.
                        </p>
                        <p>
                            Programming, for me, is half logic and half patience. It’s not always fun, sometimes it’s just me staring at the screen, fixing one tiny thing at a time.
                            But the moment it finally works, it’s a proper Eureka feeling.
                        </p>
                        <p>
                            When I’m not working, I like to build and tinker with robots. So far, I’ve built 8+ robots, won 2+ hackathons, and shipped a few gigs along the way.
                        </p>
                        <p className="italic text-base opacity-80">
                            And yeah, maybe one day I’ll finally be able to explain to my parents what all this “coding stuff” actually is.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="hero-text flex gap-4 pt-4">
                        <SocialLink href="https://github.com/arghyabuilds" icon={<Github className="w-5 h-5" />} />
                        <SocialLink href="mailto:arghyamajumdar.contact@gmail.com" icon={<Mail className="w-5 h-5" />} />
                    </div>
                </div>
            </section>


            {/* --- Tech Stack Section --- */}
            <section ref={techStackRef} className="py-16 border-t border-border">
                <h2 className="section-header text-3xl font-bold mb-12 flex items-center gap-3">
                    <Terminal className="w-8 h-8 text-accent" />
                    Tech Stack
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SkillGroup title="Languages" icon={<Code2 className="w-5 h-5" />} items={skills.languages} />
                    <SkillGroup title="Frameworks" icon={<Globe className="w-5 h-5" />} items={skills.frameworks} />
                    <SkillGroup title="Tools" icon={<Cpu className="w-5 h-5" />} items={skills.tools} />
                </div>
            </section>


            {/* --- Projects Section --- */}
            <section ref={projectsRef} className="py-16 border-t border-border">
                <h2 className="section-header text-3xl font-bold mb-12 flex items-center gap-3">
                    <Database className="w-8 h-8 text-accent" />
                    Selected Works
                </h2>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>


            {/* --- Contact CTA --- */}
            <section className="py-20 text-center border-t border-border">
                <div className="section-header max-w-2xl mx-auto space-y-6">
                    <h2 className="text-4xl font-bold text-text-primary">Let's Build Something Together</h2>
                    <p className="text-text-secondary">
                        Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <a
                        href="mailto:arghyamajumdar.contact@gmail.com"
                        className={cn(
                            "inline-flex items-center gap-2 px-6 py-3 rounded-none font-bold transition-transform hover:scale-105",
                            "bg-accent text-background hover:bg-accent/90"
                        )}
                    >
                        <Mail className="w-5 h-5" />
                        Get in touch
                    </a>
                </div>
            </section>

        </div>
    );
}

// --- Sub-components for cleaner Main Component ---

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "p-2 rounded-none border border-border transition-colors",
                "hover:border-accent hover:text-accent"
            )}
        >
            {icon}
        </a>
    );
}

function SkillGroup({ title, icon, items }) {
    return (
        <div className="space-y-4">
            <h3 className="section-header text-xl font-semibold text-text-primary flex items-center gap-2">
                {icon} {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                    <span
                        key={skill}
                        className={cn(
                            "tech-item px-3 py-1.5 text-sm rounded-none border transition-colors",
                            "bg-surface border-border hover:border-accent/50"
                        )}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    return (
        <div className={cn(
            "project-card group relative p-6 transition-all duration-300",
            "bg-surface/30 rounded-none border border-border",
            "hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
        )}>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>
                        {project.featured && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-none border border-accent/20">
                                Featured
                            </span>
                        )}
                    </div>

                    <p className="text-text-primary/80 leading-relaxed max-w-2xl">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono px-2 py-1 bg-background border border-border text-text-primary/70 rounded-none">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pt-4 md:pt-0 shrink-0 flex flex-col gap-2">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-none",
                            "bg-background border border-border hover:border-accent hover:text-accent"
                        )}
                    >
                        View Project <ExternalLink className="w-4 h-4" />
                    </a>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-none",
                                "bg-background border border-border hover:border-accent hover:text-accent"
                            )}
                        >
                            Github <Github className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
