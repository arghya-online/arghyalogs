import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "Spread vs Rest Operators in JavaScript",
    slug: "javascript-spread-rest-explained",
    date: "2026-04-01",
    category: "JavaScript",
    readTime: "6 min",
    summary:
        "De-confusing the '...' syntax. A dive into why the same operator behaves differently depending on context-expanding values (Spread) versus collecting them (Rest).",
};

function CodeBlock({ code, language = "javascript" }) {
    return (
        <div className="relative my-6 group">
            <pre className="overflow-x-auto bg-[#1e1e1e] p-4 rounded-lg text-sm text-[#d4d4d4] border border-border font-mono leading-relaxed">
                <div className="flex justify-between items-center mb-2 pb-2 border-b border-white/10 opacity-50 text-xs uppercase tracking-widest text-[#808080]">
                    <span>{language}</span>
                </div>
                <code>{code}</code>
            </pre>
            <div className="absolute top-12 right-2 invisible group-hover:visible transition-all">
                <CopyButton code={code} />
            </div>
        </div>
    );
}

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mt-8">
                <CodeBlock code={`const arr = [1, 2, 3];\nconst newArr = [...arr, 4];`} />
                <p>
                    The triple-dot syntax (<code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">...</code>) in JavaScript is a source of frequent confusion, primarily because it serves two diametrically opposed purposes depending on its context. In some scenarios, it expands data structures into individual elements; in others, it collects individual elements into a single structure. This duality-Spread and Rest-is not a single operator with multiple behaviors, but rather a shared syntax for two distinct conceptual operations.
                </p>
                <p>
                    Understanding when <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">...</code> is expanding versus collecting is the key to mastering modern, functional JavaScript patterns.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                The Mechanics of Spread: Unpacking Data
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    The Spread operator is used to "unpack" an iterable into its individual components. When applied to an array or an object, it takes every internal element and spreads it into a new structure. This is a foundational technique for non-mutative data handling, which is critical in state management libraries like Redux or within React components.
                </p>

                <CodeBlock code={`const arr1 = [1, 2];\nconst arr2 = [3, 4];\n\nconst merged = [...arr1, ...arr2]; // [1, 2, 3, 4]\n\nconst user = { name: "Arghya", age: 21 };\nconst updated = { ...user, age: 22 }; // New object created`} />

                <p>
                    Crucially, Spread creates a shallow copy. It doesn't move the original data but replicates it in a new container. This allows developers to "clone" and "update" structures without modifying the original source of truth. It shifts the paradigm from modifying existing variables to deriving new ones based on existing state.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                The Mechanics of Rest: Collecting Data
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Rest is the inverse of Spread. Instead of breaking a structure apart, it gathers separate values into a single array. This is most commonly seen in function signatures and destructuring patterns. It provides a cleaner alternative to the deprecated <code className="text-accent font-mono px-1">arguments</code> object, offering a true array that supports all standard methods.
                </p>

                <CodeBlock code={`function sum(...numbers) {\n    return numbers.reduce((acc, curr) => acc + curr, 0);\n}\n\nsum(1, 2, 3, 4); // numbers becomes [1, 2, 3, 4]`} />

                <p>
                    In destructuring, Rest allows you to isolate specific elements while grouping "the rest" of the data for later use. This is essential for building flexible components that pass through unknown props or for extracting header information while keeping the body of a payload intact.
                </p>

                <CodeBlock code={`const [first, ...others] = [1, 2, 3, 4];\n// first = 1, others = [2, 3, 4]`} />
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Directional Duality
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    The easiest way to distinguish between the two is to look at the data flow. Spread breaks things down (Expanding), while Rest builds things up (Collecting).
                </p>
                <div className="bg-surface border border-border rounded-lg p-6 font-mono text-sm space-y-4">
                    <div>
                        <span className="text-accent">Spread:</span> [1, 2, 3] → ... → 1, 2, 3
                    </div>
                    <div>
                        <span className="text-accent">Rest:</span> 1, 2, 3 → ... → [1, 2, 3]
                    </div>
                </div>
                <p>
                    This mental model eliminates the need for memorizing complex rules. If you are placing the <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">...</code> inside a container like <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">[...]</code> or <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">{`{...}`}</code> and targeting an existing variable, it's Spread. If you are placing it in a parameter list or on the left side of an assignment, it's Rest.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mb-12">
                <p>
                    In modern development, these operators are more than just syntactic shortcuts; they are the vocabulary of immutability and flexible API design. By understanding the directional nature of <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">...</code>, you stop guessing and start engineering data flows that are both predictable and cleaner to read. The operator is no longer a "trick"-it becomes a fundamental tool for managing complexity in your codebase.
                </p>
            </section>
        </article>
    );
}
