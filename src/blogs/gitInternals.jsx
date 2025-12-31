import React from "react";
import gitInternals1 from "../assets/gitInternals1.png";
import gitInternals2 from "../assets/gitInternals2.png";

export const metadata = {
  title: "Understanding the .git Folder",
  slug: "understanding-git-folder",
  date: "2025-01-02",
  category: "Programming",
  readTime: "10 min",
  summary:
    "Deep dive into how Git works under the hood: objects, refs, and the plumbing commands.",
};

export default function BlogContent() {
  return (
    <article className="max-w-none mx-auto sm:px-6 text-text-primary">
      <img src={gitInternals1} alt="gitInternalHeader" />
      <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
        Understanding the .git Folder
      </h2>

      <section>
        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          What the .git Folder Is
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          The{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
            .git
          </code>{" "}
          folder is the most important part of a Git repository, yet it is the
          one developers rarely look into. Every commit you make, every branch
          you create, and every change Git remembers is stored inside this
          single hidden directory. While most people learn Git by memorising
          commands, understanding what the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
            .git
          </code>{" "}
          folder actually does gives you a much clearer mental model of how Git
          works under the hood. In this blog, we will break down what the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
            .git
          </code>{" "}
          folder is, why it exists, and how it quietly manages the entire
          history of your project behind the scenes.
        </p>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Why the .git Folder Exists
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          Git needs a dedicated place to store complete snapshots of a project
          rather than just individual file changes, and that place is the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
            .git
          </code>{" "}
          folder. Every commit you create, along with all branches, tags, and
          internal metadata, is saved inside this directory. Because Git’s
          entire understanding of a project lives here, removing the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
            .git
          </code>{" "}
          folder instantly removes Git itself, leaving behind nothing more than
          a normal folder of files with no history or version tracking.
        </p>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Mental Model
        </h3>
        <p className="mb-6 text-lg leading-relaxed text-text-secondary">
          Your project folder is simply the workspace where you write and edit
          files. It contains the code you can see and touch, but it does not
          remember anything about the past. The{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
            .git
          </code>{" "}
          folder acts as Git’s memory and internal database. It stores the
          entire history of the project, including snapshots of files, commits,
          branches, and all the relationships between them. When you run any Git
          command, Git looks into this folder to understand where your project
          is now and how it reached that state.
        </p>
      </section>

      <hr className="my-10 border-border" />

      <section>
        <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
          Git Objects: Blob, Tree, Commit
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-text-secondary">
          Git stores your entire project using three fundamental object types:{" "}
          <span className="font-semibold text-text-primary">blob</span>,{" "}
          <span className="font-semibold text-text-primary">tree</span>, and{" "}
          <span className="font-semibold text-text-primary">commit</span>. A
          blob holds the actual content of a file, a tree represents the
          directory structure that connects files and folders, and a commit ties
          everything together by pointing to a tree and linking it to the
          project’s history. These three objects are the building blocks behind
          every version you see in Git.
        </p>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Blob Object (File Content)
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          A <span className="font-semibold text-text-primary">blob</span> stores
          only the raw content of a file and nothing else. It does not know the
          file name, its path, or where it lives in the folder structure.
          Because blobs are created from file content, the same content will
          always generate the same blob, which allows Git to avoid storing
          duplicate data.
        </p>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Tree Object (Directory Structure)
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          A <span className="font-semibold text-text-primary">tree</span> object
          represents a folder in Git. It stores the names of files and
          directories and preserves the complete folder hierarchy of the
          project. Rather than containing file data itself, a tree points to
          blob objects for files and to other tree objects for subfolders,
          allowing Git to describe the exact structure of a snapshot.
        </p>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Commit Object (Snapshot)
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          A <span className="font-semibold text-text-primary">commit</span>{" "}
          represents a complete snapshot of the project at a specific point in
          time. It points to a single root tree that describes the entire
          directory structure of that snapshot. Along with this reference, the
          commit stores important metadata such as the author, commit message,
          timestamp, and a link to the parent commit, which is how Git builds
          history.
        </p>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Object Relationship
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          In Git, objects are connected in a simple and logical chain that
          allows Git to rebuild any version of a project at any time. A commit
          sits at the top and represents a snapshot in history. That commit
          points to a tree object, which describes the folder structure of the
          project at that moment. The tree then points to blob objects, which
          store the actual content of individual files. By following these
          references from commit to tree to blobs, Git can reconstruct the exact
          state of the project for any commit.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
          <li>
            A <span className="font-semibold text-text-primary">commit</span>{" "}
            points to a single tree that represents the full project snapshot
          </li>
          <li>
            A <span className="font-semibold text-text-primary">tree</span>{" "}
            points to blobs for files and to other trees for directories
          </li>
          <li>
            <span className="font-semibold text-text-primary">Blobs</span> store
            the raw content of files without names or paths
          </li>
        </ul>
      </section>

      <hr className="my-10 border-border" />

      <section>
        <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
          How Git Tracks Changes
        </h2>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Snapshot-Based System
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          Git works by storing full snapshots of your project instead of
          recording line-by-line changes. Each commit represents the complete
          state of the project at that moment in time. When files do not change
          between commits, Git does not store them again. Instead, it reuses the
          existing data from earlier snapshots, which is why commits remain
          lightweight even for large projects.
        </p>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Efficiency Behind the Scenes
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          Git is highly efficient because it avoids duplicating data. Rather
          than copying file contents again and again, it uses references to
          already existing objects. This means multiple commits can safely point
          to the same blobs when file content has not changed, saving both time
          and storage.
        </p>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Mental Model
        </h3>
        <p className="mb-6 text-lg leading-relaxed text-text-secondary">
          A helpful way to think about Git is as a photo album of your project’s
          life. Each commit is a photograph that captures exactly how the
          project looked at that moment. Git does not store instructions on how
          to edit one photo into another. It simply keeps a collection of
          snapshots that you can revisit anytime.
        </p>
      </section>

      <hr className="my-10 border-border" />

      <section>
        <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
          What Happens Internally During git add
        </h2>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Working Directory
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          The working directory is where your files exist as normal files on
          disk. Git sees them, but does not track any changes until you
          explicitly tell it to.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-4">
          <li>Files are normal disk files</li>
          <li>Git does nothing until instructed</li>
        </ul>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Staging Area (Index)
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          The staging area is where Git prepares the next snapshot. Running{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
            git add
          </code>{" "}
          takes the current file content, creates blobs if needed, and stores
          references to them in the index.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-4">
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
              git add
            </code>{" "}
            prepares content for commit
          </li>
          <li>The index stores references, not copies</li>
        </ul>

        <h3 className="mt-8 mb-4 text-2xl font-semibold text-text-primary">
          Key Insight
        </h3>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
            git add
          </code>{" "}
          does not create a commit. It only prepares what will go into the next
          snapshot.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-text-secondary mb-6">
          <li>Prepares the snapshot</li>
          <li>Commit happens later</li>
        </ul>
      </section>

      <hr className="my-10 border-border" />

      <section>
        <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
          What Happens Internally During git commit
        </h2>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          When you run{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
            git commit
          </code>
          , Git first looks at the staging area to see what content has been
          prepared. It reads the staged blobs and uses them to build tree
          objects that describe the exact folder and file structure of the
          project at that moment.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-text-secondary">
          Next, Git creates a commit object. This commit points to the root tree
          that represents the full snapshot of the project. Along with this
          reference, Git stores metadata such as the author name, commit
          message, timestamp, and a link to the parent commit.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-text-secondary">
          Finally, Git updates history by moving the current branch pointer to
          this new commit. The earlier commits are not modified or deleted. They
          remain exactly as they were, which is why Git history is stable and
          reliable.
        </p>
      </section>

      <section>
        <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
          Building the Right Mental Model of Git
        </h2>
      </section>

      <hr className="my-10 border-border" />
      <img src={gitInternals2} alt="gitInternals" />
      <hr className="my-10 border-border" />

      <h3 className="mt-12 mb-4 text-2xl font-semibold text-text-primary">
        Final Words
      </h3>
      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        Understanding the{" "}
        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
          .git
        </code>{" "}
        folder and Git’s internal objects changes the way you use Git. Instead
        of treating Git as a set of commands to memorise, you begin to see it as
        a system that stores snapshots, connects objects, and preserves history
        in a predictable way. With this mental model, commands like{" "}
        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
          git add
        </code>
        ,{" "}
        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm text-accent">
          git commit
        </code>
        , branching, and even debugging strange Git behavior start to make sense
        naturally. Once you know how Git thinks internally, using Git becomes
        less about fear and more about confidence and control.
      </p>
    </article>
  );
}
