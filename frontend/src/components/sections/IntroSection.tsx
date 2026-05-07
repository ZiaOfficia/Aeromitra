import { introContent } from "../../data/content";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const IntroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.35em] mb-6 block">
              Who We Are
            </span>
            <h2 className="text-5xl md:text-[4.5rem] font-display leading-[1.05] text-stone-900">
              {introContent.heading}
            </h2>
            <div className="mt-8 w-16 h-0.5 bg-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {introContent.text.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-500 leading-relaxed text-lg mb-5 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <Button onClick={() => navigate("/portfolio")}>
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
