import React from "react";
import { CopyButton } from "../components/CopyButton";

export const metadata = {
  title: "Why Version Control Exists",
  slug: "why-version-control-exists",
  date: "2026-01-13",
  category: "Programming",
  readTime: "6 min",
  summary:
    "A beginner-friendly explanation of why version control exists, using the pendrive analogy and the real problems developers faced before systems like Git.",
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
      <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
        Life Before Version Control
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        The first version control system was introduced in 1972, at Bell Labs by
        Marc Rochkind. It was known as SCCS (Source Code Control System). But
        before this, to work collaboratively on a large code base, engineers
        usually worked with simple project folders stored on their own local
        machines. All the code lived on individual computers, and everyone
        managed their own copy of the project. There was no automatic way to
        track changes, so if a file was edited or overwritten, the older version
        was simply lost forever. To stay safe, developers tried to create
        backups manually by copying folders or files, but this depended entirely
        on memory and discipline. Sometimes backups were outdated, sometimes
        important files were missing, and sometimes there was no backup at all.
        Overall, managing code felt more like guesswork than a reliable system,
        and losing progress was a very real and very common fear.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        Even though software was smaller back then, the problems were already
        huge. Once a project crossed a few thousand lines, it became difficult
        to understand what had changed and why. If a bug appeared, the only way
        to fix it was to search through folders and guess which version
        contained the clean code. Developers were not struggling with
        programming itself as much as they were struggling with code management.
        It was like building a house without any blueprint history. You could
        keep making changes, but the moment something collapsed, there was no
        clear way to trace the cause.
      </p>

      <hr className="my-10 border-border" />

      <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
        How a pen drive was used to share code
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        In the early days, sharing code often meant copying the project onto a
        pen drive and passing it around between developers. One person would
        work on the code, finish their changes, and then hand over the pendrive
        to the next person. While this sounds simple, it quickly became a
        problem because only one developer could safely work at a time. If two
        people made changes separately, merging those changes was painful and
        error-prone. Parallel work often led to conflicts, overwritten files, or
        missing updates, and teams spent more time resolving discrepancies than
        actually writing code.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        This pendrive workflow became normal because it was the only
        “structured” method available at that time. But it was slow and fragile.
        If someone forgot to copy the latest folder, or if they copied the wrong
        one, the whole team shifted onto an outdated version without even
        realizing it. Sometimes a developer would finish a long feature, then
        plug in the pendrive and overwrite the entire project folder because
        they assumed it was the newest copy. In seconds, weeks of another
        person’s work could disappear, just because the system had no idea how
        to merge changes intelligently.
      </p>

      <hr className="my-10 border-border" />

      <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
        Problems with pendrives
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        Pendrives introduced more problems than they solved. It was very easy to
        overwrite someone else’s changes without even realising it, especially
        when multiple people were working on the same files. There was always
        confusion about which version of the code was actually the latest,
        because different copies existed on different machines. Additionally,
        pendrives could become corrupted, lost, or damaged, which meant entire
        chunks of code could disappear instantly. A tiny piece of hardware often
        decided the fate of weeks of development, and that was a scary way to
        build software.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        The scariest part was how silent the failure was. A pendrive workflow
        could look fine for days, until someone suddenly noticed that a bug fix
        was missing, or a new feature never appeared in the final build. Then
        the team would begin a painful hunt through old folders, checking
        timestamps, opening files, comparing code line by line, and trying to
        recreate what was lost. In a proper system, this would be a simple
        rollback. But in a pendrive culture, rollback was basically impossible.
        Once overwritten, the older version was gone unless someone had an extra
        copy stored somewhere by luck.
      </p>

      <hr className="my-10 border-border" />

      <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
        The email attachment method
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        When teams did not have a pendrive, email was the next option. They
        would send code as zipped folders and attach them in long email threads.
        At first this felt advanced, because at least the code could be stored
        somewhere. But email created a new kind of confusion. Different inboxes
        had different versions, and multiple “latest” copies existed at the same
        time. If one person replied to the wrong thread, they could accidentally
        send an outdated folder that looked new. Teams quickly entered a phase
        where the email subject lines mattered more than the code itself.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        As projects grew, email became even worse. Large attachments took time
        to send, people forgot to include the newest folder, and sometimes
        partial code updates were sent instead of the full project. The biggest
        problem was still the same: merging. If two developers worked on
        different features, the team had to manually combine their work. That
        meant copy pasting entire sections of code into a single file, hoping
        the final app still runs. Even if the code compiled, the system could
        break quietly because the logic became inconsistent across versions.
      </p>

      <hr className="my-10 border-border" />

      <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
        The “final, final_v2, latest_final” folder culture
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        Because the risk was high, developers created their own safety
        mechanism. That mechanism was folder duplication. Every time something
        major changed, a new folder was created. It was not uncommon to see
        project directories filled with folders named like{" "}
        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
          final
        </code>
        ,{" "}
        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
          final_v2
        </code>
        ,{" "}
        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
          final_updated
        </code>
        ,{" "}
        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
          latest_final
        </code>
        , and then something even more dramatic like{" "}
        <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
          latest_final_real
        </code>
        . These names were not jokes. They were desperate attempts at safety in
        a world where code history did not exist.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        This folder culture created a weird kind of fear-driven workflow.
        Developers constantly worried that something might be lost, so they
        saved copies again and again. But ironically, the more copies they
        created, the harder it became to identify the real project version. The
        folder name became the truth, not the code. That meant development
        started depending on human memory instead of a reliable system. And
        human memory is not trustworthy, especially in long projects where
        multiple people touch the same files daily.
      </p>

      <hr className="my-10 border-border" />

      <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
        Multiple developers editing the same code without version control
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        The worst situation happened when two developers edited the same file.
        Without version control, there was no safe way to handle this. If one
        person changed the UI layout and another person changed the API
        integration inside that same file, both changes could not coexist unless
        manually combined. One file would win and the other would vanish. This
        is why teams tried to avoid parallel coding and often worked in turns.
        That slowed down progress heavily. Instead of building quickly with
        teamwork, developers were forced to behave like they were sharing one
        computer.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        This problem becomes even bigger in real projects where files are
        interconnected. A change in one file often affects another. Without
        history tracking, debugging becomes hard because the team cannot see
        when a change happened. They can only see what currently exists. If the
        current code is wrong, the only choice is guesswork. That is why
        development before version control felt like walking in fog. You could
        move forward, but you never knew what was behind you.
      </p>

      <hr className="my-10 border-border" />

      <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">
        Why version control became mandatory
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        Eventually, the industry realized that these manual workflows were not
        just inefficient. They were dangerous. As software moved from small
        programs to large systems, developers needed something more reliable
        than pendrives and folders. They needed a system that could store code
        history like a timeline, a system that could allow multiple developers
        to work at the same time, and a system that could merge changes instead
        of overwriting them. That demand is what made version control important.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        Version control solved the exact pains developers suffered for years. It
        introduced a proper history of code changes. It made it possible to go
        back in time if a bug was introduced. It made collaboration safe because
        everyone could work independently without destroying each other’s work.
        It also created accountability because changes were recorded with names
        and timestamps. Once teams experienced this, going back to pendrive
        culture became impossible. It would feel like leaving modern banking and
        returning to hiding cash under your mattress.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-text-secondary">
        In the end, version control exists because software development became
        serious. It became team-based, fast-moving, and high stakes. And in such
        a world, code cannot be treated like random files copied into random
        folders. It needs structure, history, and trust. That is exactly what
        version control provides.
      </p>
    </article>
  );
}
