import React from 'react';
import { CopyButton } from './CopyButton';

export function CodeBlock({ code, language = 'html' }) {
    const highlightCode = (code) => {
        if (!code) return '';

        // Basic HTML escaping
        let safeCode = code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        if (language === 'html') {
            // Syntax Highlighting - Matching the "Colorful" dark theme request
            // 1. Strings: Orange/Peach (e.g. "stylesheet", "app.js")
            safeCode = safeCode.replace(
                /("[^"]*")/g,
                '<span class="text-[#ce9178]">$1</span>'
            );

            // 2. Tags: Blue (e.g. <link, <script)
            safeCode = safeCode.replace(
                /(&lt;\/?[a-zA-Z0-9-]+)(\s|&gt;|&|\/)/g,
                '<span class="text-[#569cd6]">$1</span>$2'
            );

            // 3. Attributes: Light Blue (e.g. rel=, href=, src=)
            // We target the word before the equals
            // Use negative lookbehind (?<!<span) to avoid matching the 'class' attribute of our own generated spans!
            safeCode = safeCode.replace(
                /(?<!<span)\s([a-zA-Z0-9-]+)(=)/g,
                ' <span class="text-[#9cdcfe]">$1</span>$2'
            );

            // 4. Comments: Green/Grey
            safeCode = safeCode.replace(
                /(&lt;!--[\s\S]*?--&gt;)/g,
                '<span class="text-[#6a9955]">$1</span>'
            );

            // 5. DOCTYPE: Dark Blue/Pink
            safeCode = safeCode.replace(
                /(&lt;!DOCTYPE html&gt;)/gi,
                '<span class="text-[#569cd6]">$1</span>'
            );
        } else if (language === 'css') {
            // CSS Syntax Highlighting

            // 1. Strings: Orange
            safeCode = safeCode.replace(
                /("[^"]*")/g,
                '<span class="text-[#ce9178]">$1</span>'
            );

            // 2. Comments: Green
            safeCode = safeCode.replace(
                /(\/\*[\s\S]*?\*\/)/g,
                '<span class="text-[#6a9955]">$1</span>'
            );

            // 3. Properties: Light Blue (words before :)
            // (?<!<span) check to avoid replacing inside existing spans (like strings/comments if they happen to contain :)
            safeCode = safeCode.replace(
                /(?<!<span)(?<!-)\b([a-zA-Z0-9-]+)(?=:)/g,
                '<span class="text-[#9cdcfe]">$1</span>'
            );

            // 4. Selectors: Yellow (words before {)
            // This is a rough approximation. Matches words followed eventually by {
            // We use a simplified approach: match class/id/tag starts not inside {}? 
            // Simpler: match text at start of line or after } until {

            // Let's try explicit matches for common selector patterns found in the blog content
            // This is safer than wild regexes.
            // Matches: .class, #id, element
            safeCode = safeCode.replace(
                /(?<!<span)(?<!\s)([.#]?[a-zA-Z0-9_-]+)(?=\s*\{)/g,
                '<span class="text-[#d7ba7d]">$1</span>'
            );
            // Also handle grouped selectors like "h1, h2, p"
            // This is hard to regex perfectly. 

            // 5. Values: Orange (simplistic approach for common values)
            // Matches typical value words/numbers/colors not already spanned.
            safeCode = safeCode.replace(
                /(?<=:\s*)([^;}<]+)(?=;)/g,
                '<span class="text-[#ce9178]">$1</span>'
            );
        }

        return safeCode;
    };

    return (
        <div className="my-6 overflow-hidden rounded-xl border border-zinc-800 bg-[#0d1117]">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-[#0d1117] text-zinc-400">
                <span className="text-xs font-mono uppercase tracking-wider select-none">{language}</span>
                <CopyButton code={code} />
            </div>

            {/* Code Area */}
            <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed text-zinc-100 table">
                    <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
                </pre>
            </div>
        </div>
    );
}
