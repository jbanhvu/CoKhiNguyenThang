import { stats } from "../data/siteData";

type StatsBarProps = {
  /** "overlap": nổi lên trên mép dưới của hero; "plain": khối độc lập. */
  variant?: "overlap" | "plain";
};

export function StatsBar({ variant = "plain" }: StatsBarProps) {
  return (
    <div className={variant === "overlap" ? "container-page relative z-10 -mt-12" : ""}>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 shadow-industrial lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col-reverse bg-white p-5 text-center sm:p-6">
            <dt className="mt-1 text-sm leading-5 text-muted">{item.label}</dt>
            <dd className="text-2xl font-extrabold text-navy sm:text-3xl">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
