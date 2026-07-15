export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Results", href: "#results" },
  { label: "Certifications", href: "#certifications" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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
  // [ASSET: dentist bio + photo] — placeholder until the clinic provides the dentist's name, credentials, and headshot
  dentist: {
    name: "[Dentist Name], D.M.D.",
    bio: "A short professional background for the lead dentist goes here — education, years of experience, and areas of focus. Replace this placeholder with approved copy.",
  },
};

// [ASSET: list of services + one-line descriptions] — confirm final names/descriptions with the clinic
export const services = [
  {
    icon: "cleaning",
    name: "Oral Prophylaxis (Dental Cleaning)",
    description: "Professional cleaning to remove plaque and tartar for a healthier smile.",
  },
  {
    icon: "restoration",
    name: "Dental Pasta / Restoration",
    description: "Tooth-colored fillings to repair cavities and damaged teeth.",
  },
  {
    icon: "extraction",
    name: "Tooth Extraction (Bunot)",
    description: "Safe, comfortable removal of teeth that can't be saved.",
  },
  {
    icon: "bridge",
    name: "Fixed Bridge",
    description: "A non-removable option for replacing one or more missing teeth.",
  },
  {
    icon: "crown",
    name: "Dental Jackets / Crowns (Zirconia)",
    description: "Durable, natural-looking crowns to protect and restore damaged teeth.",
  },
  {
    icon: "denture",
    name: "Dentures (Pustiso)",
    description: "Removable replacements that restore your bite and your smile.",
  },
  {
    icon: "braces",
    name: "Braces (Orthodontics)",
    description: "Guided treatment to gradually straighten and align your teeth.",
  },
  {
    icon: "tmj",
    name: "Craniodontics / TMJ",
    description: "Care for jaw joint pain, clicking, and related discomfort.",
  },
  {
    icon: "implant",
    name: "Dental Implant",
    description: "A durable, natural-looking option for replacing missing teeth.",
  },
  {
    icon: "veneer",
    name: "Veneers",
    description: "Thin custom shells that refine the shape and color of your smile.",
  },
  {
    icon: "periodontics",
    name: "Periodontics",
    description: "Treatment and care for healthy gums and supporting tissue.",
  },
  {
    icon: "whitening",
    name: "Teeth Whitening",
    description: "Brightening treatment to help lift stains and discoloration.",
  },
  {
    icon: "rootcanal",
    name: "Root Canal Treatment",
    description: "Treatment to save an infected or badly damaged tooth.",
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

// [ASSET: technology / equipment] — replace placeholders with the clinic's real, confirmed equipment
export const technology = {
  eyebrow: "Technology",
  heading: "Modern tools for gentler care",
  subtext: "A look at the kind of equipment we use — final list to be confirmed by the clinic.",
  items: [
    {
      name: "[Equipment Name]",
      description: "Placeholder — confirm with the clinic which imaging equipment to feature here.",
    },
    {
      name: "[Equipment Name]",
      description: "Placeholder — confirm with the clinic which chairside equipment to feature here.",
    },
    {
      name: "[Equipment Name]",
      description: "Placeholder — confirm with the clinic which sterilization equipment to feature here.",
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

// [ASSET: certifications / licenses / memberships] — replace placeholders with the clinic's real, verified credentials
export const certifications = [
  { name: "PRC-Licensed Dentist", note: "Placeholder — confirm license details" },
  { name: "Philippine Dental Association Member", note: "Placeholder — confirm membership" },
  { name: "DOH-Registered Clinic", note: "Placeholder — confirm registration" },
  { name: "Infection Control Certified", note: "Placeholder — confirm certification" },
];

// [ASSET: contact details + hours]
export const contact = {
  addressLines: [
    "Mount Apo Street, Davao City, Davao del Sur, Philippines",
    "(near Davao Doctors Hospital) — [ASSET: exact unit/building number]",
  ],
  phone: "0912 345 6789",
  email: "[ASSET: clinic email address]",
  hours: [{ days: "Monday – Saturday", time: "10:00 AM – 5:00 PM" }],
  // [ASSET: Facebook/Instagram]
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],
};

export const siteMeta = {
  name: "Gentle Smiles Dental Clinic",
  shortName: "Gentle Smiles",
  tagline: "Gentle Touch. Beautiful Smiles.",
};
