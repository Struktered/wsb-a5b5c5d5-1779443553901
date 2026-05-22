import { useState, useEffect } from 'react';

export default function Navigation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('hero-end');
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="site-header"
      aria-label="Globale Navigation"
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-transform duration-300',
        'bg-fleet-bg border-b border-fleet-line',
        visible ? 'translate-y-0' : '-translate-y-full',
      ].join(' ')}
    >
      <nav
        aria-label="Hauptnavigation"
        className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between"
      >
        <span className="font-mono text-fleet-text text-sm tracking-tight select-none">
          FleetOS
        </span>
        <a
          href="#demo-buchung"
          className="px-4 py-1.5 text-sm font-mono font-medium bg-fleet-green text-fleet-bg rounded transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fleet-green"
        >
          Demo buchen
        </a>
      </nav>
    </header>
  );
}