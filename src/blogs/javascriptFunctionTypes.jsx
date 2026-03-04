import React from "react";

export const metadata = {
    title: "Function Declaration vs Function Expression: What’s the Difference?",
    slug: "function-declaration-vs-expression",
    date: "2026-02-26",
    category: "JavaScript",
    readTime: "7 min",
    summary:
        "Functions are one of the core building blocks of programming. The two most common ways to create them are function declarations and function expressions. At first glance they may look similar, but they behave slightly differently.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Function Declaration vs Function Expression: What’s the Difference?
            </h2>

            <section>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    When people begin learning JavaScript, one of the first concepts they encounter is <strong>functions</strong>. Functions are one of the core building blocks of programming. They allow us to group a set of instructions together and reuse them whenever needed. Instead of repeating the same logic multiple times, we write it once inside a function and call it whenever we want. Think of a function like a <strong>small machine that performs a task</strong>. You give it some input, it processes that input, and then it gives you a result. For example, imagine you are building a calculator program. Instead of writing addition logic again and again, you could simply create a function that adds two numbers and call it whenever needed.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">add</span>(a, b) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> a + b;{"\n"}
                        {"}"}{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">add</span>(<span className="text-[#b5cea8]">5</span>, <span className="text-[#b5cea8]">3</span>));
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here we defined a function called <code>add</code> that takes two parameters and returns their sum. Every time we call <code>add(5, 3)</code>, the function runs and gives the result. This is the basic idea behind functions: <strong>reusable blocks of code that perform specific tasks</strong>. In JavaScript, functions can be created in more than one way. The two most common ways are <strong>function declarations</strong> and <strong>function expressions</strong>. At first glance they may look similar, but they behave slightly differently.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Function Declaration</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    A <strong>function declaration</strong> is the most traditional way of creating a function in JavaScript. The syntax starts with the <code>function</code> keyword, followed by the function name, parentheses for parameters, and curly braces containing the function body.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">multiply</span>(a, b) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> a * b;{"\n"}
                        {"}"}{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">multiply</span>(<span className="text-[#b5cea8]">4</span>, <span className="text-[#b5cea8]">5</span>));
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    In this example we created a function called <code>multiply</code> that multiplies two numbers. The function has a clear name, and we can call it anywhere in the code. Function declarations are straightforward and very readable. Many beginner tutorials start with this style because it clearly shows the structure of a function.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Function Expression</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    A <strong>function expression</strong> creates a function and stores it inside a variable. Instead of declaring the function directly, we assign it as a value.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">multiply</span> = <span className="text-[#569cd6]">function</span>(a, b) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> a * b;{"\n"}
                        {"}"};{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">multiply</span>(<span className="text-[#b5cea8]">4</span>, <span className="text-[#b5cea8]">5</span>));
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here the function does exactly the same job as before. The only difference is that the function is <strong>assigned to a variable called <code>multiply</code></strong>. Because functions in JavaScript are treated like values, they can be stored in variables, passed as arguments, or returned from other functions. Function expressions are extremely common in modern JavaScript, especially when working with callbacks or functional programming patterns. Let us compare both styles together.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#6a9955]">// Function declaration</span>{"\n"}
                        <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">greet</span>(name) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> <span className="text-[#ce9178]">"Hello "</span> + name;{"\n"}
                        {"}"}{"\n\n"}
                        <span className="text-[#6a9955]">// Function expression</span>{"\n"}
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">greet</span> = <span className="text-[#569cd6]">function</span>(name) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> <span className="text-[#ce9178]">"Hello "</span> + name;{"\n"}
                        {"}"};
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Both functions behave almost the same when executed. They both create reusable logic that returns a greeting message. However, the way JavaScript handles them internally is different.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">A Simple Idea of Hoisting</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    One important difference between these two types of functions involves a concept called <strong>hoisting</strong>. Hoisting is a behavior in JavaScript where certain declarations are moved to the top of their scope during compilation. To understand this idea simply, imagine JavaScript scanning your code before running it. During this scan, function declarations are registered in memory. Because of this behavior, function declarations can sometimes be called <strong>before they appear in the code</strong>.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">addNumbers</span>(<span className="text-[#b5cea8]">2</span>, <span className="text-[#b5cea8]">3</span>));{"\n\n"}
                        <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">addNumbers</span>(a, b) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> a + b;{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Even though the function is defined after the call, JavaScript still runs it successfully. This happens because the function declaration is hoisted. Now let us try the same thing with a function expression.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">addNumbers</span>(<span className="text-[#b5cea8]">2</span>, <span className="text-[#b5cea8]">3</span>));{"\n\n"}
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">addNumbers</span> = <span className="text-[#569cd6]">function</span>(a, b) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> a + b;{"\n"}
                        {"}"};
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    This time JavaScript will produce an error. The reason is that the variable <code>addNumbers</code> is not initialized with the function yet when the code tries to call it. Function expressions are <strong>not hoisted in the same way as function declarations</strong>. This difference is one of the main distinctions between the two approaches.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">When to Use Each Type</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Both styles are valid and widely used in JavaScript. Choosing between them often depends on the situation. Function declarations are useful when defining <strong>main functions that represent core behavior</strong> of a program. They are easy to read and work well when you want to organize code logically. Function expressions are often used when functions need to be <strong>stored in variables, passed as arguments, or used inside other functions</strong>. They also work well with modern JavaScript patterns such as arrow functions and callbacks. For example, when working with array methods like <code>map()</code> or <code>forEach()</code>, developers usually prefer function expressions or arrow functions.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">const</span> numbers = [<span className="text-[#b5cea8]">1</span>, <span className="text-[#b5cea8]">2</span>, <span className="text-[#b5cea8]">3</span>];{"\n\n"}
                        numbers.<span className="text-[#dcdcaa]">forEach</span>(<span className="text-[#569cd6]">function</span>(num) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(num);{"\n"}
                        {"}"});
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    This style keeps the function close to the place where it is used.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Putting It Into Practice</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Let us try a small exercise to understand both approaches. First, write a <strong>function declaration</strong> that multiplies two numbers. Next, write the same logic using a <strong>function expression</strong>.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">multiplyNumbers</span>(a, b) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> a * b;{"\n"}
                        {"}"}{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">multiplyNumbers</span>(<span className="text-[#b5cea8]">3</span>, <span className="text-[#b5cea8]">4</span>));{"\n\n"}
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">multiplyNumbersExpr</span> = <span className="text-[#569cd6]">function</span>(a, b) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> a * b;{"\n"}
                        {"}"};{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">multiplyNumbersExpr</span>(<span className="text-[#b5cea8]">3</span>, <span className="text-[#b5cea8]">4</span>));
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Both functions produce the same result. Now try calling them before defining them and observe what happens. <code>console.log(multiplyNumbers(2, 3));</code> will work if <code>multiplyNumbers</code> is a declaration. But if you try the same thing with the function expression, JavaScript will throw an error because the function has not been assigned yet.
                </p>
                <p className="mb-6 mt-8 text-base sm:text-lg leading-relaxed text-text-secondary border-l-4 border-accent pl-4 italic bg-background-secondary p-4 rounded-r-lg">
                    Functions are one of the most important concepts in JavaScript because they allow developers to organize logic into reusable blocks. Whether we are calculating values, processing data, or responding to user actions, functions make programs easier to structure and maintain. Function declarations and function expressions both provide ways to define these reusable pieces of logic. The main difference lies in how JavaScript handles them internally, especially regarding hoisting. Function declarations are fully hoisted, which means they can be called before their definition. Function expressions, on the other hand, behave like variables and must be defined before they are used. Understanding this difference helps developers avoid common mistakes and write more predictable code. As you continue exploring JavaScript, you will notice that modern codebases often mix different styles of functions, including arrow functions introduced in ES6. But the foundation still begins with understanding how function declarations and function expressions work. Once this concept becomes clear, many other JavaScript patterns become easier to grasp.
                </p>
            </section>
        </article>
    );
}
