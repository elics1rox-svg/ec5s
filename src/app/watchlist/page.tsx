import { AppShell } from "@/components/app-shell";
import { MarketCard } from "@/components/market-card";
import { marketAssets } from "@/lib/market-data";

export default function WatchlistPage() {
  const watchlist = marketAssets.slice(0, 3);

  return (
    <AppShell>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Personal watchlists
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-950">Track what matters to you</h2>
          <p className="mt-2 text-sm text-slate-600">
            Your personal view can surface the same filtered markets with a clean list you can customize.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {watchlist.map((asset) => (
            <MarketCard key={asset.symbol} asset={asset} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
