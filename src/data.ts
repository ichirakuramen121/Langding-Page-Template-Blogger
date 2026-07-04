import { Template, Testimonial, Feature, FAQItem } from "./types";

export const CATEGORIES = [
  "Semua",
  "Minimalist",
  "Tech",
  "Personal",
  "Magazine",
  "SEO Friendly",
  "Creative"
];

export const TEMPLATES_DATA: Template[] = [
  {
    id: "lumina-grid",
    title: "Lumina Grid Premium",
    description: "Template blog Blogger/WordPress bergaya minimalis modern dengan layout grid estetis. Sangat cocok untuk fotografer, desainer portofolio, dan konten kreator teknologi.",
    price: 149000,
    originalPrice: 299000,
    category: ["Minimalist", "Creative"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    features: [
      "Layout Grid Estetis",
      "Lazy Load Gambar Bawaan",
      "Responsive di Semua Gadget",
      "Skor Speed 98% (Mobile)",
      "Dark Mode Toggle Instan"
    ],
    lynkUrl: "https://lynk.id/premium-templates/lumina-grid",
    demoUrl: "https://lumina-grid-demo.blogger.com",
    rating: 4.9,
    salesCount: 342,
    performanceScore: 98,
    seoFriendly: true
  },
  {
    id: "scribe-elegant",
    title: "Scribe Elegant Edition",
    description: "Mengutamakan tipografi premium yang super bersih, memberikan kenyamanan membaca maksimal bagi blog opini, esai, personal branding, dan newsletter.",
    price: 129000,
    originalPrice: 249000,
    category: ["Personal", "Minimalist"],
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    features: [
      "Tipografi Premium (Inter & Serif)",
      "Optimal untuk Google AdSense",
      "Fitur Newsletter Terintegrasi",
      "Skor SEO 100% Valid",
      "Load Speed di bawah 0.5 detik"
    ],
    lynkUrl: "https://lynk.id/premium-templates/scribe-elegant",
    demoUrl: "https://scribe-elegant-demo.blogger.com",
    rating: 4.8,
    salesCount: 215,
    performanceScore: 99,
    seoFriendly: true
  },
  {
    id: "tech-pulse",
    title: "TechPulse Tech-Reviewer",
    description: "Template blog bernuansa teknologi modern dengan fitur Dark Mode otomatis, kecepatan loading instan, dan slot iklan strategis teroptimasi AdSense.",
    price: 179000,
    originalPrice: 349000,
    category: ["Tech", "SEO Friendly"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Skor Core Web Vitals Hijau",
      "Slot AdSense High CTR",
      "Auto Dark/Light Mode",
      "Breadcrumbs & Schema Markup",
      "Fitur Live Search Box"
    ],
    lynkUrl: "https://lynk.id/premium-templates/tech-pulse",
    demoUrl: "https://tech-pulse-demo.blogger.com",
    rating: 5.0,
    salesCount: 489,
    performanceScore: 97,
    seoFriendly: true
  },
  {
    id: "vibe-mag",
    title: "VibeMag Dynamic Magazine",
    description: "Desain majalah digital yang dinamis dan visual-sentris. Sempurna untuk blog kuliner, gaya hidup (lifestyle), traveling, dan gosip populer.",
    price: 159000,
    originalPrice: 299000,
    category: ["Magazine", "Creative"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    features: [
      "Mega Menu Modern",
      "Custom Widget Popular Posts",
      "Grid Post Slider Menawan",
      "Infinite Scroll / Ajax Load",
      "Optimasi Gambar Otomatis"
    ],
    lynkUrl: "https://lynk.id/premium-templates/vibe-mag",
    demoUrl: "https://vibe-mag-demo.blogger.com",
    rating: 4.7,
    salesCount: 188,
    performanceScore: 94,
    seoFriendly: true
  },
  {
    id: "clean-flow",
    title: "CleanFlow SEO Wiki",
    description: "Sangat SEO-friendly dengan struktur navigasi sidebar kiri yang terorganisir. Ideal untuk tutorial pemrograman, dokumentasi, dan blog panduan.",
    price: 139000,
    originalPrice: 279000,
    category: ["SEO Friendly", "Minimalist"],
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    features: [
      "Navigasi Sidebar Kiri (Wiki)",
      "SEO Schema Tag Terlengkap",
      "Skor Pagespeed Mobile 99%",
      "Copy-to-Clipboard Code Box",
      "Table of Contents Otomatis"
    ],
    lynkUrl: "https://lynk.id/premium-templates/clean-flow",
    demoUrl: "https://clean-flow-demo.blogger.com",
    rating: 4.9,
    salesCount: 276,
    performanceScore: 100,
    seoFriendly: true
  },
  {
    id: "zen-write",
    title: "ZenWrite Pastel Space",
    description: "Membawa ketenangan lewat palet warna pastel yang lembut dan animasi halus. Sangat disukai oleh penulis cerita pendek, puisi, dan refleksi harian.",
    price: 149000,
    originalPrice: 299000,
    category: ["Creative", "Personal"],
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    features: [
      "Aesthetic Pastel Theme",
      "Efek Transisi Halaman Mulus",
      "Mode Membaca Bebas Distraksi",
      "Musik Latar Lofi (Opsional)",
      "Format Artikel Audio/Podcasts"
    ],
    lynkUrl: "https://lynk.id/premium-templates/zen-write",
    demoUrl: "https://zen-write-demo.blogger.com",
    rating: 4.9,
    salesCount: 125,
    performanceScore: 96,
    seoFriendly: true
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testi-1",
    name: "Ahmad Fauzi",
    role: "Tech Blogger",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    content: "Setelah ganti ke TechPulse, loading blog saya naik drastis dari 3 detik jadi cuma 0.4 detik! Hasilnya pendaftaran Google AdSense langsung diterima dalam waktu seminggu. Pembelian lewat Lynk.id pun sangat cepat dan instan.",
    rating: 5,
    verifiedBuyer: true,
    templateBought: "TechPulse Tech-Reviewer"
  },
  {
    id: "testi-2",
    name: "Rina Kartika",
    role: "Lifestyle & Food Creator",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    content: "Desain VibeMag bikin blog traveling saya jadi berasa kayak website majalah profesional kelas dunia. Pembaca setia pada muji tampilannya yang rapi dan elegan. Pas diklik beli langsung masuk grup support, mantap!",
    rating: 5,
    verifiedBuyer: true,
    templateBought: "VibeMag Dynamic Magazine"
  },
  {
    id: "testi-3",
    name: "Dwi Nugroho",
    role: "Full-Stack Developer",
    avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    content: "Sebagai dev, saya males bikin blog dari awal. CleanFlow ini kodenya rapi banget, gak berantakan, dan gampang di-custom. Dokumentasinya lengkap. Sangat menghemat waktu saya. Rekomendasi sekali!",
    rating: 5,
    verifiedBuyer: true,
    templateBought: "CleanFlow SEO Wiki"
  },
  {
    id: "testi-4",
    name: "Siti Rahmawati",
    role: "Novel & Creative Writer",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    content: "ZenWrite bikin tulisan fiksi saya terasa lebih hidup dan syahdu. Pilihan warnanya yang soft bener-bener bikin betah membaca berlama-lama. Transaksinya gampang banget lewat Lynk.id dan dapet diskon gede.",
    rating: 4,
    verifiedBuyer: true,
    templateBought: "ZenWrite Pastel Space"
  }
];

export const FEATURES_DATA: Feature[] = [
  {
    id: "feat-1",
    title: "100% SEO Friendly",
    description: "Sudah dilengkapi dengan JSON-LD Schema Markup, meta tag dinamis, dan struktur heading H1-H3 yang disukai Google agar blog Anda mudah nangkring di halaman pertama.",
    iconName: "Search"
  },
  {
    id: "feat-2",
    title: "Kecepatan Loading Kilat",
    description: "Kombinasi optimasi script, lazy load gambar pintar, serta minified CSS membuat blog Anda diakses di bawah 1 detik demi kenyamanan pembaca Anda.",
    iconName: "Zap"
  },
  {
    id: "feat-3",
    title: "Mobile First & Responsive",
    description: "Tampilan otomatis menyesuaikan dengan sempurna di layar smartphone, tablet, laptop, hingga smart TV untuk performa jangkauan audiens maksimal.",
    iconName: "Smartphone"
  },
  {
    id: "feat-4",
    title: "Mudah Disesuaikan",
    description: "Terdapat kontrol panel tata letak Blogger/WordPress yang intuitif. Ganti warna dasar, font, logo, menu navigasi, tanpa perlu mengerti coding sama sekali.",
    iconName: "Sliders"
  },
  {
    id: "feat-5",
    title: "AdSense Ready",
    description: "Slot iklan yang ditempatkan secara strategis di area high-CTR (bawah header, dalam postingan, sidebar) untuk meningkatkan pendapatan pasif Anda.",
    iconName: "DollarSign"
  },
  {
    id: "feat-6",
    title: "Dukungan & Update Gratis",
    description: "Setiap pembelian template berhak mendapatkan akses ke grup diskusi dukungan pembeli serta pembaruan berkala gratis selamanya jika ada update sistem.",
    iconName: "LifeBuoy"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah template ini bisa digunakan di Blogger (Blogspot) dan WordPress?",
    answer: "Ya! Kami menyediakan versi khusus untuk Blogger (.xml) dan WordPress (.zip) sesuai paket yang Anda pilih saat checkout di Lynk.id. Harap baca deskripsi produk saat membeli."
  },
  {
    id: "faq-2",
    question: "Bagaimana cara melakukan checkout/pembayaran?",
    answer: "Sangat mudah! Anda hanya perlu mengeklik tombol 'Beli Sekarang' atau 'Checkout' pada template yang diminati. Anda akan langsung dialihkan ke halaman produk Lynk.id kami, di mana pembayaran bisa diselesaikan via QRIS, e-wallet (Gopay, OVO, Dana, LinkAja), transfer bank, atau minimarket."
  },
  {
    id: "faq-3",
    question: "Apakah saya akan mendapatkan panduan instalasi?",
    answer: "Tentu saja! Setiap pembelian template dilengkapi dengan file dokumentasi PDF dan video panduan langkah demi langkah tentang cara instalasi, pemasangan widget, dan kustomisasi menu."
  },
  {
    id: "faq-4",
    question: "Apakah ada garansi jika terjadi error?",
    answer: "Kami menjamin 100% template berfungsi dengan baik. Jika ada bug atau error bawaan dari kode kami, tim support kami siap membantu memperbaiki melalui email atau grup WhatsApp pembeli."
  },
  {
    id: "faq-5",
    question: "Apakah template ini mendapat pembaruan (update)?",
    answer: "Ya, semua pembeli akan mendapatkan pembaruan gratis selamanya jika ada perbaikan performa, bug fix, atau penyesuaian aturan terbaru dari platform Blogger maupun WordPress."
  }
];
