import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import './design-system/global.sass';
import AppShell from './app/layout/AppShell';
import { queryClient } from './app/queryClient';
import { NotificationsProvider } from './modules/notifications/NotificationsProvider';
import DashboardPage from './pages/dashboard/DashboardPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <AppShell>
          <DashboardPage />
        </AppShell>
      </NotificationsProvider>
    </QueryClientProvider>
  </StrictMode>,
);
