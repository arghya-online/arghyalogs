import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "Error Handling in JavaScript: Try, Catch, Finally",
    slug: "javascript-error-handling-guide",
    date: "2026-04-02",
    category: "JavaScript",
    readTime: "7 min",
    summary:
        "A deep dive into managing runtime failures. From understanding why unhandled errors are dangerous to mastering try-catch redirects, cleanup with finally, and the power of throwing custom signals.",
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
                <CodeBlock code={`const user = JSON.parse("{ name: 'Arghya' }");`} />
                <p>
                    A single malformed string of JSON can bring an entire JavaScript application to a standstill. When an error is thrown and left unhandled, execution stops immediately, leaving the UI in a potentially inconsistent state and preventing all subsequent logic from running. Error handling is not just about catching failures; it's about engineering resilience into your code so that a small, isolated problem doesn't escalate into a total system failure.
                </p>
                <p>
                    Mastering <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">try...catch</code> is the difference between an application that crashes on invalid data and one that handles setbacks gracefully while maintaining a stable user experience.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Controlled Failure with Try-Catch
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    The <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">try...catch</code> block acts as a safety net for execution. Instead of allowing an error to propagate and terminate the program, the <code className="text-accent font-mono px-1">catch</code> block redirects control to a specific handler. This redirection provides the opportunity to log the failure, notify the user, or implement a fallback mechanism, ensuring that the rest of the application remains functional.
                </p>

                <CodeBlock code={`try {\n    const user = JSON.parse("{ name: 'Arghya' }");\n} catch (error) {\n    console.error("Data parsing failed:", error.message);\n    // Graceful fallback logic here\n}`} />

                <p>
                    The <code className="text-accent font-mono px-1">error</code> object passed to the catch block is more than just a label; it contains vital context like the error message and the stack trace. By leveraging this information, you can differentiate between expected validation errors and critical infrastructure failures, allowing for more precise and effective response strategies.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                The Finality of Cleanup
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    The <code className="text-accent font-mono px-1">finally</code> block is an often-overlooked tool for ensuring structural integrity. It executes regardless of whether the initial code succeeded or failed. This makes it the ideal location for cleanup operations that must occur in either scenario—such as closing database connections, stopping loading indicators, or resetting a global state. It ensures that your application doesn't leak memory or leave the UI "stuck" in a loading state after a failure.
                </p>

                <CodeBlock code={`try {\n    startLoader();\n    renderData();\n} catch (error) {\n    handleFailure(error);\n} finally {\n    stopLoader(); // Executed in all cases\n}`} />
            </section>

            <hr className="my-12 border-border" />

            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Errors as Intentional Signals
            </h2>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Errors shouldn't just be things that happen to your code; they should be things you use to define it. By manually throwing custom errors, you can enforce business logic and prevent the application from entering an invalid state. This shifts errors from "problems to be fixed" to "signals to be managed." A well-architected application uses custom errors to communicate specific failures across different layers of the software.
                </p>

                <CodeBlock code={`function withdraw(balance, amount) {\n    if (amount > balance) {\n        throw new Error("Insufficient balance");\n    }\n    return balance - amount;\n}`} />

                <p>
                    This approach prevents silent failures where the code continues running with incorrect data. By stopping execution at the precise moment a rule is violated, you make your codebase easier to debug and more predictable in its behavior.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mb-12">
                <p>
                    Effective error handling is about shifting from defensive coding to opportunistic management. In the real world, networks fail, APIs change, and users provide unpredictable input. Your goal isn't to prevent these errors—that's impossible—but to control how the system reacts to them. Once you view <code className="text-accent font-mono px-1">try</code>, <code className="text-accent font-mono px-1">catch</code>, and <code className="text-accent font-mono px-1">finally</code> as tools for managing state rather than just syntax for handling crashes, your code becomes significantly more robust and professional.
                </p>
            </section>
        </article>
    );
}
