// Composant pour le suivi des événements Google Analytics
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Événements spécifiques pour Nallias Agence Express
export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: 'phone_number',
    value: 1
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'contact',
    event_label: 'email_address',
    value: 1
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    event_label: 'whatsapp',
    value: 1
  });
};

export const trackQuoteRequest = (productType) => {
  trackEvent('quote_request', {
    event_category: 'conversion',
    event_label: productType,
    value: 1
  });
};

export const trackProductView = (productName) => {
  trackEvent('product_view', {
    event_category: 'engagement',
    event_label: productName,
    value: 1
  });
};

