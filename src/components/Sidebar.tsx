"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 md:hidden bg-sidebar text-white p-3 rounded-lg backdrop-blur-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen w-64 bg-sidebar backdrop-blur-xl text-white z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0`}
            >
                <div className="flex flex-col h-full p-8">
                    {/* Profile Section */}
                    <div className="mb-12 text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold">
                            AB
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Abhijeet Bhale</h2>
                        <p className="text-gray-300 text-sm">Full Stack Developer</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1">
                        <ul className="space-y-4">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group"
                                        >
                                            <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                            <span className="font-medium">{link.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Footer */}
                    <div className="text-center text-sm text-gray-400">
                        <p>© 2025 Abhijeet Bhale</p>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
