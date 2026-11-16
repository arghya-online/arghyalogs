import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { Download, ArrowUpRight } from "lucide-react";
import resumePdf from "@/data/ArghyaMajumdarCV.pdf";

const skillsData = [
  {
    category: "Core Languages",
    type: "flat",
    items: [
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "C++", highlight: true },
      { name: "HTML5", highlight: false },
    ],
  },
  {
    category: "Frontend Development",
    type: "flat",
    items: [
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Framer Motion", highlight: false },
      { name: "GSAP", highlight: false },
    ],
  },
  {
    category: "Backend & Databases",
    type: "subgroups",
    subgroups: [
      {
        title: "Backend & Runtime",
        items: [
          { name: "Node.js", highlight: true },
          { name: "Express.js", highlight: false },
        ],
      },
      {
        title: "Databases & ORM",
        items: [
          { name: "PostgreSQL", highlight: true },
          { name: "Supabase", highlight: true },
          { name: "MongoDB", highlight: false },
          { name: "NeonDB", highlight: false },
          { name: "Prisma ORM", highlight: false },
          { name: "Drizzle ORM", highlight: false },
          { name: "Firebase", highlight: false },
          { name: "Appwrite", highlight: false },
        ],
      },
      {
        title: "Authentication & Identity",
        items: [
          { name: "Better Auth", highlight: false },
          { name: "Clerk", highlight: true },
          { name: "Google OAuth", highlight: false },
        ],
      },
    ],
  },
  {
    category: "Development Tools & Platforms",
    type: "flat",
    items: [
      { name: "Git", highlight: false },
      { name: "GitHub", highlight: true },
      { name: "GitHub Actions (CI/CD)", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Vite", highlight: false },
      { name: "Vercel", highlight: false },
      { name: "Postman", highlight: false },
    ],
  },
  {
    category: "3D Printing & CAD",
    type: "flat",
    items: [
      { name: "SolidWorks", highlight: true },
      { name: "Bambu Studio / Bambu Slicer", highlight: true },
      { name: "CAD Modelling", highlight: false },
      { name: "FDM 3D Printing", highlight: false },
      { name: "SLA 3D Printing", highlight: false },
      { name: "3D Slicing", highlight: false },
    ],
  },
];

const experiences = [
  {
    title: "Freelance Full-Stack Developer",
    period: "2024 – Present",
    current: true,
    description:
      "Currently working independently on website and software development for clients. Responsible for building and delivering client requirements.",
  },
  {
    title: "Web Development Intern | Promethix3D",
    period: "2025 – Present",
    current: true,
    description:
      "Currently working on designing and developing the Promethix3D e-commerce website, Promethix3D.in.",
  },
  {
    title: "Lead Web Designer | IEM Mechanical Students' Chapter",
    period: "2024 – 2025",
    current: false,
    description:
      "Previously responsible for web design and development for the student chapter.",
  },
];

export default function Portfolio() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(".editorial-header > *", {
        autoAlpha: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      });

      // Skills rows entrance
      gsap.from(".skill-row", {
        autoAlpha: 0,
        y: 12,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
        delay: 0.15,
      });

      // Timeline entries entrance
      gsap.from(".timeline-entry", {
        autoAlpha: 0,
        x: -12,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.25,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="space-y-14 sm:space-y-20 pb-20 pt-2 max-w-4xl mx-auto"
    >
      <Helmet>
        <title>Portfolio &amp; Profile — Arghya Majumdar</title>
        <meta
          name="description"
          content="Skills and experience of Arghya Majumdar."
        />
      </Helmet>

      {/* --- HEADER --- */}
      <header className="editorial-header space-y-3.5 border-b border-border/80 pb-10 sm:pb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary font-jakarta leading-none">
          Arghya Majumdar<span className="text-amber-500">.</span>
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary font-medium max-w-2xl leading-snug">
          Full-stack developer based in Kolkata.
        </p>

        <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl pt-0.5">
          I build websites and software applications. Focused on building clean, practical solutions and delivering client requirements reliably.
        </p>
      </header>

      {/* --- 1. SKILLS SECTION --- */}
      <section className="space-y-6 border-b border-border/80 pb-14">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-amber-500 font-semibold">// 01</span>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Clean, well-spaced typographic groups */}
        <div className="divide-y divide-border/40">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="skill-row py-5 first:pt-1 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
            >
              {/* Category Heading (Smaller than skill names) */}
              <div className="sm:col-span-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-text-secondary font-medium">
                  {group.category}
                </h3>
              </div>

              {/* Technologies List */}
              <div className="sm:col-span-8">
                {group.type === "flat" ? (
                  <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-7 gap-y-2.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center text-sm sm:text-[15px] ${
                          skill.highlight
                            ? "text-text-primary font-medium"
                            : "text-text-secondary font-normal"
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 inline-block flex-shrink-0" />
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {group.subgroups.map((sub, sIdx) => (
                      <div
                        key={sub.title}
                        className={sIdx > 0 ? "pt-2 border-t border-border/20" : ""}
                      >
                        <span className="text-[11px] font-mono text-text-secondary/70 uppercase tracking-wide block mb-2">
                          {sub.title}
                        </span>
                        <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-7 gap-y-2.5">
                          {sub.items.map((skill) => (
                            <span
                              key={skill.name}
                              className={`inline-flex items-center text-sm sm:text-[15px] ${
                                skill.highlight
                                  ? "text-text-primary font-medium"
                                  : "text-text-secondary font-normal"
                              }`}
                            >
                              {skill.highlight && (
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 inline-block flex-shrink-0" />
                              )}
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 2. EXPERIENCE SECTION (CONTINUOUS TIMELINE) --- */}
      <section className="space-y-8 border-b border-border/80 pb-14">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-amber-500 font-semibold">// 02</span>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">
            Experience
          </h2>
        </div>

        {/* Continuous vertical timeline with thin orange line */}
        <div className="relative pl-8 sm:pl-10 space-y-10 sm:space-y-12">
          {/* Continuous thin orange track line */}
          <div
            className="absolute left-[7px] sm:left-[9px] top-2.5 bottom-2.5 w-[1.5px] bg-gradient-to-b from-amber-500 via-amber-500/50 to-amber-500/20"
            aria-hidden="true"
          />

          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-entry relative space-y-1.5">
              {/* Milestone Indicator Node */}
              <div className="absolute -left-[32px] sm:-left-[40px] top-1.5 flex items-center justify-center">
                {exp.current ? (
                  <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 ring-4 ring-background" />
                  </span>
                ) : (
                  <span className="h-2 w-2 rounded-full bg-background border-2 border-amber-500/70 ring-4 ring-background" />
                )}
              </div>

              {/* Title & Date */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base sm:text-lg font-bold text-text-primary font-jakarta">
                  {exp.title}
                </h3>
                <span className="text-xs font-mono text-text-secondary whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Exact Description Provided */}
              <p className="text-text-secondary leading-relaxed text-sm max-w-2xl pt-0.5">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. EDUCATION (MINIMAL) --- */}
      <section className="space-y-4 border-b border-border/80 pb-10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-amber-500 font-semibold">// 03</span>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">
            Education
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-1">
          <h3 className="text-base sm:text-lg font-bold text-text-primary font-jakarta">
            B.Tech in Mechanical Engineering
          </h3>
          <span className="text-xs font-mono text-text-secondary">
            2024 – Present
          </span>
        </div>
      </section>

      {/* --- 4. RESUME DOWNLOAD --- */}
      <footer className="space-y-6 pt-1 pb-10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-amber-500 font-semibold">// 04</span>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">
            Resume
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-1">
          <div className="space-y-0.5 max-w-md">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary font-jakarta">
              Curriculum Vitae
            </h3>
            <p className="text-sm text-text-secondary">
              PDF document &middot; Updated version
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resumePdf}
              download="ArghyaMajumdarCV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-text-primary text-background hover:bg-amber-500 hover:text-white transition-all shadow-sm rounded-sm hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border border-border bg-surface hover:bg-border text-text-primary transition-colors rounded-sm"
            >
              View Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
