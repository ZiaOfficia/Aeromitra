import { getImageUrl } from "../../utils/imageUtils";
import { motion } from "framer-motion";

const items = [
  {
    src: getImageUrl("24-05-13-AF_EDUCATION-1024x683.jpg"),
    alt: "DGCA Approved",
    className: "h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-500",
  },
  {
    src: getImageUrl("24-05-13-AF_EDUCATION-18-rgj9tqqbc04x9hnkilintkauvlsshuws1lhi1p17l8.jpg"),
    alt: "Aviation India",
    className: "h-10 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-500",
  },
  {
    src: getImageUrl("24-05-13-AF_EDUCATION-20-300x200.jpg"),
    alt: "Pilot Training India",
    className: "h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-70 hover:opacity-100",
  },
  {
    src: getImageUrl("24-05-13-AF_EDUCATION-23-1.jpg"),
    alt: "Aviation Academy",
    className: "h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-70 hover:opacity-100",
  },
  {
    src: getImageUrl("24-05-13-AF_EDUCATION-23-1024x683.jpg"),
    alt: "CPL Training",
    className: "h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-70 hover:opacity-100",
  },
  {
    src: getImageUrl("24-05-13-AF_EDUCATION-23.jpg"),
    alt: "Flight School India",
    className: "h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-70 hover:opacity-100",
  },
  {
    src: getImageUrl("24-05-13-AF_EDUCATION-25-1.jpg"),
    alt: "Aeromitra Aviation",
    className: "h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100",
  },
  {
    src: getImageUrl("24-05-13-AF_EDUCATION-26-1-300x200.jpg"),
    alt: "DGCA Ground School",
    className: "h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-70 hover:opacity-100",
  },
  {
    src: getImageUrl("24-05-13-AF_EDUCATION-26.jpg"),
    alt: "Cabin Crew Training",
    className: "h-12 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-500",
  },
];

export const FeaturedInStrip = () => {
  const doubled = [...items, ...items];

  return (
    <div className="bg-stone-950 py-14 overflow-hidden border-y border-white/5">
      <p className="text-[10px] uppercase tracking-[0.4em] text-center text-white/25 mb-10 font-bold">
        Our Training in Action
      </p>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex items-center gap-16 md:gap-20 flex-nowrap px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex-shrink-0">
              <img
                loading="lazy"
                decoding="async"
                src={item.src}
                alt={item.alt}
                className={item.className}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
