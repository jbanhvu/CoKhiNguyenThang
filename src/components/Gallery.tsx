import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { photoSrc, type Photo } from "../data/siteData";
import { Img } from "./Img";

type GalleryProps = {
  photos: Photo[];
  className?: string;
};

export function Gallery({ photos, className = "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" }: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const active = index === null ? null : photos[index];
  const step = (delta: number) => setIndex((value) => (value === null ? value : (value + delta + photos.length) % photos.length));

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, photos.length]);

  return (
    <>
      <div className={className}>
        {photos.map((item, i) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setIndex(i)}
            className="group aspect-square overflow-hidden rounded-lg bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
            aria-label={`Phóng to ảnh: ${item.alt}`}
          >
            <Img photo={item} sizes="(min-width: 1024px) 25vw, 50vw" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
          </button>
        ))}
      </div>

      {active && index !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setIndex(null)}
        >
          <figure className="relative" onClick={(event) => event.stopPropagation()}>
            <img src={photoSrc(active.name)} alt={active.alt} className="max-h-[80vh] w-auto max-w-full rounded-md object-contain" />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {active.alt} · {index + 1}/{photos.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy"
            aria-label="Đóng"
          >
            <X className="h-6 w-6" />
          </button>
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy"
                aria-label="Ảnh tiếp theo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
