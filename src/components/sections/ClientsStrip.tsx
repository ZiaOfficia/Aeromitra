import { getImageUrl } from "../../utils/imageUtils";
import { motion } from "framer-motion";

const logos = [
  { src: getImageUrl("10-min-1.png"), alt: "Client 1", className: "h-10 md:h-14 w-auto object-contain" },
  { src: getImageUrl("10.png"), alt: "Client 2", className: "h-10 md:h-14 w-auto object-contain" },
  { src: getImageUrl("2.png"), alt: "Client 3", className: "h-10 md:h-16 w-auto object-contain" },
  { src: getImageUrl("23-04-18-KSKY_MANOJKUMAR-103-rgj9tqq40vjfqsrr1sfrx1qs46ku0bf447ezdwwmsk.jpg"), alt: "Client 4", className: "h-10 md:h-16 w-auto object-contain" },
  { src: getImageUrl("23-04-18-KSKY_MANOJKUMAR_EDIT-18.jpg"), alt: "Client 5", className: "h-10 md:h-16 w-auto object-contain" },
  { src: getImageUrl("24-05-13-AF_EDUCATION-1.jpg"), alt: "Client 6", className: "h-10 md:h-16 w-auto object-contain" },
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
