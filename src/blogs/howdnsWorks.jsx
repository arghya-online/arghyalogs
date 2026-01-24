import React from "react";
import { CopyButton } from "../components/CopyButton";

export const metadata = {
    title: "How DNS Resolution Works",
    slug: "dns-resolution",
    date: "2026-01-24",
    category: "Programming",
    readTime: "8 min",
    summary:
        "Before a website loads or an app connects, there is a small step that decides everything that follows. Your system needs to find the correct place to send the request. It is not trying to understand the page or fetch content yet. It is only trying to answer one simple question. Where should this name point to? If that answer is wrong or missing, nothing else even starts.",
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
            <img
                src="/blogs/dns-without-mystery/preview.png"
                alt="DNS Without the Mystery Preview"
                className="w-full h-auto rounded-lg mb-8"
            />
            <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-text-primary">DNS Without Guesswork</h2>

            <p className="mb-6 text-lg leading-relaxed text-text-secondary">Before a website loads or an app connects, there is a small step that decides everything that follows. Your system needs to find the correct place to send the request. It is not trying to understand the page or fetch content yet. It is only trying to answer one simple question. Where should this name point to? If that answer is wrong or missing, nothing else even starts.</p>

            <p className="mb-6 text-lg leading-relaxed text-text-secondary">DNS exists to handle this quietly. It takes the name you give and finds the location behind it. Once that mapping is clear, the rest of the internet stack can do its job. Until then, everything waits.</p>
            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                Why Websites Use Names Instead of IP Addresses
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Computers do not care about names. They never did. They work perfectly fine with numbers. IP addresses are precise and efficient, but they are terrible for humans. Nobody wants to remember a long number just to open a website.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                So names became the stable layer. IPs can change. Servers can move. Infrastructure can evolve. The name stays the same. DNS makes that possible by acting as the translator between human thinking and machine routing.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                When DNS fails, it feels like the internet is broken in a strange way. Pages do not load. Apps feel disconnected. But nothing else is actually wrong yet. The system just does not know where to go.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                What the dig Command Is Actually Used For
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Most tools try to make things easier by hiding details. dig does the opposite.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                dig shows you exactly what DNS is doing. It does not assume what you want. It does not clean things up. It just asks a DNS question and prints the answer.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                That makes it perfect for learning and debugging. When something does not work, dig removes guesswork. You stop assuming and start seeing.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                This is why dig is used when you want to understand the system, not just use it.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                DNS Is Not One Server, It Is a Chain
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                A common mistake is imagining DNS as one big lookup table. That idea breaks quickly once you think about scale.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                DNS is split into layers. Each layer knows very little, and that is intentional. No part of the system carries unnecessary responsibility. Every step narrows the search instead of answering everything at once.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                This design keeps DNS fast, resilient, and global. It also explains why resolution feels like a journey instead of a single lookup.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                The Role of Root Name Servers in Lookups
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                The root layer is often misunderstood. It does not store website addresses. It does not know where google or any other site lives.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                The root only knows where top level domains are handled.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                When you run <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">dig . NS</code>, you are asking who controls the entry points of DNS. The answer is a list of root name servers. They are widely distributed, heavily protected, and intentionally boring.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Their job is to point you in the right direction and nothing more.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                How Top Level Domains Like com Guide Traffic
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Once the root points you to the right place, the next stop is the top level domain layer.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Running <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">dig com NS</code> shows which servers manage the com space. These servers do not know about individual domains like google or example. They only know who is responsible for them.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                This layer exists to organize the internet into manageable sections. Without it, every lookup would collapse into chaos or centralization.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Instead, authority is cleanly divided.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                Who Controls a Domain’s Final DNS Answers
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Authoritative name servers are the final stop. They are responsible for a specific domain and they hold the actual records.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                When you run <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">dig google.com NS</code>, you are asking which servers speak with authority for google.com. These servers are trusted to give correct answers.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Once the resolver reaches this point, the name finally turns into an IP address. Until then, everything was just navigation.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                This separation between navigation and answers is one of the strongest ideas in DNS.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                Walking Through a Full DNS Lookup Step by Step
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Running <code className="mx-1 px-1.5 py-0.5 font-mono text-sm bg-surface border border-border text-accent">dig google.com</code> without specifying much triggers the full resolution process.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Behind the scenes, the resolver starts at the root, moves to the top level domain, and then reaches the authoritative servers. Each step answers just enough to move forward.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                The final output contains the IP address that your browser will later connect to. dig is not doing anything special here. It is just exposing the same process your browser depends on.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Once you see this flow clearly, DNS stops feeling abstract.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                What NS Records Tell the Internet
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                NS records are often misunderstood. They do not map names to IP addresses. They map names to authority.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                They tell the system who should be asked next. Every layer depends on NS records to delegate responsibility cleanly.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                This is why DNS can scale globally without a central controller. Authority is distributed, not duplicated.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Without NS records, the entire system would either be slow or fragile.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                How Recursive Resolvers Do the Work for You
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Most devices do not talk to root or authoritative servers directly. They rely on recursive resolvers.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                These resolvers do the entire lookup process on your behalf. They ask each layer, follow NS records, cache results, and return answers quickly.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                dig lets you observe this process without browser shortcuts or cached assumptions. It shows you the real machinery at work.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Once you understand recursive resolvers, many DNS behaviors suddenly make sense.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                Where DNS Fits Before Any Page Loads
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Before an HTTP request can happen, DNS must finish. Before a page loads, DNS must succeed. Before an API call is made, DNS must resolve the name.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                The IP address you see in dig output is the same address your browser uses. DNS decides where traffic goes before content even enters the picture.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                This is why DNS issues often look like application problems until you look deeper.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                Why DNS Is Designed This Way
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                DNS is not just a service. It is a lesson in system design.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                It is decentralized. It delegates instead of centralizing. It caches aggressively. It limits responsibility at every layer.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                dig turns these ideas into something visible. You can see how decisions made decades ago still keep the internet stable today.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-text-primary">
                When Understanding DNS Saves You Hours of Debugging
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                DNS works quietly, which is why it is easy to ignore. dig gives you a way to slow things down and actually see how names become connections.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Once this clicks, networking feels less mysterious and debugging feels more grounded.
            </p>
        </article>
    );
}
