import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileWarning,
  Gavel,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const articles = [
  {
    id: "opomena-pred-utuzenje",
    icon: AlertTriangle,
    tag: "Pre nego što počne postupak",
    title: "Stigla je opomena pred utuženje — šta sada?",
    intro: "Opomena nije isto što i sudska odluka, ali je signal da ne treba odlagati proveru duga i dokumentacije.",
    points: [
      "Proverite ko šalje opomenu, na koji dug se odnosi i iz kog perioda potiče.",
      "Sačuvajte kovertu, datum prijema, obračun i sve ranije uplatnice ili prepisku.",
      "Ne prihvatajte dug niti potpisujte sporazum pre nego što razumete šta tačno priznajete.",
      "Ako smatrate da dug nije tačan, reagujte pismeno i čuvajte dokaz o slanju.",
    ],
    closing: "Najvažnije je da opomenu ne bacite i da ne čekate da se pojavi sudski poziv. Konkretan sledeći korak zavisi od sadržaja dokumenta i porekla duga.",
  },
  {
    id: "tuzba-ili-sudski-poziv",
    icon: Gavel,
    tag: "Sudska pošta",
    title: "Dobili ste tužbu ili sudski poziv",
    intro: "Sudski dokument traži pažnju, čak i kada mislite da je dug pogrešan ili da je sve već plaćeno.",
    points: [
      "Zapišite datum kada ste dokument primili i proverite šta se od vas tačno traži.",
      "Razdvojite glavnicu, kamatu, troškove i podatke o poveriocu.",
      "Ne propuštajte rok naveden u dokumentu; rok se ne računa napamet niti isto važi za svaki akt.",
      "Pripremite ugovore, uplatnice, prepisku i dokaz o adresi na koju je pošta stizala.",
    ],
    closing: "Tužba ili poziv nisu trenutak za nagađanje. Ako postoje procesni rokovi ili složena dokumentacija, slučaj treba odmah pokazati advokatu.",
  },
  {
    id: "blokiran-racun",
    icon: LockKeyhole,
    tag: "Prinudna naplata",
    title: "Račun je blokiran — prvi pregled situacije",
    intro: "Blokada računa obično znači da je potrebno brzo utvrditi ko je tražio naplatu, po kom osnovu i u kom iznosu.",
    points: [
      "Od banke zatražite podatke o osnovu blokade i oznaci predmeta, u meri u kojoj ih banka može dati.",
      "Pronađite rešenje, zaključak ili obaveštenje koje se odnosi na predmet.",
      "Uporedite iznos duga sa svojim uplatama i proverite da li su dodati troškovi.",
      "Ne šaljite javno fotografije dokumenata; prekrijte JMBG, adresu, broj računa i druge osetljive podatke.",
    ],
    closing: "Sama informacija da je račun blokiran nije dovoljna za procenu da li postoji osnov za reakciju. Potrebno je pročitati konkretan akt i proveriti rokove.",
  },
  {
    id: "saobracajne-kazne",
    icon: FileWarning,
    tag: "Saobraćajne kazne",
    title: "Saobraćajna kazna i prinudna naplata",
    intro: "Neplaćena saobraćajna kazna može kasnije otvoriti pitanje prinudne naplate, troškova i dostavljanja.",
    points: [
      "Razdvojite prekršajni nalog, odluku o kazni i kasnije obaveštenje o naplati.",
      "Proverite datum događaja, datum uručenja i da li se podaci odnose baš na vas.",
      "Sačuvajte dokaz o uplati, zahtev za odlaganje, prigovor ili svu prepisku sa nadležnim organom.",
      "Ako je kazna već u naplati, tražite oznaku predmeta i tačan obračun ukupnog iznosa.",
    ],
    closing: "Kod saobraćajnih kazni posebno je važno da se ne mešaju različite faze postupka. Jedan papir ne govori uvek šta je sledeći pravni korak.",
  },
  {
    id: "zastarelost-duga",
    icon: Clock3,
    tag: "Rokovi i dokumentacija",
    title: "Da li je dug možda zastareo?",
    intro: "Zastarelost se ne procenjuje samo po tome koliko je vremena prošlo od poslednjeg računa.",
    points: [
      "Sastavite hronologiju: kada je obaveza nastala, kada je dospela i kada je bilo uplata ili opomena.",
      "Proverite da li je u međuvremenu pokrenut sudski ili izvršni postupak.",
      "Odvojite pitanje postojanja duga od pitanja mogućnosti prinudne naplate.",
      "Ne zaključujte da je dug zastareo bez uvida u dokumenta i konkretne rokove za taj tip potraživanja.",
    ],
    closing: "Zastarelost je oblast u kojoj jedan datum može da promeni procenu. Zato se uvek radi pregled cele dokumentacije, a ne samo poslednjeg računa.",
  },
  {
    id: "popis-i-prodaja-imovine",
    icon: ShieldCheck,
    tag: "Imovina i zaštita",
    title: "Popis ili najava prodaje imovine",
    intro: "Kada se pomene popis ili prodaja, važno je razlikovati stvar koja pripada dužniku od stvari koja je samo zatečena na adresi.",
    points: [
      "Pripremite račune, ugovore, garancije i druge dokaze o vlasništvu trećih lica.",
      "Zapišite šta je tačno navedeno u aktu i da li postoji rok za reakciju.",
      "Ne skrivajte, ne otuđujte i ne premeštajte imovinu na način koji može dodatno zakomplikovati predmet.",
      "Ako se radi o stanu, kući ili vozilu, tražite stručnu procenu pre bilo kakvog potpisa.",
    ],
    closing: "Kod imovine se ne rešava sve razgovorom na licu mesta. Dokumentacija i tačan status predmeta odlučuju šta se dalje može preduzeti.",
  },
];

const sourceUrl = "https://www.paragraf.rs/propisi/zakon_o_izvrsenju_i_obezbedjenju.html";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <section className="bg-[#091116] px-5 pb-16 pt-8 text-white sm:px-8 lg:px-12 lg:pb-24 lg:pt-10">
        <div className="mx-auto max-w-7xl">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"><ArrowLeft className="size-4" /> Nazad na početnu</a>
          <div className="mt-16 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-300/25 bg-red-300/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-red-100"><BookOpen className="size-4 text-red-300" /> Blog</div>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl">Šta se dešava i šta prvo proveriti.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">Jasan jezik za opomene, tužbe, izvršenje, blokade, saobraćajne kazne i druge situacije u kojima ljudi često reaguju tek kada rok već prolazi.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-12 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-950 sm:p-7">
          <div className="flex gap-4">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600" />
            <p className="text-sm leading-6"><strong>Važno:</strong> Blog je informativan. Rokovi i mogućnosti zavise od konkretnog dokumenta, datuma dostavljanja i vrste postupka. Ne objavljujte javno JMBG, broj računa, adresu ili fotografije dokumenata sa ličnim podacima.</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <article key={article.id} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_32px_rgba(15,23,42,0.04)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-2xl bg-red-50 text-red-700"><Icon className="size-5" /></span>
                  <span className="text-5xl font-semibold tracking-[-0.08em] text-slate-100">0{index + 1}</span>
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-red-700">{article.tag}</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em]">{article.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">{article.intro}</p>
                <a href={`#${article.id}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-red-700">Pročitajte tekst <ArrowRight className="size-4" /></a>
              </article>
            );
          })}
        </div>

        <div className="mt-20 space-y-8">
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <article id={article.id} key={article.id} className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
                <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-red-300"><Icon className="size-6" /></span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">{article.tag}</p>
                      <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-[-0.04em]">{article.title}</h2>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500"><Clock3 className="size-4" /> 3 min čitanja</span>
                </div>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">{article.intro}</p>
                <div className="mt-7 grid gap-3 md:grid-cols-2">
                  {article.points.map((point) => <p key={point} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" /> {point}</p>)}
                </div>
                <p className="mt-7 max-w-3xl border-l-2 border-red-300 pl-4 text-base leading-7 text-slate-600">{article.closing}</p>
                <p className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm leading-6 text-red-950"><strong>Napomena organizatora:</strong> U praksi se često pokazuje da građanin nije dovoljno zaštićen, dok javni izvršitelj ima široka zakonska ovlašćenja. Zato ovaj tekst nije konačan pravni zaključak — konkretan dokument, rok i postupak moraju se proveriti pojedinačno.</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl bg-[#102a32] p-7 text-white sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Izvor i sledeći korak</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Proverite svoj konkretan slučaj.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Tekstovi su početna orijentacija. Za vašu situaciju potrebni su konkretan dokument, datumi i podaci o predmetu.</p>
              <a href={sourceUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-200 hover:text-white">Tekst Zakona o izvršenju i obezbeđenju <ExternalLink className="size-4" /></a>
            </div>
            <a href="/provera-slucaja" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3.5 text-sm font-bold text-[#102a32] transition hover:bg-emerald-200">Proverite svoj slučaj <ArrowRight className="size-4" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
