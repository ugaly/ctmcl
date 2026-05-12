import { motion } from 'framer-motion';

const soft = [0.22, 1, 0.36, 1];

export function FadeIn({ children, className = '', delay = 0, y = 20, once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.55, delay, ease: soft }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({ children, className = '', stagger = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -6% 0px' }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: soft } },
      }}
    >
      {children}
    </motion.div>
  );
}
