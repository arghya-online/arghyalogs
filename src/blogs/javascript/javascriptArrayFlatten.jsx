import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "Array Flatten in JavaScript",
    slug: "javascript-array-flatten",
    date: "2026-04-16",
    category: "JavaScript",
    readTime: "6 min",
    summary:
        "Understanding what array flattening really means instead of just knowing that a method exists for it. A look at traversal, recursion, and practical use cases.",
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
                <p>
                    Asynchronous data processing often reveals structural issues that aren't immediately obvious. While working with API responses, I encountered arrays that appeared straightforward in the console but caused unpredictable behavior during operations like map and filter. After further investigation, the problem wasn't the logic itself, but the data's nesting. Some elements were arrays within arrays, creating a multi-layered structure that broke standard processing assumptions.
                </p>
                <p>
                    This is where the concept of array flattening moves from being a simple built-in method to a necessary structural transformation. Knowing the method is one thing; understanding why the structure exists is another.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Understanding what nested arrays really are
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    A nested array is simply an array that contains other arrays as elements. While the definition is simple, the behavior is deceptive. At a glance, <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">[1, [2, 3], [4, [5, 6]]]</code> looks like a collection of numbers, but it’s actually a multi-dimensional hierarchy. Mapping or filtering over a structure like this fails because your iterator function expects a value but receives a different shape of data entirely.
                </p>

                <CodeBlock code={`const arr = [1, [2, 3], [4, [5, 6]]];\n\n// This will fail to double children\narr.map(x => x * 2);`} />

                <p>
                    When <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">x</code> is an array, <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">x * 2</code> results in <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">NaN</code>. This structural mismatch necessitates flattening: the process of converting a nested hierarchy into a predictable, single-level list.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                The Mechanics of Flattening
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Flattening is essentially a traversal problem. To flatten an array, you must visit every element. If an element is a value, you collect it; if it's an array, you must descend into that array and repeat the process. It’s not about "removing brackets" in a string-like fashion—it's about walking a tree structure and collecting its leaves into a flat sequence.
                </p>
                <p>
                    This transformation simplifies mapping, filtering, and reduction logic by ensuring every element in the resulting collection shares the same shape. This is critical when dealing with grouped data or nested API responses where the depth of information isn't always consistent.
                </p>

                <CodeBlock code={`[1, [2, 3], [4, [5, 6]]] // becomes \n[1, 2, 3, 4, 5, 6]`} />
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Approaches to Implementation
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Modern JavaScript provides <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">arr.flat(Infinity)</code> to handle arbitrary depths in a single line. While this is the standard for production code, implementing it manually clarifies the underlying recursion. A recursive loop checks <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">Array.isArray()</code> on every item, either concatenating the results of a deeper call or pushing the literal value into the result set.
                </p>

                <CodeBlock code={`function flatten(arr) {\n    let result = [];\n    for (let item of arr) {\n        if (Array.isArray(item)) {\n            result = result.concat(flatten(item));\n        } else {\n            result.push(item);\n        }\n    }\n    return result;\n}`} />

                <p>
                    Alternatively, a functional approach using <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">reduce</code> achieves the same goal by accumulating values and recursively calling the flatten function whenever a nested array is encountered. The core logic remains identical: detect nesting, descend, and merge.
                </p>

                <CodeBlock code={`function flatten(arr) {\n    return arr.reduce((acc, item) => {\n        return acc.concat(Array.isArray(item) ? flatten(item) : item);\n    }, []);\n}`} />
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Real-World Application and Interviews
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Flattening is a frequent interview topic because it tests your ability to handle recursion and data traversal. Challenges often involve specific constraints, such as limiting the depth of flattening or avoiding specific built-in methods. The common trap is a failure to differentiate between values and arrays during the traversal, which leads to incomplete flattening or runtime errors.
                </p>
                <p>
                    In actual development, data is rarely as flat as we’d like. It’s structured for storage or grouping, not for consumption. Mastering flattening lets you stop treating data structures as rigid blockers and start treating them as fluid collections that can be reshaped to fit your logic. It’s a small step that significantly reduces the surface area for bugs in complex data pipelines.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mb-12">
                <p>
                    Ultimately, flattening isn't just a helper method; it's a pattern for managing complexity. Once you understand the recursive nature of nested data, you stop relying on "tricks" and start using intentional transformations. The behavior stops being surprising and starts becoming predictable.
                </p>
            </section>
        </article>
    )
}
