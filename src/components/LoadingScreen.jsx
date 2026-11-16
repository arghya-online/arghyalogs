import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const wordmarkRef = useRef(null);
  const progressLineRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Check reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      sessionStorage.setItem("arghya_visited", "true");
      onComplete?.();
      return;
    }

    let isAssetReady = false;
    let minTimeElapsed = false;
    let isFinished = false;

    // Track actual asset readiness: preload the portrait photo
    const portraitImg = new Image();
    portraitImg.src = "/arghya-photo.png";

    const checkReady = () => {
      isAssetReady = true;
      attemptCompletion();
    };

    if (portraitImg.complete) {
      checkReady();
    } else {
      portraitImg.onload = checkReady;
      portraitImg.onerror = checkReady; // Graceful fallback
    }

    // Also check document readiness
    if (document.readyState === "complete") {
      // document already ready
    } else {
      window.addEventListener("load", checkReady, { once: true });
    }

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(containerRef.current, { autoAlpha: 1 });
      gsap.set(wordmarkRef.current, { autoAlpha: 0, y: 16 });
      gsap.set(subtitleRef.current, { autoAlpha: 0 });
      gsap.set(progressLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Quick entrance sequence
      const tl = gsap.timeline();

      tl.to(wordmarkRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
      })
        .to(
          subtitleRef.current,
          {
            autoAlpha: 1,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          progressLineRef.current,
          {
            scaleX: 0.65,
            duration: 0.5,
            ease: "power1.inOut",
          },
          "-=0.2"
        );

      // Elegant minimum duration (~600ms) to ensure smooth perception
      const minTimer = setTimeout(() => {
        minTimeElapsed = true;
        attemptCompletion();
      }, 550);

      // Max safety timeout (1.3s) so no visitor is ever held up
      const maxTimer = setTimeout(() => {
        isAssetReady = true;
        minTimeElapsed = true;
        attemptCompletion();
      }, 1300);

      return () => {
        clearTimeout(minTimer);
        clearTimeout(maxTimer);
      };
    }, containerRef);

    function attemptCompletion() {
      if (!isAssetReady || !minTimeElapsed || isFinished) return;
      isFinished = true;

      // Animate progress line to 100%
      gsap.to(progressLineRef.current, {
        scaleX: 1,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          // Seamless fade out into the hero
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.45,
            ease: "power2.inOut",
            onComplete: () => {
              sessionStorage.setItem("arghya_visited", "true");
              onComplete?.();
            },
          });
        },
      });
    }

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f3f0e8] select-none"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center text-center px-4 max-w-sm">
        {/* Name Wordmark */}
        <h1
          ref={wordmarkRef}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[#18181b] font-jakarta"
        >
          Arghya<span className="text-[#f59e0b]">.</span>
        </h1>

        {/* Minimal Monospaced Tag */}
        <p
          ref={subtitleRef}
          className="text-[11px] font-mono tracking-[0.25em] text-[#71717a] uppercase mt-2.5"
        >
          Portfolio &middot; Engineering
        </p>

        {/* Thin Animated Loading Line */}
        <div className="w-44 sm:w-52 h-[2px] bg-[#d4d4d8] mt-8 rounded-full overflow-hidden">
          <div
            ref={progressLineRef}
            className="h-full w-full bg-[#18181b]"
          />
        </div>
      </div>
    </div>
  );
}
