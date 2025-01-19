import React from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

interface Rune {
  id: number;
  symbol: string;
  x: number;
  rotation: number;
  duration: number;
}

const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -20,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 2 + 2
  }));
};

const runeSymbols = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ'];

const generateRunes = (count: number): Rune[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    symbol: runeSymbols[Math.floor(Math.random() * runeSymbols.length)],
    x: Math.random() * 100,
    rotation: Math.random() * 360,
    duration: Math.random() * 5 + 5
  }));
};

export const FallingStars: React.FC = () => {
  const [stars] = React.useState(() => generateStars(15));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-primary-end rounded-full"
          style={{
            left: `${star.x}%`,
            width: star.size,
            height: star.size * 3,
          }}
          initial={{ y: '-20%', opacity: 0 }}
          animate={{
            y: '120%',
            opacity: [0, 1, 1, 0],
            boxShadow: [
              '0 0 0 0 rgba(239, 17, 111, 0)',
              '0 0 4px 2px rgba(239, 17, 111, 0.6)',
              '0 0 8px 4px rgba(239, 17, 111, 0.4)',
              '0 0 0 0 rgba(239, 17, 111, 0)'
            ]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export const FloatingRunes: React.FC = () => {
  const [runes] = React.useState(() => generateRunes(10));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {runes.map((rune) => (
        <motion.div
          key={rune.id}
          className="absolute text-2xl text-primary-end opacity-30"
          style={{ left: `${rune.x}%` }}
          initial={{ y: '120%', rotate: rune.rotation }}
          animate={{
            y: '-20%',
            rotate: rune.rotation + 360,
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: rune.duration,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          {rune.symbol}
        </motion.div>
      ))}
    </div>
  );
};