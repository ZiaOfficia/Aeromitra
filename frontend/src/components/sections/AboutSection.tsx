import { getImageUrl } from "../../utils/imageUtils";
import { aboutContent } from "../../data/content";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[580px]">
        {/* Image — left, full bleed */}
        <motion.div
          className="w-full md:w-1/2 min-h-[380px] relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            loading="lazy"
            decoding="async"
            alt="About Aeromitra"
            className="w-full h-full object-cover absolute inset-0"
            src={getImageUrl("1.png")}
          />
          <div className="absolute inset-0 bg-stone-950/15" />
        </motion.div>

        {/* Text — right */}
        <motion.div
          className="w-full md:w-1/2 bg-white flex flex-col justify-center py-16 px-8 md:px-14 lg:px-20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-stone-900 mb-8 leading-tight">
            {aboutContent.heading}
          </h2>

          <div className="space-y-5 text-gray-500 text-base leading-relaxed">
            {aboutContent.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-gray-100 pt-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-sm font-display">A</span>
            </div>
            <div>
              <p className="font-display text-lg text-stone-800">
                {aboutContent.author.split("–")[0].trim()}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">
                {aboutContent.author.split("–")[1]?.trim() || "Founder"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
