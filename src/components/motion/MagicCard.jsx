import { motion } from 'framer-motion';

const soft = [0.22, 1, 0.36, 1];

/**
 * Magic UI–inspired: subtle animated border glow + lift on hover
 */
export function MagicCard({ children, className = '' }) {
  return (
    <motion.div
      className={`group relative ${className}`}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-emerald-300/50 via-brand/40 to-emerald-800/30 opacity-0 blur-sm transition duration-500 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/10"
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
        initial={false}
      >
        <motion.span
          className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
          animate={{ x: ['-20%', '220%'] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
        />
      </motion.span>
      <div className="relative h-full rounded-[inherit]">{children}</div>
    </motion.div>
  );
}

export function HeroEnter({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: soft }}
    >
      {children}
    </motion.div>
  );
}
