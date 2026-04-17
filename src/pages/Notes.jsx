import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogCard from '@/components/features/BlogCard';
import { socialNotes } from '@/data/socialNotes';

export default function Notes() {
    return (
        <div className="space-y-12">
            <Helmet>
                <title>Notes - Arghya Logs</title>
                <meta name="description" content="Short-form thoughts and notes on programming." />
            </Helmet>
            <section>
                <h1 className="text-3xl font-bold mb-4">Notes</h1>
                <p className="text-text-secondary leading-relaxed max-w-prose mb-8">
                    Brief notes, quick thoughts, and snippets. Just random ideas loosely held.
                </p>
                <div className="space-y-2">
                    {socialNotes.map(note => (
                        <BlogCard key={note.id} blog={note} type="note" />
                    ))}
                </div>
            </section>
        </div>
    );
}
