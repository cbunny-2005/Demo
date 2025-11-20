"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-accent/20 rounded-full blur-[120px] -z-10 opacity-50" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-white/10 text-sm font-medium text-accent mb-6">
                        Available for new projects
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
                        Building digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                            experiences
                        </span>{" "}
                        that matter.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        I'm a creative developer focused on crafting accessible, pixel-perfect,
                        and performant web experiences that help brands grow.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#work"
                            className="px-8 py-4 bg-white text-background font-bold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2 group"
                        >
                            View Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-surface text-white font-medium rounded-full border border-white/10 hover:bg-white/5 transition-all"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
