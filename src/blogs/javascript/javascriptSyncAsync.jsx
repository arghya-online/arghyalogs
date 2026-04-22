import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "Synchronous vs Asynchronous JavaScript",
    slug: "javascript-synchronous-vs-asynchronous",
    date: "2026-03-16",
    category: "JavaScript",
    readTime: "8 min",
    summary:
        "Why top-to-bottom reading isn't always top-to-bottom execution. Breaking down the single-threaded nature of JavaScript, blocking vs. non-blocking code, and how the system handles slow tasks without freezing.",
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
                <CodeBlock code={`console.log("Start");\nconsole.log("Middle");\nconsole.log("End");`} />
                <p>
                    JavaScript is fundamentally a single-threaded language, meaning it can only execute one operation at a time. In a purely synchronous environment, this creates a "blocking" effect: every line of code must wait for the preceding one to complete, regardless of how long that operation takes. While this behavior is predictable, it poses a significant problem for modern web applications that rely on external data, user interactions, and time-intensive computations.
                </p>
                <p>
                    The challenge of JavaScript is not just writing logic, but understanding how the system manages these delays without freezing the entire user interface.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                The Trap of Blocking Execution
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Synchronous execution is intuitive because it follows the order of the source code. However, when a task—such as a complex calculation or a network request—takes significant time, it blocks the main thread. During this period, the application becomes unresponsive; the browser cannot handle clicks, scroll events, or UI updates. This "blocking" behavior is the primary reason why synchronous programming is insufficient for high-performance web development.
                </p>

                <CodeBlock code={`function longTask() {\n    const start = Date.now();\n    while (Date.now() - start < 3000) {}\n}\n\nconsole.log("Start");\nlongTask(); // UI freezes for 3 seconds\nconsole.log("End");`} />

                <p>
                    In real-world scenarios, tasks like fetching data from an API or reading a large file should never be handled synchronously. Doing so forces the user to wait for the system to catch up, leading to a fragmented and frustrating experience.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Asynchronous Resilience: Non-Blocking Flow
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Asynchronous programming allows JavaScript to initiate a task and then move on to the next line of code without waiting for the task to finish. When the asynchronous operation eventually completes, a callback, promise, or async function handles the result. This enables the application to remain fluid and responsive even while waiting for slow operations to resolve in the background.
                </p>

                <CodeBlock code={`console.log("Start");\n\nsetTimeout(() => {\n    console.log("Handled later");\n}, 2000);\n\nconsole.log("End");\n\n// Output: Start, End, (2s later) Handled later`} />

                <p>
                    This non-blocking behavior is what allows modern web apps to fetch data, respond to user inputs, and update animations simultaneously. By delegating time-consuming tasks to the browser's Web APIs, JavaScript frees up the call stack to focus on immediate interactions.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Scheduling and Execution Order
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    One of the most frequent points of confusion is when asynchronous tasks appear to have zero delay but still execute after the synchronous code. This happens because asynchronous operations are placed in a task queue, which only begins processing once the main call stack is entirely empty. Even a <code className="text-accent font-mono px-1">setTimeout</code> with a delay of 0 ms will execute after the subsequent synchronous lines.
                </p>

                <CodeBlock code={`console.log("Start");\n\nsetTimeout(() => {\n    console.log("Task Queue");\n}, 0);\n\nconsole.log("End");\n\n// Output: Start, End, Task Queue`} />

                <p>
                    Understanding this queueing mechanism is essential for debugging race conditions and ensuring that state updates happen in the intended sequence. It reinforces the fact that writing order does not always equate to execution order in an asynchronous environment.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mb-12">
                <p>
                    Mastering the distinction between synchronous and asynchronous behavior is foundational for professional JavaScript development. It shifts your perspective from writing a list of commands to managing a flow of signals and scheduled tasks. By leveraging non-blocking patterns, you ensure that your applications remain fast, stable, and capable of handling complex operations without sacrificing the user experience. Once the underlying mechanics of the event loop and task queue become clear, synchronous and asynchronous code stop feeling like conflicting concepts and start feeling like a unified strategy for building high-performance systems.
                </p>
            </section>
        </article>
    );
}
