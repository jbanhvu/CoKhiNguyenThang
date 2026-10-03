import { ArrowRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { CtaBand } from "../components/CtaBand";
import { Img } from "../components/Img";
import { StatsBar } from "../components/StatsBar";
import { company, industries, pageImages, photo, projects, services, whyUs } from "../data/siteData";
import { Link } from "../routing/router";
import { useSeo } from "../routing/seo";

const featuredProjects = projects.slice(0, 3);

const heroSteps = ["Tư vấn", "Khảo sát", "Thiết kế", "Gia công", "Nghiệm thu lắp đặt", "Đưa vào sử dụng tại nhà máy"];

export function HomePage() {
  useSeo({
    title: "Cơ Khí Nguyễn Thắng | Gia công CNC, chế tạo máy, lắp đặt cơ khí",
    description:
      "Gia công cơ khí chính xác CNC dung sai ±0,01 mm, thiết kế kỹ thuật, chế tạo và lắp đặt máy cho doanh nghiệp. Báo giá trong 24 giờ. Hotline 0902 722 077.",
    path: "/",
  });

  return (
    <main>
      <section className="relative overflow-hidden bg-navy pb-24 pt-20 text-white">
        <Img photo={pageImages.home} priority sizes="100vw" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,43,91,0.95)_0%,rgba(11,43,91,0.8)_50%,rgba(11,43,91,0.35)_100%)]" />

        <div className="container-page relative flex min-h-[560px] items-center py-16 lg:min-h-[620px]">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <p className="mb-4 inline-block border-l-4 border-yellow pl-3 text-lg font-extrabold uppercase tracking-[0.14em] text-[#F6C768] [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] sm:text-2xl">
              {company.shortName}
            </p>
            <h1 className="hero-title">Giải pháp cơ khí chính xác nhất – từ đầu đến cuối</h1>
            <ol className="mt-5 flex max-w-2xl flex-wrap items-center gap-x-2 gap-y-2 text-base font-semibold text-white/90 sm:text-lg">
              {heroSteps.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight className="h-4 w-4 shrink-0 text-yellow" aria-hidden />}
                  {step}
                </li>
              ))}
            </ol>
            <ul className="mt-6 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
              {["Dung sai đến ±0,01 mm", "Gia công thép, inox, nhôm, nhựa kỹ thuật", "Ưu tiên chi tiết thay thế khi máy dừng", "Giao hàng, lắp đặt tận nhà máy"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-yellow" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/bao-gia" className="btn-primary">
                Nhận báo giá <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={company.phoneHref} className="btn-outline">
                <Phone className="h-4 w-4" /> Tư vấn trực tiếp miễn phí: {company.phones[0]}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsBar variant="overlap" />

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Dịch vụ</p>
              <h2 className="section-title">Một đầu mối cho mọi hạng mục cơ khí</h2>
              <p className="section-copy">Không cần làm việc với nhiều xưởng: chúng tôi nhận từ bản vẽ, gia công đến lắp đặt hoàn chỉnh.</p>
            </div>
            <Link to="/dich-vu" className="inline-flex shrink-0 items-center gap-2 font-bold text-blue hover:text-navy">
              Tất cả dịch vụ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/dich-vu/${service.slug}`}
                  className={`industrial-card group flex flex-col overflow-hidden ${index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
                >
                  <div className={`overflow-hidden bg-slate-200 ${index === 0 ? "aspect-[4/3] lg:aspect-auto lg:flex-1" : "aspect-[16/9]"}`}>
                    <Img photo={service.image} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy text-yellow">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="card-title">{service.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted">{service.summary}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <Img photo={photo("tien-mat-bich", "Tiện mặt bích tại xưởng")} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4] w-full rounded-lg object-cover" />
            <Img
              photo={photo("hop-so-cong-nghiep", "Phục hồi hộp số công nghiệp")}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="mt-10 aspect-[3/4] w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Vì sao chọn chúng tôi</p>
            <h2 className="section-title">Xưởng kỹ thuật, không phải trung gian</h2>
            <p className="section-copy">
              Người tư vấn cho bạn cũng là người đứng máy. Nhờ vậy yêu cầu được hiểu đúng ngay từ đầu, báo giá sát thực tế và tiến độ được giữ đúng.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {whyUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <Icon className="h-7 w-7 text-blue" />
                    <h3 className="card-title mt-3">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <Link to="/gioi-thieu" className="btn-navy mt-8">
              Tìm hiểu về chúng tôi
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Dự án tiêu biểu</p>
              <h2 className="section-title">Sản phẩm thực tế từ xưởng</h2>
            </div>
            <Link to="/du-an" className="inline-flex shrink-0 items-center gap-2 font-bold text-blue hover:text-navy">
              Xem tất cả dự án <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link key={project.slug} to={`/du-an/${project.slug}`} className="industrial-card group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                  <Img photo={project.image} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">{project.category}</p>
                  <h3 className="card-title mt-2">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page text-center">
          <p className="eyebrow">Ngành phục vụ</p>
          <h2 className="section-title mx-auto max-w-2xl">Đồng hành cùng nhà máy trong nhiều lĩnh vực</h2>
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {industries.map((item) => (
              <li key={item} className="rounded-full border border-slate-200 bg-surface px-5 py-2.5 text-sm font-semibold text-navy">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
