import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowRight,
  Banknote,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileWarning,
  Gavel,
  HeartHandshake,
  House,
  LockKeyhole,
  Mail,
  MessageCircleMore,
  Scale,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

type Problem = {
  icon: LucideIcon;
  title: string;
  text: string;
  tone: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const storyBackgroundStyle = {
  backgroundImage: `url(${basePath}/pobedi-izvrsitelja-story.webp)`,
};

const problems: Problem[] = [
  {
    icon: LockKeyhole,
    title: "Blokiran račun",
    text: "Ne možete da podignete novac ili vam je račun iznenada blokiran.",
    tone: "bg-red-50 text-red-700 ring-red-100",
  },
  {
    icon: Banknote,
    title: "Plata ili penzija",
    text: "Na primanju vidite obustavu, a ne znate ko ju je pokrenuo i zašto.",
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    icon: FileWarning,
    title: "Dug koji ne prepoznajete",
    text: "Stiglo vam je rešenje za dug koji nikada niste dobili ili ne prepoznajete.",
    tone: "bg-sky-50 text-sky-700 ring-sky-100",
  },
  {
    icon: House,
    title: "Popis ili prodaja imovine",
    text: "Plašite se da će kuća, auto ili stvari biti popisane i prodate.",
    tone: "bg-violet-50 text-violet-700 ring-violet-100",
  },
  {
    icon: Clock3,
    title: "Zastarelost duga",
    text: "Moguće je da je prošlo previše vremena, ali ne znate kako da proverite.",
    tone: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    icon: FileCheck2,
    title: "Dobili ste rešenje",
    text: "Imate papir pred sobom i rok koji teče, ali ne znate koji je prvi korak.",
    tone: "bg-blue-50 text-blue-700 ring-blue-100",
  },
];

const topics = [
  "Šta uraditi kada izvršitelj blokira račun",
  "Kako proveriti da li je dug zastareo",
  "Prigovor na rešenje o izvršenju",
  "Izvršenje na plati ili penziji",
  "Popis i prodaja pokretne imovine",
  "Dugovi prema banci, operateru ili komunalnom preduzeću",
];

type ProjectPage = {
  order: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconTone: string;
};

const supportPages: ProjectPage[] = [
  {
    order: "01",
    title: "Podrška",
    description: "Kako možete da podržite širenje projekta i da informacija stigne do pravih ljudi.",
    href: "https://podrska.pobediizvrsitelja.rs/",
    icon: HeartHandshake,
    iconTone: "bg-rose-50 text-rose-700 ring-rose-100",
  },
  {
    order: "02",
    title: "Pomoć",
    description: "Jasne početne informacije kada ne znate odakle da krenete.",
    href: "https://pomoc.pobediizvrsitelja.rs/",
    icon: MessageCircleMore,
    iconTone: "bg-sky-50 text-sky-700 ring-sky-100",
  },
  {
    order: "03",
    title: "Pomoć građanima",
    description: "Praktična orijentacija za građane koji se suočavaju sa izvršenjem.",
    href: "https://pomocgradjanima.pobediizvrsitelja.rs/",
    icon: ShieldCheck,
    iconTone: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    order: "04",
    title: "Prava",
    description: "Osnovne informacije o pravima, dokumentima i rokovima.",
    href: "https://prava.pobediizvrsitelja.rs/",
    icon: Scale,
    iconTone: "bg-violet-50 text-violet-700 ring-violet-100",
  },
  {
    order: "05",
    title: "Protiv",
    description: "Šta proveriti kada ne prepoznajete dug ili se ne slažete sa podacima.",
    href: "https://protiv.pobediizvrsitelja.rs/",
    icon: FileWarning,
    iconTone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    order: "06",
    title: "Stop",
    description: "Prvi hitni koraci kada rok teče, račun je blokiran ili preti prinudna naplata.",
    href: "https://stop.pobediizvrsitelja.rs/",
    icon: AlertTriangle,
    iconTone: "bg-red-50 text-red-700 ring-red-100",
  },
];

const programPages: ProjectPage[] = [
  {
    order: "01",
    title: "Platinum Core 777",
    description: "Autorsko i razvojno jezgro iz kog su nastale povezane digitalne inicijative.",
    href: "https://platinumcore777.pobediizvrsitelja.rs/",
    icon: Sparkles,
    iconTone: "bg-amber-300/15 text-amber-200 ring-amber-200/20",
  },
  {
    order: "02",
    title: "Podrška softveru",
    description: "Tehnička podrška projektu, razvojnom radu i softveru koji ga pokreće.",
    href: "https://podrskasoftveru.pobediizvrsitelja.rs/",
    icon: WalletCards,
    iconTone: "bg-emerald-300/15 text-emerald-200 ring-emerald-200/20",
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#dcebed]/90 text-slate-950">
      <div aria-hidden="true" style={storyBackgroundStyle} className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-[0.38]" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-[#dcebed]/45" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_30%,rgba(239,68,68,0.11),transparent_24rem),radial-gradient(circle_at_86%_50%,rgba(14,116,144,0.14),transparent_32rem),linear-gradient(180deg,rgba(220,235,237,0.34)_0%,rgba(232,241,242,0.38)_44%,rgba(215,231,233,0.34)_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(15,42,50,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,42,50,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_16%,black_84%,transparent_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[48rem] -z-10 h-[82rem] w-px bg-gradient-to-b from-red-400/0 via-red-400/30 to-teal-500/0" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-0 z-20 hidden w-24 lg:block">
        <div className="absolute bottom-[18%] left-10 top-[18%] w-px bg-gradient-to-b from-transparent via-amber-400/70 to-transparent" />
        <div className="absolute left-[calc(2.5rem-1.1rem)] top-[26%] grid size-9 place-items-center rounded-xl border border-amber-300/60 bg-[#0b1b22]/80 text-amber-200 shadow-[0_8px_25px_rgba(15,23,42,0.18)] backdrop-blur-sm"><Mail className="size-4" /></div>
        <div className="absolute left-[calc(2.5rem-1.1rem)] top-1/2 grid size-9 place-items-center rounded-xl border border-amber-300/50 bg-[#0b1b22]/75 text-amber-200 shadow-[0_8px_25px_rgba(15,23,42,0.18)] backdrop-blur-sm"><FileCheck2 className="size-4" /></div>
        <div className="absolute bottom-[26%] left-[calc(2.5rem-1.1rem)] grid size-9 place-items-center rounded-xl border border-amber-300/50 bg-[#0b1b22]/75 text-amber-200 shadow-[0_8px_25px_rgba(15,23,42,0.18)] backdrop-blur-sm"><ShieldCheck className="size-4" /></div>
      </div>
      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 right-0 z-20 hidden w-24 lg:block">
        <div className="absolute bottom-[18%] right-10 top-[18%] w-px bg-gradient-to-b from-transparent via-amber-400/70 to-transparent" />
        <div className="absolute right-[calc(2.5rem-1.1rem)] top-[26%] grid size-9 place-items-center rounded-xl border border-amber-300/60 bg-[#0b1b22]/80 text-amber-200 shadow-[0_8px_25px_rgba(15,23,42,0.18)] backdrop-blur-sm"><Mail className="size-4" /></div>
        <div className="absolute right-[calc(2.5rem-1.1rem)] top-1/2 grid size-9 place-items-center rounded-xl border border-amber-300/50 bg-[#0b1b22]/75 text-amber-200 shadow-[0_8px_25px_rgba(15,23,42,0.18)] backdrop-blur-sm"><FileCheck2 className="size-4" /></div>
        <div className="absolute bottom-[26%] right-[calc(2.5rem-1.1rem)] grid size-9 place-items-center rounded-xl border border-amber-300/50 bg-[#0b1b22]/75 text-amber-200 shadow-[0_8px_25px_rgba(15,23,42,0.18)] backdrop-blur-sm"><ShieldCheck className="size-4" /></div>
      </div>
      <section className="relative isolate overflow-hidden bg-[#091116] text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src={`${basePath}/pobedi-izvrsitelja-story.webp`}
            alt="Tri koraka: prijem koverte, briga i olakšanje"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[67%_center] sm:object-[64%_center] lg:object-[61%_center]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[#091116]/40" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,17,22,0.94)_0%,rgba(9,17,22,0.64)_37%,rgba(9,17,22,0.12)_72%,rgba(9,17,22,0.42)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,17,22,0.62)_0%,rgba(9,17,22,0.02)_42%,rgba(9,17,22,0.76)_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="border-b border-red-400/20 bg-red-950/35 px-5 py-2.5 text-center text-[13px] font-medium tracking-wide text-red-100">
          <span className="mr-2 inline-block size-1.5 rounded-full bg-red-400 align-middle shadow-[0_0_12px_rgba(248,113,113,0.95)]" />
          Rokovi mogu da teku dok čekate da se problem sam reši.
        </div>

        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3" aria-label="Pomoć kod izvršitelja - početak">
            <span className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.22)]">
              <Scale className="size-5 text-red-300" />
            </span>
            <span className="leading-none">
              <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-red-200">Pomoć kod</span>
              <span className="mt-1 block text-sm font-semibold tracking-tight text-white">izvršitelja</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex" aria-label="Glavna navigacija">
            <a className="transition-colors hover:text-white" href="#projekti">Stranice</a>
            <a className="transition-colors hover:text-white" href="#problemi">Problemi</a>
            <a className="transition-colors hover:text-white" href="#kako-radimo">Kako radimo</a>
            <a className="transition-colors hover:text-white" href="#o-nama">Ko smo mi</a>
          </nav>

          <Link
            href="/provera-slucaja"
            className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-amber-300 px-4 py-2.5 text-sm font-bold text-[#102a32] shadow-[0_12px_30px_rgba(251,191,36,0.2)] transition hover:-translate-y-0.5 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#091116]"
          >
            Proverite svoj slučaj
            <ArrowRight className="size-4" />
          </Link>
        </header>

        <div id="top" className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-12 sm:px-8 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-32 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-300/25 bg-red-300/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-red-100">
              <AlertTriangle className="size-4 text-red-300" />
              Ne čekajte da bude kasno
            </div>
            <h1 className="max-w-3xl text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-balance">
              Imate problem sa <span className="text-red-300">izvršiteljem?</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Kada stigne rešenje, blokira se račun ili se pomene prodaja imovine, najteže je znati odakle početi. Tu smo da zajedno razumemo šta se dešava i koji je sledeći korak.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/provera-slucaja"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-300 px-6 py-3.5 text-sm font-bold text-[#102a32] shadow-[0_14px_35px_rgba(251,191,36,0.28)] transition hover:-translate-y-0.5 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-100 focus:ring-offset-2 focus:ring-offset-[#091116]"
              >
                Napravite prvi korak
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="#kako-radimo"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-amber-200/40 px-6 py-3.5 text-sm font-bold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/10 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#091116]"
              >
                Kako možemo da pomognemo
                <ChevronRight className="size-4" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-300" /> Jasno objašnjenje</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-300" /> Transparentna naknada</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-300" /> Bez lažnih obećanja</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto lg:translate-y-16">
            <div className="absolute -inset-6 rounded-[2rem] bg-red-500/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/20 bg-white/[0.1] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-5">
              <div className="rounded-[1.4rem] bg-[#f6f7f9] p-5 text-slate-950 sm:p-6">
                <div className="flex items-start justify-between border-b border-slate-200 pb-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">Prvi korak</p>
                    <p className="mt-2 text-xl font-semibold tracking-tight">Razumite šta ste dobili</p>
                  </div>
                  <div className="grid size-10 place-items-center rounded-full bg-red-50 text-red-600">
                    <FileWarning className="size-5" />
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-lg bg-slate-100 text-slate-500"><Gavel className="size-4" /></span>
                      <div>
                        <p className="text-sm font-semibold">Rešenje o izvršenju</p>
                        <p className="mt-1 text-xs text-slate-500">Dokument koji treba pročitati pažljivo</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
                    <Clock3 className="mt-0.5 size-4 shrink-0 text-amber-600" />
                    <p><strong>Važno:</strong> proverite datum prijema i rok koji je naveden u dokumentu.</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-950 px-4 py-3 text-white">
                  <span className="text-sm font-medium">Ne znate šta dalje?</span>
                  <ArrowDownRight className="size-5 text-red-300" />
                </div>
              </div>
              <div className="flex items-center gap-3 px-2 pb-1 pt-5 text-sm text-slate-300">
                <span className="grid size-8 place-items-center rounded-full bg-emerald-300/15 text-emerald-200"><HeartHandshake className="size-4" /></span>
                Prvi razgovor počinje razumevanjem vašeg problema.
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="projekti" className="relative isolate overflow-hidden border-y border-slate-300/70 bg-[#edf4f5]/90 px-5 py-20 scroll-mt-8 sm:px-8 lg:px-12 lg:py-28">
        <div aria-hidden="true" style={storyBackgroundStyle} className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-[position:62%_center] bg-no-repeat opacity-[0.12]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-16 -z-10 size-72 rounded-full bg-red-300/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 -z-10 size-80 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">Navigacija projekta</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Izaberite oblast koja vam je potrebna.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">Glavni sajt je polazna tačka. Svaka kartica vodi na svoju posebnu stranicu i objašnjava jedan deo projekta.</p>
          </div>

          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Pomoć i informacije</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Šest koraka za snalaženje</h3>
              </div>
              <span className="rounded-full border border-slate-300 bg-white/75 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">01 → 06</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
              {supportPages.map((page, index) => {
                const Icon = page.icon;
                return (
                  <a key={page.href} href={page.href} aria-label={`Otvori stranicu: ${page.title}`} className="group relative flex min-h-[245px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_32px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.11)] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className={`grid size-11 place-items-center rounded-xl ring-1 ${page.iconTone}`}>
                        <Icon className="size-5" />
                      </div>
                      <span className="text-xs font-bold tracking-[0.14em] text-slate-400">{page.order}</span>
                    </div>
                    <h4 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">{page.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{page.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-amber-700 transition group-hover:text-amber-900">Otvori stranicu <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
                    {index < supportPages.length - 1 && <span aria-hidden="true" className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-2xl font-bold text-amber-600 xl:block">→</span>}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] bg-[#0b1b22] p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Programi i razvoj</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Autorsko jezgro i podrška softveru</h3>
              </div>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">Odvojene stranice</span>
            </div>
            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              {programPages.map((page) => {
                const Icon = page.icon;
                return (
                  <a key={page.href} href={page.href} aria-label={`Otvori program: ${page.title}`} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-7 transition hover:-translate-y-1 hover:border-amber-200/50 hover:bg-white/[0.11] focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#0b1b22] sm:p-9">
                    <div aria-hidden="true" className="absolute -right-16 -top-16 size-48 rounded-full bg-amber-300/10 blur-3xl transition group-hover:bg-amber-300/20" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div className={`grid size-14 place-items-center rounded-2xl ring-1 ${page.iconTone}`}>
                        <Icon className="size-6" />
                      </div>
                      <span className="text-xs font-bold tracking-[0.16em] text-slate-400">PROGRAM {page.order}</span>
                    </div>
                    <h4 className="relative mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{page.title}</h4>
                    <p className="relative mt-3 max-w-xl text-base leading-7 text-slate-300">{page.description}</p>
                    <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-amber-200">Otvori program <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="problemi" className="relative isolate mx-auto max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div aria-hidden="true" style={storyBackgroundStyle} className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-cover bg-[position:62%_center] bg-no-repeat opacity-[0.16]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-16 size-72 rounded-full bg-red-300/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">Možda ste ovde jer...</p>
            <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Prepoznajete svoj problem, ali ne znate svoje mogućnosti.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">Niste dužni da razumete pravni jezik preko noći. Prvi korak je da tačno utvrdimo šta se dogodilo.</p>
            <div className="mt-8 hidden h-px w-28 bg-red-500 lg:block" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <article key={problem.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_32px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]">
                  <div className={`mb-5 grid size-11 place-items-center rounded-xl ring-1 ${problem.tone}`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{problem.text}</p>
                  <Link href="/provera-slucaja" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 transition group-hover:text-amber-900">
                    Saznajte više <ArrowRight className="size-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="kako-radimo" className="relative isolate scroll-mt-8 overflow-hidden border-y border-white/60 bg-[#d3e5e7]/90 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div aria-hidden="true" style={storyBackgroundStyle} className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-[position:63%_center] bg-no-repeat opacity-[0.24]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#d3e5e7]/35" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(15,42,50,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,42,50,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-20 -z-10 size-[28rem] rounded-full bg-teal-300/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 -z-10 size-72 rounded-full bg-red-300/20 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Bez lutanja</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Od nejasnog papira do jasnog sledećeg koraka.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">Saradnja počinje jednostavno. Ne morate unapred znati pravni naziv problema da biste potražili pomoć.</p>
          </div>

          <div className="relative mt-12 grid gap-4 lg:grid-cols-3">
            <div aria-hidden="true" className="pointer-events-none absolute left-[16%] right-[16%] top-[3.8rem] hidden h-px bg-gradient-to-r from-amber-300/30 via-amber-300/80 to-amber-200/80 lg:block" />
            <article className="relative z-10 rounded-3xl bg-[#0b1b22]/95 p-7 text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] ring-1 ring-white/10">
              <span className="text-6xl font-semibold tracking-[-0.08em] text-amber-300/45">01</span>
              <div className="mt-8 grid size-12 place-items-center rounded-2xl bg-amber-300/15 text-amber-200"><MessageCircleMore className="size-5" /></div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">Ispričate šta se desilo</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Napišete šta ste dobili, kada je stiglo i šta vas trenutno najviše brine.</p>
            </article>
            <article className="relative z-10 rounded-3xl bg-[#0b1b22]/95 p-7 text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] ring-1 ring-white/10">
              <span className="text-6xl font-semibold tracking-[-0.08em] text-amber-300/45">02</span>
              <div className="mt-8 grid size-12 place-items-center rounded-2xl bg-amber-300/15 text-amber-200"><FileCheck2 className="size-5" /></div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">Dobijete razumljivu analizu</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Prolazimo kroz informacije i objašnjavamo šta je važno, bez nepotrebnog komplikovanja.</p>
            </article>
            <article className="relative z-10 rounded-3xl bg-[#0b1b22]/95 p-7 text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] ring-1 ring-white/10">
              <span className="text-6xl font-semibold tracking-[-0.08em] text-amber-300/45">03</span>
              <div className="mt-8 grid size-12 place-items-center rounded-2xl bg-amber-300/15 text-amber-200"><ArrowRight className="size-5" /></div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Znate koji je sledeći korak</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Dobijate jasan plan šta da proverite, koji rok da pratite i kada je potrebna dodatna stručna pomoć.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="o-nama" className="relative isolate mx-auto grid max-w-7xl scroll-mt-8 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-12 lg:py-32">
        <div aria-hidden="true" style={storyBackgroundStyle} className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-[position:62%_center] bg-no-repeat opacity-[0.14]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-1/2 size-72 -translate-y-1/2 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-[#0b1b22] p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.13)] sm:p-9">
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 size-64 rounded-full bg-teal-400/15 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-slate-300">Ko smo mi</span>
              <ShieldCheck className="size-6 text-emerald-300" />
            </div>
            <div className="mt-20">
              <p className="max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em]">Niko ne treba da ostane sam pred papirom koji ne razume.</p>
              <div className="mt-9 flex items-center gap-3 text-sm text-slate-300"><span className="size-2 rounded-full bg-emerald-300" /> Informacije koje vode ka odluci</div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">Ljudska podrška, jasan jezik</p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Tu smo da pomognemo dok još postoji prostor za reakciju.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">Ovaj servis je nastao iz potrebe da ljudi dobiju razumljivu početnu orijentaciju kada se suoče sa izvršenjem. Ne prodajemo lažnu sigurnost i ne obećavamo ishod koji niko ne može da garantuje.</p>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">Za jasnu analizu i sledeće korake plaća se transparentna naknada. Kada je za vaš slučaj potrebna advokatska ili druga stručna pomoć, to treba jasno reći odmah.</p>
          <div className="mt-8 flex flex-wrap gap-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><Check className="size-4 text-emerald-600" /> Razumljiv razgovor</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><Check className="size-4 text-emerald-600" /> Jasna naknada</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><Check className="size-4 text-emerald-600" /> Realna očekivanja</span>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-slate-300/70 bg-[#edf4f5]/90 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div aria-hidden="true" style={storyBackgroundStyle} className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-[position:62%_center] bg-no-repeat opacity-[0.15]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#edf4f5]/35" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(15,42,50,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(15,42,50,0.07)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 size-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Korisne informacije</p>
            <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em]">Odgovori na pitanja koja ljudi najčešće kucaju.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">Pre nego što zatražite pomoć, možete pročitati osnovne informacije o problemu koji vas je doveo ovde.</p>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {topics.map((topic) => (
              <Link key={topic} href="/provera-slucaja" className="group flex items-start gap-3 border-b border-slate-200 py-5 text-base font-semibold leading-6 text-slate-800 transition hover:text-amber-700">
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-700"><ChevronRight className="size-3.5" /></span>
                <span>{topic}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-8 bg-[#102a32] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200"><Sparkles className="size-4" /> Počnite od svog slučaja</div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">Ne morate sve da rešite večeras. Ali prvi korak ne treba da čeka.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Pripremite rešenje, obaveštenje ili podatke koje imate. Zajedno prvo razjašnjavamo problem, pa tek onda biramo sledeći korak.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 sm:p-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Prvi kontakt</p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-200">
              <p className="flex gap-3"><Mail className="mt-1 size-5 shrink-0 text-emerald-300" /> Ostavite osnovne informacije o tome šta ste dobili i kada.</p>
              <p className="flex gap-3"><WalletCards className="mt-1 size-5 shrink-0 text-emerald-300" /> Naknada i obim pomoći biće jasno objašnjeni pre saradnje.</p>
              <p className="flex gap-3"><ShieldCheck className="mt-1 size-5 shrink-0 text-emerald-300" /> Ne šaljite osetljive dokumente pre dogovorenog bezbednog kanala.</p>
            </div>
            <a href="#top" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber-300 px-5 py-3.5 text-sm font-bold text-[#102a32] transition hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#102a32]">Vratite se na početak <ArrowRight className="size-4" /></a>
          </div>
        </div>
      </section>

      <section aria-label="Kontakt" className="bg-[#091116] px-5 pb-4 text-center text-sm text-slate-300 sm:px-8 lg:px-12">
        <p className="font-semibold tracking-tight text-slate-200">contact@pobediizvrsitelja.rs</p>
      </section>

      <footer className="bg-[#091116] px-5 py-8 text-sm text-slate-400 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start gap-3">
            <Image src={`${basePath}/platinum-core-777-logo.png`} alt="PLATINUM CORE 777" width={345} height={254} className="h-16 w-auto object-contain object-left" />
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">LICENSED · POWERED BY PLATINUM CORE 777 · LK-023</p>
            <p>© 2026 Pomoć kod izvršitelja · Marko Ćuća</p>
          </div>
          <p className="max-w-xl text-left text-xs leading-5 text-slate-500 sm:text-right">Informativni sadržaj ne predstavlja garanciju ishoda. Svaki slučaj zahteva proveru konkretnih dokumenata i rokova.</p>
        </div>
      </footer>
    </main>
  );
}
