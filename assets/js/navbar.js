// ============================================================
// NAVBAR — scroll hide/show, scrolled state, mobile menu
// ============================================================

function setupNavbar() {
  const navbar     = document.getElementById("navbar");
  const mobileMenu = document.getElementById("mobileMenu");
  let lastScrollY  = window.scrollY;
  let ticking      = false;

  window.addEventListener("scroll", () => {
    // requestAnimationFrame agar tidak boros performa
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // sembunyikan navbar saat scroll ke bawah lebih dari 80px
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          navbar.classList.add("hidden");
          // tutup mobile menu jika navbar disembunyikan
          mobileMenu.classList.remove("open");
        } else {
          navbar.classList.remove("hidden");
        }

        // tambahkan shadow saat halaman sudah di-scroll
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