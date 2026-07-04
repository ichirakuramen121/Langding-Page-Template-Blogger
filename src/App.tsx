import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TemplateGallery from "./components/TemplateGallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CheckoutModal from "./components/CheckoutModal";
import { Template } from "./types";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const handleCheckout = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleCloseCheckout = () => {
    setSelectedTemplate(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white font-sans scroll-smooth">
      {/* Sticky Header */}
      <Header />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Core Value/Features Section */}
        <Features />

        {/* Gallery Showcase Section (Search + Category Filters) */}
        <TemplateGallery onCheckout={handleCheckout} />

        {/* Social Proof/Testimonials Section */}
        <Testimonials />

        {/* Pre-sales FAQ Accordion Section */}
        <FAQ />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Checkout Redirection Overlay Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          <CheckoutModal
            template={selectedTemplate}
            onClose={handleCloseCheckout}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
