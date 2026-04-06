import { getImageUrl } from "../utils/imageUtils";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../components/common/Button";
import { ctaContent } from "../data/content";
import { SEO } from "../components/common/SEO";
import { useNavigate } from "react-router-dom";
import { submitToGoogleSheets } from "../utils/googleSheets";

export const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fire-and-forget — goes to Google Sheet + Gmail notification
    submitToGoogleSheets({
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      courseInterest: formData.courseInterest,
      message: formData.message,
      source: "Contact Page",
    });

    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-stone-50">
      <SEO
        title="Contact Us — Aeromitra Aviation Academy"
        description="Get in touch with Aeromitra Aviation Academy. Enroll in CPL, PPL, DGCA Ground Classes, Cabin Crew, and more. Located in Delhi, India."
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 opacity-40">
          <img
            loading="lazy"
            decoding="async"
            src={getImageUrl("aircraft-rest-hangar-lined-up-like-steel-birds-scaled.webp")}
            alt="Contact Aeromitra"
            className="w-full h-full object-cover"
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
                Start Your Aviation Journey
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display mb-6 leading-tight">
              Get In{" "}
              <span className="text-white/50 italic font-serif">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Ready to take off? Our counselors are here to guide you toward the
              right aviation program.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl font-display mb-8 text-stone-900">
              {ctaContent.heading}
            </h2>
            <div className="text-lg text-gray-600 mb-12 leading-relaxed">
              {ctaContent.text.map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))}
            </div>
            <div className="space-y-8">
              {[
                { icon: <Phone size={24} />, label: "Phone", value: "+91 9005527666 / +91 9076524305", href: "tel:+919005527666" },
                { icon: <Mail size={24} />, label: "Email", value: "info@aeromitraa.com", href: "mailto:info@aeromitraa.com" },
                { icon: <MapPin size={24} />, label: "Location", value: "34 A, 2nd Floor, Ramanand Trade Centre, Above Woodland Showroom, Kapurthala, Aliganj, Lucknow 226024", href: null },
                { icon: <Clock size={24} />, label: "Office Hours", value: "Mon – Sat: 9:30 AM – 6:30 PM", href: null },
              ].map(({ icon, label, value, href }) => (
                <motion.div
                  key={label}
                  className="flex items-center space-x-6 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="p-4 bg-white border border-stone-100 rounded-full text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-lg font-display text-gray-800 hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-lg font-display text-gray-800">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 md:p-12 border border-t-4 border-stone-100 border-t-primary shadow-2xl rounded-sm space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-3 text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-4 hover:bg-stone-100 transition-colors"
                  placeholder="Rahul"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-3 text-gray-500">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-4 hover:bg-stone-100 transition-colors"
                  placeholder="Sharma"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-3 text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-4 hover:bg-stone-100 transition-colors"
                placeholder="rahul@example.com"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-3 text-gray-500">
                Contact Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-4 hover:bg-stone-100 transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-3 text-gray-500">
                Course of Interest
              </label>
              <select
                required
                value={formData.courseInterest}
                onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-4 text-gray-500 hover:bg-stone-100 transition-colors appearance-none"
              >
                <option value="" disabled>Select a Course</option>
                <option value="Commercial Pilot License (CPL)">Commercial Pilot License (CPL)</option>
                <option value="Private Pilot License (PPL)">Private Pilot License (PPL)</option>
                <option value="Student Pilot License (SPL)">Student Pilot License (SPL)</option>
                <option value="DGCA Ground Classes">DGCA Ground Classes</option>
                <option value="Type Rating">Type Rating</option>
                <option value="Flight Dispatcher">Flight Dispatcher</option>
                <option value="Cabin Crew Training">Cabin Crew Training</option>
                <option value="Tuition Financing">Tuition Financing</option>
                <option value="Other / General Inquiry">Other / General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-3 text-gray-500">
                Message (Optional)
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-4 hover:bg-stone-100 transition-colors resize-none"
                placeholder="Tell us about your aviation goals..."
              />
            </div>

            <Button type="submit" className="w-full py-5 tracking-[0.2em] text-sm">
              Send Enquiry
            </Button>
          </form>
        </motion.div>
      </section>

      {/* Campus Locations */}
      <section className="py-16 px-6 bg-stone-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.35em] mb-3 block">
              Our Campuses
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-stone-900">
              Find Us Near You
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Delhi — Head Office",
                name: "Aero Mitra Aviation Pvt. Ltd.",
                address: "4th floor Phoolwari Building, 1, Block B 7, Arjun Nagar, Safdarjung Enclave, New Delhi 110029",
                phone: "+91 9005527666",
                email: "info@aeromitraa.com",
              },
              {
                label: "Delhi — Secondary",
                name: "Aero Mitra Aviation Pvt. Ltd.",
                address: "F-624, 2nd floor, near Anytime Fitness, Ramphal Chowk Rd, Block-H, Palam Village, New Delhi 110045",
                phone: "+91 9005527666",
                email: "info@aeromitraa.com",
              },
              {
                label: "Lucknow Campus",
                name: "Aero Mitra Aviation Pvt. Ltd.",
                address: "34 A, 2nd Floor, Ramanand Trade Centre, Above Woodland Showroom, Kapurthala, Aliganj, Lucknow 226024",
                phone: "+91 9005527666",
                email: "info@aeromitraa.com",
              },
              {
                label: "USA Campus",
                name: "Kingsky Flight Academy Pvt. Ltd.",
                address: "3131 Flightline Dr. – Suite 304, Lakeland, FL 33811",
                phone: "+1 (954) 643-3459",
                email: "info@aeromitraa.com",
              },
            ].map((campus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-6 border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold mb-3 block">
                  {campus.label}
                </span>
                <p className="font-display text-stone-900 text-base mb-3">{campus.name}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-start gap-2">
                    <MapPin size={13} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{campus.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-primary flex-shrink-0" />
                    <a href={`tel:${campus.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                      {campus.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-primary flex-shrink-0" />
                    <a href={`mailto:${campus.email}`} className="hover:text-primary transition-colors">
                      {campus.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section — Delhi */}
      <section className="h-[65vh] max-w-7xl mx-auto mb-12 rounded-2xl bg-stone-100 relative group overflow-hidden shadow-xl">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          className="transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
          src="https://maps.google.com/maps?q=Delhi,India&t=&z=12&ie=UTF8&iwloc=&output=embed"
          title="Aeromitra Aviation Academy — Delhi"
        />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-50 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-8 left-6 md:bottom-12 md:left-12 bg-white/90 backdrop-blur-md p-8 shadow-2xl border-l-4 border-primary max-w-sm"
        >
          <h3 className="text-2xl font-display text-stone-900 mb-2">
            Visit Aeromitra
          </h3>
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">
            Mon – Sat: 9:30 AM – 6:30 PM
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 shrink-0" size={20} />
              <p className="text-gray-700 leading-relaxed">34 A, 2nd Floor, Ramanand Trade Centre, Above Woodland Showroom, Kapurthala, Aliganj, Lucknow 226024</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-primary shrink-0" size={20} />
              <a href="tel:+919005527666" className="text-gray-700 hover:text-primary transition-colors">
                +91 9005527666
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-primary shrink-0" size={20} />
              <a href="mailto:info@aeromitraa.com" className="text-gray-700 hover:text-primary transition-colors">
                info@aeromitraa.com
              </a>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Delhi,India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-stone-900 transition-colors group/link"
          >
            Get Directions{" "}
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};
