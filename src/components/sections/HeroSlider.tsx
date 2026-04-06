import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../common/Button";
import { heroSlides } from "../../data/content";
import { useNavigate } from "react-router-dom";

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Preload all images so there's no blank flash on first transition */}
      <div className="hidden">
        {heroSlides.map((slide, i) => (
          <img key={i} src={slide.image} alt="" fetchPriority={i === 0 ? "high" : "low"} />
        ))}
      </div>

      {/* Background images — sync mode so old exits and new enters simultaneously */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentIndex].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content — left-aligned */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 md:justify-center px-8 md:px-16 lg:px-24 z-10">
        <motion.div
          key={`text-${currentIndex}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="max-w-2xl"
        >
          <span className="block text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-5">
            Aeromitra
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight text-white mb-10">
            {heroSlides[currentIndex].subtitle}
          </h1>
          <div className="flex gap-4 flex-wrap">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/portfolio")}
            >
              View Portfolio
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/contact")}
            >
              Book Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar: slide counter + dots */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 z-20 flex items-center gap-6">
        {/* Slide counter */}
        <span className="font-display text-white/50 text-sm tabular-nums">
          <span className="text-white text-lg">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          {" "}/ {String(heroSlides.length).padStart(2, "0")}
        </span>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "bg-primary w-8 h-2"
                  : "bg-white/40 hover:bg-white/70 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow controls */}
      <button
        onClick={prevSlide}
        className="absolute right-16 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 backdrop-blur-sm transition-all z-20 hidden md:flex items-center justify-center border border-white/20"
        aria-label="Previous slide"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-[4.5rem] bg-white/10 hover:bg-primary text-white p-3 backdrop-blur-sm transition-all z-20 hidden md:flex items-center justify-center border border-white/20"
        aria-label="Next slide"
      >
        &#8594;
      </button>
    </div>
  );
};
