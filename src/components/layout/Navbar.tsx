import { getImageUrl } from "../../utils/imageUtils";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight, Download } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isPilotTrainingOpen, setIsPilotTrainingOpen] = useState(false);
  const [mobileBrochureOpen, setMobileBrochureOpen] = useState(false);
  const [mobilePilotOpen, setMobilePilotOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to determine link path
  const getLinkPath = (href: string) => {
    if (href === "#") return "/";
    if (href.startsWith("#")) {
      return location.pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  const brochureItems = [
    {
      name: "Pilot Training",
      hasSub: true,
      subItems: [
        { name: "USA", href: "/brochures/pilot-training-usa.pdf" },
        { name: "South Africa", href: "/brochures/pilot-training-sa.pdf" },
        { name: "Greece", href: "/brochures/pilot-training-greece.pdf" },
      ],
    },
    { name: "Other Courses", href: "/brochures/other-courses.pdf", hasSub: false },
  ];

  const navLinks = [
    { name: "Home", href: "#", isRouterLink: true, path: "/" },
    { name: "About Us", href: "/about", isRouterLink: true, path: "/about" },
    {
      name: "Pilot Training",
      href: "/services",
      isRouterLink: true,
      path: "/services",
      hasDropdown: true,
    },
    { name: "Gallery", href: "/gallery", isRouterLink: true, path: "/gallery" },
    { name: "Tuition Financing", href: "/tuition-financing", isRouterLink: true, path: "/tuition-financing" },
    { name: "Accommodations", href: "/accommodations", isRouterLink: true, path: "/accommodations" },
    { name: "Contact Us", href: "/contact", isRouterLink: true, path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#060c1a]/96 backdrop-blur-md border-b border-[#c4a44a]/30 py-1.5 lg:py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-r from-[#060c1a] via-[#0a1628] to-[#060c1a] border-b border-[#c4a44a]/20 py-1.5 lg:py-2.5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/">
            <img
              loading="lazy"
              decoding="async"
              src={getImageUrl("aeromitra_logo_transparent.png")}
              alt="Aeromitra Aviation Academy Logo"
              className="h-10 sm:h-11 lg:h-16 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest text-white/75">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              {link.isRouterLink ? (
                <Link
                  to={link.path!}
                  className={clsx(
                    "hover:text-primary transition-colors duration-300 relative group flex items-center gap-1",
                    location.pathname === link.path && "text-primary",
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} />}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ) : (
                <a
                  href={getLinkPath(link.href)}
                  className="hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              )}

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                    >
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-2">
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="block px-6 py-3 text-[10px] text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Download Brochure + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Download Brochure Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsBrochureOpen(true)}
            onMouseLeave={() => {
              setIsBrochureOpen(false);
              setIsPilotTrainingOpen(false);
            }}
          >
            <button className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/75 hover:text-[#c4a44a] transition-colors duration-300 border border-white/20 hover:border-[#c4a44a]/60 px-4 py-2 rounded-sm">
              <Download size={13} />
              Download Brochure
              <ChevronDown size={13} className={clsx("transition-transform duration-200", isBrochureOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isBrochureOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full right-0 pt-2 w-52 z-50"
                >
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-visible py-1.5">
                    {brochureItems.map((item) => (
                      <div
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => item.hasSub && setIsPilotTrainingOpen(true)}
                        onMouseLeave={() => item.hasSub && setIsPilotTrainingOpen(false)}
                      >
                        {item.hasSub ? (
                          <button className="w-full flex items-center justify-between px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors">
                            {item.name}
                            <ChevronRight size={13} />
                          </button>
                        ) : (
                          <a
                            href={item.href}
                            download
                            className="flex items-center justify-between px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors"
                          >
                            {item.name}
                            <Download size={11} className="opacity-50" />
                          </a>
                        )}

                        {/* Sub-dropdown for Pilot Training */}
                        {item.hasSub && item.subItems && (
                          <AnimatePresence>
                            {isPilotTrainingOpen && (
                              <motion.div
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -8 }}
                                transition={{ duration: 0.15 }}
                                className="absolute top-0 right-full mr-1 w-44"
                              >
                                <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-1.5">
                                  {item.subItems.map((sub) => (
                                    <a
                                      key={sub.name}
                                      href={sub.href}
                                      download
                                      className="flex items-center justify-between px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors"
                                    >
                                      {sub.name}
                                      <Download size={11} className="opacity-50" />
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="inline-block bg-[linear-gradient(to_right,theme(colors.primary)_50%,black_50%)] bg-[length:200%_100%] bg-left hover:bg-right text-white px-8 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-500 transform hover:scale-105 active:scale-95"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#070e1c] border-b border-[#c4a44a]/20 overflow-y-auto shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            style={{ maxHeight: "calc(100vh - 56px)" }}
          >
            <div className="flex flex-col space-y-4 p-6 text-sm font-medium uppercase tracking-widest text-white/80 pb-20">
              {navLinks.map((link, i) => (
                <div key={link.name}>
                  {link.isRouterLink ? (
                    <Link
                      to={link.path!}
                      className="hover:text-[#c4a44a] transition-colors flex justify-between items-center py-2 border-b border-white/5"
                      onClick={() =>
                        !link.hasDropdown && setIsMobileMenuOpen(false)
                      }
                    >
                      <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {link.name}
                      </motion.span>
                      {link.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className={clsx(
                            "transition-transform",
                            isServicesOpen && "rotate-180",
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsServicesOpen(!isServicesOpen);
                          }}
                        />
                      )}
                    </Link>
                  ) : (
                    <a
                      href={getLinkPath(link.href)}
                      className="hover:text-[#c4a44a] transition-colors block py-2 border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {link.name}
                      </motion.span>
                    </a>
                  )}

                  {/* Mobile Submenu */}
                  {link.hasDropdown && isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-white/5 rounded-lg overflow-hidden ml-4 mt-2 border border-white/10"
                    >
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block px-4 py-3 text-xs text-white/70 border-b border-white/5 last:border-none hover:text-[#c4a44a] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              {/* Mobile Download Brochure */}
              <div className="border-t border-white/10 pt-4">
                <button
                  className="w-full flex items-center justify-between py-2 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-[#c4a44a] transition-colors"
                  onClick={() => setMobileBrochureOpen(!mobileBrochureOpen)}
                >
                  <span className="flex items-center gap-2">
                    <Download size={14} />
                    Download Brochure
                  </span>
                  <ChevronDown size={14} className={clsx("transition-transform", mobileBrochureOpen && "rotate-180")} />
                </button>
                {mobileBrochureOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 mt-1"
                  >
                    {/* Pilot Training */}
                    <button
                      className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-[#c4a44a] transition-colors"
                      onClick={() => setMobilePilotOpen(!mobilePilotOpen)}
                    >
                      Pilot Training
                      <ChevronDown size={12} className={clsx("transition-transform", mobilePilotOpen && "rotate-180")} />
                    </button>
                    {mobilePilotOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-white/5 rounded-lg overflow-hidden ml-3 border border-white/10"
                      >
                        {[
                          { name: "USA", href: "/brochures/pilot-training-usa.pdf" },
                          { name: "South Africa", href: "/brochures/pilot-training-sa.pdf" },
                          { name: "Greece", href: "/brochures/pilot-training-greece.pdf" },
                        ].map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            download
                            className="flex items-center justify-between px-4 py-2.5 text-xs text-white/70 border-b border-white/5 last:border-none hover:text-[#c4a44a] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                            <Download size={10} className="opacity-50" />
                          </a>
                        ))}
                      </motion.div>
                    )}
                    {/* Other Courses */}
                    <a
                      href="/brochures/other-courses.pdf"
                      download
                      className="flex items-center justify-between px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-[#c4a44a] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Other Courses
                      <Download size={11} className="opacity-50" />
                    </a>
                  </motion.div>
                )}
              </div>

              <Link
                to="/contact"
                className="bg-primary text-white px-6 py-3 text-center text-xs font-bold uppercase tracking-widest mt-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
