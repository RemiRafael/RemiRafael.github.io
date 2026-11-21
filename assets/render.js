(function () {
  const S = SITE;
  const page = document.body.dataset.page;
  const main = document.getElementById("content");

  // esc() for plain text; rich() for fields that may contain simple HTML written in content.js
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const rich = (s) => String(s ?? "");
  const external = (url) => /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "";
  const linkBtn = (l, cls = "btn secondary") => l.url ? `<a class="${cls}" href="${esc(l.url)}"${external(l.url)}>${esc(l.label)}</a>` : "";
  const img = (src, alt, cls = "") => src
    ? `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
    : "";

  document.getElementById("brand-name").textContent = S.name;
  document.querySelectorAll(`[data-nav="${page}"]`).forEach((a) => a.classList.add("active"));
  document.title = `${document.title} | ${S.name}`;

  const contactLinks = [
    S.email && `<a href="mailto:${esc(S.email)}">Email</a>`,
    ...S.links.filter((l) => l.url).map((l) => `<a href="${esc(l.url)}"${external(l.url)}>${esc(l.label)}</a>`),
  ].filter(Boolean).join(" · ");
  document.getElementById("footer").innerHTML =
    `<p>${contactLinks}</p><p class="muted">${esc(S.email)} · © ${new Date().getFullYear()} ${esc(S.name)}</p>`;

  function home() {
    const tiles = [
      ["research-cv.html", "Research CV", "Research fellow, postdoc and academic positions"],
      ["industry-cv.html", "Industry CV", "R&D, process and application engineering roles"],
      ["publications.html", "Publications", `${S.publications.length} articles & patent, with graphical abstracts`],
      ["projects.html", "Maker projects", `${S.projects.length} open-source designs and tutorials`],
    ];
    main.innerHTML = `
      <section class="hero">
        ${S.photo ? `<img class="avatar" src="${esc(S.photo)}" alt="${esc(S.name)}">` : ""}
        <h1>${esc(S.name)}<span class="post">${esc(S.postnominal || "")}</span></h1>
        <p class="tagline">${esc(S.tagline)}</p>
        <p class="intro">${rich(S.intro)}</p>
        <p class="work-right">${esc(S.workRight || "")}</p>
        <p class="contact">${contactLinks}</p>
      </section>
      <section class="numbers">
        ${(S.keyNumbers || []).map(([n, t]) => `<div><strong>${esc(n)}</strong><span>${esc(t)}</span></div>`).join("")}
      </section>
      <section class="tiles">
        ${tiles.map(([href, t, d]) => `<a class="tile" href="${href}"><h2>${t}</h2><p>${esc(d)}</p></a>`).join("")}
      </section>`;
  }

  function cv(data, label) {
    main.innerHTML = `
      <section class="page-head"><h1>${label}</h1>
        <p>${esc(data.blurb || "")} <span class="muted">Updated ${esc(data.updated)}.</span></p></section>
      <div class="cv-actions">
        <a class="btn" href="${esc(data.pdf)}" target="_blank" rel="noopener">Open PDF</a>
        <a class="btn secondary" href="${esc(data.pdf)}" download>Download</a>
        <a class="btn secondary" href="mailto:${esc(S.email)}">Contact me</a>
      </div>
      <ul class="highlights">${data.highlights.map((h) => `<li>${rich(h)}</li>`).join("")}</ul>
      <object class="pdf-view" data="${esc(data.pdf)}" type="application/pdf">
        <p class="muted">The PDF preview is not available on this device – use "Open PDF" above.</p>
      </object>`;
  }

  function boldAuthor(authors) {
    const name = esc(S.authorName || "");
    return name ? esc(authors).split(name).join(`<b>${name}</b>`) : esc(authors);
  }

  function publications() {
    const statuses = [...new Set(S.publications.map((p) => p.status))];
    main.innerHTML = `
      <section class="page-head"><h1>Publications</h1>
        <p class="muted">* corresponding / first author. Links open the published version; unpublished work lists its available resources.</p>
        <div class="filters">
          <button class="chip active" data-filter="all">All</button>
          ${statuses.map((s) => `<button class="chip" data-filter="${esc(s)}">${esc(s)}</button>`).join("")}
        </div>
      </section>
      <section class="pub-list">
        ${S.publications.map((p) => `
          <article class="pub card ${p.abstractImage ? "" : "no-image"}" data-status="${esc(p.status)}">
            ${p.abstractImage ? `<a class="pub-image" href="${esc(p.abstractImage)}" target="_blank">${img(p.abstractImage, "Graphical abstract")}</a>` : ""}
            <div class="pub-body">
              <span class="badge status-${esc(p.status).replace(/\s+/g, "-")}">${esc(p.status)}</span>
              <span class="year">${esc(p.year)}</span>
              <h2>${rich(p.title)}</h2>
              <p class="muted">${boldAuthor(p.authors)} — <em>${esc(p.venue)}</em></p>
              <p>${rich(p.summary)}</p>
              <details><summary>Reference</summary><p class="ref">${esc(p.reference)}</p>
                <button class="copy" data-ref="${esc(p.reference)}">Copy reference</button></details>
              <div class="links">
                ${p.link ? linkBtn({ label: p.status === "patent" ? "View patent" : "Read the article", url: p.link }, "btn") : ""}
                ${(p.resources || []).map((r) => linkBtn(r)).join("")}
              </div>
            </div>
          </article>`).join("")}
      </section>`;
    setupFilter("pub", "status");
    main.querySelectorAll(".copy").forEach((b) => b.addEventListener("click", () => {
      navigator.clipboard?.writeText(b.dataset.ref);
      b.textContent = "Copied!";
    }));
  }

  function projects() {
    const categories = [...new Set(S.projects.map((p) => p.category))];
    main.innerHTML = `
      <section class="page-head"><h1>Maker projects</h1>
        <p>Open-source hardware and everyday designs – 100+ designs with more than 100,000 downloads.
          Full collections on
          <a href="${esc(S.thingiverseProfile)}" target="_blank" rel="noopener">Thingiverse</a> and
          <a href="${esc(S.instructablesProfile)}" target="_blank" rel="noopener">Instructables</a>.</p>
        <div class="filters">
          <button class="chip active" data-filter="all">All</button>
          ${categories.map((c) => `<button class="chip" data-filter="${esc(c)}">${esc(c)}</button>`).join("")}
        </div>
      </section>
      <section class="grid">
        ${S.projects.map((p) => `
          <article class="project card" data-category="${esc(p.category)}">
            <a href="${esc(p.links[0].url)}" target="_blank" rel="noopener">${img(p.image, p.title)}</a>
            <div class="project-body">
              <span class="badge">${esc(p.category)}</span>
              <h2>${esc(p.title)}</h2>
              <p>${rich(p.description)}</p>
              <div class="links">${p.links.map((l, i) => linkBtn(l, i === 0 ? "btn small" : "btn secondary small")).join("")}</div>
            </div>
          </article>`).join("")}
      </section>`;
    setupFilter("project", "category");
  }

  function setupFilter(itemClass, attr) {
    main.querySelectorAll(".chip").forEach((chip) => chip.addEventListener("click", () => {
      main.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const f = chip.dataset.filter;
      main.querySelectorAll("." + itemClass).forEach((el) => { el.hidden = f !== "all" && el.dataset[attr] !== f; });
    }));
  }

  ({
    home,
    "research-cv": () => cv(S.researchCV, "Research CV"),
    "industry-cv": () => cv(S.industryCV, "Industry CV"),
    publications,
    projects,
  })[page]();
})();
