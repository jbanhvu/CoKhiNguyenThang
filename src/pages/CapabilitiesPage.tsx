import { CheckCircle2, ShieldCheck } from "lucide-react";
import { CtaBand } from "../components/CtaBand";
import { Img } from "../components/Img";
import { PageHero } from "../components/PageHero";
import { StatsBar } from "../components/StatsBar";
import { capabilityGroups, machineRows, pageImages, photo, qualityTools } from "../data/siteData";
import { useSeo } from "../routing/seo";

export function CapabilitiesPage() {
  useSeo({
    title: "Năng lực máy móc và gia công",
    description:
      "Danh sách máy phay CNC, tiện CNC, máy cắt CNC, máy hàn và thiết bị đo kiểm tại xưởng Cơ Khí Nguyễn Thắng. Dung sai đến ±0,01 mm.",
    path: "/nang-luc",
    image: pageImages.capabilities.name,
  });

  return (
    <main>
      <PageHero
        eyebrow="Năng lực"
        title="Máy móc, con người và quy trình kiểm soát chất lượng"
        description="Hệ thống máy CNC kết hợp máy gia công cơ truyền thống cho phép xưởng xử lý linh hoạt từ chi tiết nhỏ chính xác cao đến kết cấu lớn."
        image={pageImages.capabilities}
        crumbs={[{ label: "Năng lực" }]}
      />

      <section className="bg-white pt-16 sm:pt-20">
        <div className="container-page">
          <StatsBar />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <p className="eyebrow">Năng lực gia công</p>
          <h2 className="section-title">Ba nhóm năng lực chính</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {capabilityGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="rounded-lg border border-slate-200 bg-surface p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-yellow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="card-title mt-5">{group.title}</h3>
                  <ul className="mt-4 grid gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <p className="eyebrow">Thiết bị</p>
          <h2 className="section-title">Bảng năng lực máy móc</h2>
          <p className="section-copy">Máy móc được bảo trì định kỳ và hiệu chuẩn độ chính xác để đảm bảo chất lượng ổn định giữa các lô hàng.</p>
          <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead className="bg-navy text-sm text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-bold">
                      Thiết bị
                    </th>
                    <th scope="col" className="px-5 py-4 text-center font-bold">
                      Số lượng
                    </th>
                    <th scope="col" className="px-5 py-4 font-bold">
                      Khả năng gia công
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {machineRows.map(([machine, amount, ability]) => (
                    <tr key={machine} className="even:bg-surface">
                      <td className="px-5 py-4 font-semibold text-ink">{machine}</td>
                      <td className="px-5 py-4 text-center font-bold text-navy">{amount}</td>
                      <td className="px-5 py-4 text-sm text-slate-700">{ability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Kiểm soát chất lượng</p>
            <h2 className="section-title">Đo kiểm ở mọi công đoạn</h2>
            <p className="section-copy">
              Chi tiết được kiểm tra sau khi gá đặt, sau gia công thô và trước khi tháo khỏi máy. Lô hàng chỉ được đóng gói khi đạt 100% kích thước quan trọng trên bản vẽ.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {qualityTools.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Img photo={photo("tien-chi-tiet-tron-xoay", "Kiểm tra chi tiết tiện trên máy")} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4] w-full rounded-lg object-cover" />
            <Img photo={photo("truc-bac-inox", "Lô trục inox đã kiểm tra kích thước")} sizes="(min-width: 1024px) 25vw, 50vw" className="mt-10 aspect-[3/4] w-full rounded-lg object-cover" />
          </div>
        </div>
      </section>

      <CtaBand title="Không chắc chi tiết có gia công được không?" text="Gửi bản vẽ để kỹ sư kiểm tra khả năng gia công và tư vấn phương án phù hợp, hoàn toàn miễn phí." />
    </main>
  );
}
