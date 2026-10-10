import { Clock3, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { MapEmbed, mapLink } from "../components/MapEmbed";
import { PageHero } from "../components/PageHero";
import { company, pageImages } from "../data/siteData";
import { Link } from "../routing/router";
import { useSeo } from "../routing/seo";

const channels = [
  { label: "Hotline", value: company.phones.join(" – "), note: "Gọi trực tiếp kỹ thuật", icon: Phone, href: company.phoneHref },
  { label: "Zalo", value: company.zaloPhone, note: "Gửi ảnh bản vẽ nhanh nhất", icon: MessageCircle, href: company.zaloHref, external: true },
  { label: "Email", value: company.email, note: "Gửi file bản vẽ dung lượng lớn", icon: Mail, href: company.emailHref },
];

export function ContactPage() {
  useSeo({
    title: "Liên hệ và đường đến xưởng",
    description: `Liên hệ Cơ Khí Nguyễn Thắng qua hotline ${company.phones[0]}, Zalo hoặc email. Địa chỉ xưởng: ${company.addressShort}.`,
    path: "/lien-he",
    image: pageImages.contact.name,
  });

  return (
    <main>
      <PageHero
        eyebrow="Liên hệ"
        title="Liên hệ với Cơ Khí Nguyễn Thắng"
        description="Gọi điện, nhắn Zalo hoặc ghé xưởng trực tiếp. Chúng tôi luôn sẵn sàng xem mẫu và tư vấn tại chỗ."
        image={pageImages.contact}
        crumbs={[{ label: "Liên hệ" }]}
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {channels.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="industrial-card flex gap-4 p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy text-yellow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{item.label}</span>
                    <span className="mt-1 block break-words font-bold text-navy">{item.value}</span>
                    <span className="mt-1 block text-sm text-muted">{item.note}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid content-start gap-6 rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
              <div>
                <h2 className="card-title flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue" /> Địa chỉ xưởng
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-700">{company.address}</p>
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn-navy mt-5">
                  <Navigation className="h-4 w-4" /> Chỉ đường trên Google Maps
                </a>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h2 className="card-title flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-blue" /> Giờ làm việc
                </h2>
                <dl className="mt-3 grid gap-2">
                  {company.hours.map((item) => (
                    <div key={item.days} className="flex justify-between gap-4 text-base">
                      <dt className="text-slate-700">{item.days}</dt>
                      <dd className="text-right font-semibold text-navy">{item.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h2 className="card-title">Cần báo giá?</h2>
                <p className="mt-2 text-sm leading-6 text-muted">Gửi bản vẽ qua form để kỹ sư có đủ thông tin báo giá chính xác.</p>
                <Link to="/bao-gia" className="btn-primary mt-4">
                  Gửi yêu cầu báo giá
                </Link>
              </div>
            </div>
            <div className="min-h-[420px] overflow-hidden rounded-lg border border-slate-200 bg-white p-2">
              <MapEmbed className="min-h-[420px]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
