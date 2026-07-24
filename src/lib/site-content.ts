// Trimmed set shown in the header nav — keep this short so the header
// doesn't get crowded. "Contact" is left out since the header already has
// a standalone "Contact Us" button pointing to the same place. The
// footer's Quick Links use footerNav below for the fuller list.
export const nav = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Results", href: "/#results" },
  { label: "Training", href: "/#training" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "Gentle Smiles Dental Clinic",
  // [ASSET: hero headline] — swap for the clinic's approved tagline
  headline: "Gentle dental care, right here in Davao City.",
  // [ASSET: hero subtext]
  subtext:
    "Modern, comfortable dentistry for the whole family — from routine cleanings to smile makeovers, delivered with a calm, reassuring touch.",
  ctaLabel: "Contact Us",
};

export const about = {
  eyebrow: "About Us",
  heading: "A calmer kind of dental visit.",
  // [ASSET: about paragraph] — replace with the clinic's own story
  paragraphs: [
    "Gentle Smiles Dental Clinic was built around a simple idea: going to the dentist shouldn't feel stressful. Located along Mount Apo Street in Davao City, our clinic offers a clean, welcoming space where patients of all ages can feel at ease.",
    "From your first visit, our team takes the time to listen, explain your options clearly, and walk you through every step of your care — no rushed appointments, no surprises.",
  ],
  // [ASSET: dentist bio + photo] — name confirmed from training certificates; bio still needs approved copy from the clinic
  dentist: {
    name: "Dr. Delia Cunanan, D.M.D.",
    bio: "A short professional background for the lead dentist goes here — education, years of experience, and areas of focus. Replace this placeholder with approved copy.",
  },
};

export const services = [
  {
    icon: "extraction",
    category: "Oral Surgery",
    items: ["Tooth Wisdom Removal (Impacted 3rd Molar)", "Apicoectomy", "Alveolectomy"],
  },
  {
    icon: "periodontics",
    category: "Periodontics",
    items: ["Gingivectomy", "Frenectomy"],
  },
  {
    icon: "veneer",
    category: "Esthetics",
    items: ["Veneers", "Laminates"],
  },
  {
    icon: "tmj",
    category: "Craniodontics",
    items: ["TMJ Problem (Disorder/Dysfunction)"],
  },
  {
    icon: "braces",
    category: "Orthodontics",
    items: ["Braces"],
  },
  {
    icon: "cleaning",
    category: "General Dentistry",
    items: [
      "Dental Cleaning",
      "Pasta",
      "Tooth Extraction (Bunot)",
      "Denture (Pustiso) — Plastic, Flexible",
      "Jacket Crown (Plastic, Porcelain, Zirconia)",
      "Fixed Bridge",
    ],
  },
  {
    icon: "rootcanal",
    category: "Endodontics",
    items: ["Root Canal Treatment"],
  },
  {
    icon: "implant",
    category: "Dental Implant",
    items: [],
  },
  {
    icon: "whitening",
    category: "Teeth Whitening",
    items: [],
  },
] as const;

export const results = [
  {
    image: "/images/results-1.jpg",
    alt: "A patient's smile before and after cosmetic dental treatment",
    caption: "Smile brightening results",
  },
  {
    image: "/images/results-2.jpg",
    alt: "A patient's smile before, during, and after orthodontic treatment",
    caption: "Orthodontic transformation",
  },
];

export const whyChooseUs = {
  eyebrow: "Why Choose Us",
  heading: "Dental care that puts you first",
  subtext: "A few things that set the Gentle Smiles experience apart.",
  items: [
    {
      title: "Gentle Care",
      description:
        "A calm, unhurried approach at every visit — we explain each step before we begin, so nothing comes as a surprise.",
    },
    {
      title: "Modern & Clean Facility",
      description:
        "A clean, comfortable space with modern equipment, kept to a high standard of hygiene for every patient.",
    },
    {
      title: "Personalized Treatment",
      description:
        "Every treatment plan is built around your specific needs, your goals, and your comfort.",
    },
    {
      title: "Transparent Communication",
      description:
        "Clear answers about your treatment and its cost, discussed openly before any work begins.",
    },
  ],
};

export const process = {
  eyebrow: "Our Process",
  heading: "What to expect, step by step",
  subtext: "A simple, unhurried path from your first message to your next smile.",
  steps: [
    {
      title: "Book Your Visit",
      description: "Reach out through the form, a phone call, or Facebook to schedule a time that works for you.",
    },
    {
      title: "Consultation & Exam",
      description: "We review your dental history and take a good look at your teeth and gums to understand your needs.",
    },
    {
      title: "Personalized Treatment Plan",
      description: "We walk you through your options, timeline, and costs — so you can decide with confidence.",
    },
    {
      title: "Gentle Treatment",
      description: "Your treatment is carried out at a comfortable pace, with clear communication throughout.",
    },
    {
      title: "Aftercare Follow-Up",
      description: "We check in after your visit and share simple guidance for keeping your smile healthy at home.",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  heading: "Common questions, answered",
  subtext: "Can't find what you're looking for? Reach out and we'll be happy to help.",
  items: [
    {
      question: "What should I bring to my first visit?",
      answer:
        "Please bring a valid ID and, if available, any previous dental records or X-rays. Arriving a few minutes early gives us time to complete any necessary forms.",
    },
    {
      question: "Do you accept walk-ins?",
      answer:
        "We recommend booking ahead so we can set aside enough time for your visit, but feel free to call or message us to check same-day availability.",
    },
    {
      question: "How often should I get my teeth cleaned?",
      answer:
        "Most patients benefit from a professional cleaning every six months, though your dentist may suggest a different schedule based on your oral health.",
    },
    {
      question: "Do you accept insurance or HMOs?",
      answer:
        "Coverage varies by provider — please contact us with your insurance or HMO details and we'll confirm what's accepted before your visit.",
    },
  ],
};

export const trainingIntro = {
  eyebrow: "Continuing Education",
  heading: "Always training, always improving",
  subtext:
    "Our team regularly attends hands-on courses with leading Philippine specialists to keep every technique current — here's a look at our most recent training.",
};

export const trainings = [
  {
    title: "Ceramic Veneers from A-Z",
    program: "Master Path Curriculum, Module 4 — Anterior & Posterior Veneers",
    instructor: "Dr. Tina Lopez, DMD",
    instructorNote: "Master Instructor, Craniodontic Group Philippines",
    host: "Stevenson Dental Solutions",
    location: "Makati City, Philippines",
    date: "June 2026",
    image: {
      src: "/images/training-mentor-portrait.jpg",
      alt: "Dr. Delia Cunanan with Master Instructor Dr. Tina Lopez, DMD, at the Ceramic Veneers from A-Z workshop",
    },
    quote: {
      text: "“No dull moment for five straight days — hands-on veneer work from morning to night, the energy never dropped, and we came home more confident and eager to keep learning.”",
      attribution: "The team's takeaway from the workshop",
    },
  },
  {
    title: "Clinical Perio Masterclass",
    program:
      "Comprehensive periodontitis course for general practitioners — lecture & hands-on workshop",
    instructor: "Dr. Steve B. Almonte, MSCD Perio",
    instructorNote: "Past President, Philippine Dental Association (2018)",
    host: "Dental Recipe Academy",
    location: "Las Piñas City, Philippines",
    date: "April 2026",
    image: {
      src: "/images/training-perio-certificate.jpg",
      alt: "Dr. Delia Cunanan receiving her certificate at the Clinical Perio Masterclass",
    },
    quote: null,
  },
] as const;

export const trainingPhotos = [
  {
    src: "/images/training-workshop-intro.jpg",
    alt: "Dr. Delia Cunanan and Dr. Tina Lopez in front of the veneer workshop's opening presentation slide",
  },
  {
    src: "/images/training-workshop-booklet.jpg",
    alt: "The Ceramic Veneers from A-Z intensive hands-on workshop program booklet",
  },
  {
    src: "/images/training-hands-on-1.jpg",
    alt: "Dr. Tina Lopez guiding hands-on veneer work during the workshop",
  },
  {
    src: "/images/training-hands-on-2.jpg",
    alt: "Close-up of hands-on ceramic veneer shaping during the workshop",
  },
  {
    src: "/images/training-digital-tech.jpg",
    alt: "Digital jaw-tracking technology demonstrated during the veneer workshop",
  },
  {
    src: "/images/training-kit.jpg",
    alt: "Workshop instrument kit and dental model used during hands-on training",
  },
  {
    src: "/images/training-group.jpg",
    alt: "Dr. Delia Cunanan receiving her certificate of participation alongside fellow veneer workshop trainees",
  },
  {
    src: "/images/training-perio-hands-on.jpg",
    alt: "Hands-on periodontal technique practice during the Clinical Perio Masterclass",
  },
  {
    src: "/images/training-perio-group.jpg",
    alt: "Group photo of attendees at the Clinical Perio Masterclass",
  },
] as const;

// [ASSET: contact details + hours]
export const contact = {
  addressLines: [
    "Ground Floor, Door 7, Elles Pension, Mt. Apo St., Brgy. 7-A, Davao City, Davao del Sur 8000",
    "(Near Davao Doctors Hospital & Dunkin Donuts)",
  ],
  phone: "0912 345 6789",
  hours: [{ days: "Monday – Saturday", time: "10:00 AM – 5:00 PM" }],
  facebook: "https://www.facebook.com/GentleSmilesDentalClinicDAVAO",
};

export const siteMeta = {
  name: "Gentle Smiles Dental Clinic",
  shortName: "Gentle Smiles",
  tagline: "Gentle Touch. Beautiful Smiles.",
};
