import React from "react";

export const metadata = {
    title: "Arrow Functions in JavaScript: A Simpler Way to Write Functions",
    slug: "arrow-functions-in-javascript",
    date: "2026-02-24",
    category: "JavaScript",
    readTime: "7 min",
    summary:
        "Modern JavaScript introduced arrow functions to make writing functions faster, cleaner, and easier to read. Think of arrow functions like a shorthand way of writing functions.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Arrow Functions in JavaScript: A Simpler Way to Write Functions
            </h2>

            <section>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    When people first learn JavaScript functions, they usually start with the classic <code>function</code> keyword. It works perfectly fine, but the syntax can feel a little long and repetitive, especially when the function is very small. Modern JavaScript introduced <strong>arrow functions</strong> to make writing functions faster, cleaner, and easier to read. Think of arrow functions like a shorthand way of writing functions. The logic stays exactly the same, but the code becomes more compact. Imagine you are texting a friend. Instead of writing “See you later”, you might simply write “cu later”. The meaning stays the same, but the expression becomes shorter. Arrow functions follow a similar philosophy in JavaScript. They reduce boilerplate code and make simple functions look much cleaner.
                </p>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Before looking at arrow functions, let us quickly see how a <strong>normal function</strong> looks. Suppose we want a function that adds two numbers.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">add</span>(a, b) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> a + b;{"\n"}
                        {"}"}{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">add</span>(<span className="text-[#b5cea8]">5</span>, <span className="text-[#b5cea8]">3</span>));
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    This works perfectly and has been used in JavaScript for years. But notice that we have to write the <code>function</code> keyword, give the function a name, write parentheses, and then write a return statement. For small operations this can feel slightly heavy. Arrow functions provide a more modern and concise way to do the same thing. Here is the same example written using an <strong>arrow function</strong>.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">add</span> = (a, b) {"=>"} {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> a + b;{"\n"}
                        {"}"};{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">add</span>(<span className="text-[#b5cea8]">5</span>, <span className="text-[#b5cea8]">3</span>));
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    At first glance it may look unfamiliar, but the idea is very simple. The <code>{"=>"}</code> symbol is what gives arrow functions their name. It visually looks like an arrow pointing toward the result of the function. Instead of writing <code>function</code>, we simply write the parameters followed by the arrow.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Syntax Walkthrough and Single Parameters</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Now let us understand the <strong>basic arrow function syntax</strong> step by step. You define the function using a variable, write the parameters inside parentheses, and then use the arrow symbol followed by the function body. The general structure looks like this: <code><span className="text-[#569cd6]">const</span> functionName = (parameters) {"=>"} {"{"} <span className="text-[#6a9955]">// code</span> {"}"};</code> The behavior is exactly the same as a normal function. Arrow functions become even simpler when there is <strong>only one parameter</strong>. In that case, the parentheses are optional.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">greet</span> = name {"=>"} {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> <span className="text-[#ce9178]">"Hello "</span> + name;{"\n"}
                        {"}"};{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">greet</span>(<span className="text-[#ce9178]">"Arghya"</span>));
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here the function takes one parameter called <code>name</code> and returns a greeting message. Because there is only one parameter, we could remove the parentheses around <code>name</code>. Many developers do this because it keeps the code clean and readable. When a function has <strong>multiple parameters</strong>, we must use parentheses. This keeps the parameters clear and organized.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">multiply</span> = (a, b) {"=>"} {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> a * b;{"\n"}
                        {"}"};{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">multiply</span>(<span className="text-[#b5cea8]">4</span>, <span className="text-[#b5cea8]">5</span>));
                    </code>
                </pre>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Implicit Returns: Making Code Even Shorter</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Now let us talk about one of the most useful features of arrow functions: <strong>implicit return</strong>. In a normal function we usually write the <code>return</code> keyword. But arrow functions allow us to skip it when the function has only one expression. JavaScript will automatically return the result. For example, this arrow function uses an <strong>explicit return</strong>.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">square</span> = (num) {"=>"} {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> num * num;{"\n"}
                        {"}"};{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">square</span>(<span className="text-[#b5cea8]">4</span>)); <span className="text-[#6a9955]">// 16</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    But the same function can be written even shorter using <strong>implicit return</strong>. Example:
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">square</span> = num {"=>"} num * num;{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">square</span>(<span className="text-[#b5cea8]">4</span>)); <span className="text-[#6a9955]">// 16</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here there are no curly braces and no <code>return</code> keyword. JavaScript automatically returns the result of <code>num * num</code>. This makes small utility functions extremely concise. Arrow functions become especially powerful when working with array methods like <code>map()</code>. Suppose you have an array of numbers and you want to double every value.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> numbers = [<span className="text-[#b5cea8]">1</span>, <span className="text-[#b5cea8]">2</span>, <span className="text-[#b5cea8]">3</span>, <span className="text-[#b5cea8]">4</span>];{"\n\n"}
                        <span className="text-[#569cd6]">let</span> doubled = numbers.<span className="text-[#dcdcaa]">map</span>(num {"=>"} num * <span className="text-[#b5cea8]">2</span>);{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(doubled); <span className="text-[#6a9955]">// [2, 4, 6, 8]</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The arrow function <code>num {"=>"} num * 2</code> is passed directly inside <code>map()</code>. This makes the code short and readable. If we wrote the same logic using a traditional function, it would look like <code>numbers.map(function(num) {"{ return num * 2; }"})</code>. Both versions work the same way, but the arrow function version is easier to read once you get used to it.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Putting It Into Practice</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    At this point it is useful to understand the <strong>basic difference between normal functions and arrow functions</strong>. For beginners, the most important difference is simply <strong>syntax and readability</strong>. Arrow functions remove the need for the <code>function</code> keyword and allow shorter expressions. They are especially helpful for small operations like calculations, data transformations, or callbacks inside array methods. Traditional functions are still useful for larger pieces of logic or when defining methods in certain contexts. But for everyday modern JavaScript, arrow functions have become extremely common. Let us try a few small exercises to make this clearer. First, write a normal function that calculates the square of a number.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">square</span>(num) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> num * num;{"\n"}
                        {"}"}{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">square</span>(<span className="text-[#b5cea8]">5</span>));
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Now rewrite the same function using an arrow function.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">squareArrow</span> = num {"=>"} num * num;{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">squareArrow</span>(<span className="text-[#b5cea8]">5</span>));
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Next, create an arrow function that checks whether a number is even or odd, and use map to square a list of numbers. Example:
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">isEven</span> = num {"=>"} num % <span className="text-[#b5cea8]">2</span> === <span className="text-[#b5cea8]">0</span>;{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">isEven</span>(<span className="text-[#b5cea8]">4</span>)); <span className="text-[#6a9955]">// true</span>{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">isEven</span>(<span className="text-[#b5cea8]">7</span>)); <span className="text-[#6a9955]">// false</span>{"\n\n"}
                        <span className="text-[#569cd6]">let</span> nums = [<span className="text-[#b5cea8]">2</span>, <span className="text-[#b5cea8]">3</span>, <span className="text-[#b5cea8]">4</span>, <span className="text-[#b5cea8]">5</span>];{"\n"}
                        <span className="text-[#569cd6]">let</span> squares = nums.<span className="text-[#dcdcaa]">map</span>(n {"=>"} n * n);{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(squares); <span className="text-[#6a9955]">// [4, 9, 16, 25]</span>
                    </code>
                </pre>
                <p className="mb-6 text-base sm:text-lg leading-relaxed text-text-secondary border-l-4 border-accent pl-4 italic bg-background-secondary p-4  -r-lg">
                    The more JavaScript you write, the more you will see arrow functions everywhere. They are widely used in modern frameworks, functional programming patterns, and array operations. The key idea is not that arrow functions change what functions do, but that they <strong>make simple functions easier to write and read</strong>. Once your brain gets used to the arrow syntax, it starts feeling natural, and your code becomes cleaner and more expressive.
                </p>
            </section>
        </article>
    );
}
