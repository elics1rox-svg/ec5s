import { AppShell } from "@/components/app-shell";
import { MarketCard } from "@/components/market-card";
import { marketAssets } from "@/lib/market-data";

const socialPosts = [
  {
    author: "SierraTrades",
    summary: "NVDA showing strong recovery momentum after the latest chip cycle update.",
    asset: "NVDA",
    sentiment: "Bullish",
    engagement: "2.1k likes · 420 comments",
  },
  {
    author: "MacroRun",
    summary: "Crypto-led risk-on is pushing BTC above the 52-day trendline again.",
    asset: "BTC",
    sentiment: "Bullish",
    engagement: "1.3k likes · 180 comments",
  },
  {
    author: "BondWatch",
    summary: "TLT bounce is meaningful for rate-sensitive allocations into defensive exposure.",
    asset: "TLT",
    sentiment: "Cautious",
    engagement: "870 likes · 69 comments",
  },
];

export default function FeedPage() {
  return (
    <AppShell>
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Public feed
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">Market stories and signal commentary</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                A clean feed for asset posts and public sentiment, designed for market-focused discussion without social clutter.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Fresh signal flow</p>
              <p>Short form posts, asset tags, and engagement metrics.</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {socialPosts.map((post) => (
              <article key={post.author} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{post.author}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Asset: {post.asset}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700">
                    {post.sentiment}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700">{post.summary}</p>
                <p className="mt-4 text-sm text-slate-500">{post.engagement}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Trending assets
            </p>
            <div className="mt-6 grid gap-4">
              {marketAssets.slice(0, 3).map((asset) => (
                <MarketCard key={asset.symbol} asset={asset} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Feed principles
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Short, market-focused posts with asset context</li>
              <li>• Transparent engagement metrics for each story</li>
              <li>• Clean design that avoids noise</li>
            </ul>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
