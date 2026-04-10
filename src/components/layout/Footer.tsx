import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-stone-950 border-t border-white/10 py-16 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1"
          >
            <div className="text-2xl font-display font-bold tracking-tighter mb-3 text-white">
              AEROMITRA<span className="text-primary">.</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest">
              Aeromitra Aviation Academy — Turning your dream of flying into a
              rewarding career. India's trusted aviation training institute for
              CPL, PPL, DGCA Ground Classes, Cabin Crew, and more.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="lg:ml-17">
            <h5 className="text-[14px] uppercase tracking-widest font-bold mb-6 text-white">
              Navigation
            </h5>
            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-400">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Pilot Training
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/accommodations"
                  className="hover:text-primary transition-colors"
                >
                  Accommodations
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h5 className="text-[14px] uppercase tracking-widest font-bold mb-6 text-white">
              Connect
            </h5>
            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-400">
              <li>
                <a
                  href="https://www.instagram.com/aeromitra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/aeromitra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Facebook size={16} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@aeromitra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Youtube size={16} /> Youtube
                </a>
              </li>
            </ul>

            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-400 mt-6">
              <li className="hover:text-primary transition-colors flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+919005527666">+91 9005527666</a>
              </li>
              <li className="hover:text-primary transition-colors flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+919076524305">+91 9076524305</a>
              </li>
              <li className="hover:text-primary transition-colors flex items-center gap-2">
                <MapPin size={14} className="shrink-0" />
                <span>34 A, 2nd Floor, Ramanand Trade Centre, Aliganj, Lucknow 226024</span>
              </li>
              <li className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:info@aeromitraa.com">info@aeromitraa.com</a>
              </li>
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div variants={itemVariants}>
            <h5 className="text-[14px] uppercase tracking-widest font-bold mb-6 text-white">
              Our Courses
            </h5>
            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-400">
              <li>
                <Link
                  to="/services/commercial-pilot-license"
                  className="hover:text-primary transition-colors"
                >
                  Commercial Pilot License
                </Link>
              </li>
              <li>
                <Link
                  to="/services/private-pilot-license"
                  className="hover:text-primary transition-colors"
                >
                  Private Pilot License
                </Link>
              </li>
              <li>
                <Link
                  to="/services/dgca-ground-classes"
                  className="hover:text-primary transition-colors"
                >
                  DGCA Ground Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/services/student-pilot-license"
                  className="hover:text-primary transition-colors"
                >
                  Student Pilot License
                </Link>
              </li>
              <li>
                <Link
                  to="/services/type-rating"
                  className="hover:text-primary transition-colors"
                >
                  Type Rating
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cabin-crew-training"
                  className="hover:text-primary transition-colors"
                >
                  Cabin Crew Training
                </Link>
              </li>
              <li>
                <Link
                  to="/tuition-financing"
                  className="hover:text-primary transition-colors"
                >
                  Tuition Financing
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-500"
        >
          <p>© 2026 Aeromitra Aviation Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
