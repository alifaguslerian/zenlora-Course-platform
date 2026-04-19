// ============================================================
// DATA — semua data statis: kursus dan instruktur
// File ini harus di-load pertama sebelum file JS lainnya
// ============================================================

// --- Daftar Kursus ---
const COURSES = [
  {
    id: 1, category: "coding", catLabel: "Coding",
    title: "Full Stack Web Development dengan React dan Node.js",
    instructor: "Budi Santoso", instructorAvatar: "BS",
    instructorPhoto: "https://i.pravatar.cc/150?img=11",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=220&fit=crop",
    emoji: "WD", color: "#dbeafe",
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
    instructor: "Sari Putri", instructorAvatar: "SP",
    instructorPhoto: "https://i.pravatar.cc/150?img=47",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=220&fit=crop",
    emoji: "UI", color: "#ede9fe",
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
    instructor: "Dr. Ahmad Fauzi", instructorAvatar: "AF",
    instructorPhoto: "https://i.pravatar.cc/150?img=33",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=220&fit=crop",
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
    instructor: "Rina Dewi", instructorAvatar: "RD",
    instructorPhoto: "https://i.pravatar.cc/150?img=48",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=220&fit=crop",
    emoji: "MK", color: "#fef9c3",
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
    instructor: "Hendra Kurnia", instructorAvatar: "HK",
    instructorPhoto: "https://i.pravatar.cc/150?img=13",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop",
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
    instructor: "Fajar Ramadhan", instructorAvatar: "FR",
    instructorPhoto: "https://i.pravatar.cc/150?img=52",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=220&fit=crop",
    emoji: "GD", color: "#fce7f3",
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
    instructor: "Kevin Pratama", instructorAvatar: "KP",
    instructorPhoto: "https://i.pravatar.cc/150?img=15",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=220&fit=crop",
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
    instructor: "Maya Susanti", instructorAvatar: "MS",
    instructorPhoto: "https://i.pravatar.cc/150?img=44",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=220&fit=crop",
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
    instructor: "Indra Wijaya", instructorAvatar: "IW",
    instructorPhoto: "https://i.pravatar.cc/150?img=18",
    image: "https://picsum.photos/seed/chatgpt/400/220",
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
    instructor: "Toni Handoko", instructorAvatar: "TH",
    instructorPhoto: "https://i.pravatar.cc/150?img=59",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=220&fit=crop",
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
    instructor: "Agus Setiawan", instructorAvatar: "AS",
    instructorPhoto: "https://i.pravatar.cc/150?img=57",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=220&fit=crop",
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
    instructor: "Rizky Hasan", instructorAvatar: "RH",
    instructorPhoto: "https://i.pravatar.cc/150?img=56",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=220&fit=crop",
    emoji: "CS", color: "#dbeafe",
    rating: 4.9, ratingCount: 2876, students: 11200,
    duration: "50 jam", lessons: 230, level: "Pemula ke Lanjut",
    price: 319000, originalPrice: 699000,
    badge: "bestseller", badgeLabel: "Bestseller",
    desc: "Pelajari ethical hacking, penetration testing, keamanan jaringan, dan cara melindungi sistem dari serangan. Persiapan sertifikasi CEH dan CompTIA Security+.",
    features: ["230+ video HD", "Lab virtual gratis", "CTF challenges", "Tools hacking legal", "Career roadmap", "Sertifikat resmi"]
  },
];

// --- Daftar Instruktur ---
// GANTI seluruh array INSTRUCTORS
const INSTRUCTORS = [
  {
    name: "Budi Santoso",
    specialty: "Full Stack Developer",
    avatar: "BS",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // ganti dengan URL foto asli
    courses: 8, students: "28K", rating: "4.9"
  },
  {
    name: "Sari Putri",
    specialty: "UI/UX Designer",
    avatar: "SP",
    photo: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    courses: 5, students: "15K", rating: "4.8"
  },
  {
    name: "Dr. Ahmad Fauzi",
    specialty: "AI & Data Scientist",
    avatar: "AF",
    photo: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    courses: 12, students: "42K", rating: "4.9"
  },
  {
    name: "Rina Dewi",
    specialty: "Digital Marketer",
    avatar: "RD",
    photo: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    courses: 6, students: "22K", rating: "4.7"
  },
  {
    name: "Kevin Pratama",
    specialty: "Mobile Developer",
    avatar: "KP",
    photo: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    courses: 4, students: "11K", rating: "4.8"
  },
 
];

// Force reset localStorage jika versi data tidak match
const DATA_VERSION = "3.2";
if (localStorage.getItem("zenlora-data-version") !== DATA_VERSION) {
  localStorage.removeItem("zenlora-courses");
  localStorage.setItem("zenlora-data-version", DATA_VERSION);
}

// GANTI seluruh blok (function syncCourses()
(function syncCourses() {
  const saved = localStorage.getItem("zenlora-courses");

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // validasi — pastikan data punya field image yang dibutuhkan
      // jika data lama (tanpa image), reset ke default
      const hasImage = parsed.some(c => c.image);
      if (!hasImage) {
        localStorage.removeItem("zenlora-courses");
        localStorage.setItem("zenlora-courses", JSON.stringify(COURSES));
        return;
      }
      COURSES.length = 0;
      parsed.forEach(c => COURSES.push(c));
    } catch(e) {
      // data corrupt, reset
      localStorage.removeItem("zenlora-courses");
      localStorage.setItem("zenlora-courses", JSON.stringify(COURSES));
    }
  } else {
    localStorage.setItem("zenlora-courses", JSON.stringify(COURSES));
  }
})();