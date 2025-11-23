import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import posts from '../../blogs';

const SearchPalette = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            setQuery('');
            setFilteredPosts([]);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setFilteredPosts([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const results = posts.filter(post => {
            const titleMatch = post.title.toLowerCase().includes(lowerQuery);
            const summaryMatch = post.summary.toLowerCase().includes(lowerQuery);
            const categoryMatch = post.category.toLowerCase().includes(lowerQuery);
            return titleMatch || summaryMatch || categoryMatch;
        });

        setFilteredPosts(results);
    }, [query]);

    const handleSelectPost = (slug) => {
        navigate(`/blog/${slug}`);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] shadow-2xl overflow-hidden animate-fade-in-up">
                <div className="flex items-center px-4 py-3 border-b border-[var(--color-border)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--color-text-secondary)] mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        className="flex-1 bg-transparent border-none outline-none text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] text-lg"
                        placeholder="Search posts..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        onClick={onClose}
                        className="ml-2 text-xs font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)] px-2 py-1"
                    >
                        ESC
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                    {query.trim() === '' ? (
                        <div className="p-8 text-center text-[var(--color-text-secondary)]">
                            <p className="text-sm">Type to search blogs by title, summary, or category.</p>
                        </div>
                    ) : filteredPosts.length > 0 ? (
                        <div className="py-2">
                            {filteredPosts.map((post) => (
                                <button
                                    key={post.slug}
                                    onClick={() => handleSelectPost(post.slug)}
                                    className="w-full text-left px-4 py-3 hover:bg-[var(--color-bg-secondary)] transition-colors group border-b border-[var(--color-border)] last:border-none"
                                >
                                    <div className="flex items-baseline justify-between mb-1">
                                        <h4 className="text-base font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                                            {post.title}
                                        </h4>
                                        <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider ml-2">
                                            {post.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-1">
                                        {post.summary}
                                    </p>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center text-[var(--color-text-secondary)]">
                            <p>No results found for "{query}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPalette;
