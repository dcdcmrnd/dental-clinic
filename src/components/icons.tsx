type IconProps = {
  className?: string;
};

const base = "h-6 w-6";

export function ToothCleaningIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3c-2.5 0-3.5 1.5-5 1.5S4 3 2.8 3.9C1.6 4.8 1.8 7 2.3 9c.5 2 1.2 3.5 1.7 5.5.4 1.6.6 3.8 1.8 4.3.9.4 1.6-.4 2-1.7.3-1 .4-2.6 1.2-2.6s.9 1.6 1.2 2.6c.4 1.3 1.1 2.1 2 1.7 1.2-.5 1.4-2.7 1.8-4.3.5-2 1.2-3.5 1.7-5.5.5-2 .7-4.2-.5-5.1C18 3 17 4.5 15.5 4.5S14.5 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 8l1.5 1.5L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ImplantIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 4c1.2 1 2.4 1.5 4 1.5S14.8 5 16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 5.5c-.5 2 .3 3.5 1 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 5.5c.5 2-.3 3.5-1 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.5 10h3v2.5h-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 12.5v7M13 12.5v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.6 1.4" />
    </svg>
  );
}

export function BracesIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 9c2 6 4 8 8 8s6-2 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="10" cy="12.2" r="1" fill="currentColor" />
      <circle cx="14" cy="12.2" r="1" fill="currentColor" />
      <circle cx="17.5" cy="9.5" r="1" fill="currentColor" />
      <path d="M6.5 9.5h11" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ExtractionIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 4c-1.8 0-2.6 1-3.8 1S6 4.3 5.2 5c-.9.8-.7 2.6-.3 4 .4 1.4.9 2.5 1.3 4 .3 1.1.4 2.7 1.3 3 .6.3 1.1-.3 1.4-1.2.2-.7.3-1.8.9-1.8s.6 1.1.9 1.8c.3.9.8 1.5 1.4 1.2.9-.3 1-1.9 1.3-3 .4-1.5.9-2.6 1.3-4 .4-1.4.6-3.2-.3-4-.8-.7-2-.1-3-.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M17 3l3 3M20 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WhiteningIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 10c1-2.5 3-4 6-4s5 1.5 6 4c-1 1.5-1.3 3.5-1.7 5.5-.3 1.6-1 3-2.3 3-1 0-1.2-1.2-1.4-2.3-.1-.7-.2-1.7-.6-1.7s-.5 1-.6 1.7c-.2 1.1-.4 2.3-1.4 2.3-1.3 0-2-1.4-2.3-3C7.3 13.5 7 11.5 6 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 5l1 1M5 3.5v1.5M2.5 6h1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M19.5 4.5l1 1M20.5 3v1.5M18 5.5h1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function XrayIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 8.5c1.5 1.5 2.5 1.5 4 0s2.5-1.5 4 0 2.5 1.5 2 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 13c1.5 1.5 2.5 1.5 4 0s2.5-1.5 4 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 17h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function NightguardIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7c3-1.5 13-1.5 16 0-1 3.5-1 6 0 9-3 1.5-13 1.5-16 0 1-3 1-5.5 0-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.5 9.5h11M6.5 14.5h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function CheckupIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5c-2 0-2.9 1.3-4.3 1.3S5.4 3.6 4.4 4.4C3.3 5.3 3.5 7.3 4 9.1c.4 1.7 1 3 1.4 4.7.3 1.4.5 3.2 1.5 3.6.7.3 1.3-.4 1.7-1.5.3-.8.4-2.2 1-2.2s.7 1.4 1 2.2c.4 1.1 1 1.8 1.7 1.5 1-.4 1.2-2.2 1.5-3.6.4-1.7 1-3 1.4-4.7.5-1.8.7-3.8-.4-4.7-.9-.8-2-.4-2.9-.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9.5 10.5h1.2l.8-1.5.9 3 .7-1.5h1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RestorationIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5c-2 0-2.9 1.3-4.3 1.3S5.4 3.6 4.4 4.4C3.3 5.3 3.5 7.3 4 9.1c.4 1.7 1 3 1.4 4.7.3 1.4.5 3.2 1.5 3.6.7.3 1.3-.4 1.7-1.5.3-.8.4-2.2 1-2.2s.7 1.4 1 2.2c.4 1.1 1 1.8 1.7 1.5 1-.4 1.2-2.2 1.5-3.6.4-1.7 1-3 1.4-4.7.5-1.8.7-3.8-.4-4.7-.9-.8-2-.4-2.9-.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="8.2" r="1.9" fill="currentColor" />
    </svg>
  );
}

export function BridgeIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 17V9.5M20 17V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M4 9.5c0-1.4 1.1-2.5 2.5-2.5S9 8.1 9 9.5s1.1-2.5 2.5-2.5S15 8.1 15 9.5s1.1-2.5 2.5-2.5S20 8.1 20 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M4 9.5h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CrownIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 4.5l1.4 1.8h3.2L15 4.5l1 2.8-4 1.8-4-1.8 1-2.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5c-1 2.7 0 5.5 1 7.8.4.9 1 1.6 1.7 1.6.9 0 1.1-1 1.3-1.9.2.9.4 1.9 1.3 1.9.7 0 1.3-.7 1.7-1.6 1-2.3 2-5.1 1-7.8-1.2-1-2.6-1.4-4-1.4s-2.8.4-4 1.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DentureIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 8c0 6 3 10 8 10s8-4 8-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M6.5 8.5v3M9.3 9.3v3.6M12 9.6v3.8M14.7 9.3v3.6M17.5 8.5v3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TmjIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 14.5c-.3-4 2-7.5 5.5-7.8 2.5-.3 3.5 1.8 5.5 1.8 1.3 0 1.8-.8 2.7-.8-.7 1.8-1.7 2.8-1.7 4.8 0 2.8-2 4.8-4.7 4.8-1 0-1.6.5-2 1.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14.5" cy="10.2" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function VeneerIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 5.3c1-1 2.5-1.5 4-1.5s3 .5 4 1.5c.6 2-.2 4-.6 6-.3 1.7-.5 4-1.6 4.4-.8.3-1.2-.7-1.5-1.6-.1-.4-.3-1-.3-1s-.2.6-.3 1c-.3.9-.7 1.9-1.5 1.6-1.1-.4-1.3-2.7-1.6-4.4-.4-2-1.2-4-.6-6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9 6.5c1-.5 2-.7 3-.7s2 .2 3 .7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function PeriodonticsIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 10c2-3 5-4 8-4s6 1 8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M6 10v3c0 3 2.5 5 6 5s6-2 6-5v-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M9 10.5v2.2M12 10.5v3M15 10.5v2.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function RootCanalIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 4.2c1 .8 2 1.2 3 1.2s2-.4 3-1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M8.5 5.5c-.4 1.6.2 2.8.8 3.6M15.5 5.5c.4 1.6-.2 2.8-.8 3.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M9.3 9.1h5.4v2h-5.4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M10.8 11.1v6.3M13.2 11.1v6.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M12 11.6v5.6"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeDasharray="0.6 1.4"
      />
    </svg>
  );
}

export const serviceIcons = {
  cleaning: ToothCleaningIcon,
  restoration: RestorationIcon,
  extraction: ExtractionIcon,
  bridge: BridgeIcon,
  crown: CrownIcon,
  denture: DentureIcon,
  braces: BracesIcon,
  tmj: TmjIcon,
  implant: ImplantIcon,
  veneer: VeneerIcon,
  periodontics: PeriodonticsIcon,
  whitening: WhiteningIcon,
  rootcanal: RootCanalIcon,
} as const;

export function ShieldCheckIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C10.3 20.3 3.7 13.7 3.7 5.3c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-1.9 1.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 7l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s-6.5-6.1-6.5-11A6.5 6.5 0 1 1 18.5 10c0 4.9-6.5 11-6.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ClockIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FacebookIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13.5 8.5h1.5V6h-1.8c-1.5 0-2.5 1-2.5 2.6V10H9.5v2.3h1.2V18h2.3v-5.7h1.7l.3-2.3h-2V8.9c0-.3.2-.4.5-.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PauseIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
      <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
    </svg>
  );
}

export function PlayIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 5v14l12-7L7 5Z" fill="currentColor" />
    </svg>
  );
}
