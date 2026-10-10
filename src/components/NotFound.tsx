import { Link, usePathname } from "../routing/router";
import { useSeo } from "../routing/seo";

export function NotFound() {
  const path = usePathname();
  useSeo({
    title: "Không tìm thấy trang",
    description: "Trang bạn đang tìm không tồn tại hoặc đã được chuyển sang địa chỉ khác.",
    path,
    noindex: true,
  });

  return (
    <main className="bg-white pt-20">
      <section className="container-page flex min-h-[62vh] flex-col items-start justify-center py-20">
        <p className="eyebrow">Lỗi 404</p>
        <h1 className="section-title">Không tìm thấy trang</h1>
        <p className="section-copy">Trang bạn đang mở không tồn tại hoặc đã được chuyển sang địa chỉ khác.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-navy">
            Về trang chủ
          </Link>
          <Link to="/dich-vu" className="btn-base border border-slate-300 text-navy hover:border-navy">
            Xem dịch vụ
          </Link>
        </div>
      </section>
    </main>
  );
}
