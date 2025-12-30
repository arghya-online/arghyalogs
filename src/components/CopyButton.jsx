import { useState } from "react";

export function CopyButton({ code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-3 right-3 text-xs px-3 py-1 rounded-md
                 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 transition"
        >
            {copied ? "Copied" : "Copy"}
        </button>
    );
}
