import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../data/translations';
import { translateText, getCachedTranslation, setCachedTranslation } from '../lib/googleTranslate';

/**
 * Hook for translating content dynamically
 * Caches translations to avoid redundant API calls
 */
export function useTranslateContent() {
  const { language } = useLanguage();
  const [translating, setTranslating] = useState(false);

  const translate = useCallback(
    async (text: string, targetLanguage?: Language): Promise<string> => {
      const targetLang = targetLanguage || language;

      // Return original if translating to Chinese
      if (targetLang === 'zh-HK' || targetLang === 'zh-CN') {
        return text;
      }

      // Check cache first
      const cacheKey = `${text}|${targetLang}`;
      const cached = getCachedTranslation(cacheKey);
      if (cached) {
        return cached;
      }

      try {
        setTranslating(true);
        const translated = await translateText(text, targetLang);
        setCachedTranslation(cacheKey, translated);
        return translated;
      } catch (error) {
        console.error('Translation error:', error);
        return text;
      } finally {
        setTranslating(false);
      }
    },
    [language]
  );

  return { translate, translating, language };
}
