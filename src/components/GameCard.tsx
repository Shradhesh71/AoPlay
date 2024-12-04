import React from 'react';
import { motion } from 'framer-motion';

interface GameCardProps {
  title: string;
  image: string;
  playUrl: string;
}

export const GameCard: React.FC<GameCardProps> = ({ title, image, playUrl }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-4 w-full">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <a
              href={playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Play for Free!
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};