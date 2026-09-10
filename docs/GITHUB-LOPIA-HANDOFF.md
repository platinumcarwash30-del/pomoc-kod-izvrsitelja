# GitHub → Lopija handoff

## Trenutno stanje

- Radna grana: `feature/izvrsitelji-landing-page`
- Početna strana: `/`
- Vođeni pregled slučaja: `/provera-slucaja`
- Sites identitet je sačuvan u `.openai/hosting.json`.
- Kontakt podaci, konačno ime i domen još nisu zaključani.

## Kada bude spreman GitHub repo

Dodati repo kao `origin`, zatim poslati radnu granu:

```sh
git remote add origin <GITHUB_REPO_URL>
git push -u origin feature/izvrsitelji-landing-page
```

Pre produkcijskog prebacivanja potrebno je zameniti radni naziv, dodati stvarni kontakt, definisati naknadu i povezati bezbedan kanal za dokumenta.

## Lopija prebacivanje

1. Izabrati GitHub repo i granu koju Lopija preuzima.
2. Proveriti da početna strana i `/provera-slucaja` rade.
3. Povezati konačni domen `www.ime-sajta.rs`.
4. Tek nakon toga uključiti stvarni kontakt, uplatu i slanje dokumenata.
