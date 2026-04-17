import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
    const [hovered, setHovered] = useState(null);
    const featured = projects.filter(p => p.featured);
    const rest = projects.filter(p => !p.featured);

    return (
        <div className="space-y-16">
            <Helmet>
                <title>Projects - Arghya Logs</title>
                <meta name="description" content="A collection of things I've built." />
            </Helmet>

            {/* Header */}
            <header className="border-b border-border pb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-3">Projects</h1>
                <p className="text-text-secondary max-w-prose">
                    A list of things I've built. Some are useful, some are just for fun. All of them taught me something.
                </p>
            </header>

            {/* Featured */}
            <section className="space-y-4">
                <h2 className="text-xs font-mono font-semibold tracking-widest text-text-secondary uppercase">Featured</h2>
                <div className="space-y-px border border-border">
                    {featured.map((project, i) => (
                        <ProjectRow
                            key={project.id}
                            project={project}
                            index={i + 1}
                            isHovered={hovered === project.id}
                            onHover={() => setHovered(project.id)}
                            onLeave={() => setHovered(null)}
                        />
                    ))}
                </div>
            </section>

            {/* Other */}
            {rest.length > 0 && (
                <section className="space-y-4">
                    <h2 className="text-xs font-mono font-semibold tracking-widest text-text-secondary uppercase">Other Work</h2>
                    <div className="space-y-px border border-border">
                        {rest.map((project, i) => (
                            <ProjectRow
                                key={project.id}
                                project={project}
                                index={featured.length + i + 1}
                                isHovered={hovered === project.id}
                                onHover={() => setHovered(project.id)}
                                onLeave={() => setHovered(null)}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
import { useNavigate } from 'react-router-dom';

function ProjectRow({ project, index, isHovered, onHover, onLeave }) {
    const navigate = useNavigate();

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => navigate(`/projects/${project.slug}`)}
            className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 px-5 py-5 border-b border-border last:border-b-0 transition-colors cursor-pointer"
            style={{ backgroundColor: isHovered ? 'var(--color-surface)' : 'transparent' }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Top Row (Mobile) / Left Side (Desktop) */}
            <div className="flex items-center justify-between sm:w-auto w-full">
                <div className="flex items-center gap-3 sm:block">
                    <span className="font-mono text-xs text-text-secondary w-5 flex-shrink-0 select-none">
                        {String(index).padStart(2, '0')}
                    </span>
                    {/* Mobile Title */}
                    <h3 className="text-base font-semibold text-text-primary leading-snug sm:hidden">
                        {project.title}
                    </h3>
                </div>

                {/* Mobile Action Icons */}
                <div className="flex items-center gap-3 flex-shrink-0 sm:hidden">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="text-text-secondary hover:text-text-primary transition-colors"
                            title="Source Code"
                            onClick={e => e.stopPropagation()}
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="text-text-secondary hover:text-text-primary transition-colors"
                            title="Live Demo"
                            onClick={e => e.stopPropagation()}
                        >
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                    <ArrowRight className="w-4 h-4 text-text-secondary" />
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 min-w-0 sm:pl-0 pl-[2rem]">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        {/* Desktop Title */}
                        <h3 className="hidden sm:block text-base font-semibold text-text-primary leading-snug">
                            {project.title}
                        </h3>
                        <p className="text-sm text-text-secondary sm:mt-1 leading-relaxed max-w-xl">
                            {project.description}
                        </p>
                    </div>
                    {/* Desktop Type Label */}
                    <span className="hidden sm:block text-xs font-mono text-text-secondary flex-shrink-0 pt-0.5">
                        {project.readTime}
                    </span>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-3">
                    {project.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 border border-border text-text-secondary bg-background">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Desktop Action links (Hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-4 flex-shrink-0 pt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-text-secondary hover:text-text-primary transition-colors"
                        title="Source Code"
                        onClick={e => e.stopPropagation()}
                    >
                        <Github className="w-4 h-4" />
                    </a>
                )}
                {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="text-text-secondary hover:text-text-primary transition-colors"
                        title="Live Demo"
                        onClick={e => e.stopPropagation()}
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
                <ArrowRight className="w-4 h-4 text-text-secondary" />
            </div>
        </div>
    );
}
