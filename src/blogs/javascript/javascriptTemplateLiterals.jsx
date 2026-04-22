import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
  title: "Template Literals in JavaScript",
  slug: "javascript-template-literals",
  date: "2026-03-19",
  category: "JavaScript",
  readTime: "5 min",
  summary:
    "A shift from traditional string concatenation to the more natural, readable template literal syntax, covering multi-line strings, variable interpolation, and the mental model shift involved.",
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
        <p>
          Template literals often appear as a simple syntax change when first
          encountered, which makes it easy to overlook their significance. For
          developers comfortable with traditional string concatenation, the
          shift to backticks can feel optional rather than necessary. However,
          as applications grow and strings become increasingly dynamic, the
          limitations of standard concatenation become a source of technical
          debt and unreadability.
        </p>
        <p>
          The transition from "getting it to work" to "writing clean code"
          starts when multiple variables and conditional expressions enter the
          same string. That’s where template literals stop being a syntactic
          preference and start being a tool for clarity.
        </p>
      </section>

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        The Friction of Traditional Concatenation
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          Before ES6, building dynamic strings required constant interruption of
          the sentence using quotes and the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            +
          </code>{" "}
          operator. While this is valid and functional, it forces the developer
          to think about operations rather than output. As soon as you add logic
          like ternary operators for conditions, the syntax becomes cluttered
          and difficult to parse visually.
        </p>

        <CodeBlock
          code={`const name = "Arghya";\nconst age = 21;\n\n// Traditional concatenation\nconst message = "User " + name + " is " + age + " years old and is " + (age > 18 ? "an adult" : "a minor") + ".";`}
        />

        <p>
          Having to mentally manage opening and closing quotes while juggling
          operators creates a mismatch between what you are writing and what
          will finally be rendered. This visual noise increases the surface area
          for minor syntax errors, like missing spaces or misplaced parentheses,
          which can be surprisingly tedious to debug in large templates.
        </p>
      </section>

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        A Shift in Mental Model
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          Using backticks and the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            ${"{"}${"}"}
          </code>{" "}
          interpolation syntax shifts your focus from stitching pieces together
          to writing the output directly. You stop appending values and start
          placing them within the flow of a natural sentence. This makes the
          code read almost like plain English, even when embedding complex
          logic.
        </p>

        <CodeBlock
          code={`const message = \`User \${name} is \${age} years old and is \${age > 18 ? "an adult" : "a minor"}.\`;`}
        />

        <p>
          The primary benefit here is continuity. There is no interruption in
          the visual flow of the string. The logic stays in place, and the
          output remains predictable. This isn't just "shorter" code; it's code
          that looks like its own result, which significantly reduces the
          cognitive load required to understand what a particular variable will
          actually contain at runtime.
        </p>
      </section>

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Multi-line Strings and Documentation
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          Writing multi-line strings used to involve awkward escapes like{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            \\n
          </code>{" "}
          or manual string breaking. Template literals allow for natural line
          breaks within the backticks, preserve white space, and maintain the
          indentation of the content. This is exceptionally useful when
          constructing HTML snippets, generating logs, or formatting
          multi-paragraph messages.
        </p>

        <CodeBlock
          language="html"
          code={`const html = \`\\n<div>\\n  <h1>\${name}</h1>\\n  <p>Age: \${age}</p>\\n</div>\\n\`;`}
        />

        <p>
          Compared to concatenation, where you’d have to manage quotes for every
          single line, template literals make the structure of the output
          immediately obvious. Whether you're building a UI card or a detailed
          error message, the visual representation in your source code matches
          the final result, making it easier to maintain and reason about as the
          string grows in complexity.
        </p>
      </section>

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Real-World Usage and Maintenance
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          In modern development, template literals are the default for building
          dynamic UI strings, working with HTML templates, and logging
          structured messages. They are especially beneficial when formatting
          API data or building debug messages that require a clear context. By
          reducing visual noise, they help maintainers understand the
          developer's intent without having to mentally reconstruct the string
          from various segments.
        </p>
        <p>
          Small changes in syntax often lead to better coding habits. With
          concatenation, you think in pieces; with template literals, you think
          in whole outputs. This reduces mistakes like missing spaces or broken
          tags. Once you adopt this pattern, traditional concatenation feels
          like extra work, eventually making it clear that template literals are
          not just a stylistic choice, but a superior way to handle text-based
          data in JavaScript.
        </p>
      </section>

      <hr className="my-12 border-border" />

      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mb-12">
        <p>
          Ultimately, the value of template literals lies in their
          predictability. They remove the friction between logic and
          representation, allowing you to write strings as they are meant to
          appear. As codebases grow and collaboration becomes more frequent,
          this clarity becomes invaluable for keeping the system readable and
          maintainable over the long term.
        </p>
      </section>
    </article>
  );
}
