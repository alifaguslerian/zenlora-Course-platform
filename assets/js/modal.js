// ============================================================
// MODAL — buka/tutup modal detail kursus, handle pendaftaran
// ============================================================

function setupModal() {
  // tombol close (X)
  document.getElementById("modalClose").addEventListener("click", closeModal);

  // klik di luar modal box untuk menutup
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalOverlay")) closeModal();
  });

  // tekan Escape untuk menutup
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openModal(course) {
  const priceHTML = course.price === 0
    ? `<span class="price-current" style="color:var(--accent-green)">Gratis</span>`
    : `<span class="price-current">Rp ${course.price.toLocaleString("id-ID")}</span>
       <span class="price-original">Rp ${course.originalPrice.toLocaleString("id-ID")}</span>`;

  const discount = course.price > 0
    ? Math.round((1 - course.price / course.originalPrice) * 100)
    : 0;

  const featuresHTML = course.features
    .map(f => `<div class="modal-feature"><span style="color:var(--accent-blue);font-weight:800">✓</span> ${f}</div>`)
    .join("");

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-thumb">
      <div class="modal-thumb-placeholder"
           style="background:${course.color};font-family:var(--font-display);font-size:40px;font-weight:700;color:var(--accent-blue)">
        ${course.emoji}
      </div>
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
      <strong style="display:block;margin-bottom:10px;font-size:13px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">
        Yang akan kamu dapatkan
      </strong>
      <div class="modal-features">${featuresHTML}</div>
    </div>
    <div class="modal-footer">
      <div class="modal-price-section">
        ${priceHTML}
        ${discount > 0
          ? `<div style="font-size:12px;color:var(--accent-orange);font-weight:700;margin-top:4px">Hemat ${discount}%</div>`
          : ""}
      </div>
      <button class="btn-modal-enroll" onclick="handleEnroll()">
        ${course.price === 0 ? "Ambil Gratis" : "Daftar Sekarang"}
      </button>
    </div>
  `;

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden"; // cegah scroll background
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function handleEnroll() {
  closeModal();
  showToast("Pendaftaran berhasil. Selamat belajar!");
}