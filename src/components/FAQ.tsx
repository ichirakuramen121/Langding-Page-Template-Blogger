import { useState } from "react";
import { FAQS_DATA } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-black" /> FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-500 text-base">
            Temukan jawaban cepat atas pertanyaan umum seputar pembelian dan instalasi template kami.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-50 border border-slate-150 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:text-black transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                  <div className={`p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-black" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
