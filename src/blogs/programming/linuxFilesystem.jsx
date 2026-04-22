import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "Linux stopped feeling complex when I started reading it like a filesystem",
    slug: "linux-as-a-filesystem",
    date: "2026-04-22",
    category: "Programming",
    readTime: "8 min",
    summary:
        "A deep dive into how Linux exposes everything as a file, and how understanding the directory structure reveals the machine's true behavior.",
};

function CodeBlock({ code, language = "bash" }) {
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
                    I didn’t approach this as a command-learning task. That never really works. You end up memorizing flags without understanding the system.
                </p>
                <p>
                    So I did something simpler. I just started opening files.
                </p>
                <p>
                    Not random ones, but the ones Linux itself depends on. Things inside <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/etc</code>, <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/proc</code>, <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/var</code>, <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/dev</code>. The idea was straightforward -if the system is running, it must be reading something from somewhere.
                </p>
                <p>
                    And once you start looking, you realize Linux isn’t hiding anything. It’s all there. Just not explained.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
                The First Place: /etc
            </h3>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    At first, it looks messy. A lot of files, no obvious structure. But then you notice something -these files don’t just “configure” things. They define behavior.
                </p>
                <p>
                    Take <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/etc/hosts</code>.
                </p>

                <CodeBlock code={`127.0.0.1   localhost\n127.0.1.1   my-machine`} />

                <p>
                    If you add a domain here, your system will resolve it without ever touching DNS. That means something important: <strong>before Linux asks the network, it checks itself.</strong>
                </p>
                <p>
                    This isn’t just configuration. This is priority. Local decisions always come first.
                </p>
            </section>

            <section className="space-y-6 mt-12 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Then I looked at <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/etc/resolv.conf</code>, expecting something complicated. It wasn’t.
                </p>

                <CodeBlock code={`nameserver 8.8.8.8\nnameserver 1.1.1.1`} />

                <p>
                    That’s your DNS setup. When your system needs to resolve a domain, it reads this file and sends queries to these servers.
                </p>
                <p>
                    But here’s where it got interesting -I changed it, and later it reverted. That’s when I realized: this file might be controlled by something else (like systemd-resolved).
                </p>
                <p>
                    So even though Linux exposes everything as files, control isn’t always manual. There’s always a layer deciding what stays and what gets overwritten.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
                The Real-Time Layer: /proc
            </h3>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    The biggest shift came from <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/proc</code>. At first, it looks like a normal directory. But nothing inside it is actually stored on disk.
                </p>
                <p>
                    It’s generated by the kernel in real time.
                </p>

                <CodeBlock code={`cat /proc/meminfo`} />

                <p>
                    This doesn’t read a saved file. It asks the kernel: “what’s the memory state right now?” Same with processes.
                </p>

                <CodeBlock code={`ls /proc/1234/`} />

                <p>
                    Inside that directory, you’ll find:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>How the process started</li>
                    <li>What files it’s using</li>
                    <li>Its environment variables</li>
                </ul>
                <p>
                    It’s not debugging. It’s direct visibility. Processes are not hidden. They are exposed as structured data.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
                Hardware as Files: /dev
            </h3>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    This one feels strange until it clicks.
                </p>

                <CodeBlock code={`echo "hello" > /dev/null`} />

                <p>
                    That data just disappears.
                </p>

                <CodeBlock code={`cat /dev/random`} />

                <p>
                    You get random bytes. These aren’t normal files. They represent devices or behaviors. Even your disk is here: <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/dev/sda</code>.
                </p>
                <p>
                    So instead of special APIs for hardware, Linux just uses files. That consistency makes everything simpler once you get used to it.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
                The System Timeline: /var/log
            </h3>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Logs were something I used to ignore. But going through <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/var/log</code> changed that.
                </p>

                <CodeBlock code={`tail -f /var/log/auth.log`} />

                <p>
                    You can literally watch login attempts happen in real time. It’s not just errors. It’s a timeline. You can trace when a service started, who logged in, and what failed silently.
                </p>
                <p>
                    Logs stop being “debug output” and start becoming system history.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
                Identity: /etc/passwd
            </h3>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    User management felt surprisingly simple. Open <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/etc/passwd</code>:
                </p>

                <CodeBlock code={`arghya:x:1000:1000:Arghya:/home/arghya:/bin/bash`} />

                <p>
                    That’s a user. No abstraction. No hidden system. The OS reads this file and builds identity from it.
                </p>
                <p>
                    Passwords are stored separately in <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/etc/shadow</code>, but the structure is still file-based. It’s simple, but powerful. You can literally see how users exist in the system.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
                The Language of Trust: Permissions
            </h3>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Permissions started making more sense once I stopped treating them like flags.
                </p>

                <CodeBlock code={`-rwsr-xr-x 1 root root 54256 binary`} />

                <p>
                    That <code className="text-accent font-bold px-1">s</code> is not just a detail. It means the program runs with the owner’s privileges.
                </p>
                <p>
                    So permissions are not just about access. <strong>They define trust.</strong> Who can do what. And more importantly, who can act as someone else.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
                A Visible Network
            </h3>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Networking also became clearer once I stopped relying on tools.
                </p>

                <CodeBlock code={`cat /proc/net/route`} />

                <p>
                    This shows how packets are routed.
                </p>

                <CodeBlock code={`cat /proc/net/dev`} />

                <p>
                    This shows interface stats. Commands like <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">ip route</code> are just cleaner views of this data.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <h3 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
                Systemd: The Sequence of Boot
            </h3>
            <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p>
                    Inside <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">/etc/systemd/system/</code> you’ll find service files. Each one defines:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>What to run</li>
                    <li>When to run</li>
                    <li>Dependencies</li>
                </ul>

                <CodeBlock language="ini" code={`[Service]\nExecStart=/usr/bin/node app.js\nRestart=always`} />

                <p>
                    So booting is not some hidden process. It’s just systemd reading these files and executing them in order.
                </p>
            </section>

            <hr className="my-12 border-border" />

            <section className="mt-16 space-y-8 text-base sm:text-lg leading-relaxed text-text-secondary">
                <p className="text-xl text-text-primary font-medium italic border-l-4 border-accent pl-6 py-2 bg-surface/30">
                    After going through all this, the biggest change wasn’t learning new locations. It was changing how I see Linux.
                </p>
                <p>
                    Before, it felt like a system controlled by commands. Now it feels like a system defined by files.
                </p>
                <p>
                    Everything important -processes, users, networking, hardware -is visible somewhere in the filesystem. If something behaves a certain way, there is usually a file explaining it.
                </p>
                <p>
                    You just have to look. And once you start doing that, Linux stops feeling complex. It starts feeling <strong>readable</strong>.
                </p>
            </section>
        </article>
    );
}
