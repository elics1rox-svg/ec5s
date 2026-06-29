import { AppShell } from "@/components/app-shell";
import { MarketCard } from "@/components/market-card";
import { buildFilterGroups } from "@/lib/market-data";

export default function FiltersPage() {
  const groups = buildFilterGroups();

  return (
    <AppShell>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Extensible filters
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-950">Create and reuse market filters</h2>
          <p className="mt-2 text-sm text-slate-600">
            The filter engine is structured so you can add new rules over time: recovery setups, volume spikes, sector rotations, and more.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {groups.map((group) => (
            <div key={group.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{group.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{group.description}</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700">
                  {group.assets.length} assets
                </span>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.assets.map((asset) => (
                  <MarketCard key={`${group.id}-${asset.symbol}`} asset={asset} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
