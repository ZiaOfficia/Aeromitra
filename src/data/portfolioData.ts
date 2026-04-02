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
    id: "Devan-ashish",
    title: "Devan & Ashish",
    services: "Floral Design, Centerpiece Design, Draping Services",
    date: "",
    location: "New York",
    heroImage: getImageUrl("Best-DGCA-Ground-School-in-Vadodara-1024x733.jpg"),
    description: [
      "Ashish’s first words when seeing the decor were unforgettable: “Wow… Oh my God… Look at this!” Moments like these are what make our work so rewarding. ",
      "This event stands proudly in our wedding decorator’s portfolio, capturing the elegance, color, and emotion that define our work.",
    ],
    galleryImages: [
      getImageUrl("Best-DGCA-Ground-School-in-Vadodara.jpg"),
      getImageUrl("best-flight-academies-in-India-1024x733.jpeg"),
      getImageUrl("best-flight-academies-in-India.jpeg"),
      getImageUrl("best-flight-schools-in-florida-8-rgj9tqq2t0rad3a5swwu2itf9rlazi6zj5kq8zowa8.jpg"),
      getImageUrl("Best-Pilot-School-in-India-1024x733.jpeg"),
      getImageUrl("Best-Pilot-School-in-India.jpeg"),
    ],
    videoUrl: "u9BBO3L0u7A", // Placeholder ID
    testimonial: {
      quote:
        "Aeromitra made our dream wedding a reality. The attention to detail was unmatched!",
      author: "Shivani & Carlos",
    },
  },
  {
    id: "adriana-kyle",
    title: "Adriana & Kyle",
    services: "Floral Design, Ceiling Draping, Centerpiece Design",
    date: "",
    location: "Ravel Hotel, New York",
    heroImage: getImageUrl("best-pilot-training-institute-in-India-1024x733.jpeg"),
    description: [
      "We had the incredible opportunity to bring Adrian & Kyle’s dream wedding to life at the gorgeous Ravel Hotel in New York. As part of our ever-evolving wedding portfolio, this celebration showcased our passion for elegant design and cohesive styling.Our team curated every detail—from romantic floral arrangements and luxurious ceiling draping to sophisticated centerpieces—each element carefully chosen to reflect the couple’s unique taste. This celebration is a proud addition to our wedding decorator’s portfolio, highlighting our expertise in transforming spaces into timeless, romantic settings.",
    ],
    galleryImages: [
      getImageUrl("Best-Pilot-Training-Institute-in-India-1024x733.jpg"),
      getImageUrl("best-pilot-training-institute-in-India.jpeg"),
      getImageUrl("Best-Pilot-Training-Institute-in-India.jpg"),
      getImageUrl("care-1.png"),
      getImageUrl("Cheapest-Flight-School-1024x733.jpg"),
      getImageUrl("Cheapest-Flight-School.jpg"),
    ],
    videoUrl: "PXJWdgfigUg",
    testimonial: {
      quote:
        "Everything was absolutely perfect. The team went above and beyond!",
      author: "Adriana",
    },
  },
  {
    id: "judi-chris",
    title: "Judi & Chris",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: getImageUrl("Cheapest-Place-to-Get-a-Private-Pilot-License-1024x733.jpeg"),
    description: [
      "For Judi and Chris’s wedding, strictly elegance was the theme. We transformed the banquet hall into a space of timeless beauty, utilizing a sophisticated palette of gold and white.",
      "The focal point was the custom-designed stage, framed by cascading florals that created a perfect backdrop for their special moments.",
    ],
    galleryImages: [
      getImageUrl("Cheapest-Place-to-Get-a-Private-Pilot-License.jpeg"),
      getImageUrl("Common-mistakes-student-pilots-do-and-how-to-avoid-them-2-300x200.webp"),
      getImageUrl("Common-mistakes-student-pilots-do-and-how-to-avoid-them-3-300x200.jpg"),
      getImageUrl("Common-mistakes-student-pilots-do-and-how-to-avoid-them-300x200.webp"),
      getImageUrl("contented-pilot-looking-forward-to-the-upcoming-flight-768x512-1-rgj9tqq2t0rad3a5swwu2itf9rlazi6zj5kq8zowa8.jpg"),
    ],
    videoUrl: "5HgrU-RK2Ec",
    testimonial: {
      quote:
        "Aeromitra brought our vision to life perfectly. It was a dream come true.",
      author: "Judi & Chris",
    },
  },
  {
    id: "tony-tesia",
    title: "Tony & Tesia",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: getImageUrl("cpl-banner-9-300x129.jpg"),
    description: [
      "Tony and Tesia’s wedding was a celebration of bold love and beautiful design. We used rich, deep florals to create a sense of drama and intimacy in the ballroom.",
      "Lighting played a key role, illuminating the centerpieces and casting a warm, romantic glow over the entire reception.",
    ],
    galleryImages: [
      getImageUrl("DGCA-CPL-Ground-Classes-in-Delhi-1024x733.jpeg"),
      getImageUrl("DGCA-CPL-Ground-Classes-in-Delhi.jpeg"),
      getImageUrl("DGCA-CPL-Ground-Classes-in-Patna-1024x733.jpeg"),
      getImageUrl("DGCA-CPL-Ground-Classes-in-Patna.jpeg"),
      getImageUrl("DGCA-Ground-School-in-Bhubaneswar-1024x733.jpg"),
      getImageUrl("DGCA-Ground-School-in-Bhubaneswar.jpg"),
    ],
    videoUrl: "C5ekSwnd7QI",
    testimonial: {
      quote: "A night we will never forget. The decor was absolutely stunning.",
      author: "Tony & Tesia",
    },
  },
  {
    id: "shivani-carlos",
    title: "Shivani & Carlos",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: getImageUrl("DGCA-Ground-School-in-Ranchi-1024x733.jpg"),
    description: [
      "A breathtaking fusion of cultures and styles, Shivani and Carlos’s wedding was a testament to the power of personalized design. We focused on creating a warm, inviting atmosphere that felt both grand and intimate.",
      "The floral arrangements were designed to bridge the gap between traditional elegance and modern sophistication, resulting in a visual experience that left guests in awe.",
    ],
    galleryImages: [
      getImageUrl("DGCA-Ground-School-in-Ranchi.jpg"),
      getImageUrl("DGCA-Ground-School-in-Thiruvananthapuram-1024x733.jpg"),
      getImageUrl("DGCA-Ground-School-in-Thiruvananthapuram.jpg"),
      getImageUrl("DGCA-Ground-School-in-Vishakhapatnam-1024x733.jpg"),
      getImageUrl("DGCA-Ground-School-in-Vishakhapatnam.jpg"),
    ],
    videoUrl: "uOLvnCSOtJA",
    testimonial: {
      quote:
        "We were blown away by the beauty of the design. It felt like walking into a dream.",
      author: "Shivani & Carlos",
    },
  },
  {
    id: "puja-kushal",
    title: "Puja & Kushal",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      getImageUrl("DGCA-Pariksha-1024x733.jpeg"),
    description: [
      "For Puja and Kushal, we crafted a setting that radiated vibrancy and joy. Using a bold color palette and lush, overflowing florals, the venue was transformed into a garden of celebration.",
      "Every detail, from the intricate centerpieces to the sweeping ceiling drapery, was meticulously planned to create a cohesive and immersive experience for the couple and their loved ones.",
    ],
    galleryImages: [
      getImageUrl("DGCA-Pariksha.jpeg"),
      getImageUrl("DGCA-Pilot-Training-in-Nagpur-1024x683.png"),
      getImageUrl("DGCA-Pilot-Training-in-Nagpur.png"),
      getImageUrl("dl.beatsnoop.com-high-0091e7473468ea7121-1-300x200.jpg"),
      getImageUrl("dl.beatsnoop.com-high-0091e7473468ea7121-1.jpg"),
      getImageUrl("dl.beatsnoop.com-high-01bd9019e2110313d4-300x171.jpg"),
    ],
    videoUrl: "f4yTvMkZu2E",
    testimonial: {
      quote:
        "The colors, the flowers, everything was just spectacular. Thank you for making our day so special.",
      author: "Puja",
    },
  },
  {
    id: "monisah-jubayeth",
    title: "Monisah & Jubayeth",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: getImageUrl("dl.beatsnoop.com-high-01bd9019e2110313d4.jpg"),
    description: [
      "Elegance and sophistication defined Monisah and Jubayeth’s reception. We utilized soft, romantic lighting tailored to highlight the exquisite floral installations, creating an ambiance of pure romance.",
      "The centerpiece designs were crafted to be conversation starters—tall, striking, yet allowing for easy conversation across the table. It was a night of beauty and seamless execution.",
    ],
    galleryImages: [
      getImageUrl("dl.beatsnoop.com-high-03000af04b9cc178ea.webp"),
      getImageUrl("dl.beatsnoop.com-high-1881002e0162c3f174.jpg"),
      getImageUrl("dl.beatsnoop.com-high-2cc0125c3f885223a8.jpg"),
      getImageUrl("dl.beatsnoop.com-high-310d3e7f0e2f02a9c2-1024x683.jpg"),
      getImageUrl("dl.beatsnoop.com-high-3828fdad1ac4980ace-1.jpg"),
      getImageUrl("dl.beatsnoop.com-high-61a348bb7d53be2569-1-300x168.jpg"),
    ],
    videoUrl: "by3xiUxG3eQ",
    testimonial: {
      quote:
        "Aeromitra truly understands how to set a mood. The lighting and flowers were perfect.",
      author: "Monisah",
    },
  },
  {
    id: "monique-greg",
    title: "Monique & Greg",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: getImageUrl("dl.beatsnoop.com-high-6df1e4018035f9f3ed.jpg"),
    description: [
      "Monique and Greg envisioned a classic, timeless wedding, and we were honored to bring that vision to life. White florals, crystal accents, and candlelight came together to create a look of understated luxury.",
      "Our team focused on texture and layers, ensuring that the white-on-white palette felt rich and dimensional rather than flat. The result was pure magic.",
    ],
    galleryImages: [
      getImageUrl("dl.beatsnoop.com-high-71065f6433f0371831.jpg"),
      getImageUrl("dl.beatsnoop.com-high-728076b4b879dc3067.jpg"),
      getImageUrl("dl.beatsnoop.com-high-87c5e58df9e76fe26d-300x200.webp"),
      getImageUrl("dl.beatsnoop.com-high-87c5e58df9e76fe26d.webp"),
      getImageUrl("dl.beatsnoop.com-high-92e19f92fc1415af5e.jpg"),
      getImageUrl("dl.beatsnoop.com-high-9926fb1e45e3900c6f-300x201.jpg"),
    ],
    videoUrl: "MpBjzRmzsKc",
    testimonial: {
      quote: "Simple, elegant, and breathtaking. Exactly what we wanted.",
      author: "Monique & Greg",
    },
  },
  {
    id: "jaya-kevin",
    title: "Jaya & Kevin",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: getImageUrl("dl.beatsnoop.com-high-af4550fcd91a4ca8b8.jpg"),
    description: [
      "Jaya and Kevin’s celebration was all about grandeur. We transformed the ballroom with dramatic ceiling installations that drew the eye upward, making the space feel expansive and majestic.",
      "Coupled with lush, low centerpieces, the design struck the perfect balance between awe-inspiring scale and intimate table settings.",
    ],
    galleryImages: [
      getImageUrl("dl.beatsnoop.com-high-c0c549b89ab07d2a78-300x200.webp"),
      getImageUrl("dl.beatsnoop.com-high-c0c8f868c70fcc4564-e1705477789788.jpg"),
      getImageUrl("dl.beatsnoop.com-high-c80278612a86278316.jpg"),
      getImageUrl("dl.beatsnoop.com-high-d23467030df9ce0ace-1024x576.jpg"),
      getImageUrl("dl.beatsnoop.com-high-d23467030df9ce0ace.jpg"),
      getImageUrl("dl.beatsnoop.com-high-d9334c48297a42e9a4.jpg"),
    ],
    videoUrl: "LomsZ2ym_Wc",
    testimonial: {
      quote:
        "Our guests couldn't stop talking about the ceiling decor. It was the highlight of the night!",
      author: "Kevin",
    },
  },
  {
    id: "ayesha-george",
    title: "Ayesha & George",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: getImageUrl("dl.beatsnoop.com-high-dd2195709e648bc8cc.jpg"),
    description: [
      "A modern fairytale is how we describe Ayesha and George’s wedding. We incorporated mix-and-match elements to create a dynamic visual flow throughout the venue.",
      "From geometric structures to organic floral flows, every design choice was intentional, creating a bespoke environment that perfectly mirrored the couple’s personality.",
    ],
    galleryImages: [
      getImageUrl("dl.beatsnoop.com-high-dd58471bafc8b462f4-300x168.jpg"),
      getImageUrl("dl.beatsnoop.com-high-df9646cb11a5eb5e8b-1.jpg"),
      getImageUrl("dl.beatsnoop.com-high-e0bbde34f89973ffcb-300x168.jpg"),
      getImageUrl("dl.beatsnoop.com-high-e29165c63e87a3bbd7-300x200.jpg"),
      getImageUrl("dl.beatsnoop.com-high-e37aaf9882107c6457-300x169.webp"),
      getImageUrl("dl.beatsnoop.com-high-e479ddf7c4b95dff2a-300x169.jpg"),
    ],
    videoUrl: "uaeuOjJwq3w",
    testimonial: {
      quote: "Unique, stylish, and flawlessly executed. We loved every minute.",
      author: "Ayesha",
    },
  },
  {
    id: "kaliyah-curt",
    title: "Kaliyah & Curt",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: getImageUrl("dl.beatsnoop.com-high-edecf2b7e7d00795c8.jpg"),
    description: [
      "For Kaliyah and Curt, the focus was on romance. Soft pastels, billowing drapes, and candlelight set the scene for an evening filled with love and laughter.",
      "We paid special attention to the head table, creating a focal point that framed the couple beautifully for photos and toasts.",
    ],
    galleryImages: [
      getImageUrl("dl.beatsnoop.com-high-fd0eca9482b98dcd64-1-300x200.webp"),
      getImageUrl("dorm1.jpg"),
      getImageUrl("dorm2.jpg"),
      getImageUrl("excellence.png"),
      getImageUrl("feature-image-300x172.png"),
      getImageUrl("feature-image.png"),
    ],
    videoUrl: "5HgrU-RK2Ec",
    testimonial: {
      quote:
        "The team made us feel like royalty. The decor was beyond our expectations.",
      author: "Kaliyah",
    },
  },
  {
    id: "tatiana-ulrich",
    title: "Tatiana & Ulrich",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: getImageUrl("flight-school-florida-2-rgj9tqq2t0qpwhxvgu8djezevx53pm7sxo2w815x8o.jpg"),
    description: [
      "Finishing our season with Tatiana and Ulrich’s wedding was a high note. We designed a sophisticated, high-contrast look that felt modern yet timeless.",
      "The interplay of light and shadow, combined with our signature floral styling, created a dramatic backdrop for an unforgettable celebration.",
    ],
    galleryImages: [
      getImageUrl("flight-school-florida-2.jpg"),
      getImageUrl("flight-schools-in-florida-1-300x169.jpg"),
      getImageUrl("flight-schools-in-florida-1-rgj9tqq1l5yaahs51xd7fc51ukxh1v031vhq2mop7k.jpg"),
      getImageUrl("flight-schools-in-florida-1-rgj9tqq2t0qpwhxvgu8djezevx53pm7sxo2w815x8o.jpg"),
      getImageUrl("flight-schools-in-florida-1.jpg"),
      getImageUrl("Flight-Simulation-Training-min-rgj9tqq2t0qpwhxvgu8djezevx53pm7sxo2w815x8o.png"),
    ],
    videoUrl: "5HgrU-RK2Ec",
    testimonial: {
      quote:
        "Stylish, chic, and professional. We highlight recommend Aeromitra.",
      author: "Ulrich",
    },
  },
];
