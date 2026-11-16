import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Download,
} from "lucide-react";
import resumePdf from "@/data/ArghyaMajumdarCV.pdf";

export default function Hero({ shouldAnimate = true }) {
  const heroRef = useRef(null);
  const portraitWrapperRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);
  const statsRef = useRef(null);
  const ctasRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    if (!shouldAnimate) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          portraitWrapperRef.current,
          badgeRef.current,
          titleRef.current,
          headlineRef.current,
          sublineRef.current,
          statsRef.current,
          ctasRef.current?.children || [],
          socialsRef.current?.children || [],
        ],
        { autoAlpha: 1, clearProps: "transform" }
      );
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial state
      gsap.set(portraitWrapperRef.current, {
        autoAlpha: 0,
        y: 24,
      });
      gsap.set(badgeRef.current, { autoAlpha: 0, y: 16 });
      gsap.set(titleRef.current, { autoAlpha: 0, y: 24 });
      gsap.set([headlineRef.current, sublineRef.current], {
        autoAlpha: 0,
        y: 18,
      });
      gsap.set(statsRef.current, { autoAlpha: 0, y: 16 });
      gsap.set(ctasRef.current?.children || [], { autoAlpha: 0, y: 14 });
      gsap.set(socialsRef.current?.children || [], {
        autoAlpha: 0,
        scale: 0.85,
      });

      // Staggered coordinated entrance
      tl.to(portraitWrapperRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
      })
        .to(
          badgeRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.6"
        )
        .to(
          titleRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          [headlineRef.current, sublineRef.current],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.35"
        )
        .to(
          statsRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .to(
          ctasRef.current?.children || [],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.05,
          },
          "-=0.25"
        )
        .to(
          socialsRef.current?.children || [],
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: "back.out(1.4)",
          },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, [shouldAnimate]);

  return (
    <section
      ref={heroRef}
      className="min-h-[calc(100svh-5rem)] md:min-h-[calc(100vh-7rem)] flex flex-col justify-center border-b border-border pb-12 sm:pb-16 lg:pb-20 pt-2 sm:pt-4"
      aria-label="Introduction"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* LEFT COLUMN: Circular Portrait */}
        <div className="lg:col-span-5 flex justify-start">
          <div
            ref={portraitWrapperRef}
            className="portrait-container relative group cursor-pointer"
          >
            {/* Circular frame with subtle editorial border */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 rounded-full overflow-hidden border-2 border-border/80 bg-surface/40 shadow-sm transition-colors duration-500 group-hover:border-amber-500/60">
              <img
                src="/arghya-photo.png"
                alt="Portrait of Arghya Majumdar"
                className="w-full h-full object-cover object-top select-none filter grayscale contrast-[1.05] transition-[filter] duration-700 ease-out [@media(hover:hover)]:group-hover:grayscale-0 [@media(hover:hover)]:group-hover:contrast-100"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Introduction, headline, stats, CTAs, socials */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-7">
          {/* Status badge */}
          <div ref={badgeRef}>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 border border-border bg-surface text-xs sm:text-sm font-mono text-text-secondary rounded-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block pulse-status" />
              Available for work · Kolkata, India
            </div>
          </div>

          {/* Name + role */}
          <div className="space-y-2.5 sm:space-y-3.5">
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none text-text-primary font-jakarta"
            >
              Arghya<span className="text-amber-500">.</span>
            </h1>
            <p
              ref={headlineRef}
              className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-text-secondary font-medium leading-snug tracking-tight"
            >
              Full-stack engineer based in Kolkata.
            </p>
            <p
              ref={sublineRef}
              className="text-xs sm:text-sm font-mono text-text-secondary border-l-2 border-amber-500/60 pl-3 py-0.5 leading-relaxed"
            >
              <span className="text-amber-500">//</span> full-stack engineer{" "}
              <span className="text-amber-500">.</span> 3D printing{" "}
              <span className="text-amber-500">.</span> Youtube{" "}
              <span className="text-amber-500">.</span> Robotics{" "}
            </p>
          </div>

          {/* Quick stats - responsive grid without overflow or cutoffs */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-1 sm:pt-2 max-w-lg"
          >
            {[
              { value: "10+", label: "Projects shipped" },
              { value: "2+", label: "Hackathons won" },
              { value: "8+", label: "Robots built" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-border pl-2.5 sm:pl-3.5 lg:pl-4"
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight font-jakarta block leading-none">
                  {stat.value}
                </span>
                <p className="text-[10px] sm:text-xs text-text-secondary mt-1 sm:mt-1.5 font-mono uppercase tracking-wider leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div ref={ctasRef} className="flex flex-wrap gap-2.5 sm:gap-3.5 pt-1.5 sm:pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium bg-surface text-text-primary transition-all hover:bg-border border border-border hover:border-amber-500 hover:scale-[1.02] active:scale-[0.98] rounded-sm"
            >
              Projects
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium bg-surface text-text-primary transition-all hover:bg-border border border-border hover:border-amber-500 hover:scale-[1.02] active:scale-[0.98] rounded-sm"
            >
              Portfolio
            </Link>
            <Link
              to="/blogs"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium bg-surface text-text-primary transition-all hover:bg-border border border-border hover:border-amber-500 hover:scale-[1.02] active:scale-[0.98] rounded-sm"
            >
              Blogs
            </Link>
            <a
              href={resumePdf}
              download="ArghyaMajumdarCV.pdf"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium bg-surface text-text-primary transition-all hover:bg-border border border-border hover:border-amber-500 hover:scale-[1.02] active:scale-[0.98] rounded-sm"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div
            ref={socialsRef}
            className="flex flex-wrap items-center gap-4 sm:gap-5 lg:gap-6 pt-1 sm:pt-2"
          >
            <a
              href="https://github.com/arghya-online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-[#fb923c] transition-all hover:scale-110 p-1 -m-1"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
            </a>
            <a
              href="https://linkedin.com/in/arghya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-[#fb923c] transition-all hover:scale-110 p-1 -m-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
            </a>
            <a
              href="https://x.com/arghyabuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-[#fb923c] transition-all hover:scale-110 p-1 -m-1"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
            </a>
            <a
              href="https://instagram.com/arghya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-[#fb923c] transition-all hover:scale-110 p-1 -m-1"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
            </a>
            <a
              href="https://www.youtube.com/@arghya_explains_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-[#ff0000] transition-all hover:scale-110 p-1 -m-1"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
            </a>
            <a
              href="mailto:arghyamajumdar.contact@gmail.com"
              className="text-text-secondary hover:text-[#fb923c] transition-all hover:scale-110 p-1 -m-1"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
