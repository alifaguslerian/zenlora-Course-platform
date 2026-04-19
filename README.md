# Zenlora — Online Learning Platform

Platform kursus online modern berbasis HTML, CSS, dan JavaScript vanilla. Dibangun dengan struktur multi-file yang modular dan clean.

---

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Google Fonts — Space Mono + Nunito
- localStorage untuk persistensi data kursus dari admin panel

---

##  Struktur Folder

```
zenlora/
├── index.html          # Halaman utama
├── category.html       # Halaman kategori kursus
├── admin.html          # Admin panel
├── README.md

└── assets/
    ├── css/
    │   ├── base.css        # Variables, reset, typography, animasi
    │   ├── navbar.css      # Navbar utama + secondary category nav
    │   ├── hero.css        # Hero section + promo banners
    │   ├── promo.css       # Promo strip
    │   ├── marquee.css     # Auto-scroll marquee cards
    │   ├── courses.css     # Course grid, card, filter, toolbar
    │   ├── instructors.css # Instructor grid dan card
    │   ├── modal.css       # Modal detail kursus + CTA banner
    │   ├── footer.css      # Footer
    │   ├── category.css    # Hero per halaman kategori
    │   └── admin.css       # Admin panel layout dan form

    └── js/
        ├── data.js     # Data COURSES dan INSTRUCTORS (sumber utama)
        ├── navbar.js   # Scroll hide/show navbar, dark mode, mobile menu
        ├── courses.js  # Render kursus, filter, sort, wishlist, instruktur
        ├── modal.js    # Modal detail kursus
        ├── promo.js    # Countdown timer flash sale
        ├── category.js # Logic halaman kategori
        ├── admin.js    # CRUD kursus di admin panel
        └── main.js     # Entry point, init semua fitur
```

## Fitur

### Website Utama (`index.html`)
- Hero section dengan 2 promo banner — Lifetime Access dan Annual Plan
- Auto-scroll marquee cards berputar terus
- Secondary navbar sticky berisi kategori — klik langsung ke halaman kategori
- Section Recommended dengan course card horizontal scroll
- Dark mode dengan preferensi tersimpan di localStorage
- Navbar hide saat scroll down, muncul saat scroll up
- Modal detail kursus lengkap
- Wishlist per session
- Instruktur grid dengan foto profil
- CTA banner berlangganan
- Toast notification

### Halaman Kategori (`category.html`)
- Hero banner unik per kategori dengan warna berbeda
- Breadcrumb navigasi
- Stats otomatis — jumlah kursus, total pelajar, rata-rata rating
- Filter dan sort kursus per kategori
- Kategori yang tersedia: Coding, Desain, Bisnis, Data Science, AI & ML, Game Dev, Mobile Dev

### Admin Panel (`admin.html`)
- Dashboard dengan statistik ringkas
- Tabel semua kursus dengan search live
- Form tambah kursus — judul, instruktur, kategori, harga, level, durasi, badge, thumbnail, foto
- Edit dan hapus kursus
- Preview diskon otomatis saat input harga
- Preview gambar thumbnail dan foto instruktur dari URL
- Data tersimpan di localStorage dan langsung tersync ke website
- Halaman instruktur dan promo

---

## Cara Pakai

### Jalankan di lokal
Tidak perlu build tool atau server khusus. Cukup buka `index.html` langsung di browser, atau gunakan Live Server di VS Code.

```bash
# Jika pakai Live Server (VS Code extension)
# Klik kanan index.html → Open with Live Server
```

### Tambah Kursus Baru
1. Buka `admin.html`
2. Klik **Tambah Kursus** di sidebar
3. Isi semua field yang diperlukan
4. Klik **Simpan Kursus**
5. Buka atau refresh `index.html` — kursus langsung muncul

### Ganti Foto Instruktur
Buka `assets/js/data.js`, cari array `INSTRUCTORS`, ubah value field `photo` dengan URL foto yang diinginkan:

```js
{
  name: "Budi Santoso",
  photo: "https://url-foto-kamu.com/foto.jpg",
  ...
}
```

### Tambah Kursus Langsung di Kode
Buka `assets/js/data.js`, tambah objek baru di array `COURSES`:

```js
{
  id: 13,
  category: "coding",       // coding | desain | bisnis | data | ai | game | mobile
  catLabel: "Coding",
  title: "Judul Kursus",
  instructor: "Nama Instruktur",
  instructorAvatar: "NI",
  instructorPhoto: "",       // URL foto instruktur, kosongkan jika tidak ada
  image: "",                 // URL thumbnail kursus, kosongkan jika tidak ada
  emoji: "WD",               // fallback jika tidak ada gambar
  color: "#dbeafe",          // warna background thumbnail fallback
  rating: 4.8,
  ratingCount: 100,
  students: 1000,
  duration: "20 jam",
  lessons: 80,
  level: "Pemula",
  price: 199000,             // 0 untuk gratis
  originalPrice: 399000,
  badge: "new",              // bestseller | new | hot | free | updated
  badgeLabel: "Baru",
  desc: "Deskripsi kursus...",
  features: ["Fitur 1", "Fitur 2", "Fitur 3"]
}
```

---

## Alur Data
Admin Panel (admin.html)
↓ simpan
localStorage ("zenlora-courses")
↓ dibaca saat load
data.js → COURSES array
↓
courses.js → render ke halaman

---

## Catatan Pengembangan

Urutan load CSS di `<head>` harus diikuti — `base.css` wajib paling atas karena file lain bergantung pada CSS variables yang didefinisikan di sini.

Urutan load JS sebelum `</body>` harus diikuti — `data.js` wajib paling atas karena semua file JS lain mengakses array `COURSES` dan `INSTRUCTORS`.

```html
<!-- CSS — base selalu pertama -->
<link rel="stylesheet" href="assets/css/base.css" />
<link rel="stylesheet" href="assets/css/navbar.css" />
...

<!-- JS — data selalu pertama -->
<script src="assets/js/data.js"></script>
<script src="assets/js/navbar.js"></script>
...
<script src="assets/js/main.js"></script>
```

---

## Roadmap

- [ ] Halaman detail kursus individual
- [ ] Sistem login dan autentikasi
- [ ] Backend / database untuk gantikan localStorage
- [ ] Halaman profil instruktur
- [ ] Sistem review dan rating dari pengguna
- [ ] Keranjang dan checkout
- [ ] Progress belajar per kursus

---

## Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan portofolio pribadi.
