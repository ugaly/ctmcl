import { Globe, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { Reveal } from '../components/Reveal.jsx';

export function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`CTMC website inquiry — ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:info@ctmc.co.tz?subject=${subject}&body=${body}`;
  }

  return (
    <main className="bg-slate-50 pb-20 pt-28">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Contact</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Reach the Dar es Salaam office for mandates, coordination, and follow-up. We respond fastest on email and WhatsApp during business hours.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-7xl gap-12 px-4 lg:grid-cols-2 sm:px-6 lg:px-8">
        <Reveal className="space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Dar — Samora Avenue</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-slate-900">Address</p>
                  <p className="text-slate-600">
                    Plot 123, Samora Avenue
                    <br />
                    P.O. Box 12345, Dar es Salaam, Tanzania
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-slate-900">Phone</p>
                  <a href="tel:+255222926530" className="text-slate-600 hover:text-brand">
                    +255 (0) 22 292 6530
                  </a>{' '}
                  <span className="text-slate-400">· office</span>
                  <br />
                  <a href="tel:+255754226677" className="text-slate-600 hover:text-brand">
                    +255 754 226 677
                  </a>{' '}
                  <span className="text-slate-400">· mobile / WhatsApp</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-slate-900">Email</p>
                  <a href="mailto:info@ctmc.co.tz" className="text-slate-600 hover:text-brand">
                    info@ctmc.co.tz
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Globe className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-slate-900">Web</p>
                  <a href="https://www.ctmcl.com" className="text-slate-600 hover:text-brand" target="_blank" rel="noopener noreferrer">
                    www.ctmcl.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Masaki — Haile Selassie</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Additional corporate line as published in company materials.</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              <li>
                <a href="tel:+255689151065" className="hover:text-brand">
                  +255 689 151 065
                </a>
              </li>
              <li>
                <a href="mailto:congotanzaniamcl@gmail.com" className="hover:text-brand">
                  congotanzaniamcl@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.ctmcl.com" className="hover:text-brand" target="_blank" rel="noopener noreferrer">
                  www.ctmcl.com
                </a>
              </li>
              <li className="text-slate-600">157 Haile Selassie, Masaki, Dar Es Salaam</li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="space-y-6">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 min-h-[120px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                  placeholder="Your mandate or question"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Send message <Send className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">Opens your email client to send securely.</p>
          </form>

          <div className="aspect-[16/11] overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-card">
            <iframe
              title="Dar es Salaam"
              className="h-full w-full"
              src="https://www.openstreetmap.org/export/embed.html?bbox=39.265%2C-6.805%2C39.295%2C-6.775&amp;layer=mapnik&amp;marker=-6.79,39.28"
              loading="lazy"
            />
          </div>

          <div className="flex justify-center gap-4 pb-8">
            <a
              href="https://linkedin.com/in/josephmwalwama"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 p-2.5 text-slate-600 hover:border-brand hover:bg-brand hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/255754226677"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 p-2.5 text-slate-600 hover:border-brand hover:bg-brand hover:text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
