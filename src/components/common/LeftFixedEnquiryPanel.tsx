import { Mail, Clock, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import { submitToGoogleSheets } from "../../utils/googleSheets";

export const LeftFixedEnquiryPanel = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button (Vertical text) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white py-6 px-2 rounded-l-md shadow-lg hover:bg-opacity-90 transition-all font-bold uppercase tracking-widest text-xs"
          style={{ writingMode: "vertical-rl" }}
        >
          Enquire Now
        </button>
      </div>

      {/* Slide-in Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-display text-xl font-bold">Quick Enquiry</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-800"
            >
              <X size={24} />
            </button>
          </div>

          <form
            className="space-y-4 flex-1"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);

              // Fire-and-forget — data goes to Google Sheet + Gmail notification
              submitToGoogleSheets({
                name: data.get("name") as string,
                email: data.get("email") as string,
                phone: data.get("phone") as string,
                courseInterest: data.get("courseInterest") as string,
                message: data.get("message") as string,
                source: "Side Panel Enquiry",
              });

              navigate("/thank-you");
            }}
          >
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500">
                Full Name
              </label>
              <input
                name="name"
                required
                type="text"
                className="w-full bg-stone-50 border border-gray-200 p-2 focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500">
                Email
              </label>
              <input
                name="email"
                required
                type="email"
                className="w-full bg-stone-50 border border-gray-200 p-2 focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500">
                Phone Number
              </label>
              <input
                name="phone"
                required
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-stone-50 border border-gray-200 p-2 focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500">
                Course of Interest
              </label>
              <select
                name="courseInterest"
                required
                defaultValue=""
                className="w-full bg-stone-50 border border-gray-200 p-2 focus:border-primary focus:outline-none text-gray-500 appearance-none"
              >
                <option value="" disabled>Select a Course</option>
                <option value="Commercial Pilot License (CPL)">CPL</option>
                <option value="Private Pilot License (PPL)">PPL</option>
                <option value="Student Pilot License (SPL)">SPL</option>
                <option value="DGCA Ground Classes">DGCA Ground Classes</option>
                <option value="Type Rating">Type Rating</option>
                <option value="Flight Dispatcher">Flight Dispatcher</option>
                <option value="Cabin Crew Training">Cabin Crew Training</option>
                <option value="Other / General Inquiry">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500">
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Your aviation goals..."
                className="w-full bg-stone-50 border border-gray-200 p-2 focus:border-primary focus:outline-none resize-none"
              />
            </div>

            <Button type="submit" className="w-full mt-2">
              Send Enquiry
            </Button>
          </form>

          {/* Footer info */}
          <div className="mt-auto pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Mail size={16} className="text-primary shrink-0" />
              <span>info@aeromitraa.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Clock size={16} className="text-primary shrink-0" />
              <span>Mon–Sat: 9:30 AM – 6:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
