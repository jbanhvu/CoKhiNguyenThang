import { Phone } from "lucide-react";
import { company } from "../data/siteData";

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={company.zaloHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0068FF] text-xs font-extrabold text-white shadow-lg transition hover:-translate-y-0.5"
        aria-label="Nhắn tin Zalo cho Cơ Khí Nguyễn Thắng"
        title="Nhắn Zalo"
      >
        Zalo
      </a>
      <a
        href={company.phoneHref}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-navy shadow-lg transition hover:-translate-y-0.5"
        aria-label={`Gọi hotline ${company.phones[0]}`}
        title="Gọi điện"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
