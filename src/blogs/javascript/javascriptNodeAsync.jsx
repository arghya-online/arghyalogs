import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "Async Code in Node.js: Callbacks and Promises",
    slug: "javascript-node-async-callbacks-promises",
    date: "2026-05-02",
    category: "JavaScript",
    readTime: "6 min",
    summary:
        "Why Node.js doesn't wait for your code to finish. A deep dive into how asynchronous execution scheduling breaks traditional sequential thinking, and how to manage it using callbacks and promises.",
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
            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Introduction
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mt-8">
                <CodeBlock code={`const fs = require("fs");\n\nfs.readFile("file.txt", "utf-8", (err, data) => {\n  console.log("File data:", data);\n});\n\nconsole.log("After read");`} />
                <p>
                    If you just scan this, it feels obvious what should happen. The file is being read first, so its content should appear before anything else. But that’s not what actually happens.
                </p>
                <p>Output:</p>
                <CodeBlock code={`After read\nFile data: Hello from file`} language="plaintext" />
                <p>
                    This is the moment where Node.js quietly breaks your assumption about execution order. Nothing crashed, nothing failed, but the behavior doesn’t match how you naturally expect code to run. And that’s where async code really begins, not as a concept, but as a mismatch between expectation and reality.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Exploration
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    The reason behind this is simple once you stop thinking in terms of “line by line execution.” Node.js is built to avoid waiting. Any operation that involves time, like reading a file, calling an API, or querying a database, is treated differently. Instead of blocking everything until it finishes, Node hands that task off and continues executing whatever comes next.
                </p>
                <p>
                    So in the example above, <code className="text-accent font-mono px-1">readFile</code> doesn’t pause execution. It starts the operation in the background and immediately moves forward to the next line. Only when the file is fully read does Node come back and run the callback function. This creates a flow that is not strictly sequential but scheduled.
                </p>
                <p>
                    That small shift is enough to change how you structure code. You are no longer writing “do this, then that.” You are writing “start this, and when it finishes, do that.”
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Callback-Based Async Execution
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Callbacks were the first way Node handled this pattern. Instead of returning a value immediately, a function accepts another function as an argument. That function is called later, once the result is ready.
                </p>
                <p>
                    In the <code className="text-accent font-mono px-1">fs.readFile</code> example, the third argument is the callback. Node stores it, continues execution, and then runs it when the file data becomes available. Internally, this is managed by the event loop, which keeps track of pending operations and executes their callbacks when the main thread is free.
                </p>
                <p>
                    This approach works well when you have a single async step. It’s direct and easy to follow. But problems start appearing when multiple async operations depend on each other.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Problems with Nested Callbacks
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Consider a slightly more realistic flow where you need to fetch a user, then their orders, and then the payment details of those orders.
                </p>
                <CodeBlock code={`getUser(1, (err, user) => {\n  if (err) return console.log(err);\n\n  getOrders(user.id, (err, orders) => {\n    if (err) return console.log(err);\n\n    getPayment(orders[0].id, (err, payment) => {\n      if (err) return console.log(err);\n\n      console.log(payment);\n    });\n  });\n});`} />
                <p>
                    At first glance, this doesn’t look terrible. But as the chain grows, the structure becomes harder to manage. Each step is nested inside the previous one, error handling is repeated at every level, and the overall flow becomes difficult to trace.
                </p>
                <p>
                    The real issue here isn’t indentation. It’s that your logic is fragmented. You’re no longer expressing a sequence of steps clearly. Instead, you’re embedding steps inside callbacks, which makes the code tightly coupled and harder to maintain. This pattern is commonly called callback hell, but the deeper problem is loss of clarity.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Promise-Based Async Handling
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Promises were introduced to solve this exact issue. Instead of passing a callback, an async function returns a promise, which represents a value that will be available in the future.
                </p>
                <CodeBlock code={`const fs = require("fs").promises;\n\nfs.readFile("file.txt", "utf-8")\n  .then((data) => {\n    console.log("File data:", data);\n  })\n  .catch((err) => {\n    console.log("Error reading file");\n  });\n\nconsole.log("After read");`} />
                <p>Output:</p>
                <CodeBlock code={`After read\nFile data: Hello from file`} language="plaintext" />
                <p>
                    The behavior is still asynchronous, but the structure is different. The function returns something you can work with. Instead of handing over your next step as a callback, you define it using <code className="text-accent font-mono px-1">.then()</code>. This keeps the control flow in your hands.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Flattening the Flow with Promises
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Now if we rewrite the earlier nested example using promises, the difference becomes clear.
                </p>
                <CodeBlock code={`getUser(1)\n  .then((user) => getOrders(user.id))\n  .then((orders) => getPayment(orders[0].id))\n  .then((payment) => {\n    console.log(payment);\n  })\n  .catch((err) => {\n    console.log(err);\n  });`} />
                <p>
                    The logic is exactly the same, but the structure is flat. Each step follows the previous one in a readable sequence. You don’t need to jump between nested blocks to understand what’s happening.
                </p>
                <p>
                    Another important improvement is error handling. Instead of checking for errors at every step, a single <code className="text-accent font-mono px-1">.catch()</code> handles failures across the entire chain. This reduces repetition and makes the code easier to maintain.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Insight
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    The important shift here is not from callbacks to promises. It’s from reacting to events to defining flow.
                </p>
                <p>
                    Async code is not random or out of order. It’s scheduled based on when operations complete. Callbacks force you to think in terms of “what happens when this finishes,” often inside nested structures. Promises let you think in terms of steps again, even though the execution is still asynchronous.
                </p>
                <p>
                    That small change in how you express logic makes a big difference in how you understand it.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Conclusion
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mb-12">
                <p>
                    Async behavior in Node.js exists because waiting is expensive. Instead of blocking the entire system, Node moves forward and handles results when they are ready. Callbacks were the first way to manage this, but they don’t scale well when complexity increases.
                </p>
                <p>
                    Promises improve this by giving structure to async flows. They don’t change how Node works internally, but they make it easier to write and reason about code.
                </p>
                <p>
                    Once you stop expecting strict execution order and start thinking in terms of scheduling and flow control, async code becomes much easier to handle. It stops feeling unpredictable and starts feeling intentional.
                </p>
            </section>
        </article>
    );
}
