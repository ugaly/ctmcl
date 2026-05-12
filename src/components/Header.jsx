import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export function Header({ isHome }) {
  const [navScrolled, setNavScrolled] = useState(() => !isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setNavScrolled(!isHome);
    if (!isHome) return undefined;

    const onScroll = () => setNavScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /** At top of home — transparent rail over rotating hero */
  const ethereal = isHome && !navScrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        ethereal ? 'border-b border-transparent bg-transparent py-5' : 'border-b border-white/15 bg-brand py-3 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
        <Link to="/" aria-label="CTMC home" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src="/logo/logo.png"
            alt=""
            aria-hidden
            className="h-9 w-auto shrink-0 transition-transform group-hover:scale-[1.02] sm:h-11"
          />
          <span className="min-w-0 leading-tight">
            <span className={`block truncate text-[13px] font-bold tracking-tight sm:text-sm ${ethereal ? 'text-white drop-shadow-md' : 'text-white'}`}>
              CTMC
            </span>
            <span
              className={`block truncate text-[9px] font-semibold uppercase tracking-[0.14em] sm:text-[10px] sm:tracking-widest ${
                ethereal ? 'text-white/85' : 'text-white/75'
              }`}
            >
              Mining Consulting
            </span>
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-1 text-sm font-semibold lg:flex [&_a]:no-underline ${ethereal ? 'text-white' : 'text-white'}`}
        >
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [
                  'rounded-t-md border-b-2 px-3 py-2 transition-[color,border-color] duration-200',
                  isActive
                    ? 'border-white font-bold !text-white'
                    : 'border-transparent !text-white/85 hover:border-white/45 hover:!text-white',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex ${
              ethereal ? 'bg-brand text-white hover:bg-brand-dark' : 'bg-white text-brand hover:bg-brand-muted'
            }`}
          >
            Get Started
          </NavLink>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className={`rounded-xl border p-2.5 transition lg:hidden ${
              ethereal ? 'border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20' : 'border-white/35 bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          mobileOpen ? 'max-h-[36rem] border-t opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
        } ${
          ethereal ? 'border-white/15 bg-slate-950/92 text-white' : 'border-white/15 bg-brand-dark text-white'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 text-sm font-semibold text-white [&_a]:no-underline">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              end={to === '/'}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-3 transition-colors hover:bg-white/15',
                  isActive ? 'bg-white/20 font-bold !text-white ring-1 ring-white/30' : '!text-white/95 hover:!text-white',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 rounded-full bg-white py-3 text-center text-sm font-bold text-brand shadow-md"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </header>
  );
}
