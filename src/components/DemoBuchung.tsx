import { useState } from 'react';
import type { FormEvent } from 'react';

interface FormState {
  name: string;
  unternehmen: string;
  wunschtermin: string;
}

const INPUT_CLASS =
  'w-full bg-fleet-bg border border-fleet-line rounded px-3 py-2 font-mono text-fleet-text text-sm ' +
  'placeholder:text-fleet-text/20 focus:border-fleet-green focus:outline-none transition-colors';

export default function DemoBuchung() {
  const [form, setForm] = useState<FormState>({
    name: '',
    unternehmen: '',
    wunschtermin: '',
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="demo-buchung"
      aria-labelledby="demobuchung-heading"
      className="py-20 border-t border-fleet-line"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-sm">
          <h2
            id="demobuchung-heading"
            className="font-mono text-fleet-text text-lg mb-2"
          >
            Demo buchen
          </h2>
          <p className="font-mono text-fleet-text/50 text-sm mb-8">
            Termin eintragen. Wir melden uns innerhalb eines Werktags.
          </p>

          {sent ? (
            <p
              role="status"
              className="font-mono text-fleet-green text-sm border border-fleet-line rounded px-4 py-3"
            >
              Anfrage eingegangen. Wir melden uns.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="field-name"
                  className="block font-mono text-fleet-text/60 text-xs mb-1.5 tracking-wide"
                >
                  Disponenten-Name
                </label>
                <input
                  id="field-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className={INPUT_CLASS}
                  placeholder="Vollstaendiger Name"
                />
              </div>

              <div>
                <label
                  htmlFor="field-unternehmen"
                  className="block font-mono text-fleet-text/60 text-xs mb-1.5 tracking-wide"
                >
                  Unternehmen / Fuhrpark
                </label>
                <input
                  id="field-unternehmen"
                  type="text"
                  required
                  autoComplete="organization"
                  value={form.unternehmen}
                  onChange={(e) => setForm((p) => ({ ...p, unternehmen: e.target.value }))}
                  className={INPUT_CLASS}
                  placeholder="Spedition Beispiel GmbH"
                />
              </div>

              <div>
                <label
                  htmlFor="field-termin"
                  className="block font-mono text-fleet-text/60 text-xs mb-1.5 tracking-wide"
                >
                  Wunschtermin
                </label>
                <input
                  id="field-termin"
                  type="date"
                  required
                  value={form.wunschtermin}
                  onChange={(e) => setForm((p) => ({ ...p, wunschtermin: e.target.value }))}
                  className={INPUT_CLASS}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-fleet-green text-fleet-bg font-mono text-sm font-medium rounded transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fleet-green"
              >
                Demo-Termin anfragen
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}