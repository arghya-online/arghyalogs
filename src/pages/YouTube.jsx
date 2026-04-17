import React from 'react';
import { Helmet } from 'react-helmet-async';
import { youtubeVideos } from '@/data/youtube';

const YT_RED = '#ff0000';

function VideoCard({ video }) {
    return (
        <a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-border bg-surface hover:border-red-500 transition-colors"
            style={{ '--hover-border': YT_RED }}
        >
            {video.thumbnail && (
                <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                </div>
            )}
            <div className="p-4">
                <div className="flex items-center justify-between text-xs text-text-secondary mb-2 font-mono">
                    <time>{video.date}</time>
                    <span className="flex items-center gap-1 font-medium" style={{ color: YT_RED }}>
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        {video.readTime}
                    </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary group-hover:text-red-500 transition-colors leading-snug">
                    {video.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                    {video.summary}
                </p>
            </div>
        </a>
    );
}

export default function YouTube() {
    return (
        <div className="space-y-8">
            <Helmet>
                <title>YouTube - Arghya Logs</title>
                <meta name="description" content="My latest YouTube videos on programming and robotics." />
            </Helmet>

            {/* Page Header */}
            <header className="pb-6 border-b-2" style={{ borderColor: YT_RED }}>
                <div className="flex items-center gap-3 mb-2">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill={YT_RED}>
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <h1 className="text-3xl font-bold" style={{ color: YT_RED }}>YouTube</h1>
                </div>
                <p className="text-text-secondary leading-relaxed">
                    Video concepts from my channel. Mainly focused on coding and building things.
                </p>
                <a
                    href="https://www.youtube.com/@arghya_explains_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium border transition-colors text-white"
                    style={{ backgroundColor: YT_RED, borderColor: YT_RED }}
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Visit Channel
                </a>
            </header>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {youtubeVideos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
}
