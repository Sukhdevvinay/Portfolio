import React, { useState } from 'react';
import { Menu, X, Cpu, User, Code, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'ARMOR', icon: <Cpu size={18} />, href: '#hero' },
    { name: 'PILOT', icon: <User size={18} />, href: '#about' },
    { name: 'SYSTEMS', icon: <Code size={18} />, href: '#skills' },
    { name: 'PROJECTS', icon: <Briefcase size={18} />, href: '#projects' },
    { name: 'CONTACT', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center bg-iron-panel backdrop-blur-md border border-iron-arc/30 p-4 rounded-lg shadow-[0_0_15px_rgba(0,243,255,0.1)]">

          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-hud text-xl font-bold tracking-wider text-white"
          >
            <div className="w-8 h-8 rounded-full border-2 border-iron-arc flex items-center justify-center animate-pulse-fast bg-iron-arc/20">
              <div className="w-3 h-3 bg-iron-arc rounded-full shadow-[0_0_10px_#00f3ff]" />
            </div>
            <span className="text-iron-arc drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">J.A.R.V.I.S</span>
            <span className="text-xs text-iron-gold/80 ml-1 mt-1">v2.0.4</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-2 text-sm font-hud text-gray-400 hover:text-iron-arc transition-colors duration-300"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-iron-gold">
                  {item.icon}
                </span>
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-iron-arc group-hover:w-full transition-all duration-300" />
                </span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-iron-red to-iron-redHover text-white font-hud text-sm tracking-wider border border-iron-gold/50 rounded clip-path-polygon hover:border-iron-gold transition-all duration-300"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
            >
              INITIATE
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-iron-arc hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-iron-dark/95 backdrop-blur-xl border-b border-iron-arc/30"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-sm font-hud text-gray-300 hover:text-iron-arc p-2 rounded hover:bg-white/5 transition-colors"
                >
                  <span className="text-iron-gold">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
