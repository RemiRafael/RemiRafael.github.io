(function () {
  const S = SITE;
  const NON_ARTICLES = ["patent", "thesis"];   // hidden under the "Articles" filter
  const page = document.body.dataset.page;
  const main = document.getElementById("content");

  // Theme: from content.js, or temporarily from the page address (?theme=blueprint)
  const themeParam = new URLSearchParams(location.search).get("theme");
  document.documentElement.dataset.theme = themeParam || S.theme || "petrol";
  if (themeParam) {
    document.querySelectorAll(".nav a, .brand").forEach((a) => { a.href += "?theme=" + themeParam; });
  }

  // esc() for plain text; rich() for fields that may contain simple HTML written in content.js
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const rich = (s) => String(s ?? "");
  const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const external = (url) => /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "";
  const isVideo = (url) => /youtube\.com|youtu\.be/.test(url);
  const linkBtn = (l, cls = "btn ghost") => l.url
    ? `<a class="${cls}${isVideo(l.url) ? " video" : ""}" href="${esc(l.url)}"${external(l.url)}>${isVideo(l.url) ? "&#9654; " : ""}${esc(l.label)}</a>`
    : "";
  const img = (src, alt) => src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">` : "";

  document.getElementById("brand-name").innerHTML = `${esc(S.name)}<span>${esc(S.postnominal || "")}</span>`;
  document.querySelectorAll(`[data-nav="${page}"]`).forEach((a) => a.classList.add("active"));
  document.title = page === "home" ? document.title : `${document.title} | ${S.name}`;

  const contactLinks = [
    `<a href="#" data-contact>Email</a>`,
    ...S.links.filter((l) => l.url).map((l) => `<a href="${esc(l.url)}"${external(l.url)}>${esc(l.label)}</a>`),
  ].join("");
  document.getElementById("footer").innerHTML =
    `<div class="footer-links">${contactLinks}</div><p class="muted">© ${new Date().getFullYear()} ${esc(S.name)}</p>`;


  // Contact: the address is only decoded when a visitor clicks, then opened in their mail app and copied.
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-contact]");
    if (!link) return;
    event.preventDefault();
    const address = atob(S.emailEncoded || "").split("").reverse().join("");
    navigator.clipboard?.writeText(address).catch(() => {});
    let note = document.querySelector(".contact-note");
    if (!note) {
      note = document.createElement("div");
      note.className = "contact-note";
      document.body.appendChild(note);
    }
    note.innerHTML = `Opening your email app… <b>${esc(address)}</b> (copied)`;
    note.classList.add("show");
    setTimeout(() => note.classList.remove("show"), 6000);
    window.location.href = "mailto:" + address;
  });

  // Filter buttons: one generic implementation for every page
  function filterBar(values, attr, allLabel = "All", allExcludes = []) {
    return `<div class="filters" data-filter-attr="${attr}" data-all-excludes="${allExcludes.map(slug).join(",")}">
      <button class="chip active" data-value="all">${esc(allLabel)}</button>
      ${values.map((v) => `<button class="chip" data-value="${esc(slug(v))}">${esc(v)}</button>`).join("")}
    </div>`;
  }
  function activateFilters() {
    main.querySelectorAll(".filters").forEach((bar) => {
      const attr = bar.dataset.filterAttr;
      bar.addEventListener("click", (event) => {
        const chip = event.target.closest(".chip");
        if (!chip) return;
        bar.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
        const value = chip.dataset.value;
        const excluded = (bar.dataset.allExcludes || "").split(",").filter(Boolean);
        main.querySelectorAll(`[data-${attr}]`).forEach((el) => {
          const values = (el.dataset[attr] || "").split(" ");
          el.classList.toggle("is-hidden", value === "all" ? values.some((v) => excluded.includes(v)) : !values.includes(value));
        });
      });
      bar.querySelector('.chip[data-value="all"]').click();
      const wanted = decodeURIComponent(location.hash.slice(1));
      const chip = wanted && bar.querySelector(`.chip[data-value="${wanted}"]`);
      if (chip) chip.click();
    });
    const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      const go = () => target.scrollIntoView({ block: "start", behavior: "instant" });
      let userScrolled = false;
      ["wheel", "touchstart", "keydown"].forEach((ev) => window.addEventListener(ev, () => (userScrolled = true), { once: true }));
      [50, 400, 1200].forEach((ms) => setTimeout(() => !userScrolled && go(), ms));
      window.addEventListener("load", () => !userScrolled && go());
    }
  }

  function home() {
    const tiles = [
      ["research-cv.html", "Research CV", "Research fellow, postdoc and academic positions"],
      ["industry-cv.html", "Industry CV", "R&D, process and application engineering roles"],
      ["publications.html", "Publications", `${S.publications.filter((p) => !NON_ARTICLES.includes(p.status)).length} articles, patent and thesis – with graphical abstracts`],
      ["conferences.html", "Conferences", `${S.conferences.length} talks and posters – with videos`],
      ["projects.html", "Maker projects", `116 Thingiverse designs, Instructables tutorials and customizable models`],
    ];
    const layout = new URLSearchParams(location.search).get("layout") || S.homeLayout || "classic";
    const avatar = S.photo ? `<img class="avatar" src="${esc(S.photo)}" alt="${esc(S.name)}">` : "";
    const nameBlock = `<p class="eyebrow">${esc(S.tagline)}</p>
          <h1>${esc(S.name)}<span class="post">${esc(S.postnominal || "")}</span></h1>`;
    const actions = `<div class="hero-actions">
            <a class="btn" href="#" data-contact>Contact me</a>
            <a class="btn ghost light" href="research-cv.html">Research CV</a>
            <a class="btn ghost light" href="industry-cv.html">Industry CV</a>
          </div>`;
    const qr = `<div class="qr-card">
          <img src="images/qr-home.svg" alt="QR code to this website">
          <p><b>Scan to open on your phone</b><br><span>${esc((S.siteUrl || "").replace(/^https?:\/\//, ""))}</span></p>
        </div>`;
    const numbers = `<section class="numbers">
        ${(S.keyNumbers || []).map(([n, t, href]) => href
          ? `<a class="number-link" href="${esc(href)}"><strong>${esc(n)}</strong><span>${esc(t)}</span></a>`
          : `<div><strong>${esc(n)}</strong><span>${esc(t)}</span></div>`).join("")}
      </section>`;
    const intro = `<p class="intro">${rich(S.intro)}</p>
          <p class="work-right">${esc(S.workRight || "")}</p>`;
    let hero;
    if (layout === "side" || layout === "banner") {
      hero = `<section class="hero layout-${layout}">
        <div class="hero-text">
          <div class="hero-id">${avatar}<div>${nameBlock}</div></div>
          ${intro}
          ${actions}
        </div>
        ${qr}
        ${layout === "banner" ? numbers.replace('class="numbers"', 'class="numbers in-hero"') : ""}
      </section>`;
    } else if (layout === "profile") {
      hero = `<section class="hero layout-profile">
        <div class="hero-aside">${avatar}${qr}</div>
        <div class="hero-text">${nameBlock}${intro}${actions}</div>
      </section>`;
    } else {
      hero = `<section class="hero layout-classic">
        <div class="hero-text">${avatar}${nameBlock}${intro}${actions}</div>
        ${qr}
      </section>`;
    }
    main.innerHTML = `
      ${hero}
      ${layout === "banner" ? "" : numbers}
      <section class="tiles">
        ${tiles.map(([href, t, d]) => `<a class="tile" href="${href}"><h2>${t}</h2><p>${esc(d)}</p><span class="arrow">&rarr;</span></a>`).join("")}
      </section>`;
  }

  function cv(data, label) {
    const degrees = data.qualifications === "shared" ? S.degrees || [] : data.qualifications || [];
    main.innerHTML = `
      <section class="page-head"><p class="kicker">Curriculum vitae</p><h1>${label}</h1>
        <p>${esc(data.blurb || "")} <span class="muted">Updated ${esc(data.updated)}.</span></p></section>
      <div class="cv-actions">
        <a class="btn" href="${esc(data.pdf)}" target="_blank" rel="noopener">Open PDF</a>
        <a class="btn ghost" href="${esc(data.pdf)}" download>Download</a>
        ${(data.documents || []).map((d) => `<a class="btn ghost" href="${esc(d.url)}" target="_blank" rel="noopener">${esc(d.label)} (PDF)</a>`).join("")}
        <a class="btn ghost" href="#" data-contact>Contact me</a>
      </div>
      <section class="cv-summary${degrees.length ? "" : " single"}">
        <div class="card cv-box">
          <h2 class="box-title">${esc(data.highlightsTitle || "Highlights")}</h2>
          <ul class="highlights">${data.highlights.map((h) => `<li>${rich(h)}</li>`).join("")}</ul>
        </div>
        ${degrees.length ? `
        <div class="card cv-box degrees">
          <h2 class="box-title">${esc(data.qualificationsTitle || "Degrees")}</h2>
          <ul class="degree-list">${degrees.map(([d, where]) => `<li><strong>${esc(d)}</strong><span>${esc(where)}</span></li>`).join("")}</ul>
        </div>` : ""}
      </section>
      <section class="cv-pages">
        ${(data.previews || []).map((src, i) => `<a class="cv-page card" href="${esc(data.pdf)}" target="_blank" rel="noopener">
            <img src="${esc(src)}" alt="${label} – page ${i + 1}" loading="lazy"><span>Page ${i + 1}</span></a>`).join("")}
      </section>`;
  }

  function boldAuthor(authors) {
    const name = esc(S.authorName || "");
    return name ? esc(authors).split(name).join(`<b>${name}</b>`) : esc(authors);
  }

  function publications() {
    const statuses = [...new Set(S.publications.map((p) => p.status))];
    main.innerHTML = `
      <section class="page-head"><p class="kicker">Research</p><h1>Publications</h1>
        <p class="muted">* first / corresponding author. Published work links to the journal; unpublished work lists its available resources.</p>
        ${filterBar(statuses.filter((s) => !NON_ARTICLES.includes(s)).concat(statuses.filter((s) => NON_ARTICLES.includes(s))), "status", "Articles", NON_ARTICLES)}
      </section>
      <section class="pub-list">
        ${S.publications.map((p) => `
          <article class="pub card" data-status="${esc(slug(p.status))}">
            ${p.abstractImage ? `<a class="pub-image" href="${esc(p.abstractImage)}" target="_blank">${img(p.abstractImage, "Graphical abstract")}</a>` : ""}
            <div class="pub-body">
              <div class="meta"><span class="badge status-${esc(slug(p.status))}">${esc(p.status)}</span><span class="year">${esc(p.year)}</span></div>
              <h2>${rich(p.title)}</h2>
              <p class="authors">${boldAuthor(p.authors)} — <em>${esc(p.venue)}</em></p>
              <p>${rich(p.summary)}</p>
              ${p.details ? `<p class="pub-details">${rich(p.details)}</p>` : ""}
              <details><summary>Reference</summary><p class="ref">${esc(p.reference)}</p>
                <button class="copy" data-ref="${esc(p.reference)}">Copy reference</button></details>
              <div class="links">
                ${p.link ? linkBtn({ label: { patent: "View patent", thesis: "Read the thesis" }[p.status] || "Read the article", url: p.link }, "btn") : ""}
                ${(p.resources || []).map((r) => linkBtn(r)).join("")}
              </div>
            </div>
          </article>`).join("")}
      </section>`;
    activateFilters();
    main.querySelectorAll(".copy").forEach((b) => b.addEventListener("click", () => {
      navigator.clipboard?.writeText(b.dataset.ref);
      b.textContent = "Copied!";
    }));
  }

  function conferences() {
    const formats = [...new Set(S.conferences.map((c) => c.format))];
    main.innerHTML = `
      <section class="page-head"><p class="kicker">Research</p><h1>Conferences &amp; talks</h1>
        <p>Recorded talks are on my <a href="${esc(S.youtubeChannel)}" target="_blank" rel="noopener">YouTube channel</a>.</p>
        ${filterBar(formats, "format")}
      </section>
      <section class="timeline">
        ${S.conferences.map((c) => `
          <article class="talk card" data-format="${esc(slug(c.format))}">
            ${c.abstractImage ? `<a class="talk-abstract" href="${esc(c.abstractImage)}" target="_blank">${img(c.abstractImage, "Graphical abstract")}</a>` : ""}
            <div class="talk-year">${esc(c.year)}</div>
            <div class="talk-body">
              <span class="badge format-${esc(slug(c.format))}">${esc(c.format)}</span>
              <h2>${rich(c.title)}</h2>
              <p class="authors"><em>${esc(c.event)}</em>${c.place ? " · " + esc(c.place) : ""}</p>
              <div class="links">
                ${c.video ? linkBtn({ label: "Watch the talk", url: "https://www.youtube.com/watch?v=" + c.video }, "btn") : ""}
                ${(c.links || []).map((l) => linkBtn(l)).join("")}
              </div>
            </div>
            ${c.video ? `<a class="talk-thumb" href="https://www.youtube.com/watch?v=${esc(c.video)}" target="_blank" rel="noopener">
                <img src="https://i.ytimg.com/vi/${esc(c.video)}/hqdefault.jpg" alt="Video of the talk" loading="lazy"><span class="play">&#9654;</span></a>` : ""}
          </article>`).join("")}
      </section>`;
    activateFilters();
  }

  function projects() {
    const categories = [...new Set(S.projects.map((p) => p.category))];
    const OSHWA = "OSHWA certified";
    if (S.projects.some((p) => p.oshwa)) categories.push(OSHWA);
    main.innerHTML = `
      <section class="page-head"><p class="kicker">Open hardware</p><h1>Maker projects</h1>
        <p>Open-source hardware, tools and everyday designs – 116 designs on
          <a href="${esc(S.thingiverseProfile)}" target="_blank" rel="noopener">Thingiverse</a> (100,000+ downloads),
          step-by-step tutorials on <a href="${esc(S.instructablesProfile)}" target="_blank" rel="noopener">Instructables</a>
          and demonstrations on <a href="${esc(S.youtubeChannel)}" target="_blank" rel="noopener">YouTube</a>.</p>
      </section>
      <div class="projects-head"><p class="kicker">Featured</p><h2>All projects</h2>${filterBar(categories, "category")}</div>
      <section class="grid">
        ${S.projects.map((p) => `
          <article class="project card" data-category="${esc(slug(p.category))}${p.oshwa ? " " + slug(OSHWA) : ""}">
            <a class="project-image" href="${esc(p.links[0].url)}" target="_blank" rel="noopener">${img(p.image, p.title)}</a>
            <div class="project-body">
              <div class="meta"><span class="badge">${esc(p.category)}</span>${p.oshwa ? `<a class="badge cert" href="https://certification.oshwa.org/${esc(p.oshwa.toLowerCase())}.html" target="_blank" rel="noopener" title="OSHWA certificate">OSHWA ${esc(p.oshwa)}</a>` : ""}${p.likes ? `<span class="stat likes" title="Thingiverse likes">&#9829; ${esc(p.likes)}</span>` : ""}</div>
              <h2>${esc(p.title)}</h2>
              <p>${rich(p.description)}</p>
              <div class="links">${p.links.map((l, i) => linkBtn(l, i === 0 ? "btn small" : "btn ghost small")).join("")}</div>
            </div>
          </article>`).join("")}
      </section>
      <section class="more" id="all-designs">
        <div class="more-head">
          <div><p class="kicker">Thingiverse</p><h2>All other designs <span class="count">${S.moreDesigns.length}</span></h2></div>
          <input class="search" type="search" placeholder="Search designs…" aria-label="Search designs">
        </div>
        <div class="mini-grid">
          ${S.moreDesigns.map((d) => `
            <a class="mini card" href="${esc(d.url)}" target="_blank" rel="noopener" data-title="${esc(d.title.toLowerCase())}">
              ${d.image ? img(d.image, d.title) : `<span class="mini-placeholder">${esc(d.title)}</span>`}
              <span class="mini-title">${esc(d.title)}</span>
              <span class="mini-meta">${d.likes ? `<span class="likes" title="Thingiverse likes">&#9829; ${esc(d.likes)}</span>` : ""}${d.video ? ` <span class="mini-video" data-video="${esc(d.video)}">&#9654; video</span>` : ""}</span>
            </a>`).join("")}
        </div>
        <p class="center"><a class="btn ghost" href="${esc(S.thingiverseProfile)}" target="_blank" rel="noopener">Open my Thingiverse profile</a></p>
      </section>`;
    activateFilters();
    const search = main.querySelector(".search");
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      main.querySelectorAll(".mini").forEach((m) => m.classList.toggle("is-hidden", q && !m.dataset.title.includes(q)));
    });
    main.querySelectorAll(".mini-video").forEach((v) => v.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(v.dataset.video, "_blank", "noopener");
    }));
  }

  ({
    home,
    "research-cv": () => cv(S.researchCV, "Research CV"),
    "industry-cv": () => cv(S.industryCV, "Industry CV"),
    publications,
    conferences,
    projects,
  })[page]();
})();
