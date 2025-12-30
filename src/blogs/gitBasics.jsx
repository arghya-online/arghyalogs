import React from "react";
import { CopyButton } from "../components/CopyButton";
import HowGitTracksCode from "../assets/HowGitTracksCode.png";
import GitWorkflow from "../assets/gitworkflow.png";
import HowGitWorks from "../assets/HowGitWorks.png";

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
            <img src={HowGitWorks} alt="How Git Works" className="w-full my-8 border border-border" />

            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
                What Is Git
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                In today's modern software development environment, Git is a handy and
                powerful tool that is also open-source. It is a free and open source
                distributed version control system that basically tracks and records
                every single change in a code-space with different commands. Along with
                that it stores every single change that was done with the code. It
                stores in the computers local storage and can be accessed that later
                with no internet access(offline).
            </p>
            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
                Why Git Is Used
            </h2>
            <hr className="my-8 border-border" />

            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Git is used by developers worldwide to manage and maintain large
                codebases in a secure and reliable way. It allows programmers to work
                on the same codebase while keeping every change and update recorded in
                an organized manner.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Git is primarily operated through a <span className="font-semibold text-text-primary">
                    Command Line Interface (CLI)</span>. This means developers interact
                with Git by typing commands rather than using a graphical interface.
                On different operating systems, Git can be accessed through tools such
                as Git CLI, Command Prompt, PowerShell, or Terminal. Once Git is
                installed on a computer, it can be used from any of these command-line
                environments to manage projects.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Using simple CLI commands, Git enables developers to modify code and
                precisely track when a change was made, what was changed, and who made
                the change. This detailed history helps in reviewing progress,
                debugging issues, and restoring previous versions of the code when
                necessary.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Additionally, Git allows multiple developers to collaborate on a
                single codebase without disrupting the stable version of the project.
                Through branching and version control mechanisms, programmers can
                work independently on new features or fixes while ensuring that the
                main codebase remains stable, organized, and production ready.
            </p>

            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
                Git Basics and Core Terminologies
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Before using git, you should know or be familiar with a few important
                terms that are required to work with git. Like what is a repository,
                what is committing a code, what is branching etc.. Let’s explore those
                in a short and crisp way.
            </p>

            <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                Repository
            </h3>

            <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                Programmers have a funny habit of giving simple things complicated
                names, and <span className="font-semibold text-text-primary">repository</span> is one of
                them. A repository is simply a folder. It is the same folder you
                create on your computer before starting any project.
            </p>

            <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                Once Git is initialized inside this folder, it becomes a{" "}
                <span className="font-semibold text-text-primary">Git repository</span> (often called a
                repo). All your project files and code live inside this repository. A <span className="font-semibold text-text-primary">local repository</span> exists on
                your own computer and stores the complete project along with its
                change history. You have full control over where this repository is
                created. Inside every Git repository, Git creates a hidden{" "}
                <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">.git</code>{" "}
                directory. This directory contains all Git related data such as
                commits, branches, and configuration files, and should not be
                modified manually.
            </p>

            <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                Commit
            </h3>

            <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                Again, programmers love fancy words. A commit is simply a saved
                snapshot of your project at a particular point in time. It records
                the exact state of your files when you decide to save your progress.
            </p>

            <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                Every commit becomes part of the project’s history. Git maintains
                these snapshots in sequence, allowing you to move backward or forward
                through different versions of your code whenever needed.
                <br />
                Each commit also includes a commit message, which explains what was
                changed and why. Writing clear and meaningful commit messages is
                important because they help you and other developers understand the
                purpose of changes when reviewing the project history later.
            </p>
            <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                Branch
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-text-secondary">A branch is an independent version of the code used to work on changes safely. The main branch holds the stable code, while feature branches are used to develop new features or fixes.<br />
                Branching is important because it allows experimentation and parallel work without breaking the stable codebase.</p>

            <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
                Head
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                HEAD is a pointer that shows your current position in the Git repository. It usually points to the latest commit of the active branch.
                <span className="font-semibold text-text-primary"> It is like a cursor that points to the current commit.</span>
                <br />
                When you switch branches or move to a different commit, HEAD moves accordingly, always indicating what version of the code you are currently working on.</p>

            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">Git Working Areas</h2>
            <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">Working Directory</h3>
            <p className="mb-4 text-lg leading-relaxed text-text-secondary">The working directory is the folder where you keep your project files. It is where you make changes to your code, add new files, and remove files.</p>

            <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">Staging Area</h3>
            <p className="mb-4 text-lg leading-relaxed text-text-secondary">The staging area is a temporary storage area where you prepare your changes before committing them to the repository. It is where you select which changes to include in the next commit.</p>

            <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">Repository</h3>
            <p className="mb-8 text-lg leading-relaxed text-text-secondary">The repository is the permanent storage area where your project files are stored. It is where you keep your project files and code.</p>
            <img src={HowGitTracksCode} alt="How Git Tracks Code" className="w-full my-8 border border-border" />

            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">Common Git Commands</h2>

            <p className="mb-8 text-lg leading-relaxed text-text-secondary">Here is a set of commands that is required to initialise and work on gt repository.</p>
            <ol className="mb-8 space-y-4 list-decimal list-inside text-text-primary text-lg">
                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git init
                    </code>
                    : Creates a new Git repository in the current folder.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git status
                    </code>
                    : Shows the current state of files and the repository.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git add
                    </code>
                    : <span className="underline decoration-accent/50">Stages</span> specific files or all modified files for commit.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git commit
                    </code>
                    : Saves staged changes as a commit with a message.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git log
                    </code>
                    : Displays the commit history of the repository.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git branch
                    </code>
                    : Lists or creates branches in the repository.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git checkout
                    </code>
                    : Switches between branches or commits.
                </li>
            </ol>

            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
                More Useful Git Commands
            </h2>

            <ol className="mb-12 space-y-4 list-decimal list-inside text-text-primary text-lg">
                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git status
                    </code>
                    : Shows which files are modified, staged, or untracked.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git diff
                    </code>
                    : Shows the exact changes made in files before committing.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git show
                    </code>
                    : Displays details of a specific commit.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git reset
                    </code>
                    : Unstages changes or moves the repository back to a previous commit.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git restore
                    </code>
                    : Discards changes in working files.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git rm
                    </code>
                    : Removes files from the project and Git tracking.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git mv
                    </code>
                    : Renames or moves files while keeping Git history intact.
                </li>

                <li>
                    <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">
                        git stash
                    </code>
                    : Temporarily saves unfinished changes without committing them.
                </li>
            </ol>
            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
                Basic Git Workflow (From Scratch)
            </h2>

            <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                - Create a project folder and feel productive<br />
                - Run <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">git init</code> to officially invite Git into the project<br />
                - Write code and break things a little<br />
                - Stage the changes you actually want to save<br />
                - Commit those changes so Git remembers them forever<br />
                - Check the history to see how your code evolved<br />
                - Create branches when you want to experiment without fear
            </p>

            <img src={GitWorkflow} alt="Git Workflow" className="w-full my-8 border border-border" />

            <h3 className="mt-12 mb-4 text-2xl font-semibold text-text-primary">
                Simple Project Setup Example
            </h3>
            <p className="mb-4 text-lg text-text-secondary leading-relaxed">
                This is how you create a new folder for your project and move inside it.
            </p>
            <div className="my-6 bg-surface p-4 border border-border overflow-x-auto text-sm text-text-primary font-mono whitespace-pre">
                mkdir my-first-project
                cd my-first-project
            </div>

            <p className="mb-4 text-lg text-text-secondary leading-relaxed">
                This command initializes Git and turns the folder into a Git repository.
            </p>
            <div className="my-6 bg-surface p-4 border border-border overflow-x-auto text-sm text-text-primary font-mono whitespace-pre">
                git init
            </div>

            <p className="mb-8 text-lg text-text-secondary leading-relaxed">
                At this point, your project is ready to be tracked by Git. You can now start
                writing code inside this folder.
            </p>

            <hr className="my-10 border-border" />

            <h3 className="mt-12 mb-4 text-2xl font-semibold text-text-primary">
                Small and Frequent Commits Example
            </h3>
            <p className="mb-4 text-lg text-text-secondary leading-relaxed">
                After making changes to a file, you can check what Git has noticed.
            </p>
            <div className="my-6 bg-surface p-4 border border-border overflow-x-auto text-sm text-text-primary font-mono whitespace-pre">
                git status
            </div>

            <p className="mb-4 text-lg text-text-secondary leading-relaxed">
                This is how you tell Git which file you want to include in the next save point.
            </p>
            <div className="my-6 bg-surface p-4 border border-border overflow-x-auto text-sm text-text-primary font-mono whitespace-pre">
                git add index.html
            </div>

            <p className="mb-4 text-lg text-text-secondary leading-relaxed">
                This command saves the staged changes as a commit with a short message
                describing the update.
            </p>
            <div className="my-6 bg-surface p-4 border border-border overflow-x-auto text-sm text-text-primary font-mono whitespace-pre">
                git commit -m"Add basic HTML structure"
            </div>

            <p className="mb-8 text-lg text-text-secondary leading-relaxed">
                Making small commits like this helps keep your project history clean and easy
                to understand.
            </p>

            <hr className="my-10 border-border" />

            <h3 className="mt-12 mb-4 text-2xl font-semibold text-text-primary">
                Feature-Based Branching Example
            </h3>
            <p className="mb-4 text-lg text-text-secondary leading-relaxed">
                When you want to work on a new feature without touching the stable code, you
                create a new branch.
            </p>
            <div className="my-6 bg-surface p-4 border border-border overflow-x-auto text-sm text-text-primary font-mono whitespace-pre">
                git branch login-feature
            </div>

            <p className="mb-4 text-lg text-text-secondary leading-relaxed">
                This switches your working area to the new branch so changes stay isolated.
            </p>
            <div className="my-6 bg-surface p-4 border border-border overflow-x-auto text-sm text-text-primary font-mono whitespace-pre">
                git checkout login-feature
            </div>

            <p className="mb-4 text-lg text-text-secondary leading-relaxed">
                After finishing the feature, you commit the changes normally.
            </p>
            <div className="my-6 bg-surface p-4 border border-border overflow-x-auto text-sm text-text-primary font-mono whitespace-pre">
                git add .
                git commit -m"Add login form UI"
            </div>

            <p className="mb-4 text-lg text-text-secondary leading-relaxed">
                Once the feature is ready, you switch back to the main branch.
            </p>
            <div className="my-6 bg-surface p-4 border border-border overflow-x-auto text-sm text-text-primary font-mono whitespace-pre">
                git checkout main
            </div>

            <p className="mb-6 text-lg text-text-secondary leading-relaxed">
                This command merges the feature branch into the main branch, safely adding the
                new feature to the stable code.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-text-primary">Last Words</h2>
            <p className="mb-4 text-lg leading-relaxed text-text-secondary">
                Git looks scary at first because of the commands, the terminology, and the black screen judging you silently. But once you understand what’s actually happening, Git is just a very organized friend who never forgets anything.
                <br /><br />
                At its core, Git helps you save progress, track mistakes, and experiment without fear. Break the code, fix it, break it again, and Git will still have your back. That is the real superpower.
                <br /><br />
                You do not need to master every Git command on day one. If you understand repositories, commits, branches, and the basic workflow, you are already using Git the right way. Everything else comes naturally with time and practice.
            </p>
        </article>
    );
}
