import React from 'react';
import { Link } from 'react-router-dom';
import { TbFileText } from 'react-icons/tb';

const NoteCard = ({ post }) => {
    return (
        <Link
            to={`/blog/${post.slug}`}
            className="block group p-6 border border-transparent hover:border-[var(--color-text-primary)] transition-all duration-300"
        >
            <div className="flex items-start gap-3">
                <TbFileText className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300 flex-shrink-0 mt-1" />
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] transition-colors mb-2">
                        {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-[var(--color-text-secondary)] mb-3 space-x-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="font-medium">{post.category}</span>
                        {post.readingTime && (
                            <>
                                <span>•</span>
                                <span>{post.readingTime}</span>
                            </>
                        )}
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {post.summary}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default NoteCard;
