import { ChevronDown } from "lucide-react";
import type { Faq } from "../data/siteData";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {faqs.map((item) => (
        <details key={item.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-navy [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-blue transition group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-base leading-7 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
