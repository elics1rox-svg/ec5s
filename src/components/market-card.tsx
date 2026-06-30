import { FilterChipList } from "@/components/filter-chip-list";
import type { MarketAsset } from "@/types/market";

function formatVolume(value: number) {
  return `${(value / 1_000_000).toFixed(1)}M`;
}

export function MarketCard({ asset }: { asset: MarketAsset }) {
  const trendTone = asset.changePercent >= 0 ? "text-emerald-600" : "text-rose-600";

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{asset.sector}</p>
          <h3 className="text-lg font-semibold text-slate-900">{asset.symbol}</h3>
          <p className="text-sm text-slate-600">{asset.name}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
          {asset.type}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-2xl font-semibold text-slate-950">${asset.price.toLocaleString()}</p>
          <p className={`text-sm font-medium ${trendTone}`}>
            {asset.changePercent >= 0 ? "+" : ""}
            {asset.changePercent.toFixed(1)}%
          </p>
        </div>
        <div className="text-right text-sm text-slate-600">
          <p>52D MA: ${asset.ma52.toFixed(1)}</p>
          <p>Vol: {formatVolume(asset.volume)}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs uppercase tracking-wide text-slate-400">3M</p>
          <p className="font-medium text-slate-900">{asset.lookback3m.toFixed(1)}%</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs uppercase tracking-wide text-slate-400">5M</p>
          <p className="font-medium text-slate-900">{asset.lookback5m.toFixed(1)}%</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600">{asset.notes}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <span className="rounded-full bg-slate-50 px-2.5 py-1">👥 {asset.followers.toLocaleString()} followers</span>
        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-emerald-600">👍 {asset.likeCount}</span>
        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-rose-600">👎 {asset.dislikeCount}</span>
      </div>
      <FilterChipList asset={asset} />
    </article>
  );
}
