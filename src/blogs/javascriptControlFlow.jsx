import React from "react";

export const metadata = {
    title: "Control Flow in JavaScript: If, Else, and Switch Explained",
    slug: "control-flow-javascript",
    date: "2026-02-25",
    category: "JavaScript",
    readTime: "7 min",
    summary:
        "When we write programs, we are not just giving instructions that run in a straight line. Real programs constantly make decisions using control flow structures like if, else, and switch.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Control Flow in JavaScript: If, Else, and Switch Explained
            </h2>

            <section>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    When we write programs, we are not just giving instructions that run in a straight line. Real programs constantly make decisions. Sometimes the code should run one block, sometimes another. This decision making process is called <strong>control flow</strong>. In simple words, control flow decides <strong>which part of the code runs and when</strong>. Think about real life. Every day you make small decisions. If it is raining, you take an umbrella. If it is sunny, you wear sunglasses. If it is late at night, you go to sleep. Your brain is constantly checking conditions and choosing actions. Programming works in exactly the same way. JavaScript uses structures like <strong>if, else, else if, and switch</strong> to control how a program behaves based on conditions.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">The Basic 'if' Statement</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Let us start with the most basic decision making structure: the <strong>if statement</strong>. An <code>if</code> statement runs a block of code only if a condition is true. Imagine you are writing a small program for a movie theater that checks if someone is old enough to watch a movie rated 18+. The condition is simple. If the age is 18 or more, the person can enter.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> age = <span className="text-[#b5cea8]">20</span>;{"\n\n"}
                        <span className="text-[#c586c0]">if</span> (age {">="} <span className="text-[#b5cea8]">18</span>) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"You can watch the movie"</span>);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here JavaScript checks the condition <code>age {">="} 18</code>. If the condition is true, the message is printed. If the condition is false, nothing happens. The code inside the curly braces only runs when the condition is satisfied. This is the simplest form of control flow. The program evaluates a condition and decides whether to execute a block of code.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Handling Alternatives with 'else'</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Now imagine a slightly more realistic situation. Suppose you want the program to respond differently if the condition is false. That is where the <strong>if else statement</strong> comes in. The <code>else</code> block runs when the condition inside <code>if</code> is false. Think of a security guard at a club entrance. If you are on the guest list, you can enter. Otherwise you must leave.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> age = <span className="text-[#b5cea8]">16</span>;{"\n\n"}
                        <span className="text-[#c586c0]">if</span> (age {">="} <span className="text-[#b5cea8]">18</span>) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Entry allowed"</span>);{"\n"}
                        {"}"} <span className="text-[#c586c0]">else</span> {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Entry denied"</span>);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here the program checks the condition step by step. First it evaluates <code>age {">="} 18</code>. Since the value is false, the code inside <code>if</code> is skipped. Then JavaScript moves to the <code>else</code> block and executes it. So the output becomes "Entry denied". This is the basic pattern of decision making in programming. One condition leads to two possible paths.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Multiple Choices with the 'else if' Ladder</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Sometimes we need more than two choices. Imagine a grading system in a school. If a student scores above 90, they get grade A. If the score is above 75, they get grade B. If the score is above 50, they get grade C. Otherwise they fail. In such situations we use an <strong>else if ladder</strong>. This allows the program to check multiple conditions one after another.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> marks = <span className="text-[#b5cea8]">78</span>;{"\n\n"}
                        <span className="text-[#c586c0]">if</span> (marks {">"} <span className="text-[#b5cea8]">90</span>) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Grade A"</span>);{"\n"}
                        {"}"} <span className="text-[#c586c0]">else if</span> (marks {">"} <span className="text-[#b5cea8]">75</span>) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Grade B"</span>);{"\n"}
                        {"}"} <span className="text-[#c586c0]">else if</span> (marks {">"} <span className="text-[#b5cea8]">50</span>) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Grade C"</span>);{"\n"}
                        {"}"} <span className="text-[#c586c0]">else</span> {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Fail"</span>);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here is how the code runs step by step. First JavaScript checks whether <code>marks {">"} 90</code>. That is false, so it moves to the next condition. Then it checks <code>marks {">"} 75</code>. That is true, so it prints "Grade B". Once a condition becomes true, the rest of the ladder is ignored. The program stops checking further conditions. This structure is extremely common because many real world situations involve multiple possibilities. Let us try a small program that checks whether a number is positive, negative, or zero. This situation involves logical conditions, so <code>if else</code> is the best choice.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> number = <span className="text-[#b5cea8]">-5</span>;{"\n\n"}
                        <span className="text-[#c586c0]">if</span> (number {">"} <span className="text-[#b5cea8]">0</span>) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Positive number"</span>);{"\n"}
                        {"}"} <span className="text-[#c586c0]">else if</span> (number {"<"} <span className="text-[#b5cea8]">0</span>) {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Negative number"</span>);{"\n"}
                        {"}"} <span className="text-[#c586c0]">else</span> {"{"}{"\n"}
                        {"  "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"The number is zero"</span>);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here the program evaluates the conditions one by one. If the number is greater than zero, it prints positive. If it is less than zero, it prints negative. Otherwise it must be zero. This structure clearly expresses the logic of the problem.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">Matching Exact Values with 'switch'</h3>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Another control structure used in JavaScript is the <strong>switch statement</strong>. A switch statement is useful when you want to compare a single value against many possible cases. Imagine a program that prints the day of the week based on a number. Instead of writing many if else conditions, switch makes the code cleaner.
                </p>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                    <code className="font-mono text-sm leading-relaxed">
                        <span className="text-[#569cd6]">let</span> day = <span className="text-[#b5cea8]">3</span>;{"\n\n"}
                        <span className="text-[#c586c0]">switch</span> (day) {"{"}{"\n"}
                        {"  "}<span className="text-[#c586c0]">case</span> <span className="text-[#b5cea8]">1</span>:{"\n"}
                        {"    "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Monday"</span>);{"\n"}
                        {"    "}<span className="text-[#c586c0]">break</span>;{"\n"}
                        {"  "}<span className="text-[#c586c0]">case</span> <span className="text-[#b5cea8]">2</span>:{"\n"}
                        {"    "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Tuesday"</span>);{"\n"}
                        {"    "}<span className="text-[#c586c0]">break</span>;{"\n"}
                        {"  "}<span className="text-[#c586c0]">case</span> <span className="text-[#b5cea8]">3</span>:{"\n"}
                        {"    "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Wednesday"</span>);{"\n"}
                        {"    "}<span className="text-[#c586c0]">break</span>;{"\n"}
                        {"  "}<span className="text-[#c586c0]">case</span> <span className="text-[#b5cea8]">4</span>:{"\n"}
                        {"    "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Thursday"</span>);{"\n"}
                        {"    "}<span className="text-[#c586c0]">break</span>;{"\n"}
                        {"  "}<span className="text-[#c586c0]">case</span> <span className="text-[#b5cea8]">5</span>:{"\n"}
                        {"    "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Friday"</span>);{"\n"}
                        {"    "}<span className="text-[#c586c0]">break</span>;{"\n"}
                        {"  "}<span className="text-[#c586c0]">case</span> <span className="text-[#b5cea8]">6</span>:{"\n"}
                        {"    "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Saturday"</span>);{"\n"}
                        {"    "}<span className="text-[#c586c0]">break</span>;{"\n"}
                        {"  "}<span className="text-[#c586c0]">case</span> <span className="text-[#b5cea8]">7</span>:{"\n"}
                        {"    "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Sunday"</span>);{"\n"}
                        {"    "}<span className="text-[#c586c0]">break</span>;{"\n"}
                        {"  "}<span className="text-[#c586c0]">default</span>:{"\n"}
                        {"    "}<span className="text-[#4ec9b0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Invalid day"</span>);{"\n"}
                        {"}"}
                    </code>
                </pre>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Here JavaScript checks the value of <code>day</code> and compares it with each case. When it finds a matching case, the corresponding code runs. In this example the value is <code>3</code>, so the program prints "Wednesday". One important keyword in switch statements is <strong>break</strong>. The <code>break</code> statement stops the switch once a match is found. Without break, JavaScript would continue executing the next cases as well, which usually creates unexpected results.
                </p>
                <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    Now the question arises: <strong>when should we use switch instead of if else</strong>? The general rule is simple. If you are comparing different conditions that involve ranges or logical expressions, <code>if else</code> works better. For example checking age ranges, exam marks, or temperature conditions fits naturally with if statements. But when you are checking one value against many exact matches, <code>switch</code> becomes cleaner and easier to read. For example choosing menu options, mapping numbers to days of the week, or selecting commands in a program are good use cases for switch. The reason switch is useful here is readability. Instead of writing many <code>else if</code> conditions comparing <code>day === 1</code>, <code>day === 2</code>, and so on, the switch statement organizes these possibilities neatly into separate cases.
                </p>
            </section>

            <section>
                <p className="mb-6 mt-8 text-base sm:text-lg leading-relaxed text-text-secondary border-l-4 border-accent pl-4 italic bg-background-secondary p-4 rounded-r-lg">
                    Control flow is one of the most important concepts in programming because it allows programs to behave intelligently. Instead of blindly executing instructions, the program observes conditions and chooses actions accordingly. Whether it is checking user input, validating login credentials, or deciding which message to display, control flow structures guide the path of execution. Once you become comfortable with <code>if</code>, <code>else</code>, <code>else if</code>, and <code>switch</code>, you gain the ability to make your programs react to different situations, which is the foundation of real software behavior.
                </p>
            </section>
        </article>
    );
}
