import React from "react";

export const metadata = {
    title: "Array Methods You Must Know",
    slug: "array-methods-you-must-know",
    date: "2026-02-22",
    category: "JavaScript",
    readTime: "6 min",
    summary:
        "When you start learning JavaScript, arrays slowly become your best friend. Instead of manually rewriting lists, JavaScript gives us powerful array methods like map, filter, and reduce to manage lists easily.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Array Methods You Must Know
            </h2>

            <section>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    When you start learning JavaScript, arrays slowly become your best friend. At first they look like a simple list of values, but once you start working with real programs, you realize arrays are everywhere. A list of users, a list of products, a list of messages, a list of scores in a game, all of these are arrays. Imagine you are running a small café and you keep a notebook where you write every order that comes in. One line might say coffee, another says sandwich, another says cold drink. That notebook page is basically an array. Every order is an item in that list. Now imagine customers keep ordering, canceling, or adding new things. Instead of manually rewriting the whole list every time, JavaScript gives us powerful <strong>array methods</strong> to manage these lists easily.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">The Basics: push() and pop()</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Let us start with two of the simplest ones: <strong>push() and pop()</strong>. Think of a stack of plates in a restaurant kitchen. When a new plate is cleaned, it gets placed on top of the stack. That is exactly what <code>push()</code> does. It adds a new item to the end of an array. For example imagine a list of orders in a café.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> orders = [<span className="text-[#ce9178]">"coffee"</span>, <span className="text-[#ce9178]">"sandwich"</span>];{"\n\n"}
                        orders.<span className="text-[#dcdcaa]">push</span>(<span className="text-[#ce9178]">"cake"</span>);{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(orders);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Before push it was <code>["coffee", "sandwich"]</code> and after push it becomes <code>["coffee", "sandwich", "cake"]</code>. Now imagine the last customer suddenly cancels the cake order. Instead of manually removing it, we use <code>pop()</code>. This removes the <strong>last item</strong> from the array.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        orders.<span className="text-[#dcdcaa]">pop</span>();{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(orders);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Now the array becomes: <code>["coffee", "sandwich"]</code>. So a simple rule to remember is this: <strong>push adds to the end, pop removes from the end</strong>. It is like adding or removing plates from the top of a stack.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Moving Forward: shift() and unshift()</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Now let us move to the opposite direction with <strong>shift() and unshift()</strong>. Instead of working at the end of the array, these methods work at the <strong>beginning</strong>. Imagine a queue at a movie theater. The person standing at the very front gets the ticket first. If that person leaves the line, the next person moves forward. That is what <code>shift()</code> does. It removes the <strong>first item</strong> of an array.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> queue = [<span className="text-[#ce9178]">"Rahul"</span>, <span className="text-[#ce9178]">"Amit"</span>, <span className="text-[#ce9178]">"Sana"</span>];{"\n\n"}
                        queue.<span className="text-[#dcdcaa]">shift</span>();{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(queue);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Before shift it was <code>["Rahul", "Amit", "Sana"]</code> and after shift it becomes <code>["Amit", "Sana"]</code>. Now suppose a VIP guest arrives and goes directly to the front of the line. That is what <code>unshift()</code> does. It adds an item at the <strong>beginning</strong> of the array.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        queue.<span className="text-[#dcdcaa]">unshift</span>(<span className="text-[#ce9178]">"VIP"</span>);{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(queue);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Now the array becomes: <code>["VIP", "Amit", "Sana"]</code>. So the memory trick is simple. <strong>shift removes from the start, unshift adds to the start</strong>.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Transforming Data: map()</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Once you are comfortable with these, the real magic of JavaScript arrays begins with methods like <strong>map()</strong>. Imagine you are a teacher checking exam marks. You have a list of scores and the school suddenly decides to give everyone <strong>double marks</strong> as bonus. You could loop through the array manually, but <code>map()</code> makes this much cleaner. The idea of map is simple: it <strong>creates a new array by transforming each element</strong>.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> marks = [<span className="text-[#b5cea8]">10</span>, <span className="text-[#b5cea8]">20</span>, <span className="text-[#b5cea8]">30</span>];{"\n\n"}
                        <span className="text-[#569cd6]">let</span> doubledMarks = marks.<span className="text-[#dcdcaa]">map</span>(<span className="text-[#569cd6]">function</span>(mark) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> mark * <span className="text-[#b5cea8]">2</span>;{"\n"}
                        {"}"});{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(doubledMarks);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The original array was <code>[10, 20, 30]</code> and after map it becomes <code>[20, 40, 60]</code>. What happened here is that JavaScript looked at each element, applied the function, and created a new array with the results. Compare this with a traditional for loop:
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> numbers = [<span className="text-[#b5cea8]">1</span>, <span className="text-[#b5cea8]">2</span>, <span className="text-[#b5cea8]">3</span>];{"\n"}
                        <span className="text-[#569cd6]">let</span> result = [];{"\n\n"}
                        <span className="text-[#c586c0]">for</span> (<span className="text-[#569cd6]">let</span> i = <span className="text-[#b5cea8]">0</span>; i {"<"} numbers.length; i++) {"{"}{"\n"}
                        {"  "}result.<span className="text-[#dcdcaa]">push</span>(numbers[i] * <span className="text-[#b5cea8]">2</span>);{"\n"}
                        {"}"}{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(result);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Both approaches work, but <code>map()</code> feels cleaner and easier to read once you get used to it.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Selecting Data: filter() and forEach()</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Next comes <strong>filter()</strong>, which is extremely useful in real applications. Imagine you run an online store and you want to see only products that cost more than 1000 rupees. Instead of manually checking each item, <code>filter()</code> automatically selects the ones that match a condition.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> prices = [<span className="text-[#b5cea8]">200</span>, <span className="text-[#b5cea8]">1200</span>, <span className="text-[#b5cea8]">450</span>, <span className="text-[#b5cea8]">3000</span>, <span className="text-[#b5cea8]">800</span>];{"\n\n"}
                        <span className="text-[#569cd6]">let</span> expensive = prices.<span className="text-[#dcdcaa]">filter</span>(<span className="text-[#569cd6]">function</span>(price) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> price {">"} <span className="text-[#b5cea8]">1000</span>;{"\n"}
                        {"}"});{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(expensive);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    From original array <code>[200, 1200, 450, 3000, 800]</code>, the filtered result is <code>[1200, 3000]</code>. So <code>filter()</code> simply <strong>keeps the values that satisfy the condition</strong> and removes the rest. Another very common method is <strong>forEach()</strong>. Think of it as telling JavaScript to do something <strong>for every item in the array</strong>. Imagine you have a list of students and you want to greet each one.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> students = [<span className="text-[#ce9178]">"Aman"</span>, <span className="text-[#ce9178]">"Riya"</span>, <span className="text-[#ce9178]">"Kabir"</span>];{"\n\n"}
                        students.<span className="text-[#dcdcaa]">forEach</span>(<span className="text-[#569cd6]">function</span>(student) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Hello "</span> + student);{"\n"}
                        {"}"});
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    <code>forEach()</code> does not create a new array like map. It simply runs a piece of code for each item in the original list.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Combining Data: reduce()</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Finally we come to <strong>reduce()</strong>, which sounds scary but the idea is actually simple. Reduce is used when we want to <strong>combine all elements of an array into a single value</strong>. Imagine you have a list of expenses and you want the total.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> expenses = [<span className="text-[#b5cea8]">100</span>, <span className="text-[#b5cea8]">200</span>, <span className="text-[#b5cea8]">300</span>];{"\n\n"}
                        <span className="text-[#569cd6]">let</span> total = expenses.<span className="text-[#dcdcaa]">reduce</span>(<span className="text-[#569cd6]">function</span>(sum, value) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">return</span> sum + value;{"\n"}
                        {"}"}, <span className="text-[#b5cea8]">0</span>);{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(total);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The array <code>[100, 200, 300]</code> becomes a result of <code>600</code>. What reduce does is take the first value, combine it with the next, keep accumulating the result, and finally return a single value. It is like continuously adding numbers on a calculator.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Assignment & Final Thoughts</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    To practice these methods, try a small assignment. Create an array of numbers and perform some operations on it.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> numbers = [<span className="text-[#b5cea8]">5</span>, <span className="text-[#b5cea8]">8</span>, <span className="text-[#b5cea8]">12</span>, <span className="text-[#b5cea8]">20</span>];{"\n\n"}
                        <span className="text-[#6a9955]">// map() to double each number</span>{"\n"}
                        <span className="text-[#569cd6]">let</span> doubled = numbers.<span className="text-[#dcdcaa]">map</span>(num =&gt; num * <span className="text-[#b5cea8]">2</span>);{"\n\n"}
                        <span className="text-[#6a9955]">// filter() to keep numbers &gt; 10</span>{"\n"}
                        <span className="text-[#569cd6]">let</span> greaterThanTen = numbers.<span className="text-[#dcdcaa]">filter</span>(num =&gt; num &gt; <span className="text-[#b5cea8]">10</span>);{"\n\n"}
                        <span className="text-[#6a9955]">// reduce() to calculate total sum</span>{"\n"}
                        <span className="text-[#569cd6]">let</span> sum = numbers.<span className="text-[#dcdcaa]">reduce</span>((total, num) =&gt; total + num, <span className="text-[#b5cea8]">0</span>);
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Try running these examples directly in the browser console. The best way to understand array methods is simply experimenting with them.
                </p>
                <p className="mb-6 text-base sm:text-lg leading-relaxed text-text-secondary border-l-4 border-accent pl-4 italic bg-background-secondary p-4  -r-lg">
                    Arrays are one of the most powerful parts of JavaScript, and these methods make working with them much easier. Instead of writing long loops and complicated logic, you can transform, filter, and process data with simple readable code. Once these methods become natural to you, writing JavaScript starts feeling much smoother and more expressive.
                </p>
            </section>
        </article>
    );
}
