import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) return <Navigate to="/projects" replace />;

    return (
        <article className="max-w-none">
            <Helmet>
                <title>{project.title} - Arghya Logs</title>
                <meta name="description" content={project.description} />
            </Helmet>
            
            <header className="mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                    {project.title}
                </h1>
                <p className="text-xl text-text-secondary mb-6 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-6">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-surface transition-colors text-sm font-medium">
                            <Github className="w-4 h-4" /> Source Code
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-surface transition-colors text-sm font-medium">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                    )}
                </div>
            </header>

            <div className="prose prose-neutral dark:prose-invert">
                <h2 className="text-2xl font-semibold mb-4 mt-8 text-text-primary">Overview & Documentation</h2>
                <p className="text-text-secondary leading-relaxed mb-8">{project.content}</p>

                <h2 className="text-2xl font-semibold mb-4 text-text-primary">Tech Stack</h2>
                <div className="flex flex-wrap gap-2 mt-3 mb-8">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-sm px-3 py-1 border border-border text-text-secondary bg-surface font-mono"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
