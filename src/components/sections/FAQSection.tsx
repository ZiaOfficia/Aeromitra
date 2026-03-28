import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/content";
import { AnimatePresence, motion } from "framer-motion";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
            Good to Know
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-stone-900">
            Common{" "}
            <span className="text-primary italic">Questions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          {/* Left: question list acting as tabs */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setOpenIndex(index)}
                className={`w-full text-left px-6 py-5 flex items-center justify-between transition-all duration-300 border ${
                  openIndex === index
                    ? "bg-primary text-white border-primary shadow-md"
                    : "bg-stone-50 text-stone-700 border-transparent hover:border-gray-200 hover:bg-white"
                }`}
              >
                <span
                  className={`font-display text-base leading-snug ${
                    openIndex === index ? "text-white" : "text-stone-800"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-white"
                      : "text-stone-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: active answer panel */}
          <div className="sticky top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={openIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-stone-50 p-8 border-l-4 border-primary"
              >
                <h3 className="font-display text-xl text-stone-900 mb-5">
                  {faqs[openIndex].question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {faqs[openIndex].answer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
