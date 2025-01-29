import * as firebaseAnalytics from './firebase/config';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AnalyticsService, { usePageTracking } from './firebase/analytics';
import App from './App.tsx';
import './index.css';

if (firebaseAnalytics.analytics) {
  const analyticsService = new AnalyticsService(firebaseAnalytics.analytics);
  
  usePageTracking(analyticsService);
}
  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
