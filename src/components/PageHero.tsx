import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Photo } from "../data/siteData";
import { Link } from "../routing/router";
import { Img } from "./Img";

type Crumb = { label: string; to?: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: Photo;
  /** Đường dẫn phía trên tiêu đề, không tính "Trang chủ". */
  crumbs?: Crumb[];
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, image, crumbs = [], children }: PageHeroProps) {
  const trail: Crumb[] = [{ label: "Trang chủ", to: "/" }, ...crumbs];

  return (
    <section className="relative overflow-hidden bg-navy pt-20 text-white">
      <Img photo={image} priority sizes="100vw" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,43,91,0.95)_0%,rgba(11,43,91,0.82)_50%,rgba(11,43,91,0.45)_100%)]" />
      <div className="container-page relative py-14 sm:py-20 lg:py-24">
        <nav aria-label="Đường dẫn" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-white/70">
            {trail.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-1">
                {index > 0 && <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow-light">{eyebrow}</p>
        <h1 className="hero-title max-w-4xl">{title}</h1>
        <p className="hero-copy">{description}</p>
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
