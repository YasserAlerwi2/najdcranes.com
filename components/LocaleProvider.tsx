'use client';

import { createContext, useContext, ReactNode } from 'react';

interface LocaleContextType {
  locale: string;
  messages: Record<string, unknown>;
  t: (key: string, namespace?: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ 
  children, 
  locale, 
  messages 
}: { 
  children: ReactNode; 
  locale: string; 
  messages: Record<string, unknown>;
}) {
  const t = (key: string, namespace?: string): string => {
    const keys = namespace ? `${namespace}.${key}` : key;
    const keyParts = keys.split('.');
    
    let value: unknown = messages;
    for (const part of keyParts) {
      if (typeof value === 'object' && value !== null && part in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[part];
      } else {
        value = undefined;
        break;
      }
    }
    
    return (typeof value === 'string' ? value : key);
  };

  return (
    <LocaleContext.Provider value={{ locale, messages, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

export function useTranslations(namespace?: string) {
  const { t } = useLocale();
  return (key: string) => t(key, namespace);
}
