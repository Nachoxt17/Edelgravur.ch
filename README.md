# Edelgravur.ch

Landing page for **Edelgravur** — a mobile laser-engraving service for hotels
and fine kitchens in Switzerland. Built as a simple static website (plain
HTML, CSS and a little JavaScript) so it can be hosted for free on GitHub Pages
and edited by hand.

---

## What's in this project

```
index.html          The whole page (structure + comments explaining each part)
css/styles.css      All styling — colours & fonts are variables at the very top
js/i18n.js          All the text, in 4 languages (DE / FR / IT / EN) + the
                    language switcher and mobile menu
assets/             Your 3 photos go here (see assets/README.md for file names)
CNAME               The custom domain (edelgravur.ch) for GitHub Pages
.nojekyll           Tells GitHub Pages to serve the files as-is
```

The site is **responsive** (works on phones and computers) and available in
**German, French, Italian and English**. It picks the visitor's browser
language automatically and remembers any manual choice.

---

## How to edit the content

### Change wording
All text lives in **`js/i18n.js`**, grouped by language. Find the phrase you
want, edit it, and save. English (`en`) is the "source of truth" — if you add
or change something, update the same key in all four languages.

### Change colours or fonts
Open **`css/styles.css`** and look at the `:root { ... }` block at the top.
Every colour and font is a named variable there (e.g. `--gold`, `--bg`).

### Add the photos
See **`assets/README.md`**. Drop three images into the `assets/` folder using
the exact file names listed there. Until you do, the page still looks clean.

### Preview locally
Just open `index.html` in a web browser (double-click it). No build step, no
tools to install. For the language switch and photos to behave exactly like
online, you can optionally run a tiny local server:

```bash
# from inside this folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

---

## Publishing on GitHub Pages with your GoDaddy domain

You only do this setup once.

### 1. Push this repository to GitHub
Commit everything and push it to a GitHub repository (any name is fine).

### 2. Turn on GitHub Pages
In the repository: **Settings → Pages**
- **Source:** *Deploy from a branch*
- **Branch:** `main` (or `claude/edelgravur-landing-page-cs6sai`) and folder `/ (root)`
- Save. After a minute your site is live at `https://<username>.github.io/<repo>/`.

### 3. Connect the domain `edelgravur.ch`
Still in **Settings → Pages**, under **Custom domain**, enter `edelgravur.ch`
and save. (The `CNAME` file in this repo already contains this domain.)
Then tick **Enforce HTTPS** once it becomes available.

### 4. Point GoDaddy's DNS at GitHub
Log in to GoDaddy → your domain → **DNS / Manage DNS**, and set:

**Four `A` records** for the root domain (Host = `@`):

| Type | Host | Value             |
|------|------|-------------------|
| A    | @    | 185.199.108.153   |
| A    | @    | 185.199.109.153   |
| A    | @    | 185.199.110.153   |
| A    | @    | 185.199.111.153   |

**One `CNAME` record** for the `www` subdomain:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| CNAME | www  | `<username>.github.io`   |

Replace `<username>` with your GitHub username. Remove any old parked-page
records GoDaddy added. DNS changes can take a few minutes up to a day to apply.

That's it — once DNS propagates, `https://edelgravur.ch` shows your site.

---

## Notes
- No accounts, forms or third-party services are required; the contact section
  uses plain clickable email and phone links.
- Everything is commented so you can maintain it yourself later.
