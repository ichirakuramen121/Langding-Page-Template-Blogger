import { TESTIMONIALS_DATA } from "../data";
import { Star, Check, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-150 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold bg-slate-200/60 px-3 py-1.5 rounded-full border border-slate-300/40 inline-flex items-center gap-1.5">
            Testimonial Pelanggan
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            Dipercaya Oleh Ribuan Blogger Indonesia
          </h2>
          <p className="text-slate-500 text-base">
            Baca kisah sukses mereka setelah beralih menggunakan template blog premium dari kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS_DATA.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white hover:bg-white border border-slate-150 hover:border-slate-300 p-8 rounded-3xl transition-all duration-300 relative shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              {/* Quote Icon Background Decorative */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-100 pointer-events-none" />

              <div className="space-y-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  {testi.rating < 5 && (
                    <Star className="w-4 h-4 text-slate-200" />
                  )}
                </div>

                {/* Content */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed italic font-normal">
                  &ldquo;{testi.content}&rdquo;
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100">
                <img
                  src={testi.avatarUrl}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-grow">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-sans font-extrabold text-slate-900 text-sm">{testi.name}</h4>
                    {testi.verifiedBuyer && (
                      <span className="inline-flex items-center justify-center p-0.5 bg-black text-white rounded-full" title="Verified Buyer">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">{testi.role}</p>
                  
                  {/* Template Bought Badge */}
                  <span className="inline-block mt-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-150 px-2.5 py-0.5 rounded">
                    Membeli: {testi.templateBought}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistical Summary Row */}
        <div className="mt-16 pt-16 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-mono font-extrabold text-slate-900">1.500+</div>
            <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Blogger Aktif</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-mono font-extrabold text-slate-900">99.2%</div>
            <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Tingkat Kepuasan</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-mono font-extrabold text-slate-900">4.9 / 5.0</div>
            <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Rating Rata-rata</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-mono font-extrabold text-slate-900">&lt; 0.5s</div>
            <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Rata-rata Speed</div>
          </div>
        </div>

      </div>
    </section>
  );
}
