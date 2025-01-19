import { motion } from 'framer-motion';

const mysticalSymbols = [
  '☥', '⛧', '⛤', '⚝', '☫', '⚯', '☤', '⚕', '☽', '☾', 
  'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ',
  'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ'
];

const MysticalParticle = ({ delay = 0 }) => {
  const randomSymbol = mysticalSymbols[Math.floor(Math.random() * mysticalSymbols.length)];
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const duration = 8 + Math.random() * 4;
  const rotateX = Math.random() * 1080 - 540;
  const rotateY = Math.random() * 1080 - 540;
  const rotateZ = Math.random() * 1080 - 540;
  const direction = {
    x: (Math.random() - 0.5) * 300,
    y: (Math.random() - 0.5) * 300
  };
  const size = 0.8 + Math.random() * 0.8;
  
  const glowColors = [
    'purple-500',
    'indigo-500',
    'violet-500',
    'fuchsia-500'
  ];
  const glowColor = glowColors[Math.floor(Math.random() * glowColors.length)];

  return (
    <motion.div
      initial={{ 
        x: startX,
        y: startY,
        scale: 0,
        opacity: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        perspective: 1000
      }}
      animate={{ 
        x: [startX, startX + direction.x * 0.5, startX + direction.x],
        y: [startY, startY + direction.y * 0.7, startY + direction.y],
        scale: [0, size, size * 0.8, 0],
        opacity: [0, 0.8, 0.4, 0],
        rotateX: [0, rotateX * 0.5, rotateX],
        rotateY: [0, rotateY * 0.5, rotateY],
        rotateZ: [0, rotateZ * 0.5, rotateZ]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1]
      }}
      style={{
        position: 'fixed',
        transformStyle: 'preserve-3d'
      }}
      className={`text-2xl text-${glowColor} pointer-events-none
        flex items-center justify-center
        filter drop-shadow-lg
        before:content-[''] before:absolute before:inset-0
        before:bg-${glowColor}/20 before:blur-sm
        before:rounded-full before:scale-150`}
    >
      <motion.span
        animate={{
          opacity: [0.4, 1, 0.4],
          textShadow: [
            '0 0 10px currentColor',
            '0 0 20px currentColor',
            '0 0 10px currentColor'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {randomSymbol}
      </motion.span>
    </motion.div>
  );
};

const MysticalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <MysticalParticle key={i} delay={i * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default MysticalBackground;