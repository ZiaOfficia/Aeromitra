import { useState, useEffect } from "react";
import { X, Send, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { submitToGoogleSheets } from "../../utils/googleSheets";

const COURSES = [
  "Commercial Pilot License (CPL)",
  "Private Pilot License (PPL)",
  "Student Pilot License (SPL)",
  "DGCA Ground Classes",
  "Type Rating",
  "Flight Dispatcher",
  "Cabin Crew Training",
  "Other / General Inquiry",
];

export const EnrollPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    courseInterest: "",
    message: "",
  });

  useEffect(() => {
    // Show popup once per session
    const dismissed = sessionStorage.getItem("enrollPopupDismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("enrollPopupDismissed", "true");
    setIsOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.courseInterest) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    await submitToGoogleSheets({
      name: form.name,
      email: form.email,
      phone: form.phone,
      courseInterest: form.courseInterest,
      message: `Country: ${form.country || "N/A"} | ${form.message}`,
      source: "Enroll Popup",
    });
    setIsSubmitting(false);
    dismiss();
    navigate("/thank-you");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
          onClick={(e) => e.target === e.currentTarget && dismiss()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-white w-full max-w-lg shadow-2xl overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-primary" />

            {/* Header */}
            <div className="px-8 pt-7 pb-5 flex items-start justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl text-gray-900 leading-tight">
                    Start Your Aviation Journey
                  </h2>
                  <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-widest">
                    Enroll Now — Free Counselling
                  </p>
                </div>
              </div>
              <button
                onClick={dismiss}
                className="text-gray-400 hover:text-gray-700 transition-colors mt-0.5"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-stone-50 px-4 py-2.5 text-sm text-gray-700 border border-transparent focus:border-primary focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="bg-stone-50 px-4 py-2.5 text-sm text-gray-700 border border-transparent focus:border-primary focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-stone-50 px-4 py-2.5 text-sm text-gray-700 border border-transparent focus:border-primary focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="India"
                    value={form.country}
                    onChange={handleChange}
                    className="bg-stone-50 px-4 py-2.5 text-sm text-gray-700 border border-transparent focus:border-primary focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                  Course of Interest <span className="text-primary">*</span>
                </label>
                <select
                  name="courseInterest"
                  value={form.courseInterest}
                  onChange={handleChange}
                  required
                  className="bg-stone-50 px-4 py-2.5 text-sm text-gray-700 border border-transparent focus:border-primary focus:outline-none focus:ring-0 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a course...
                  </option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  placeholder="Any questions or additional details..."
                  value={form.message}
                  onChange={handleChange}
                  rows={2}
                  className="bg-stone-50 px-4 py-2.5 text-sm text-gray-700 border border-transparent focus:border-primary focus:outline-none focus:ring-0 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[linear-gradient(to_right,theme(colors.primary)_50%,black_50%)] bg-[length:200%_100%] bg-left hover:bg-right text-white px-8 py-3.5 text-xs uppercase tracking-widest font-bold transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={13} />
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>

              <p className="text-center text-[10px] text-gray-400">
                No spam. We'll contact you within 24 hours.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
