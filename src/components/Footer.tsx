import { Layers, Sparkles, Mail, Github, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-150 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
                <span className="font-bold text-sm tracking-tight">T.</span>
              </div>
              <span className="font-sans font-bold text-xl text-slate-900 tracking-tight">
                TEMPLATE<span className="text-slate-400 font-light underline decoration-1 underline-offset-4">KITA</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Solusi terbaik untuk menaikkan kelas blog Anda dengan desain premium, loading cepat kilat, ramah SEO, dan optimasi penuh untuk penempatan Google AdSense.
            </p>

            <div className="flex space-x-3">
              <a href="mailto:rostamanfajarade@gmail.com" className="p-2 rounded-lg bg-slate-100 hover:bg-black hover:text-white text-slate-600 transition-all">
                <Mail className="w-4.5 h-4.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 hover:bg-black hover:text-white text-slate-600 transition-all">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 hover:bg-black hover:text-white text-slate-600 transition-all">
                <Github className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-sans font-extrabold text-slate-900 uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-black transition-colors">Keunggulan</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-black transition-colors">Galeri Template</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-black transition-colors">Testimoni</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Checkout Info Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-sans font-extrabold text-slate-900 uppercase tracking-wider">Sistem Pembayaran</h4>
            <p className="text-xs leading-relaxed text-slate-500">
              Setiap transaksi diproses secara aman dan otomatis melalui mitra resmi kami di <strong>Lynk.id</strong>. Setelah pembayaran berhasil, template dapat langsung diunduh secara instan beserta panduan lengkapnya.
            </p>
            
            {/* Payment support tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[10px] font-bold bg-slate-50 border border-slate-200 px-2.5 py-1 rounded text-slate-600">QRIS</span>
              <span className="text-[10px] font-bold bg-slate-50 border border-slate-200 px-2.5 py-1 rounded text-slate-600">GOPAY / OVO</span>
              <span className="text-[10px] font-bold bg-slate-50 border border-slate-200 px-2.5 py-1 rounded text-slate-600">DANA / SHOPEEPAY</span>
              <span className="text-[10px] font-bold bg-slate-50 border border-slate-200 px-2.5 py-1 rounded text-slate-600">TRANSFER BANK</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400">
            &copy; {new Date().getFullYear()} TemplateKita Premium. Semua hak dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-black transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-black transition-colors">Ketentuan Layanan</a>
            
            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-100 hover:bg-black hover:text-white border border-slate-200 transition-all cursor-pointer"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
