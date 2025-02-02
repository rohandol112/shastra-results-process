// src/Components/layout/Navbar.js
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ChevronRight, Book } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#0A0A0A] border-b border-orange-600/20 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo Area */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <motion.div 
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg"
            />
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl font-bold"
            >
              शस्त्र
            </motion.span>
          </motion.div>

          {/* Center Navigation - Steps */}
          <div className="hidden md:flex items-center gap-4">
            <NavStep number="1" title="Upload" active={true} />
            <NavStep number="2" title="Process" />
            <NavStep number="3" title="Results" />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <motion.a
              href="/docs"
              className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-lg text-orange-400 hover:bg-orange-500/20 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Book className="w-4 h-4" />
              <span className="hidden md:inline">Docs</span>
            </motion.a>
            <motion.a
              href="https://github.com/yourusername/shastra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 rounded-lg text-blue-400 hover:bg-blue-900/30 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              <span className="hidden md:inline">GitHub</span>
              <ChevronRight className="w-3 h-3" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavStep = ({ number, title, active = false }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      active 
        ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white' 
        : 'text-gray-400 hover:text-white hover:bg-white/10'
    }`}
  >
    <span className="text-sm font-medium">{number}</span>
    <span className="text-sm font-medium">{title}</span>
  </motion.div>
);

export default Navbar;