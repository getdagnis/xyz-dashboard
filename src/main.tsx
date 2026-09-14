import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './design-system/global.sass';
import AppShell from './app/layout/AppShell';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppShell />
  </StrictMode>,
);
