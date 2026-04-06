import { getImageUrl } from "../utils/imageUtils";
export interface PortfolioItem {
  id: string;
  title: string;
  services: string;
  date: string;
  location: string;
  heroImage: string;
  description: string[];
  galleryImages: string[];
  videoUrl?: string; // YouTube ID
  testimonial?: {
    quote: string;
    author: string;
  };
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "rahul-sharma-cpl",
    title: "Capt. Rahul Sharma",
    services: "Commercial Pilot License (CPL)",
    date: "",
    location: "Lucknow, India",
    heroImage: getImageUrl("Best-DGCA-Ground-School-in-Vadodara-1024x733.jpg"),
    description: [
      "Rahul joined Aeromitra with a dream and left as a licensed commercial pilot. From his very first ground class to his final CPL checkride, his dedication never wavered.",
      "Today, Capt. Rahul Sharma flies for a leading Indian carrier — a proud success story that defines what Aeromitra Aviation Academy stands for.",
    ],
    galleryImages: [
      getImageUrl("Best-DGCA-Ground-School-in-Vadodara.jpg"),
      getImageUrl("best-flight-academies-in-India-1024x733.jpeg"),
      getImageUrl("best-flight-academies-in-India.jpeg"),
      getImageUrl("best-flight-schools-in-florida-8-rgj9tqq2t0rad3a5swwu2itf9rlazi6zj5kq8zowa8.jpg"),
      getImageUrl("Best-Pilot-School-in-India-1024x733.jpeg"),
      getImageUrl("Best-Pilot-School-in-India-1024x733.jpeg"),
    ],
    videoUrl: "xOnAX9pZTo8",
    testimonial: {
      quote:
        "Aeromitra gave me the knowledge, discipline, and confidence to clear every DGCA exam on the first attempt. I owe my wings to this academy.",
      author: "Capt. Rahul Sharma — CPL Graduate",
    },
  },
  {
    id: "priya-verma-cabin-crew",
    title: "Priya Verma",
    services: "Cabin Crew Training",
    date: "",
    location: "Lucknow, India",
    heroImage: getImageUrl("best-pilot-training-institute-in-India-1024x733.jpeg"),
    description: [
      "Priya came to Aeromitra unsure of her path. After completing our intensive Cabin Crew Training program, she walked into her IndiGo interview with complete confidence.",
      "Placed within 6 weeks of graduation, Priya now serves thousands of passengers monthly — embodying the professionalism and grace that Aeromitra instills in every student.",
    ],
    galleryImages: [
      getImageUrl("Best-Pilot-Training-Institute-in-India-1024x733.jpg"),
      getImageUrl("best-pilot-training-institute-in-India.jpeg"),
      getImageUrl("Best-Pilot-Training-Institute-in-India.jpg"),
      getImageUrl("ppl-img-e1697192272619.jpg"),
      getImageUrl("Cheapest-Flight-School-1024x733.jpg"),
      getImageUrl("Cheapest-Flight-School.jpg"),
    ],
    videoUrl: "QHeC9DgtmAk",
    testimonial: {
      quote:
        "The grooming sessions, emergency drills, and mock interviews at Aeromitra were exactly what I needed. I felt fully prepared on day one at the airline.",
      author: "Priya Verma — Cabin Crew, IndiGo Airlines",
    },
  },
  {
    id: "arjun-singh-dgca",
    title: "Arjun Singh",
    services: "DGCA Ground Classes",
    date: "",
    location: "Delhi, India",
    heroImage: getImageUrl("Cheapest-Place-to-Get-a-Private-Pilot-License-1024x733.jpeg"),
    description: [
      "Arjun came from a non-aviation background and needed structured, expert guidance to crack the DGCA ground school exams. Our faculty's approach made even the most complex subjects accessible.",
      "He cleared all seven DGCA subjects in a single attempt — a rare achievement that reflects both his hard work and the quality of Aeromitra's ground school program.",
    ],
    galleryImages: [
      getImageUrl("Cheapest-Place-to-Get-a-Private-Pilot-License.jpeg"),
      getImageUrl("Common-mistakes-student-pilots-do-and-how-to-avoid-them-2-300x200.webp"),
      getImageUrl("Common-mistakes-student-pilots-do-and-how-to-avoid-them-3-300x200.jpg"),
      getImageUrl("Common-mistakes-student-pilots-do-and-how-to-avoid-them-300x200.webp"),
      getImageUrl("contented-pilot-looking-forward-to-the-upcoming-flight-768x512-1-rgj9tqq2t0rad3a5swwu2itf9rlazi6zj5kq8zowa8.jpg"),
    ],
    videoUrl: "jgOf14RpA0M",
    testimonial: {
      quote:
        "Clearing all DGCA papers in one go felt impossible until I joined Aeromitra. The faculty breaks everything down so clearly — I couldn't have done it without them.",
      author: "Arjun Singh — DGCA Ground School Graduate",
    },
  },
  {
    id: "sneha-patel-type-rating",
    title: "Capt. Sneha Patel",
    services: "Type Rating",
    date: "",
    location: "Mumbai, India",
    heroImage: getImageUrl("Best-CPL-Institute-in-Surat.jpg"),
    description: [
      "Already a licensed CPL holder, Sneha came to Aeromitra for Type Rating support to qualify on the Airbus A320 — the aircraft she always dreamed of flying.",
      "With our structured Type Rating preparation program, Capt. Sneha Patel successfully joined a major Indian carrier and now commands one of the most popular narrow-body jets in the world.",
    ],
    galleryImages: [
      getImageUrl("DGCA-CPL-Ground-Classes-in-Delhi.jpeg"),
      getImageUrl("DGCA-CPL-Ground-Classes-in-Delhi.jpeg"),
      getImageUrl("DGCA-CPL-Ground-Classes-in-Patna-1024x733.jpeg"),
      getImageUrl("DGCA-CPL-Ground-Classes-in-Patna-1024x733.jpeg"),
      getImageUrl("DGCA-Ground-School-in-Bhubaneswar-1024x733.jpg"),
      getImageUrl("DGCA-Ground-School-in-Bhubaneswar-1024x733.jpg"),
    ],
    videoUrl: "oD3YPdOH5Xo",
    testimonial: {
      quote:
        "Aeromitra's Type Rating prep was thorough, practical, and focused exactly on what airlines test. I passed first time and I'm now flying the A320.",
      author: "Capt. Sneha Patel — A320 Type Rating",
    },
  },
  {
    id: "vikram-joshi-cpl",
    title: "Capt. Vikram Joshi",
    services: "Student Pilot License → CPL",
    date: "",
    location: "Lucknow, India",
    heroImage: getImageUrl("DGCA-Ground-School-in-Ranchi.jpg"),
    description: [
      "Vikram started his aviation journey with Aeromitra right from the Student Pilot License stage. Step by step, guided by experienced instructors, he built his hours and his confidence.",
      "His full progression — from SPL to PPL to CPL — was completed under the Aeromitra umbrella. His story is proof that with the right guidance, every aspiring pilot can reach the cockpit.",
    ],
    galleryImages: [
      getImageUrl("DGCA-Ground-School-in-Ranchi.jpg"),
      getImageUrl("DGCA-Ground-School-in-Thiruvananthapuram.jpg"),
      getImageUrl("DGCA-Ground-School-in-Thiruvananthapuram.jpg"),
      getImageUrl("DGCA-Ground-School-in-Vishakhapatnam.jpg"),
      getImageUrl("DGCA-Ground-School-in-Vishakhapatnam.jpg"),
    ],
    videoUrl: "zBWVfz6GEgk",
    testimonial: {
      quote:
        "From my very first solo to my CPL checkride, Aeromitra was with me every step. The instructors genuinely care about your progress.",
      author: "Capt. Vikram Joshi — CPL Graduate",
    },
  },
  {
    id: "anika-kapoor-cabin-crew",
    title: "Anika Kapoor",
    services: "Cabin Crew Training",
    date: "",
    location: "Lucknow, India",
    heroImage: getImageUrl("DGCA-Pariksha-1024x733.jpeg"),
    description: [
      "Anika enrolled in Aeromitra's Cabin Crew Training program with high aspirations and zero aviation background. Our trainers focused on building her confidence, technical knowledge, and professional presence.",
      "She cleared her airline selection process in the very first attempt and is now a qualified cabin crew member with a leading domestic carrier — living proof that the right training transforms careers.",
    ],
    galleryImages: [
      getImageUrl("DGCA-Pariksha-1024x733.jpeg"),
      getImageUrl("DGCA-Pilot-Training-in-Nagpur-1024x683.png"),
      getImageUrl("DGCA-Pilot-Training-in-Nagpur-1024x683.png"),
      getImageUrl("dl.beatsnoop.com-high-0091e7473468ea7121-1-300x200.jpg"),
      getImageUrl("dl.beatsnoop.com-high-0091e7473468ea7121-1-300x200.jpg"),
      getImageUrl("dl.beatsnoop.com-high-01bd9019e2110313d4-300x171.jpg"),
    ],
    videoUrl: "AGVkcq_Z3i4",
    testimonial: {
      quote:
        "The training at Aeromitra is unlike anything else. The mock interviews and grooming sessions gave me real confidence when it mattered most.",
      author: "Anika Kapoor — Cabin Crew, Air India Express",
    },
  },
  {
    id: "rohan-mehta-dispatcher",
    title: "Rohan Mehta",
    services: "Flight Dispatcher",
    date: "",
    location: "Delhi, India",
    heroImage: getImageUrl("dl.beatsnoop.com-high-01bd9019e2110313d4.jpg"),
    description: [
      "Rohan always wanted to be part of aviation operations but pursued the Flight Dispatcher route — a critical behind-the-scenes role that keeps airlines running safely.",
      "Aeromitra's Flight Dispatcher program gave Rohan the in-depth knowledge of flight planning, weather analysis, and fuel management he needed. He is now a certified dispatcher with a regional airline.",
    ],
    galleryImages: [
      getImageUrl("dl.beatsnoop.com-high-03000af04b9cc178ea.webp"),
      getImageUrl("dl.beatsnoop.com-high-1881002e0162c3f174.jpg"),
      getImageUrl("dl.beatsnoop.com-high-2cc0125c3f885223a8.jpg"),
      getImageUrl("dl.beatsnoop.com-high-310d3e7f0e2f02a9c2-1024x683.jpg"),
      getImageUrl("dl.beatsnoop.com-high-3828fdad1ac4980ace-1.jpg"),
      getImageUrl("dl.beatsnoop.com-high-61a348bb7d53be2569-1-300x168.jpg"),
    ],
    videoUrl: "oLKUzWJTzjo",
    testimonial: {
      quote:
        "Aeromitra's dispatcher program is comprehensive and industry-focused. I was job-ready the moment I completed the course.",
      author: "Rohan Mehta — Certified Flight Dispatcher",
    },
  },
  {
    id: "deepika-nair-ppl",
    title: "Deepika Nair",
    services: "Private Pilot License (PPL)",
    date: "",
    location: "Bangalore, India",
    heroImage: getImageUrl("dl.beatsnoop.com-high-6df1e4018035f9f3ed.jpg"),
    description: [
      "Deepika always dreamed of flying but believed it was out of reach. Aeromitra's Private Pilot License program showed her otherwise — with structured training, patient instructors, and a clear path forward.",
      "She earned her PPL and now flies recreationally while pursuing her CPL — a journey that began with one courageous decision to walk through our doors.",
    ],
    galleryImages: [
      getImageUrl("dl.beatsnoop.com-high-71065f6433f0371831.jpg"),
      getImageUrl("dl.beatsnoop.com-high-728076b4b879dc3067.jpg"),
      getImageUrl("dl.beatsnoop.com-high-87c5e58df9e76fe26d-300x200.webp"),
      getImageUrl("dl.beatsnoop.com-high-87c5e58df9e76fe26d-300x200.webp"),
      getImageUrl("dl.beatsnoop.com-high-92e19f92fc1415af5e.jpg"),
      getImageUrl("dl.beatsnoop.com-high-9926fb1e45e3900c6f-300x201.jpg"),
    ],
    videoUrl: "UITURVxnqn0",
    testimonial: {
      quote:
        "I never thought I'd be a pilot. Aeromitra made the impossible feel completely achievable. My first solo flight was the best day of my life.",
      author: "Deepika Nair — PPL Graduate",
    },
  },
  {
    id: "karan-bhatia-cpl",
    title: "Capt. Karan Bhatia",
    services: "Commercial Pilot License (CPL)",
    date: "",
    location: "Chandigarh, India",
    heroImage: getImageUrl("dl.beatsnoop.com-high-af4550fcd91a4ca8b8.jpg"),
    description: [
      "Karan came to Aeromitra with a Class 1 medical and a burning desire to fly commercially. Our CPL program, combined with rigorous DGCA ground school, gave him exactly the edge he needed.",
      "After completing all flight hours and clearing his CPL exams, Capt. Karan Bhatia secured his first officer position — turning years of determination into a soaring career.",
    ],
    galleryImages: [
      getImageUrl("dl.beatsnoop.com-high-c0c549b89ab07d2a78-300x200.webp"),
      getImageUrl("dl.beatsnoop.com-high-c0c8f868c70fcc4564-e1705477789788.jpg"),
      getImageUrl("dl.beatsnoop.com-high-c80278612a86278316.jpg"),
      getImageUrl("dl.beatsnoop.com-high-d23467030df9ce0ace.jpg"),
      getImageUrl("dl.beatsnoop.com-high-d23467030df9ce0ace.jpg"),
      getImageUrl("dl.beatsnoop.com-high-d9334c48297a42e9a4.jpg"),
    ],
    videoUrl: "RKfG3lWCZ80",
    testimonial: {
      quote:
        "The flight instructors at Aeromitra are world-class. Every session in the cockpit was purposeful, professional, and built toward real airline standards.",
      author: "Capt. Karan Bhatia — First Officer",
    },
  },
  {
    id: "sanya-gupta-cabin-crew",
    title: "Sanya Gupta",
    services: "Cabin Crew Training",
    date: "",
    location: "Lucknow, India",
    heroImage: getImageUrl("dl.beatsnoop.com-high-dd2195709e648bc8cc.jpg"),
    description: [
      "Sanya's journey at Aeromitra was transformative. She came as a shy graduate and left as a poised, airline-ready cabin crew professional who could handle any in-flight situation with calm and authority.",
      "Her placement with a top airline within weeks of completing the program speaks to the quality and industry relevance of Aeromitra's Cabin Crew Training curriculum.",
    ],
    galleryImages: [
      getImageUrl("dl.beatsnoop.com-high-dd58471bafc8b462f4-300x168.jpg"),
      getImageUrl("dl.beatsnoop.com-high-df9646cb11a5eb5e8b-1.jpg"),
      getImageUrl("dl.beatsnoop.com-high-e0bbde34f89973ffcb-300x168.jpg"),
      getImageUrl("dl.beatsnoop.com-high-e29165c63e87a3bbd7-300x200.jpg"),
      getImageUrl("dl.beatsnoop.com-high-e37aaf9882107c6457-300x169.webp"),
      getImageUrl("dl.beatsnoop.com-high-e479ddf7c4b95dff2a-300x169.jpg"),
    ],
    videoUrl: "7IbkX22eTvg",
    testimonial: {
      quote:
        "Aeromitra's trainers pushed me beyond my comfort zone and built a version of me I didn't know existed. I'm proud of how far I've come.",
      author: "Sanya Gupta — Cabin Crew Graduate",
    },
  },
  {
    id: "nikhil-rao-dgca",
    title: "Nikhil Rao",
    services: "DGCA Ground Classes",
    date: "",
    location: "Hyderabad, India",
    heroImage: getImageUrl("dl.beatsnoop.com-high-edecf2b7e7d00795c8.jpg"),
    description: [
      "Nikhil had previously attempted DGCA exams independently and struggled. Joining Aeromitra's dedicated ground school program changed everything — structured study plans, expert faculty, and regular mock tests made the difference.",
      "He cleared his remaining DGCA papers on his very next attempt and is now completing his flight hours toward a full CPL.",
    ],
    galleryImages: [
      getImageUrl("dl.beatsnoop.com-high-fd0eca9482b98dcd64-1-300x200.webp"),
      getImageUrl("dorm1.jpg"),
      getImageUrl("dorm2.jpg"),
      getImageUrl("flyafe-8-min.png"),
      getImageUrl("feature-image.png"),
      getImageUrl("feature-image.png"),
    ],
    videoUrl: "eQrxtdKEOcM",
    testimonial: {
      quote:
        "After failing on my own, Aeromitra's ground school gave me a completely new approach. Their faculty knows exactly what DGCA examiners are looking for.",
      author: "Nikhil Rao — DGCA Ground Classes",
    },
  },
  {
    id: "tanvi-shah-ppl",
    title: "Tanvi Shah",
    services: "Private Pilot License (PPL)",
    date: "",
    location: "Ahmedabad, India",
    heroImage: getImageUrl("flight-school-florida-2-rgj9tqq2t0qpwhxvgu8djezevx53pm7sxo2w815x8o.jpg"),
    description: [
      "Tanvi's PPL journey with Aeromitra was marked by consistency and passion. She logged every flight hour with purpose, and her ground school scores were among the highest in her batch.",
      "She now holds her Private Pilot License and plans to continue toward a Commercial Pilot License — a high note that perfectly captures the Aeromitra student experience.",
    ],
    galleryImages: [
      getImageUrl("flight-school-florida-2.jpg"),
      getImageUrl("flight-schools-in-florida-1.jpg"),
      getImageUrl("flight-schools-in-florida-1-rgj9tqq2t0qpwhxvgu8djezevx53pm7sxo2w815x8o.jpg"),
      getImageUrl("flight-schools-in-florida-1-rgj9tqq2t0qpwhxvgu8djezevx53pm7sxo2w815x8o.jpg"),
      getImageUrl("flight-schools-in-florida-1.jpg"),
      getImageUrl("Flight-Simulation-Training-min-rgj9tqq2t0qpwhxvgu8djezevx53pm7sxo2w815x8o.png"),
    ],
    videoUrl: "hBGJiC7buZg",
    testimonial: {
      quote:
        "Professional, structured, and genuinely inspiring. Aeromitra sets a standard that I'd highly recommend to anyone serious about aviation.",
      author: "Tanvi Shah — PPL Graduate",
    },
  },
];
