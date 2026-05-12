import { useEffect, useState } from 'react';

const INTERVAL_MS = 7000;

/**
 * Stacks full-bleed images and cross-fades on an interval.
 * Slide dots sit above overlays (controlled z-index); place scrims/content even higher as needed.
 */
export function HeroRotatingBackdrop({ urls }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % urls.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [urls.length]);

  return (
    <>
      <div className="absolute inset-0" aria-hidden>
        {urls.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity] duration-[1100ms] ease-in-out ${
              i === active ? 'z-[1] opacity-100' : 'z-0 opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-[4] flex justify-center sm:bottom-10 lg:bottom-14">
        <div className="pointer-events-auto flex gap-2" role="tablist" aria-label="Hero background">
          {urls.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Background ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-white shadow-sm' : 'w-2 bg-white/35 hover:bg-white/55'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
