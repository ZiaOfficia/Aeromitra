import { motion } from "framer-motion";

const logos = [
  { src: "/images/misc/frame-300x150.webp", alt: "Client 1", className: "h-10 md:h-14 w-auto object-contain" },
  { src: "/images/misc/frame2-300x150.webp", alt: "Client 2", className: "h-10 md:h-14 w-auto object-contain" },
  { src: "/images/misc/frame3-300x150.webp", alt: "Client 3", className: "h-10 md:h-16 w-auto object-contain" },
  { src: "/images/misc/frame4-300x150.webp", alt: "Client 4", className: "h-10 md:h-16 w-auto object-contain" },
  { src: "/images/misc/frame5-300x150.webp", alt: "Client 5", className: "h-10 md:h-16 w-auto object-contain" },
  { src: "/images/misc/frame6-300x150.webp", alt: "Client 6", className: "h-10 md:h-16 w-auto object-contain" },
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
                className={`${logo.className} opacity-50 hover:opacity-90 transition-opacity duration-300`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
