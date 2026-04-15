// ============================================================
// NAVBAR — scroll hide/show, scrolled state, mobile menu
// ============================================================

// GANTI fungsi setupNavbar()
function setupNavbar() {
  const navbar  = document.getElementById("navbar");
  const catNav  = document.getElementById("catNav");
  const mobileMenu = document.getElementById("mobileMenu");
  let lastScrollY = window.scrollY;
  let ticking     = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          navbar.classList.add("hidden");
          catNav.classList.add("hidden");
          mobileMenu.classList.remove("open");
        } else {
          navbar.classList.remove("hidden");
          catNav.classList.remove("hidden");
        }

        navbar.classList.toggle("scrolled", currentScrollY > 40);
        lastScrollY = currentScrollY;
        ticking     = false;
      });
      ticking = true;
    }
  });
}

function setupMobileMenu() {
  const btn  = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");

  // toggle menu saat tombol hamburger diklik
  btn.addEventListener("click", () => menu.classList.toggle("open"));

  // tutup menu saat klik di luar area navbar dan menu
  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("open");
    }
  });
}

// --- Dark Mode Toggle ---
function setupDarkMode() {
  const btn  = document.getElementById("darkModeToggle");
  const body = document.body;

  // cek preferensi yang tersimpan di localStorage
  if (localStorage.getItem("zenlora-theme") === "dark") {
    body.classList.add("dark");
    btn.innerHTML = "&#9728;"; // ikon matahari saat dark mode aktif
  }

  btn.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");

    // ikon: bulan = light mode, matahari = dark mode
    btn.innerHTML = isDark ? "&#9728;" : "&#9790;";

    // simpan preferensi
    localStorage.setItem("zenlora-theme", isDark ? "dark" : "light");
  });
}