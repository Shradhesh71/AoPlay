import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  return (
    <motion.div
      className="relative text-7xl font-bold text-white mix-blend-difference"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="absolute top-0 left-0 text-red-500 animate-glitch-1">{text}</span>
      <span className="absolute top-0 left-0 text-blue-500 animate-glitch-2">{text}</span>
      <span className="relative">{text}</span>
    </motion.div>
  );
};