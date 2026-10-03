import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { FaqList } from "../components/FaqList";
import { PageHero } from "../components/PageHero";
import { QuotationForm } from "../components/QuotationForm";
import { company, pageImages, quoteChecklist, quoteFaqs, quoteSteps } from "../data/siteData";
import { useSeo } from "../routing/seo";

export function QuotePage() {
  useSeo({
    title: "Gửi bản vẽ, nhận báo giá gia công trong 24 giờ",
    description:
      "Gửi bản vẽ PDF, DWG, DXF, STEP để nhận báo giá gia công CNC, chế tạo máy miễn phí trong 24 giờ làm việc. Bản vẽ được bảo mật.",
    path: "/bao-gia",
    image: pageImages.quote.name,
  });

  return (
    <main>
      <PageHero
        eyebrow="Báo giá"
        title="Gửi bản vẽ, nhận báo giá trong 24 giờ"
        description="Miễn phí, không ràng buộc. Kỹ sư của chúng tôi sẽ gọi lại trong vòng 2 giờ làm việc để làm rõ yêu cầu."
        image={pageImages.quote}
        crumbs={[{ label: "Báo giá" }]}
      />

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <QuotationForm />

          <aside className="grid gap-6">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="card-title">Để báo giá nhanh và chính xác</h2>
              <p className="mt-2 text-sm leading-6 text-muted">Bạn nên chuẩn bị:</p>
              <ul className="mt-4 grid gap-3">
                {quoteChecklist.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-navy p-6 text-white">
              <h2 className="text-lg font-bold">Muốn trao đổi trực tiếp?</h2>
              <p className="mt-2 text-sm leading-6 text-white/80">Gửi ảnh chụp bản vẽ qua Zalo là cách nhanh nhất.</p>
              <div className="mt-5 grid gap-3">
                <a href={company.zaloHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="h-4 w-4" /> Nhắn Zalo {company.phones[0]}
                </a>
                <a href={company.phoneHref} className="btn-outline">
                  <Phone className="h-4 w-4" /> Gọi {company.phones[0]}
                </a>
                <a href={company.emailHref} className="btn-outline">
                  <Mail className="h-4 w-4" /> Gửi email
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <p className="eyebrow">Quy trình báo giá</p>
          <h2 className="section-title">Ba bước đơn giản</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {quoteSteps.map((step, index) => (
              <li key={step.title} className="relative rounded-lg border border-slate-200 bg-surface p-6">
                <span className="text-4xl font-extrabold text-yellow">{index + 1}</span>
                <h3 className="card-title mt-3">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page max-w-4xl">
          <p className="eyebrow">Câu hỏi thường gặp</p>
          <h2 className="section-title">Về báo giá và thanh toán</h2>
          <div className="mt-8">
            <FaqList faqs={quoteFaqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
