import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/portfolio/whatsapp-image-2023-09-27-at-12.17.56.webp",
      quote:
        "If you're fortunate enough to have Aeromitra as your event decor specialist, consider yourselves truly blessed. We highly endorse their services!",
      author: "Adrian & Kyle",
      link: "#",
    },
    {
      image: "/images/portfolio/kiranfritdjof-weddingphotos-1135.webp",
      quote:
        "Choosing Aeromitra for our wedding decor was one of the best decisions we made. Their attention to detail and creative flair transformed our wedding venue in New York into a dream come true. Highly recommended!",
      author: "Devan & Ashish",
      link: "#",
    },
    {
      image: "/images/portfolio/dsc00122.webp",
      quote:
        "Aeromitra Aviation Academy exceeded all our expectations and brought our vision to life in the most spectacular way. From the initial consultation to the final touches in our wedding, Aeromitra team's professionalism and expertise shone through. We couldn't be happier with the results!",
      author: "Judi & Chris",
      link: "#",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="Testimonial background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-stone-950/80" />
      </div>

      <div className="relative z-10 w-full py-28 px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-bold uppercase tracking-[0.35em] mb-6 block"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display mb-16"
          >
            Kind Words
          </motion.h2>

          {/* Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`quote-${currentSlide}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-7xl text-primary/40 font-serif leading-none mb-2 select-none">
                &ldquo;
              </p>
              <p className="text-lg md:text-xl font-light italic text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
                {slides[currentSlide].quote}
              </p>
              <div className="flex flex-col items-center gap-1">
                <span className="w-8 h-0.5 bg-primary mb-3 block" />
                <p className="font-display text-xl tracking-wider text-white">
                  {slides[currentSlide].author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot navigation */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === currentSlide
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
