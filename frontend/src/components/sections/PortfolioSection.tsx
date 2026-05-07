import { Button } from "../common/Button";
import { portfolioContent } from "../../data/content";
import { motion, type Variants } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { Link } from "react-router-dom";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const PortfolioSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-24 bg-stone-50"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-3">
              Curated Collection
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-gray-900">
              {portfolioContent.heading}
            </h2>
          </div>
          <Link to="/portfolio" className="mt-6 md:mt-0">
            <Button className="bg-transparent border border-gray-300 text-gray-700 hover:bg-primary hover:border-primary hover:text-white transition-all px-6 py-3">
              View All Success Stories &rarr;
            </Button>
          </Link>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Large featured item */}
          {portfolioData[0] && (
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 group cursor-pointer"
            >
              <Link to={`/portfolio/${portfolioData[0].id}`}>
                <div className="relative overflow-hidden" style={{ paddingBottom: "66%" }}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={portfolioData[0].heroImage}
                    alt={portfolioData[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                    {portfolioData[0].services}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-white text-3xl mb-1">
                      {portfolioData[0].title}
                    </h3>
                    <p className="text-white/60 text-sm uppercase tracking-wide">
                      {portfolioData[0].location}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* 2 stacked smaller items */}
          <div className="flex flex-col gap-3">
            {portfolioData.slice(1, 3).map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group cursor-pointer flex-1"
              >
                <Link to={`/portfolio/${item.id}`}>
                  <div
                    className="relative overflow-hidden"
                    style={{ paddingBottom: "80%" }}
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      src={item.heroImage}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-[9px] uppercase tracking-widest font-bold">
                      {item.services}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-white text-lg mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-xs uppercase tracking-wide">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="text-center mt-10" variants={itemVariants}>
          <Link to="/portfolio">
            <Button variant="primary">View All Projects</Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
