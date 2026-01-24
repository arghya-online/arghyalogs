import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onComplete }) {
    const containerRef = useRef(null);
    const textWrapperRef = useRef(null);
    const subTextRef = useRef(null);
    const progressRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: onComplete,
        });

        // Split text logic
        const chars = textWrapperRef.current.querySelectorAll(".char");

        // Initial setup
        tl.set(containerRef.current, { autoAlpha: 1 });
        tl.set(chars, { y: 100, opacity: 0 });
        tl.set(bgRef.current, { scale: 1.1 });

        // Sequence
        tl.to(bgRef.current, {
            scale: 1,
            duration: 4,
            ease: "power2.inOut",
        }, 0);

        tl.fromTo(subTextRef.current,
            { opacity: 0, letterSpacing: "1em", filter: "blur(10px)" },
            { opacity: 1, letterSpacing: "0.3em", filter: "blur(0px)", duration: 1.5, ease: "power3.out" },
            0.5
        )
            .to(chars, {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 1,
                ease: "back.out(1.7)",
            }, "-=1")
            .fromTo(progressRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 2.5, ease: "expo.inOut" },
                "-=0.5"
            );

        // Exit animation
        tl.to([textWrapperRef.current, subTextRef.current, progressRef.current], {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power3.in",
            stagger: 0.1
        })
            .to(containerRef.current, {
                yPercent: -100,
                duration: 1.2,
                ease: "power4.inOut"
            }, "-=0.2");

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    const title = "ARGHYALOGS";

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white invisible overflow-hidden"
        >
            {/* Background with slight movement */}
            <div ref={bgRef} className="absolute inset-0 bg-neutral-900 z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4">
                <p
                    ref={subTextRef}
                    className="mb-6 text-xs md:text-sm font-medium text-emerald-500 uppercase tracking-[0.3em]"
                >
                    Presenting
                </p>

                <h1
                    ref={textWrapperRef}
                    className="text-4xl md:text-6xl font-black tracking-tighter text-center font-sans overflow-hidden py-4"
                >
                    {title.split("").map((char, index) => (
                        <span key={index} className="char inline-block">
                            {char}
                        </span>
                    ))}
                </h1>

                <div className="w-64 h-1 bg-neutral-800 mt-12 rounded-full overflow-hidden">
                    <div
                        ref={progressRef}
                        className="h-full bg-emerald-500 w-full origin-left"
                    />
                </div>
            </div>
        </div>
    );
}
