import React from "react";

export const metadata = {
    title: "JavaScript Modules: Import and Export Explained",
    slug: "javascript-modules-import-export",
    date: "2026-04-22",
    category: "JavaScript",
    readTime: "7 min",
    summary:
        "An exploration of why modularity matters in JavaScript, breaking down the problem of monolithic code and the power of explicit dependencies through import/export.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mt-8">
                <p>
                    I didn’t really understand why modules mattered until my code started getting messy. At the beginning, everything lives in one file and it feels fine. A few functions, some variables, maybe a small feature. Nothing complicated.
                </p>
                <p>
                    Then the file grows.
                </p>
                <p>
                    You add more logic, more conditions, more features. Functions start depending on each other. You scroll more than you think. Debugging becomes slower because everything is mixed together. At some point, even a small change feels risky because you’re not sure what else it might affect.
                </p>
                <p>
                    That’s the point where the idea of modules actually starts making sense.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                The problem with writing everything in one place
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    When everything is in a single file, there is no clear boundary between parts of your application. A function written for one feature can accidentally affect another. Variables can be reused unintentionally. Naming becomes harder because everything shares the same space.
                </p>
                <p>
                    For example, imagine you are building a simple app with user authentication and product handling. If both are written in one file, you might end up with functions like <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">loginUser</code>, <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">registerUser</code>, <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">getProducts</code>, <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">filterProducts</code>, all mixed together.
                </p>
                <p>
                    There is no separation. No structure. Just one growing file.
                </p>
                <p>
                    This becomes a problem not just for readability, but for maintenance. If you want to update authentication logic, you have to navigate through unrelated code. If someone else reads your code, they need time to understand where things belong.
                </p>
                <p>
                    That is the core problem modules solve.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Breaking code into modules
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Instead of writing everything in one file, you split your code into smaller files, each responsible for one thing.
                </p>
                <p>
                    For example, you create:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><code className="text-accent font-mono text-sm">auth.js</code> for authentication</li>
                    <li><code className="text-accent font-mono text-sm">products.js</code> for product-related logic</li>
                </ul>
                <p>
                    Now each file has a clear purpose. You know exactly where to look when something needs to change.
                </p>
                <p>
                    But splitting files alone is not enough. These files need a way to communicate with each other. That is where <code className="text-accent">export</code> and <code className="text-accent">import</code> come in.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Exporting functions or values
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Exporting means making something available from a file so other files can use it.
                </p>
                <p>
                    Inside <code className="text-accent font-mono text-sm">auth.js</code>, you might have:
                </p>

                <div className="relative my-6 group">
                    <pre className="overflow-x-auto bg-[#1e1e1e] p-4 rounded-lg text-sm text-[#d4d4d4] border border-border font-mono leading-relaxed">
                        <code className="text-[#969696] font-mono text-xs uppercase block mb-2 opacity-50 underline decoration-dotted underline-offset-4">auth.js</code>
                        <span className="text-[#c586c0]">export</span> <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">loginUser</span>(username, password) {"{"}{"\n"}
                        {"    "}<span className="text-[#c586c0]">return</span> username === <span className="text-[#ce9178]">"admin"</span> && password === <span className="text-[#ce9178]">"1234"</span>;{"\n"}
                        {"}"}{"\n\n"}
                        <span className="text-[#c586c0]">export</span> <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">registerUser</span>(user) {"{"}{"\n"}
                        {"    "}<span className="text-[#c586c0]">return</span> {"{ "}...user, id: <span className="text-[#4ec9b0]">Date</span>.<span className="text-[#dcdcaa]">now</span>() {"}"};{"\n"}
                        {"}"}
                    </pre>
                </div>

                <p>
                    Here, both functions are explicitly exported. This means any other file can import and use them. You are defining a clear boundary. Only what you export is visible outside. Everything else stays private inside the file.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Importing modules
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Now in another file, say <code className="text-accent font-mono text-sm">app.js</code>, you can use those functions:
                </p>

                <div className="relative my-6 group">
                    <pre className="overflow-x-auto bg-[#1e1e1e] p-4 rounded-lg text-sm text-[#d4d4d4] border border-border font-mono leading-relaxed">
                        <code className="text-[#969696] font-mono text-xs uppercase block mb-2 opacity-50 underline decoration-dotted underline-offset-4">app.js</code>
                        <span className="text-[#c586c0]">import</span> {"{ loginUser, registerUser }"} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">"./auth.js"</span>;{"\n\n"}
                        <span className="text-[#569cd6]">const</span> isLoggedIn = <span className="text-[#dcdcaa]">loginUser</span>(<span className="text-[#ce9178]">"admin"</span>, <span className="text-[#ce9178]">"1234"</span>);{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(isLoggedIn);
                    </pre>
                </div>

                <p>
                    This makes dependencies very clear. When you open <code className="text-accent font-mono text-sm">app.js</code>, you immediately know where <code className="text-accent font-mono">loginUser</code> is coming from. There is no guessing. No searching through the entire project. The relationship between files is explicit.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Default export vs named export
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    There are two ways to export things: named exports and default export. Named exports are what we used earlier. You export multiple things, and you import them using their exact names.
                </p>
                <p>
                    Default export is different. A file can have one default export, and you can import it with any name.
                </p>

                <div className="relative my-6 group">
                    <pre className="overflow-x-auto bg-[#1e1e1e] p-4 rounded-lg text-sm text-[#d4d4d4] border border-border font-mono leading-relaxed">
                        <code className="text-[#969696] font-mono text-xs uppercase block mb-2 opacity-50 underline decoration-dotted underline-offset-4">auth.js (Default)</code>
                        <span className="text-[#c586c0]">export default</span> <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">loginUser</span>(username, password) {"{"} ... {"}"}
                    </pre>
                </div>

                <p>
                    Then import it like this:
                </p>

                <div className="relative my-6 group">
                    <pre className="overflow-x-auto bg-[#1e1e1e] p-4 rounded-lg text-sm text-[#d4d4d4] border border-border font-mono leading-relaxed">
                        <span className="text-[#c586c0]">import</span> login <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">"./auth.js"</span>;
                    </pre>
                </div>

                <p>
                    Here, the name <code className="text-accent font-mono">login</code> is your choice. It does not have to match the original function name. The difference becomes important when deciding how you structure your modules. If a file has one main responsibility, default export can make sense. If it exposes multiple utilities, named exports are clearer.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Why this improves maintainability
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Once I started using modules properly, the biggest difference was not in writing code, but in reading it later. Each file had a clear purpose. When something broke, I knew where to look. When I needed to add a feature, I knew where it belonged.
                </p>
                <p>
                    It also reduces accidental bugs. Since each module exposes only what it exports, you don’t have random parts of your code interfering with each other. Another important thing is scalability. Even in small projects, modules feel like extra effort. But as the project grows, they become necessary.
                </p>
                <p className="text-xl text-text-primary font-medium italic border-l-4 border-accent pl-6 py-2 bg-surface/30">
                    Without modules, complexity grows faster than the code itself.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                A simple mental model
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    The way I think about modules now is simple:
                </p>
                <ul className="list-disc list-inside space-y-4 ml-4">
                    <li>Each file is a unit.</li>
                    <li><strong>Exports</strong> are what it shares.</li>
                    <li><strong>Imports</strong> are what it depends on.</li>
                </ul>
                <p>
                    If a file starts doing too many things, it probably needs to be split. If a file imports too many unrelated things, it probably lacks focus. This way of thinking keeps the structure clean.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Summary: What changed
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mb-12">
                <p>
                    Before using modules properly, my code felt connected in a messy way. Everything depended on everything else. After using modules, dependencies became intentional. 
                </p>
                <p>
                    Instead of a large file where everything is reachable, I had smaller pieces connected through clear paths. That made debugging easier. It made collaboration easier. And most importantly, it made the code easier to trust.
                </p>
                <p>
                    You don’t have to guess what a file is doing. You can open it and know. That is what modules actually give you. Not just separation, but <strong>clarity</strong>.
                </p>
            </section>
        </article>
    );
}
