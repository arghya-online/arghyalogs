import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "Map and Set in JavaScript",
    slug: "javascript-map-and-set-guide",
    date: "2026-03-18",
    category: "JavaScript",
    readTime: "7 min",
    summary:
        "Beyond objects and arrays. Why Map handles non-string keys better, how Set enforces uniqueness automatically, and when to pick these specialized structures over the defaults.",
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
                <CodeBlock code={`const obj = {};\nobj[1] = "one";\nobj["1"] = "string one";\n\nconsole.log(obj);`} />
                <p>
                    JavaScript objects are the default for key-value storage, but they come with a significant limitation: key coercion. Every key provided to an object is automatically converted into a string. This behavior leads to subtle bugs when using non-string keys, like numbers or other objects, as they tend to overwrite each other. Map and Set were introduced to solve these specific structural limitations, providing dedicated containers that maintain the integrity of your data types and uniqueness of your values.
                </p>
                <p>
                    Transitioning from basic objects and arrays to specialized structures like Map and Set is a hallmark of moving from elementary to professional-grade JavaScript.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                The Precision of Map
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    The <code className="text-accent font-mono px-1">Map</code> structure is designed specifically for key-value storage. Unlike objects, Map preserves the data type of its keys, allowing you to use numbers, objects, or even functions as keys without coercion. This makes it an ideal choice for complex data mapping where the relationship between keys and values needs to be strictly maintained.
                </p>

                <CodeBlock code={`const map = new Map();\n\nmap.set(1, "one");\nmap.set("1", "string one");\n\nconsole.log(map.size); // 2 - Keys are distinct`} />

                <p>
                    Beyond key integrity, Map offers a cleaner and more explicit API. Methods like <code className="text-accent font-mono px-1">set()</code>, <code className="text-accent font-mono px-1">get()</code>, and <code className="text-accent font-mono px-1">has()</code> provide a direct way to interact with data without the risk of accidentally accessing inherited properties from the prototype chain. It separates the "data" layer from the "object" layer, leading to more predictable code.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Uniqueness with Set
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    While arrays are excellent for ordered collections, they permit duplicate values. The <code className="text-accent font-mono px-1">Set</code> structure, conversely, enforces uniqueness at its core. Any attempt to add a duplicate value to a Set is silently ignored, making it the most efficient tool for maintaining a collection of unique items or deduplicating existing arrays.
                </p>

                <CodeBlock code={`const set = new Set([1, 2, 2, 3, 3, 4]);\n// set will be {1, 2, 3, 4}\n\nconst uniqueArray = [...new Set(inputArray)]; // Rapid deduplication`} />

                <p>
                    Set is also high-performing when it comes to existence checks. While checking if an item exists in an array requires a linear search (<code className="text-accent font-mono px-1">O(n)</code>), checking a Set using <code className="text-accent font-mono px-1">has()</code> is near-instant (<code className="text-accent font-mono px-1">O(1)</code>). This makes it the superior choice for tracking unique identifiers or managing active state selections.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Picking the Right Tool
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 bg-surface border border-border rounded-lg">
                        <h3 className="text-text-primary font-bold mb-3">Map vs. Object</h3>
                        <p className="text-sm">Use Map for pure data storage, dynamic keys, or when lookup performance is critical. Use Objects for structured records with known properties.</p>
                    </div>
                    <div className="p-6 bg-surface border border-border rounded-lg">
                        <h3 className="text-text-primary font-bold mb-3">Set vs. Array</h3>
                        <p className="text-sm">Use Set when uniqueness is a requirement or for high-frequency existence checks. Use Arrays when order and duplicates are necessary.</p>
                    </div>
                </div>
            </section>

            <hr className="my-12 border-border" />

            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mb-12">
                <p>
                    The introduction of Map and Set changed the way we handle data density in JavaScript. By choosing the right structure based on the specific constraints of your task, you reduce the amount of manual logic required to maintain data integrity. It’s not just about using modern features; it’s about understanding the underlying behavior of your tools and choosing the one built for the job. Once you master these specialized structures, your code becomes simpler, faster, and significantly easier to reason about.
                </p>
            </section>
        </article>
    )
}
