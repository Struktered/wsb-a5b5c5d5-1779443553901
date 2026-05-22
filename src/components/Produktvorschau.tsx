import { useState } from 'react';

type TourStatus = 'on-route' | 'delayed' | 'completed';

interface Tour {
  id: string;
  driver: string;
  route: string;
  departure: string;
  eta: string;
  status: TourStatus;
  reminder: string | null;
}

const TOURS: Tour[] = [
  { id: 'T-0041', driver: 'Maier, K.',    route: 'Hamburg - Bremen',    departure: '06:15', eta: '08:40', status: 'on-route',  reminder: null      },
  { id: 'T-0042', driver: 'Schulz, P.',   route: 'Hamburg - Luebeck',   departure: '06:30', eta: '09:15', status: 'delayed',   reminder: 'Tank'    },
  { id: 'T-0043', driver: 'Weber, J.',    route: 'Hamburg - Kiel',      departure: '05:45', eta: '08:00', status: 'completed', reminder: null      },
  { id: 'T-0044', driver: 'Fischer, M.',  route: 'Hamburg - Flensburg', departure: '07:00', eta: '10:20', status: 'on-route',  reminder: 'Wartung' },
  { id: 'T-0045', driver: 'Becker, T.',   route: 'Hamburg - Rostock',   departure: '07:30', eta: '11:05', status: 'on-route',  reminder: null      },
  { id: 'T-0046', driver: 'Hoffmann, S.', route: 'Hamburg - Hannover',  departure: '08:00', eta: '10:45', status: 'delayed',   reminder: null      },
];

const STATUS_LABEL: Record<TourStatus, string> = {
  'on-route':  'Unterwegs',
  'delayed':   'Verspaetet',
  'completed': 'Abgeschlossen',
};

const STATUS_TEXT: Record<TourStatus, string> = {
  'on-route':  'text-fleet-green',
  'delayed':   'text-fleet-amber',
  'completed': 'text-fleet-text/50',
};

const STATUS_DOT: Record<TourStatus, string> = {
  'on-route':  'bg-fleet-green',
  'delayed':   'bg-fleet-amber',
  'completed': 'bg-fleet-text/30',
};

export default function Produktvorschau() {
  const [selectedId, setSelectedId] = useState<string>('T-0042');
  const selected = TOURS.find((t) => t.id === selectedId) ?? TOURS[0];

  return (
    <section
      id="produktvorschau"
      aria-labelledby="produktvorschau-heading"
      className="pt-20 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-fleet-text/40 text-xs mb-1 tracking-widest uppercase">
          Funktion: Tour-Uebersicht
        </p>
        <h1
          id="produktvorschau-heading"
          className="font-mono text-fleet-text text-2xl mb-8 leading-tight"
        >
          Alle Touren. Echtzeit.
        </h1>

        <div className="flex border border-fleet-line rounded overflow-hidden">
          {/* Tour list table */}
          <div className="flex-1 overflow-x-auto">
            <table
              className="w-full text-sm border-collapse"
              role="grid"
              aria-label="Tour-Liste"
            >
              <thead>
                <tr className="border-b border-fleet-line">
                  <th scope="col" className="text-left px-4 py-3 font-mono text-fleet-text/40 text-xs tracking-widest uppercase font-normal">
                    Tour
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-mono text-fleet-text/40 text-xs tracking-widest uppercase font-normal">
                    Fahrer
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-mono text-fleet-text/40 text-xs tracking-widest uppercase font-normal hidden md:table-cell">
                    Route
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-mono text-fleet-text/40 text-xs tracking-widest uppercase font-normal hidden lg:table-cell">
                    Abfahrt
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-mono text-fleet-text/40 text-xs tracking-widest uppercase font-normal hidden lg:table-cell">
                    ETA
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-mono text-fleet-text/40 text-xs tracking-widest uppercase font-normal">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {TOURS.map((tour) => (
                  <tr
                    key={tour.id}
                    role="row"
                    aria-selected={tour.id === selectedId}
                    tabIndex={0}
                    onClick={() => setSelectedId(tour.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setSelectedId(tour.id);
                    }}
                    className={[
                      'border-b border-fleet-line cursor-pointer transition-colors outline-none',
                      'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-fleet-green',
                      tour.id === selectedId ? 'bg-fleet-line/80' : 'hover:bg-fleet-line/30',
                    ].join(' ')}
                  >
                    <td className="px-4 py-3 font-mono text-xs text-fleet-text/60">{tour.id}</td>
                    <td className="px-4 py-3 font-mono text-sm text-fleet-text">{tour.driver}</td>
                    <td className="px-4 py-3 font-mono text-xs text-fleet-text/70 hidden md:table-cell">{tour.route}</td>
                    <td className="px-4 py-3 font-mono text-xs text-fleet-text/60 hidden lg:table-cell">{tour.departure}</td>
                    <td className="px-4 py-3 font-mono text-xs text-fleet-text/60 hidden lg:table-cell">{tour.eta}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`inline-flex items-center gap-1.5 font-mono text-xs ${STATUS_TEXT[tour.status]}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[tour.status]}`}
                            aria-hidden="true"
                          />
                          {STATUS_LABEL[tour.status]}
                        </span>
                        {tour.reminder && (
                          <span
                            className="font-mono text-xs px-1.5 py-0.5 rounded-sm bg-fleet-amber/15 text-fleet-amber border border-fleet-amber/30"
                            aria-label={`Reminder: ${tour.reminder}`}
                          >
                            {tour.reminder}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Driver panel sidebar */}
          <aside
            aria-label="Fahrer-Panel"
            className="w-52 shrink-0 border-l border-fleet-line hidden lg:flex flex-col"
          >
            <div className="px-4 py-3 border-b border-fleet-line">
              <p className="font-mono text-fleet-text/40 text-xs tracking-widest uppercase mb-1">
                Fahrer-Panel
              </p>
              <p className="font-mono text-fleet-text text-sm font-medium">{selected.driver}</p>
            </div>
            <dl className="px-4 py-4 space-y-3">
              <div>
                <dt className="font-mono text-fleet-text/40 text-xs">Tour-Nr.</dt>
                <dd className="font-mono text-fleet-text text-xs mt-0.5">{selected.id}</dd>
              </div>
              <div>
                <dt className="font-mono text-fleet-text/40 text-xs">Route</dt>
                <dd className="font-mono text-fleet-text text-xs mt-0.5">{selected.route}</dd>
              </div>
              <div>
                <dt className="font-mono text-fleet-text/40 text-xs">Abfahrt</dt>
                <dd className="font-mono text-fleet-text text-xs mt-0.5">{selected.departure}</dd>
              </div>
              <div>
                <dt className="font-mono text-fleet-text/40 text-xs">ETA</dt>
                <dd className={`font-mono text-xs mt-0.5 ${STATUS_TEXT[selected.status]}`}>
                  {selected.eta}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-fleet-text/40 text-xs">Status</dt>
                <dd className={`font-mono text-xs mt-0.5 inline-flex items-center gap-1 ${STATUS_TEXT[selected.status]}`}>
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[selected.status]}`}
                    aria-hidden="true"
                  />
                  {STATUS_LABEL[selected.status]}
                </dd>
              </div>
              {selected.reminder && (
                <div>
                  <dt className="font-mono text-fleet-text/40 text-xs">Reminder</dt>
                  <dd className="mt-0.5">
                    <span className="font-mono text-xs px-1.5 py-0.5 rounded-sm bg-fleet-amber/15 text-fleet-amber border border-fleet-amber/30">
                      {selected.reminder}
                    </span>
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>

        <p className="font-mono text-fleet-text/30 text-xs mt-2.5 text-right">
          Status: Echtzeit
        </p>
      </div>
    </section>
  );
}