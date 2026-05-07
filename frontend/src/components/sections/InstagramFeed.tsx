import { getImageUrl } from "../../utils/imageUtils";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { getOptimizedImage } from "../../utils/imageUtils";

const INSTAGRAM_URL = "https://www.instagram.com/aeromitraaviation/";

const posts = [
  { id: 1, image: getImageUrl("24-05-13-AF_EDUCATION-1024x683.jpg") },
  { id: 2, image: getImageUrl("24-05-13-AF_EDUCATION-25-1.jpg") },
  { id: 3, image: getImageUrl("24-05-13-AF_EDUCATION-27.jpg") },
  { id: 4, image: getImageUrl("24-05-13-AF_EDUCATION-28-1.jpg") },
  { id: 5, image: getImageUrl("24-05-13-AF_EDUCATION-30.jpg") },
];

export const InstagramFeed = () => {
  return (
    <section className="py-24 px-6 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Instagram className="w-5 h-5 text-primary" />
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                Instagram
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display text-gray-900"
            >
              Follow Us On Instagram
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-2"
          >
            <p className="text-gray-400 font-light text-base">@aeromitraaviation</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-stone-900 transition-colors duration-300"
            >
              View Profile
            </a>
          </motion.div>
        </div>

        {/* Magazine-style grid: first post large (2x2), rest smaller */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[180px]">
          {/* Large featured post */}
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 row-span-2 relative group overflow-hidden bg-gray-100"
          >
            <img
              loading="lazy"
              decoding="async"
              src={getOptimizedImage(posts[0].image, 800)}
              alt="Aeromitra Aviation Academy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="w-10 h-10 text-white" />
            </div>
          </motion.a>

          {/* Remaining 5 posts */}
          {posts.slice(1).map((post, idx) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 1) * 0.08, duration: 0.5 }}
              className="col-span-1 row-span-1 relative group overflow-hidden bg-gray-100"
            >
              <img
                loading="lazy"
                decoding="async"
                src={getOptimizedImage(post.image, 400)}
                alt={`Aeromitra Aviation Academy`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
