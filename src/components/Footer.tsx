export default function Footer() {
  return (
    <footer aria-label="Seiten-Footer" className="border-t border-fleet-line">
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center gap-4">
        <span className="font-mono text-fleet-text/40 text-xs">FleetOS</span>
        <span aria-hidden="true" className="text-fleet-line text-xs">|</span>
        <a
          href="/impressum"
          className="font-mono text-fleet-text/40 text-xs hover:text-fleet-text/70 transition-colors"
        >
          Impressum
        </a>
        <span aria-hidden="true" className="text-fleet-line text-xs">|</span>
        <a
          href="/datenschutz"
          className="font-mono text-fleet-text/40 text-xs hover:text-fleet-text/70 transition-colors"
        >
          Datenschutz
        </a>
      </div>
    </footer>
  );
}