import React from 'react';

export const meta = {
    slug: 'physics-intro',
    title: 'Special Relativity',
    category: 'Physics',
    date: 'Nov 21, 2025',
    summary: "Understanding the basics of Einstein's Special Relativity.",
    plainText: `Special relativity is a theory of the structure of spacetime. It was introduced in Einstein's 1905 paper "On the Electrodynamics of Moving Bodies". Two Postulates 1. The Principle of Relativity: The laws of physics are the same in all inertial frames of reference (frames moving at constant velocity relative to one another). 2. The Invariance of c: The speed of light in a vacuum is the same for all observers, regardless of the motion of the light source or observer. Time Dilation One of the most famous consequences is time dilation. Time moves slower for an observer in motion relative to a stationary observer. Δt' = Δt / √(1 - v²/c²) As velocity (v) approaches the speed of light (c), the denominator approaches zero, and the time interval (Δt') approaches infinity.`
};

const PhysicsIntro = () => {
    return (
        <article className="prose prose-lg dark:prose-invert max-w-none">
            <p>
                Special relativity is a theory of the structure of spacetime. It was introduced in Einstein's 1905 paper "On the Electrodynamics of Moving Bodies".
            </p>
            <h2>Two Postulates</h2>
            <ol>
                <li>
                    <strong>The Principle of Relativity:</strong> The laws of physics are the same in all inertial frames of reference (frames moving at constant velocity relative to one another).
                </li>
                <li>
                    <strong>The Invariance of c:</strong> The speed of light in a vacuum is the same for all observers, regardless of the motion of the light source or observer.
                </li>
            </ol>
            <h2>Time Dilation</h2>
            <p>
                One of the most famous consequences is time dilation. Time moves slower for an observer in motion relative to a stationary observer.
            </p>
            <div className="bg-[var(--color-bg-secondary)] p-4 my-4 font-mono">
                Δt' = Δt / √(1 - v²/c²)
            </div>
            <p>
                As velocity (v) approaches the speed of light (c), the denominator approaches zero, and the time interval (Δt') approaches infinity.
            </p>
        </article>
    );
};

export default PhysicsIntro;
