import { useEffect } from 'react';
import { 
  Analytics, 
  logEvent as firebaseLogEvent, 
  setUserId, 
  setUserProperties as firebaseSetUserProperties 
} from 'firebase/analytics';

// Comprehensive Event Types
export type StandardAnalyticsEvent = 
  | 'page_view'
  | 'login'
  | 'sign_up'
  | 'view_project'
  | 'contact_form_submit'
  | 'language_change'
  | 'download_app'
  | 'external_link_click';

// Custom Event Type for flexibility
export type CustomAnalyticsEvent = string;

// Combined Event Type
export type AnalyticsEvent = StandardAnalyticsEvent | CustomAnalyticsEvent;

// Event Parameters Interface
export interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

// Analytics Service Class
export class AnalyticsService {
  private analytics: Analytics | null;

  constructor(analyticsInstance: Analytics | null) {
    this.analytics = analyticsInstance;
  }

  /**
   * Log an analytics event
   * @param eventName - Name of the event
   * @param eventParams - Event parameters
   */
  logEvent(
    eventName: AnalyticsEvent, 
    eventParams?: EventParams
  ): void {
    try {
      if (this.analytics) {
        firebaseLogEvent(
          this.analytics, 
          eventName, 
          eventParams || {}
        );
      } else {
        console.debug('[Analytics Debug]', eventName, eventParams);
      }
    } catch (error) {
      console.error('Analytics Event Error:', error);
    }
  }

  /**
   * Set user identifier
   * @param userId - Unique user identifier
   */
  setUserId(userId: string): void {
    try {
      if (this.analytics) {
        setUserId(this.analytics, userId);
      }
    } catch (error) {
      console.error('Set User ID Error:', error);
    }
  }

  /**
   * Set custom user properties
   * @param properties - User properties object
   */
  setUserProperties(properties: Record<string, string>): void {
    try {
      if (this.analytics) {
        firebaseSetUserProperties(this.analytics, properties);
      }
    } catch (error) {
      console.error('Set User Properties Error:', error);
    }
  }
}

/**
 * Page Tracking Hook
 * @returns Tracking function
 */
export const usePageTracking = (analyticsService?: AnalyticsService) => {
  useEffect(() => {
    const trackPageView = () => {
      const path = window.location.pathname + window.location.search;
      
      analyticsService?.logEvent('page_view', {
        page_path: path,
        page_title: document.title
      });
    };

    // Initial page view
    trackPageView();

    // Optional: Handle route changes
    const handleRouteChange = () => trackPageView();

    return () => {
      // Cleanup if needed
    };
  }, [analyticsService]);
};

// Export for direct use if needed
export default AnalyticsService;