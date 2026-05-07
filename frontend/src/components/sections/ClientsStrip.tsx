import { getClientImageUrl } from "../../utils/imageUtils";
import { motion } from "framer-motion";

const logos = [
  { src: getClientImageUrl("client-1.png"), alt: "Client 1" },
  { src: getClientImageUrl("client-2.png"), alt: "Client 2" },
  { src: getClientImageUrl("client-3.png"), alt: "Client 3" },
  { src: getClientImageUrl("client-4.png"), alt: "Client 4" },
  { src: getClientImageUrl("client-5.png"), alt: "Client 5" },
  { src: getClientImageUrl("client-6.png"), alt: "Client 6" },
];

export const ClientsStrip = () => {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-14 bg-stone-900 overflow-hidden">
      <p className="text-[10px] uppercase tracking-[0.35em] text-center text-white/30 mb-10 font-bold">
        Clients Worked With
      </p>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex items-center gap-12 md:gap-16 flex-nowrap px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <img
                loading="lazy"
                decoding="async"
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-14 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
