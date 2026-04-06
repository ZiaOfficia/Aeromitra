import { getImageUrl } from "../utils/imageUtils";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Full HTML/Markdown content
  image: string;
  date: string;
  author: string;
  category: string;
  tags?: string; // Comma-separated tags
  createdAt?: string; // Raw ISO date for URL generation
}

/**
 * Generate a date-based URL for a blog post.
 * e.g., /2026/01/21/how-to-become-a-commercial-pilot-india
 */
export const getBlogPostUrl = (slug: string, createdAt?: string): string => {
  const cleanSlug = slug.replace(/^\/+/, "");
  if (createdAt) {
    const d = new Date(createdAt);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `/${year}/${month}/${day}/${cleanSlug}`;
  }
  // Fallback if no createdAt
  return `/blog/${cleanSlug}`;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-become-commercial-pilot-india-2024",
    title: "How to Become a Commercial Pilot in India — Complete Guide 2024",
    excerpt:
      "A comprehensive step-by-step guide to obtaining your CPL in India — from SPL to DGCA exams, flight hours, and airline placement.",
    content: `
      <p>Becoming a Commercial Pilot in India is a structured journey that requires dedication, the right training, and passing DGCA examinations. Here is a complete guide:</p>
      <h3>Step 1: Obtain a Student Pilot License (SPL)</h3>
      <p>The SPL is your first official license from DGCA. You must be at least 16 years old, have passed Class 10 with Physics and Mathematics, and hold a valid DGCA Class 2 Medical Certificate.</p>
      <h3>Step 2: Get a Private Pilot License (PPL)</h3>
      <p>After your SPL, accumulate the required flight hours and clear DGCA PPL theory examinations to obtain your Private Pilot License.</p>
      <h3>Step 3: Commercial Pilot License (CPL)</h3>
      <p>The CPL requires a minimum of 200 flight hours, clearing all DGCA CPL theory subjects, and passing a skill test. A valid DGCA Class 1 Medical Certificate is mandatory.</p>
      <h3>Step 4: Type Rating</h3>
      <p>After getting your CPL, most airlines require a Type Rating on the specific aircraft they operate before hiring you.</p>
      <p>At Aeromitra Aviation Academy, we guide you through every step of this journey with experienced instructors, DGCA-aligned training, and dedicated placement support.</p>
    `,
    image: getImageUrl("flyafe-min.png"),
    date: "Mar 10, 2026",
    author: "AMA Team",
    category: "Career Guide",
  },
  {
    id: "2",
    slug: "dgca-exam-preparation-tips",
    title: "Top 10 Tips to Crack DGCA Exams on Your First Attempt",
    excerpt:
      "Proven strategies from our expert faculty to help you clear DGCA ground school exams on the first try.",
    content: `
      <p>DGCA theory examinations are rigorous, but with the right preparation strategy, you can clear them on your first attempt. Here are our top tips:</p>
      <h3>1. Understand the Syllabus Thoroughly</h3>
      <p>Start by downloading the DGCA exam syllabus and understanding the weightage of each topic. Focus on high-weightage areas first.</p>
      <h3>2. Use Approved Study Materials</h3>
      <p>Stick to DGCA-approved books and study materials. At Aeromitra, we provide specially curated study guides for each subject.</p>
      <h3>3. Practice with Question Banks</h3>
      <p>Solve as many previous year questions and mock tests as possible. Pattern recognition is key to DGCA exam success.</p>
      <h3>4. Regular Revision</h3>
      <p>Aviation subjects like Meteorology and Navigation require regular revision to retain formulas, charts, and procedures.</p>
      <h3>5. Join a Structured Ground School</h3>
      <p>Enrolling in a dedicated ground school like Aeromitra ensures you cover the entire syllabus systematically with expert guidance.</p>
    `,
    image: getImageUrl("Best-Pilot-Training-Institute-in-India.jpg"),
    date: "Feb 20, 2026",
    author: "AMA Faculty",
    category: "Exam Prep",
  },
  {
    id: "3",
    slug: "ppl-vs-cpl-difference-india",
    title: "PPL vs CPL: Which Pilot License Should You Pursue?",
    excerpt:
      "Understanding the key differences between Private Pilot License and Commercial Pilot License programs in India.",
    content: `
      <p>Choosing between a PPL and a CPL depends on your aviation goals. Here's a clear breakdown:</p>
      <h3>Private Pilot License (PPL)</h3>
      <p>A PPL allows you to fly as pilot-in-command for personal or recreational purposes but NOT for commercial operations. It typically requires fewer flight hours and is a stepping stone to a CPL.</p>
      <h3>Commercial Pilot License (CPL)</h3>
      <p>A CPL qualifies you to act as pilot-in-command or co-pilot for commercial air operations. It requires more flight hours, additional DGCA theory subjects, a Class 1 Medical Certificate, and a skill test.</p>
      <h3>Which Should You Choose?</h3>
      <p>If your goal is to work for an airline or earn income from flying, the CPL is the path. If you want to fly for personal enjoyment or explore aviation before committing to a full CPL, start with a PPL.</p>
      <p>At Aeromitra, we help you map out the right training path based on your career goals and budget.</p>
    `,
    image: getImageUrl("aircraft-rest-hangar-lined-up-like-steel-birds-scaled.webp"),
    date: "Jan 15, 2026",
    author: "AMA Team",
    category: "Training",
  },
  {
    id: "4",
    slug: "cabin-crew-career-guide-india",
    title: "How to Start a Cabin Crew Career in India — 2024 Guide",
    excerpt:
      "Everything you need to know about becoming a cabin crew member for Indian airlines.",
    content:
      "<p>A cabin crew career offers an exciting life of travel, adventure, and professional service. Learn what airlines look for, how to prepare, and how Aeromitra's cabin crew training program can launch your aviation career.</p>",
    image: getImageUrl("medium-shot-stewardess-holding-globe-1-300x200.webp"),
    date: "Dec 10, 2025",
    author: "AMA Team",
    category: "Career Guide",
  },
  {
    id: "5",
    slug: "flight-dispatcher-role-aviation",
    title: "The Role of a Flight Dispatcher in Aviation Operations",
    excerpt:
      "An in-depth look at what flight dispatchers do and how they contribute to safe, efficient airline operations.",
    content:
      "<p>Flight dispatchers are the unsung heroes of aviation. They work alongside pilots to plan flights, monitor weather, manage fuel, and ensure every flight operates safely and efficiently. Discover this rewarding career path at Aeromitra.</p>",
    image: getImageUrl("aircraft-rest-hangar-lined-up-like-steel-birds-300x168.webp"),
    date: "Nov 20, 2025",
    author: "AMA Team",
    category: "Career Guide",
  },
  {
    id: "6",
    slug: "aviation-medical-certificate-india",
    title: "Understanding DGCA Medical Certificates for Pilot Training",
    excerpt:
      "A complete guide to Class 1 and Class 2 DGCA Medical Certificates required for pilot training in India.",
    content:
      "<p>One of the first steps in your aviation journey is obtaining the correct DGCA Medical Certificate. Class 1 is required for CPL holders, while Class 2 is needed for PPL and SPL. Learn about requirements, process, and what to expect from your medical examination.</p>",
    image: getImageUrl("student-1-1.jpg"),
    date: "Oct 5, 2025",
    author: "AMA Team",
    category: "Training",
  },
  {
    id: "7",
    slug: "type-rating-career-opportunities",
    title: "How a Type Rating Can Boost Your Pilot Career",
    excerpt:
      "Why getting a Type Rating after your CPL is a critical step toward securing an airline job in India.",
    content:
      "<p>Most airlines in India require pilots to hold a Type Rating on the specific aircraft they operate. A Type Rating demonstrates that you are qualified to fly a particular aircraft and significantly improves your employability. Learn about popular Type Ratings and how AMA prepares you for them.</p>",
    image: getImageUrl("portrait-airplane-captain-preparing-fly-aircraft-cockpit-using-control-panel-dashboard-with-switch-buttons-aviator-pilot-flying-plane-with-power-command-navigation-1024x576.jpg"),
    date: "Sep 15, 2025",
    author: "AMA Faculty",
    category: "Career Guide",
  },
  {
    id: "8",
    slug: "financing-pilot-training-india",
    title: "How to Finance Your Pilot Training in India",
    excerpt:
      "Exploring education loans, EMI plans, and scholarships to make aviation training affordable.",
    content:
      "<p>Pilot training in India is a significant investment, but there are multiple financing options available. From aviation-specific education loans offered by nationalized banks to AMA's own installment plans, we break down every option to help you fund your dream career in the skies.</p>",
    image: getImageUrl("flyafe-8-min.png"),
    date: "Aug 22, 2025",
    author: "AMA Team",
    category: "Finance",
  },
  {
    id: "9",
    slug: "india-aviation-industry-growth-2024",
    title: "India's Aviation Industry: Growth, Opportunities & Careers in 2024",
    excerpt:
      "Why now is the best time to start a pilot career as India's aviation sector soars.",
    content:
      "<p>India is one of the world's fastest-growing aviation markets. With hundreds of new aircraft on order by Indian airlines, the demand for qualified pilots, cabin crew, and aviation professionals has never been higher. Discover the opportunities that await you in India's booming sky.</p>",
    image: getImageUrl("flyafe-min.png"),
    date: "Jul 10, 2025",
    author: "AMA Team",
    category: "Industry",
  },
  {
    id: "10",
    slug: "spl-first-solo-flight-experience",
    title: "What It Feels Like to Fly Solo for the First Time",
    excerpt:
      "AMA students share their first solo flight experiences — the thrill, the nerves, and the unforgettable moment.",
    content:
      "<p>There is nothing quite like your first solo flight. No instructor beside you, just you and the aircraft. Our AMA students share their memories of this milestone moment that every pilot remembers for life.</p>",
    image: getImageUrl("1.png"),
    date: "Jun 5, 2025",
    author: "AMA Students",
    category: "Student Stories",
  },
];
