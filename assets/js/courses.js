// ============================================================
// COURSES — state, render, filter, sort, view toggle,
//           search, wishlist, load more
// ============================================================

// --- State ---
// variabel ini dipakai bersama antar fungsi di file ini
let currentCategory = "semua";
let currentView     = "grid";
let wishlist        = new Set(); // simpan id kursus yang di-wishlist
let displayCount    = 6;        // jumlah kursus yang ditampilkan

// --- Setup: Filter Tabs ---
function setupFilters() {
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      // reset tab aktif
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      currentCategory = tab.dataset.cat;
      displayCount    = 6; // reset ke halaman pertama saat ganti filter
      renderCourses();
    });
  });

  // re-render saat sort berubah
  document.getElementById("sortSelect").addEventListener("change", renderCourses);
}

// --- Setup: Grid / List View Toggle ---
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

// --- Setup: Search dengan debounce 300ms ---
function setupSearch() {
  let timeout;
  document.getElementById("searchInput").addEventListener("input", (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      renderCourses(e.target.value.trim().toLowerCase());
    }, 300);
  });
}

// --- Setup: Load More Button ---
function setupLoadMore() {
  document.getElementById("loadMoreBtn").addEventListener("click", () => {
    displayCount += 3;
    renderCourses();
  });
}

// --- Render: Semua Course Card ---
function renderCourses(searchQuery = "") {
  const grid    = document.getElementById("courseGrid");
  const sortVal = document.getElementById("sortSelect").value;

  // filter berdasarkan kategori dan keyword pencarian
  let filtered = COURSES.filter(c => {
    const catMatch    = currentCategory === "semua" || c.category === currentCategory;
    const searchMatch = !searchQuery ||
      c.title.toLowerCase().includes(searchQuery) ||
      c.instructor.toLowerCase().includes(searchQuery) ||
      c.catLabel.toLowerCase().includes(searchQuery);
    return catMatch && searchMatch;
  });

  // sort berdasarkan pilihan dropdown
  const sortFns = {
    popular:    (a, b) => b.students - a.students,
    newest:     (a, b) => b.id - a.id,
    rating:     (a, b) => b.rating - a.rating,
    "price-low":(a, b) => a.price - b.price,
  };
  filtered.sort(sortFns[sortVal] || sortFns.popular);

  const total = filtered.length;
  const shown = filtered.slice(0, displayCount);

  // update teks jumlah hasil
  document.getElementById("resultCount").textContent =
    `Menampilkan ${Math.min(displayCount, total)} dari ${total} kursus`;

  // sembunyikan tombol load more jika semua sudah tampil
  document.getElementById("loadMoreBtn").style.display =
    displayCount >= total ? "none" : "inline-block";

  // kosongkan grid dan render ulang
  grid.innerHTML = "";

  if (shown.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)">
        <div style="font-size:40px;margin-bottom:12px">?</div>
        <div style="font-size:18px;font-weight:700;margin-bottom:6px;color:var(--text-secondary)">Kursus tidak ditemukan</div>
        <div>Coba kata kunci lain atau ubah filter</div>
      </div>`;
    return;
  }

  shown.forEach((course, idx) => grid.appendChild(createCourseCard(course, idx)));

  // terapkan view mode yang aktif
  if (currentView === "list") grid.classList.add("list-view");
  else grid.classList.remove("list-view");
}

// --- Render: Satu Course Card ---
function createCourseCard(course, idx) {
  const card = document.createElement("div");
  card.className = "course-card";
  card.style.animationDelay = `${idx * 0.07}s`;

  const badgeClass = {
    hot: "badge-hot", new: "badge-new",
    bestseller: "badge-bestseller",
    free: "badge-free", updated: "badge-updated"
  }[course.badge] || "badge-hot";

  const priceHTML = course.price === 0
    ? `<span class="price-free">Gratis</span>`
    : `<span class="price-current">Rp ${course.price.toLocaleString("id-ID")}</span>
       <span class="price-original">Rp ${course.originalPrice.toLocaleString("id-ID")}</span>`;

  const isWished = wishlist.has(course.id);

  card.innerHTML = `
    <div class="course-thumbnail">
      <div class="course-thumbnail-placeholder"
           style="background:${course.color};font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--accent-blue)">
        ${course.emoji}
      </div>
      <span class="course-badge ${badgeClass}">${course.badgeLabel}</span>
      <button class="course-wishlist ${isWished ? "active" : ""}" data-id="${course.id}">
        ${isWished ? "♥" : "♡"}
      </button>
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

  // wishlist toggle
  card.querySelector(".course-wishlist").addEventListener("click", (e) => {
    e.stopPropagation(); // jangan buka modal
    toggleWishlist(course.id, e.currentTarget);
  });

  // daftar langsung tanpa buka modal
  card.querySelector(".btn-enroll").addEventListener("click", (e) => {
    e.stopPropagation();
    showToast("Berhasil mendaftar ke kursus: " + course.title.slice(0, 32) + "...");
  });

  // buka modal detail saat card diklik
  card.addEventListener("click", () => openModal(course));

  return card;
}

// --- Render: Instruktur ---
function renderInstructors() {
  const grid = document.getElementById("instructorGrid");

  INSTRUCTORS.forEach((ins, idx) => {
    const card = document.createElement("div");
    card.className = "instructor-card";
    card.style.animationDelay = `${idx * 0.1}s`;

    card.innerHTML = `
      <div class="instructor-avatar"
           style="font-family:var(--font-display);font-size:14px;font-weight:700;color:var(--accent-blue)">
        ${ins.avatar}
      </div>
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

// --- Wishlist Toggle ---
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