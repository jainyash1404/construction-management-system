import { createBrowserRouter } from 'react-router-dom'

import { AppShell } from '../components/AppShell'
import { DashboardPage } from '../pages/DashboardPage'
import { FinancePage } from '../pages/FinancePage'
import { SitesPage } from '../pages/SitesPage'
import { WorkersPage } from '../pages/WorkersPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'workers', element: <WorkersPage /> },
      { path: 'sites', element: <SitesPage /> },
      { path: 'finance', element: <FinancePage /> },
    ],
  },
])
