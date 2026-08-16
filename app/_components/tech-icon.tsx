type IconProps = { className?: string };

function IconBase({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className ?? "h-3 w-3"}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function NextIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 16V8l8 8V8" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function TypeScriptIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 5h14M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function CodeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m8 6-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function CardIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="2.5" y="6" width="19" height="13" rx="2" />
      <path d="M2.5 10.5h19" strokeLinecap="round" />
    </IconBase>
  );
}

function LockIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round" />
    </IconBase>
  );
}

function WaveIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M3 12c1.4-3 3.4-3 5-.3 1.6 2.7 3.6 2.7 5 0 1.4-2.7 3.4-2.7 5 .3M3 17c1.4-3 3.4-3 5-.3 1.6 2.7 3.6 2.7 5 0 1.4-2.7 3.4-2.7 5 .3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function RepeatIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M4 4v5h5M20 20v-5h-5M4.5 15a8 8 0 0 0 14-4M19.5 9a8 8 0 0 0-14 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function PlayIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3" />
      <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

function CameraIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="15" rx="3" />
      <circle cx="12" cy="12.5" r="3.3" />
      <circle cx="16.8" cy="8.7" r="0.6" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

function FilmIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M7 4.5v15M17 4.5v15M2.5 9.5h4.5M2.5 14.5h4.5M17 9.5h4.5M17 14.5h4.5" strokeLinecap="round" />
    </IconBase>
  );
}

function TagIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M3 12 12 3h6a3 3 0 0 1 3 3v6l-9 9a2 2 0 0 1-2.8 0L3 14.8a2 2 0 0 1 0-2.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

const ICONS: Record<string, (props: IconProps) => React.ReactNode> = {
  "Next.js": NextIcon,
  TypeScript: TypeScriptIcon,
  "Monaco Editor": CodeIcon,
  "Mercado Pago": CardIcon,
  "Google OAuth": LockIcon,
  "Tailwind CSS": WaveIcon,
  "SM-2 (spaced repetition)": RepeatIcon,
  "YouTube API": PlayIcon,
  "Instagram Graph API": CameraIcon,
  ffmpeg: FilmIcon,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? TagIcon;
  return <Icon className={className} />;
}
