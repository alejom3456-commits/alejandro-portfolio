type StampProps = {
  size?: number;
  filled?: boolean;
};

export default function Stamp({ size = 46, filled = false }: StampProps) {
  return (
    <div
      className="flex flex-shrink-0 rotate-[-9deg] flex-col items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background: filled ? "#E2492B" : "transparent",
        border: filled ? "none" : "1.5px dashed #2B4EA8",
        boxShadow: filled ? "0 4px 14px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div
        className="font-grotesk font-bold"
        style={{ fontSize: size * 0.22, color: filled ? "#F4EEDF" : "#2B4EA8" }}
      >
        A.M.
      </div>
      <div
        className="font-grotesk font-bold tracking-wide"
        style={{ fontSize: size * 0.12, color: filled ? "#F4EEDF" : "#2B4EA8" }}
      >
        REVIEWED
      </div>
    </div>
  );
}
