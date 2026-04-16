// ============================================================
// ADMIN — kelola kursus, instruktur, promo
// Data disimpan di localStorage agar persisten
// ============================================================

// --- Load data dari localStorage atau pakai COURSES dari data.js ---
function loadCourses() {
  const saved = localStorage.getItem("zenlora-courses");
  return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(COURSES));
}

function saveCourses(courses) {
  localStorage.setItem("zenlora-courses", JSON.stringify(courses));
}

let adminCourses = loadCourses();

// ============================================================
// NAVIGASI HALAMAN
// ============================================================

function showPage(pageId) {
  // sembunyikan semua page
  document.querySelectorAll(".admin-page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".sidebar-item").forEach(i => i.classList.remove("active"));

  // tampilkan page yang dipilih
  document.getElementById("page-" + pageId).classList.add("active");
  document.querySelector(`[data-page="${pageId}"]`).classList.add("active");

  // update judul topbar
  const titles = {
    "dashboard":   "Dashboard",
    "courses":     "Kelola Kursus",
    "add-course":  "Tambah Kursus",
    "instructors": "Instruktur",
    "promo":       "Promo & Diskon",
  };
  document.getElementById("pageTitle").textContent = titles[pageId] || pageId;

  // render konten page
  if (pageId === "dashboard")   renderDashboard();
  if (pageId === "courses")     renderCoursesTable();
  if (pageId === "instructors") renderInstructorsTable();
  if (pageId === "promo")       renderPromoPage();
  if (pageId === "add-course")  {
    resetForm();
    document.getElementById("formTitle").textContent = "Tambah Kursus Baru";
  }

  // tutup sidebar di mobile
  document.getElementById("adminSidebar").classList.remove("open");
}

// ============================================================
// DASHBOARD
// ============================================================

function renderDashboard() {
  document.getElementById("statTotalCourses").textContent = adminCourses.length;

  const tbody = document.getElementById("dashboardTableBody");
  // tampilkan 5 kursus terbaru
  const recent = [...adminCourses].slice(-5).reverse();
  tbody.innerHTML = recent.map(c => `
    <tr>
      <td class="td-title">${c.title}</td>
      <td>${c.instructor}</td>
      <td><span style="font-size:11px;font-weight:800;color:var(--accent-blue);text-transform:uppercase">${c.catLabel}</span></td>
      <td class="${c.price === 0 ? "td-free" : "td-price"}">
        ${c.price === 0 ? "Gratis" : "Rp " + c.price.toLocaleString("id-ID")}
      </td>
      <td>${c.students ? c.students.toLocaleString("id-ID") : "0"}</td>
      <td>
        <button class="btn-table-edit" onclick="editCourse(${c.id})">Edit</button>
      </td>
    </tr>
  `).join("");
}

// ============================================================
// TABEL KURSUS
// ============================================================

function renderCoursesTable(filter = "") {
  const tbody = document.getElementById("coursesTableBody");
  let list = adminCourses;

  if (filter) {
    const q = filter.toLowerCase();
    list = list.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.instructor.toLowerCase().includes(q) ||
      c.catLabel.toLowerCase().includes(q)
    );
  }

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--text-muted)">Tidak ada kursus ditemukan</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(c => `
    <tr>
      <td class="td-title">${c.title}</td>
      <td>${c.instructor}</td>
      <td><span style="font-size:11px;font-weight:800;color:var(--accent-blue);text-transform:uppercase">${c.catLabel}</span></td>
      <td class="${c.price === 0 ? "td-free" : "td-price"}">
        ${c.price === 0 ? "Gratis" : "Rp " + c.price.toLocaleString("id-ID")}
      </td>
      <td style="color:var(--text-muted);text-decoration:line-through;font-size:12px">
        ${c.originalPrice ? "Rp " + c.originalPrice.toLocaleString("id-ID") : "-"}
      </td>
      <td style="color:var(--accent-gold);font-weight:700">${c.rating || "-"}</td>
      <td>${c.students ? c.students.toLocaleString("id-ID") : "0"}</td>
      <td style="white-space:nowrap">
        <button class="btn-table-edit" onclick="editCourse(${c.id})">Edit</button>
        <button class="btn-table-delete" onclick="deleteCourse(${c.id})">Hapus</button>
      </td>
    </tr>
  `).join("");
}

// search live
document.getElementById("courseSearch").addEventListener("input", (e) => {
  renderCoursesTable(e.target.value.trim());
});

// ============================================================
// FORM TAMBAH / EDIT KURSUS
// ============================================================

// kategori label mapping
const catLabels = {
  coding: "Coding", desain: "Desain", bisnis: "Bisnis",
  data: "Data Science", ai: "AI & ML", game: "Game Dev", mobile: "Mobile Dev"
};

// warna default per kategori
const catColors = {
  coding: "#dbeafe", desain: "#ede9fe", bisnis: "#fef9c3",
  data: "#ffedd5", ai: "#cffafe", game: "#fce7f3", mobile: "#dcfce7"
};

// badge label mapping
const badgeLabels = {
  bestseller: "Bestseller", new: "Baru", hot: "Populer",
  free: "Gratis", updated: "Diperbarui"
};

function saveCourse() {
  const title         = document.getElementById("fTitle").value.trim();
  const instructor    = document.getElementById("fInstructor").value.trim();
  const avatar        = document.getElementById("fAvatar").value.trim();
  const category      = document.getElementById("fCategory").value;
  const level         = document.getElementById("fLevel").value;
  const price         = parseInt(document.getElementById("fPrice").value) || 0;
  const originalPrice = parseInt(document.getElementById("fOriginalPrice").value) || 0;
  const duration      = document.getElementById("fDuration").value.trim();
  const lessons       = parseInt(document.getElementById("fLessons").value) || 0;
  const badge         = document.getElementById("fBadge").value;
  const emoji         = document.getElementById("fEmoji").value.trim() || "?";
  const color         = document.getElementById("fColor").value;
  const desc          = document.getElementById("fDesc").value.trim();
  const featuresRaw   = document.getElementById("fFeatures").value.trim();

  // validasi wajib
  if (!title || !instructor || !desc) {
    showAdminToast("Judul, instruktur, dan deskripsi wajib diisi.", true);
    return;
  }

  const features = featuresRaw
    ? featuresRaw.split(",").map(f => f.trim()).filter(Boolean)
    : [];

  const editId = document.getElementById("editCourseId").value;

  if (editId) {
    // mode edit
    const idx = adminCourses.findIndex(c => c.id === parseInt(editId));
    if (idx !== -1) {
      adminCourses[idx] = {
        ...adminCourses[idx],
        title, instructor, instructorAvatar: avatar || instructor.slice(0, 2).toUpperCase(),
        category, catLabel: catLabels[category], level,
        price, originalPrice, duration, lessons,
        badge, badgeLabel: badgeLabels[badge],
        emoji, color, desc, features,
      };
      showAdminToast("Kursus berhasil diperbarui.");
    }
  } else {
    // mode tambah baru
    const newId = adminCourses.length
      ? Math.max(...adminCourses.map(c => c.id)) + 1
      : 1;

    adminCourses.push({
      id: newId,
      title, instructor,
      instructorAvatar: avatar || instructor.slice(0, 2).toUpperCase(),
      category, catLabel: catLabels[category], level,
      price, originalPrice, duration, lessons,
      badge, badgeLabel: badgeLabels[badge],
      emoji: emoji || catLabels[category].slice(0, 2).toUpperCase(),
      color: color || catColors[category],
      desc, features,
      rating: 0, ratingCount: 0, students: 0,
    });

    showAdminToast("Kursus berhasil ditambahkan.");
  }

  saveCourses(adminCourses);
  resetForm();
  showPage("courses");
}

function editCourse(id) {
  const c = adminCourses.find(c => c.id === id);
  if (!c) return;

  showPage("add-course");
  document.getElementById("formTitle").textContent = "Edit Kursus";
  document.getElementById("editCourseId").value    = c.id;

  document.getElementById("fTitle").value         = c.title;
  document.getElementById("fInstructor").value    = c.instructor;
  document.getElementById("fAvatar").value        = c.instructorAvatar || "";
  document.getElementById("fCategory").value      = c.category;
  document.getElementById("fLevel").value         = c.level;
  document.getElementById("fPrice").value         = c.price;
  document.getElementById("fOriginalPrice").value = c.originalPrice || "";
  document.getElementById("fDuration").value      = c.duration || "";
  document.getElementById("fLessons").value       = c.lessons || "";
  document.getElementById("fBadge").value         = c.badge;
  document.getElementById("fEmoji").value         = c.emoji || "";
  document.getElementById("fColor").value         = c.color || "#dbeafe";
  document.getElementById("fDesc").value          = c.desc;
  document.getElementById("fFeatures").value      = (c.features || []).join(", ");

  updateDiscountPreview();
}

function deleteCourse(id) {
  if (!confirm("Yakin ingin menghapus kursus ini?")) return;
  adminCourses = adminCourses.filter(c => c.id !== id);
  saveCourses(adminCourses);
  renderCoursesTable();
  showAdminToast("Kursus dihapus.");
}

function resetForm() {
  document.getElementById("editCourseId").value = "";
  document.getElementById("fTitle").value        = "";
  document.getElementById("fInstructor").value   = "";
  document.getElementById("fAvatar").value       = "";
  document.getElementById("fCategory").value     = "coding";
  document.getElementById("fLevel").value        = "Pemula";
  document.getElementById("fPrice").value        = "";
  document.getElementById("fOriginalPrice").value= "";
  document.getElementById("fDuration").value     = "";
  document.getElementById("fLessons").value      = "";
  document.getElementById("fBadge").value        = "bestseller";
  document.getElementById("fEmoji").value        = "";
  document.getElementById("fColor").value        = "#dbeafe";
  document.getElementById("fDesc").value         = "";
  document.getElementById("fFeatures").value     = "";
  document.getElementById("discountPreview").textContent = "";
}

// preview diskon otomatis saat harga diubah
function updateDiscountPreview() {
  const price    = parseInt(document.getElementById("fPrice").value) || 0;
  const original = parseInt(document.getElementById("fOriginalPrice").value) || 0;
  const preview  = document.getElementById("discountPreview");

  if (original > 0 && price < original) {
    const disc = Math.round((1 - price / original) * 100);
    preview.textContent = `Diskon ${disc}% — hemat Rp ${(original - price).toLocaleString("id-ID")}`;
  } else if (price === 0) {
    preview.textContent = "Kursus ini akan ditampilkan sebagai Gratis.";
  } else {
    preview.textContent = "";
  }
}

document.getElementById("fPrice").addEventListener("input", updateDiscountPreview);
document.getElementById("fOriginalPrice").addEventListener("input", updateDiscountPreview);

// ============================================================
// INSTRUKTUR
// ============================================================

function renderInstructorsTable() {
  const tbody = document.getElementById("instructorTableBody");
  tbody.innerHTML = INSTRUCTORS.map(ins => `
    <tr>
      <td>
        <div style="width:36px;height:36px;border-radius:50%;background:var(--bg-elevated);
                    display:flex;align-items:center;justify-content:center;
                    font-family:var(--font-display);font-size:12px;font-weight:700;color:var(--accent-blue)">
          ${ins.avatar}
        </div>
      </td>
      <td class="td-title">${ins.name}</td>
      <td>${ins.specialty}</td>
      <td>${ins.courses}</td>
      <td>${ins.students}</td>
      <td style="color:var(--accent-gold);font-weight:700">${ins.rating}</td>
    </tr>
  `).join("");
}

// ============================================================
// PROMO PAGE
// ============================================================

function renderPromoPage() {
  const promos = [
    { tag: "Flash Sale", title: "Full Stack React & Node.js", price: "Rp 49.000", status: "Aktif" },
    { tag: "Bundle Deal", title: "UI/UX + Figma + Illustrator", price: "Rp 299.000", status: "Aktif" },
    { tag: "Lifetime Access", title: "Project Management Pro", price: "Rp 499.000", status: "Aktif" },
  ];

  document.getElementById("promoAdminGrid").innerHTML = promos.map(p => `
    <div class="promo-admin-card">
      <div class="pac-tag">${p.tag}</div>
      <div class="pac-title">${p.title}</div>
      <div class="pac-price">${p.price}</div>
      <span class="pac-status">Aktif</span>
    </div>
  `).join("");
}

// ============================================================
// SIDEBAR TOGGLE (mobile)
// ============================================================

document.getElementById("sidebarToggle").addEventListener("click", () => {
  document.getElementById("adminSidebar").classList.toggle("open");
});

document.querySelectorAll(".sidebar-item").forEach(item => {
  item.addEventListener("click", () => {
    showPage(item.dataset.page);
  });
});

// ============================================================
// TOAST ADMIN
// ============================================================

function showAdminToast(msg, isError = false) {
  let toast = document.getElementById("adminToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "adminToast";
    toast.style.cssText = `
      position:fixed;bottom:24px;right:24px;z-index:999;
      padding:14px 20px;border-radius:12px;font-weight:700;font-size:14px;
      font-family:var(--font-body);
      transition:all 0.3s ease;transform:translateY(100px);opacity:0;
      box-shadow:0 8px 32px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.style.background = isError ? "#fef2f2" : "#f0fdf4";
  toast.style.color       = isError ? "#ef4444" : "#16a34a";
  toast.style.border      = isError ? "1px solid #fecaca" : "1px solid #86efac";
  toast.style.transform   = "translateY(0)";
  toast.style.opacity     = "1";

  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    toast.style.transform = "translateY(100px)";
    toast.style.opacity   = "0";
  }, 3000);
}

// ============================================================
// INIT
// ============================================================

// render dashboard saat pertama buka
showPage("dashboard");