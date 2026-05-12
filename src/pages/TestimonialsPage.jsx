import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Reveal } from '../components/Reveal.jsx';

const items = [
  {
    quote:
      '“CTMC shortened our licensing cycle and gave our board a clear compliance narrative for cross-border offtake.”',
    name: 'James R.',
    role: 'Trading Director',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
  },
  {
    quote: '“The diligence pack was investor-grade—traceability, counterparties, and tax exposure were all addressed upfront.”',
    name: 'Elena M.',
    role: 'Principal, Family Office',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
  },
  {
    quote: '“We finally had a single team that spoke both DRC realities and international compliance expectations.”',
    name: 'David K.',
    role: 'COO, Mid-tier Miner',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  },
];

export function TestimonialsPage() {
  return (
    <main className="pb-20 pt-28">
      <Reveal className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Clients</p>
        <h1 className="mt-3 text-4xl font-extrabold text-slate-900">Trusted by operators &amp; investors</h1>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {items.map((t) => (
          <Reveal key={t.name} className="rounded-2xl border border-slate-200 bg-slate-50/90 p-8 shadow-soft transition hover:shadow-md">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 leading-relaxed text-slate-700">{t.quote}</p>
            <div className="mt-6 flex items-center gap-3">
              <img src={t.img} alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-slate-200" />
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-2xl px-4 text-center">
        <Link to="/contact" className="inline-flex rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
          Become a reference client — talk to us
        </Link>
      </div>
    </main>
  );
}
