import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, logoSrc, navItems, services } from "../data/siteData";
import { Link } from "../routing/router";

export function Footer() {
  return (
    <footer className="bg-navy pb-24 pt-14 text-white sm:pb-10">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="" width={44} height={60} loading="lazy" className="h-14 w-auto rounded-md bg-white p-1" />
            <div>
              <p className="font-extrabold">{company.name}</p>
              <p className="mt-1 text-sm text-white/70">{company.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Thiết kế, gia công CNC, chế tạo máy và lắp đặt cơ khí cho doanh nghiệp sản xuất khu vực phía Nam.
          </p>
          <p className="mt-3 text-sm text-white/60">Mã số thuế: {company.taxCode}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-yellow">Liên kết</h2>
          <nav className="mt-4 grid gap-2" aria-label="Liên kết cuối trang">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-white/75 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold text-yellow">Dịch vụ</h2>
          <nav className="mt-4 grid gap-2" aria-label="Dịch vụ">
            {services.map((service) => (
              <Link key={service.slug} to={`/dich-vu/${service.slug}`} className="text-sm text-white/75 transition hover:text-white">
                {service.title}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold text-yellow">Liên hệ</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow" />
              <span className="leading-6">{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-yellow" />
              <span className="grid gap-1">
                {company.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replaceAll(" ", "")}`} className="hover:text-white">
                    {phone}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-yellow" />
              <a href={company.emailHref} className="break-all hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow" />
              <a href={company.zaloHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Zalo: {company.zaloPhone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-yellow" />
              <span className="grid gap-1">
                {company.hours.map((item) => (
                  <span key={item.days}>
                    {item.days}: {item.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page mt-12">
        <div className="border-t border-white/10 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} {company.name}. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}
