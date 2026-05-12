import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const year = new Date().getFullYear();

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

const social = [
  { href: 'https://linkedin.com/in/josephmwalwama', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://wa.me/255754226677', label: 'WhatsApp', Icon: MessageCircle },
  { href: 'mailto:info@ctmc.co.tz', label: 'Email', Icon: Mail },
];

function SocialRow({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {social.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/85 transition hover:border-white/30 hover:bg-white/10 sm:h-11 sm:w-11"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-brand-dark via-brand-dark to-[#1a2621] text-white">
      {/* Mobile: minimal */}
      <div className="px-4 py-10 sm:hidden">
        <div className="mx-auto max-w-md text-center">
          <Link to="/" aria-label="CTMC home" className="inline-flex flex-col items-center gap-3">
            <img src="/logo/logo.png" alt="" aria-hidden className="h-11 w-auto object-contain opacity-95" />
            <span>
              <span className="block text-base font-bold tracking-tight">CTMC</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                Congo Tanzania Mining Consulting
              </span>
            </span>
          </Link>

          <nav className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {links.map(({ to, label }) => (
              <Link key={to} to={to} className="text-white/80 transition hover:text-white">
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 space-y-1 text-xs text-white/55">
            <a href="mailto:info@ctmc.co.tz" className="block break-all hover:text-emerald-200">
              info@ctmc.co.tz
            </a>
            <a href="tel:+255754226677" className="hover:text-emerald-200">
              +255 754 226 677
            </a>
          </div>

          <SocialRow className="mt-7 justify-center" />

          <p className="mt-7 text-[11px] text-white/40">© {year} CTMC. All rights reserved.</p>
        </div>
      </div>

      {/* Tablet & desktop: full detail */}
      <div className="relative hidden sm:block">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(52,211,153,0.1),transparent_55%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-14 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <Link to="/" aria-label="CTMC home" className="group inline-flex items-start gap-4">
                <img
                  src="/logo/logo.png"
                  alt=""
                  aria-hidden
                  className="h-14 w-auto opacity-95 drop-shadow-lg transition-opacity group-hover:opacity-100 lg:h-[4.25rem]"
                />
                <span className="pt-1">
                  <span className="block text-lg font-bold tracking-tight">CTMC</span>
                  <span className="mt-1 block text-[11px] font-semibold uppercase leading-snug tracking-[0.2em] text-emerald-200/80">
                    Congo Tanzania Mining Consulting
                  </span>
                </span>
              </Link>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/72">
                Regulatory alignment, OECD-aware diligence, and trade clarity for operators across Tanzania, DRC, and the wider region.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand shadow-lg shadow-black/25 transition hover:bg-emerald-50"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:justify-end xl:gap-16">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-200/85">Explore</p>
                <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
                  {links.map(({ to, label }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="text-sm font-medium text-white/78 transition hover:text-white hover:underline hover:underline-offset-4 hover:decoration-emerald-300/70"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/15 p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-200/85">Dar office</p>
                <ul className="mt-5 space-y-4 text-sm text-white/78">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" aria-hidden />
                    <span>
                      <span className="font-semibold text-white/92">Dar es Salaam</span>
                      <span className="mt-1 block leading-relaxed">
                        Plot 123, Samora Avenue · P.O. Box 12345
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" aria-hidden />
                    <span className="space-y-1">
                      <a href="tel:+255222926530" className="block font-medium text-white transition hover:text-emerald-200">
                        +255 (0) 22 292 6530
                      </a>
                      <a href="tel:+255754226677" className="block hover:text-emerald-200">
                        +255 754 226 677
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" aria-hidden />
                    <a
                      href="mailto:info@ctmc.co.tz"
                      className="break-all font-medium text-white/88 transition hover:text-emerald-200"
                    >
                      info@ctmc.co.tz
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Globe className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" aria-hidden />
                    <a
                      href="https://www.ctmcl.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white/88 transition hover:text-emerald-200"
                    >
                      www.ctmcl.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <p className="text-center text-xs text-white/55 sm:text-left">
              © {year} CTMC — Congo Tanzania Mining Consulting. All rights reserved.
            </p>
            <SocialRow className="justify-center sm:justify-end" />
          </div>
        </div>
      </div>
    </footer>
  );
}
