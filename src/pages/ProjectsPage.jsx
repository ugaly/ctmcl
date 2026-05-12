import { MINERALS } from '../data/minerals.js';
import { Reveal } from '../components/Reveal.jsx';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const tiles = [
  {
    src: MINERALS.gold,
    kicker: 'Due diligence',
    title: 'Site verification & chain of custody',
    wide: false,
  },
  {
    src: MINERALS.tanzanite,
    kicker: 'Advisory',
    title: 'Regulatory mapping & licensing',
    wide: false,
  },
  {
    src: MINERALS.malachite,
    kicker: 'Trade support',
    title: 'Secure payment structuring',
    wide: false,
  },
  {
    src: MINERALS.africaInvest,
    kicker: 'Regional presence',
    title: 'Tanzania · DRC · affiliated partners',
    wide: true,
  },
  {
    src: MINERALS.collection,
    kicker: 'Risk',
    title: 'OECD-aligned assessments',
    wide: false,
  },
];

export function ProjectsPage() {
  return (
    <main className="bg-gradient-to-b from-emerald-50/40 via-slate-50 to-slate-50 pb-16 pt-28 sm:pb-24">
      <Reveal className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Portfolio</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">Field-to-market insight</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Representative mandates—site work, regulation, trade design, and diligence—visualized for context.
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: i * 0.06, duration: 0.5, ease }}
            className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-card ring-1 ring-brand/5 ${tile.wide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
          >
            <img src={tile.src} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-brand-dark/95 to-transparent ${tile.wide ? 'via-emerald-950/30' : 'via-emerald-950/40'} transition group-hover:from-brand-dark`}
            />
            <div className={`absolute bottom-0 left-0 right-0 text-left text-white ${tile.wide ? 'p-8' : 'p-6'}`}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200/85">{tile.kicker}</p>
              <p className={`font-bold ${tile.wide ? 'text-xl' : 'text-lg'}`}>{tile.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
