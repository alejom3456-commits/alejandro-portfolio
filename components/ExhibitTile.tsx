import Image from "next/image";
import { CameraIcon, PlayIcon } from "./Icons";

export type ExhibitItem = {
  letter?: string;
  label: string;
  color: string;
  isVideo?: boolean;
  src?: string;
  videoSrc?: string;
};

export default function ExhibitTile({ letter, label, color, isVideo = false, src, videoSrc }: ExhibitItem) {
  if (isVideo && videoSrc) {
    return (
      <div className="group relative aspect-[4/5] overflow-hidden bg-inkNavy">
        <video
          controls
          preload="none"
          playsInline
          poster={src}
          className="h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-1.5 p-2"
          style={{ background: "linear-gradient(to top, rgba(20,24,31,0.92), rgba(20,24,31,0))" }}
        >
          <PlayIcon size={10} />
          <span className="font-grotesk text-[9.5px] leading-snug text-cream/90">
            {letter ? `EXHIBIT ${letter} — ` : ""}
            {label}
          </span>
        </div>
      </div>
    );
  }

  if (src) {
    return (
      <div className="group relative aspect-[4/5] overflow-hidden">
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div
          className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 p-2"
          style={{ background: "linear-gradient(to top, rgba(20,24,31,0.92), rgba(20,24,31,0))" }}
        >
          {isVideo && <PlayIcon size={10} />}
          <span className="font-grotesk text-[9.5px] leading-snug text-cream/90">
            {letter ? `EXHIBIT ${letter} — ` : ""}
            {label}
          </span>
        </div>
      </div>
    );
  }

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
