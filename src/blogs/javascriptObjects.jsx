import React from "react";

export const metadata = {
    title: "Understanding Objects in JavaScript",
    slug: "understanding-objects-javascript",
    date: "2026-02-28",
    category: "JavaScript",
    readTime: "6 min",
    summary:
        "Objects are data structures that store information in key-value pairs. By grouping related data together, objects provide a clear and flexible way to represent structured entities with multiple attributes.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Understanding Objects in JavaScript
            </h2>

            <section>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Programs often need to represent real things: a user profile, a product in an online store, a student in a classroom system, or a car in a rental platform. Each of these entities has <strong>multiple pieces of information attached to it</strong>. For example, a person has a name, an age, and a city. Storing all these pieces separately using different variables quickly becomes difficult to manage. JavaScript solves this problem with <strong>objects</strong>.
                </p>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    An <strong>object</strong> is a data structure that stores information in the form of <strong>key–value pairs</strong>. Each key describes a property, and each value stores the corresponding data. This structure allows related information to be grouped together in a meaningful way.
                </p>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    For instance, instead of writing several unrelated variables like this:
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> name = <span className="text-[#ce9178]">"Arjun"</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> age = <span className="text-[#b5cea8]">22</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> city = <span className="text-[#ce9178]">"Kolkata"</span>;
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    We can combine them into a single object.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> person = {"{"}{"\n"}
                        {"  "}name: <span className="text-[#ce9178]">"Arjun"</span>,{"\n"}
                        {"  "}age: <span className="text-[#b5cea8]">22</span>,{"\n"}
                        {"  "}city: <span className="text-[#ce9178]">"Kolkata"</span>{"\n"}
                        {"}"};
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here, <code>person</code> is an object containing three properties: <code>name</code>, <code>age</code>, and <code>city</code>. Each property has a value associated with it. This structure keeps the data organized and easier to work with.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Creating Objects</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    In JavaScript, objects are usually created using <strong>curly braces <code>{"{}"}</code></strong>. Inside the braces, we define properties separated by commas.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> person = {"{"}{"\n"}
                        {"  "}name: <span className="text-[#ce9178]">"Riya"</span>,{"\n"}
                        {"  "}age: <span className="text-[#b5cea8]">21</span>,{"\n"}
                        {"  "}city: <span className="text-[#ce9178]">"Delhi"</span>{"\n"}
                        {"}"};
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Each property follows the pattern: <code>key: value</code>. In this example, <code>name</code> is the key and <code>"Riya"</code> is the value, <code>age</code> is the key and <code>21</code> is the value, <code>city</code> is the key and <code>"Delhi"</code> is the value. Objects can store many types of values, including strings, numbers, arrays, or even other objects.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Accessing Object Properties</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    JavaScript provides two main ways to access object properties: <strong>dot notation</strong> and <strong>bracket notation</strong>.
                </p>
                <h4 className="mt-6 mb-3 text-xl font-semibold text-text-primary">Dot Notation</h4>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Dot notation is the most common and readable way to access properties.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> person = {"{"}{"\n"}
                        {"  "}name: <span className="text-[#ce9178]">"Riya"</span>,{"\n"}
                        {"  "}age: <span className="text-[#b5cea8]">21</span>,{"\n"}
                        {"  "}city: <span className="text-[#ce9178]">"Delhi"</span>{"\n"}
                        {"}"};{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(person.name); <span className="text-[#6a9955]">// Riya</span>{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(person.age); <span className="text-[#6a9955]">// 21</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The syntax is simple: write the object name followed by a dot and the property name.
                </p>

                <h4 className="mt-6 mb-3 text-xl font-semibold text-text-primary">Bracket Notation</h4>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Another way to access properties is using <strong>square brackets</strong>.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(person[<span className="text-[#ce9178]">"city"</span>]); <span className="text-[#6a9955]">// Delhi</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Bracket notation is useful when the property name is stored inside a variable or determined dynamically.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> key = <span className="text-[#ce9178]">"name"</span>;{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(person[key]); <span className="text-[#6a9955]">// Riya</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    This flexibility makes bracket notation useful in dynamic scenarios.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Updating Object Properties</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Objects in JavaScript are mutable, which means their properties can be changed after creation.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> person = {"{"}{"\n"}
                        {"  "}name: <span className="text-[#ce9178]">"Riya"</span>,{"\n"}
                        {"  "}age: <span className="text-[#b5cea8]">21</span>,{"\n"}
                        {"  "}city: <span className="text-[#ce9178]">"Delhi"</span>{"\n"}
                        {"}"};{"\n\n"}
                        person.city = <span className="text-[#ce9178]">"Mumbai"</span>;{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(person.city); <span className="text-[#6a9955]">// Mumbai</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here we updated the <code>city</code> property from <code>"Delhi"</code> to <code>"Mumbai"</code>.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Adding New Properties</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Objects can also be extended with new properties.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        person.profession = <span className="text-[#ce9178]">"Engineer"</span>;{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(person);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The object now contains an additional property called <code>profession</code>. JavaScript objects are flexible structures, so properties can be added at any time.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Deleting Properties</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Sometimes a property is no longer needed. JavaScript provides the <code>delete</code> operator to remove properties from an object.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#c586c0]">delete</span> person.age;{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(person);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    After running this code, the <code>age</code> property will no longer exist inside the object.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Looping Through Object Keys</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Often we need to examine every property stored inside an object. JavaScript provides the <strong><code>for...in</code> loop</strong> for this purpose.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> person = {"{"}{"\n"}
                        {"  "}name: <span className="text-[#ce9178]">"Riya"</span>,{"\n"}
                        {"  "}age: <span className="text-[#b5cea8]">21</span>,{"\n"}
                        {"  "}city: <span className="text-[#ce9178]">"Delhi"</span>{"\n"}
                        {"}"};{"\n\n"}
                        <span className="text-[#c586c0]">for</span> (<span className="text-[#569cd6]">let</span> key <span className="text-[#c586c0]">in</span> person) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(key + <span className="text-[#ce9178]">": "</span> + person[key]);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The loop iterates through each key in the object. On every iteration, the variable <code>key</code> holds the current property name. Using bracket notation allows us to access the corresponding value. The output will be <code>name: Riya</code>, <code>age: 21</code>, and <code>city: Delhi</code>.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Difference Between Arrays and Objects</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Both arrays and objects store collections of data, but they organize information differently. An <strong>array</strong> stores values using numeric indexes.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> fruits = [<span className="text-[#ce9178]">"apple"</span>, <span className="text-[#ce9178]">"banana"</span>, <span className="text-[#ce9178]">"orange"</span>];{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(fruits[<span className="text-[#b5cea8]">0</span>]); <span className="text-[#6a9955]">// access element</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Objects, on the other hand, store values using <strong>named keys</strong>.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> person = {"{"}{"\n"}
                        {"  "}name: <span className="text-[#ce9178]">"Arjun"</span>,{"\n"}
                        {"  "}age: <span className="text-[#b5cea8]">22</span>{"\n"}
                        {"}"};{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(person.name); <span className="text-[#6a9955]">// access property</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    In short: Arrays use <strong>ordered indexes</strong> and Objects use <strong>descriptive keys</strong>. Arrays are ideal for lists of items, while objects are better for representing structured entities with multiple attributes.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Practice Assignment</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Try implementing a simple example using objects. Create an object representing a student, update one of the properties, and print all keys and values using a loop.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> student = {"{"}{"\n"}
                        {"  "}name: <span className="text-[#ce9178]">"Ananya"</span>,{"\n"}
                        {"  "}age: <span className="text-[#b5cea8]">20</span>,{"\n"}
                        {"  "}course: <span className="text-[#ce9178]">"Computer Science"</span>{"\n"}
                        {"}"};{"\n\n"}
                        student.course = <span className="text-[#ce9178]">"Data Science"</span>;{"\n\n"}
                        <span className="text-[#c586c0]">for</span> (<span className="text-[#569cd6]">let</span> key <span className="text-[#c586c0]">in</span> student) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(key + <span className="text-[#ce9178]">": "</span> + student[key]);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-6 mt-8 text-base sm:text-lg leading-relaxed text-text-secondary border-l-4 border-accent pl-4 italic bg-background-secondary p-4 rounded-r-lg">
                    Objects are one of the most important structures in JavaScript. They allow developers to represent real-world entities by grouping related data into a single organized unit. By using key–value pairs, objects provide a clear and flexible way to store information. Understanding how to create objects, access properties, update values, and loop through keys forms the foundation for working with structured data in JavaScript. As applications grow more complex, objects become essential for representing users, products, configurations, and many other real-world entities within a program.
                </p>
            </section>
        </article>
    );
}
