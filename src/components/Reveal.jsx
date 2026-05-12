import { useEffect, useRef, useState } from 'react';

/** Scroll-reveal wrapper */
export function Reveal({ className = '', children, as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        setVisible(true);
        obs.disconnect();
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
