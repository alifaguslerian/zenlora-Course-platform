// ============================================================
// CATEGORY PAGE — baca URL param, render hero & kursus
// ============================================================

// --- Data per kategori ---
const CAT_META = {
  coding: {
    label:    "Coding",
    icon:     "{ }",
    sub:      "Kuasai pemrograman dari dasar hingga level profesional. Web, backend, algoritma, dan banyak lagi.",
    color:    "cat-coding",
  },
  desain: {
    label:    "Desain",
    icon:     "UI",
    sub:      "Pelajari desain produk digital dari wireframe hingga design system yang siap produksi.",
    color:    "cat-desain",
  },
  bisnis: {
    label:    "Bisnis",
    icon:     "$",
    sub:      "Strategi bisnis, pemasaran digital, e-commerce, dan kewirausahaan untuk semua level.",
    color:    "cat-bisnis",
  },
  data: {
    label:    "Data Science",
    icon:     "DS",
    sub:      "Analisis data, visualisasi, machine learning, dan business intelligence dari nol hingga mahir.",
    color:    "cat-data",
  },
  ai: {
    label:    "AI & ML",
    icon:     "AI",
    sub:      "Artificial Intelligence, Machine Learning, Deep Learning, dan Prompt Engineering terkini.",
    color:    "cat-ai",
  },
  game: {
    label:    "Game Dev",
    icon:     "GD",
    sub:      "Buat game 2D dan 3D profesional dengan Unity, Unreal Engine, dan Godot.",
    color:    "cat-game",
  },
  mobile: {
    label:    "Mobile Dev",
    icon:     "APP",
    sub:      "Kembangkan aplikasi iOS dan Android dengan Flutter, React Native, dan Swift.",
    color:    "cat-mobile",
  },
};

// --- Baca parameter dari URL ---
const params      = new URLSearchParams(window.location.search);
const currentCat  = params.get("cat") || "coding";
const meta        = CAT_META[currentCat] || CAT_META["coding"];

// --- Set active tab di cat-nav ---
document.querySelectorAll(".cat-tab[data-cat]").forEach(tab => {
  if (tab.dataset.cat === currentCat) tab.classList.add("active");
});

// --- Set judul halaman ---
document.title = `Zenlora — ${meta.label}`;

// --- Render hero ---
function renderCatHero() {
  const hero = document.getElementById("catHero");
  hero.classList.add(meta.color);

  document.getElementById("catBreadcrumb").textContent   = meta.label;
  document.getElementById("catHeroIcon").textContent     = meta.icon;
  document.getElementById("catHeroTitle").textContent    = meta.label;
  document.getElementById("catHeroSub").textContent      = meta.sub;
  document.getElementById("catSectionTitle").textContent = `Kursus ${meta.label}`;

  // hitung stats dari data
  const catCourses   = COURSES.filter(c => c.category === currentCat);
  const totalStudents = catCourses.reduce((sum, c) => sum + (c.students || 0), 0);
  const avgRating    = catCourses.length
    ? (catCourses.reduce((sum, c) => sum + (c.rating || 0), 0) / catCourses.length).toFixed(1)
    : "-";

  document.getElementById("catHeroStats").innerHTML = `
    <div class="cat-stat">
      <span class="cat-stat-num">${catCourses.length}</span>
      <span class="cat-stat-label">Kursus</span>
    </div>
    <div class="cat-stat">
      <span class="cat-stat-num">${totalStudents.toLocaleString("id-ID")}+</span>
      <span class="cat-stat-label">Pelajar</span>
    </div>
    <div class="cat-stat">
      <span class="cat-stat-num">${avgRating}</span>
      <span class="cat-stat-label">Avg Rating</span>
    </div>
  `;
}

// --- Override filter: paksa ke kategori ini, nonaktifkan tab filter ---
// courses.js pakai currentCategory, kita set lewat override
document.addEventListener("DOMContentLoaded", () => {
  renderCatHero();

  // set currentCategory dari courses.js ke kategori ini
  // courses.js expose currentCategory sebagai var biasa jadi bisa langsung diset
  currentCategory = currentCat;
  displayCount    = 12; // tampilkan lebih banyak di halaman kategori
  renderCourses();

  // setup fitur lainnya
  setupNavbar();
  setupMobileMenu();
  setupDarkMode();
  setupViewToggle();
  setupSearch();
  setupModal();
  setupLoadMore();
  animateOnScroll();

  // sort
  document.getElementById("sortSelect").addEventListener("change", renderCourses);
});

// override setupSearch agar tetap filter per kategori
function setupSearch() {
  let timeout;
  document.getElementById("searchInput").addEventListener("input", (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      renderCourses(e.target.value.trim().toLowerCase());
    }, 300);
  });
}