import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Gem, Globe, Layers, Map, Scale, Shield } from 'lucide-react';
import { HomeStats } from '../components/HomeStats.jsx';
import { MineralShowcase } from '../components/MineralShowcase.jsx';
import { HeroRotatingBackdrop } from '../components/HeroRotatingBackdrop.jsx';
import { MINERALS } from '../data/minerals.js';
import { HERO_ROTATION_URLS } from '../data/heroImages.js';
import { FadeIn, FadeInItem, FadeInStagger } from '../components/motion/FadeIn.jsx';
import { MagicCard } from '../components/motion/MagicCard.jsx';

const ease = [0.22, 1, 0.36, 1];

export function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/10">
        <HeroRotatingBackdrop urls={HERO_ROTATION_URLS} />
        <div className="pointer-events-none absolute inset-0 z-[2] hero-overlay" aria-hidden />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-brand-dark/90 via-brand/40 to-slate-950/50" aria-hidden />
        <div className="pointer-events-none absolute left-0 top-1/2 z-[3] hidden h-36 w-1 -translate-y-1/2 bg-brand lg:block" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-[7.25rem] sm:px-6 sm:pb-32 sm:pt-24 lg:px-8 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <FadeInStagger className="lg:col-span-7">
              <FadeInItem>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200/90">Congo · Tanzania · DRC</p>
              </FadeInItem>
              <FadeInItem>
                <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-[3.2rem] lg:leading-[1.08]">
                  Mining counsel and trade clarity for serious operators.
                </h1>
              </FadeInItem>
              <FadeInItem>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
                  From licensing and OECD-style diligence to credible counterparties—CTMC keeps mandates legible for investors, regulators, and
                  your treasury.
                </p>
              </FadeInItem>
              <FadeInItem>
                <div className="mt-10 flex flex-row flex-wrap gap-3">
                  <motion.div
                    className="min-w-0 flex-1 sm:flex-none"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <Link
                      to="/contact"
                      className="flex w-full min-w-[8.5rem] items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-brand shadow-xl shadow-black/25 transition hover:bg-emerald-50 sm:inline-flex sm:w-auto sm:px-6 sm:py-3.5"
                    >
                      Get started
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="min-w-0 flex-1 sm:flex-none"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <Link
                      to="/services"
                      className="flex w-full min-w-[8.5rem] items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/16 sm:inline-flex sm:w-auto sm:px-6 sm:py-3.5"
                    >
                      View services
                      <Layers className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                  </motion.div>
                </div>
              </FadeInItem>
              <FadeInItem>
                <div className="mt-10 flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/40 px-3.5 py-1.5 text-xs font-medium text-white/95 backdrop-blur-md">
                    <Shield className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
                    OECD-aware diligence
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/40 px-3.5 py-1.5 text-xs font-medium text-white/95 backdrop-blur-md">
                    <Map className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
                    Tanzania &amp; DRC focus
                  </span>
                </div>
              </FadeInItem>
            </FadeInStagger>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
            >
              <MagicCard className="rounded-2xl">
                <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-950/50 p-8 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-xl">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-white/[0.06] to-transparent" aria-hidden />
                  <div className="relative flex flex-col items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-10">
                    <img
                      src="/logo/logo.png"
                      alt="CTMC logo"
                      className="h-auto w-[13rem] max-w-[92%] object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.5)] sm:w-[16rem] lg:w-[18rem]"
                    />
                    <p className="mt-7 text-3xl font-extrabold tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)] sm:mt-8 sm:text-4xl">
                      CTMC
                    </p>
                    <p className="mt-4 max-w-[20rem] text-[11px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] sm:max-w-[22rem] sm:text-xs sm:tracking-[0.16em]">
                      Congo Tanzania Mining Consulting
                    </p>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-900/10 bg-gradient-to-b from-white via-emerald-50/25 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">How we operate</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Three pillars of the mandate</h2>
          </FadeIn>
          <FadeInStagger className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            <FadeInItem>
              <MagicCard className="h-full rounded-2xl">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white/90 p-7 shadow-card backdrop-blur-sm transition hover:border-brand/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/25">
                    <Scale className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">Compliance</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Mining codes, licensing, and cross-border frameworks—explained plainly.
                  </p>
                </div>
              </MagicCard>
            </FadeInItem>
            <FadeInItem>
              <MagicCard className="h-full rounded-2xl">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white/90 p-7 shadow-card backdrop-blur-sm transition hover:border-brand/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/25">
                    <Gem className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">Commodities</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Diamonds, cobalt, copper, gold, cassiterite—with traceability in scope.
                  </p>
                </div>
              </MagicCard>
            </FadeInItem>
            <FadeInItem>
              <MagicCard className="h-full rounded-2xl">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white/90 p-7 shadow-card backdrop-blur-sm transition hover:border-brand/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/25">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">Regional</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Anchored teams and partners across key African markets.
                  </p>
                </div>
              </MagicCard>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      <MineralShowcase />

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInStagger className="grid gap-10 lg:grid-cols-3 lg:gap-12" stagger={0.12}>
            <FadeInItem>
              <Link
                to="/about"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition hover:border-brand/25 hover:shadow-soft"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand">About</span>
                <h2 className="mt-3 text-xl font-bold text-slate-900">Who we are</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  Mission, regional presence, and why teams work with CTMC—from specialized expertise to traceability-aligned frameworks.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand transition-all group-hover:gap-3">
                  Continue <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeInItem>
            <FadeInItem>
              <Link
                to="/services"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition hover:border-brand/25 hover:shadow-soft"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand">Services</span>
                <h2 className="mt-3 text-xl font-bold text-slate-900">What we deliver</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  Regulatory assistance, permits and agreements, OECD-style diligence—and structured commodity sourcing guidance.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand transition-all group-hover:gap-3">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeInItem>
            <FadeInItem>
              <Link
                to="/contact"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition hover:border-brand/25 hover:shadow-soft"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand">Contact</span>
                <h2 className="mt-3 text-xl font-bold text-slate-900">Start a conversation</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  Dar es Salaam office lines, secure email, and WhatsApp routing for concise follow-up.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand transition-all group-hover:gap-3">
                  Reach us <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeInItem>
          </FadeInStagger>

          <div className="divider-fine mx-auto mt-16 max-w-4xl" />

          <HomeStats />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <FadeIn className="w-full max-w-xl text-center lg:max-w-xl lg:text-left">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Field-to-market insight</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              See how we frame site work, logistics, diligence, and regional coverage—consistent with institutional expectations.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                to="/projects"
                className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-brand bg-brand/5 px-5 py-3 text-sm font-bold text-brand transition hover:bg-brand hover:text-white sm:max-w-sm lg:inline-flex lg:w-auto lg:max-w-none lg:py-2.5"
              >
                Browse projects <ArrowUpRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </FadeIn>
          <div className="grid flex-1 grid-cols-2 gap-3 sm:max-w-lg">
            <motion.div
              className="aspect-[4/5] overflow-hidden rounded-2xl border border-emerald-900/10 shadow-card ring-1 ring-brand/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
            >
              <img src={MINERALS.africaInvest} alt="" className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
            <motion.div
              className="mt-8 aspect-[4/5] overflow-hidden rounded-2xl border border-emerald-900/10 bg-slate-950 shadow-card ring-1 ring-brand/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08, ease }}
            >
              <img src={MINERALS.branding} alt="" className="h-full w-full object-contain p-3" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-emerald-950/30 bg-gradient-to-br from-brand-dark via-brand to-emerald-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200/90">Perspective</p>
              <blockquote className="mt-3 max-w-2xl text-lg font-medium leading-relaxed text-white/95">
                “Investor-grade diligence that connected DRC realities with OECD expectations—without drowning us in jargon.”
              </blockquote>
              <p className="mt-4 text-sm text-emerald-100/70">Principal · Family office allocator</p>
            </div>
            <Link
              to="/testimonials"
              className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50"
            >
              More testimonials
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-brand/15 bg-gradient-to-b from-emerald-100/80 via-brand-muted to-emerald-50/60 py-14 sm:py-16">
        <FadeIn className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Ready for a sharper mandate?</h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600">
            Tell us where you operate, what commodity is in scope, and the compliance pressure you face—we’ll propose a pragmatic path.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 24 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
              >
                Contact the office
              </Link>
            </motion.div>
            <a
              href="https://wa.me/255754226677"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand/25 bg-white/80 px-7 py-3.5 text-sm font-bold text-slate-800 backdrop-blur-sm transition hover:border-brand/40"
            >
              WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
