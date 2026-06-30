import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { MarketCard } from "@/components/market-card";
import { marketAssets, buildFilterGroups } from "@/lib/market-data";

export default function Home() {
  const featured = marketAssets.slice(0, 3);
  const groups = buildFilterGroups();

  return (
    <AppShell>
      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Market overview
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-950">
            A clean signal surface for market trends and personal tracking
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Follow stocks, cryptos, treasuries, and commodities with filters for recovery setups, momentum movers, large gainers, and high-volume action.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/market" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
              Explore public market pages
            </Link>
            <Link href="/filters" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              Open filter builder
            </Link>
            <Link href="/feed" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              View public feed
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Focus areas
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• Advanced filters for market setups</li>
            <li>• Personal watchlists and portfolio tracking</li>
            <li>• Public sector and trend pages</li>
            <li>• Notification-ready infrastructure</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Featured signals
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950">Trending now</h3>
          </div>
          <Link href="/market" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
            See all assets
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((asset) => (
            <MarketCard key={asset.symbol} asset={asset} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Recovery setups</p>
            <p className="mt-1 text-sm text-slate-600">Monitor assets with repeated rebound behavior.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Momentum movers</p>
            <p className="mt-1 text-sm text-slate-600">Track 5-10% moves that still hold above the 52-day average.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Volume leaders</p>
            <p className="mt-1 text-sm text-slate-600">Surface the highest-participation names in a single view.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Filtered views
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">Built for expansion</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The filter engine is modular so new rules can be introduced without rewriting the core product.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Filter groups
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950">Starter rule pack</h3>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {groups.map((group) => (
              <div key={group.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{group.title}</p>
                <p className="mt-1 text-sm text-slate-600">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
