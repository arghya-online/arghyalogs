import React from 'react';
import NoteCard from '../Shared/NoteCard';

const LatestNotesSection = ({ posts, selectedCategory }) => {
    const filteredPosts = selectedCategory
        ? posts.filter(post => post.category === selectedCategory)
        : posts;

    return (
        <section>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                {selectedCategory ? `${selectedCategory} Notes` : 'Latest Notes'}
            </h2>

            <div className="space-y-2">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                        <NoteCard key={post.slug} post={post} />
                    ))
                ) : (
                    <div className="text-[var(--color-text-secondary)] py-8">
                        <p className="text-lg mb-2">
                            I didn't write anything here yet.
                        </p>
                        <p className="text-sm">
                            Visit other topics to see what I've been working on.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LatestNotesSection;
