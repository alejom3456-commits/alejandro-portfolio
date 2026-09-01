type FieldLabelProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

export default function FieldLabel({ children, color = "#2B4EA8", className = "" }: FieldLabelProps) {
  return (
    <div
      className={`flex items-center gap-2.5 font-grotesk text-[11.5px] font-bold uppercase tracking-[0.14em] ${className}`}
      style={{ color }}
    >
      <span className="h-[2px] w-[18px]" style={{ backgroundColor: color }} />
      {children}
    </div>
  );
}
