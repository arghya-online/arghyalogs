import React from "react";
import { CodeBlock } from "../components/CodeBlock";

export const metadata = {
    title: "CSS Selectors 101: Targeting Elements with Precision",
    slug: "understanding-css-selectors",
    date: "2026-01-28",
    category: "Programming",
    readTime: "8 min",
    summary:
        "Selectors are the foundation of CSS. Learn how to target elements using tags, classes, IDs, and more to style your webpages effectively.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
                CSS Selectors 101: Targeting Elements with Precision
            </h2>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Introduction
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    When you first write CSS, it might feel confusing. You add some color or
                    font size, but nothing changes on the page. Or sometimes everything
                    changes when you only wanted to style one small part.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This happens because CSS always works in two steps. First, it selects
                    elements. Then, it applies styles to them.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The part that chooses elements is called a selector.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Selectors are the foundation of CSS. Every design you see on a webpage
                    starts with a selector pointing to some HTML.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Before learning layouts, animations, or advanced styling, understanding
                    selectors is the most important step.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    How CSS Connects With HTML
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Before using selectors, CSS must be linked to an HTML file.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The most common way is using a{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;link&gt;
                    </code>{" "}
                    tag inside the{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;head&gt;
                    </code>{" "}
                    section of HTML.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock
                    code={`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a paragraph</p>
</body>
</html>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Here,{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        style.css
                    </code>{" "}
                    is the CSS file.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Inside that file, we write selectors and styles.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example of a CSS file:
                </p>
                <CodeBlock
                    code={`h1 {
  color: blue;
}

p {
  font-size: 18px;
}`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Now the browser knows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>Select all h1 elements and make them blue.</li>
                    <li>Select all p elements and change their text size.</li>
                </ul>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Why CSS Selectors Are Needed
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    A webpage can have many elements. Without selectors, CSS would not know
                    where to apply styles.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Imagine a page with 50 paragraphs and 10 buttons. If you want only some
                    of them to look different, you need a way to point to them.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Selectors give CSS this power.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    They allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>style all elements of a type</li>
                    <li>style specific groups</li>
                    <li>style one unique element</li>
                    <li>style elements inside other elements</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This makes large websites organized and easy to manage.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Element Selector
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The element selector targets elements by their HTML tag name.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock
                    code={`p {
  color: black;
}`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This selects all{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;p&gt;
                    </code>{" "}
                    elements on the page.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    If you have:
                </p>
                <CodeBlock
                    code={`<p>First text</p>
<p>Second text</p>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Both will become black.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Another example:
                </p>
                <CodeBlock
                    code={`h1 {
  font-size: 40px;
}`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    All headings become big.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Element selectors are useful for setting basic styles across the page.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Class Selector
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The class selector is used when you want to style certain elements but
                    not all of them.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    First add a class in HTML:
                </p>
                <CodeBlock
                    code={`<p class="highlight">Important text</p>
<p>Normal text</p>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Then in CSS:
                </p>
                <CodeBlock
                    code={`.highlight {
  color: red;
  font-weight: bold;
}`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Only the paragraph with the class highlight becomes red and bold.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You can reuse classes many times:
                </p>
                <CodeBlock
                    code={`<div class="highlight">Box</div>
<span class="highlight">Word</span>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Both get styled.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Classes are the most commonly used selectors in real projects.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    ID Selector
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The ID selector is used for one unique element.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML:
                </p>
                <CodeBlock
                    code={`<h1 id="main-title">Welcome</h1>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    CSS:
                </p>
                <CodeBlock
                    code={`#main-title {
  color: green;
}`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Only that heading changes.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    IDs should not repeat on a page.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    They are for special elements like headers, main sections, or unique
                    components.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Group Selectors
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    When multiple elements need the same style, you can group selectors.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock
                    code={`h1, h2, p {
  color: darkgray;
}`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This styles all h1, h2, and p elements together.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Grouping keeps CSS clean and avoids repetition.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Descendant Selectors
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Descendant selectors target elements inside other elements.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock
                    code={`div p {
  color: blue;
}`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This means:
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary italic">
                    Only paragraphs inside divs become blue.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML:
                </p>
                <CodeBlock
                    code={`<div>
  <p>This will be blue</p>
</div>

<p>This stays normal</p>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This is very useful for layouts and sections.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It lets you style based on structure.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Basic Selector Priority (Simple Version)
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Sometimes the same element is targeted by different selectors.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock
                    code={`p {
  color: blue;
}

.highlight {
  color: red;
}

#special {
  color: green;
}`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML:
                </p>
                <CodeBlock
                    code={`<p id="special" class="highlight">Hello</p>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The text will be green.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Why?
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Because priority goes like this:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>ID selector wins over class selector.</li>
                    <li>Class selector wins over element selector.</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    So the strongest selector takes effect.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    What Goes Inside a CSS Rule
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    A CSS rule has two main parts.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock
                    code={`p {
  color: blue;
  font-size: 16px;
}`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Here:
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        p
                    </code>{" "}
                    is the selector
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Inside{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        {`{ }`}
                    </code>{" "}
                    are properties and values.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>color is a property</li>
                    <li>blue is its value</li>
                    <li>font-size is a property</li>
                    <li>16px is its value</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You can add many properties inside one rule.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Simple Before and After Example
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML:
                </p>
                <CodeBlock
                    code={`<p>This is normal text</p>
<p class="highlight">This is special text</p>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    CSS:
                </p>
                <CodeBlock
                    code={`p {
  color: black;
}

.highlight {
  color: orange;
}`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Result:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>First paragraph stays black.</li>
                    <li>Second paragraph becomes orange.</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This shows how selectors control styling.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Why Selectors Matter So Much
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Every advanced CSS feature depends on selectors.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>Flexbox layouts</li>
                    <li>Grid systems</li>
                    <li>animations</li>
                    <li>responsive designs</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    All of them start by selecting the right elements.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    If you understand selectors well, CSS becomes much easier.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    If selectors confuse you, everything else feels confusing too.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    That’s why selectors are the base of CSS.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Final Thoughts
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    CSS selectors are simply ways to choose elements on a webpage.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>Element selectors style everything of one type.</li>
                    <li>Class selectors style groups.</li>
                    <li>ID selectors style one unique element.</li>
                    <li>Group selectors apply styles to many at once.</li>
                    <li>Descendant selectors style based on structure.</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Once you learn how CSS connects to HTML and how selectors work, you
                    unlock the real power of styling.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Practice small examples.
                    <br />
                    Inspect real websites.
                    <br />
                    Play around with classes and elements.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Selectors are the foundation of CSS, and mastering them makes web design
                    much easier.
                </p>
            </section>
        </article>
    );
}
