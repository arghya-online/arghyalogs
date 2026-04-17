import React from "react";

export const metadata = {
    title: "Understanding Object-Oriented Programming in JavaScript",
    slug: "javascript-object-oriented-programming",
    date: "2026-02-27",
    category: "JavaScript",
    readTime: "7 min",
    summary:
        "Object-Oriented Programming (OOP) allows developers to build structured and reusable applications by bundling related properties and behaviors. Learn how classes, objects, and methods work together.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Understanding Object-Oriented Programming in JavaScript
            </h2>

            <section>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    As programs grow larger and more complex, keeping the code organized becomes a significant challenge. Early approaches to programming often resulted in scattered variables and standalone functions, making data hard to track and systems harder to maintain. <strong>Object-Oriented Programming (OOP)</strong> provides a solution to this problem. OOP is a design pattern that organizes software design around data, or objects, rather than functions and logic. By grouping related data and behaviors together into functional units, developers can build structured, modular, and reusable applications.
                </p>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    To understand how this works, consider the manufacturing process of a car. A factory does not design a completely new structure for every single vehicle it produces. Instead, engineers create a <strong>blueprint</strong>. This blueprint defines all the essential characteristics: the make, model, color options, and behaviors like starting the engine or accelerating. Using this single blueprint, the factory can produce thousands of individual cars. Each physical car is an <strong>object</strong> built from the blueprint, possessing its own specific paint color and owner, but sharing the same fundamental structure defined by the original design.
                </p>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    In JavaScript, this concept behaves exactly the same way. The blueprint is called a <strong>class</strong>, and the final products created from that blueprint are called <strong>objects</strong>.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">What is a Class in JavaScript?</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    A class in JavaScript is a template for creating objects. It encapsulates data (properties) and functions (methods) that operate on that data into a single, cohesive unit. This approach significantly improves code readability and reusability. Instead of writing separate variables and functions for every entity, a class defines the structure once.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">class</span> <span className="text-[#4ec9b0]">Car</span> {"{"}{"\n"}
                        {"  "}<span className="text-[#569cd6]">constructor</span>(make, model, color) {"{"}{"\n"}
                        {"    "}<span className="text-[#569cd6]">this</span>.make = make;{"\n"}
                        {"    "}<span className="text-[#569cd6]">this</span>.model = model;{"\n"}
                        {"    "}<span className="text-[#569cd6]">this</span>.color = color;{"\n"}
                        {"  "}{"}"}{"\n\n"}
                        {"  "}<span className="text-[#dcdcaa]">startEngine</span>() {"{"}{"\n"}
                        {"    "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"The "</span> + <span className="text-[#569cd6]">this</span>.color + <span className="text-[#ce9178]">" "</span> + <span className="text-[#569cd6]">this</span>.make + <span className="text-[#ce9178]">" engine is running."</span>);{"\n"}
                        {"  "}{"}"}{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    This example defines a <code>Car</code> class. Inside it, there are two distinct parts: the <strong>constructor method</strong> and an ordinary method called <code>startEngine</code>.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">The Constructor Method</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The <code>constructor</code> is a special method used specifically for initializing new objects. Whenever a new object is created from the class, the constructor runs automatically. It receives arguments and assigns them to the new object's properties using the <code>this</code> keyword. In the <code>Car</code> class, the constructor assigns values to the <code>make</code>, <code>model</code>, and <code>color</code> properties.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Creating Objects (Instantiation)</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    With the class defined, we can now manufacture individual car objects. This process is called <strong>instantiation</strong>, and it relies on the <code>new</code> keyword.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">const</span> myCar = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">Car</span>(<span className="text-[#ce9178]">"Toyota"</span>, <span className="text-[#ce9178]">"Corolla"</span>, <span className="text-[#ce9178]">"Silver"</span>);{"\n"}
                        <span className="text-[#569cd6]">const</span> friendCar = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">Car</span>(<span className="text-[#ce9178]">"Honda"</span>, <span className="text-[#ce9178]">"Civic"</span>, <span className="text-[#ce9178]">"Black"</span>);{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(myCar.make); <span className="text-[#6a9955]">// Toyota</span>{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(friendCar.color); <span className="text-[#6a9955]">// Black</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    By passing specific values to the constructor during creation, each object maintains its own independent state. <code>myCar</code> is Silver, while <code>friendCar</code> is Black, yet both share the identical underlying structure defined by the <code>Car</code> class.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Class Methods</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Classes also contain <strong>methods</strong>, which are functions that define the behavior of the objects. These methods can perform actions using the specific data stored within the object they belong to.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        myCar.<span className="text-[#dcdcaa]">startEngine</span>();{"\n"}
                        <span className="text-[#6a9955]">// Output: The Silver Toyota engine is running.</span>{"\n\n"}
                        friendCar.<span className="text-[#dcdcaa]">startEngine</span>();{"\n"}
                        <span className="text-[#6a9955]">// Output: The Black Honda engine is running.</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Because methods are defined on the class itself, they provide immense code reusability. Instead of writing identical engine-starting logic a hundred times for a hundred cars, the logic is written once in the class and accessed by every resulting object.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Encapsulation</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    One of the core principles of OOP is <strong>encapsulation</strong>. Encapsulation is the practice of bundling data (properties) and the methods that operate on that data into a single unit (the class). It creates a clean, self-contained package where the internal workings of the object are kept organized. This prevents other parts of a program from accidentally interfering with the object's internal state, promoting better software stability and cleaner architecture. In our car example, the data (make, model, color) and the behavior (starting the engine) are fully encapsulated within the <code>Car</code> class structure.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Practice Assignment</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    To enforce these concepts, translate the following requirements into code:
                </p>
                <ul className="list-disc pl-6 mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    <li>Create a class called <code>Student</code>.</li>
                    <li>Add properties for <code>name</code> and <code>age</code> using a constructor.</li>
                    <li>Add a method that prints the student's details.</li>
                    <li>Instantiate multiple student objects and call the detail method on each.</li>
                </ul>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">class</span> <span className="text-[#4ec9b0]">Student</span> {"{"}{"\n"}
                        {"  "}<span className="text-[#569cd6]">constructor</span>(name, age) {"{"}{"\n"}
                        {"    "}<span className="text-[#569cd6]">this</span>.name = name;{"\n"}
                        {"    "}<span className="text-[#569cd6]">this</span>.age = age;{"\n"}
                        {"  "}{"}"}{"\n\n"}
                        {"  "}<span className="text-[#dcdcaa]">displayDetails</span>() {"{"}{"\n"}
                        {"    "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Student: "</span> + <span className="text-[#569cd6]">this</span>.name + <span className="text-[#ce9178]">", Age: "</span> + <span className="text-[#569cd6]">this</span>.age);{"\n"}
                        {"  "}{"}"}{"\n"}
                        {"}"}{"\n\n"}
                        <span className="text-[#569cd6]">const</span> student1 = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">Student</span>(<span className="text-[#ce9178]">"Ananya"</span>, <span className="text-[#b5cea8]">21</span>);{"\n"}
                        <span className="text-[#569cd6]">const</span> student2 = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">Student</span>(<span className="text-[#ce9178]">"Rahul"</span>, <span className="text-[#b5cea8]">22</span>);{"\n\n"}
                        student1.<span className="text-[#dcdcaa]">displayDetails</span>();{"\n"}
                        student2.<span className="text-[#dcdcaa]">displayDetails</span>();
                    </code>
                </pre>
                <p className="mb-6 mt-8 text-base sm:text-lg leading-relaxed text-text-secondary border-l-4 border-accent pl-4 italic bg-background-secondary p-4  -r-lg">
                    Object-Oriented Programming transforms code from a scattered collection of functions and variables into a structured, real-world reflection of interacting entities. Classes act as robust blueprints, establishing standard properties and reusable methods, while objects serve as the individual, customizable instances running within the application. Understanding how to construct and deploy these encapsulated structures is a pivotal step toward writing clean, scalable JavaScript.
                </p>
            </section>
        </article>
    );
}
