const COURSES = [
  {
    id: 1, category: "coding", catLabel: "Coding",
    title: "Full Stack Web Development dengan React dan Node.js",
    instructor: "Budi Santoso", instructorAvatar: "A",
    emoji: "W", color: "#dbeafe",
    rating: 4.9, ratingCount: 3241, students: 12800,
    duration: "48 jam", lessons: 210, level: "Pemula ke Lanjut",
    price: 249000, originalPrice: 599000,
    badge: "bestseller", badgeLabel: "Bestseller",
    desc: "Kuasai Full Stack Development dari nol. Pelajari React, Node.js, Express, MongoDB, dan deploy ke production. Lebih dari 200 video berkualitas tinggi dengan proyek nyata.",
    features: ["200+ video HD", "Sertifikat resmi", "Akses seumur hidup", "Grup Discord eksklusif", "48 jam konten", "Update seumur hidup"]
  },
  {
    id: 2, category: "desain", catLabel: "Desain",
    title: "UI/UX Design Mastery: Figma, Prototyping dan Design System",
    instructor: "Sari Putri", instructorAvatar: "B",
    emoji: "D", color: "#ede9fe",
    rating: 4.8, ratingCount: 1876, students: 7400,
    duration: "32 jam", lessons: 145, level: "Semua Level",
    price: 199000, originalPrice: 449000,
    badge: "hot", badgeLabel: "Populer",
    desc: "Belajar desain UI/UX profesional dari awal hingga mahir. Figma, user research, wireframing, prototyping, dan cara presentasi desain ke klien.",
    features: ["145+ video HD", "File Figma template", "Proyek nyata", "Mentoring 1-on-1", "Komunitas aktif", "Sertifikat resmi"]
  },
  {
    id: 3, category: "ai", catLabel: "AI & ML",
    title: "Machine Learning dan AI dengan Python: Zero to Hero",
    instructor: "Dr. Ahmad Fauzi", instructorAvatar: "C",
    emoji: "AI", color: "#cffafe",
    rating: 4.9, ratingCount: 2105, students: 9200,
    duration: "55 jam", lessons: 280, level: "Menengah",
    price: 329000, originalPrice: 699000,
    badge: "bestseller", badgeLabel: "Bestseller",
    desc: "Pelajari Machine Learning, Deep Learning, dan Computer Vision menggunakan Python, TensorFlow, dan PyTorch. Termasuk proyek AI nyata yang bisa masuk portfolio.",
    features: ["280+ video HD", "Dataset eksklusif", "GPU access 100 jam", "Sertifikat + LinkedIn", "Proyek portfolio", "Career support"]
  },
  {
    id: 4, category: "bisnis", catLabel: "Bisnis",
    title: "Digital Marketing Masterclass: SEO, Ads dan Content Strategy",
    instructor: "Rina Dewi", instructorAvatar: "D",
    emoji: "M", color: "#fef9c3",
    rating: 4.7, ratingCount: 1543, students: 5600,
    duration: "28 jam", lessons: 120, level: "Pemula",
    price: 0, originalPrice: 299000,
    badge: "free", badgeLabel: "Gratis",
    desc: "Strategi digital marketing lengkap: SEO, Google Ads, Meta Ads, email marketing, dan content strategy. Cocok untuk pemilik bisnis dan marketer pemula.",
    features: ["120+ video", "Template marketing", "Checklist SEO", "Studi kasus nyata", "Forum diskusi", "Sertifikat gratis"]
  },
  {
    id: 5, category: "data", catLabel: "Data Science",
    title: "Data Science dengan Python: Analisis, Visualisasi dan Dashboard",
    instructor: "Hendra Kurnia", instructorAvatar: "E",
    emoji: "DS", color: "#ffedd5",
    rating: 4.8, ratingCount: 987, students: 3800,
    duration: "38 jam", lessons: 165, level: "Menengah",
    price: 279000, originalPrice: 549000,
    badge: "new", badgeLabel: "Baru",
    desc: "Kuasai Data Science dari pengolahan data, visualisasi, hingga membangun dashboard interaktif dengan Python, Pandas, Matplotlib, Seaborn, dan Plotly.",
    features: ["165+ video HD", "Dataset real-world", "Jupyter notebooks", "Power BI bonus", "Portofolio project", "Sertifikat resmi"]
  },
  {
    id: 6, category: "game", catLabel: "Game Dev",
    title: "Unity Game Development: Buat Game 3D dari Nol",
    instructor: "Fajar Ramadhan", instructorAvatar: "F",
    emoji: "G", color: "#fce7f3",
    rating: 4.9, ratingCount: 2234, students: 8100,
    duration: "42 jam", lessons: 190, level: "Pemula ke Pro",
    price: 289000, originalPrice: 649000,
    badge: "hot", badgeLabel: "Populer",
    desc: "Buat game 3D profesional dengan Unity. Pelajari C#, physics, animasi, UI, monetisasi, dan publish ke Play Store dan App Store. Termasuk 5 game mini project.",
    features: ["190+ video HD", "Asset pack gratis", "5 game project", "Publish ke store", "Update seumur hidup", "Komunitas gamedev"]
  },
  {
    id: 7, category: "coding", catLabel: "Coding",
    title: "Flutter dan Dart: Buat Aplikasi iOS dan Android Sekaligus",
    instructor: "Kevin Pratama", instructorAvatar: "G",
    emoji: "FL", color: "#dbeafe",
    rating: 4.8, ratingCount: 1320, students: 5200,
    duration: "35 jam", lessons: 155, level: "Pemula",
    price: 219000, originalPrice: 479000,
    badge: "updated", badgeLabel: "Diperbarui",
    desc: "Pelajari Flutter dari dasar hingga mahir. Buat aplikasi cross-platform yang berjalan mulus di iOS dan Android dengan satu codebase menggunakan Dart.",
    features: ["155+ video HD", "Template UI kit", "REST API integration", "Firebase backend", "Publish ke store", "Sertifikat resmi"]
  },
  {
    id: 8, category: "desain", catLabel: "Desain",
    title: "Ilustrasi Digital dan Branding dengan Adobe Illustrator",
    instructor: "Maya Susanti", instructorAvatar: "H",
    emoji: "IL", color: "#ede9fe",
    rating: 4.7, ratingCount: 876, students: 3100,
    duration: "22 jam", lessons: 95, level: "Pemula ke Menengah",
    price: 159000, originalPrice: 349000,
    badge: "new", badgeLabel: "Baru",
    desc: "Kuasai Adobe Illustrator untuk membuat logo, ilustrasi, dan identitas brand profesional. Termasuk proyek branding lengkap dari konsep hingga final.",
    features: ["95+ video HD", "Template premium", "Brush pack gratis", "Proyek portofolio", "Feedback desain", "Sertifikat resmi"]
  },
  {
    id: 9, category: "ai", catLabel: "AI & ML",
    title: "ChatGPT dan Prompt Engineering: Kuasai AI untuk Bisnis",
    instructor: "Indra Wijaya", instructorAvatar: "I",
    emoji: "PE", color: "#cffafe",
    rating: 4.6, ratingCount: 3455, students: 15200,
    duration: "18 jam", lessons: 80, level: "Semua Level",
    price: 0, originalPrice: 199000,
    badge: "free", badgeLabel: "Gratis",
    desc: "Pelajari cara menggunakan ChatGPT, Claude, Gemini, dan AI tools lainnya secara produktif untuk bisnis, coding, penulisan, dan otomasi kerja sehari-hari.",
    features: ["80+ video HD", "100+ prompt template", "AI tools list", "Update mingguan", "Grup komunitas", "Sertifikat gratis"]
  },
  {
    id: 10, category: "bisnis", catLabel: "Bisnis",
    title: "Bisnis Online dan E-commerce: Dari Nol ke Profit",
    instructor: "Toni Handoko", instructorAvatar: "J",
    emoji: "EC", color: "#fef9c3",
    rating: 4.7, ratingCount: 1987, students: 7800,
    duration: "30 jam", lessons: 130, level: "Pemula",
    price: 189000, originalPrice: 399000,
    badge: "bestseller", badgeLabel: "Bestseller",
    desc: "Panduan lengkap memulai dan mengembangkan bisnis online: dropshipping, marketplace, Shopify, branding, dan strategi pemasaran yang terbukti menghasilkan.",
    features: ["130+ video HD", "Template bisnis plan", "Legal startup guide", "Kalkulasi keuangan", "Mentoring grup", "Sertifikat resmi"]
  },
  {
    id: 11, category: "data", catLabel: "Data Science",
    title: "SQL dan Database: Analisis Data untuk Pemula",
    instructor: "Agus Setiawan", instructorAvatar: "K",
    emoji: "SQL", color: "#ffedd5",
    rating: 4.8, ratingCount: 1234, students: 4600,
    duration: "20 jam", lessons: 90, level: "Pemula",
    price: 129000, originalPrice: 299000,
    badge: "hot", badgeLabel: "Populer",
    desc: "Kuasai SQL dari dasar: query data, JOIN, subquery, window functions, dan analisis data bisnis. Cocok untuk calon data analyst dan business intelligence.",
    features: ["90+ video HD", "Database real", "Latihan soal 200+", "Project analisis", "Komunitas aktif", "Sertifikat resmi"]
  },
  {
    id: 12, category: "coding", catLabel: "Coding",
    title: "Cybersecurity dan Ethical Hacking untuk Pemula",
    instructor: "Rizky Hasan", instructorAvatar: "L",
    emoji: "CS", color: "#dbeafe",
    rating: 4.9, ratingCount: 2876, students: 11200,
    duration: "50 jam", lessons: 230, level: "Pemula ke Lanjut",
    price: 319000, originalPrice: 699000,
    badge: "bestseller", badgeLabel: "Bestseller",
    desc: "Pelajari ethical hacking, penetration testing, keamanan jaringan, dan cara melindungi sistem dari serangan. Persiapan sertifikasi CEH dan CompTIA Security+.",
    features: ["230+ video HD", "Lab virtual gratis", "CTF challenges", "Tools hacking legal", "Career roadmap", "Sertifikat resmi"]
  },
];

const INSTRUCTORS = [
  { name: "Budi Santoso", specialty: "Full Stack Developer", avatar: "BS", courses: 8, students: "28K", rating: "4.9" },
  { name: "Sari Putri", specialty: "UI/UX Designer", avatar: "SP", courses: 5, students: "15K", rating: "4.8" },
  { name: "Dr. Ahmad Fauzi", specialty: "AI & Data Scientist", avatar: "AF", courses: 12, students: "42K", rating: "4.9" },
  { name: "Rina Dewi", specialty: "Digital Marketer", avatar: "RD", courses: 6, students: "22K", rating: "4.7" },
  { name: "Kevin Pratama", specialty: "Mobile Developer", avatar: "KP", courses: 4, students: "11K", rating: "4.8" },
  { name: "Fajar Ramadhan", specialty: "Game Developer", avatar: "FR", courses: 7, students: "19K", rating: "4.9" },
];

const TESTIMONIALS = [
  { rating: 5, text: "Platform terbaik yang pernah saya coba. Materi sangat lengkap dan instrukturnya menjelaskan dengan sangat mudah dipahami. Berhasil mendapat pekerjaan di startup setelah lulus kursus Web Dev.", name: "Arif Rahman", role: "Frontend Developer", avatar: "AR" },
  { rating: 5, text: "Kursus UI/UX sangat luar biasa. Dari yang tidak tahu Figma sama sekali, sekarang sudah bisa menangani proyek desain sendiri. Investasi yang sangat worth it.", name: "Dewi Anggraini", role: "UI Designer Freelance", avatar: "DA" },
  { rating: 5, text: "Awalnya ragu belajar AI tapi ternyata materinya dijelaskan dengan sangat sistematis. Sekarang sudah bisa membuat model machine learning sendiri untuk kebutuhan kantor.", name: "Hasan Basri", role: "Data Scientist", avatar: "HB" },
  { rating: 4, text: "Kursus Digital Marketing gratisnya sangat bermanfaat. Langsung bisa dipraktikkan ke bisnis online saya. Omzet naik signifikan dalam dua bulan pertama.", name: "Sinta Maharani", role: "Pemilik Bisnis Online", avatar: "SM" },
  { rating: 5, text: "Instruktur responsif dan komunitas Discord sangat aktif. Setiap kali ada kendala selalu ada yang membantu. Pengalaman belajar terbaik yang pernah saya rasakan.", name: "Dito Prasetya", role: "Backend Developer", avatar: "DP" },
  { rating: 5, text: "Kursus game development sangat lengkap dan terstruktur. Dalam tiga bulan sudah berhasil mempublikasikan game pertama di Play Store. Mimpi yang akhirnya terwujud.", name: "Gilang Saputra", role: "Indie Game Developer", avatar: "GS" },
];

let currentCategory = "semua";
let currentView = "grid";
let wishlist = new Set();
let displayCount = 6;

document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  renderCourses();
  renderInstructors();
  renderTestimonials();
  setupNavbar();
  setupFilters();
  setupViewToggle();
  setupSearch();
  setupModal();
  setupMobileMenu();
  setupLoadMore();
  animateOnScroll();
});

function createParticles() {
  const container = document.getElementById("particles");
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 4 + 2;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;animation-duration:${Math.random() * 12 + 8}s;animation-delay:${Math.random() * 8}s;`;
    container.appendChild(p);
  }
}

function setupNavbar() {
  window.addEventListener("scroll", () => {
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 40);
  });
}

function setupMobileMenu() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  btn.addEventListener("click", () => menu.classList.toggle("open"));
  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) menu.classList.remove("open");
  });
}

function setupFilters() {
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.dataset.cat;
      displayCount = 6;
      renderCourses();
    });
  });
  document.getElementById("sortSelect").addEventListener("change", renderCourses);
}

function setupViewToggle() {
  document.getElementById("viewGrid").addEventListener("click", () => {
    currentView = "grid";
    document.getElementById("viewGrid").classList.add("active");
    document.getElementById("viewList").classList.remove("active");
    document.getElementById("courseGrid").classList.remove("list-view");
  });
  document.getElementById("viewList").addEventListener("click", () => {
    currentView = "list";
    document.getElementById("viewList").classList.add("active");
    document.getElementById("viewGrid").classList.remove("active");
    document.getElementById("courseGrid").classList.add("list-view");
  });
}

function setupSearch() {
  let timeout;
  document.getElementById("searchInput").addEventListener("input", (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => renderCourses(e.target.value.trim().toLowerCase()), 300);
  });
}

function setupLoadMore() {
  document.getElementById("loadMoreBtn").addEventListener("click", () => {
    displayCount += 3;
    renderCourses();
  });
}

function renderCourses(searchQuery = "") {
  const grid = document.getElementById("courseGrid");
  const sortVal = document.getElementById("sortSelect").value;

  let filtered = COURSES.filter(c => {
    const catMatch = currentCategory === "semua" || c.category === currentCategory;
    const searchMatch = !searchQuery ||
      c.title.toLowerCase().includes(searchQuery) ||
      c.instructor.toLowerCase().includes(searchQuery) ||
      c.catLabel.toLowerCase().includes(searchQuery);
    return catMatch && searchMatch;
  });

  const sortFns = {
    popular: (a, b) => b.students - a.students,
    newest: (a, b) => b.id - a.id,
    rating: (a, b) => b.rating - a.rating,
    "price-low": (a, b) => a.price - b.price,
  };
  filtered.sort(sortFns[sortVal] || sortFns.popular);

  const total = filtered.length;
  const shown = filtered.slice(0, displayCount);
  document.getElementById("resultCount").textContent = `Menampilkan ${Math.min(displayCount, total)} dari ${total} kursus`;
  document.getElementById("loadMoreBtn").style.display = displayCount >= total ? "none" : "inline-block";

  grid.innerHTML = "";

  if (shown.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)">
      <div style="font-size:48px;margin-bottom:12px">?</div>
      <div style="font-size:18px;font-weight:700;margin-bottom:6px;color:var(--text-secondary)">Kursus tidak ditemukan</div>
      <div>Coba kata kunci lain atau ubah filter</div>
    </div>`;
    return;
  }

  shown.forEach((course, idx) => grid.appendChild(createCourseCard(course, idx)));
  if (currentView === "list") grid.classList.add("list-view");
  else grid.classList.remove("list-view");
}

function createCourseCard(course, idx) {
  const card = document.createElement("div");
  card.className = "course-card";
  card.style.animationDelay = `${idx * 0.07}s`;

  const badgeClass = { hot: "badge-hot", new: "badge-new", bestseller: "badge-bestseller", free: "badge-free", updated: "badge-updated" }[course.badge] || "badge-hot";
  const priceHTML = course.price === 0
    ? `<span class="price-free">Gratis</span>`
    : `<span class="price-current">Rp ${course.price.toLocaleString("id-ID")}</span><span class="price-original">Rp ${course.originalPrice.toLocaleString("id-ID")}</span>`;

  const isWished = wishlist.has(course.id);

  card.innerHTML = `
    <div class="course-thumbnail">
      <div class="course-thumbnail-placeholder" style="background:${course.color};font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--accent-blue)">${course.emoji}</div>
      <span class="course-badge ${badgeClass}">${course.badgeLabel}</span>
      <button class="course-wishlist ${isWished ? "active" : ""}" data-id="${course.id}">${isWished ? "♥" : "♡"}</button>
    </div>
    <div class="course-body">
      <div class="course-category">${course.catLabel}</div>
      <div class="course-title">${course.title}</div>
      <div class="course-instructor">oleh ${course.instructor}</div>
      <div class="course-rating">
        <span class="rating-stars">${"★".repeat(Math.floor(course.rating))}${"☆".repeat(5 - Math.floor(course.rating))}</span>
        <span class="rating-num">${course.rating}</span>
        <span class="rating-count">(${course.ratingCount.toLocaleString("id-ID")})</span>
      </div>
      <div class="course-meta">
        <span class="meta-item">${course.duration}</span>
        <span class="meta-item">${course.lessons} pelajaran</span>
        <span class="meta-item">${course.students.toLocaleString("id-ID")} pelajar</span>
      </div>
    </div>
    <div class="course-footer">
      <div class="course-price">${priceHTML}</div>
      <button class="btn-enroll">Daftar</button>
    </div>
  `;

  card.querySelector(".course-wishlist").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleWishlist(course.id, e.currentTarget);
  });
  card.querySelector(".btn-enroll").addEventListener("click", (e) => {
    e.stopPropagation();
    showToast("Berhasil mendaftar ke kursus: " + course.title.slice(0, 32) + "...");
  });
  card.addEventListener("click", () => openModal(course));
  return card;
}

function toggleWishlist(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.textContent = "♡";
    btn.classList.remove("active");
    showToast("Dihapus dari wishlist");
  } else {
    wishlist.add(id);
    btn.textContent = "♥";
    btn.classList.add("active");
    showToast("Ditambahkan ke wishlist");
  }
}

function renderInstructors() {
  const grid = document.getElementById("instructorGrid");
  INSTRUCTORS.forEach((ins, idx) => {
    const card = document.createElement("div");
    card.className = "instructor-card";
    card.style.animationDelay = `${idx * 0.1}s`;
    card.innerHTML = `
      <div class="instructor-avatar" style="font-family:var(--font-display);font-size:16px;font-weight:700;color:var(--accent-blue)">${ins.avatar}</div>
      <div class="instructor-name">${ins.name}</div>
      <div class="instructor-specialty">${ins.specialty}</div>
      <div class="instructor-stats">
        <div class="ins-stat"><strong>${ins.courses}</strong>Kursus</div>
        <div class="ins-stat"><strong>${ins.students}</strong>Pelajar</div>
        <div class="ins-stat"><strong>${ins.rating}</strong>Rating</div>
      </div>
    `;
    card.addEventListener("click", () => showToast("Profil " + ins.name + " segera hadir"));
    grid.appendChild(card);
  });
}

function renderTestimonials() {
  const grid = document.getElementById("testimonialGrid");
  TESTIMONIALS.forEach((t, idx) => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.style.animation = `fadeInUp 0.5s ease ${idx * 0.1}s both`;
    card.innerHTML = `
      <div class="testi-rating">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      <div class="testi-text">"${t.text}"</div>
      <div class="testi-user">
        <div class="testi-avatar" style="font-family:var(--font-display);font-size:12px;font-weight:700;color:var(--accent-blue)">${t.avatar}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function setupModal() {
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalOverlay")) closeModal();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

function openModal(course) {
  const priceHTML = course.price === 0
    ? `<span class="price-current" style="color:var(--accent-green)">Gratis</span>`
    : `<span class="price-current">Rp ${course.price.toLocaleString("id-ID")}</span><span class="price-original">Rp ${course.originalPrice.toLocaleString("id-ID")}</span>`;

  const discount = course.price > 0 ? Math.round((1 - course.price / course.originalPrice) * 100) : 0;
  const featuresHTML = course.features.map(f => `<div class="modal-feature"><span style="color:var(--accent-blue);font-weight:800">✓</span> ${f}</div>`).join("");

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-thumb">
      <div class="modal-thumb-placeholder" style="background:${course.color};font-family:var(--font-display);font-size:40px;font-weight:700;color:var(--accent-blue)">${course.emoji}</div>
    </div>
    <div class="modal-category">${course.catLabel}</div>
    <div class="modal-title">${course.title}</div>
    <div class="modal-instructor">Instruktur: ${course.instructor} &nbsp;|&nbsp; Level: ${course.level}</div>
    <div class="modal-rating">
      <span style="color:var(--accent-yellow)">${"★".repeat(Math.floor(course.rating))}</span>
      <strong>${course.rating}</strong>
      <span style="color:var(--text-muted)">(${course.ratingCount.toLocaleString("id-ID")} ulasan)</span>
      <span style="color:var(--text-muted)">· ${course.students.toLocaleString("id-ID")} pelajar</span>
    </div>
    <div class="modal-desc">${course.desc}</div>
    <div style="margin-bottom:16px">
      <strong style="display:block;margin-bottom:10px;font-size:13px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">Yang akan kamu dapatkan</strong>
      <div class="modal-features">${featuresHTML}</div>
    </div>
    <div class="modal-footer">
      <div class="modal-price-section">
        ${priceHTML}
        ${discount > 0 ? `<div style="font-size:12px;color:var(--accent-orange);font-weight:700;margin-top:4px">Hemat ${discount}%</div>` : ""}
      </div>
      <button class="btn-modal-enroll" onclick="handleEnroll('${course.title.replace(/'/g, "\\'")}')">
        ${course.price === 0 ? "Ambil Gratis" : "Daftar Sekarang"}
      </button>
    </div>
  `;

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function handleEnroll(title) {
  closeModal();
  showToast("Pendaftaran berhasil. Selamat belajar!");
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove("show"), 3000);
}

function animateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".section-header, .instructor-card, .testimonial-card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}