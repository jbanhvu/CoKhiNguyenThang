import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, logoSrc, navItems, services } from "../data/siteData";
import { Link } from "../routing/router";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pb-24 pt-14 text-navy sm:pb-10">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="" width={44} height={60} loading="lazy" className="h-14 w-auto object-contain" />
            <div>
              <p className="font-extrabold">{company.name}</p>
              <p className="mt-1 text-sm text-slate-600">{company.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-700">
            Thiết kế, gia công CNC, chế tạo máy và lắp đặt cơ khí cho doanh nghiệp sản xuất khu vực phía Nam.
          </p>
          <p className="mt-3 text-sm text-slate-600">Mã số thuế: {company.taxCode}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-navy">Liên kết</h2>
          <nav className="mt-4 grid gap-2" aria-label="Liên kết cuối trang">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-slate-700 transition hover:text-blue">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold text-navy">Dịch vụ</h2>
          <nav className="mt-4 grid gap-2" aria-label="Dịch vụ">
            {services.map((service) => (
              <Link key={service.slug} to={`/dich-vu/${service.slug}`} className="text-sm text-slate-700 transition hover:text-blue">
                {service.title}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold text-navy">Liên hệ</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
              <span className="leading-6">{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
              <span className="grid gap-1">
                {company.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replaceAll(" ", "")}`} className="hover:text-blue">
                    {phone}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
              <a href={company.emailHref} className="break-all hover:text-blue">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
              <a href={company.zaloHref} target="_blank" rel="noopener noreferrer" className="hover:text-blue">
                Zalo: {company.zaloPhone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
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
        <div className="border-t border-slate-200 pt-6 text-sm text-slate-600">
          © {new Date().getFullYear()} {company.name}. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}
