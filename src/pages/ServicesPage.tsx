import { getImageUrl } from "../utils/imageUtils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plane,
  PlaneTakeoff,
  PlaneLanding,
  BookOpen,
  GraduationCap,
  Radio,
  Users,
  CreditCard,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { SEO } from "../components/common/SEO";
import NewsletterSection from "../components/sections/NewsletterSection";
import { useState } from "react";
import { getOptimizedImage } from "../utils/imageUtils";

export const ServicesPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What courses does Aeromitra Aviation Academy offer?",
      answer:
        "Aeromitra offers a full range of aviation programs: Commercial Pilot License (CPL), Private Pilot License (PPL), Student Pilot License (SPL), DGCA Ground Classes, Type Rating, Flight Dispatcher, Cabin Crew Training, and Tuition Financing. All programs follow DGCA guidelines and are aligned with airline industry requirements.",
    },
    {
      question: "What are the eligibility requirements for CPL training?",
      answer:
        "To enroll in CPL training at Aeromitra, candidates must have passed 10+2 with Physics and Mathematics, hold a valid DGCA Class 1 Medical Certificate, and be at least 17 years of age. Our admissions team will guide you through the complete eligibility checklist during your free counseling session.",
    },
    {
      question: "How long does CPL training take at Aeromitra?",
      answer:
        "A full Commercial Pilot License program typically takes 18–24 months to complete, depending on weather conditions, flight slot availability, and individual progress. This includes all required flight hours, simulator sessions, and DGCA ground school examinations.",
    },
    {
      question: "Does Aeromitra provide placement assistance after training?",
      answer:
        "Yes. Aeromitra has a dedicated placement cell that actively works with airlines and aviation companies to connect qualified graduates with job opportunities. We provide 100% placement assistance across all our programs — CPL, Cabin Crew, Flight Dispatcher, and more.",
    },
    {
      question: "Does Aeromitra offer financing options for aviation training?",
      answer:
        "Yes. We understand aviation training is a significant investment. Aeromitra offers flexible tuition financing plans including education loans through partner banks, easy EMI installment options, and partial scholarships for deserving students. Contact our admissions team to explore the best plan for your budget.",
    },
  ];

  const services = [
    {
      id: "commercial-pilot-license",
      icon: <PlaneTakeoff className="w-8 h-8 text-primary" />,
      title: "Commercial Pilot License (CPL)",
      description:
        "Aeromitra's CPL program is designed to take you from an aspiring aviator to a fully certified, airline-ready commercial pilot. Following the complete DGCA syllabus, our training covers all required flight hours, simulator sessions, and ground school examinations — with experienced instructors guiding you every step of the way.",
      features: [
        "Complete DGCA-Mandated Flight Hours",
        "Advanced Simulator Sessions",
        "DGCA Ground School All Subjects",
        "100% Placement Assistance",
      ],
      image: getImageUrl("DGCA-CPL-Ground-Classes-in-Patna-1024x733.jpeg"),
    },
    {
      id: "private-pilot-license",
      icon: <Plane className="w-8 h-8 text-primary" />,
      title: "Private Pilot License (PPL)",
      description:
        "The Private Pilot License is your first major milestone in aviation. Aeromitra's PPL program provides comprehensive flight training and ground school instruction, whether you are pursuing flying as a personal passion or as the first step toward a Commercial Pilot License. Our experienced instructors guide you from your first dual flight to your final skill test.",
      features: [
        "Dual & Solo Flight Instruction",
        "PPL Theory Ground Classes",
        "Cross-Country Navigation Training",
        "DGCA Skill Test Preparation",
      ],
      image: getImageUrl("DGCA-CPL-Ground-Classes-in-Patna-1024x733.jpeg"),
    },
    {
      id: "dgca-ground-classes",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "DGCA Ground Classes",
      description:
        "Aeromitra's DGCA Ground Classes are designed to help aspiring and licensed pilots clear their theory examinations with confidence. Our expert faculty covers all subjects in depth — Air Regulations, Navigation, Meteorology, Technical General — using exam-focused materials and mock tests aligned to the latest DGCA syllabus.",
      features: [
        "Air Regulations & ICAO Law",
        "Navigation & Flight Planning",
        "Meteorology & Weather Analysis",
        "Technical General & Specific",
      ],
      image: getImageUrl("DGCA-Ground-School-in-Bhubaneswar-1024x733.jpg"),
    },
    {
      id: "student-pilot-license",
      icon: <PlaneLanding className="w-8 h-8 text-primary" />,
      title: "Student Pilot License (SPL)",
      description:
        "The Student Pilot License is the first official DGCA license and your entry point into aviation. Aeromitra's SPL program builds a solid foundation in aviation theory, airmanship, and basic flight skills — preparing you confidently for your first solo flight and the full pilot training journey ahead.",
      features: [
        "Aviation Theory Fundamentals",
        "Initial Dual Flight Instruction",
        "Solo Flight Preparation",
        "DGCA Medical & Documentation Support",
      ],
      image: getImageUrl("DGCA-Ground-School-in-Bhubaneswar-1024x733.jpg"),
    },
    {
      id: "type-rating",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Type Rating",
      description:
        "A Type Rating qualifies a licensed commercial pilot to operate a specific aircraft type required by airlines. Aeromitra's Type Rating program prepares you with in-depth aircraft systems training, extensive simulator hours, and DGCA skill test preparation — so you can meet airline requirements and expand your career prospects.",
      features: [
        "Aircraft Systems & Performance",
        "Simulator Training (Normal & Emergency)",
        "Line Training & OPC Preparation",
        "DGCA Type Rating Skill Test",
      ],
      image: getImageUrl("DGCA-Ground-School-in-Ranchi.jpg"),
    },
    {
      id: "flight-dispatcher",
      icon: <Radio className="w-8 h-8 text-primary" />,
      title: "Flight Dispatcher",
      description:
        "A Flight Dispatcher is a critical behind-the-scenes role in airline operations — responsible for flight planning, weather analysis, fuel management, and crew coordination. Aeromitra's Flight Dispatcher course provides comprehensive, industry-ready training that prepares you for certification and immediate employment in aviation operations.",
      features: [
        "Flight Planning & Fuel Management",
        "Aviation Meteorology",
        "Air Regulations & NOTAM",
        "Emergency Handling & Diversions",
      ],
      image: getImageUrl("DGCA-Ground-School-in-Ranchi.jpg"),
    },
    {
      id: "cabin-crew-training",
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Cabin Crew Training",
      description:
        "Aeromitra's Cabin Crew Training program prepares aspiring flight attendants with the skills, knowledge, and professional demeanor required by leading airlines. From safety procedures and emergency handling to grooming, hospitality, and communication — our program covers every aspect of a successful cabin crew career and connects graduates directly with airlines.",
      features: [
        "Aircraft Safety & Emergency Procedures",
        "In-Flight Service & Hospitality",
        "Professional Grooming & Presentation",
        "Mock Airline Interview Preparation",
      ],
      image: getImageUrl("DGCA-Ground-School-in-Thiruvananthapuram.jpg"),
    },
    {
      id: "tuition-financing",
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Tuition Financing",
      description:
        "Aeromitra believes financial constraints should never ground your aviation dreams. Our Tuition Financing program offers flexible EMI plans, education loan assistance through partner banks, and transparent fee structures — so you can focus entirely on your training and career without financial stress.",
      features: [
        "Flexible Monthly EMI Plans",
        "Education Loan Facilitation",
        "Scholarship Programs for Eligible Students",
        "Transparent, No-Hidden-Charge Fee Structure",
      ],
      image: getImageUrl("DGCA-Ground-School-in-Thiruvananthapuram.jpg"),
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="pt-[60px] md:pt-[50px]">
      <SEO
        title="Our Services - Aviation Training Programs"
        description="Explore our comprehensive aviation training programs including CPL, PPL, Type Rating, DGCA ground classes, and cabin crew training."
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" decoding="async"
            src={getOptimizedImage(getImageUrl("DGCA-Ground-School-in-Vishakhapatnam.jpg"), 1920)}
            alt="Aviation Training at Aeromitra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-primary text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4"
          >
            Capabilities & Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display mb-6"
          >
            DISCOVER OUR AVIATION TRAINING PROGRAMS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Explore our Training Programs & Elevate your Aviation Career to New Heights.
          </motion.p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-8">
            Built for Every Stage of Your Aviation Career
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            Aeromitra offers a wide range of training programs to cater to every
            aspiring aviator's needs. Whether you're starting from scratch with an SPL
            or advancing your career with a Type Rating, our expert team is here to
            guide you to the cockpit and beyond.
          </p>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-[#8ca18e] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                <div className="relative overflow-hidden aspect-[5/6] lg:aspect-[4/5]">
                  <img loading="lazy" decoding="async"
                    src={getOptimizedImage(service.image, 1200)}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="p-4 bg-white border border-stone-200 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-display text-gray-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="bg-white p-8 border border-stone-100 shadow-sm relative">
                  <h4 className="font-display text-lg mb-4 text-gray-800">
                    Program Highlights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-left">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-primary uppercase text-xs font-bold tracking-widest hover:text-gray-900 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-white text-stone-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display mb-6">FAQs</h2>
            <p className="text-gray-500 text-xl font-bold">
              Aviation Training — Common Questions
            </p>
            <p className="text-gray-500 font-light text-sm mt-2">
              We're here to answer all your aviation training questions and
              help you take the first step toward a career in the skies.
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
      <NewsletterSection />
    </div>
  );
};
