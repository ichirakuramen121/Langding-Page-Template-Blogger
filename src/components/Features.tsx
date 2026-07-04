import { FEATURES_DATA } from "../data";
import { Search, Zap, Smartphone, Sliders, DollarSign, LifeBuoy } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  Search,
  Zap,
  Smartphone,
  Sliders,
  DollarSign,
  LifeBuoy,
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold bg-slate-200/60 px-3 py-1.5 rounded-full border border-slate-300/40">
            Mengapa Memilih Kami?
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            Keunggulan Template Blog Premium Kami
          </h2>
          <p className="text-slate-500 text-base">
            Setiap baris kode dioptimalkan secara mendalam demi memberikan performa terbaik untuk peringkat SEO dan pendapatan blog Anda.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feat, index) => {
            const IconComponent = iconMap[feat.iconName] || Zap;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative p-8 bg-white hover:bg-white border border-slate-100 hover:border-slate-300 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="inline-flex p-3 bg-slate-100 text-slate-800 group-hover:bg-black group-hover:text-white rounded-xl transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-sans font-bold text-slate-900 group-hover:text-black transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
