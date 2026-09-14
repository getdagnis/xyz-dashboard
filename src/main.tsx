import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './design-system/global.sass';
import AppShell from './app/layout/AppShell';
import { NotificationsProvider } from './modules/notifications/NotificationsProvider';
import DashboardPage from './pages/dashboard/DashboardPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationsProvider>
      <AppShell>
        <DashboardPage />
      </AppShell>
    </NotificationsProvider>
  </StrictMode>,
);
