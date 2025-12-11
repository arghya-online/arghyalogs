import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CodeBlock = ({ code, language = 'javascript' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="relative group rounded-md overflow-hidden my-4 border border-gray-700">
            <div className="absolute top-2 right-2 flex items-center justify-center">
                <button
                    onClick={handleCopy}
                    className="p-1.5 bg-gray-700/50 hover:bg-gray-700 text-gray-300 rounded-md transition-all duration-200 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                    title="Copy code"
                >
                    {copied ? <FiCheck className="w-4 h-4 text-green-400" /> : <FiCopy className="w-4 h-4" />}
                </button>
            </div>
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                }}
                showLineNumbers={true}
                wrapLines={true}
            >
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
