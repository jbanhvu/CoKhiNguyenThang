import { useState } from "react";
import { CtaBand } from "../components/CtaBand";
import { Img } from "../components/Img";
import { PageHero } from "../components/PageHero";
import { pageImages, projectCategories, projects } from "../data/siteData";
import { Link } from "../routing/router";
import { useSeo } from "../routing/seo";

const ALL = "Tất cả";

export function ProjectsPage() {
  const [category, setCategory] = useState(ALL);
  const visible = category === ALL ? projects : projects.filter((item) => item.category === category);

  useSeo({
    title: "Dự án và sản phẩm đã thực hiện",
    description:
      "Hình ảnh thực tế các dự án gia công bánh răng, trục, mặt bích inox, con lăn nhựa, đồ gá và phục hồi hộp số cho nhà máy khu vực phía Nam.",
    path: "/du-an",
    image: pageImages.projects.name,
  });

  return (
    <main>
      <PageHero
        eyebrow="Dự án"
        title="Dự án và sản phẩm đã thực hiện"
        description="Mỗi dự án là một bài toán thực tế của nhà máy: từ chi tiết thay thế gấp đến cụm máy chế tạo mới. Toàn bộ hình ảnh được chụp tại xưởng."
        image={pageImages.projects}
        crumbs={[{ label: "Dự án" }]}
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Lọc theo danh mục">
            {[ALL, ...projectCategories].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`min-h-10 rounded-full px-4 text-sm font-semibold transition ${
                  category === item ? "border border-blue bg-white text-blue" : "border border-slate-300 bg-white text-navy hover:border-navy"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <Link key={project.slug} to={`/du-an/${project.slug}`} className="industrial-card group flex flex-col overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                  <Img photo={project.image} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">{project.category}</p>
                  <h2 className="card-title mt-2">{project.title}</h2>
                  <p className="mb-4 mt-2 text-sm leading-6 text-muted">{project.summary}</p>
                  <dl className="mt-auto grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-sm">
                    <div>
                      <dt className="text-muted">Vật liệu</dt>
                      <dd className="font-semibold text-ink">{project.material}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Thời gian</dt>
                      <dd className="font-semibold text-ink">{project.duration}</dd>
                    </div>
                  </dl>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Bạn có chi tiết tương tự cần gia công?" />
    </main>
  );
}
