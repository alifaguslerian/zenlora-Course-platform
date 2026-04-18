// ============================================================
// MAIN — entry point, init semua fitur saat DOM siap,
//        particles, toast, scroll animation
// ============================================================

// --- Init: panggil semua setup saat halaman selesai dimuat ---
document.addEventListener("DOMContentLoaded", () => {
  createParticles();    // hero background particles
  renderCourses();      // tampilkan daftar kursus (courses.js)
  renderInstructors();  // tampilkan daftar instruktur (courses.js)
  setupNavbar();        // scroll hide/show navbar (navbar.js)
  setupMobileMenu();    // hamburger toggle (navbar.js)
  setupFilters();       // filter tab kursus (courses.js)
  setupViewToggle();    // grid/list view (courses.js)
  setupSearch();        // search bar (courses.js)
  setupModal();         // modal detail kursus (modal.js)
  setupLoadMore();      // tombol muat lebih banyak (courses.js)
  setupDarkMode();     // toggle dark mode (navbar.js)
  setupPromo();     // scroll promo strip & countdown timer (promo.js)
  setupMarquee();   // setup marquee (marquee.js)
  animateOnScroll();    // fade-in saat elemen masuk viewport
  setupCourseScroll();  // tombol scroll horizontal untuk section rekomendasi
});

// --- Course Horizontal Scroll Controls ---
function setupCourseScroll() {
  const wrapper = document.getElementById("courseGridWrapper");
  const btnL    = document.getElementById("scrollLeft");
  const btnR    = document.getElementById("scrollRight");
  if (!wrapper || !btnL || !btnR) return;

  const AMOUNT = 480;

  btnL.addEventListener("click", () => {
    wrapper.scrollBy({ left: -AMOUNT, behavior: "smooth" });
  });
  btnR.addEventListener("click", () => {
    wrapper.scrollBy({ left: AMOUNT, behavior: "smooth" });
  });
}

// --- Marquee: duplikat konten agar loop seamless ---
function setupMarquee() {
  const track = document.getElementById("marqueeTrack");
  if (!track) return;

  // clone semua card dan append lagi
  // sehingga saat animasi sampai -50% terasa seamless
  const cards = Array.from(track.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });
}


// --- Particles: titik-titik melayang di hero ---
function createParticles() {
  const container = document.getElementById("particles");

  for (let i = 0; i < 18; i++) {
    const p    = document.createElement("div");
    p.className = "particle";
    const size  = Math.random() * 4 + 2;

    p.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${Math.random() * 100}%`,
      `animation-duration:${Math.random() * 12 + 8}s`,
      `animation-delay:${Math.random() * 8}s`,
    ].join(";");

    container.appendChild(p);
  }
}

// --- Toast Notification ---
// dipanggil dari file lain: showToast("pesan")
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");

  // reset timer jika toast dipanggil lagi sebelum hilang
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove("show"), 3000);
}

// --- Scroll Animation: fade-in saat elemen masuk viewport ---
function animateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = "1";
        entry.target.style.transform  = "translateY(0)";
        observer.unobserve(entry.target); // cukup animasi sekali
      }
    });
  }, { threshold: 0.1 });

  // elemen yang akan dianimasikan saat muncul di layar
  document.querySelectorAll(".section-header, .instructor-card").forEach(el => {
    el.style.opacity    = "0";
    el.style.transform  = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

