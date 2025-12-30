import React from 'react';

export const metadata = {
    title: "The Beauty of Euler's Identity",
    slug: "eulers-identity",
    date: "2024-12-28",
    category: "Mathematics",
    readTime: "5 min",
    summary: "Exploring the derivation and significance of the most beautiful equation in mathematics.",
};

export default function BlogContent() {
    return (
        <article className="prose prose-invert max-w-none">
            <p>
                Euler's identity is often cited as the most beautiful equation in mathematics.
                It connects five of the most fundamental constants in mathematics:
            </p>
            <ul>
                <li>The number 0, the additive identity.</li>
                <li>The number 1, the multiplicative identity.</li>
                <li>The number $\pi$, which is ubiquitous in the geometry of Euclidean space.</li>
                <li>The number $e$, the base of natural logarithms.</li>
                <li>The number $i$, the imaginary unit.</li>
            </ul>
            <p>
                The identity is given by: {'$$ e^{i\\pi} + 1 = 0 $$'}
            </p>
            {/* More content would go here */}
        </article>
    );
}
