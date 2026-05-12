import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal.jsx';
import { MINERALS } from '../data/minerals.js';

const bullets = [
  { title: 'Diamonds', text: 'under the Kimberley Process, in provinces free from conflict and armed groups.' },
  { title: 'Cobalt', text: 'in accordance with the ICGLR (International Conference on Great Lakes Region) certification mechanism, in provinces free from conflict and armed groups.' },
  { title: 'Copper', text: 'from artisanal mining.' },
  { title: 'Gold', text: 'from artisanal production.' },
  { title: 'Cassiterite', text: 'from artisanal production, all observing the rules published by the OECD (Organization for Economic Cooperation and Development) and the ICGLR (International Conference on Great Lakes Region).' },
];

const gallery = [
  { src: MINERALS.gold, contain: false },
  { src: MINERALS.gemstone, contain: true },
  { src: MINERALS.tanzanite, contain: true },
  { src: MINERALS.malachite, contain: true },
  { src: MINERALS.collection, contain: false },
  { src: MINERALS.branding, contain: true },
];

export function ServicesPage() {
  return (
    <main className="pt-24">
      <header className="border-b border-slate-100 bg-white py-12 sm:py-14">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Scope</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Professional services</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Mining regulation, commercial agreements, diligence, and Congo sourcing—with documentation that matches brochure-grade clarity.
          </p>
        </Reveal>
      </header>

      <section className="relative overflow-hidden bg-topo-dark py-16 text-white sm:py-24">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-900 shadow-lg">
              What we do
            </span>
            <h2 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Services Offered</h2>
            <div className="divider-fine mx-0 my-12 max-w-lg opacity-40" />
            <div className="space-y-16">
              <div>
                <span className="text-sm font-black text-white/45">01</span>
                <h3 className="mt-3 max-w-prose text-lg font-extrabold uppercase tracking-[0.14em] underline decoration-1 underline-offset-[10px] decoration-white/40">
                  Regulatory compliance assistance
                </h3>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                  We help clients navigate the complex landscape of mining regulations ensuring they understand and comply with all relevant laws
                  and requirements.
                </p>
              </div>
              <div>
                <span className="text-sm font-black text-white/45">02</span>
                <h3 className="mt-3 max-w-prose text-lg font-extrabold uppercase tracking-[0.14em] underline decoration-1 underline-offset-[10px] decoration-white/40">
                  License and buying agreement assistance
                </h3>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                  We assist clients in obtaining the necessary permits and licenses for their mining operations, guiding them through the
                  application process, and providing expertise on compliance obligations.
                </p>
              </div>
              <div>
                <span className="text-sm font-black text-white/45">03</span>
                <h3 className="mt-3 max-w-prose text-lg font-extrabold uppercase tracking-[0.14em] underline decoration-1 underline-offset-[10px] decoration-white/40">
                  OECD due diligence and risk assessments
                </h3>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                  We conduct comprehensive assessments to identify potential legal and compliance risks associated with mining projects, helping clients
                  make informed decisions and mitigate potential liabilities.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-b border-slate-100 bg-slate-50 py-16 sm:py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(53,74,67,0.07),transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="inline-block rounded-br-3xl rounded-tl-3xl bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white">
              About the Company
            </span>
            <p className="mt-8 text-lg font-medium leading-relaxed text-slate-800">
              CTMC provides you with the opportunity to work with several credible mining operators in the Democratic Republic of Congo for purchases
              of:
            </p>
            <ul className="mt-8 space-y-6 text-slate-700">
              {bullets.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong className="text-slate-900">{b.title}</strong> — {b.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10 leading-relaxed text-slate-700">
              Congo Tanzania Mining provides you with a framework to facilitate payment methods, ensuring you are not victims of scams or
              misappropriation of state revenue, and offering practical methods for paying taxes to avoid the undervaluation or overvaluation of your
              mining products.
            </p>
          </Reveal>

          <Reveal className="mt-20 text-center">
            <h3 className="text-lg font-bold text-slate-900">Commodity focus — gallery</h3>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
            {gallery.map((item, i) => (
              <motion.div
                key={`${item.src}-${i}`}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Reveal
                  className={`leaf-frame aspect-square overflow-hidden border-4 border-white shadow-card ring-1 ring-brand/10 ${item.contain ? 'bg-slate-950' : ''}`}
                >
                  <img
                    src={item.src}
                    alt=""
                    className={`h-full w-full ${item.contain ? 'object-contain p-2 sm:p-3' : 'object-cover'}`}
                    loading="lazy"
                  />
                </Reveal>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-900 py-12 text-white">
        <Reveal className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Corporate contact (brochure)</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 gap-y-6 text-sm sm:text-base">
            <a
              href="https://www.ctmcl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-200 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              www.ctmcl.com
            </a>
            <a href="tel:+255689151065" className="inline-flex items-center gap-3 text-slate-200 transition hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <Phone className="h-4 w-4" />
              </span>
              +255 689 151 065
            </a>
            <a href="mailto:congotanzaniamcl@gmail.com" className="inline-flex items-center gap-3 text-slate-200 transition hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <Mail className="h-4 w-4" />
              </span>
              congotanzaniamcl@gmail.com
            </a>
          </div>
          <p className="mt-8 text-center text-sm text-slate-400">157 Haile Selassie, Masaki, Dar Es Salaam</p>
          <p className="mt-6 text-center text-xs text-slate-500">
            For Dar office routing and day-to-day coordination, use the{' '}
            <Link to="/contact" className="font-semibold text-emerald-200/90 underline decoration-white/20 hover:text-white">
              main contact page
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="bg-brand-muted py-12 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900/10 bg-white px-8 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:border-brand/30"
        >
          Discuss a mandate
        </Link>
      </section>
    </main>
  );
}
