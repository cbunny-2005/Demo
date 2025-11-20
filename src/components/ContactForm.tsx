"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus("success");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="John Doe"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="john@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "submitting" ? (
                    "Sending..."
                ) : status === "success" ? (
                    "Message Sent!"
                ) : (
                    <>
                        Send Message
                        <Send size={18} />
                    </>
                )}
            </button>
        </form>
    );
}
