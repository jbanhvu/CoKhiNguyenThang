import { ArrowRight, Phone } from "lucide-react";
import { company } from "../data/siteData";
import { Link } from "../routing/router";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Bạn có bản vẽ cần gia công?",
  text = "Gửi bản vẽ hoặc mô tả yêu cầu, kỹ sư của chúng tôi sẽ phản hồi báo giá trong 24 giờ làm việc.",
}: CtaBandProps) {
  return (
    <section className="bg-navy py-14 text-white sm:py-16">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 text-base leading-7 text-white/80">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link to="/bao-gia" className="btn-primary">
            Gửi yêu cầu báo giá <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={company.phoneHref} className="btn-outline">
            <Phone className="h-4 w-4" /> {company.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
