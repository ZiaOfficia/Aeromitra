import { Star, Crown, Palette, Gem, Landmark } from "lucide-react";
import { motion } from "framer-motion";

export const StatsSection = () => {
  const stats = [
    { icon: Star, value: "400+", label: "Years Experience" },
    { icon: Crown, value: "10+", label: "Simulators" },
    { icon: Palette, value: "6+", label: "Aircraft" },
    { icon: Gem, value: "32+", label: "Countries" },
    { icon: Landmark, value: "1000+", label: "Students Trained" },
  ];

  return (
    <section className="bg-stone-950 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex-1 flex flex-col items-center py-10 px-6 border-b md:border-b-0 md:border-r border-white/10 last:border-0 group"
              >
                <Icon strokeWidth={1} size={24} className="text-primary mb-4 opacity-60" />
                <span className="text-4xl md:text-5xl font-display text-white mb-2 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-white/40 text-center">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
