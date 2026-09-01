import { CameraIcon, PlayIcon } from "./Icons";

export type ExhibitItem = {
  letter?: string;
  label: string;
  color: string;
  isVideo?: boolean;
};

export default function ExhibitTile({ letter, label, color, isVideo = false }: ExhibitItem) {
  return (
    <div
      className="flex aspect-[4/5] flex-col items-center justify-center gap-2.5 p-2.5 text-center"
      style={{ background: `linear-gradient(155deg, ${color}, #14181F)` }}
    >
      {isVideo ? (
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-cream bg-cream/15">
          <PlayIcon />
        </div>
      ) : (
        <CameraIcon />
      )}
      <span className="font-grotesk text-[10px] leading-snug text-cream/85">
        {letter ? `EXHIBIT ${letter} — ` : ""}
        {label}
      </span>
    </div>
  );
}
