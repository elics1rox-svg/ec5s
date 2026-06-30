import { evaluateAssetAgainstFilters, starterFilters } from "@/lib/filter-engine";
import type { MarketAsset } from "@/types/market";

export function FilterChipList({ asset }: { asset: MarketAsset }) {
  const matchedFilters = evaluateAssetAgainstFilters(asset, starterFilters);

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {matchedFilters.map((filter) => (
        <span
          key={filter.id}
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
        >
          {filter.title}
        </span>
      ))}
    </div>
  );
}
