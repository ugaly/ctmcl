import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Years focused experience', target: 15 },
  { label: 'Advisory mandates', target: 120 },
  { label: 'Active relationships', target: 48 },
];

function easeOutCube(t) {
  return 1 - (1 - t) ** 3;
}

export function HomeStats() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [values, setValues] = useState(['0', '0', '0']);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        setRevealed(true);
        obs.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!revealed || ran.current) return;
    ran.current = true;

    const duration = 1400;
    const start = performance.now();
    let rafId;

    function tick(now) {
      const p = easeOutCube(Math.min(1, (now - start) / duration));
      setValues(
        stats.map((s) => `${Math.round(p * s.target)}${p >= 1 ? '+' : ''}`),
      );
      if (p < 1) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [revealed]);

  return (
    <div
      ref={ref}
      className={`reveal mx-auto mt-14 grid max-w-4xl gap-10 text-center sm:grid-cols-3 ${revealed ? 'reveal-visible' : ''}`}
    >
      {stats.map((s, idx) => (
        <div key={s.label}>
          <p className="text-4xl font-extrabold text-slate-900">{values[idx]}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
