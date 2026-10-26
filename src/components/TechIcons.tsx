import React from 'react'

export interface TechIconProps {
  className?: string
  size?: number
}

// 1. Official TypeScript Logo (Exact blue rounded box with white TS)
export const TypeScriptIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 128 128"
    width={size}
    height={size}
    className={className}
    aria-label="TypeScript Logo"
  >
    <rect width="128" height="128" rx="16" fill="#3178C6" />
    <path
      d="M74.1 63.8v7.9c0 10.5 4.6 16.3 14.8 16.3 5.4 0 9.7-1.4 12.8-3.4l2.5 8.8c-4.4 2.4-10.4 3.9-17.6 3.9-16.7 0-24.8-9.6-24.8-25.2V63.8h-9.9v-8.7h9.9V40.9l12.3-3.7v17.9h15.9v8.7H74.1z"
      fill="#ffffff"
      style={{ display: 'none' }} // fallback anchor
    />
    {/* Clean, authentic bold TS letterforms */}
    <path
      d="M26 40h42v11H49v45H36V51H26V40zm45 35.8c3.2 2 7.7 3.5 12.5 3.5 6.7 0 10.6-3.3 10.6-8.2 0-4.6-3.7-7.2-10.3-9.7-8.6-3.1-14.1-7.7-14.1-15.1 0-8.5 7.1-14.9 18.2-14.9 5.8 0 10.5 1.4 13.5 3.1l-3 9.4c-2.4-1.4-6-2.5-10.4-2.5-5.9 0-8.9 3.2-8.9 7 0 4.4 3.6 6.7 10.6 9.4 9 3.4 13.8 8.1 13.8 15.6 0 9.2-7.3 16.2-19.8 16.2-6.5 0-12.3-1.8-15.7-4l3-9.7z"
      fill="#ffffff"
    />
  </svg>
)

// 2. Official React Logo (Exact authentic cyan atomic nucleus & 3 intersecting orbits)
export const ReactIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="-11.5 -10.23174 23 20.46348"
    width={size}
    height={size}
    className={className}
    aria-label="React Logo"
  >
    <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
    <g stroke="#00D8FF" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)

// 3. Official JavaScript Logo (Yellow rounded tile with JS)
export const JavaScriptIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 128 128"
    width={size}
    height={size}
    className={className}
    aria-label="JavaScript Logo"
  >
    <rect width="128" height="128" rx="16" fill="#F7DF1E" />
    <path
      d="M34.8 102.2c2.4 1.4 5.9 2.5 9.7 2.5 5.8 0 9.2-2.8 9.2-7.4V58h12.5v39.4c0 10.5-6.5 16.8-19.4 16.8-5.7 0-10.6-1.5-13.4-3.1l1.4-8.9zm39.1-1.3c3.5 2.1 8.5 3.8 14.1 3.8 7.9 0 12.6-3.9 12.6-9.8 0-5.5-4.4-8.6-12.3-11.6-10.2-3.7-16.8-9.2-16.8-18 0-10.1 8.4-17.7 21.6-17.7 6.9 0 12.5 1.7 16 3.7l-3.5 11.2c-2.9-1.7-7.1-3-12.4-3-7 0-10.6 3.8-10.6 8.3 0 5.2 4.3 7.9 12.6 11.2 10.7 4 16.4 9.6 16.4 18.5 0 10.9-8.7 19.3-23.7 19.3-7.7 0-14.6-2.1-18.7-4.8l4.7-11.2z"
      fill="#000000"
    />
  </svg>
)

// 4. Official Next.js Logo
export const NextjsIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 180 180"
    width={size}
    height={size}
    className={className}
    aria-label="Next.js Logo"
  >
    <mask height="180" id="next-mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
      <circle cx="90" cy="90" fill="#000" r="90" />
    </mask>
    <g mask="url(#next-mask)">
      <circle cx="90" cy="90" data-circle="true" fill="#000" r="90" stroke="#38bdf8" strokeWidth="6" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#next-paint0)"
      />
      <rect fill="url(#next-paint1)" height="72" width="12" x="115" y="54" />
    </g>
    <defs>
      <linearGradient id="next-paint0" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="next-paint1" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

// 5. Official Electron.js Logo (Teal nuclear orbital)
export const ElectronIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    className={className}
    aria-label="Electron.js Logo"
  >
    <circle cx="128" cy="128" r="16" fill="#9FEAF9" />
    <g fill="none" stroke="#9FEAF9" strokeWidth="10">
      <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(30 128 128)" />
      <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(90 128 128)" />
      <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(150 128 128)" />
    </g>
  </svg>
)

// 6. Official Redux Logo
export const ReduxIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 500 500"
    width={size}
    height={size}
    className={className}
    aria-label="Redux Logo"
  >
    <path
      fill="#764ABC"
      d="M250 50C139.54 50 50 139.54 50 250s89.54 200 200 200 200-89.54 200-200S360.46 50 250 50zm117.8 179.9c-.8 20.2-9.2 38.8-23.7 52.8 3.5 13.9 3.1 28.5-1.4 42.1-7.2 21.6-25.1 36.8-47.5 40.5-22.3 3.6-44.8-4.5-59.8-21.7-16.1 1.6-32.5-3.3-45.7-14.1-16.7-13.6-24.9-34.7-22-56 3-21.4 16.7-39.3 36.3-47.5 1.5-14.9 8.6-28.8 20.3-39 15.6-13.7 36.9-19.1 57.5-14.8 16.4-12.7 37.8-17.7 58.6-13.5 24.5 4.9 44.2 23.3 50.8 47.3 1.2 4.4 1.8 8.9 1.8 13.4-.2 3.5-.7 7-1.4 10.5z"
    />
    <circle cx="218" cy="275" r="28" fill="#FFFFFF" />
    <circle cx="282" cy="275" r="28" fill="#FFFFFF" />
    <circle cx="250" cy="215" r="28" fill="#FFFFFF" />
  </svg>
)

// 7. Official Zustand Logo (The cute bear mascot)
export const ZustandIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    aria-label="Zustand Logo"
  >
    {/* Bear head */}
    <circle cx="25" cy="25" r="16" fill="#8d5b4c" />
    <circle cx="25" cy="25" r="9" fill="#e0a98b" />
    <circle cx="75" cy="25" r="16" fill="#8d5b4c" />
    <circle cx="75" cy="25" r="9" fill="#e0a98b" />
    <ellipse cx="50" cy="55" rx="36" ry="32" fill="#8d5b4c" />
    <ellipse cx="50" cy="65" rx="20" ry="15" fill="#e0a98b" />
    {/* Eyes */}
    <circle cx="38" cy="48" r="4.5" fill="#2d1b14" />
    <circle cx="62" cy="48" r="4.5" fill="#2d1b14" />
    {/* Snout */}
    <ellipse cx="50" cy="60" rx="7" ry="5" fill="#2d1b14" />
    <path d="M50 65 v5" stroke="#2d1b14" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// 8. Official Tailwind CSS Logo
export const TailwindIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 54 33"
    width={size}
    height={size}
    className={className}
    aria-label="Tailwind CSS Logo"
  >
    <path
      fill="#38BDF8"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
    />
  </svg>
)

// 9. Official Shadcn/ui Logo
export const ShadcnIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    className={className}
    aria-label="Shadcn UI Logo"
  >
    <rect width="256" height="256" rx="60" fill="#09090b" stroke="#27272a" strokeWidth="8" />
    <line x1="208" y1="128" x2="128" y2="208" stroke="#ffffff" strokeWidth="24" strokeLinecap="round" />
    <line x1="192" y1="40" x2="40" y2="192" stroke="#ffffff" strokeWidth="24" strokeLinecap="round" />
  </svg>
)

// 10. Official React Bits Logo (Glowing creative particles)
export const ReactBitsIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    aria-label="React Bits Logo"
  >
    <defs>
      <linearGradient id="rb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D8FF" />
        <stop offset="50%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="22" fill="#030712" stroke="url(#rb-grad)" strokeWidth="3" />
    {/* Stylized animated particle bits */}
    <circle cx="50" cy="50" r="10" fill="url(#rb-grad)" />
    <path
      d="M50 20 L53 38 L71 35 L57 47 L68 62 L50 54 L32 62 L43 47 L29 35 L47 38 Z"
      fill="none"
      stroke="url(#rb-grad)"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <circle cx="28" cy="28" r="4" fill="#38bdf8" />
    <circle cx="72" cy="72" r="4" fill="#c084fc" />
  </svg>
)

// 11. Official Material UI (MUI) Logo
export const MuiIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 36 32"
    width={size}
    height={size}
    className={className}
    aria-label="Material UI Logo"
  >
    <path fill="#007FFF" d="M30 4.5 18 11.4 6 4.5 18 0l12 4.5z" />
    <path fill="#0059B2" d="M18 11.4v14L6 18.5V4.5l12 6.9z" />
    <path fill="#007FFF" d="M18 11.4 30 4.5v14l-12 6.9v-14z" />
    <path fill="#003B73" d="M6 18.5 18 25.4 6 32.3v-13.8z" />
    <path fill="#0059B2" d="M18 25.4v6.9L6 32.3l12-6.9z" />
    <path fill="#007FFF" d="M18 25.4 30 18.5v13.8l-12-6.9z" />
  </svg>
)

// 12. Official Docker Logo (Blue whale with container blocks)
export const DockerIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-label="Docker Logo"
  >
    <path
      fill="#2496ED"
      d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m21.75 1.543c-.452-.313-1.682-.416-2.61-.174-.426-.95-1.332-1.564-2.502-1.564-1.285 0-2.316.745-2.73 1.765H1.472a1.47 1.47 0 0 0-1.472 1.47c0 4.79 3.882 8.672 8.672 8.672 5.626 0 10.37-3.95 11.512-9.282.936.19 2.506.49 3.774-.698.05-.047.073-.11.066-.176a.22.22 0 0 0-.066-.143z"
    />
  </svg>
)

// 13. Official Jenkins Logo (Classic Butler)
export const JenkinsIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 256 352"
    width={size}
    height={size}
    className={className}
    aria-label="Jenkins Logo"
  >
    <path
      fill="#D24939"
      d="M128 0C78.9 0 38.3 36.3 31.8 83.7h192.4C217.7 36.3 177.1 0 128 0zm-84.5 103.5C21.7 131.6 8 167.3 8 206.3c0 68.7 42.4 126.9 101.9 140.6v-34.9c-36.8-11.8-63.5-46.7-63.5-88.1 0-21.7 7.7-41.5 20.4-56.9l-23.3-63.5z"
    />
    <path
      fill="#FFFFFF"
      d="M128 92.5c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 24c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"
    />
    <path fill="#2E3440" d="M128 175c-10.5 0-19-8.5-19-19h38c0 10.5-8.5 19-19 19z" />
  </svg>
)

// 14. Official Git Logo (Orange diamond)
export const GitIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 128 128"
    width={size}
    height={size}
    className={className}
    aria-label="Git Logo"
  >
    <path
      fill="#F05032"
      d="M124.6 57.2L70.8 3.4c-4.5-4.5-11.9-4.5-16.4 0L40.7 17.1l17.7 17.7c4.8-1.6 10.3-.5 14.1 3.3 3.8 3.8 4.9 9.3 3.3 14.1l17.1 17.1c4.8-1.6 10.3-.5 14.1 3.3 5.4 5.4 5.4 14.2 0 19.6s-14.2 5.4-19.6 0c-4.1-4.1-5-10.2-2.7-15.1L70.4 60.8v34.4c1.8 1 3.4 2.5 4.5 4.4 3.7 6.1 1.8 14.1-4.3 17.8s-14.1 1.8-17.8-4.3c-3.7-6.1-1.8-14.1 4.3-17.8 2.2-1.3 4.7-1.9 7.2-1.8V59.4c-2.5.1-5-.5-7.2-1.8l-17 17c2.3 4.9 1.4 11-2.7 15.1-5.4 5.4-14.2 5.4-19.6 0s-5.4-14.2 0-19.6c4.1-4.1 10.2-5 15.1-2.7L44.8 50.3c-1.6-4.8-.5-10.3 3.3-14.1L3.4 70.8c-4.5 4.5-4.5 11.9 0 16.4l53.8 53.8c4.5 4.5 11.9 4.5 16.4 0l51-51c4.5-4.5 4.5-11.9 0-16.4z"
    />
  </svg>
)

// 15. Official Postman Logo (Orange spaceman)
export const PostmanIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    className={className}
    aria-label="Postman Logo"
  >
    <circle cx="128" cy="128" r="120" fill="#FF6C37" />
    <path
      fill="#FFFFFF"
      d="M174.4 74.2c-7.9-10.4-18.7-18.3-31.1-22.9-12.4-4.5-25.8-5-38.5-1.4-12.7 3.6-24 10.9-32.5 21s-13.6 22.5-14.6 35.6c-.3 3.6-.1 7.2.5 10.8l38.2 19.1 7.1-14.2c-5.8-2.9-9.5-8.9-9.5-15.4 0-9.6 7.8-17.4 17.4-17.4s17.4 7.8 17.4 17.4c0 6.5-3.6 12.5-9.5 15.4l7.1 14.2 38.3-19.1c2-5.4 2.8-11.1 2.4-16.9-.9-9.5-5.3-18.5-12.7-25.8z"
    />
    <path
      fill="#FFFFFF"
      d="M87.5 138.3l15.9 7.9-10.4 20.8c-2.3 4.6-1.5 10.2 2 14 3.5 3.8 9 5 13.8 3l20.4-8.5 7.9 15.9 22.8-9.5-12.2-24.4 15.9-7.9-86.1-11.3z"
    />
  </svg>
)

// 16. Official Jira Logo
export const JiraIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    className={className}
    aria-label="Jira Logo"
  >
    <path
      fill="#2684FF"
      d="M246.7 122.9L133.1 9.3c-5.2-5.2-13.6-5.2-18.8 0L9.3 124.3c-5.2 5.2-5.2 13.6 0 18.8l113.6 113.6c5.2 5.2 13.6 5.2 18.8 0l105-115c5.2-5.2 5.2-13.6 0-18.8z"
    />
    <path
      fill="#0052CC"
      d="M123.7 19.3L19.3 123.7c-5.2 5.2-5.2 13.6 0 18.8l104.4 104.4V19.3z"
    />
  </svg>
)

// 17. Webpack / Micro-Frontend Module Federation Logo
export const WebpackIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    className={className}
    aria-label="Webpack Module Federation"
  >
    <path fill="#8DD6F9" d="M128 32l83.1 48v96L128 224l-83.1-48V80L128 32z" />
    <path fill="#1C78C0" d="M128 48.7l68.7 39.7v79.2L128 207.3l-68.7-39.7V88.4L128 48.7z" />
    <path fill="#8DD6F9" d="M128 73.4l47.3 27.3v54.6L128 182.6l-47.3-27.3v-54.6L128 73.4z" />
    <path fill="#FFFFFF" d="M128 92.2l31 17.9v35.8L128 163.8l-31-17.9v-35.8L128 92.2z" />
  </svg>
)

// 18. High-Frequency Rendering & Telemetry Acceleration
export const PerformanceIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="High Frequency Rendering"
  >
    <circle cx="12" cy="12" r="10" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
    <path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      fill="#38bdf8"
      stroke="#0284c7"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
)

// 19. WebSocket & Live Streaming Protocol
export const WebSocketIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="WebSocket Stream"
  >
    <rect width="24" height="24" rx="6" fill="#0f172a" />
    <path
      d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8"
      stroke="#38bdf8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 12c0-2.761 2.239-5 5-5s5 2.239 5 5"
      stroke="#60a5fa"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="2.5" fill="#38bdf8" />
    <path d="M12 15v5M9 20h6" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// 20. BroadcastChannel & Hardware IPC
export const BroadcastChannelIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="BroadcastChannel Hardware IPC"
  >
    <rect x="2" y="3" width="20" height="18" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />
    <path d="M6 8h12M6 12h8M6 16h10" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    <circle cx="18" cy="14" r="2" fill="#34d399" />
    <path d="M18 10v1M18 17v1" stroke="#34d399" strokeWidth="1.5" />
  </svg>
)

// 21. RESTful APIs
export const RestApiIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="RESTful APIs"
  >
    <rect width="24" height="24" rx="6" fill="#1e293b" />
    <path
      d="M4 8l4 4-4 4M10 16h6M16 8l4 4-4 4"
      stroke="#38bdf8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// 22. Code Splitting & Lazy Loading
export const CodeSplittingIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="Code Splitting"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#38bdf8" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#60a5fa" opacity="0.8" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#818cf8" opacity="0.8" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
)

// 23. Responsive & Accessible Design
export const ResponsiveIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="Responsive Design"
  >
    <rect x="2" y="3" width="14" height="11" rx="2" stroke="#38bdf8" strokeWidth="1.8" />
    <rect x="12" y="8" width="10" height="13" rx="2" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.8" />
    <circle cx="17" cy="18" r="0.8" fill="#60a5fa" />
  </svg>
)

// 24. Global Working English
export const EnglishIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    aria-label="English Global Proficiency"
  >
    <circle cx="12" cy="12" r="10" stroke="#38bdf8" strokeWidth="1.8" />
    <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke="#38bdf8" strokeWidth="1.4" />
    <path d="M2 12h20M4 6.5h16M4 17.5h16" stroke="#38bdf8" strokeWidth="1.4" />
  </svg>
)

// Central Map pairing Skill Name -> Real Brand Component
export const REAL_TECH_ICON_MAP: Record<string, React.FC<TechIconProps>> = {
  'TypeScript': TypeScriptIcon,
  'JavaScript (ES6+)': JavaScriptIcon,
  'English': EnglishIcon,
  'React.js': ReactIcon,
  'Electron.js': ElectronIcon,
  'Next.js': NextjsIcon,
  'Redux / Redux Toolkit': ReduxIcon,
  'Zustand': ZustandIcon,
  'WebSocket': WebSocketIcon,
  'RESTful APIs': RestApiIcon,
  'Tailwind CSS': TailwindIcon,
  'Shadcn/ui': ShadcnIcon,
  'React Bits': ReactBitsIcon,
  'Material UI (MUI)': MuiIcon,
  'Responsive & Accessible Design': ResponsiveIcon,
  'Micro-Frontend (Module Federation)': WebpackIcon,
  'High-Frequency Rendering Optimization': PerformanceIcon,
  'Code Splitting & Lazy Loading': CodeSplittingIcon,
  'BroadcastChannel & Hardware IPC': BroadcastChannelIcon,
  'Git & Bitbucket': GitIcon,
  'Docker': DockerIcon,
  'Jenkins (CI/CD)': JenkinsIcon,
  'Postman & JMeter': PostmanIcon,
  'Jira & Agile Workflows': JiraIcon,
}
