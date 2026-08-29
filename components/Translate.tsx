import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language, translations } from '../data/translations';
import { translateText, getCachedTranslation, setCachedTranslation } from '../lib/googleTranslate';

interface TranslateProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Dynamic translation component
 * Automatically translates text to the selected language
 * Uses predefined dictionary first, then falls back to translation APIs
 */
export const Translate: React.FC<TranslateProps> = ({ children, className }) => {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const originalText = useMemo(() => {
    return typeof children === 'string' ? children : String(children);
  }, [children]);

  useEffect(() => {
    // If language is Chinese (Traditional), use original text
    if (language === 'zh-HK') {
      setTranslatedText(originalText);
      return;
    }

    // Check cache first
    const cacheKey = `${originalText}|${language}`;
    const cached = getCachedTranslation(cacheKey);
    if (cached) {
      setTranslatedText(cached);
      return;
    }

    // Try to find in predefined translations first
    // Direct lookup in the language dictionary
    const langDict = translations[language];
    
    if (langDict) {
      // Search for the text as a key first
      if (langDict[originalText]) {
        const translatedValue = langDict[originalText];
        setTranslatedText(translatedValue);
        setCachedTranslation(cacheKey, translatedValue);
        console.log(`??Found in dictionary (direct key): "${originalText}" ??"${translatedValue}" (${language})`);
        return;
      }

      // Search through all values to find matching Chinese text
      const zhDict = translations['zh-HK'];
      if (zhDict) {
        for (const [key, zhValue] of Object.entries(zhDict)) {
          if (zhValue === originalText && langDict[key]) {
            const translatedValue = langDict[key];
            setTranslatedText(translatedValue);
            setCachedTranslation(cacheKey, translatedValue);
            console.log(`??Found in dictionary (reverse lookup): "${originalText}" ??"${translatedValue}" (${language})`);
            return;
          }
        }
      }
    }

    // If not in dictionary, try API translation
    const fetchTranslation = async () => {
      try {
        setIsLoading(true);
        
        const translated = await translateText(originalText, language);
        setTranslatedText(translated);
        setCachedTranslation(cacheKey, translated);
        
        console.log(`??Translated via API: "${originalText}" ??"${translated}" (${language})`);
      } catch (error) {
        console.error('Translation error:', error);
        setTranslatedText(originalText);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslation();
  }, [language, originalText]);

  // Show loading state or translated text
  const displayText = translatedText || originalText;

  return (
    <span 
      className={className} 
      data-testid="translate-component"
      data-language={language}
      data-original={originalText}
      title={isLoading ? 'Translating...' : ''}
    >
      {displayText}
      {isLoading && <span className="animate-pulse">...</span>}
    </span>
  );
};

/**
 * Translate component for block-level elements
 */
export const TranslateBlock: React.FC<TranslateProps> = ({ children, className }) => {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const originalText = useMemo(() => {
    return typeof children === 'string' ? children : String(children);
  }, [children]);

  useEffect(() => {
    // If language is Chinese (Traditional), use original text
    if (language === 'zh-HK') {
      setTranslatedText(originalText);
      return;
    }

    // Check cache first
    const cacheKey = `${originalText}|${language}`;
    const cached = getCachedTranslation(cacheKey);
    if (cached) {
      setTranslatedText(cached);
      return;
    }

    // Try to find in predefined translations first
    // Direct lookup in the language dictionary
    const langDict = translations[language];
    
    if (langDict) {
      // Search for the text as a key first
      if (langDict[originalText]) {
        const translatedValue = langDict[originalText];
        setTranslatedText(translatedValue);
        setCachedTranslation(cacheKey, translatedValue);
        console.log(`??Found in dictionary (direct key): "${originalText}" ??"${translatedValue}" (${language})`);
        return;
      }

      // Search through all values to find matching Chinese text
      const zhDict = translations['zh-HK'];
      if (zhDict) {
        for (const [key, zhValue] of Object.entries(zhDict)) {
          if (zhValue === originalText && langDict[key]) {
            const translatedValue = langDict[key];
            setTranslatedText(translatedValue);
            setCachedTranslation(cacheKey, translatedValue);
            console.log(`??Found in dictionary (reverse lookup): "${originalText}" ??"${translatedValue}" (${language})`);
            return;
          }
        }
      }
    }

    // If not in dictionary, try API translation
    const fetchTranslation = async () => {
      try {
        setIsLoading(true);
        
        const translated = await translateText(originalText, language);
        setTranslatedText(translated);
        setCachedTranslation(cacheKey, translated);
        
        console.log(`??Translated block via API: "${originalText}" ??"${translated}" (${language})`);
      } catch (error) {
        console.error('Translation error:', error);
        setTranslatedText(originalText);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslation();
  }, [language, originalText]);

  // Show loading state or translated text
  const displayText = translatedText || originalText;

  return (
    <div 
      className={className} 
      data-testid="translate-block-component"
      data-language={language}
      data-original={originalText}
    >
      {displayText}
      {isLoading && <span className="animate-pulse">Translating...</span>}
    </div>
  );
};
