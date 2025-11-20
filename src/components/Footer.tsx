import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="#"
                        className="text-slate-400 hover:text-accent transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href="#"
                        className="text-slate-400 hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href="#"
                        className="text-slate-400 hover:text-accent transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
