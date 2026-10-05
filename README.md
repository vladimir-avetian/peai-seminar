# Political Economy + AI

An online research seminar organised jointly by King's College London and
Université Paris-Dauphine – PSL.

Website: https://peai-seminar.org/

This is a standalone static website. No framework, package installation, build
step, API key, or paid server is needed. It is separate from the personal website
in `vladimir-avetian.github.io` and from the previous ChatGPT Sites deployment.

## Updating the programme

Edit `index.html` to change speakers, affiliations, dates, paper titles, contact
details, or text. Each session is an `<article>` inside `.programme`. Speaker
websites belong in the name's `href`; keep the `<time datetime="YYYY-MM-DD">`
attribute in sync with the visible date. Replace `Title TBA` when titles arrive.

Edit `styles.css` for presentation, or `title-words.js` for the title interaction.
Committing to the default `main` branch publishes through GitHub Pages. No
separate build command is required. Publication can take a few minutes.

To share maintenance, invite the co-organiser as a repository collaborator;
do not share account passwords or tokens.

## Title interaction

Words were extracted from past abstracts in the
[ACSS seminar archive](https://acss-dig.psl.eu/fr/seminaires/public-governance).
The same 366 words are shuffled in themed decks, with occasional short pairs.
No live AI service is used.

- Desktop and phone: ten words, 200 ms per word, then `?` for three seconds.
- Desktop hover: continuous switching while the pointer remains over the answer.
- Click, tap, Enter, or Space: pause/resume. Escape pauses on `?`.
- Reduced motion: no automatic switching; activate to show one word at a time.
- Hidden or offscreen: automatic switching stops until the title is visible again.

Content and links remain readable if JavaScript is disabled.

## Assets and hosting

The Source Serif 4 fonts are included locally with their SIL Open Font License
in `fonts/OFL.txt`. Institution logos keep the original institutions' image URLs.
They remain dependent on those external servers and retain their owners' rights.

All local assets use relative paths, so the site works both under
`/peai-seminar/` and at the root of the custom domain.

To preview, open `index.html` in a browser, or run a local static server from this
directory, for example `python3 -m http.server 8000`.

GitHub Pages settings: **Deploy from a branch → main → /(root)**.
The `.nojekyll` file prevents Jekyll processing.

The custom domain is `peai-seminar.org`, configured in this repository's Pages
settings and in `CNAME`. Porkbun manages its DNS:

- Root ALIAS → `vladimir-avetian.github.io` (Porkbun flattens this to IP addresses).
- `www` CNAME → `vladimir-avetian.github.io` (GitHub redirects to the root domain).
- Keep the `_github-pages-challenge-vladimir-avetian` TXT record: it verifies
  ownership with GitHub and helps prevent domain takeovers.

Do not add wildcard records or point DNS at a URL containing `/peai-seminar/`.
Keep GitHub Pages' **Enforce HTTPS** enabled once its certificate is issued.
For any future domain change, also update the canonical, Open Graph, and Twitter
URLs in `index.html`. Do not change the personal website repository's domain settings.
