import { MAP_QUERY } from "../config";

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <iframe
      title="Bản đồ đường đến xưởng Cơ Khí Nguyễn Thắng"
      src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=14&hl=vi&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`h-full min-h-[360px] w-full rounded-lg border-0 ${className}`}
      allowFullScreen
    />
  );
}
