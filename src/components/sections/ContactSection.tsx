import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Button } from "../common/Button";
import { ctaContent } from "../../data/content";
import { submitToGoogleSheets } from "../../utils/googleSheets";

export const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fire-and-forget — data goes to Google Sheet + Gmail notification
    submitToGoogleSheets({
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      courseInterest: formData.courseInterest,
      message: formData.message,
      source: "Contact Section",
    });

    // Redirect instantly without waiting
    navigate("/thank-you");
  };

  return (
    <section className="py-24 px-6 relative" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Contact Info (Left) */}
        <div>
          <h2 className="text-5xl font-display mb-8">{ctaContent.heading}</h2>
          <div className="text-lg text-gray-600 mb-12">
            {ctaContent.text.map((p, i) => (
              <p key={i} className="mb-4">
                {p}
              </p>
            ))}
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="p-2 bg-stone-100 rounded-full text-primary">
                <Phone size={20} />
              </span>
              <span className="text-sm uppercase tracking-widest text-gray-800">
                +91 9005527666 / +91 9076524305
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="p-2 bg-stone-100 rounded-full text-primary">
                <MapPin size={20} />
              </span>
              <span className="text-sm uppercase tracking-widest text-gray-800">
                34 A, 2nd Floor, Ramanand Trade Centre, Above Woodland Showroom, Kapurthala, Aliganj, Lucknow 226024
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="p-2 bg-stone-100 rounded-full text-primary">
                <Mail size={20} />
              </span>
              <span className="text-sm uppercase tracking-widest text-gray-800">
                info@aeromitraa.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="p-2 bg-stone-100 rounded-full text-primary">
                <Clock size={20} />
              </span>
              <span className="text-sm uppercase tracking-widest text-gray-800">
                Mon – Sat: 9:30 AM – 6:30 PM
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form (Right) */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 border border-t-4 border-gray-100 border-t-primary shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
                First Name
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
              Contact Number
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
              Course of Interest
            </label>
            <select
              required
              value={formData.courseInterest}
              onChange={(e) =>
                setFormData({ ...formData, courseInterest: e.target.value })
              }
              className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3 text-gray-500 appearance-none"
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
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
              Message (Optional)
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3 resize-none"
              placeholder="Tell us about your aviation goals..."
            ></textarea>
          </div>

          <Button type="submit" className="w-full py-4 tracking-[0.2em]">
            Send Enquiry
          </Button>
        </form>
      </div>
    </section>
  );
};
