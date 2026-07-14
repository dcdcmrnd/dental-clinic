export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
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
  mapQuery: "Mount Apo Street, Davao City, Philippines",
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
