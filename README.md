# riya's corner ✿

A cozy scrapbook-style personal site: films, books, poetry, and writing.
Plain HTML/CSS/JS, so there's nothing to install or build.

## Put it on GitHub Pages (5 minutes)
1. Make a new repo on GitHub. If you name it **`<your-username>.github.io`**, the site lives at `https://<your-username>.github.io`.
   (Any other name works too and lives at `https://<your-username>.github.io/<repo-name>/`.)
2. Upload **everything inside this folder** to the repo (drag-and-drop on github.com works: "Add file → Upload files").
   Keep the folder structure: `index.html` must be at the top level.
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
4. Wait about a minute, then open the link GitHub shows you. 🌻

## Making it yours
| what | where |
|---|---|
| films, books, music, poets, "currently reading", "on repeat", shers, links | `js/data.js` (the only file you really need to touch) |
| your photos | replace the files in `images/` and **keep the same names**: `me.jpg`, `hills.jpg`, `cozy.jpg`, `court.jpg`, `dress.jpg` (square-ish works best) |
| about-me letter + little facts + basketball bit | `about.html` |
| homepage greeting & sticky-note text | `index.html` |
| colours | top of `css/style.css` (`--sage`, `--butter`, etc.) |

## Writing a new post or poem
1. Copy `posts/_template.html` and rename it, e.g. `posts/winter-in-roorkee.html`.
2. Write inside it. Poems go in `<div class="poem">…</div>`, and line breaks are kept as you type them.
3. Add an entry to `posts` in `js/data.js`:
   ```js
   { title: "winter in roorkee", kind: "essay", date: "1 Dec 2026", blurb: "one line teaser", url: "posts/winter-in-roorkee.html" },
   ```
   `kind` is `"essay"`, `"review"` or `"poem"`, which decides which tab it shows under.
4. Commit/upload, and it's live.

## Preview on your laptop
Open `index.html` in a browser, or for the most accurate preview run `python3 -m http.server` in this folder and visit http://localhost:8000.
