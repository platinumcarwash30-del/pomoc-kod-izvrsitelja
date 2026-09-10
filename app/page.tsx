import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowRight,
  Banknote,
  CarFront,
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
  {
    icon: CarFront,
    title: "Saobraćajne kazne",
    text: "Imate kaznu, prinudnu naplatu ili blokadu zbog saobraćajnog prekršaja.",
    tone: "bg-orange-50 text-orange-700 ring-orange-100",
  },
  {
    icon: FileWarning,
    title: "Opomena pred utuženje",
    text: "Dobili ste opomenu i niste sigurni da li i kako treba da reagujete.",
    tone: "bg-yellow-50 text-yellow-700 ring-yellow-100",
  },
  {
    icon: Gavel,
    title: "Tužba ili sudski poziv",
    text: "Stigla vam je tužba ili poziv suda, a ne znate koji rokovi važe.",
    tone: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-100",
  },
];

const topics = [
  "Šta uraditi kada izvršitelj blokira račun",
  "Kako proveriti da li je dug zastareo",
  "Prigovor na rešenje o izvršenju",
  "Izvršenje na plati ili penziji",
  "Popis i prodaja pokretne imovine",
  "Dugovi prema banci, operateru ili komunalnom preduzeću",
  "Saobraćajne kazne i prinudna naplata",
  "Kako proveriti i obustaviti naplatu saobraćajne kazne",
  "Šta uraditi kada stigne opomena pred utuženje",
  "Kako reagovati na tužbu ili sudski poziv",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fa] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#091116] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(190,36,47,0.28),transparent_29%),radial-gradient(circle_at_14%_86%,rgba(24,103,135,0.2),transparent_26%)]" />
        <div className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="border-b border-red-400/20 bg-red-950/35 px-5 py-2.5 text-center text-[13px] font-medium tracking-wide text-red-100">
          <span className="mr-2 inline-block size-1.5 rounded-full bg-red-400 align-middle shadow-[0_0_12px_rgba(248,113,113,0.95)]" />
          Rokovi mogu da teku dok čekate da se problem sam reši.
        </div>

        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-4" aria-label="Rešite se problema sa javnim izvršiteljima - početak">
            <span className="grid size-14 place-items-center rounded-2xl border border-red-300/25 bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.22)]">
              <Scale className="size-8 text-red-300" strokeWidth={1.7} />
            </span>
            <span className="max-w-[225px] leading-[1.05]">
              <span className="block text-[11px] font-black uppercase tracking-[0.14em] text-red-200">Pobedimo izvršitelja zajedno</span>
              <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.12em] text-white">Bez skupih advokatskih naknada</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex" aria-label="Glavna navigacija">
            <a className="transition-colors hover:text-white" href="#problemi">Problemi</a>
            <a className="transition-colors hover:text-white" href="#kako-radimo">Kako radimo</a>
            <a className="transition-colors hover:text-white" href="#o-nama">Ko smo mi</a>
            <a className="transition-colors hover:text-white" href="#iskustva">Iskustva korisnika</a>
            <a className="transition-colors hover:text-white" href="/blog">Blog</a>
            <a className="rounded-full border border-emerald-300/35 px-3 py-1.5 font-bold text-emerald-200 transition hover:border-emerald-200 hover:bg-emerald-300/10 hover:text-white" href="#podrska">Podrška</a>
          </nav>

          <a
            href="/provera-slucaja"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2.5 text-sm font-bold text-slate-950 shadow-[0_12px_30px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-[#091116]"
          >
            Proverite svoj slučaj
            <ArrowRight className="size-4" />
          </a>
        </header>

        <div id="top" className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-12 sm:px-8 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-32 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-300/25 bg-red-300/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-red-100">
              <AlertTriangle className="size-4 text-red-300" />
              Ne čekajte da bude kasno
            </div>
            <h1 className="max-w-3xl text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-balance">
              Rešite se problema sa <span className="text-red-300">javnim izvršiteljima.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Kada stigne rešenje, blokira se račun ili se pomene prodaja imovine, najteže je znati odakle početi. Tu smo da zajedno razumemo šta se dešava i koji je sledeći korak.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/provera-slucaja"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-red-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(239,68,68,0.28)] transition hover:-translate-y-0.5 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 focus:ring-offset-[#091116]"
              >
                Napravite prvi korak
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#kako-radimo"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/35 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 focus:ring-offset-[#091116]"
              >
                Kako možemo da pomognemo
                <ChevronRight className="size-4" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-300" /> Jasno objašnjenje</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-300" /> Dogovorena nagrada</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-300" /> Bez lažnih obećanja</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-6 rounded-[2rem] bg-red-500/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.07] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-5">
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

      <section id="problemi" className="mx-auto max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
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
                  <a href="/provera-slucaja" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 transition group-hover:text-red-700">
                    Saznajte više <ArrowRight className="size-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="kako-radimo" className="scroll-mt-8 bg-[#e9f2f3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Bez lutanja</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Od nejasnog papira do jasnog sledećeg koraka.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">Saradnja počinje jednostavno. Ne morate unapred znati pravni naziv problema da biste potražili pomoć.</p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <article className="relative rounded-3xl bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <span className="text-6xl font-semibold tracking-[-0.08em] text-teal-100">01</span>
              <div className="mt-8 grid size-12 place-items-center rounded-2xl bg-teal-50 text-teal-700"><MessageCircleMore className="size-5" /></div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Ispričate šta se desilo</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Napišete šta ste dobili, kada je stiglo i šta vas trenutno najviše brine.</p>
            </article>
            <article className="relative rounded-3xl bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <span className="text-6xl font-semibold tracking-[-0.08em] text-teal-100">02</span>
              <div className="mt-8 grid size-12 place-items-center rounded-2xl bg-blue-50 text-blue-700"><FileCheck2 className="size-5" /></div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Dobijete razumljivu analizu</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Prolazimo kroz informacije i objašnjavamo šta je važno, bez nepotrebnog komplikovanja.</p>
            </article>
            <article className="relative rounded-3xl bg-slate-950 p-7 text-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <span className="text-6xl font-semibold tracking-[-0.08em] text-emerald-300/20">03</span>
              <div className="mt-8 grid size-12 place-items-center rounded-2xl bg-emerald-300/15 text-emerald-300"><ArrowRight className="size-5" /></div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Znate koji je sledeći korak</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Dobijate jasan plan šta da proverite, koji rok da pratite i kada je potrebna dodatna stručna pomoć.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="o-nama" className="mx-auto grid max-w-7xl scroll-mt-8 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-12 lg:py-32">
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
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600"><strong>Organizator projekta, Marko Ćuća,</strong> kroz višegodišnje lično iskustvo rešavao je brojne probleme sa javnim izvršiteljima, kao i predmete u vezi sa saobraćajnim kaznama i prinudnom naplatom. Cilj je da ljudi na vreme razumeju svoj slučaj i mogućnosti.</p>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">Za jasnu analizu i sledeće korake unapred se dogovara nagrada za izvršen posao. Kada je za vaš slučaj potrebna advokatska ili druga stručna pomoć, to treba jasno reći odmah.</p>
          <div className="mt-8 flex flex-wrap gap-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><Check className="size-4 text-emerald-600" /> Razumljiv razgovor</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><Check className="size-4 text-emerald-600" /> Jasno dogovorena nagrada</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><Check className="size-4 text-emerald-600" /> Realna očekivanja</span>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Korisne informacije</p>
            <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em]">Odgovori na pitanja koja ljudi najčešće kucaju.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">Pre nego što zatražite pomoć, možete pročitati osnovne informacije o problemu koji vas je doveo ovde.</p>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {topics.map((topic) => (
              <a key={topic} href="/provera-slucaja" className="group flex items-start gap-3 border-b border-slate-200 py-5 text-base font-semibold leading-6 text-slate-800 transition hover:text-blue-700">
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"><ChevronRight className="size-3.5" /></span>
                <span>{topic}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="iskustva" className="scroll-mt-8 bg-[#f7f8fa] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">Iskustva korisnika</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Priče ljudi kojima je bio potreban prvi korak.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">Iskustva ćemo objavljivati samo uz saglasnost korisnika, bez nepotrebnog otkrivanja ličnih podataka i tek nakon što sadržaj bude proveren.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Razumevanje", "Korisnik je dobio jasnije objašnjenje dokumenta i rokova koje treba pratiti."],
              ["Saobraćajna kazna", "Slučaj prinudne naplate saobraćajne kazne sagledan je kroz dostupnu dokumentaciju."],
              ["Podrška na vreme", "Prvi razgovor pomogao je da se problem ne odlaže dok rokovi prolaze."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_32px_rgba(15,23,42,0.04)]">
                <div className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><CheckCircle2 className="size-5" /></div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Primer kategorije · bez ličnih podataka</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="podrska" className="scroll-mt-8 border-y border-emerald-200 bg-emerald-50 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Podrška projektu</p>
            <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Pomozite da neko dobije priliku za prvi korak.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-emerald-950/70">Neki ljudi nemaju novca ni za osnovne troškove — overu dokumenata, slanje podnesaka i druge neophodne korake.</p>
          </div>
          <div className="rounded-3xl border border-emerald-200 bg-white p-7 shadow-[0_16px_45px_rgba(16,185,129,0.09)] sm:p-9">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-700"><HeartHandshake className="size-6" /></span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">Dobrovoljna podrška ljudima kojima je najpotrebnija</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">Ako želite da podržite ovaj projekat, kontaktirajte organizatora i informišite se o mogućnosti dobrovoljne donacije za pomoć osobama koje zbog teške finansijske situacije ne mogu da naprave ni prvi korak.</p>
              </div>
            </div>
            <div className="mt-7 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
              <p className="rounded-2xl bg-slate-50 p-4"><strong>Transparentno:</strong> podrška se evidentira i koristi namenski, uz jasno objašnjenje troškova.</p>
              <p className="rounded-2xl bg-slate-50 p-4"><strong>Dobrovoljno:</strong> donacija nije uslov za pomoć i ne predstavlja garanciju ishoda postupka.</p>
            </div>
            <a href="#kontakt" className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">Kontaktirajte organizatora <ArrowRight className="size-4" /></a>
            <p className="mt-5 text-xs leading-5 text-slate-500">Način primanja i evidencije podrške biće uređen u skladu sa važećim propisima i potvrđen pre javnog početka.</p>
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
              <p className="flex gap-3"><WalletCards className="mt-1 size-5 shrink-0 text-emerald-300" /> Nagrada i obim pomoći biće jasno objašnjeni pre saradnje.</p>
              <p className="flex gap-3"><ShieldCheck className="mt-1 size-5 shrink-0 text-emerald-300" /> Ne šaljite osetljive dokumente pre dogovorenog bezbednog kanala.</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a href="mailto:markoplatinum@icloud.com" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-300/50 hover:bg-white/10">
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-400">E-mail</span>
                <span className="mt-1 block break-all text-sm font-semibold text-emerald-200">markoplatinum@icloud.com</span>
              </a>
              <a href="tel:+381637572520" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-300/50 hover:bg-white/10">
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Telefon</span>
                <span className="mt-1 block text-sm font-semibold text-emerald-200">063 757 2520</span>
              </a>
            </div>
            <a href="#top" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-300 px-5 py-3.5 text-sm font-bold text-[#102a32] transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#102a32]">Vratite se na početak <ArrowRight className="size-4" /></a>
          </div>
        </div>
      </section>

      <footer className="bg-[#091116] px-5 py-8 text-sm text-slate-400 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rešite se problema sa javnim izvršiteljima · Marko Ćuća</p>
          <p className="max-w-xl text-left text-xs leading-5 text-slate-500 sm:text-right">Informativni sadržaj ne predstavlja garanciju ishoda. Svaki slučaj zahteva proveru konkretnih dokumenata i rokova.</p>
        </div>
      </footer>
    </main>
  );
}
