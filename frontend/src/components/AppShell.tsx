import { Link, NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/workers', label: 'Workers' },
  { to: '/sites', label: 'Sites' },
  { to: '/finance', label: 'Finance' },
]

export const AppShell = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link className="text-lg font-semibold text-slate-900" to="/">
            Construction Fund Manager
          </Link>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
            Initial Setup
          </span>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 md:grid-cols-[220px_1fr]">
        <aside className="rounded-lg border border-slate-200 bg-white p-4">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
