import React from 'react';

export const meta = {
    slug: 'digital-gardening',
    title: 'The Art of Digital Gardening',
    category: 'Notes',
    date: 'Nov 23, 2025',
    summary: 'Moving from chronological streams to interconnected gardens of thought.',
    plainText: `The internet used to be a collection of static pages. Then it became a stream of chronological posts (blogs, social media feeds). Now, we are seeing a resurgence of the "Digital Garden." Stream vs. Garden The Stream Chronological (time-bound). Ephemeral (disappears down the feed). Finished product (publish and forget). Context collapses over time. The Garden Topological (connected by links). Evergreen (evolves over time). Work in progress (learn in public). Context grows with connections. Principles 1. Bi-directional Linking: Notes should reference each other. A note about "React" should link to "JavaScript" and "UI Design". 2. Growth Stages: Notes can be seedlings (rough ideas), budding (developing thoughts), or evergreen (polished concepts). 3. Personal Knowledge Management (PKM): It's not just for an audience; it's a tool for your own thinking. Arghya Logs is an attempt to cultivate such a garden.`
};

const DigitalGardening = () => {
    return (
        <article className="prose prose-lg dark:prose-invert max-w-none">
            <p>
                The internet used to be a collection of static pages. Then it became a stream of chronological posts (blogs, social media feeds). Now, we are seeing a resurgence of the "Digital Garden."
            </p>

            <h2>Stream vs. Garden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-(--color-bg-secondary) p-6">
                    <h3 className="text-xl font-bold mb-2">The Stream</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Chronological (time-bound).</li>
                        <li>Ephemeral (disappears down the feed).</li>
                        <li>Finished product (publish and forget).</li>
                        <li>Context collapses over time.</li>
                    </ul>
                </div>
                <div className="bg-(--color-bg-secondary) p-6">
                    <h3 className="text-xl font-bold mb-2">The Garden</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Topological (connected by links).</li>
                        <li>Evergreen (evolves over time).</li>
                        <li>Work in progress (learn in public).</li>
                        <li>Context grows with connections.</li>
                    </ul>
                </div>
            </div>

            <h2>Principles</h2>
            <ol>
                <li>
                    <strong>Bi-directional Linking:</strong> Notes should reference each other. A note about "React" should link to "JavaScript" and "UI Design".
                </li>
                <li>
                    <strong>Growth Stages:</strong> Notes can be seedlings (rough ideas), budding (developing thoughts), or evergreen (polished concepts).
                </li>
                <li>
                    <strong>Personal Knowledge Management (PKM):</strong> It's not just for an audience; it's a tool for your own thinking.
                </li>
            </ol>

            <p>
                Arghya Logs is an attempt to cultivate such a garden.
            </p>
        </article>
    );
};

export default DigitalGardening;
