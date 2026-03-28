import { services } from "../../data/content";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const ServicesGrid = () => {
  // IDs must match servicesData.ts exactly
  const SERVICE_IDS = [
    "floral-design",
    "ceiling-design",
    "centerpiece-design",
    "vinyl-floor-wrap",
    "ceremony-decor",
    "draping-services",
    "mandap-design",
    "stage-design",
  ];

  return (
    <motion.section
      id="services"
      className="py-24 px-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <div className="flex-1">
            <motion.span
              variants={itemVariants}
              className="text-primary text-[10px] font-bold uppercase tracking-[0.35em] mb-4 block"
            >
              What We Offer
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display text-gray-900"
            >
              Our Signature Wedding Decor Services
            </motion.h2>
          </div>
          <motion.p
            variants={itemVariants}
            className="md:max-w-sm text-gray-500 text-sm leading-relaxed"
          >
            We provide complete wedding décor and design services for ceremonies,
            receptions, and multi-day wedding celebrations.
          </motion.p>
        </div>

        {/* Numbered horizontal cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
          {services.map((service, index) => {
            const serviceId = SERVICE_IDS[index] || "";
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white hover:bg-stone-50 transition-colors duration-300"
              >
                <Link
                  to={`/services/${serviceId}`}
                  className="flex items-stretch"
                >
                  {/* Number accent */}
                  <div className="w-16 md:w-20 flex-shrink-0 flex items-center justify-center bg-stone-50 group-hover:bg-primary transition-colors duration-300 border-r border-gray-100">
                    <span className="font-display text-xl text-stone-300 group-hover:text-white transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 p-6 flex items-center gap-6">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-lg text-stone-900 mb-1 group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    {/* Thumbnail */}
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
