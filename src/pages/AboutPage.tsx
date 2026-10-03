import { CtaBand } from "../components/CtaBand";
import { Gallery } from "../components/Gallery";
import { Img } from "../components/Img";
import { PageHero } from "../components/PageHero";
import { StatsBar } from "../components/StatsBar";
import { aboutGallery, aboutStory, company, industries, pageImages, photo, values } from "../data/siteData";
import { useSeo } from "../routing/seo";

export function AboutPage() {
  useSeo({
    title: "Giới thiệu công ty",
    description:
      "Công ty TNHH Cơ Khí Nguyễn Thắng: xưởng gia công CNC, chế tạo và lắp đặt máy phục vụ doanh nghiệp tại TP.HCM, Đồng Nai, Bình Dương, Bà Rịa – Vũng Tàu.",
    path: "/gioi-thieu",
    image: pageImages.about.name,
  });

  return (
    <main>
      <PageHero
        eyebrow="Giới thiệu"
        title="Xưởng cơ khí do người thợ lành nghề xây dựng"
        description="Hơn 15 năm gắn bó với nghề, Cơ Khí Nguyễn Thắng lớn lên cùng những bài toán sản xuất thực tế của các nhà máy phía Nam."
        image={pageImages.about}
        crumbs={[{ label: "Giới thiệu" }]}
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="eyebrow">Câu chuyện của chúng tôi</p>
            <h2 className="section-title">Người thật – việc thật</h2>
            <div className="mt-6 grid gap-5">
              {aboutStory.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="body-copy">
                  {paragraph}
                </p>
              ))}
              <p className="body-copy font-semibold italic text-navy">Trân trọng.</p>
            </div>
          </div>
          <figure>
            <Img
              photo={photo("may-phay-cnc-dang-gia-cong", "Máy phay CNC tại xưởng Cơ Khí Nguyễn Thắng")}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-industrial"
            />
            <figcaption className="mt-3 text-sm text-muted">Máy phay CNC đang gia công tại xưởng.</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="container-page">
          <StatsBar />
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg bg-navy p-8 text-white">
              <p className="eyebrow-light">Sứ mệnh</p>
              <p className="text-xl font-bold leading-8">
                Giúp nhà máy Việt Nam chủ động nguồn chi tiết và thiết bị cơ khí, giảm phụ thuộc vào phụ tùng nhập khẩu và rút ngắn thời gian dừng máy.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-8">
              <p className="eyebrow">Tầm nhìn</p>
              <p className="text-xl font-bold leading-8 text-navy">
                Trở thành xưởng gia công chính xác đáng tin cậy hàng đầu khu vực phía Nam, được nhà máy tìm đến đầu tiên khi cần một chi tiết khó.
              </p>
            </div>
          </div>

          <h2 className="section-title mt-16">Giá trị cốt lõi</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <Icon className="h-8 w-8 text-blue" />
                  <h3 className="card-title mt-4">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <p className="eyebrow">Hình ảnh xưởng</p>
          <h2 className="section-title">Nhà xưởng và sản phẩm thực tế</h2>
          <p className="section-copy">Toàn bộ hình ảnh được chụp tại xưởng. Bấm vào ảnh để xem kích thước lớn.</p>
          <Gallery photos={aboutGallery} className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" />
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Hồ sơ doanh nghiệp</p>
            <h2 className="section-title">Thông tin pháp lý</h2>
            <p className="section-copy">Doanh nghiệp đăng ký hoạt động hợp pháp, xuất hóa đơn VAT đầy đủ cho mọi đơn hàng.</p>
            <h3 className="card-title mt-10">Ngành khách hàng đang phục vụ</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {industries.map((item) => (
                <li key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
            <Info label="Tên doanh nghiệp" value={company.name} wide />
            <Info label="Người đại diện" value={`${company.representative}, ${company.position}`} />
            <Info label="Mã số thuế" value={company.taxCode} />
            <Info label="Hotline" value={company.phones.join(" – ")} />
            <Info label="Email" value={company.email} />
            <Info label="Địa chỉ xưởng" value={company.address} wide />
          </dl>
        </div>
      </section>

      <CtaBand title="Cùng giải bài toán cơ khí của nhà máy bạn" text="Hẹn lịch tham quan xưởng hoặc gửi yêu cầu để kỹ sư của chúng tôi tư vấn phương án." />
    </main>
  );
}

function Info({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`bg-white p-5 ${wide ? "sm:col-span-2" : ""}`}>
      <dt className="text-sm font-semibold text-blue">{label}</dt>
      <dd className="mt-1 break-words text-base font-semibold leading-7 text-ink">{value}</dd>
    </div>
  );
}
