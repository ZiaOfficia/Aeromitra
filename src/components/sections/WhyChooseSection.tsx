import { whyChooseContent } from "../../data/content";
import { motion } from "framer-motion";

export const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left heading column */}
          <div className="lg:col-span-1">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display text-stone-900 mb-8 leading-tight"
            >
              {whyChooseContent.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-gray-600 leading-relaxed mb-8"
            >
              {whyChooseContent.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 border-l-2 border-primary bg-primary/5"
            >
              <p className="text-sm text-gray-700 italic leading-relaxed">
                {whyChooseContent.footer}
              </p>
            </motion.div>
          </div>

          {/* Right: numbered feature cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseContent.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="bg-white p-7 border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  <span className="block font-display text-3xl text-primary/15 mb-4 group-hover:text-primary/35 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
