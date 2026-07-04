import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Layers, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white transition-transform duration-200">
              <span className="font-bold text-sm tracking-tight">T.</span>
            </div>
            <span className="font-sans font-bold text-xl text-slate-900 tracking-tight">
              TEMPLATE<span className="text-slate-400 font-light underline decoration-1 underline-offset-4">KITA</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-slate-500 hover:text-black transition-colors cursor-pointer"
            >
              Keunggulan
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium text-slate-500 hover:text-black transition-colors cursor-pointer"
            >
              Galeri Template
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-slate-500 hover:text-black transition-colors cursor-pointer"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-slate-500 hover:text-black transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection("gallery")}
              className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-slate-800 rounded-full transition-all duration-200 cursor-pointer"
            >
              Cari Template
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-black hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Keunggulan
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Galeri Template
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Testimoni
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-50 transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-slate-800 rounded-full transition-all cursor-pointer"
                >
                  Cari Template Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
