import Link from "next/link";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/market", label: "Market" },
  { href: "/filters", label: "Filters" },
  { href: "/watchlist", label: "Watchlist" },
  { href: "/portfolio", label: "Portfolio" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Asset Tracker
            </p>
            <h1 className="text-xl font-semibold text-slate-950">Social market intelligence</h1>
          </div>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:px-8">
        {children}
      </main>
    </div>
  );
}
