import { Button } from "../common/Button";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  "/images/gallery/dsc382098743.webp",
  "/images/gallery/dsc18469449.webp",
  "/images/gallery/aeromitra-gallery-1.webp",
  "/images/gallery/dsc8720274.webp",
  "/images/gallery/dsc08933.webp",
  "/images/gallery/dsc00360.webp",
  "/images/gallery/dsc01084.webp",
  "/images/gallery/dsc00073.webp",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.section
      id="gallery"
      className="py-24 px-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.span
              variants={itemVariants}
              className="text-primary text-[10px] font-bold uppercase tracking-widest mb-3 block"
            >
              Our Work
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display text-stone-900 uppercase tracking-wide"
            >
              Visual Inspiration
            </motion.h2>
          </div>
          <motion.div variants={itemVariants} className="mt-6 md:mt-0">
            <Link to="/gallery">
              <Button variant="primary">View All Projects</Button>
            </Link>
          </motion.div>
        </div>

        {/* Mixed-size masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {/* [0] spans 2 cols + 2 rows — large featured */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-2 overflow-hidden group relative cursor-pointer"
            onClick={() => setSelectedImage(galleryImages[0])}
          >
            <img
              loading="lazy"
              decoding="async"
              src={galleryImages[0]}
              alt="Gallery 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </motion.div>

          {/* [1] normal */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-1 overflow-hidden group relative cursor-pointer"
            onClick={() => setSelectedImage(galleryImages[1])}
          >
            <img loading="lazy" decoding="async" src={galleryImages[1]} alt="Gallery 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </motion.div>

          {/* [2] normal */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-1 overflow-hidden group relative cursor-pointer"
            onClick={() => setSelectedImage(galleryImages[2])}
          >
            <img loading="lazy" decoding="async" src={galleryImages[2]} alt="Gallery 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </motion.div>

          {/* [3] spans 2 cols */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-1 overflow-hidden group relative cursor-pointer"
            onClick={() => setSelectedImage(galleryImages[3])}
          >
            <img loading="lazy" decoding="async" src={galleryImages[3]} alt="Gallery 4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </motion.div>

          {/* [4] normal */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-1 overflow-hidden group relative cursor-pointer"
            onClick={() => setSelectedImage(galleryImages[4])}
          >
            <img loading="lazy" decoding="async" src={galleryImages[4]} alt="Gallery 5"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </motion.div>

          {/* [5] normal */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-1 overflow-hidden group relative cursor-pointer"
            onClick={() => setSelectedImage(galleryImages[5])}
          >
            <img loading="lazy" decoding="async" src={galleryImages[5]} alt="Gallery 6"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </motion.div>

          {/* [6] normal */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-1 overflow-hidden group relative cursor-pointer"
            onClick={() => setSelectedImage(galleryImages[6])}
          >
            <img loading="lazy" decoding="async" src={galleryImages[6]} alt="Gallery 7"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </motion.div>

          {/* [7] normal */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-1 overflow-hidden group relative cursor-pointer"
            onClick={() => setSelectedImage(galleryImages[7])}
          >
            <img loading="lazy" decoding="async" src={galleryImages[7]} alt="Gallery 8"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <X size={40} />
              </button>
              <motion.img
                layoutId={
                  selectedImage
                    ? `gallery-image-${galleryImages.indexOf(selectedImage)}`
                    : undefined
                }
                src={selectedImage}
                alt="Full screen"
                className="max-w-full max-h-[90vh] object-contain rounded-sm"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
