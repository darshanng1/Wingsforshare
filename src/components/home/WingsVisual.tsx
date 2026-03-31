import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Globe, Smartphone, BarChart, Database, Zap, Rocket } from 'lucide-react';

/**
 * WingsVisual: A thematic visual component representing the "Wings" identity of the agency.
 * Features:
 * - A central rotating core with a Cpu icon.
 * - Animated "wings" on both sides that expand and contract.
 * - Orbiting technology icons (Globe, Smartphone, etc.) with parallax-like floating animations.
 * 
 * This component is used as a dynamic background element in the Hero section.
 */
export const WingsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* --- Central Core --- */}
    {/* This element rotates continuously and scales slightly to create a "pulsing" effect. */}
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute w-32 h-32 rounded-full border-2 border-emerald-500/20 flex items-center justify-center"
    >
      <div className="w-24 h-24 rounded-full border border-emerald-500/40 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <Cpu className="text-emerald-500" size={32} />
        </div>
      </div>
    </motion.div>

    {/* --- Wings - Left Side --- */}
    {/* These elements simulate a wing-like structure that subtly flaps using rotateY and x-axis movement. */}
    <motion.div
      animate={{ 
        rotateY: [0, -20, 0],
        x: [0, -10, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-1/2 mr-16 flex flex-col gap-4"
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          className="h-12 w-32 bg-gradient-to-r from-transparent to-emerald-500/20 rounded-l-full border-r-2 border-emerald-500/40"
          style={{ width: `${160 - i * 30}px`, opacity: 1 - i * 0.2 }}
        />
      ))}
    </motion.div>

    {/* --- Wings - Right Side --- */}
    {/* Mirroring the left side wings for visual balance. */}
    <motion.div
      animate={{ 
        rotateY: [0, 20, 0],
        x: [0, 10, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 ml-16 flex flex-col gap-4"
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          className="h-12 w-32 bg-gradient-to-l from-transparent to-emerald-500/20 rounded-r-full border-l-2 border-emerald-500/40"
          style={{ width: `${160 - i * 30}px`, opacity: 1 - i * 0.2 }}
        />
      ))}
    </motion.div>

    {/* --- Floating Tech Icons --- */}
    {/* These icons orbit around the central core. Each icon has its own floating animation. */}
    <div className="absolute inset-0">
      {[Globe, Smartphone, BarChart, Database, Zap, Rocket].map((Icon, i) => {
        // Calculate position based on a circle
        const angle = (i / 6) * Math.PI * 2;
        const radius = 180;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={i}
            animate={{ 
              y: [y, y - 20, y],
              x: [x, x + 10, x]
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center justify-center text-emerald-500"
            style={{ 
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
            }}
          >
            <Icon size={20} />
          </motion.div>
        );
      })}
    </div>
  </div>
);
