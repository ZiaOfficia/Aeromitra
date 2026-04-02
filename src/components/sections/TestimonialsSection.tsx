import { getImageUrl } from "../../utils/imageUtils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: getImageUrl("Abrar-sharief.jpg"),
      quote:
        "If you're fortunate enough to train with Aeromitra Aviation Academy, consider yourself truly blessed. The instructors are world-class and the training experience is second to none. Highly recommend!",
      author: "Adrian — CPL Graduate",
      link: "#",
    },
    {
      image: getImageUrl("admissions.jpg"),
      quote:
        "Choosing Aeromitra for my pilot training was one of the best decisions I ever made. Their attention to detail and structured curriculum transformed my skills and gave me the confidence to pursue a professional flying career.",
      author: "Devan — PPL Student",
      link: "#",
    },
    {
      image: getImageUrl("Adventure-Flight-Education-Bangalore-1024x733.jpeg"),
      quote:
        "Aeromitra Aviation Academy exceeded all my expectations. From the initial counselling session to the final flight test, the team's professionalism and expertise shone through every step. I couldn't be happier with the results!",
      author: "Judi — Type Rating Graduate",
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
            Student Stories
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
