import React from 'react';

const AboutSection = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-(--color-text-primary) mb-4">
                About Arghya
            </h2>
            <div className="prose prose-lg text-(--color-text-secondary) max-w-none">
                <p className="mb-4">
                    I’m Arghya, a engineer from Kolkata who likes to build things. Most of the time I am either building something on the web or trying to understand a concept properly enough to explain it in simple words.
                </p>
                <p> 
                    This space is where I keep those explanations. I write about mathematics, physics, frontend, backend, and sometimes astronomy, not as tutorials but as organized notes for my future self. If any of it helps someone else think a little clearer or solve a small problem, then this page has done its job.
                </p>
            </div>
            <hr className="mt-8 border-(--color-border)" />
        </section>
    );
};

export default AboutSection;
