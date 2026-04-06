import { getImageUrl } from "../utils/imageUtils";
import { motion } from "framer-motion";
import { Sparkles, Landmark, ArrowRight, Phone } from "lucide-react";
import { SEO } from "../components/common/SEO";
import { Button } from "../components/common/Button";
import { Link } from "react-router-dom";

const banks = [
  "State Bank Of India",
  "Punjab National Bank",
  "Bank Of Baroda",
  "Central Bank Of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const TuitionFinancingPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="Tuition Financing — Aeromitra Aviation Academy"
        description="Sort out the hurdles related to fees structure and financing with the help of reputed Indian banks. Education loans up to 80% of total course fee."
      />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0">
          <img
            loading="lazy"
            decoding="async"
            src={getImageUrl("DGCA-Ground-School-in-Vishakhapatnam.jpg")}
            alt="Tuition Financing"
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
                Flexible Payment Options
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display mb-6 leading-tight">
              Tuition{" "}
              <span className="text-white/50 italic font-serif">Financing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Sort out the hurdles related to fees structure and financing with
              the help of reputed Indian banks.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Loan Info */}
            <motion.div variants={itemVariants}>
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.35em] mb-4 block">
                Education Loan
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-stone-900 mb-8 leading-tight">
                Fund Your{" "}
                <span className="text-primary">Aviation Career</span>
              </h2>

              <div className="space-y-6 text-gray-600 text-base leading-relaxed">
                <p>
                  Students can apply for an education loan up to{" "}
                  <strong className="text-stone-800">
                    80% of the total course fee
                  </strong>{" "}
                  from any nationalised bank.
                </p>
                <p>
                  As per RBI rules, the applicant must provide a guarantor and
                  collateral if the loan amount exceeds{" "}
                  <strong className="text-stone-800">INR 7.5 Lakh</strong>.
                </p>
                <p>
                  The guarantor's annual income should be at least{" "}
                  <strong className="text-stone-800">INR 8 Lakh per annum</strong>.
                  For collateral, the applicant can mortgage any registered
                  property or provide a fixed deposit / gold worth a minimum of{" "}
                  <strong className="text-stone-800">INR 40 Lakh</strong>.
                </p>
              </div>

              <div className="mt-10 p-6 border-l-4 border-primary bg-primary/5">
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  Have questions about the loan application process? Our
                  admission counselors are here to help you every step of the
                  way.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="primary" icon={ArrowRight}>
                    Speak to a Counselor
                  </Button>
                </Link>
                <a
                  href="tel:+919005527666"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone size={14} />
                  +91 9005527666
                </a>
              </div>
            </motion.div>

            {/* Right: Bank Cards */}
            <motion.div variants={itemVariants}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-6">
                Eligible Banks
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Education loans can be applied at the banks listed below, subject
                to your eligibility.
              </p>
              <div className="space-y-3">
                {banks.map((bank, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-5 bg-white border border-gray-100 px-6 py-5 hover:border-primary/30 hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Landmark size={16} className="text-primary" />
                    </div>
                    <span className="font-display text-stone-800 text-base">
                      {bank}
                    </span>
                    <span className="ml-auto text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-primary transition-colors">
                      Apply →
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            loading="lazy"
            decoding="async"
            src={getImageUrl("DGCA-Pariksha-1024x733.jpeg")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-display text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-400 mb-10 text-lg font-light">
            Don't let finances hold you back. Apply today and let us help you
            navigate the loan process.
          </p>
          <Link to="/contact">
            <Button size="lg" icon={ArrowRight}>
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
