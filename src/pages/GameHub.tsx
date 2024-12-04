import React from 'react';
import { GameCard } from '../components/GameCard';

const games = [
  {
    title: "Cyber Nexus",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    price: "$59.99"
  },
  {
    title: "Stellar Odyssey",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
    price: "$49.99"
  },
  {
    title: "Neon Warriors",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    price: "$39.99"
  },
  {
    title: "Dragon's Legacy",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
    price: "$54.99"
  }
];

export const GameHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Featured Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </div>
  );
};