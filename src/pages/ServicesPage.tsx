import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand } from "../components/CtaBand";
import { Img } from "../components/Img";
import { PageHero } from "../components/PageHero";
import { Workflow } from "../components/Workflow";
import { allMaterials, pageImages, services } from "../data/siteData";
import { Link } from "../routing/router";
import { useSeo } from "../routing/seo";

export function ServicesPage() {
  useSeo({
    title: "Dịch vụ gia công CNC, thiết kế, chế tạo và lắp đặt máy",
    description:
      "5 nhóm dịch vụ cơ khí: gia công CNC chính xác, thiết kế kỹ thuật, chế tạo và lắp đặt máy, thi công kết cấu công trình, đào tạo CNC thực chiến.",
    path: "/dich-vu",
    image: pageImages.services.name,
  });

  return (
    <main>
      <PageHero
        eyebrow="Dịch vụ"
        title="Dịch vụ cơ khí trọn gói cho nhà máy"
        description="Năm nhóm dịch vụ bổ trợ nhau, giúp bạn giao trọn một hạng mục cho một đầu mối duy nhất: từ bản vẽ đến lắp đặt và chạy thử."
        image={pageImages.services}
        crumbs={[{ label: "Dịch vụ" }]}
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-16 lg:gap-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.slug} className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
                <Link
                  to={`/dich-vu/${service.slug}`}
                  className={`group block overflow-hidden rounded-lg bg-slate-200 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Img photo={service.image} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105" />
                </Link>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-yellow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="section-title mt-5">{service.title}</h2>
                  <p className="section-copy">{service.summary}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.scope.slice(0, 4).map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/dich-vu/${service.slug}`} className="btn-navy mt-8">
                    Xem chi tiết dịch vụ <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Workflow />

      <section className="section-pad bg-white">
        <div className="container-page">
          <p className="eyebrow">Vật liệu</p>
          <h2 className="section-title">Vật liệu thường gia công</h2>
          <p className="section-copy">Xưởng chủ động nguồn phôi phổ biến và có thể đặt vật liệu đặc biệt theo yêu cầu, kèm chứng chỉ vật liệu (CO, CQ) khi cần.</p>
          <div className="mt-10 overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-left">
              <tbody className="divide-y divide-slate-200">
                {allMaterials.map((row) => (
                  <tr key={row.group} className="bg-white">
                    <th scope="row" className="w-40 bg-white px-5 py-4 text-sm font-bold text-navy sm:w-56">
                      {row.group}
                    </th>
                    <td className="px-5 py-4 text-sm leading-6 text-slate-700">{row.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
