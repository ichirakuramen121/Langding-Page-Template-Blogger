import { Template } from "../types";
import { Star, ShoppingCart, Eye, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface TemplateCardProps {
  template: Template;
  onCheckout: (template: Template) => void;
  key?: string;
}

export default function TemplateCard({ template, onCheckout }: TemplateCardProps) {
  // Format price helper
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const discountPercentage = Math.round(
    ((template.originalPrice - template.price) / template.originalPrice) * 100
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="group bg-white border border-slate-150 hover:border-slate-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      {/* Visual Thumbnail */}
      <div className="relative overflow-hidden aspect-[4/3] bg-slate-50">
        {/* Discount Badge */}
        <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-rose-500 text-white uppercase tracking-wider">
          -{discountPercentage}%
        </span>
 
        {/* Performance Score Badge */}
        {template.performanceScore >= 98 && (
          <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-900 text-white">
            <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping" />
            Speed: {template.performanceScore}%
          </span>
        )}
 
        <img
          src={template.imageUrl}
          alt={template.title}
          className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
 
        {/* Hover overlay with quick links */}
        <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <a
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-sm cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
            Demo
          </a>
          <button
            onClick={() => onCheckout(template)}
            className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-slate-850 rounded-xl transition-all shadow-sm cursor-pointer"
          >
            <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
            Beli
          </button>
        </div>
      </div>
 
      {/* Card Content */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Categories & Stats */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {template.category.map((cat) => (
                <span
                  key={cat}
                  className="text-[9px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
                >
                  {cat}
                </span>
              ))}
            </div>
            {/* Sales Stats */}
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200/50">
              <TrendingUp className="w-3 h-3 mr-1 text-slate-400" />
              {template.salesCount} Terjual
            </span>
          </div>
 
          {/* Title */}
          <h3 className="font-sans font-extrabold text-lg text-slate-900 group-hover:text-black transition-colors line-clamp-1">
            {template.title}
          </h3>
 
          {/* Description */}
          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {template.description}
          </p>
 
          {/* Highlights */}
          <div className="pt-2 space-y-1">
            {template.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-black flex-shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
 
        {/* Footer Area with Pricing and CTA */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-end justify-between">
            {/* Price */}
            <div>
              <span className="block text-xs text-slate-400 line-through">
                {formatPrice(template.originalPrice)}
              </span>
              <span className="block text-lg font-mono font-extrabold text-slate-900">
                {formatPrice(template.price)}
              </span>
            </div>
 
            {/* Rating */}
            <div className="flex items-center gap-1 bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded border border-amber-500/20">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-xs font-bold">{template.rating.toFixed(1)}</span>
            </div>
          </div>
 
          {/* Direct Checkout Button */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:text-black bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
            >
              Demo Live
            </a>
            <button
              onClick={() => onCheckout(template)}
              className="inline-flex items-center justify-center py-2.5 text-[11px] font-bold uppercase tracking-wider text-white bg-black hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5 mr-1" />
              Checkout
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
