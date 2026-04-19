// ============================================================
// COURSES — state, render, filter, sort, view toggle,
//           search, wishlist, load more
// ============================================================

// --- State ---
// variabel ini dipakai bersama antar fungsi di file ini
let currentCategory = "semua";
let currentView = "grid";
let wishlist = new Set(); // simpan id kursus yang di-wishlist
let displayCount = 6; // jumlah kursus yang ditampilkan

// GANTI fungsi setupFilters()
function setupFilters() {
  document.querySelectorAll(".cat-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".cat-tab")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.dataset.cat;
      displayCount = 6;
      renderCourses();
    });
  });

  document
    .getElementById("sortSelect")
    .addEventListener("change", renderCourses);
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
  const grid = document.getElementById("courseGrid");
  const sortVal = document.getElementById("sortSelect").value;

  // filter berdasarkan kategori dan keyword pencarian
  let filtered = COURSES.filter((c) => {
    const catMatch =
      currentCategory === "semua" || c.category === currentCategory;
    const searchMatch =
      !searchQuery ||
      c.title.toLowerCase().includes(searchQuery) ||
      c.instructor.toLowerCase().includes(searchQuery) ||
      c.catLabel.toLowerCase().includes(searchQuery);
    return catMatch && searchMatch;
  });

  // sort berdasarkan pilihan dropdown
  const sortFns = {
    popular: (a, b) => b.students - a.students,
    newest: (a, b) => b.id - a.id,
    rating: (a, b) => b.rating - a.rating,
    "price-low": (a, b) => a.price - b.price,
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

  shown.forEach((course, idx) =>
    grid.appendChild(createCourseCard(course, idx)),
  );

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

  // thumbnail: gambar online atau fallback placeholder kecil
  const thumbHTML = course.image
    ? `<img
        src="${course.image}"
        alt="${course.title}"
        style="width:100%;height:100%;object-fit:cover;display:block"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
      />
      <div class="course-thumbnail-placeholder" style="display:none;background:${course.color}">
        <span style="font-family:var(--font-display);font-size:20px;font-weight:700;color:var(--accent-blue)">${course.emoji}</span>
      </div>`
    : `<div class="course-thumbnail-placeholder" style="background:${course.color}">
        <span style="font-family:var(--font-display);font-size:20px;font-weight:700;color:var(--accent-blue)">${course.emoji}</span>
      </div>`;

  // foto instruktur kecil di card
  const instrPhotoHTML = course.instructorPhoto
    ? `<img src="${course.instructorPhoto}" alt="${course.instructor}"
            style="width:18px;height:18px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:4px"
            onerror="this.style.display='none'" />`
    : "";

  card.innerHTML = `
    <div class="course-thumbnail">
      ${thumbHTML}
      <span class="course-badge ${badgeClass}">${course.badgeLabel}</span>
      <button class="course-wishlist ${isWished ? "active" : ""}" data-id="${course.id}">
        ${isWished ? "♥" : "♡"}
      </button>
    </div>
    <div class="course-body">
      <div class="course-category">${course.catLabel}</div>
      <div class="course-title">${course.title}</div>
      <div class="course-instructor">
        ${instrPhotoHTML}oleh ${course.instructor}
      </div>
      <div class="course-rating">
        <span class="rating-stars">${"★".repeat(Math.floor(course.rating))}${"☆".repeat(5 - Math.floor(course.rating))}</span>
        <span class="rating-num">${course.rating}</span>
        <span class="rating-count">(${course.ratingCount.toLocaleString("id-ID")})</span>
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

// --- Render: Instruktur ---
function renderInstructors() {
  const grid = document.getElementById("instructorGrid");
  if (!grid) return;

  INSTRUCTORS.forEach((ins, idx) => {
    const card = document.createElement("div");
    card.className = "instructor-card";
    card.style.animationDelay = `${idx * 0.1}s`;

    // foto atau inisial
    const avatarHTML = ins.photo
      ? `<img src="${ins.photo}" alt="${ins.name}"
             style="width:100%;height:100%;object-fit:cover;border-radius:50%"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
         <div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;
                     font-family:var(--font-display);font-size:14px;font-weight:700;color:var(--accent-blue)">
           ${ins.avatar}
         </div>`
      : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;
                     font-family:var(--font-display);font-size:14px;font-weight:700;color:var(--accent-blue)">
           ${ins.avatar}
         </div>`;

    card.innerHTML = `
      <div class="instructor-avatar">${avatarHTML}</div>
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
