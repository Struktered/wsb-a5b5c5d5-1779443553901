interface Feature {
  name: string;
  action: string;
}

const FEATURES: Feature[] = [
  {
    name: 'Tour-Uebersicht',
    action:
      'Alle aktiven Touren auf Statuszeilen reduziert. Fahrer, Route und Zeitstempel ohne Navigationsaufwand sichtbar.',
  },
  {
    name: 'Fahrer-Status',
    action:
      'Echtzeit-Meldungen direkt vom Fahrzeug: unterwegs, verspaetet oder abgeschlossen. Kein Anruf erforderlich.',
  },
  {
    name: 'Tank- und Wartungsreminder',
    action:
      'Inline-Badges in der Tourzeile bei Tankbedarf oder faelliger Inspektion. Kein Kanalwechsel.',
  },
  {
    name: 'Stoerdisposition',
    action:
      'Ausfall oder Verspaetung direkt in der Tourliste markieren und Tour neu zuweisen. Einschrittiger Prozess.',
  },
];

export default function Funktionsreferenz() {
  return (
    <section
      id="funktionsreferenz"
      aria-labelledby="funktionsreferenz-heading"
      className="py-20 border-t border-fleet-line"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="funktionsreferenz-heading"
          className="font-mono text-fleet-text text-lg mb-8"
        >
          Funktionsreferenz
        </h2>
        <table
          className="w-full text-sm"
          aria-label="Funktionen und Operator-Aktionen"
        >
          <thead>
            <tr className="border-b border-fleet-line">
              <th
                scope="col"
                className="text-left pb-3 pr-8 font-mono text-fleet-text/40 text-xs tracking-widest uppercase font-normal w-1/3"
              >
                Funktion
              </th>
              <th
                scope="col"
                className="text-left pb-3 font-mono text-fleet-text/40 text-xs tracking-widest uppercase font-normal"
              >
                Operator-Aktion
              </th>
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((f, i) => (
              <tr
                key={f.name}
                className={i < FEATURES.length - 1 ? 'border-b border-fleet-line' : ''}
              >
                <td className="py-4 pr-8 font-mono text-fleet-text text-sm align-top whitespace-nowrap">
                  {f.name}
                </td>
                <td className="py-4 text-fleet-text/70 text-sm leading-relaxed align-top">
                  {f.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}