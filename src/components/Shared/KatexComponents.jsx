import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const BlockMath = ({ math }) => {
    const containerRef = useRef();

    useEffect(() => {
        if (containerRef.current && math) {
            try {
                katex.render(math, containerRef.current, {
                    throwOnError: false,
                    displayMode: true,
                });
            } catch (err) {
                containerRef.current.innerHTML = `<span style="color:red;">${err.message}</span>`;
            }
        }
    }, [math]);

    return <div ref={containerRef} className="my-4 text-center" />;
};

const InlineMath = ({ math }) => {
    const containerRef = useRef();

    useEffect(() => {
        if (containerRef.current && math) {
            try {
                katex.render(math, containerRef.current, {
                    throwOnError: false,
                    displayMode: false,
                });
            } catch (err) {
                containerRef.current.innerHTML = `<span style="color:red;">${err.message}</span>`;
            }
        }
    }, [math]);

    return <span ref={containerRef} />;
};

export { BlockMath, InlineMath };
