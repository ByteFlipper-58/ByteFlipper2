import { analytics } from './config';
import { logEvent as firebaseLogEvent, AnalyticsCallOptions } from 'firebase/analytics';

// Типы событий аналитики
export type AnalyticsEvent = 
  | 'page_view'
  | 'login'
  | 'sign_up'
  | 'view_project'
  | 'contact_form_submit'
  | 'language_change'
  | 'download_app'
  | 'external_link_click';

// Интерфейс для параметров событий
export interface EventParams {
  [key: string]: any;
}

/**
 * Логирует событие аналитики
 * @param eventName - Название события
 * @param eventParams - Параметры события (опционально)
 * @param options - Опции вызова аналитики (опционально)
 */
export const logEvent = (
  eventName: AnalyticsEvent,
  eventParams?: EventParams,
  options?: AnalyticsCallOptions
) => {
  if (analytics) {
    firebaseLogEvent(analytics, eventName, eventParams, options);
  } else {
    // В режиме разработки или если аналитика не поддерживается
    console.debug('[Analytics]', eventName, eventParams);
  }
};

/**
 * Устанавливает пользовательские свойства
 * @param userId - ID пользователя
 * @param properties - Пользовательские свойства
 */
export const setUserProperties = (userId: string, properties: { [key: string]: any }) => {
  if (analytics) {
    // Устанавливаем ID пользователя
    firebaseLogEvent(analytics, 'set_user_id', { user_id: userId });
    
    // Устанавливаем пользовательские свойства
    Object.entries(properties).forEach(([key, value]) => {
      firebaseLogEvent(analytics, 'set_user_property', {
        name: key,
        value: value
      });
    });
  }
};

// Хук для отслеживания просмотров страниц
export const usePageTracking = () => {
  useEffect(() => {
    const path = window.location.pathname + window.location.search;
    logEvent('page_view', {
      page_path: path,
      page_title: document.title
    });
  }, [location]);
};