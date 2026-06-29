import { AppShell } from "@/components/app-shell";
import { MarketCard } from "@/components/market-card";
import { marketAssets } from "@/lib/market-data";

export default function MarketPage() {
  return (
    <AppShell>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Public market pages
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">Sector and trend surfaces</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Watch the market through curated public views for sectors, themes, and trend clusters.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Live signal mix</p>
            <p>Momentum, volume, recovery, and treasury trend coverage</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {marketAssets.map((asset) => (
            <MarketCard key={asset.symbol} asset={asset} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
