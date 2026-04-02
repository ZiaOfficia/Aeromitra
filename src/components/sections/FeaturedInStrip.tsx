import { getImageUrl } from "../../utils/imageUtils";
import { motion } from "framer-motion";

const items = [
  {
    type: "link" as const,
    href: "https://www.maharaniweddings.com/2025-04-15/16630-hartford-ct-indian-wedding-by-juniper-domantay?fbclid=PAY2xjawJre85leHRuA2FlbQIxMQABp0DZ6VuDwJI8ulfXC6hmCpEyA6lycLDJEtklxSls-mr0qe2L5xnAjDQvyj3O_aem_XMyyfUDnYZjHn39PUVibmw",
    src: getImageUrl("24-05-13-AF_EDUCATION-1024x683.jpg"),
    alt: "Maharani Weddings",
    className: "h-16 w-auto object-contain",
  },
  {
    type: "link" as const,
    href: "https://wezoree.com/real-weddings/urban-euphoria-adriana-kyle-s-magical-moments-at-ravel-hotel-1701964352/",
    src: getImageUrl("24-05-13-AF_EDUCATION-18-rgj9tqqbc04x9hnkilintkauvlsshuws1lhi1p17l8.jpg"),
    alt: "Wezoree",
    className: "h-10 w-auto object-contain brightness-0 invert",
  },
  {
    type: "img" as const,
    src: getImageUrl("24-05-13-AF_EDUCATION-20-300x200.jpg"),
    alt: "Vogue Weddings",
    className:
      "h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-70 hover:opacity-100",
  },
  {
    type: "img" as const,
    src: getImageUrl("24-05-13-AF_EDUCATION-23-1.jpg"),
    alt: "Elle Weddings",
    className:
      "h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-70 hover:opacity-100",
  },
  {
    type: "img" as const,
    src: getImageUrl("24-05-13-AF_EDUCATION-23-1024x683.jpg"),
    alt: "Brides",
    className:
      "h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-70 hover:opacity-100",
  },
  {
    type: "img" as const,
    src: getImageUrl("24-05-13-AF_EDUCATION-23.jpg"),
    alt: "Carats & Cakes",
    className:
      "h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-70 hover:opacity-100",
  },
  {
    type: "img" as const,
    src: getImageUrl("24-05-13-AF_EDUCATION-25-1.jpg"),
    alt: "The Luxury Bride Magazine",
    className:
      "h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100",
  },
  {
    type: "img" as const,
    src: getImageUrl("24-05-13-AF_EDUCATION-26-1-300x200.jpg"),
    alt: "Modern Luxury Weddings",
    className:
      "h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-70 hover:opacity-100",
  },
  {
    type: "img" as const,
    src: getImageUrl("24-05-13-AF_EDUCATION-26.jpg"),
    alt: "Munaluchi Bride",
    className:
      "h-12 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-500",
  },
];

export const FeaturedInStrip = () => {
  const doubled = [...items, ...items];

  return (
    <div className="bg-stone-950 py-14 overflow-hidden border-y border-white/5">
      <p className="text-[10px] uppercase tracking-[0.4em] text-center text-white/25 mb-10 font-bold">
        As Featured In
      </p>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex items-center gap-16 md:gap-20 flex-nowrap px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((item, i) =>
            item.type === "link" ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-opacity hover:opacity-80"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={item.src}
                  alt={item.alt}
                  className={item.className}
                />
              </a>
            ) : (
              <div key={i} className="flex-shrink-0">
                <img
                  loading="lazy"
                  decoding="async"
                  src={item.src}
                  alt={item.alt}
                  className={item.className}
                />
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};
