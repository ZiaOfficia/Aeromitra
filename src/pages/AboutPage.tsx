import { getImageUrl } from "../utils/imageUtils";
import { useState, useEffect } from "react";
import { SEO } from "../components/common/SEO";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
// import { FeaturedInStrip } from "../components/sections/FeaturedInStrip";
import { ClientsStrip } from "../components/sections/ClientsStrip";
import { ContactSection } from "../components/sections/ContactSection";
// import { AboutSection } from "../components/sections/AboutSection";
import { aboutContent } from "../data/content";
import NewsletterSection from "../components/sections/NewsletterSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const heroImages = [
  getImageUrl("Affordable-Flight-Schools-1024x733.jpeg"),
  getImageUrl("Affordable-Flight-Schools.jpeg"),
  getImageUrl("aircraft-rest-hangar-lined-up-like-steel-birds-300x168.webp"),
  getImageUrl("aircraft-rest-hangar-lined-up-like-steel-birds-1024x574.webp"),
];

export const AboutPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What courses does Aeromitra Aviation Academy offer?",
      answer:
        "Aeromitra offers a full spectrum of aviation programs including Commercial Pilot License (CPL), Private Pilot License (PPL), Student Pilot License (SPL), DGCA Ground Classes, Type Rating, Flight Dispatcher, and Cabin Crew Training — all aligned with DGCA standards and airline requirements.",
    },
    {
      question: "How do I get started with pilot training at Aeromitra?",
      answer:
        "Getting started is simple. Fill out our inquiry form or contact us directly and our counseling team will guide you through eligibility requirements, batch schedules, fee structure, and financing options. We offer a free career counseling session for all prospective students.",
    },
    {
      question: "Does Aeromitra provide placement assistance after training?",
      answer:
        "Yes. Aeromitra has a dedicated placement cell that actively works with airlines and aviation companies to connect our graduates with job opportunities. We provide 100% placement assistance to all qualified graduates across our programs.",
    },
    {
      question: "What are the eligibility requirements for CPL training?",
      answer:
        "To enroll in CPL training, candidates must have passed 10+2 with Physics and Mathematics, hold a valid DGCA Class 1 Medical Certificate, and be at least 17 years of age. Our admissions team will walk you through the complete eligibility checklist during your counseling session.",
    },
    {
      question: "Does Aeromitra offer financing options for aviation training?",
      answer:
        "Yes. We understand that aviation training is a significant investment, which is why we offer flexible tuition financing plans including education loans through partner banks and easy installment options. Speak to our admissions team to find a plan that works for your budget.",
    },
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <SEO
        title="About Us - Aeromitra Aviation Academy"
        description="Learn about Aeromitra Aviation Academy, the premier pilot training institution helping students achieve their aviation career dreams."
      />
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentHeroSlide}
              src={heroImages[currentHeroSlide]}
              alt="About Hero"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block border text-xs tracking-[0.2em] uppercase px-4 py-2 mb-6 backdrop-blur-md bg-white/10"
          >
            Since 2014
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-display mb-8"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto opacity-90"
          >
            Shaping Aviation Careers Across India
          </motion.p>
        </div>
      </section>

      {/* Section 1: Aeromitra Aviation Academy */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center relative min-h-150">
          {/* Mobile Image Fallback - Shown First on Mobile */}
          <div className="w-full md:hidden mb-8">
            <img loading="lazy" decoding="async"
              alt="About Aeromitra"
              className="w-full h-100 object-cover grayscale-20"
              src={getImageUrl("Adventure-Flight-Education-Bangalore.jpeg")}
            />
          </div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-3/5 z-10 md:pr-12"
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="bg-white p-8 md:p-16 shadow-xl border-l-4 border-[#8ca18e]">
              <motion.span
                variants={itemVariants}
                className="text-[#8ca18e] text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
              >
                Our Story
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-6xl font-display text-stone-900 mb-8 leading-tight"
              >
                {aboutContent.heading}
              </motion.h2>

              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                {aboutContent.text.map((paragraph, index) => (
                  <motion.p key={index} variants={itemVariants}>
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-12 flex items-center gap-4"
              >
                <div className="h-px w-12 bg-[#8ca18e]" />
                <div>
                  <p className="font-display text-2xl text-stone-800">
                    {aboutContent.author.split("–")[0].trim()}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    {aboutContent.author.split("–")[1]?.trim() || "Founder"}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Abstract Image Composition - Desktop Only */}
          <motion.div
            className="w-full md:w-1/2 absolute top-0 right-0 h-full hidden md:block z-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Removed the offset background box to prevent overflow */}
            <div className="w-full h-full bg-stone-100 absolute inset-0 -z-10" />
            <img loading="lazy" decoding="async"
              alt="About Aeromitra"
              className="w-full h-full object-cover grayscale-20 opacity-90"
              src={getImageUrl("aerial-view-doctor-writing-patient-daily-report-checklist-scaled.webp")}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Consultation - Overlapping Layout */}
      <section className="py-32 px-6 bg-stone-100 text-stone-900 overflow-visible">
        <div className="max-w-7xl mx-auto relative lg:h-[800px] flex flex-col lg:flex-row items-center">
          {/* Image Container - takes up 60% approx */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="w-full lg:w-2/3 h-[500px] lg:h-full relative z-0"
          >
            <img loading="lazy" decoding="async"
              src={getImageUrl("aerial-view-doctor-writing-patient-daily-report-checklist-scaled.webp")}
              alt="Consultation"
              className="w-full h-full object-cover shadow-2xl grayscale-20"
            />
          </motion.div>

          {/* Text Container - Overlapping */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 bg-white p-12 lg:p-20 max-w-2xl shadow-2xl z-10 lg:-ml-24 mt-[-80px] lg:mt-0"
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8ca18e] mb-4">
              Personalized Service
            </h4>
            <h2 className="text-4xl md:text-5xl font-display text-stone-900 mb-8">
              Free Aviation Career Consultation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              At Aeromitra, we’re ready to embark on your journey toward
              achieving your aviation career goals. Let’s connect and
              discuss how we can help you take flight! Our training
              team is dedicated to crafting unforgettable
              learning experiences.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 text-stone-900 border-b border-stone-900 pb-1 text-xs font-bold uppercase tracking-widest hover:text-[#8ca18e] hover:border-[#8ca18e] transition-colors"
            >
              Get in touch{" "}
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Team - Magazine Layout */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-display text-stone-900 mb-6">
            Our Experts
          </h2>
          <div className="h-1 w-24 bg-[#8ca18e] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Member 1: Chief Flight Instructor */}
          <div className="flex flex-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="mb-8 relative"
            >
              <img loading="lazy" decoding="async"
                src={getImageUrl("Best-Pilot-Training-Institute-in-India.jpg")}
                alt="Chief Flight Instructor"
                className="w-full h-full object-cover filter transition-all duration-1000 ease-out"
              />
            </motion.div>
            <div className="text-left px-4">
              <h3 className="text-4xl font-display text-stone-900 mb-2">
                Capt. Anil Verma
              </h3>
              <p className="text-[#8ca18e] font-serif italic text-lg mb-6">
                Chief Flight Instructor
              </p>
              <p className="text-gray-500 font-light leading-relaxed">
                With over 15,000 flight hours and decades of instructing experience, Capt. Anil Verma leads Aeromitra’s flight training division. A DGCA-certified examiner and commercial aviation veteran, he has personally guided hundreds of students from their first solo flight to their CPL checkride. His methodical, student-first approach ensures every trainee reaches their full potential.
              </p>
            </div>
          </div>

          {/* Member 2: Head of Ground School */}
          <div className="flex flex-col md:mt-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="mb-8 relative"
            >
              <img loading="lazy" decoding="async"
                src={getImageUrl("Aero-Mitra-Aviation-2.png")}
                alt="Head of Ground School"
                className="w-full h-full object-cover filter transition-all duration-1000 ease-out"
              />
            </motion.div>
            <div className="text-left px-4">
              <h3 className="text-4xl font-display text-stone-900 mb-2">
                Capt. Meera Sharma
              </h3>
              <p className="text-[#8ca18e] font-serif italic text-lg mb-6">
                Head of DGCA Ground School
              </p>
              <p className="text-gray-500 font-light leading-relaxed">
                Capt. Meera Sharma brings unmatched expertise in DGCA ground school instruction. A specialist in Air Regulations, Navigation, and Meteorology, she has helped students achieve first-attempt clearance rates well above the national average. Her structured teaching style and deep subject knowledge make her one of Aeromitra’s most valued educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <TestimonialsSection />

      {/* FAQ Section - Clean Minimal */}
      <section className="py-32 px-6 bg-white text-stone-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display mb-6">
              Questions?
            </h2>
            <p className="text-gray-500 font-light text-lg">
              Everything you need to know about our process.
            </p>
          </div>

          <div className="divide-y divide-stone-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-8">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left font-display text-xl md:text-2xl hover:text-[#8ca18e] transition-colors"
                >
                  <span className="pr-8">{faq.question}</span>
                  <span
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      transform:
                        activeAccordion === index
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    <ChevronRight size={24} />
                  </span>
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-6 font-light text-gray-600 text-lg leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <ClientsStrip />
      <ContactSection />
    </div>
  );
};
