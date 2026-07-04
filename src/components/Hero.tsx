import { ArrowDown, CheckCircle, Zap, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-slate-50 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-slate-100 text-slate-800 border border-slate-200"
            >
              <Zap className="w-3.5 h-3.5 text-black" />
              Promo Spesial: Diskon Hingga 50% Hari Ini!
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-tight"
            >
              Bikin Blog Anda Terlihat{" "}
              <span className="text-black underline decoration-2 decoration-slate-200 underline-offset-4">
                10x Lebih Premium
              </span>{" "}
              & Berkelas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Koleksi template blog modern, super cepat, 100% SEO-Friendly, dan
              AdSense Ready. Checkout instan via <strong className="text-slate-900">Lynk.id</strong> dan
              dapatkan pembaruan gratis selamanya.
            </motion.p>

            {/* Micro-Features */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md sm:max-w-xl mx-auto lg:mx-0 pt-2 text-slate-600"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-sm font-medium">Instan Download</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Zap className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-sm font-medium">PageSpeed 95%+</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-sm font-medium">Grup Support VIP</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-black hover:bg-slate-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Pilih Template Sekarang
                <ArrowDown className="w-4 h-4 ml-2 animate-bounce" />
              </button>
              <a
                href="#testimonials"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-black bg-slate-100 hover:bg-slate-200 rounded-full transition-all"
              >
                <Users className="w-4 h-4 mr-2 text-slate-500" />
                Lihat Testimoni
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start pt-4 border-t border-slate-100"
            >
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                  alt="Avatar"
                  referrerPolicy="no-referrer"
                />
                <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 text-[10px] font-bold text-slate-800">
                  +1.5K
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium text-left">
                Bergabung dengan <strong className="text-slate-800">1,500+ Blogger Indonesia</strong> yang telah memodernisasi websitenya.
              </p>
            </motion.div>
          </div>

          {/* Right Mockup Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-150 bg-slate-50 p-3 shadow-xl">
              <img
                src="/src/assets/images/hero_templates_1783183978816.jpg"
                alt="Premium Blog Templates Mockup"
                className="w-full object-cover rounded-2xl transform hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-slate-100 p-4 rounded-2xl flex items-center justify-between shadow-md">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Lumina Grid Premium</div>
                  <div className="text-xs font-extrabold text-slate-800">Live Performance Score</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-sm font-mono font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">99%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
