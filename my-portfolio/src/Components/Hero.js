import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const fullText = "SYSTEM INITIALIZED... WELCOME BACK, SIR.";

    useEffect(() => {
        if (isTyping) {
            if (text.length < fullText.length) {
                setTimeout(() => {
                    setText(fullText.slice(0, text.length + 1));
                }, 50);
            } else {
                setIsTyping(false);
            }
        }
    }, [text, isTyping]);

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center relative">

            {/* Arc Reactor */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="w-48 h-48 md:w-64 md:h-64 relative mb-12"
            >
                <div className="absolute inset-0 rounded-full border-4 border-iron-arc/30 animate-spin-slow" />
                <div className="absolute inset-2 rounded-full border-2 border-iron-arc/50 animate-[spin_5s_linear_infinite_reverse]" />
                <div className="absolute inset-0 rounded-full shadow-[0_0_50px_#00f3ff] opacity-50 animate-pulse-fast" />

                {/* Core */}
                <div className="absolute inset-[30%] bg-iron-dark rounded-full border-4 border-iron-arc flex items-center justify-center shadow-[inset_0_0_20px_#00f3ff]">
                    <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]" />
                </div>

                {/* Triangle Element (Iron Man Mark VI style) */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full p-8 rotate-180 drop-shadow-[0_0_10px_#00f3ff]">
                    <polygon points="50,15 85,80 15,80" fill="none" stroke="#00f3ff" strokeWidth="2" className="opacity-80" />
                </svg>
            </motion.div>

            {/* Text Blocks */}
            <div className="text-center z-10 space-y-4">
                <motion.div
                    className="text-iron-arc font-hud text-sm md:text-base tracking-[0.2em]"
                >
                    {text} <span className="animate-blink">_</span>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold font-hud text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                >
                    Sukhdev <span className="text-[rgb(241_126_54)]">Vinay</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="text-xl md:text-2xl text-iron-gold font-body tracking-wide"
                >
                    <span className="font-bold underline decoration-iron-arc underline-offset-4">SOFTWARE DEVELOPER ENGINEER.</span>
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10"
            >
                <ChevronDown className="text-iron-arc w-8 h-8" />
            </motion.div>

            {/* Decorative HUD Lines */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-64 border-l-2 border-t-2 border-b-2 border-iron-arc/20 hidden md:block" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-64 border-r-2 border-t-2 border-b-2 border-iron-arc/20 hidden md:block" />

        </section>
    );
};

export default Hero;
