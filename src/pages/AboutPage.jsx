import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Send } from 'lucide-react';
import { Reveal } from '../components/Reveal.jsx';

/** Pexels — mineral / specimen photography */
const ABOUT_PEXELS = {
  crystallineOrange: 'https://images.pexels.com/photos/10545702/pexels-photo-10545702.jpeg',
  goldSpecimen: 'https://images.pexels.com/photos/35497189/pexels-photo-35497189.jpeg',
  quartzMatrix: 'https://images.pexels.com/photos/9037438/pexels-photo-9037438.jpeg',
};

const WHY_HIGHLIGHT_IMAGES = [ABOUT_PEXELS.crystallineOrange, ABOUT_PEXELS.goldSpecimen, ABOUT_PEXELS.quartzMatrix];

export function AboutPage() {
  return (
    <main className="pt-24">
      <header className="border-b border-slate-100 bg-slate-50/80 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Company</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            About CTMC Consulting Office
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
            Legal and commercial advisory anchored in Tanzania and the DRC—with standards that map to OECD expectations and domestic mining
            codes alike.
          </p>
        </div>
      </header>

      <article className="relative overflow-hidden bg-white py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.055]">
          <img
            src={ABOUT_PEXELS.goldSpecimen}
            alt=""
            className="h-full w-full object-cover grayscale"
          />
        </div>
        <Reveal className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-bl-3xl rounded-tr-3xl bg-brand px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md">
            About the Company
          </span>
          <div className="mt-8 space-y-6 leading-relaxed text-slate-700">
            <p>
              CTMC Consulting Office’s mission is to provide innovative solutions and expert advice to mining companies or individuals,
              promoting sustainable practices and maximizing operational efficiency. Given that the mining sector is crucial for the economic
              stability of the country, we aim to achieve full transparency by legally facilitating trade between our countries and adhering to
              the relevant provisions of each country’s laws.
            </p>
            <p>
              CTMC provides expert advice and support to mining companies and investors in Tanzania and the DRC, ensuring their operations
              meet the highest standards of legal compliance and ethical conduct. Through strategic advice, innovative solutions, and an
              unwavering commitment to regulatory compliance, we enable our clients to navigate complex legal landscapes, mitigate risks, and
              achieve sustainable success in the mining industry.
            </p>
            <p>
              CTMC offers mining economic operators a superior framework to protect their investments in the EAC area in general and the
              Democratic Republic of Congo in particular. This protection is characterized by three points: legal protection, the credibility of
              product sellers, and compliance with traceability according to the mining code in the DRC, the OECD (Organization for Economic
              Cooperation and Development) guidelines, and the mining regulations of the United Republic of Tanzania.
            </p>
          </div>
        </Reveal>
      </article>

      <section className="border-y border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                <Send className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Our Approach</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                At CTMC, we prioritize client satisfaction and success by providing tailored legal solutions that address the unique challenges
                and opportunities our clients face in the dynamic mining industry in Congo and Tanzania. Our approach is characterized by in-depth
                research, strategic thinking, and proactive communication.
              </p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                <Globe className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Regional Presence</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                With agents and offices strategically located in key business centers in Congo, Dubai, and Tanzania, we are well-placed to provide
                on-the-ground legal support and assistance to clients across the region. Additionally, our extensive network of local partners and
                industry contacts enhances our ability to navigate the complexities of the mining sector.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-16 text-slate-100 sm:py-24 lg:py-28">
        {/* Solid dark base + layered scrim so copy never sits on a white wash */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <img
            src={ABOUT_PEXELS.quartzMatrix}
            alt=""
            className="h-full w-full object-cover opacity-35 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-slate-950/97 to-[#0f1714]" />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Why work with us</h2>
          <p className="mt-2 text-sm font-medium text-emerald-100/85">The main 3 reasons</p>
          <ol className="mt-12 space-y-10">
            <li className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand text-lg font-black text-white shadow-lg ring-1 ring-white/15">
                01
              </div>
              <div className="min-w-0">
                <h3 className="border-b border-emerald-400/40 pb-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white">
                  Specialized expertise
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-200">
                  Our team is comprised of legal experts with over 15 years of knowledge and experience in the mining industry.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand text-lg font-black text-white shadow-lg ring-1 ring-white/15">
                02
              </div>
              <div className="min-w-0">
                <h3 className="border-b border-emerald-400/40 pb-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white">
                  Tailored solutions
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-200">
                  We understand the unique legal challenges faced by mining companies and provide customized solutions to meet their specific
                  needs.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand text-lg font-black text-white shadow-lg ring-1 ring-white/15">
                03
              </div>
              <div className="min-w-0">
                <h3 className="border-b border-emerald-400/40 pb-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white">
                  Commitment to excellence
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-200">
                  We are committed to the highest standards of professionalism, integrity, and ethical conduct in all our engagements.
                </p>
              </div>
            </li>
          </ol>
          <Reveal className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3.5 text-xs font-black uppercase tracking-widest text-brand shadow-xl transition hover:bg-emerald-50"
            >
              Get Started
            </Link>
            <span className="text-sm font-semibold text-emerald-100/75">Let’s start your project!</span>
          </Reveal>
          <Reveal className="mt-14 grid grid-cols-3 gap-3 sm:gap-4">
            {WHY_HIGHLIGHT_IMAGES.map((src) => (
              <div key={src} className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-slate-900/50 ring-1 ring-black/20">
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-brand-muted py-14">
        <Reveal className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-600">Need the full service catalogue and commodity lanes?</p>
          <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline">
            View services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
