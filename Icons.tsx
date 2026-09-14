export function PlayIcon({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#F4EEDF">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function CameraIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F4EEDF"
      strokeWidth={1.5}
      opacity={0.85}
    >
      <rect x="3" y="6" width="18" height="13" rx="1.5" />
      <circle cx="12" cy="12.5" r="3.1" />
      <path d="M8 6l1.4-2h5.2L16 6" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 13, color = "#F4EEDF" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function BackArrowIcon({ size = 13, color = "#C9C4B4" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}
