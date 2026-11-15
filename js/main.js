/* riya's corner · little bits of life ✿ (you shouldn't need to edit this file) */
(function () {
  const S = window.SITE || {};
  const root = document.body.dataset.root || "";       // "" on top-level pages, "../" inside posts/
  const page = document.body.dataset.page || "";
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const SUNFLOWER = `
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g fill="#e3a935">${Array.from({ length: 12 }, (_, i) =>
        `<ellipse cx="20" cy="8" rx="3.6" ry="7.5" transform="rotate(${i * 30} 20 20)"/>`).join("")}</g>
      <circle cx="20" cy="20" r="7.5" fill="#6b4a2b"/>
      <circle cx="18" cy="18" r="1" fill="#8a6640"/><circle cx="22" cy="21" r="1" fill="#8a6640"/><circle cx="19" cy="22.5" r=".9" fill="#8a6640"/>
    </svg>`;
  window.SUNFLOWER = SUNFLOWER;

  /* ---------- header + footer (shared by every page) ---------- */
  const nav = [
    ["index.html", "home", "home"],
    ["shelf.html", "the shelf", "shelf"],
    ["writing.html", "writing", "writing"],
    ["about.html", "about me", "about"]
  ];
  const header = $("#site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <a class="logo" href="${root}index.html">${SUNFLOWER}<span>riya's corner</span></a>
      <nav class="nav" aria-label="main">
        ${nav.map(([href, label, key]) =>
          `<a href="${root}${href}" ${key === page ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
      </nav>`;
  }

  const footer = $("#site-footer");
  if (footer) {
    const L = S.links || {};
    const bits = [];
    if (L.email) bits.push(`<a href="mailto:${esc(L.email)}">say hi</a>`);
    if (L.instagram) bits.push(`<a href="${esc(L.instagram)}" target="_blank" rel="noopener">instagram</a>`);
    if (L.linkedin) bits.push(`<a href="${esc(L.linkedin)}" target="_blank" rel="noopener">the work-me, elsewhere ↗</a>`);
    footer.className = "site-footer";
    footer.innerHTML = `
      <div>made with chai, winter sun &amp; a lot of sunflowers ✿</div>
      ${bits.length ? `<div class="elsewhere">${bits.join(" · ")}</div>` : ""}`;
  }

  /* ---------- home: notes + sher card ---------- */
  const reading = $("#now-reading");
  if (reading) reading.textContent = S.currentlyReading || "";
  const repeat = $("#now-listening");
  if (repeat) repeat.textContent = S.onRepeat || "";

  const sherCard = $("#sher");
  if (sherCard && S.shers && S.shers.length) {
    let i = Math.floor(Math.random() * S.shers.length);
    const render = () => {
      const s = S.shers[i];
      sherCard.querySelector(".lines").innerHTML = `
        <div class="deva">${esc(s.deva).replace(/\n/g, "<br>")}</div>
        <div class="roman">${esc(s.roman)}</div>
        <div class="poet">${esc(s.poet)}</div>`;
    };
    render();
    const next = () => {
      sherCard.classList.add("fading");
      setTimeout(() => { i = (i + 1) % S.shers.length; render(); sherCard.classList.remove("fading"); }, 350);
    };
    sherCard.addEventListener("click", next);
    sherCard.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); next(); } });
  }

  /* ---------- shelf ---------- */
  const films = $("#films");
  if (films && S.films) {
    films.innerHTML = S.films.map((f) => `
      <div class="ticket">
        <div class="stub">admit one · ${esc(f.year)}</div>
        <div class="main"><span>now showing</span><strong>${esc(f.title)}</strong><em>${esc(f.note)}</em></div>
      </div>`).join("");
  }

  const shelf = $("#books");
  const bookNote = $("#book-note");
  if (shelf && S.books) {
    shelf.innerHTML = S.books.map((b, k) => `
      <button class="spine" style="--c:${esc(b.color)};--h:${Number(b.h) || 220}px" data-k="${k}"
        aria-label="${esc(b.title)} by ${esc(b.author)}">
        <span>${esc(b.title)}</span><small>${esc(b.author.split(" ").slice(-1)[0])}</small>
      </button>`).join("");
    shelf.addEventListener("click", (e) => {
      const btn = e.target.closest(".spine");
      if (!btn) return;
      shelf.querySelectorAll(".spine").forEach((s) => s.classList.toggle("open", s === btn));
      const b = S.books[btn.dataset.k];
      bookNote.innerHTML = `<strong>${esc(b.title)}</strong>${esc(b.author)} · ${esc(b.note)}`;
    });
  }

  const music = $("#music");
  if (music && S.music) {
    music.innerHTML = S.music.map((m) => `
      <div class="cassette">
        <div class="label"><strong>${esc(m.title)}</strong><span>${esc(m.sub)}</span></div>
        <div class="reels"><div class="reel"></div><div class="reel"></div></div>
      </div>`).join("");
  }

  const poets = $("#poets");
  if (poets && S.poets) {
    poets.innerHTML = S.poets.map((p, k) => `
      <div class="sticky ${k % 2 ? "sage" : ""}">${esc(p.name)}<em>${esc(p.note)}</em></div>`).join("");
  }

  /* ---------- writing ---------- */
  const list = $("#posts");
  if (list) {
    const posts = S.posts || [];
    const labels = { essay: "essay", review: "review", poem: "poem" };
    const draw = (kind) => {
      const shown = posts.filter((p) => kind === "all" || p.kind === kind);
      list.innerHTML = shown.length
        ? shown.map((p) => `
            <a class="post-card" href="${esc(p.url)}">
              <span class="kind">${esc(labels[p.kind] || p.kind)}</span>
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.blurb)}</p>
              <time>${esc(p.date)}</time>
            </a>`).join("")
        : `<p class="empty" style="grid-column:1/-1">nothing here yet, it's still being written ✎</p>`;
    };
    document.querySelectorAll(".tab").forEach((t) =>
      t.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach((x) => x.setAttribute("aria-pressed", x === t));
        draw(t.dataset.kind);
      }));
    draw("all");
  }

  /* little sunflowers wherever there's a .sf placeholder */
  document.querySelectorAll(".sf").forEach((el) => (el.innerHTML = SUNFLOWER));
})();
