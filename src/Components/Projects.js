import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
    {
        title: "Secured Transactions",
        subtitle: "End to End Secure Payment App",
        description: "Production-grade digital payment system supporting atomic peer-to-peer transactions, ledger-based balance management, and failure-safe processing with idempotent APIs.",
        tech: ["MongoDB ACID", "React", "Node.js"],
        status: "DEPLOYED",
        links: { demo: "https://sukhbank.vercel.app/", code: "https://github.com/Sukhdevvinay/Digi-Payment" }
    },
    {
        title: "Real-Time Collaborative Editor",
        subtitle: "Text Editing Platform",
        description: "Distributed real-time document editor supporting concurrent multi-user edits, presence tracking, and low-latency synchronization using WebSockets.",
        tech: ["MERN Stack", "Socket.io", "CanvasAPI"],
        status: "DEPLOYED",
        links: { demo: "https://sukhdev-editor.vercel.app/", code: "https://github.com/Sukhdevvinay/SukhdevEditor" }
    },
    {
        title: "Cloud Storage Platform",
        subtitle: "Access Free Storage (up to 5GB)",
        description: "Real-time Storage Quota System utilizing MongoDB aggregation pipelines to calculate consumption and enforcing strict tier-based limits.",
        tech: ["MongoDB GridFS", "Node.js", "Stream API"],
        status: "DEPLOYED",
        links: { demo: "https://github.com/Sukhdevvinay/SukhData_Base", code: "https://github.com/Sukhdevvinay/SukhData_Base" }
    },
    {
        title: "Online Multiplayer Game",
        subtitle: "Gaming App",
        description: "Online multiplayer game supporting real-time gameplay, live state synchronization, and spectator mode through event-driven communication.",
        tech: ["EJS", "Socket.IO", "Node.js"],
        status: "TESTING",
        links: { demo: "https://github.com/Sukhdevvinay/Tic-tac-Multiplayer", code: "https://github.com/Sukhdevvinay/Tic-tac-Multiplayer" }
    }
];
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-end gap-4"
                >
                    <h2 className="text-3xl md:text-5xl font-hud font-bold text-white tracking-tighter">
                        MISSION <span className="text-iron-arc">LOGS</span>
                    </h2>
                    <span className="text-iron-gold font-body text-sm mb-2 animate-pulse">Scanning Archive...</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-iron-dark/80 border border-iron-gold/20 hover:border-iron-arc/80 transition-all duration-300 group rounded-lg overflow-hidden relative flex flex-col h-full"
                        >
                            {/* Header Status Bar */}
                            <div className="bg-iron-dark border-b border-gray-800 p-2 flex justify-between items-center text-xs font-hud">
                                <span className="text-gray-500">FILE_ID: {1024 + idx}</span>
                                <span className={project.status === 'DEPLOYED' ? 'text-green-500' : 'text-iron-gold'}>{project.status}</span>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <Folder size={64} className="text-iron-arc" />
                                </div>

                                <h3 className="text-xl font-hud font-bold text-iron-gold mb-1 group-hover:text-iron-arc transition-colors">{project.title}</h3>
                                <h4 className="text-sm text-gray-400 mb-4">{project.subtitle}</h4>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs bg-iron-arc/10 text-iron-arc px-2 py-1 rounded border border-iron-arc/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions Footer */}
                            <div className="p-4 bg-black/40 mt-auto flex justify-between items-center border-t border-gray-800">
                                <a href={project.links.code} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Github size={16} /> CODE
                                </a>
                                <a href={project.links.demo} className="flex items-center gap-2 text-sm text-iron-gold hover:text-white transition-colors">
                                    VIEW DEMO <ExternalLink size={16} />
                                </a>
                            </div>

                            {/* Hover Effect Filters */}
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,243,255,0.05)_50%,transparent_75%)] bg-[size:250%_250%] opacity-0 group-hover:opacity-100 animate-[shine_2s_infinite] pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;



