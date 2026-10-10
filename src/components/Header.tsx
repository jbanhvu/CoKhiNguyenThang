import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, logoSrc, navItems } from "../data/siteData";
import { Link, usePathname } from "../routing/router";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const isActive = (href: string) => (href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`));
  const homeAnchors: Record<string, string> = {
    "/": "#home",
    "/gioi-thieu": "#about",
    "/dich-vu": "#services",
    "/nang-luc": "#capabilities",
    "/du-an": "#projects",
    "/bao-gia": "#rfq",
    "/lien-he": "#contact",
  };
  const navTarget = (href: string) => (path === "/" ? homeAnchors[href] ?? href : href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-md" : "border-b border-slate-100"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${company.shortName} – Trang chủ`}>
          <img src={logoSrc} alt="" width={44} height={60} className="h-14 w-auto shrink-0 object-contain" />
          <span className="min-w-0">
            <span className="block text-base font-extrabold leading-tight text-navy sm:text-lg">{company.shortName}</span>
            <span className="hidden text-xs font-medium text-muted sm:block">{company.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu chính">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={navTarget(item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-2 text-sm font-semibold transition hover:text-blue ${
                isActive(item.href) ? "text-blue after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-yellow" : "text-slate-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a href={company.phoneHref} className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-blue">
            <Phone className="h-4 w-4 text-blue" />
            {company.phones[0]}
          </a>
          <Link to="/bao-gia" className="btn-primary px-4">
            Nhận báo giá
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-200 text-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Đóng menu" : "Mở menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-page grid gap-1 py-4" aria-label="Menu di động">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={navTarget(item.href)}
                onClick={() => setOpen(false)}
                className={`min-h-11 rounded-md px-3 py-3 text-base font-semibold hover:bg-surface ${
                  isActive(item.href) ? "bg-surface text-blue" : "text-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <a href={company.phoneHref} className="btn-navy">
                <Phone className="h-4 w-4" /> Tư vấn trực tiếp miễn phí: {company.phones[0]}
              </a>
              <Link to="/bao-gia" className="btn-primary">
                Nhận báo giá
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
