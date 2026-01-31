import React from "react";
import { CodeBlock } from "../components/CodeBlock";

export const metadata = {
    title: "Understanding HTML: The Complete Beginner Friendly Guide",
    slug: "understanding-html-basics",
    date: "2026-01-26",
    category: "Programming",
    readTime: "10 min",
    summary:
        "HTML is the foundation of the web. In this guide, you will learn what HTML is, how it is structured, and how tags and elements work to create every webpage you see.",
};

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
                Understanding HTML: The Complete Beginner Friendly Guide
            </h2>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Introduction
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    If you’ve ever opened a website and wondered how everything is placed so
                    neatly, how text appears in sections, images sit in the right spots, and
                    content flows properly, the answer always starts with HTML.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML is not something fancy or complex at first glance. In fact, it’s
                    quite simple. But it is also the most important part of the web. Every
                    single website you visit, no matter how modern or advanced, is built on
                    top of HTML.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Before design, before animations, before interactivity, HTML creates the
                    basic structure of a webpage.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    In this blog, we’ll go step by step through HTML in a practical way.
                    You’ll understand what HTML really is, how a basic HTML page is
                    structured, what tags and elements are, how content is grouped, and why
                    things like DOCTYPE, head, and body exist.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    By the end, HTML won’t feel confusing anymore.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    What is HTML and Why It Exists
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML stands for HyperText Markup Language. It is a markup language used
                    to structure content on the web.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    When a browser loads a website, it reads an HTML file first. This file
                    acts like a blueprint that tells the browser what each part of the page
                    is supposed to be.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML answers questions like:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>Which text is a heading?</li>
                    <li>Which part is a paragraph?</li>
                    <li>Where should an image appear?</li>
                    <li>Which sections belong together?</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Without HTML, the browser would just see plain text with no meaning.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML brings order and structure.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It doesn’t control colors or animations. Its job is to organize content
                    so everything has a clear place.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    The Basic Structure of an HTML Page
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Every HTML page follows a basic structure. Once you understand this,
                    everything else becomes easier.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    A simple HTML page looks like this:
                </p>
                <CodeBlock
                    code={`<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is my first webpage.</p>
  </body>
</html>`}
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    At first this might look like random tags, but each part has a clear
                    purpose.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Let’s break it down slowly.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    What is &lt;!DOCTYPE html&gt; and Why It Is Important
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;!DOCTYPE html&gt;
                    </code>{" "}
                    line is always written at the top of an HTML file.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It tells the browser:
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary italic">
                    “This page is written in modern HTML.”
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Before HTML5 existed, there were older versions of HTML. Browsers needed
                    to know which version was being used.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Today,{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;!DOCTYPE html&gt;
                    </code>{" "}
                    is used to make sure the browser follows modern rules and displays the
                    page correctly.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You can think of it like telling someone what language you’re speaking
                    before starting a conversation.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It doesn’t show anything on the page, but it’s very important behind the
                    scenes.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    The &lt;html&gt; Tag: The Root of the Page
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;html&gt;
                    </code>{" "}
                    tag wraps the entire webpage.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Everything inside your webpage lives inside this tag.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It tells the browser:
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary italic">
                    “Everything inside here is part of this HTML document.”
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    It has an opening tag{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;html&gt;
                    </code>{" "}
                    and a closing tag{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;/html&gt;
                    </code>
                    .
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Inside this tag, we usually place two main parts:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>the head</li>
                    <li>the body</li>
                </ul>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    The &lt;head&gt; Section: Information About the Page
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;head&gt;
                    </code>{" "}
                    section contains information about the webpage, not content that users
                    usually see.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This is where we put things like:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>the page title</li>
                    <li>meta information</li>
                    <li>links to CSS files</li>
                    <li>other settings</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock
                    code={`<head>
  <title>My Website</title>
</head>`}
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;title&gt;
                    </code>{" "}
                    tag sets the name of the page shown in the browser tab.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Even though users don’t see the head content directly on the page, it
                    plays a big role in how the site works and appears in search engines.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Think of the head as the brain of the webpage that holds instructions.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    The &lt;body&gt; Section: The Visible Content
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;body&gt;
                    </code>{" "}
                    tag contains everything that users actually see on the webpage.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>headings</li>
                    <li>paragraphs</li>
                    <li>images</li>
                    <li>buttons</li>
                    <li>links</li>
                    <li>sections</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock
                    code={`<body>
  <h1>Welcome</h1>
  <p>This is my website.</p>
</body>`}
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Anything you want to appear on the page must go inside the body.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You can think of the body as the face of the webpage.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Understanding HTML Tags
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML uses tags to describe content.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    A tag is written inside angle brackets.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock code={`<p>Hello</p>`} />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Here,{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;p&gt;
                    </code>{" "}
                    tells the browser that the content is a paragraph.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Tags are instructions.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    They don’t appear on the page, but they control how content is shown.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Some common tags include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>
                        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                            &lt;h1&gt;
                        </code>{" "}
                        for headings
                    </li>
                    <li>
                        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                            &lt;p&gt;
                        </code>{" "}
                        for paragraphs
                    </li>
                    <li>
                        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                            &lt;img&gt;
                        </code>{" "}
                        for images
                    </li>
                    <li>
                        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                            &lt;a&gt;
                        </code>{" "}
                        for links
                    </li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Once you learn a few tags, HTML becomes very easy to read.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Opening Tags, Closing Tags, and Content
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Most tags come in pairs.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    An opening tag starts content.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    A closing tag ends content and has a slash.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock code={`<h1>My Heading</h1>`} />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;h1&gt;
                    </code>{" "}
                    starts the heading
                    <br />
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;/h1&gt;
                    </code>{" "}
                    ends it
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Everything between them is content.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This makes HTML very clear and organized.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    What is an HTML Element
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    An HTML element is the full structure including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>opening tag</li>
                    <li>content</li>
                    <li>closing tag</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    So:
                </p>
                <CodeBlock code={`<p>This is text</p>`} />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    is one complete element.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    The{" "}
                    <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
                        &lt;p&gt;
                    </code>{" "}
                    alone is just a tag.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This difference is important because when working with styling and
                    JavaScript, we usually deal with elements.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Self Closing Elements
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Some elements don’t wrap content.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    They stand alone.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Examples:
                </p>
                <CodeBlock
                    code={`<img src="photo.jpg">
<br>
<hr>`}
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    These don’t need closing tags because there’s nothing inside them.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    They are called void or self closing elements.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Block Level Elements Explained
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Block elements take up full width and start on new lines.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Examples:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>headings</li>
                    <li>paragraphs</li>
                    <li>divs</li>
                    <li>sections</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    When you use them, content stacks vertically.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Block elements are used to build page layout.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    They act like large containers.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Inline Elements Explained
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Inline elements stay within a line.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    They only take space they need.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Examples:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>span</li>
                    <li>links</li>
                    <li>bold text</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    They are used inside block elements for small pieces of content.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    How HTML Builds Page Structure
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML allows nesting.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This means putting elements inside other elements.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Example:
                </p>
                <CodeBlock
                    code={`<div>
  <h1>Title</h1>
  <p>Text</p>
</div>`}
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Here, the div contains a heading and a paragraph.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This creates a structure like boxes inside boxes.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Browsers use this structure to display content properly.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This is also why HTML looks like a tree when you inspect a webpage.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Common HTML Tags You’ll Use Often
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Headings:
                </p>
                <CodeBlock
                    code={`<h1>Main</h1>
<h2>Sub</h2>
<h3>Small</h3>`}
                />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Paragraph:
                </p>
                <CodeBlock code={`<p>Text here</p>`} />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Div:
                </p>
                <CodeBlock code={`<div>Group content</div>`} />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Span:
                </p>
                <CodeBlock code={`<span>Small text</span>`} />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Image:
                </p>
                <CodeBlock code={`<img src="image.jpg">`} />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Link:
                </p>
                <CodeBlock code={`<a href="site.com">Go</a>`} />
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    With these, you can already build basic websites.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Learning HTML Through Inspect Tool
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    One of the best ways to learn is exploring real websites.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Right click any site and choose “Inspect”.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You’ll see the HTML structure.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    You can open elements and see how pages are built.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    This gives real world understanding.
                </p>
            </section>

            <section>
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                    Final Thoughts
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML is the foundation of everything on the web. It structures content
                    so browsers can display pages clearly.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    By understanding:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
                    <li>DOCTYPE</li>
                    <li>html, head, body</li>
                    <li>tags and elements</li>
                    <li>block and inline behavior</li>
                    <li>page structure</li>
                </ul>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    you already know the core of HTML.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    HTML is simple by design, yet powerful enough to support the entire
                    internet.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Learn it slowly, practice building small pages, and explore real
                    websites.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                    Once HTML feels natural, learning CSS and JavaScript becomes much
                    easier.
                </p>
            </section>
        </article>
    );
}
