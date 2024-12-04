import React from 'react';
import { GlitchText } from '../components/GlitchText';
import { motion } from 'framer-motion';
import { GameCard } from '../components/GameCard';
import Video from '../../public/assets/BG_Vid.mp4'
import Trending from '../components/trending';
import Sport from '../components/sport';
import Gallery from '../components/category';

const games = [
  {
    title: "Temporal Odyssey",
    image: "https://img.itch.zone/aW1hZ2UvMzA5MDg4MS8xODQ4MzMyMi5qcGc=/original/p06GbS.jpg",
    playUrl: "https://temporal-odyssey-build.vercel.app/"
  },
  {
    title: "PacMan",
    image: "../../public/assets/image.png",
    playUrl: "https://pac-man-v8br.vercel.app/"
  },
  {
    title: "Guess or Die",
    image: "../../public/assets/GuessNDie.png",
    playUrl: "https://hangman-two-peach.vercel.app/"
  },
  {
    title: "Dash Car",
    image: "https://wallpapers.com/images/featured/racing-games-jdbf894smtxuoaoy.jpg",
    playUrl: "https://pac-man-v8br.vercel.app/"
  },
  {
    title: "NFS Racing",
    image: "https://img.freepik.com/free-vector/game-competition-continue-player-used-high-speed-car-win-racing-game_1150-47240.jpg",
    playUrl: "https://hangman-two-peach.vercel.app/"
  }
];

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src= {Video}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <GlitchText text="aoPlay" />
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-2xl text-white/90"
            >
              A Unified Gaming Experience
            </motion.h3>
          </motion.div>
        </div>
      </section>
      <Trending/>
      <Gallery/>
      <Sport/>

      <section className="bg-gray-900 py-20 px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};