import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "String Polyfills and Common Interview Methods",
    slug: "javascript-string-polyfills",
    date: "2026-03-23",
    category: "JavaScript",
    readTime: "8 min",
    summary:
        "Moving beyond blind trust in built-in methods. A look at how string operations work internally, writing custom polyfills, and recognizing core interview patterns.",
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
                    Relying blindly on built-in methods is a common trap in modern web development. While methods like <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">split</code>, <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">slice</code>, and <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">includes</code> are efficient and reliable, using them without understanding their internal mechanics creates a gap in technical depth-one that becomes painfully obvious during technical interviews.
                </p>
                <p>
                    A string in JavaScript isn't an abstract entity; it's a sequence of characters stored in memory. Every method you invoke is simply a predefined algorithm applied to that sequence. To truly master string manipulation, you must move beyond memorizing syntax and start recognizing the patterns of traversal and reconstruction that these methods represent.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                The Anatomy of a Polyfill
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Polyfills are often seen as compatibility "hacks" for older browsers, but their true value lies in the clarity they provide. Writing a polyfill forces you to rebuild the method from scratch, exposing the logic that built-in engines handle silently. When you implement a function like <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">includes</code>, you stop treating it as a black box and start seeing it as a nested loop comparison problem.
                </p>

                <CodeBlock code={`function myIncludes(str, search) {\n    for (let i = 0; i <= str.length - search.length; i++) {\n        let match = true;\n\n        for (let j = 0; j < search.length; j++) {\n            if (str[i + j] !== search[j]) {\n                match = false;\n                break;\n            }\n        }\n\n        if (match) return true;\n    }\n\n    return false;\n}`} />

                <p>
                    This manual implementation highlights that <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">includes</code> is just substring matching. There are no shortcuts-just iteration and comparison. Once this mechanic is clear, you can apply the same logic to more complex problems like pattern recognition or custom text parsers.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                String Utilities and Traversal Patterns
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Most string operations boil down to controlled traversal. Reversing a string or checking for a palindrome follows the same core idea: moving through the character sequence, comparing values, and reconstructing a result. By implementing these manually, you learn to manage pointers and handle edge cases that built-in methods usually obscure.
                </p>

                <CodeBlock code={`function reverseString(str) {\n    let result = "";\n    for (let i = str.length - 1; i >= 0; i--) {\n        result += str[i];\n    }\n    return result;\n}\n\nfunction isPalindrome(str) {\n    // Reusing the reversal logic for a structural check\n    return str === reverseString(str);\n}`} />

                <p>
                    In interviews, you're rarely tested on your ability to remember a method's name. Instead, you're tested on your ability to handle variations of these traversal patterns. Whether you're traversing from both ends simultaneously or counting the frequency of occurrences, the logic remains grounded in how strings are structured as collections of characters.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Recognizing Patterns Over Memorizing Syntax
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Solving string-based problems becomes remarkably easier when you categorize them into patterns: substring matching, frequency counting, and two-pointer traversals. Memorization is limited, but pattern recognition is scalable. When you understand how <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">split</code> or <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">slice</code> behaves internally, you stop guessing and start predicting how your logic will perform in real-world scenarios.
                </p>
                <p>
                    This shift in perspective-from using tools to using solutions-is what characterizes an experienced developer. It makes your code more predictable and reduces the time spent on unexpected behavior. You begin to use built-in methods with intent, knowing exactly when they are the right choice and when custom logic is required to handle a unique edge case.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mb-12">
                <p>
                    Ultimately, string methods are just implementations of simple algorithmic ideas. Understanding these ideas converts them from something you memorize into something you recognize. This deep familiarity not only makes you better prepared for technical interviews but also ensures that your daily coding is grounded in a robust understanding of how JavaScript handles data. Once the "black box" is gone, all that remains is pure, manageable logic.
                </p>
            </section>
        </article>
    );
}
