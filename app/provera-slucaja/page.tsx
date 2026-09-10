"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileWarning,
  Gavel,
  House,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";

const problemOptions = [
  { title: "Blokiran račun", text: "Ne možete da raspolažete novcem na računu.", icon: LockKeyhole },
  { title: "Plata ili penzija", text: "Na primanju vidite obustavu ili umanjenje.", icon: Banknote },
  { title: "Rešenje o izvršenju", text: "Dobili ste dokument i rok već teče.", icon: FileWarning },
  { title: "Imovina", text: "Pominju se popis, zaplena ili prodaja.", icon: House },
  { title: "Dug koji ne prepoznajete", text: "Ne znate odakle potraživanje dolazi.", icon: Gavel },
  { title: "Nisam siguran/sigurna", text: "Želim prvo da opišem situaciju.", icon: Scale },
];

const urgencyOptions = [
  "Danas sam dobio/dobila dokument",
  "Račun ili primanje je već blokirano",
  "Dobio/dobila sam poziv ili najavu",
  "Problem traje već neko vreme",
  "Nisam siguran/sigurna koji je rok",
];

export default function CaseCheckPage() {
  const [step, setStep] = useState(1);
  const [problem, setProblem] = useState("");
  const [urgency, setUrgency] = useState("");
  const [completed, setCompleted] = useState(false);

  const goNext = () => {
    if (step === 1 && problem) setStep(2);
    if (step === 2 && urgency) setStep(3);
    if (step === 3) setCompleted(true);
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-red-700">
            <ArrowLeft className="size-4" /> Početna strana
          </a>
          <div className="flex items-center gap-2 text-sm font-bold tracking-tight text-slate-950"><Scale className="size-5 text-red-600" /> Pomoć kod izvršitelja</div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:pb-28 lg:pt-20">
        <aside className="max-w-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">Provera slučaja</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">Hajde prvo da razumemo šta vam se dešava.</h1>
          <p className="mt-5 text-base leading-7 text-slate-600">Odgovorite na nekoliko kratkih pitanja. Ne morate znati pravni naziv problema i ne šaljite osetljive dokumente u ovom koraku.</p>
          <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-600" />
              <div>
                <p className="text-sm font-bold">Vaša privatnost je važna</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Ovaj početni pregled je samo orijentacija. Bez slanja i čuvanja dokumenata.</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="min-w-0">
          <div className="mb-5 flex items-center justify-between text-sm font-semibold text-slate-500">
            <span>Korak {step} od 3</span>
            <span>{step === 1 ? "Problem" : step === 2 ? "Rok i situacija" : "Sledeći korak"}</span>
          </div>
          <div className="mb-8 h-2 overflow-hidden rounded-full bg-slate-200" aria-label={`Napredak: korak ${step} od 3`}>
            <div className="h-full rounded-full bg-red-500 transition-all" style={{ width: `${(step / 3) * 100}%` }} />
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.07)] sm:p-9">
            {completed ? (
              <div className="py-8 text-center sm:py-14">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-50 text-emerald-600"><CheckCircle2 className="size-8" /></div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Početni pregled je spreman</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Sada znamo odakle da počnemo.</h2>
                <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">U sledećoj fazi ovde povezujemo bezbedan kontakt, slanje dokumenta i jasnu analizu vašeg slučaja.</p>
                <a href="/#kontakt" className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2">Nastavite ka razgovoru <ArrowRight className="size-4" /></a>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-red-50 text-red-700"><FileWarning className="size-5" /></div>
                      <div><h2 className="text-2xl font-semibold tracking-[-0.03em]">Šta vam se trenutno dešava?</h2><p className="mt-2 text-sm leading-6 text-slate-600">Izaberite ono što je najbliže vašoj situaciji.</p></div>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {problemOptions.map((option) => {
                        const Icon = option.icon;
                        const selected = problem === option.title;
                        return (
                          <button key={option.title} type="button" aria-pressed={selected} onClick={() => setProblem(option.title)} className={`group rounded-2xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-red-300 ${selected ? "border-red-500 bg-red-50 ring-1 ring-red-500" : "border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50"}`}>
                            <div className="flex items-start justify-between gap-3"><span className={`grid size-10 place-items-center rounded-xl ${selected ? "bg-red-500 text-white" : "bg-slate-100 text-slate-600"}`}><Icon className="size-4" /></span>{selected && <Check className="size-5 text-red-600" />}</div>
                            <p className="mt-4 text-base font-bold">{option.title}</p>
                            <p className="mt-1 text-sm leading-5 text-slate-600">{option.text}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="flex items-start gap-4"><div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-amber-50 text-amber-700"><Clock3 className="size-5" /></div><div><h2 className="text-2xl font-semibold tracking-[-0.03em]">Koliko je situacija hitna?</h2><p className="mt-2 text-sm leading-6 text-slate-600">Izabrali ste: <strong>{problem}</strong>. Sada nam pomozite da razumemo trenutak u kom se nalazite.</p></div></div>
                    <div className="mt-8 space-y-3">
                      {urgencyOptions.map((option) => { const selected = urgency === option; return <button key={option} type="button" aria-pressed={selected} onClick={() => setUrgency(option)} className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-300 ${selected ? "border-red-500 bg-red-50 text-red-950" : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"}`}><span className="flex items-center gap-3"><span className={`size-3 rounded-full border-2 ${selected ? "border-red-500 bg-red-500" : "border-slate-300"}`} />{option}</span>{selected && <Check className="size-5 text-red-600" />}</button>; })}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <div className="flex items-start gap-4"><div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><FileCheck2 className="size-5" /></div><div><h2 className="text-2xl font-semibold tracking-[-0.03em]">Evo šta smo za sada razumeli.</h2><p className="mt-2 text-sm leading-6 text-slate-600">Proverite da li je ovaj sažetak tačan pre nego što nastavite.</p></div></div>
                    <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50">
                      <div className="flex items-start justify-between gap-4 p-4"><span className="text-sm text-slate-500">Problem</span><strong className="text-right text-sm">{problem}</strong></div>
                      <div className="flex items-start justify-between gap-4 p-4"><span className="text-sm text-slate-500">Situacija</span><strong className="text-right text-sm">{urgency}</strong></div>
                    </div>
                    <div className="mt-5 flex gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-950"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-blue-600" /><p>Ne šaljite JMBG, broj računa ili kompletna rešenja dok ne dogovorimo bezbedan kanal.</p></div>
                  </div>
                )}

                <div className="mt-9 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <button type="button" onClick={() => setStep((current) => Math.max(1, current - 1))} className={`text-sm font-bold text-slate-500 transition hover:text-slate-950 ${step === 1 ? "invisible" : ""}`}>Nazad</button>
                  <button type="button" disabled={step === 1 ? !problem : step === 2 ? !urgency : false} onClick={goNext} className="inline-flex items-center justify-center gap-3 rounded-full bg-red-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(239,68,68,0.2)] transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2">Nastavite <ArrowRight className="size-4" /></button>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
