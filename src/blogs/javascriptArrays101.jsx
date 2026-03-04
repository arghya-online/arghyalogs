import React from "react";

export const metadata = {
    title: "JavaScript Arrays 101",
    slug: "javascript-arrays-101",
    date: "2026-02-23",
    category: "JavaScript",
    readTime: "6 min",
    summary:
        "An array is a structure in JavaScript that stores multiple values inside a single variable. Learn how to create arrays, access elements using indexes, update values, and loop through the data.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                JavaScript Arrays 101
            </h2>

            <section>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    In many programming situations, we need to work with <strong>multiple related values at once</strong>. A list of student marks, a collection of tasks, or a set of product names are all examples of grouped data. Storing each value in a separate variable quickly becomes difficult to manage. This is where <strong>arrays</strong> become useful.
                </p>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    An <strong>array</strong> is a structure in JavaScript that stores multiple values inside a single variable. Instead of creating many individual variables, we store everything inside one ordered collection. Each value inside the array has a specific position, and that position allows us to access or update the value easily.
                </p>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    To understand the advantage of arrays, consider storing marks of students individually.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> mark1 = <span className="text-[#b5cea8]">85</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> mark2 = <span className="text-[#b5cea8]">90</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> mark3 = <span className="text-[#b5cea8]">78</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> mark4 = <span className="text-[#b5cea8]">92</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> mark5 = <span className="text-[#b5cea8]">88</span>;
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    This approach works, but it is not very practical. If the number of students increases, the number of variables also increases. Managing the data becomes harder. Arrays provide a cleaner solution.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> marks = [<span className="text-[#b5cea8]">85</span>, <span className="text-[#b5cea8]">90</span>, <span className="text-[#b5cea8]">78</span>, <span className="text-[#b5cea8]">92</span>, <span className="text-[#b5cea8]">88</span>];
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Now all the marks are stored inside a single array called <code>marks</code>. This makes the data easier to organize and easier to work with.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Creating an Array</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    In JavaScript, arrays are usually created using <strong>square brackets</strong>.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> fruits = [<span className="text-[#ce9178]">"apple"</span>, <span className="text-[#ce9178]">"banana"</span>, <span className="text-[#ce9178]">"orange"</span>, <span className="text-[#ce9178]">"grape"</span>];
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Each value inside the brackets is separated by a comma. The values are stored in order, and JavaScript keeps track of their positions. Arrays can store different types of data as well.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> numbers = [<span className="text-[#b5cea8]">10</span>, <span className="text-[#b5cea8]">20</span>, <span className="text-[#b5cea8]">30</span>, <span className="text-[#b5cea8]">40</span>];{"\n"}
                        <span className="text-[#569cd6]">let</span> tasks = [<span className="text-[#ce9178]">"study"</span>, <span className="text-[#ce9178]">"exercise"</span>, <span className="text-[#ce9178]">"read"</span>];
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    In most practical situations, arrays store values that belong to the same category, which keeps the data structured and easier to understand.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Accessing Elements Using Index</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Each value in an array has a position called an <strong>index</strong>. One important detail is that <strong>JavaScript arrays start indexing from 0</strong>. Consider this array:
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> fruits = [<span className="text-[#ce9178]">"apple"</span>, <span className="text-[#ce9178]">"banana"</span>, <span className="text-[#ce9178]">"orange"</span>, <span className="text-[#ce9178]">"grape"</span>];
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The positions look like this: <code>apple</code> is at index 0, <code>banana</code> is at index 1, <code>orange</code> is at index 2, and <code>grape</code> is at index 3. To access a value, we use the index inside square brackets.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(fruits[<span className="text-[#b5cea8]">0</span>]); <span className="text-[#6a9955]">// apple</span>{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(fruits[<span className="text-[#b5cea8]">2</span>]); <span className="text-[#6a9955]">// orange</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The first element always has index <code>0</code>, the second has index <code>1</code>, and the pattern continues.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Updating Elements</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Values inside an array can be changed whenever needed. To update an element, simply assign a new value to its index.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> fruits = [<span className="text-[#ce9178]">"apple"</span>, <span className="text-[#ce9178]">"banana"</span>, <span className="text-[#ce9178]">"orange"</span>, <span className="text-[#ce9178]">"grape"</span>];{"\n\n"}
                        fruits[<span className="text-[#b5cea8]">1</span>] = <span className="text-[#ce9178]">"mango"</span>;{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(fruits);{"\n"}
                        <span className="text-[#6a9955]">// ["apple", "mango", "orange", "grape"]</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here the value <code>"banana"</code> was replaced with <code>"mango"</code>. This flexibility makes arrays very useful when working with data that may change over time.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">The Array Length Property</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Arrays include a built-in property called <strong>length</strong>. This property tells us how many elements are currently stored in the array.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> fruits = [<span className="text-[#ce9178]">"apple"</span>, <span className="text-[#ce9178]">"banana"</span>, <span className="text-[#ce9178]">"orange"</span>, <span className="text-[#ce9178]">"grape"</span>];{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(fruits.length); <span className="text-[#6a9955]">// 4</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The <code>length</code> property becomes useful when processing arrays or looping through them.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Looping Through Arrays</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Often we need to go through each element of an array and perform an action. A common way to do this is using a <strong>for loop</strong>.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> fruits = [<span className="text-[#ce9178]">"apple"</span>, <span className="text-[#ce9178]">"banana"</span>, <span className="text-[#ce9178]">"orange"</span>, <span className="text-[#ce9178]">"grape"</span>];{"\n\n"}
                        <span className="text-[#c586c0]">for</span> (<span className="text-[#569cd6]">let</span> i = <span className="text-[#b5cea8]">0</span>; i {"<"} fruits.length; i++) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(fruits[i]);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    This loop starts at index <code>0</code> and continues until the last element. On each iteration, it prints the current element of the array. Looping is one of the most common operations when working with arrays because it allows us to process each value systematically.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Putting It Into Practice</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    To get comfortable with arrays, try a small exercise. Create an array containing five of your favorite movies, print the first and last elements, change one value, and then loop through them all.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> movies = [<span className="text-[#ce9178]">"Inception"</span>, <span className="text-[#ce9178]">"Interstellar"</span>, <span className="text-[#ce9178]">"The Dark Knight"</span>, <span className="text-[#ce9178]">"Parasite"</span>, <span className="text-[#ce9178]">"Avatar"</span>];{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(movies[<span className="text-[#b5cea8]">0</span>]);{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(movies[movies.length - <span className="text-[#b5cea8]">1</span>]);{"\n\n"}
                        movies[<span className="text-[#b5cea8]">2</span>] = <span className="text-[#ce9178]">"Oppenheimer"</span>;{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(movies);{"\n\n"}
                        <span className="text-[#c586c0]">for</span> (<span className="text-[#569cd6]">let</span> i = <span className="text-[#b5cea8]">0</span>; i {"<"} movies.length; i++) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(movies[i]);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-6 mt-8 text-base sm:text-lg leading-relaxed text-text-secondary border-l-4 border-accent pl-4 italic bg-background-secondary p-4 rounded-r-lg">
                    Arrays are one of the most fundamental structures in JavaScript. They allow developers to store multiple values in a single organized collection, making programs easier to manage and scale. By understanding how to create arrays, access elements using indexes, update values, check length, and loop through the data, you gain the basic skills needed to work with collections in JavaScript. As you continue learning JavaScript, arrays will appear everywhere. Whether you are handling lists of users, processing data from APIs, or managing application state, arrays become an essential tool for organizing and manipulating information effectively.
                </p>
            </section>
        </article>
    );
}
