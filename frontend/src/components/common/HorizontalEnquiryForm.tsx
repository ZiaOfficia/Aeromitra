import { useState } from "react";
import { Button } from "./Button";
import { submitToGoogleSheets } from "../../utils/googleSheets";
import { useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";

export const HorizontalEnquiryForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.courseInterest) {
      alert("Please fill in all required fields.");
      return;
    }

    // Fire-and-forget — data goes to Google Sheet + Gmail notification
    submitToGoogleSheets({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      courseInterest: formData.courseInterest,
      message: formData.message,
      source: "Homepage Enquiry Bar",
    });

    navigate("/thank-you");
  };

  return (
    <div className="bg-stone-50 py-12 px-6 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 border-t-4 border-primary">
          <div className="w-full md:w-1/4">
            <h3 className="font-display text-xl text-gray-900">
              Begin Your Enquiry
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Tell us your aviation goals and we'll get back to you shortly.
            </p>
          </div>

          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
              />
              <select
                required
                value={formData.courseInterest}
                onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600 appearance-none"
              >
                <option value="" disabled>Course of Interest *</option>
                <option value="Commercial Pilot License (CPL)">CPL</option>
                <option value="Private Pilot License (PPL)">PPL</option>
                <option value="Student Pilot License (SPL)">SPL</option>
                <option value="DGCA Ground Classes">DGCA Ground Classes</option>
                <option value="Type Rating">Type Rating</option>
                <option value="Flight Dispatcher">Flight Dispatcher</option>
                <option value="Cabin Crew Training">Cabin Crew Training</option>
                <option value="Other / General Inquiry">Other</option>
              </select>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Message (Optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
                />
                <MessageSquare className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
              </div>

              <Button className="w-full" onClick={handleSubmit}>
                Send Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
