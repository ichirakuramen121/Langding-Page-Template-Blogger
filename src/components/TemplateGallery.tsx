import { useState, useMemo } from "react";
import { TEMPLATES_DATA, CATEGORIES } from "../data";
import { Template } from "../types";
import TemplateCard from "./TemplateCard";
import { Search, SlidersHorizontal, Sparkles, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TemplateGalleryProps {
  onCheckout: (template: Template) => void;
}

export default function TemplateGallery({ onCheckout }: TemplateGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter templates based on category and search query
  const filteredTemplates = useMemo(() => {
    return TEMPLATES_DATA.filter((template) => {
      const matchesCategory =
        selectedCategory === "Semua" ||
        template.category.includes(selectedCategory);

      const matchesSearch =
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.category.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase())) ||
        template.features.some((feat) => feat.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-black" /> Galeri Eksklusif
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            Temukan Desain Template Blog Terbaik
          </h2>
          <p className="text-slate-500 text-base">
            Pilih dari berbagai layout premium yang dirancang khusus untuk kenyamanan membaca, kecepatan maksimal, dan optimasi pendapatan.
          </p>
        </div>

        {/* Filters & Search Control Panel */}
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative flex-grow max-w-lg">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari template (misal: 'SEO', 'Tech', 'Minimalis')..."
                className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm py-3 pl-10 pr-10 rounded-2xl border border-slate-200 focus:border-black focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-black"
                >
                  <X className="w-4 h-4 bg-slate-100 rounded-full p-0.5" />
                </button>
              )}
            </div>

            {/* Results counter indicator */}
            <div className="text-sm text-slate-500 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              <span>
                Menampilkan <strong className="text-black font-extrabold">{filteredTemplates.length}</strong> dari{" "}
                <strong className="text-slate-600 font-bold">{TEMPLATES_DATA.length}</strong> pilihan premium
              </span>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Kategori:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-black text-white shadow-sm"
                      : "bg-white text-slate-600 hover:text-black border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="popLayout">
          {filteredTemplates.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onCheckout={onCheckout}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-slate-50 border border-dashed border-slate-200 rounded-3xl"
            >
              <div className="max-w-md mx-auto space-y-4">
                <div className="inline-flex p-4 bg-slate-100 text-slate-600 rounded-2xl">
                  <X className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Template Tidak Ditemukan</h3>
                <p className="text-sm text-slate-500">
                  Maaf, kami tidak menemukan template dengan kata kunci &ldquo;<span className="text-black font-bold">{searchQuery}</span>&rdquo; di kategori &ldquo;{selectedCategory}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("Semua");
                  }}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-black transition-colors underline decoration-1"
                >
                  Reset Semua Pencarian & Filter
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Extra Bottom Trust Banner */}
        <div className="mt-16 bg-slate-50 border border-slate-200 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-sans font-extrabold text-lg text-slate-900">Butuh bantuan instalasi atau custom desain?</h4>
            <p className="text-xs text-slate-500">Setiap lisensi pembelian sudah mencakup gratis bantuan setup & konsultasi bersama pengembang.</p>
          </div>
          <a
            href="https://lynk.id/premium-templates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-black bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all cursor-pointer"
          >
            Hubungi Support Kami
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
