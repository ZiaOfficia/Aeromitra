import { Facebook, Instagram, Mail, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const TopBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-stone-950 text-primary border-b border-white/10 py-2 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-widest uppercase">
        <div className="flex items-center space-x-4">
          <a
            href="tel:+919999228597"
            className="flex items-center hover:text-white transition-colors"
          >
            <Phone size={18} className="mr-1" /> +91 9999228597
          </a>
          <a
            href="mailto:admin@aeromitra.com"
            className="hidden md:flex items-center hover:text-white transition-colors"
          >
            <Mail size={18} className="mr-1" />
            <span className="hidden md:inline">admin@aeromitra.com</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center hover:text-white transition-colors gap-1">
            <Clock size={16} />
            <span>Mon–Sat 09:30 AM – 06:30 PM</span>
          </div>
          <a
            href="https://www.instagram.com/aeromitra/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/aeromitra/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
