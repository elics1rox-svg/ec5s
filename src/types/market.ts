export type MarketAssetType = "stock" | "crypto" | "commodity" | "treasury";

export interface MarketAsset {
  symbol: string;
  name: string;
  type: MarketAssetType;
  sector: string;
  price: number;
  changePercent: number;
  volume: number;
  ma52: number;
  trendScore: number;
  lookback3m: number;
  lookback5m: number;
  recoveryCount: number;
  followers: number;
  likeCount: number;
  dislikeCount: number;
  notes: string;
}

export interface FilterGroup {
  id: string;
  title: string;
  description: string;
  assets: MarketAsset[];
}
