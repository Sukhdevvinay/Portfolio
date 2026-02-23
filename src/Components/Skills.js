import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Shield } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            name: "FRONTEND MODULES",
            icon: <Code className="text-iron-arc" />,
            skills: [
                { name: "React", level: 95 },
                { name: "Tailwind CSS / CSS", level: 90 },
                { name: "JavaScript (ES6+)", level: 90 },
                { name: "HTML5 / CSS3", level: 95 },
            ]
        },
        {
            name: "BACKEND SYSTEMS",
            icon: <Database className="text-iron-gold" />,
            skills: [
                { name: "Node.js", level: 92 },
                { name: "Express.js", level: 91 },
                { name: "PostgreSQL / SQL", level: 90 },
                { name: "MongoDB", level: 90 },
            ]
        },
        {
            name: "TOOLS & DEPLOYMENT",
            icon: <Terminal className="text-iron-red" />,
            skills: [
                { name: "Git / GitHub", level: 90 },
                { name: "Render", level: 92 },
                { name: "Vercel", level: 92 },
                { name: "Postman", level: 89 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 relative bg-iron-dark/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-hud font-bold text-white tracking-widest uppercase">
                        System <span className="text-iron-red">Capabilities</span>
                    </h2>
                    <div className="w-24 h-1 bg-iron-gold mx-auto mt-4 shadow-[0_0_10px_#d4af37]" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-iron-panel border border-iron-arc/20 p-6 rounded-lg relative overflow-hidden group hover:border-iron-arc/50 transition-colors duration-300"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
                                <div className="p-3 bg-iron-dark/80 rounded border border-gray-600">
                                    {category.icon}
                                </div>
                                <h3 className="font-hud text-xl text-iron-gold tracking-wider">{category.name}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="space-y-1">
                                        <div className="flex justify-between text-sm font-body text-gray-400">
                                            <span>{skill.name}</span>
                                            <span className="text-iron-arc">{skill.level}%</span>
                                        </div>
                                        {/* Progress Bar Container */}
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
                                            {/* Grid background for bar */}
                                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_2px,#000_2px)] bg-[size:4px_100%] opacity-20 z-10" />

                                            {/* Fill */}
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                                                className="h-full bg-gradient-to-r from-iron-arc to-blue-600 relative"
                                            >
                                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_5px_white]" />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 p-2 opacity-50">
                                <div className="w-2 h-2 bg-iron-red rounded-full animate-pulse" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

