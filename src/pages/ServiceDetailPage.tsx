import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand } from "../components/CtaBand";
import { FaqList } from "../components/FaqList";
import { Gallery } from "../components/Gallery";
import { Img } from "../components/Img";
import { NotFound } from "../components/NotFound";
import { PageHero } from "../components/PageHero";
import { services, type Service } from "../data/siteData";
import { Link } from "../routing/router";
import { useSeo } from "../routing/seo";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) return <NotFound />;
  return <ServiceDetail service={service} />;
}

function ServiceDetail({ service }: { service: Service }) {
  useSeo({
    title: service.title,
    description: service.seoDescription,
    path: `/dich-vu/${service.slug}`,
    image: service.image.name,
  });

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <main>
      <PageHero
        eyebrow="Dịch vụ"
        title={service.title}
        description={service.summary}
        image={service.image}
        crumbs={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: service.title }]}
      >
        <Link to="/bao-gia" className="btn-primary">
          Nhận báo giá dịch vụ này
        </Link>
      </PageHero>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="section-title">Tổng quan dịch vụ</h2>
            <div className="mt-6 grid gap-5">
              {service.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="body-copy">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="section-title mt-14">Phạm vi công việc</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.scope.map((item) => (
                <li key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-surface p-4 text-sm font-medium leading-6 text-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="grid content-start gap-6 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <h2 className="bg-navy px-5 py-4 text-lg font-bold text-white">Thông số kỹ thuật</h2>
              <dl className="divide-y divide-slate-200 bg-white">
                {service.specs.map((spec) => (
                  <div key={spec.label} className="grid gap-1 px-5 py-3 sm:grid-cols-[0.9fr_1.1fr] sm:gap-4">
                    <dt className="text-sm text-muted">{spec.label}</dt>
                    <dd className="text-sm font-semibold text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-lg border border-slate-200 bg-surface p-5">
              <h2 className="card-title">Vật liệu</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {service.materials.map((item) => (
                  <li key={item} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-navy">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="card-title">Bạn nhận được</h2>
              <ul className="mt-3 grid gap-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <p className="eyebrow">Hình ảnh thực tế</p>
          <h2 className="section-title">Sản phẩm của dịch vụ này</h2>
          <Gallery photos={service.gallery} className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">Câu hỏi thường gặp</p>
            <h2 className="section-title">Giải đáp nhanh</h2>
            <div className="mt-8">
              <FaqList faqs={service.faqs} />
            </div>
          </div>
          <div>
            <p className="eyebrow">Dịch vụ khác</p>
            <h2 className="section-title">Có thể bạn cũng cần</h2>
            <div className="mt-8 grid gap-3">
              {others.map((item) => (
                <Link key={item.slug} to={`/dich-vu/${item.slug}`} className="industrial-card group flex items-center gap-4 p-3">
                  <Img photo={item.image} sizes="96px" className="h-20 w-20 shrink-0 rounded-md object-cover" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted">{item.summary}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-blue transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Cần báo giá cho hạng mục của bạn?" />
    </main>
  );
}
