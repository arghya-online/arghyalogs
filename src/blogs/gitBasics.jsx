import React from "react";
import { CopyButton } from "../components/CopyButton";

export const metadata = {
    title: "What Is Git",
    slug: "what-is-git",
    date: "2024-12-30",
    category: "Programming",
    readTime: "10 min",
    summary:
        "A beginner-friendly, no-nonsense guide to Git fundamentals, commands, workflow, and best practices.",
};

function CodeBlock({ code }) {
    return (
        <div className="relative my-6">
            <pre className="overflow-x-auto bg-surface p-4 text-sm text-text-primary border border-border">
                <code>{code}</code>
            </pre>
            <CopyButton code={code} />
        </div>
    );
}

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <h2 className="p-2 mt-12 mb-4 text-3xl font-semibold">
                What Is Git
            </h2>
            <p className="p-2 mb-6 leading-relaxed">
                In today's modern software development environment, Git is a handy and
                powerful tool that is also open-source. It is a free and open source
                distributed version control system that basically tracks and records
                every single change in a code-space with different commands. Along with
                that it stores every single change that was done with the code. It
                stores in the computers local storage and can be accessed that later
                with no internet access(offline).
            </p>
            <h2 className="p-2 mt-6 mb-4 text-3xl font-semibold">
                Why Git Is Used
            </h2>
            <hr className="my-10 border-border" />

            <p className="p-2 mb-6 leading-relaxed">
                Git is used by developers worldwide to manage and maintain large
                codebases in a secure and reliable way. It allows programmers to work
                on the same codebase while keeping every change and update recorded in
                an organized manner.
            </p>

            <p className="p-2 mb-6 leading-relaxed">
                Git is primarily operated through a <span className="font-semibold">
                    Command Line Interface (CLI)</span>. This means developers interact
                with Git by typing commands rather than using a graphical interface.
                On different operating systems, Git can be accessed through tools such
                as Git CLI, Command Prompt, PowerShell, or Terminal. Once Git is
                installed on a computer, it can be used from any of these command-line
                environments to manage projects.
            </p>

            <p className="p-2 mb-6 leading-relaxed">
                Using simple CLI commands, Git enables developers to modify code and
                precisely track when a change was made, what was changed, and who made
                the change. This detailed history helps in reviewing progress,
                debugging issues, and restoring previous versions of the code when
                necessary.
            </p>

            <p className="p-2 mb-4 leading-relaxed">
                Additionally, Git allows multiple developers to collaborate on a
                single codebase without disrupting the stable version of the project.
                Through branching and version control mechanisms, programmers can
                work independently on new features or fixes while ensuring that the
                main codebase remains stable, organized, and production ready.
            </p>

            <h2 className="p-2 mt-12 mb-4 text-3xl font-semibold">
                Git Basics and Core Terminologies
            </h2>

            <p className="p-2 mb-4 leading-relaxed">
                Before using git, you should know or be familiar with a few important
                terms that are required to work with git. Like what is a repository,
                what is committing a code, what is branching etc.. Let’s explore those
                in a short and crisp way.
            </p>

            <h3 className="p-2 mt-6 mb-3 text-2xl font-semibold">
                Repository
            </h3>

            <p className="p-2 mb-4 leading-relaxed">
                Programmers have a funny habit of giving simple things complicated
                names, and <span className="font-semibold">repository</span> is one of
                them. A repository is simply a folder. It is the same folder you
                create on your computer before starting any project.
            </p>

            <p className="p-2 mb-4 leading-relaxed">
                Once Git is initialized inside this folder, it becomes a{" "}
                <span className="font-semibold">Git repository</span> (often called a
                repo). All your project files and code live inside this repository.
            </p>

            <p className="p-2 mb-4 leading-relaxed">
                A <span className="font-semibold">local repository</span> exists on
                your own computer and stores the complete project along with its
                change history. You have full control over where this repository is
                created.
            </p>

            <p className="p-2 mb-4 leading-relaxed">
                Inside every Git repository, Git creates a hidden{" "}
                <code className="px-1 py-0.5 bg-surface border border-border">.git</code>{" "}
                directory. This directory contains all Git related data such as
                commits, branches, and configuration files, and should not be
                modified manually.
            </p>

            <h3 className="p-2 mt-6 mb-3 text-2xl font-semibold">
                Commit
            </h3>

            <p className="p-2 mb-2 leading-relaxed">
                Again, programmers love fancy words. A commit is simply a saved
                snapshot of your project at a particular point in time. It records
                the exact state of your files when you decide to save your progress.
            </p>

            <p className="p-2 mb-4 leading-relaxed">
                Every commit becomes part of the project’s history. Git maintains
                these snapshots in sequence, allowing you to move backward or forward
                through different versions of your code whenever needed.
            </p>

            <p className="p-2 mb-4 leading-relaxed">
                Each commit also includes a commit message, which explains what was
                changed and why. Writing clear and meaningful commit messages is
                important because they help you and other developers understand the
                purpose of changes when reviewing the project history later.
            </p>

            <h2 className="p-2 mt-6 mb-2 text-3xl font-semibold">
                Simple Project Setup Example
            </h2>

            <CodeBlock code={`mkdir my-first-project\ncd my-first-project`} />
            <CodeBlock code={`git init`} />

        </article>
    );
}
