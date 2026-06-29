import { AppShell } from "@/components/app-shell";
import { marketAssets } from "@/lib/market-data";

const holdings = [
  { symbol: "NVDA", shares: 18, cost: 108.2, current: 124.8 },
  { symbol: "BTC", shares: 0.35, cost: 62000, current: 67840 },
  { symbol: "TLT", shares: 42, cost: 90.1, current: 95.3 },
];

export default function PortfolioPage() {
  return (
    <AppShell>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Portfolio tracking
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">Buy, sell, and review history</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              The portfolio experience is designed to support transaction history and gain/loss calculations as you scale the product.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Portfolio value</p>
            <p className="text-2xl font-semibold text-slate-950">$142,820</p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left">
            <thead className="bg-slate-50 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              <tr>
                <th className="px-4 py-3">Asset</th>
                <th className="px-4 py-3">Shares</th>
                <th className="px-4 py-3">Cost basis</th>
                <th className="px-4 py-3">Current</th>
                <th className="px-4 py-3">PnL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {holdings.map((holding) => {
                const pnl = ((holding.current - holding.cost) * holding.shares);
                const pnlLabel = pnl >= 0 ? "+" : "";
                const marker = pnl >= 0 ? "text-emerald-600" : "text-rose-600";
                const asset = marketAssets.find((item) => item.symbol === holding.symbol);

                return (
                  <tr key={holding.symbol}>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-slate-900">{holding.symbol}</div>
                      <div className="text-sm text-slate-600">{asset?.name ?? "Tracked asset"}</div>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{holding.shares}</td>
                    <td className="px-4 py-3 text-slate-700">${holding.cost.toLocaleString()}</td>
                    <td className="px-4 py-3 text-slate-700">${holding.current.toLocaleString()}</td>
                    <td className={`px-4 py-3 font-semibold ${marker}`}>
                      {pnlLabel}${pnl.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
