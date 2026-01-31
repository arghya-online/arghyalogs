import React from "react";
import { CodeBlock } from "../components/CodeBlock";

export const metadata = {
    title: "Emmet for HTML: A Beginner’s Guide to Writing Faster Markup",
    slug: "emmet-for-html-guide",
    date: "2026-01-29",
    category: "Programming",
    readTime: "7 min",
    summary:
        "Learn how to use Emmet to write HTML faster. Discover shortcuts for creating elements, nesting, adding classes, and generating boilerplate code instantly.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
                Emmet for HTML: A Beginner’s Guide to Writing Faster Markup
            </h2>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Introduction
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    When you begin writing HTML, everything feels slow at first. You
                    carefully type each opening tag, make sure to close it properly, indent
                    nested elements, and repeat the same structures again and again. A
                    simple page can easily turn into dozens of lines of markup.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    At the start, this is fine because it helps you understand HTML. But
                    very quickly, you realize that a lot of your time is spent typing
                    repetitive code instead of thinking about structure and layout.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This is where Emmet comes in.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet is a productivity tool built into modern code editors that allows
                    you to write HTML using short abbreviations. These abbreviations
                    instantly expand into full HTML structures. What might take minutes to
                    write manually can be done in seconds with Emmet.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    In this blog, we’ll explore Emmet from the basics to slightly more
                    advanced everyday usage. You’ll see how it works, why it’s useful for
                    beginners, and how it can dramatically speed up your HTML workflow.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    What is Emmet in Very Simple Terms
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet is basically a shorthand system for writing HTML.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Instead of typing full HTML tags and structures, you type a short
                    pattern and let your editor convert it into complete markup.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    For example, instead of writing:
                </p>
                <CodeBlock code={`<div></div>`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You simply type:
                </p>
                <CodeBlock code={`div`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    and press Enter.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet understands what you mean and generates the full element.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    At a basic level, Emmet is just auto generation of HTML. But at a deeper
                    level, it understands structure, nesting, repetition, and attributes.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It’s not just autocomplete. It’s a smart expansion system.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Why Emmet is Useful for HTML Beginners
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    For beginners, HTML can feel overwhelming mainly because of repetition.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You write:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>opening tags</li>
                    <li>closing tags</li>
                    <li>nested elements</li>
                    <li>lots of divs</li>
                    <li>long structures</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    And one small mistake can break layout.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet helps beginners by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>automatically closing tags</li>
                    <li>creating clean indentation</li>
                    <li>reducing syntax errors</li>
                    <li>speeding up practice</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This allows learners to focus on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>understanding structure</li>
                    <li>learning layout concepts</li>
                    <li>building pages faster</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Instead of struggling with typing, you spend more time understanding
                    HTML itself.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet also builds good habits because it produces properly formatted
                    code.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    How Emmet Works Inside Code Editors
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet works directly inside popular editors like VS Code, Sublime Text,
                    and others.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    In most modern editors, Emmet is already enabled by default.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The workflow is simple:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>You type an abbreviation</li>
                    <li>You press Enter or Tab</li>
                    <li>The editor expands it</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    For example:
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Type:
                </p>
                <CodeBlock code={`h1`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Press Enter.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You get:
                </p>
                <CodeBlock code={`<h1></h1>`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This happens instantly.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Behind the scenes, Emmet is interpreting your abbreviation as a
                    structure and converting it into HTML.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Basic Emmet Syntax and the Idea Behind It
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet is based on a few simple symbols that represent relationships.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Some of the most important ones are:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>
                        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                            .
                        </code>{" "}
                        for class
                    </li>
                    <li>
                        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                            #
                        </code>{" "}
                        for ID
                    </li>
                    <li>
                        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                            &gt;
                        </code>{" "}
                        for nesting
                    </li>
                    <li>
                        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                            *
                        </code>{" "}
                        for repeating
                    </li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Once you understand these, you can create almost any structure.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet is designed to mirror how HTML is structured.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    That’s why it feels natural once you use it for some time.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Creating HTML Elements Using Emmet
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The simplest use of Emmet is creating elements.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Just type the element name.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Examples:
                </p>
                <CodeBlock code={`p`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock code={`<p></p>`} language="html" />
                <CodeBlock code={`section`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock code={`<section></section>`} language="html" />
                <CodeBlock code={`header`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock code={`<header></header>`} language="html" />
                <CodeBlock code={`footer`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock code={`<footer></footer>`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This might look small, but across a large file it saves huge effort.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Adding Classes, IDs, and Attributes
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This is where Emmet becomes incredibly practical.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Adding a class
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Use a dot:
                </p>
                <CodeBlock code={`div.wrapper`} language="css" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock code={`<div class="wrapper"></div>`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You can add multiple classes:
                </p>
                <CodeBlock code={`div.box.active`} language="css" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock code={`<div class="box active"></div>`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Adding an ID
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Use a hash:
                </p>
                <CodeBlock code={`section#home`} language="css" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock code={`<section id="home"></section>`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Adding attributes
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Use square brackets:
                </p>
                <CodeBlock code={`input[type="text"]`} language="css" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock code={`<input type="text">`} language="html" />
                <CodeBlock code={`img[src="photo.jpg" alt="image"]`} language="css" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock
                    code={`<img src="photo.jpg" alt="image">`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This is extremely useful for forms and images.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Creating Nested Elements
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML structure often has elements inside elements.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet uses &gt; to represent “inside”.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock code={`div>p`} language="css" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock
                    code={`<div>
  <p></p>
</div>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Another:
                </p>
                <CodeBlock code={`nav>ul>li`} language="css" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock
                    code={`<nav>
  <ul>
    <li></li>
  </ul>
</nav>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You can go as deep as you want:
                </p>
                <CodeBlock code={`div>section>article>p`} language="css" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This builds complex structures instantly.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Repeating Elements with Multiplication
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Very often, you need multiple similar elements.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet allows repetition using *.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock code={`ul>li*5`} language="css" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock
                    code={`<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Another example:
                </p>
                <CodeBlock code={`div.card*3`} language="css" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    →
                </p>
                <CodeBlock
                    code={`<div class="card"></div>
<div class="card"></div>
<div class="card"></div>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This is extremely helpful when creating grids, lists, and layouts.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Generating a Full HTML Boilerplate
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    One of the most popular Emmet shortcuts is the boilerplate generator.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Just type:
                </p>
                <CodeBlock code={`!`} language="html" />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    and press Enter.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You instantly get:
                </p>
                <CodeBlock
                    code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This saves time every time you start a new project.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It also ensures you always use modern HTML structure.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    A Real World Emmet Example
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Let’s say you want to create a basic layout.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You type:
                </p>
                <CodeBlock
                    code={`div.container>header+h1+p+section>div.card*3`}
                    language="css"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet expands to:
                </p>
                <CodeBlock
                    code={`<div class="container">
  <header></header>
  <h1></h1>
  <p></p>
  <section>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </section>
</div>`}
                    language="html"
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This would normally take many lines of typing.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    With Emmet, it takes seconds.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    How Emmet Improves Real Development Workflow
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    In real projects, developers constantly:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>create layouts</li>
                    <li>build forms</li>
                    <li>structure components</li>
                    <li>repeat blocks</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet speeds all of this.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It also reduces mistakes like:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>missing closing tags</li>
                    <li>wrong nesting</li>
                    <li>messy indentation</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Over time, this saves hours of work.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    That’s why almost every professional web developer uses Emmet daily.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Should Beginners Depend Fully on Emmet?
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet is amazing, but beginners should still understand normal HTML.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You should know:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>how tags work</li>
                    <li>how nesting works</li>
                    <li>what elements mean</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet is a helper, not a replacement for learning.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Once you understand HTML basics, Emmet becomes a powerful shortcut
                    tool.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Best Way to Practice Emmet
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The best way to learn Emmet is simple:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>Open your code editor</li>
                    <li>Create an HTML file</li>
                    <li>Try small abbreviations</li>
                    <li>Expand them</li>
                    <li>Observe the result</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Start with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>elements</li>
                    <li>classes</li>
                    <li>nesting</li>
                    <li>multiplication</li>
                    <li>boilerplate</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Don’t try to memorize everything.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Use it daily and it becomes natural.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Final Thoughts
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Emmet is one of the best tools for writing HTML faster and cleaner.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It allows you to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>generate elements instantly</li>
                    <li>add classes and IDs quickly</li>
                    <li>build nested structures easily</li>
                    <li>repeat elements without typing</li>
                    <li>create full page structure in one step</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    For beginners, Emmet reduces frustration and speeds up learning.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    For professionals, it saves massive time every day.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It’s optional, but once you start using it, you’ll wonder how you ever
                    wrote HTML without it.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Mastering Emmet alongside HTML is one of the smartest moves you can make
                    in web development.
                </p>
            </section>
        </article>
    );
}
