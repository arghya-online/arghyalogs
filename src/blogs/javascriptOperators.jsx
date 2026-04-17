import React from "react";

export const metadata = {
    title: "JavaScript Operators: The Basics You Need to Know",
    slug: "javascript-operators-basics",
    date: "2026-03-01",
    category: "JavaScript",
    readTime: "7 min",
    summary:
        "Operators help the program calculate, compare, and evaluate information so that the code can behave logically. Learn about arithmetic, comparison, logical, and assignment operators.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                JavaScript Operators: The Basics You Need to Know
            </h2>

            <section>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    When writing JavaScript programs, we often need to perform operations on values. Sometimes we add numbers, sometimes we compare two values, and sometimes we combine multiple conditions to make decisions. The symbols that help us perform these operations are called <strong>operators</strong>. In simple words, an operator is something that <strong>performs an action on values or variables</strong>. Think about basic mathematics from school. When you write something like <code>5 + 3</code>, the plus symbol is doing the work of adding two numbers together. In JavaScript, operators play the same role. They help the program calculate, compare, and evaluate information so that the code can behave logically.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Arithmetic Operators</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Let us start with the most familiar category: <strong>arithmetic operators</strong>. These operators are used for basic mathematical calculations like addition, subtraction, multiplication, and division. If you have ever used a calculator, you already understand these operators.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> a = <span className="text-[#b5cea8]">10</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> b = <span className="text-[#b5cea8]">5</span>;{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(a + b); <span className="text-[#6a9955]">// 15</span>{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(a - b); <span className="text-[#6a9955]">// 5</span>{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(a * b); <span className="text-[#6a9955]">// 50</span>{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(a / b); <span className="text-[#6a9955]">// 2</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    If you run this code in the console, you will see the results of each operation. The plus symbol adds numbers, the minus symbol subtracts, the asterisk multiplies, and the slash divides. JavaScript also provides another useful arithmetic operator called <strong>modulus</strong>, represented by <code>%</code>. The modulus operator returns the remainder of a division.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> result = <span className="text-[#b5cea8]">10</span> % <span className="text-[#b5cea8]">3</span>;{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(result); <span className="text-[#6a9955]">// 1</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The result will be <code>1</code>, because when 10 is divided by 3, the remainder is 1. This operator is surprisingly useful in programming. For example, developers often use it to check whether a number is even or odd.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> number = <span className="text-[#b5cea8]">8</span>;{"\n\n"}
                        <span className="text-[#c586c0]">if</span> (number % <span className="text-[#b5cea8]">2</span> === <span className="text-[#b5cea8]">0</span>) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Even number"</span>);{"\n"}
                        {"}"} <span className="text-[#c586c0]">else</span> {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Odd number"</span>);{"\n"}
                        {"}"}
                    </code>
                </pre>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Comparison Operators</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The next important category is <strong>comparison operators</strong>. These operators compare two values and return either <code>true</code> or <code>false</code>. The result is always a boolean value, which makes them extremely useful in conditions and decision making. Some common comparison operators are <code>==</code>, <code>===</code>, <code>!=</code>, <code>{">"}</code>, and <code>{"<"}</code>.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#b5cea8]">5</span> {">"} <span className="text-[#b5cea8]">3</span>); <span className="text-[#6a9955]">// true</span>{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#b5cea8]">2</span> {"<"} <span className="text-[#b5cea8]">1</span>); <span className="text-[#6a9955]">// false</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The first expression evaluates to <code>true</code> because 5 is greater than 3. The second expression evaluates to <code>false</code> because 2 is not less than 1. One of the most important comparisons in JavaScript involves the difference between <strong>double equals (<code>==</code>) and triple equals (<code>===</code>)</strong>. Both are used to check equality, but they behave differently.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#b5cea8]">5</span> == <span className="text-[#ce9178]">"5"</span>); <span className="text-[#6a9955]">// true</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    This will return <code>true</code>. The reason is that the <code>==</code> operator performs <strong>type conversion</strong> before comparing values. It converts the string <code>"5"</code> into a number and then compares it with 5. Now look at the strict equality operator:
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#b5cea8]">5</span> === <span className="text-[#ce9178]">"5"</span>); <span className="text-[#6a9955]">// false</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    This returns <code>false</code>. The <code>===</code> operator does not convert types. It checks both the <strong>value and the data type</strong>. Since one value is a number and the other is a string, they are not considered equal. In modern JavaScript development, developers usually prefer <code>===</code> because it avoids unexpected behavior. Another comparison operator you will often see is <code>!=</code>, which checks whether two values are not equal. <code>10 != 5</code> will return <code>true</code> because the two numbers are clearly different.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Logical Operators</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    After comparison operators, another very important category is <strong>logical operators</strong>. Logical operators are used when we want to combine multiple conditions together. They are extremely common when writing decision making logic. The three main logical operators are <code>&&</code>, <code>||</code>, and <code>!</code>.
                </p>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The <code>&&</code> operator means <strong>AND</strong>. It returns true only if both conditions are true.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> age = <span className="text-[#b5cea8]">20</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> hasTicket = <span className="text-[#569cd6]">true</span>;{"\n\n"}
                        <span className="text-[#c586c0]">if</span> (age {">="} <span className="text-[#b5cea8]">18</span> && hasTicket) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"You can enter the concert"</span>);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here both conditions must be true. The person must be at least 18 years old and must also have a ticket. If either condition fails, the result becomes false. The <code>||</code> operator means <strong>OR</strong>. It returns true if at least one condition is true.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> isWeekend = <span className="text-[#569cd6]">true</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> isHoliday = <span className="text-[#569cd6]">false</span>;{"\n\n"}
                        <span className="text-[#c586c0]">if</span> (isWeekend || isHoliday) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"You can relax today"</span>);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    In this example the condition becomes true because it is a weekend, even though it is not a holiday. The final logical operator is <code>!</code>, which means <strong>NOT</strong>. It simply reverses a boolean value.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> isLoggedIn = <span className="text-[#569cd6]">false</span>;{"\n\n"}
                        <span className="text-[#c586c0]">if</span> (!isLoggedIn) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Please log in first"</span>);{"\n"}
                        {"}"}
                    </code>
                </pre>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Assignment Operators</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Another category that appears frequently in JavaScript is <strong>assignment operators</strong>. The basic assignment operator is the equals sign <code>=</code>. It assigns a value to a variable like <code><span className="text-[#569cd6]">let</span> score = <span className="text-[#b5cea8]">10</span>;</code>. But JavaScript also provides shorthand assignment operators that combine arithmetic operations with assignment.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> score = <span className="text-[#b5cea8]">10</span>;{"\n"}
                        score += <span className="text-[#b5cea8]">5</span>;{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(score); <span className="text-[#6a9955]">// 15</span>{"\n\n"}
                        <span className="text-[#569cd6]">let</span> points = <span className="text-[#b5cea8]">20</span>;{"\n"}
                        points -= <span className="text-[#b5cea8]">8</span>;{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(points); <span className="text-[#6a9955]">// 12</span>
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    The <code>+=</code> operator adds a value and then assigns the result back to the variable. It is equivalent to writing <code>score = score + 5</code>. Similarly, the <code>-=</code> operator subtracts a value and stores the result. These shorthand operators are commonly used when updating counters, scores, or totals in programs.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Putting It Into Practice</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    To practice these ideas, try a small exercise. First create two numbers and perform basic arithmetic operations on them.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> x = <span className="text-[#b5cea8]">12</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> y = <span className="text-[#b5cea8]">4</span>;{"\n\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(x + y);{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(x - y);{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(x * y);{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(x / y);{"\n\n"}
                        <span className="text-[#6a9955]">// Compare two values using both == and ===</span>{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#b5cea8]">10</span> == <span className="text-[#ce9178]">"10"</span>);{"\n"}
                        <span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#b5cea8]">10</span> === <span className="text-[#ce9178]">"10"</span>);{"\n\n"}
                        <span className="text-[#6a9955]">// Simple condition using logical operators</span>{"\n"}
                        <span className="text-[#569cd6]">let</span> age = <span className="text-[#b5cea8]">22</span>;{"\n"}
                        <span className="text-[#569cd6]">let</span> hasID = <span className="text-[#569cd6]">true</span>;{"\n\n"}
                        <span className="text-[#c586c0]">if</span> (age {">="} <span className="text-[#b5cea8]">18</span> && hasID) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Access granted"</span>);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-6 text-base sm:text-lg leading-relaxed text-text-secondary border-l-4 border-accent pl-4 italic bg-background-secondary p-4  -r-lg">
                    Operators may seem like small symbols, but they play a huge role in programming. They allow JavaScript to perform calculations, evaluate conditions, and control how programs behave. Once you understand arithmetic, comparison, logical, and assignment operators, you gain the basic tools needed to build real program logic. These operators appear everywhere in JavaScript code, so becoming comfortable with them is an important step toward writing clear and effective programs.
                </p>
            </section>
        </article>
    );
}
