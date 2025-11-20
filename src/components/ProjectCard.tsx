"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    demoLink?: string;
    repoLink?: string;
    index: number;
}

export default function ProjectCard({
    title,
    description,
    tags,
    image,
    demoLink,
    repoLink,
    index,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
        >
            {/* Image */}
            <div className="relative h-48 w-full bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

                {/* Tech Stack */}
                <div className="flex gap-2 mb-4 flex-wrap">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600 border border-blue-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    {demoLink && (
                        <Link
                            href={demoLink}
                            target="_blank"
                            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </Link>
                    )}
                    {repoLink && (
                        <Link
                            href={repoLink}
                            target="_blank"
                            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Github size={16} />
                            Code
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
