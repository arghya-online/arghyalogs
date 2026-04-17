import { motion } from "framer-motion";
import {
    Code2,
    Cpu,
    Globe,
    Terminal,
    Trophy,
    User,
    Download
} from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { cn } from "@/lib/utils";
import { skills } from "@/data/portfolio";

const achievements = [
    { title: "Hackathon Winner", description: "Won 1st place at the Annual State Robotics Hackathon by building an autonomous sorting arm in 24 hours." },
    { title: "Open Source Contributor", description: "Merged PRs into major React libraries improving component rendering performance." },
    { title: "Freelance Excellence", description: "Successfully shipped over 10 full-stack applications for international clients with 5-star ratings." }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Portfolio() {

    return (
        <div className="space-y-20 pb-20">
            <Helmet>
                <title>Portfolio - Arghya</title>
                <meta name="description" content="About me, my skills, and achievements." />
            </Helmet>

            {/* --- About Section --- */}
            <motion.section 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={staggerContainer} 
                className="pt-8"
            >
                <motion.h1 variants={fadeInUp} className="text-4xl font-bold tracking-tight mb-8 flex items-center gap-3">
                    <User className="w-8 h-8 text-accent" />
                    About Me
                </motion.h1>

                <motion.div variants={fadeInUp} className="space-y-2 text-lg text-text-secondary leading-relaxed max-w-3xl">
                    <p>I’m Arghya, an engineer from Kolkata. I build websites and applications, focusing on things that are actually useful and work well. I mostly work with React, Node.js, and whatever database fits the problem, and I try to keep everything simple and clean.</p>
                    <br />
                    <p>Outside of coding, I build robots and do some CAD modeling and 3D printing as a hobby. I also make YouTube videos, just sharing what I learn. Still figuring things out.</p>
                </motion.div>
            </motion.section>

            {/* --- Skills Section --- */}
            <motion.section 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={staggerContainer} 
                className="border-t border-border pt-12"
            >
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-10 flex items-center gap-3 text-text-primary">
                    <Terminal className="w-7 h-7 text-accent" />
                    Skills & Arsenal
                </motion.h2>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillGroup title="Core" icon={<Code2 className="w-5 h-5" />} items={skills.core} />
                    <SkillGroup title="Frameworks & Libraries" icon={<Globe className="w-5 h-5" />} items={skills.frameworks} />
                    <SkillGroup title="Databases & Backend" icon={<Cpu className="w-5 h-5" />} items={skills.databases} />
                    <SkillGroup title="Tools & Platforms" icon={<Cpu className="w-5 h-5" />} items={skills.tools} />
                </motion.div>
            </motion.section>

            {/* --- Achievements --- */}
            <motion.section 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={staggerContainer} 
                className="border-t border-border pt-10"
            >
                <motion.h2 variants={fadeInUp} className="text-xl font-bold mb-4 flex items-center gap-2 text-text-primary">
                    <Trophy className="w-5 h-5 text-accent" />
                    Achievements
                </motion.h2>
                <motion.ul variants={fadeInUp} className="space-y-2">
                    {achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                            <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 bg-border inline-block"></span>
                            <span><span className="font-medium text-text-primary">{ach.title}</span> — {ach.description}</span>
                        </li>
                    ))}
                </motion.ul>
            </motion.section>

            {/* --- Experience --- */}
            <motion.section 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={staggerContainer} 
                className="border-t border-border pt-10"
            >
                <motion.h2 variants={fadeInUp} className="text-xl font-bold mb-6 text-text-primary">Experience</motion.h2>
                <motion.div variants={fadeInUp} className="space-y-6">
                    {[
                        {
                            role: "Freelance Full-Stack Developer",
                            org: "Self-employed",
                            period: "2024 – Present",
                            points: [
                                "Built and shipped 5+ full-stack web applications for clients across different industries.",
                                "Worked with React, Node.js, MongoDB, Supabase, Firebase, and Vercel.",
                                "Handled everything from architechture to deployment and maintenance.",
                            ]
                        },
                        {
                            role: "Web Developer",
                            org: "IEI-IEM Student Chapter",
                            period: "2025-",
                            points: [
                                "Built the official website for the IEI-IEM Mechanical Engineering Students' Chapter.",
                                "Used React, Tailwind CSS, and Framer Motion for a responsive, animated experience.",
                            ]
                        }
                    ].map((exp, i) => (
                        <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1">
                            <div>
                                <h3 className="font-semibold text-text-primary">{exp.role}</h3>
                                <p className="text-sm text-text-secondary mb-2">{exp.org}</p>
                                <ul className="space-y-1">
                                    {exp.points.map((pt, j) => (
                                        <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 flex-shrink-0 bg-border inline-block"></span>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <span className="text-xs font-mono text-text-secondary sm:text-right">{exp.period}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.section>

            {/* --- Education --- */}
            <motion.section 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={staggerContainer} 
                className="border-t border-border pt-10"
            >
                <motion.h2 variants={fadeInUp} className="text-xl font-bold mb-6 text-text-primary">Education</motion.h2>
                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1">
                    <div>
                        <h3 className="font-semibold text-text-primary">B.Tech in Mechanical Engineering</h3>
                        <p className="text-sm text-text-secondary">Institute of Engineering & Management, Kolkata</p>
                    </div>
                    <span className="text-xs font-mono text-text-secondary sm:text-right">2024  – Present</span>
                </motion.div>
            </motion.section>

            {/* --- Resume Download --- */}
            <motion.section 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeInUp} 
                className="border-t border-border pt-8 flex items-center justify-between"
            >
                <p className="text-sm text-text-secondary">Want the full PDF version?</p>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium border border-border bg-surface hover:bg-border transition-colors"
                >
                    <Download className="w-4 h-4" />
                    Download Resume
                </a>
            </motion.section>

        </div>
    );
}

function SkillGroup({ title, icon, items }) {
    return (
        <div className="space-y-4 section-header">
            <h3 className="text-xl font-semibold text-text-primary flex items-center gap-2">
                {icon} {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                    <span
                        key={skill}
                        className={cn(
                            "px-3 py-1.5 text-sm  -md border transition-colors",
                            "bg-surface border-border font-medium"
                        )}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
