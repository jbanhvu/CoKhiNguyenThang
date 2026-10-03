import { workflow } from "../data/siteData";

export function Workflow() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <p className="eyebrow">Quy trình làm việc</p>
        <h2 className="section-title">6 bước từ bản vẽ đến bàn giao</h2>
        <p className="section-copy">
          Mỗi bước đều có người phụ trách và được thông báo cho khách hàng, giúp bạn luôn biết đơn hàng đang ở đâu.
        </p>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-base font-extrabold text-yellow">
                {index + 1}
              </span>
              <div>
                <h3 className="card-title">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
