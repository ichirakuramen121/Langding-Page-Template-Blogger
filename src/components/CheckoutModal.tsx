import { useEffect } from "react";
import { Template } from "../types";
import { ShoppingBag, Loader2, ArrowUpRight, X, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface CheckoutModalProps {
  template: Template;
  onClose: () => void;
}

export default function CheckoutModal({ template, onClose }: CheckoutModalProps) {
  useEffect(() => {
    // Automatically attempt to open the lynkUrl in a new tab after a brief delay
    const timer = setTimeout(() => {
      window.open(template.lynkUrl, "_blank", "noopener,noreferrer");
    }, 1200);

    return () => clearTimeout(timer);
  }, [template]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white border border-slate-200 rounded-3xl p-8 max-w-md w-full shadow-2xl overflow-hidden text-center z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-black transition-colors p-1.5 bg-slate-50 hover:bg-slate-100 rounded-full cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-6">
          {/* Animated Loader Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="p-4 bg-slate-100 text-black rounded-2xl border border-slate-200">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-black"></span>
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h3 className="text-xl font-sans font-extrabold text-slate-900">Menuju Halaman Checkout</h3>
            <p className="text-sm text-slate-500">
              Menghubungkan Anda ke payment gateway aman kami di <strong className="text-slate-900 font-bold">Lynk.id</strong> untuk menyelesaikan pesanan Anda.
            </p>
          </div>

          {/* Product Quick Details */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-left space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">Template Pilihan</span>
            <div className="font-extrabold text-slate-900 text-base truncate">{template.title}</div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-slate-500 font-medium">Harga Spesial Promo:</span>
              <span className="font-mono text-sm font-extrabold text-slate-900">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(template.price)}
              </span>
            </div>
          </div>

          {/* Direct Redirection Status / Manual Trigger */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
              <Loader2 className="w-4 h-4 animate-spin text-black" />
              <span>Membuka halaman pembayaran otomatis...</span>
            </div>

            <a
              href={template.lynkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 px-4 text-xs font-bold uppercase tracking-widest text-white bg-black hover:bg-slate-800 rounded-xl transition-all shadow-md group"
            >
              Klik di Sini Jika Tidak Dialihkan
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Footer Security Shield */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 border-t border-slate-100 pt-4">
            <ShieldCheck className="w-4 h-4 text-slate-600" />
            <span>Sistem Pembayaran Terenkripsi &amp; Aman 100%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
