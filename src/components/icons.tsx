// Iconos SVG inline — evita problemas de SSR con lucide-react en el Worker.
// API similar a lucide: <Icon className="h-4 w-4" />.

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (size?: number) => ({
  width: size ?? 24,
  height: size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const ArrowDownIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

export const ArrowUpRightIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export const SparklesIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);

export const MenuIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const ShieldIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
  </svg>
);

export const BookOpenIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z" />
  </svg>
);

export const PaletteIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="13.5" cy="6.5" r="1.5" />
    <circle cx="17.5" cy="10.5" r="1.5" />
    <circle cx="8.5" cy="7.5" r="1.5" />
    <circle cx="6.5" cy="12.5" r="1.5" />
    <path d="M12 2a10 10 0 1 0 0 20 2.5 2.5 0 0 0 1.8-4.2 2.5 2.5 0 0 1 1.8-4.2H17a5 5 0 0 0 5-5c0-4.4-4.5-7-10-7z" />
  </svg>
);

export const Code2Icon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
  </svg>
);

export const MegaphoneIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 11v3a1 1 0 0 0 1 1h2l3.5 5h2v-5l9 4V4l-9 4H4a1 1 0 0 0-1 1v2z" />
  </svg>
);

export const LightbulbIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.7.6 1 1.5 1 2.3v0h6v0c0-.8.3-1.7 1-2.3A7 7 0 0 0 12 2z" />
  </svg>
);


export const SearchIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const PencilIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>
);
export const TerminalIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="m4 17 6-6-6-6M12 19h8" /></svg>
);
export const RocketIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.7-2.2-.1-3a2 2 0 0 0-2.9 0z" /><path d="M12 15 9 12a11 11 0 0 1 5-9 11 11 0 0 1 9 5l-3 3" /><path d="M9 12H4l3-7h6" /><path d="M12 15v5l7-3v-6" /></svg>
);
export const SunIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
);
export const MoonIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
);
