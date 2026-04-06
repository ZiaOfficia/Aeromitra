import { getImageUrl } from "../utils/imageUtils";
import { motion } from "framer-motion";
import { Sparkles, Home, Phone, ArrowRight, Building2 } from "lucide-react";
import { SEO } from "../components/common/SEO";
import { Button } from "../components/common/Button";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export const AccommodationsPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="Accommodations — Aeromitra Aviation Academy"
        description="Stay comfortably in well-furnished accommodations near our flight school. On-site dormitory and off-campus apartments available for pilot training students."
      />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0">
          <img
            loading="lazy"
            decoding="async"
            src={getImageUrl("aircraft-rest-hangar-lined-up-like-steel-birds-300x168.webp")}
            alt="Accommodations"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
              <Sparkles size={14} className="text-yellow-200" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">
                Student Living
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display mb-6 leading-tight">
              Accommoda-{" "}
              <span className="text-white/50 italic font-serif">tions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Stay comfortably in well-furnished accommodations that perfectly
              accomplish all the requirements of inhabitants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Intro */}
          <motion.div variants={itemVariants} className="max-w-3xl mb-20">
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.35em] mb-4 block">
              Where You'll Stay
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-stone-900 mb-8 leading-tight">
              Close to Campus,{" "}
              <span className="text-primary">Close to the Sky</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Learning to become a pilot or adding additional ratings to an
              existing license can require students to live away from home during
              training. Proximity to flight school is important when undergoing
              flight training.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              At Aeromitra we offer an on-site dormitory to provide our students
              with the proximity they need for training. If students prefer other
              accommodations or our dormitory is full, we have off-campus
              apartments available as well.
            </p>
          </motion.div>

          {/* Accommodation Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {/* On-Campus */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-gray-100 p-8 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Building2 size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl text-stone-900 mb-3">
                On-Site Dormitory
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our on-campus dormitory gives you the convenience of being steps
                away from training facilities, instructors, and simulators. Ideal
                for students who value maximum focus on their studies.
              </p>
              <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                    Starting From
                  </p>
                  <p className="font-display text-2xl text-primary">$300/mo</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 bg-green-50 text-green-600 px-3 py-1 border border-green-100">
                  Available
                </span>
              </div>
            </motion.div>

            {/* Off-Campus */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-gray-100 p-8 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Home size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl text-stone-900 mb-3">
                Off-Campus Apartments
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                For students who prefer more independence or if our dormitory
                reaches capacity, we have carefully selected off-campus apartment
                options that are conveniently located near the flight school.
              </p>
              <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                    Starting From
                  </p>
                  <p className="font-display text-2xl text-primary">$400/mo</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 border border-blue-100">
                  On Request
                </span>
              </div>
            </motion.div>
          </div>

          {/* Pricing Banner */}
          <motion.div
            variants={itemVariants}
            className="bg-stone-900 text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                Accommodation Range
              </p>
              <h3 className="font-display text-3xl md:text-4xl mb-3">
                $300 – $600{" "}
                <span className="text-white/40 text-2xl">/ month</span>
              </h3>
              <p className="text-gray-400 max-w-lg leading-relaxed">
                More accommodation pictures are available on request. Rates
                vary depending on room type and duration of stay.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4 flex-shrink-0">
              <a
                href="tel:+919005527666"
                className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors"
              >
                <Phone size={14} />
                +91 9005527666
              </a>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                Call us to book a spot
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-display text-stone-900 mb-6">
            Ready to Secure Your Stay?
          </h2>
          <p className="text-gray-500 mb-10 text-lg font-light">
            Contact us today to check availability and reserve your accommodation
            before your training begins.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" icon={ArrowRight} variant="primary">
                Contact Us
              </Button>
            </Link>
            <a
              href="tel:+919005527666"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
            >
              <Phone size={14} />
              +91 9005527666
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
