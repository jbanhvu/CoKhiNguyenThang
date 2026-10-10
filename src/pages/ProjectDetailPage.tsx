import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { CtaBand } from "../components/CtaBand";
import { Gallery } from "../components/Gallery";
import { Img } from "../components/Img";
import { NotFound } from "../components/NotFound";
import { projects, type Project } from "../data/siteData";
import { Link } from "../routing/router";
import { useSeo } from "../routing/seo";

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  return <ProjectDetail project={project} />;
}

function ProjectDetail({ project }: { project: Project }) {
  useSeo({
    title: project.title,
    description: `${project.summary} Vật liệu: ${project.material}. Dung sai: ${project.tolerance}.`,
    path: `/du-an/${project.slug}`,
    image: project.image.name,
  });

  const related = projects.filter((item) => item.slug !== project.slug && item.category === project.category).concat(projects.filter((item) => item.category !== project.category)).slice(0, 3);

  const facts = [
    { label: "Khách hàng", value: project.client },
    { label: "Vật liệu", value: project.material },
    { label: "Số lượng", value: project.quantity },
    { label: "Dung sai", value: project.tolerance },
    { label: "Thời gian thực hiện", value: project.duration },
  ];

  return (
    <main className="bg-white pt-20">
      <section className="container-page py-10 sm:py-14">
        <nav aria-label="Đường dẫn" className="text-sm text-muted">
          <Link to="/" className="hover:text-navy">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link to="/du-an" className="hover:text-navy">
            Sản phẩm
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy" aria-current="page">
            {project.title}
          </span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Img photo={project.image} priority sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[4/3] w-full rounded-lg object-cover" />
            {project.gallery.length > 1 && (
              <Gallery photos={project.gallery} className="mt-4 grid grid-cols-4 gap-3" />
            )}
          </div>

          <div>
            <p className="eyebrow">{project.category}</p>
            <h1 className="section-title sm:text-[2.5rem]">{project.title}</h1>
            <p className="section-copy">{project.summary}</p>

            <dl className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
              {facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 px-5 py-3 sm:grid-cols-[0.8fr_1.2fr] sm:gap-4">
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="text-sm font-semibold text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/bao-gia" className="btn-primary">
                Gửi yêu cầu tương tự
              </Link>
              <Link to="/du-an" className="btn-navy">
                <ArrowLeft className="h-4 w-4" /> Tất cả sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="eyebrow">Bài toán</p>
            <p className="body-copy">{project.challenge}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="eyebrow">Giải pháp</p>
            <p className="body-copy">{project.solution}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 text-navy">
            <p className="eyebrow-light">Kết quả</p>
            <ul className="grid gap-3">
              {project.results.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="section-title">Sản phẩm liên quan</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} to={`/du-an/${item.slug}`} className="industrial-card group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                  <Img photo={item.image} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">{item.category}</p>
                  <h3 className="card-title mt-2">{item.title}</h3>
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
