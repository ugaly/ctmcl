import { motion } from 'framer-motion';
import { MINERALS } from '../data/minerals.js';
import { FadeIn } from './motion/FadeIn.jsx';

const blocks = [
  {
    src: MINERALS.gold,
    title: 'Gold ore',
    subtitle: 'Artisanal & commercial lanes',
    className:
      'md:col-span-2 md:row-span-2 min-h-[220px] md:min-h-[340px] lg:min-h-[420px] xl:min-h-[480px]',
  },
  {
    src: MINERALS.tanzanite,
    title: 'Tanzanite',
    subtitle: 'Tanzania origin',
    className: 'min-h-[160px] md:min-h-[200px] lg:min-h-[260px] xl:min-h-[300px]',
  },
  {
    src: MINERALS.malachite,
    title: 'Copper / malachite',
    subtitle: 'Traceability-aware',
    className: 'min-h-[160px] md:min-h-[200px] lg:min-h-[260px] xl:min-h-[300px]',
  },
  {
    src: MINERALS.gemstone,
    title: 'Gem materials',
    subtitle: 'High-value stones',
    className: 'md:col-span-2 min-h-[180px] md:min-h-[220px] lg:min-h-[280px] xl:min-h-[320px]',
  },
];

export function MineralShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-brand-dark via-brand to-brand-dark py-16 text-white sm:py-20 lg:py-24 xl:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-200/90">Mineral focus</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Specimens we align with</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            Premium regional reference imagery—gold, tanzanite, copper ores, and gem-grade material—mirroring the commodities we structure
            around.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5 lg:mt-14 lg:gap-6 xl:gap-8">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950/50 shadow-xl shadow-black/30 lg:rounded-3xl ${b.className}`}
            >
              <img
                src={b.src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 lg:p-6 xl:p-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200/90 lg:text-[11px]">{b.subtitle}</p>
                <p className="mt-1 text-lg font-bold tracking-tight md:text-xl lg:text-2xl xl:text-3xl">{b.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
