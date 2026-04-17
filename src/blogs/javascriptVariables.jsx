import React from "react";

export const metadata = {
  title: "Understanding Variables and Data Types in JavaScript",
  slug: "understanding-variables-data-types-js",
  date: "2026-03-03",
  category: "JavaScript",
  readTime: "5 min",
  summary:
    "When someone first starts learning programming, variables appear almost immediately. At first the word sounds technical, but the idea is actually very simple - it's just like a labeled box.",
};

export default function BlogContent() {
  return (
    <article className="max-w-none mx-auto sm:px-6 text-text-primary">
      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Understanding Variables and Data Types in JavaScript
      </h2>
      <section>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          When someone first starts learning programming, one concept appears
          almost immediately: <strong>variables</strong>. At first, the word
          sounds technical, but the idea is actually very simple.
        </p>
        <p className="mb-4 text-base sm:text-lg font-semibold text-text-secondary">
          Think of a variable like a box.
        </p>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          Imagine you have a table and several boxes on it. On each box, you
          write a label so you remember what is inside. One box says{" "}
          <strong>Name</strong>, another says <strong>Age</strong>, and another
          says <strong>IsStudent</strong>. Inside each box, you store a
          corresponding value. Programming works almost exactly exactly the same
          way.
        </p>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          A{" "}
          <strong>
            variable is simply a labeled box that stores information
          </strong>
          . Your program can read from the box, change the value inside, or use
          it to make decisions.
        </p>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          For example, if we want to store someone’s name in JavaScript, we
          could write:
        </p>
        <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-6 border border-border">
          <code className="font-mono text-sm leading-relaxed">
            <span className="text-[#569cd6]">let</span> name ={" "}
            <span className="text-[#ce9178]">"Arjun"</span>;
          </code>
        </pre>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          Here three things are happening:
        </p>
        <ul className="list-disc pl-6 mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          <li>
            First, we create a variable called <code>name</code>.
          </li>
          <li>Second, we store a value inside it.</li>
          <li>
            Third, that value is <code>"Arjun"</code>.
          </li>
        </ul>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          Now anywhere in the program, if we use <code>name</code>, JavaScript
          will remember that the value inside the box is <code>"Arjun"</code>.
          You can print it like this:
        </p>
        <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-6 border border-border">
          <code className="font-mono text-sm leading-relaxed">
            <span className="text-[#4ec9b0]">console</span>.
            <span className="text-[#dcdcaa]">log</span>(name);
          </code>
        </pre>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          Very simple idea. A labeled box storing information.
        </p>
      </section>

      <section>
        <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
          Why Variables Are Needed
        </h3>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          Imagine writing a program without variables. Every time you wanted to
          refer to a name or age, you would have to type the value manually over
          and over again.
        </p>
        <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-6 border border-border">
          <code className="font-mono text-sm leading-relaxed">
            <span className="text-[#4ec9b0]">console</span>.
            <span className="text-[#dcdcaa]">log</span>(
            <span className="text-[#ce9178]">"Arjun is 21 years old"</span>);
            {"\n"}
            <span className="text-[#4ec9b0]">console</span>.
            <span className="text-[#dcdcaa]">log</span>(
            <span className="text-[#ce9178]">"Arjun likes football"</span>);
            {"\n"}
            <span className="text-[#4ec9b0]">console</span>.
            <span className="text-[#dcdcaa]">log</span>(
            <span className="text-[#ce9178]">"Arjun lives in Delhi"</span>);
          </code>
        </pre>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          If Arjun’s name changes to Rohit, you would need to update it
          everywhere. That gets messy very quickly. Instead, we use variables:
        </p>
        <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-6 border border-border">
          <code className="font-mono text-sm leading-relaxed">
            <span className="text-[#569cd6]">let</span> name ={" "}
            <span className="text-[#ce9178]">"Arjun"</span>;{"\n"}
            <span className="text-[#569cd6]">let</span> age ={" "}
            <span className="text-[#b5cea8]">21</span>;{"\n\n"}
            <span className="text-[#4ec9b0]">console</span>.
            <span className="text-[#dcdcaa]">log</span>(name +{" "}
            <span className="text-[#ce9178]">" is "</span> + age +{" "}
            <span className="text-[#ce9178]">" years old"</span>);{"\n"}
            <span className="text-[#4ec9b0]">console</span>.
            <span className="text-[#dcdcaa]">log</span>(name +{" "}
            <span className="text-[#ce9178]">" likes football"</span>);{"\n"}
            <span className="text-[#4ec9b0]">console</span>.
            <span className="text-[#dcdcaa]">log</span>(name +{" "}
            <span className="text-[#ce9178]">" lives in Delhi"</span>);
          </code>
        </pre>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          Now if the name changes, you only change it once. That’s the real
          power of variables.
        </p>
      </section>

      <section>
        <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
          Declaring Variables in JavaScript
        </h3>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          JavaScript gives us <strong>three ways</strong> to create variables:{" "}
          <code>var</code>, <code>let</code>, and <code>const</code>. They all
          create variables, but they behave slightly differently.
        </p>

        <h4 className="mt-6 mb-3 text-xl font-semibold text-text-primary">
          Using var
        </h4>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          <code>var</code> is the older way of declaring variables in
          JavaScript. It allows you to declare a value and change it later.
        </p>
        <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-6 border border-border">
          <code className="font-mono text-sm leading-relaxed">
            <span className="text-[#569cd6]">var</span> city ={" "}
            <span className="text-[#ce9178]">"Kolkata"</span>;{"\n"}
            city = <span className="text-[#ce9178]">"Mumbai"</span>;{"\n\n"}
            <span className="text-[#4ec9b0]">console</span>.
            <span className="text-[#dcdcaa]">log</span>(city);{" "}
            <span className="text-[#6a9955]">// Outputs: Mumbai</span>
          </code>
        </pre>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          However, modern JavaScript developers usually avoid <code>var</code>{" "}
          because its older scoping rules can behave in confusing ways in larger
          programs.
        </p>

        <h4 className="mt-6 mb-3 text-xl font-semibold text-text-primary">
          Using let
        </h4>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          <code>let</code> is the modern and recommended way to create variables
          when the value might change (for instance, a player's score updating
          during a game).
        </p>
        <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-6 border border-border">
          <code className="font-mono text-sm leading-relaxed">
            <span className="text-[#569cd6]">let</span> score ={" "}
            <span className="text-[#b5cea8]">10</span>;{"\n"}
            score = <span className="text-[#b5cea8]">20</span>;{"\n\n"}
            <span className="text-[#4ec9b0]">console</span>.
            <span className="text-[#dcdcaa]">log</span>(score);{" "}
            <span className="text-[#6a9955]">// Outputs: 20</span>
          </code>
        </pre>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          So <code>let</code> is perfect when{" "}
          <strong>values need to frequently update</strong>.
        </p>

        <h4 className="mt-6 mb-3 text-xl font-semibold text-text-primary">
          Using const
        </h4>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          <code>const</code> is different. It means the value{" "}
          <strong>cannot be reassigned later</strong>. Think of it like writing
          something with a permanent marker on the box. Once written, you cannot
          erase it.
        </p>
        <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-6 border border-border">
          <code className="font-mono text-sm leading-relaxed">
            <span className="text-[#569cd6]">const</span> country ={" "}
            <span className="text-[#ce9178]">"India"</span>;{"\n"}
            country = <span className="text-[#ce9178]">"Japan"</span>;{" "}
            <span className="text-[#6a9955]">// Throws an error!</span>
          </code>
        </pre>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          This is useful when the value should never change, like{" "}
          <code>
            <span className="text-[#569cd6]">const</span> pi ={" "}
            <span className="text-[#b5cea8]">3.14159</span>;
          </code>
          .
        </p>
      </section>

      <section>
        <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
          Primitive Data Types
        </h3>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          Now let’s talk about{" "}
          <strong>what kind of values we can store inside variables</strong>. In
          JavaScript, basic values are called{" "}
          <strong>primitive data types</strong>. The most common ones are
          strings, numbers, booleans, null, and undefined.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="p-4 border border-border  -lg bg-background-secondary">
            <h4 className="text-xl font-semibold text-text-primary mb-2">
              String
            </h4>
            <p className="text-text-secondary mb-3">
              A string is simply text. Anything written inside quotes becomes a
              string.
            </p>
            <code className="block bg-[#1e1e1e] text-[#d4d4d4] p-2   text-sm font-mono">
              <span className="text-[#569cd6]">let</span> msg ={" "}
              <span className="text-[#ce9178]">"Hello"</span>;
            </code>
          </div>

          <div className="p-4 border border-border  -lg bg-background-secondary">
            <h4 className="text-xl font-semibold text-text-primary mb-2">
              Number
            </h4>
            <p className="text-text-secondary mb-3">
              JavaScript doesn't separate integers and decimals. Both are
              numbers.
            </p>
            <code className="block bg-[#1e1e1e] text-[#d4d4d4] p-2   text-sm font-mono">
              <span className="text-[#569cd6]">let</span> pi ={" "}
              <span className="text-[#b5cea8]">3.14</span>;
            </code>
          </div>

          <div className="p-4 border border-border  -lg bg-background-secondary">
            <h4 className="text-xl font-semibold text-text-primary mb-2">
              Boolean
            </h4>
            <p className="text-text-secondary mb-3">
              Represents truth values. There are only two possibilities:{" "}
              <code>true</code> or <code>false</code>.
            </p>
            <code className="block bg-[#1e1e1e] text-[#d4d4d4] p-2   text-sm font-mono">
              <span className="text-[#569cd6]">let</span> isRain ={" "}
              <span className="text-[#569cd6]">true</span>;
            </code>
          </div>

          <div className="p-4 border border-border  -lg bg-background-secondary">
            <h4 className="text-xl font-semibold text-text-primary mb-2">
              Null & Undefined
            </h4>
            <p className="text-text-secondary mb-3">
              <code>null</code> is an intentionally empty value.{" "}
              <code>undefined</code> means no value has been set yet.
            </p>
            <code className="block bg-[#1e1e1e] text-[#d4d4d4] p-2   text-sm font-mono">
              <span className="text-[#569cd6]">let</span> a ={" "}
              <span className="text-[#569cd6]">null</span>;
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
          Summary: var vs let vs const
        </h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-border text-left">
            <thead>
              <tr className="bg-background-secondary border-b border-border">
                <th className="p-3 font-semibold text-text-primary border-r border-border">
                  Keyword
                </th>
                <th className="p-3 font-semibold text-text-primary border-r border-border">
                  Can Change Value
                </th>
                <th className="p-3 font-semibold text-text-primary">
                  Modern Usage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 text-text-secondary border-r border-border font-mono">
                  var
                </td>
                <td className="p-3 text-text-secondary border-r border-border">
                  Yes
                </td>
                <td className="p-3 text-text-secondary">Mostly avoided</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 text-text-secondary border-r border-border font-mono">
                  let
                </td>
                <td className="p-3 text-text-secondary border-r border-border">
                  Yes
                </td>
                <td className="p-3 text-text-secondary">Recommended</td>
              </tr>
              <tr>
                <td className="p-3 text-text-secondary border-r border-border font-mono">
                  const
                </td>
                <td className="p-3 text-text-secondary border-r border-border">
                  No
                </td>
                <td className="p-3 text-text-secondary">
                  Used for fixed values
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          In most modern JavaScript code, use{" "}
          <strong>
            <code>let</code>
          </strong>{" "}
          when values change, and use{" "}
          <strong>
            <code>const</code>
          </strong>{" "}
          when values stay fixed.
        </p>
      </section>

      <section>
        <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
          What is Scope? (Super Simple Explanation)
        </h3>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          Scope means <strong>where a variable can be used</strong>. Think of it
          like rooms in a house. If you keep your phone in your bedroom, someone
          in the kitchen cannot magically see it. Variables behave similarly.
        </p>
        <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4  -lg overflow-x-auto mb-6 border border-border">
          <code className="font-mono text-sm leading-relaxed">
            {"{"}
            {"\n"}
            {"  "}
            <span className="text-[#569cd6]">let</span> secret ={" "}
            <span className="text-[#ce9178]">"Hidden treasure"</span>;{"\n"}
            {"}"}
            {"\n\n"}
            <span className="text-[#4ec9b0]">console</span>.
            <span className="text-[#dcdcaa]">log</span>(secret);{" "}
            <span className="text-[#6a9955]">
              // Error: secret is not defined
            </span>
          </code>
        </pre>
        <p className="mb-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          Because <code>secret</code> was created inside a block (curly braces),
          outside that block it does not exist. The variable lived{" "}
          <strong>only inside that room</strong>. This scoping idea helps
          prevent variables from mysteriously interfering with each other across
          large codebases.
        </p>
      </section>

      <section>
        <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
          Final Thoughts
        </h3>
        <p className="mb-6 text-base sm:text-lg leading-relaxed text-text-secondary border-l-4 border-accent pl-4 italic bg-background-secondary p-4  -r-lg">
          Variables are one of the most fundamental building blocks in
          programming that allow programs to store information, reuse values,
          and build dynamic behavior. Once you understand variables, the next
          step becomes much easier since concepts like conditions, loops, and
          functions all depend on variables and data types. So whenever you feel
          confused, remember the simple analogy: a variable is just a labeled
          box storing a value. Once that idea clicks, JavaScript starts feeling
          much more friendly, and from there, you begin building real programs.
        </p>
      </section>
    </article>
  );
}
