import type { MarketAsset } from "@/types/market";

export interface FilterRule {
  id: string;
  title: string;
  description: string;
  evaluate: (asset: MarketAsset) => boolean;
}

export const starterFilters: FilterRule[] = [
  {
    id: "recovery-candidates",
    title: "Recovery candidates",
    description: "Assets that recovered 15-20%+ multiple times and are currently pulling back.",
    evaluate: (asset) => asset.recoveryCount >= 2 && asset.changePercent < 0,
  },
  {
    id: "movers-5-10",
    title: "5-10% movers",
    description: "Assets showing meaningful movement while staying above the 52-day moving average.",
    evaluate: (asset) => Math.abs(asset.lookback5m) >= 5 && asset.price > asset.ma52,
  },
  {
    id: "gainers-20",
    title: "20%+ gainers",
    description: "Assets with strong 3-month momentum.",
    evaluate: (asset) => asset.lookback3m >= 20,
  },
  {
    id: "high-volume",
    title: "High volume",
    description: "Assets with unusually active participation.",
    evaluate: (asset) => asset.volume > 25_000_000,
  },
];

export function evaluateAssetAgainstFilters(asset: MarketAsset, filters: FilterRule[]) {
  return filters.filter((rule) => rule.evaluate(asset));
}
