export interface ServiceData {
  id: string;
  title: string;
  heroImage: string;
  heroTitle: string;
  intro: {
    heading: string;
    subheading: string;
    description: string[];
  };
  whyChooseUs: {
    title: string;
    items: { title: string; description: string }[];
  };
  signatureServices: {
    title: string;
    items: { title: string; description: string; features?: string[] }[];
  };
  process: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  testimonials?: {
    quote: string;
    author: string;
    location: string;
  }[];
  portfolioImages: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "commercial-pilot-license",
    title: "Commercial Pilot License (CPL)",
    heroImage: "/images/home/hero-cpl.webp",
    heroTitle: "COMMERCIAL PILOT LICENSE TRAINING IN DELHI, INDIA",
    intro: {
      heading: "BECOME A COMMERCIAL PILOT WITH AEROMITRA",
      subheading:
        "DGCA-Approved CPL Training: Your Gateway to a Professional Flying Career",
      description: [
        "At Aeromitra Aviation Academy, our Commercial Pilot License (CPL) program is designed to take you from an aspiring aviator to a fully certified, airline-ready commercial pilot. Following the complete DGCA syllabus, our training covers all required flight hours, simulator sessions, and ground school examinations.",
        "Our experienced flight instructors and modern training fleet ensure that every CPL student receives hands-on, high-quality training that prepares them not just to pass the exams, but to excel as a professional pilot in India's growing aviation industry.",
      ],
    },
    whyChooseUs: {
      title: "Why Choose AMA for CPL Training",
      items: [
        {
          title: "DGCA-Compliant Syllabus",
          description:
            "Our CPL program fully adheres to DGCA requirements, ensuring your license is valid and recognized across India.",
        },
        {
          title: "Experienced Instructors",
          description:
            "Learn from seasoned commercial pilots with thousands of flight hours and real-world airline experience.",
        },
        {
          title: "100% Placement Assistance",
          description:
            "Our dedicated placement cell connects graduates with airlines and aviation companies for career opportunities.",
        },
      ],
    },
    signatureServices: {
      title: "Our CPL Program Highlights",
      items: [
        {
          title: "Complete Flight Hours Training",
          description:
            "Log all DGCA-mandated flight hours on our well-maintained training aircraft under the supervision of expert instructors.",
        },
        {
          title: "Simulator Sessions",
          description:
            "Build confidence and skills with advanced simulator training covering various aircraft scenarios and emergency procedures.",
        },
        {
          title: "DGCA Ground School",
          description:
            "Master all CPL theory subjects — Air Regulations, Navigation, Meteorology, Technical General, and Radio Telephony.",
        },
        {
          title: "Medical Fitness Guidance",
          description:
            "Get guidance on obtaining and maintaining your DGCA Class 1 Medical Certificate throughout your training.",
        },
      ],
    },
    process: {
      title: "Your CPL Journey at Aeromitra",
      description:
        "A clear, structured pathway from enrollment to your Commercial Pilot License:",
      steps: [
        {
          title: "Counseling & Enrollment",
          description:
            "Meet our admissions team, discuss your goals, and enroll in the program that fits your timeline.",
        },
        {
          title: "Ground School & DGCA Exams",
          description:
            "Complete all theory subjects with our expert faculty and clear your DGCA written examinations.",
        },
        {
          title: "Flight Training & License",
          description:
            "Log all required flight hours, pass your skill test, and receive your Commercial Pilot License.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "Aeromitra gave me the best foundation for my aviation career. The instructors are incredibly knowledgeable and the training is thorough. I cleared my DGCA exams on the first attempt!",
        author: "Rahul Sharma",
        location: "Delhi",
      },
      {
        quote:
          "From ground school to flight training, Aeromitra supported me at every step. I'm now a licensed CPL holder working toward my first airline job!",
        author: "Priya Mehra",
        location: "Mumbai",
      },
    ],
    portfolioImages: [
      "/images/gallery/cpl-training-1.webp",
      "/images/gallery/cpl-training-2.webp",
      "/images/gallery/cpl-training-3.webp",
      "/images/gallery/cpl-training-4.webp",
      "/images/gallery/cpl-training-5.webp",
      "/images/gallery/cpl-training-6.webp",
    ],
  },
  {
    id: "private-pilot-license",
    title: "Private Pilot License (PPL)",
    heroImage: "/images/home/hero-ppl.webp",
    heroTitle: "PRIVATE PILOT LICENSE TRAINING IN DELHI, INDIA",
    intro: {
      heading: "GET YOUR PPL WITH AEROMITRA",
      subheading:
        "Fly for Passion or Progress — Start Your Aviation Journey with a PPL",
      description: [
        "The Private Pilot License is the first major milestone in your aviation journey. At Aeromitra Aviation Academy, our PPL program provides comprehensive flight training and ground school instruction to help you earn your wings with confidence.",
        "Whether you are pursuing flying as a personal passion or as the first step toward a CPL, our experienced instructors will guide you every step of the way.",
      ],
    },
    whyChooseUs: {
      title: "Why AMA for Your PPL",
      items: [
        {
          title: "Structured Learning Path",
          description:
            "Our PPL curriculum is carefully structured to build your skills progressively from solo flights to full DGCA certification.",
        },
        {
          title: "Modern Training Aircraft",
          description:
            "Train on well-maintained aircraft equipped with modern avionics to give you relevant, industry-standard experience.",
        },
        {
          title: "Flexible Batch Schedules",
          description:
            "We offer morning and evening batches to accommodate students, working professionals, and career changers.",
        },
      ],
    },
    signatureServices: {
      title: "PPL Program Components",
      items: [
        {
          title: "Flight Training Hours",
          description:
            "Complete all DGCA-mandated flight hours covering solo flights, cross-country navigation, and instrument training.",
        },
        {
          title: "Ground Theory Classes",
          description:
            "Study PPL theory subjects including Air Regulations, Meteorology, Navigation, and Aircraft Technical Knowledge.",
        },
        {
          title: "Skill Test Preparation",
          description:
            "Thorough preparation for the DGCA skill test to ensure you are fully confident and exam-ready.",
        },
        {
          title: "Medical Guidance",
          description:
            "Assistance with obtaining your DGCA Class 2 Medical Certificate required for the PPL.",
        },
      ],
    },
    process: {
      title: "PPL Training Journey",
      description: "Your path from enrollment to Private Pilot License:",
      steps: [
        {
          title: "Enrollment & Medical",
          description:
            "Complete enrollment, obtain your DGCA medical certificate, and begin ground school.",
        },
        {
          title: "Dual & Solo Flight Training",
          description:
            "Complete dual instruction hours with your instructor before progressing to supervised solo flights.",
        },
        {
          title: "Skill Test & License",
          description:
            "Pass the DGCA skill test and receive your Private Pilot License.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "Getting my PPL at Aeromitra was the best decision I ever made. The instructors made me feel safe and confident in the cockpit from day one.",
        author: "Aditya Kapoor",
        location: "Delhi",
      },
    ],
    portfolioImages: [
      "/images/gallery/ppl-training-1.webp",
      "/images/gallery/ppl-training-2.webp",
      "/images/gallery/ppl-training-3.webp",
      "/images/gallery/ppl-training-4.webp",
      "/images/gallery/ppl-training-5.webp",
      "/images/gallery/ppl-training-6.webp",
    ],
  },
  {
    id: "dgca-ground-classes",
    title: "DGCA Ground Classes",
    heroImage: "/images/home/hero-dgca.webp",
    heroTitle: "DGCA GROUND CLASSES IN DELHI, INDIA",
    intro: {
      heading: "CRACK YOUR DGCA EXAMS WITH AEROMITRA",
      subheading:
        "India's Most Trusted DGCA Ground School — Expert Faculty, High Pass Rates",
      description: [
        "Aeromitra's DGCA Ground Classes are specifically designed to help aspiring and licensed pilots clear their DGCA theory examinations with confidence. Our experienced faculty covers every subject in depth, using exam-focused teaching methods and study materials aligned to the latest DGCA syllabus.",
        "Whether you are preparing for your CPL, PPL, or ATPL subjects, our ground school programs are structured to maximize your understanding and exam success rate.",
      ],
    },
    whyChooseUs: {
      title: "Why Our DGCA Ground School Stands Out",
      items: [
        {
          title: "Expert Subject Faculty",
          description:
            "Each DGCA subject is taught by specialists with deep expertise in Air Regulations, Navigation, Met, and Technical subjects.",
        },
        {
          title: "Exam-Focused Materials",
          description:
            "Our study materials, question banks, and mock tests are tailored to the actual DGCA examination pattern.",
        },
        {
          title: "High First-Attempt Pass Rate",
          description:
            "AMA students consistently achieve high pass rates on their first DGCA exam attempt due to our rigorous preparation.",
        },
      ],
    },
    signatureServices: {
      title: "DGCA Subjects We Cover",
      items: [
        {
          title: "Air Regulations",
          description:
            "Complete coverage of ICAO and DGCA regulations including Annexes, Air Traffic Rules, and Indian aviation law.",
        },
        {
          title: "Navigation",
          description:
            "Comprehensive navigation training covering VOR, NDB, GPS navigation, charts, and flight planning.",
        },
        {
          title: "Meteorology",
          description:
            "In-depth study of weather phenomena, TAF/METAR reading, weather charts, and their impact on flight operations.",
        },
        {
          title: "Technical General & Specific",
          description:
            "Aircraft systems, engine theory, avionics, and aircraft performance for both general and type-specific subjects.",
        },
      ],
    },
    process: {
      title: "Our Ground School Approach",
      description:
        "A proven method to prepare you thoroughly for DGCA examinations:",
      steps: [
        {
          title: "Subject Lectures",
          description:
            "Attend detailed subject lectures by expert faculty covering the entire DGCA syllabus.",
        },
        {
          title: "Practice Tests & Mock Exams",
          description:
            "Sharpen your exam skills with regular chapter-wise tests and full-length DGCA mock examinations.",
        },
        {
          title: "Exam & Clearance",
          description:
            "Appear for DGCA exams fully prepared and receive subject clearances to progress with flight training.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "I cleared all my DGCA subjects in the first attempt thanks to Aeromitra's ground school. The faculty is outstanding and the study materials are excellent.",
        author: "Sneha Gupta",
        location: "Delhi",
      },
    ],
    portfolioImages: [
      "/images/gallery/ground-school-1.webp",
      "/images/gallery/ground-school-2.webp",
      "/images/gallery/ground-school-3.webp",
      "/images/gallery/ground-school-4.webp",
      "/images/gallery/ground-school-5.webp",
      "/images/gallery/ground-school-6.webp",
    ],
  },
  {
    id: "student-pilot-license",
    title: "Student Pilot License (SPL)",
    heroImage: "/images/home/hero-spl.webp",
    heroTitle: "STUDENT PILOT LICENSE TRAINING IN DELHI, INDIA",
    intro: {
      heading: "START YOUR AVIATION JOURNEY WITH SPL",
      subheading:
        "Your First Step in the Sky — Enroll in Aeromitra's SPL Program",
      description: [
        "The Student Pilot License is the first official license issued by DGCA and marks the beginning of your aviation career. At Aeromitra, our SPL program provides a solid foundation in aviation theory, airmanship, and basic flight skills to prepare you for your solo flights and beyond.",
      ],
    },
    whyChooseUs: {
      title: "Why Start Your SPL at AMA",
      items: [
        {
          title: "Strong Fundamentals",
          description:
            "We build a rock-solid foundation in aviation theory and basic airmanship before putting you in the cockpit.",
        },
        {
          title: "Patient & Supportive Instructors",
          description:
            "Our instructors are trained to work with beginners, making your first flying experiences safe and enjoyable.",
        },
        {
          title: "Clear Progression Path",
          description:
            "SPL at AMA is structured as the natural starting point for our full PPL and CPL programs.",
        },
      ],
    },
    signatureServices: {
      title: "SPL Program Highlights",
      items: [
        {
          title: "Aviation Theory Introduction",
          description:
            "Learn the basics of aviation, aircraft systems, airspace, weather, and flight principles.",
        },
        {
          title: "Dual Flight Instruction",
          description:
            "Log initial dual flight hours under close instructor supervision to master basic handling skills.",
        },
        {
          title: "Solo Flight Preparation",
          description:
            "Progress through a structured solo readiness program before your first supervised solo flight.",
        },
        {
          title: "DGCA Medical & Documentation",
          description:
            "Complete assistance with DGCA medical examination and all SPL documentation and registration.",
        },
      ],
    },
    process: {
      title: "SPL Enrollment Process",
      description: "Simple steps to earn your Student Pilot License:",
      steps: [
        {
          title: "Eligibility & Medical",
          description:
            "Confirm eligibility (age, education), obtain DGCA medical certificate, and submit documents.",
        },
        {
          title: "Ground & Flight Training",
          description:
            "Complete ground theory and initial dual flight hours with your assigned instructor.",
        },
        {
          title: "Solo & License",
          description:
            "Complete your supervised solo flight and receive your DGCA Student Pilot License.",
        },
      ],
    },
    portfolioImages: [
      "/images/gallery/spl-training-1.webp",
      "/images/gallery/spl-training-2.webp",
      "/images/gallery/spl-training-3.webp",
      "/images/gallery/spl-training-4.webp",
      "/images/gallery/spl-training-5.webp",
      "/images/gallery/spl-training-6.webp",
    ],
  },
  {
    id: "type-rating",
    title: "Type Rating",
    heroImage: "/images/home/hero-type-rating.webp",
    heroTitle: "TYPE RATING COURSES IN DELHI, INDIA",
    intro: {
      heading: "ADVANCE YOUR CAREER WITH TYPE RATING",
      subheading:
        "Certified Type Rating Training for Commercial Pilots — Fly the Aircraft Airlines Need",
      description: [
        "A Type Rating qualifies a licensed commercial pilot to operate a specific aircraft type. At Aeromitra, we offer Type Rating courses that prepare you to meet airline requirements and expand your career prospects in India's rapidly growing aviation sector.",
      ],
    },
    whyChooseUs: {
      title: "Why Choose AMA for Type Rating",
      items: [
        {
          title: "Industry-Aligned Training",
          description:
            "Our Type Rating program is designed in line with DGCA requirements and airline operational standards.",
        },
        {
          title: "Advanced Simulator Access",
          description:
            "Get hands-on simulator experience on the aircraft type you are being rated for.",
        },
        {
          title: "Career Placement Support",
          description:
            "We assist Type Rating graduates in connecting with airlines seeking rated pilots.",
        },
      ],
    },
    signatureServices: {
      title: "Type Rating Program Components",
      items: [
        {
          title: "Aircraft Systems Training",
          description:
            "In-depth study of the systems, performance, and limitations of the specific aircraft type.",
        },
        {
          title: "Simulator Training",
          description:
            "Extensive simulator hours covering normal, abnormal, and emergency procedures for the aircraft type.",
        },
        {
          title: "Line Training",
          description:
            "Supervised line flying to complete your operator's proficiency check and line check requirements.",
        },
        {
          title: "DGCA Skill Test",
          description:
            "Comprehensive preparation for the DGCA Type Rating skill test and license endorsement.",
        },
      ],
    },
    process: {
      title: "Type Rating Journey",
      description: "Your pathway to a Type Rating at Aeromitra:",
      steps: [
        {
          title: "Eligibility & Enrollment",
          description:
            "Confirm your CPL and medical requirements, then enroll in the appropriate Type Rating course.",
        },
        {
          title: "Systems & Simulator Training",
          description:
            "Complete all systems ground training and required simulator sessions.",
        },
        {
          title: "Skill Test & Rating",
          description:
            "Pass your DGCA skill test and receive the Type Rating endorsement on your license.",
        },
      ],
    },
    portfolioImages: [
      "/images/gallery/type-rating-1.webp",
      "/images/gallery/type-rating-2.webp",
      "/images/gallery/type-rating-3.webp",
      "/images/gallery/type-rating-4.webp",
      "/images/gallery/type-rating-5.webp",
      "/images/gallery/type-rating-6.webp",
    ],
  },
  {
    id: "flight-dispatcher",
    title: "Flight Dispatcher",
    heroImage: "/images/home/hero-dispatcher.webp",
    heroTitle: "FLIGHT DISPATCHER TRAINING IN DELHI, INDIA",
    intro: {
      heading: "BECOME A CERTIFIED FLIGHT DISPATCHER",
      subheading:
        "Train for a Critical Aviation Role — Flight Dispatcher Certification at AMA",
      description: [
        "A Flight Dispatcher is responsible for planning, filing, and monitoring flight operations alongside the pilot. At Aeromitra, our Flight Dispatcher course provides comprehensive training in flight planning, weather analysis, fuel management, and airline operations to prepare you for this essential role.",
      ],
    },
    whyChooseUs: {
      title: "Why Train as a Flight Dispatcher at AMA",
      items: [
        {
          title: "Comprehensive Curriculum",
          description:
            "Our course covers all aspects of flight dispatching including flight planning, meteorology, and crew coordination.",
        },
        {
          title: "Industry-Ready Skills",
          description:
            "Train with real-world tools and software used by airlines for flight operations management.",
        },
        {
          title: "Placement Assistance",
          description:
            "AMA connects Flight Dispatcher graduates with airlines, cargo companies, and ground handling firms.",
        },
      ],
    },
    signatureServices: {
      title: "Flight Dispatcher Course Modules",
      items: [
        {
          title: "Flight Planning & Operations",
          description:
            "Learn to create and file flight plans, compute fuel loads, and manage operational control for flights.",
        },
        {
          title: "Aviation Meteorology",
          description:
            "In-depth weather analysis training to assess weather impacts on flight operations and safety.",
        },
        {
          title: "Air Regulations & NOTAM",
          description:
            "Study ICAO/DGCA regulations, airspace restrictions, and NOTAM interpretation for dispatching.",
        },
        {
          title: "Emergency Procedures",
          description:
            "Training on handling inflight emergencies, diversions, and coordination with ATC and crew.",
        },
      ],
    },
    process: {
      title: "Flight Dispatcher Program Path",
      description: "Your steps to becoming a certified Flight Dispatcher:",
      steps: [
        {
          title: "Enrollment & Ground Training",
          description:
            "Enroll in the program and complete all ground training modules with expert faculty.",
        },
        {
          title: "Practical Training",
          description:
            "Apply your knowledge in simulated dispatch scenarios and practical exercises.",
        },
        {
          title: "Certification & Placement",
          description:
            "Pass your certification exam and receive placement support from AMA's career team.",
        },
      ],
    },
    portfolioImages: [
      "/images/gallery/dispatcher-1.webp",
      "/images/gallery/dispatcher-2.webp",
      "/images/gallery/dispatcher-3.webp",
      "/images/gallery/dispatcher-4.webp",
      "/images/gallery/dispatcher-5.webp",
      "/images/gallery/dispatcher-6.webp",
    ],
  },
  {
    id: "cabin-crew-training",
    title: "Cabin Crew Training",
    heroImage: "/images/home/hero-cabin-crew.webp",
    heroTitle: "CABIN CREW TRAINING IN DELHI, INDIA",
    intro: {
      heading: "LAUNCH YOUR CABIN CREW CAREER WITH AEROMITRA",
      subheading:
        "Professional Cabin Crew Training — Safety, Service & Style for the Skies",
      description: [
        "Aeromitra's Cabin Crew Training program prepares aspiring flight attendants with the skills, knowledge, and professional demeanor required by leading airlines. From safety procedures and emergency handling to grooming, hospitality, and communication, our program covers every aspect of a successful cabin crew career.",
      ],
    },
    whyChooseUs: {
      title: "Why Choose AMA for Cabin Crew Training",
      items: [
        {
          title: "Airline-Standard Training",
          description:
            "Our curriculum mirrors the training standards of India's leading domestic and international airlines.",
        },
        {
          title: "Grooming & Personality Development",
          description:
            "Dedicated sessions on grooming, communication, and professional presentation for airline interviews.",
        },
        {
          title: "Placement Support",
          description:
            "AMA actively connects cabin crew graduates with airlines and aviation recruitment agencies.",
        },
      ],
    },
    signatureServices: {
      title: "Cabin Crew Program Highlights",
      items: [
        {
          title: "Safety & Emergency Procedures",
          description:
            "Comprehensive training in aircraft safety, emergency evacuations, first aid, and fire fighting procedures.",
        },
        {
          title: "Customer Service & Hospitality",
          description:
            "Learn in-flight service standards, passenger handling, and hospitality skills expected by top airlines.",
        },
        {
          title: "Grooming & Communication",
          description:
            "Professional grooming sessions, communication workshops, and mock airline interview preparation.",
        },
        {
          title: "Aviation Knowledge",
          description:
            "Basic aviation knowledge including aircraft types, navigation fundamentals, and crew coordination.",
        },
      ],
    },
    process: {
      title: "Cabin Crew Training Journey",
      description: "Your path to a professional cabin crew career:",
      steps: [
        {
          title: "Enrollment & Orientation",
          description:
            "Enroll in the program, attend orientation, and meet your trainers and batchmates.",
        },
        {
          title: "Training & Assessments",
          description:
            "Complete all training modules with regular assessments to track your progress.",
        },
        {
          title: "Certification & Placement",
          description:
            "Receive your cabin crew certification and get placement assistance from AMA's placement cell.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "Aeromitra's cabin crew program was everything I needed. The trainers are professional, the grooming sessions were excellent, and I got placed with an airline within 2 months of completing the course!",
        author: "Anjali Singh",
        location: "Delhi",
      },
    ],
    portfolioImages: [
      "/images/gallery/cabin-crew-1.webp",
      "/images/gallery/cabin-crew-2.webp",
      "/images/gallery/cabin-crew-3.webp",
      "/images/gallery/cabin-crew-4.webp",
      "/images/gallery/cabin-crew-5.webp",
      "/images/gallery/cabin-crew-6.webp",
    ],
  },
  {
    id: "tuition-financing",
    title: "Tuition Financing",
    heroImage: "/images/home/hero-financing.webp",
    heroTitle: "AVIATION TUITION FINANCING AT AEROMITRA",
    intro: {
      heading: "AFFORDABLE AVIATION TRAINING WITH FLEXIBLE FINANCING",
      subheading:
        "Don't Let Fees Ground Your Dreams — Fly Now, Pay Easy with AMA",
      description: [
        "Aeromitra Aviation Academy believes that financial constraints should never be a barrier to a stellar aviation career. Our Tuition Financing program offers flexible payment plans, EMI options, and loan assistance to make your pilot training affordable and accessible.",
        "Work with our admissions team to find a financing solution that fits your budget, so you can focus entirely on your training and career.",
      ],
    },
    whyChooseUs: {
      title: "Why Our Financing Options Work for You",
      items: [
        {
          title: "Flexible EMI Plans",
          description:
            "Spread your training fees across manageable monthly installments with low or zero interest options.",
        },
        {
          title: "Education Loan Assistance",
          description:
            "Our team assists you in applying for aviation education loans from partner banks and financial institutions.",
        },
        {
          title: "Transparent Fee Structure",
          description:
            "No hidden charges. We provide a complete, transparent breakdown of all training and examination fees upfront.",
        },
      ],
    },
    signatureServices: {
      title: "Financing Options Available",
      items: [
        {
          title: "Monthly Installment Plans",
          description:
            "Break down your total training fee into easy monthly payments with options suited to your budget.",
        },
        {
          title: "Bank Loan Facilitation",
          description:
            "We partner with leading banks to help eligible students secure aviation education loans.",
        },
        {
          title: "Scholarship Programs",
          description:
            "Deserving students may qualify for partial scholarships or fee waivers. Ask our admissions team for details.",
        },
        {
          title: "Course-Wise Payment",
          description:
            "Pay per course module as you progress through your training, managing your finances with flexibility.",
        },
      ],
    },
    process: {
      title: "How to Apply for Financing",
      description: "Simple steps to secure your aviation training financing:",
      steps: [
        {
          title: "Counseling Session",
          description:
            "Meet our admissions team to discuss the course fees, financing options, and your eligibility.",
        },
        {
          title: "Application & Approval",
          description:
            "Complete your financing application. We assist you through every step of the process.",
        },
        {
          title: "Enrollment & Training",
          description:
            "Once financing is approved, complete enrollment and begin your aviation training journey.",
        },
      ],
    },
    portfolioImages: [
      "/images/gallery/training-1.webp",
      "/images/gallery/training-2.webp",
      "/images/gallery/training-3.webp",
      "/images/gallery/training-4.webp",
      "/images/gallery/training-5.webp",
      "/images/gallery/training-6.webp",
    ],
  },
];
