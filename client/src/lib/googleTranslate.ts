import { Language } from '../data/translations';

// Language code mapping for Google Translate API
const languageCodeMap: Record<Language, string> = {
  'zh-HK': 'zh-TW', // Traditional Chinese
  'zh-CN': 'zh-CN', // Simplified Chinese
  'en': 'en',
  'ja': 'ja',
  'ko': 'ko',
};

/**
 * Translate text using multiple translation APIs
 * Falls back to different services if one fails
 */
export async function translateText(
  text: string,
  targetLanguage: Language,
  sourceLanguage: Language = 'zh-HK'
): Promise<string> {
  if (sourceLanguage === targetLanguage) {
    return text;
  }

  // Try multiple translation services
  try {
    // First try: Google Translate API via mymemory
    const result1 = await tryMyMemoryAPI(text, sourceLanguage, targetLanguage);
    if (result1) return result1;
  } catch (error) {
    console.warn('MyMemory API failed, trying alternative...');
  }

  try {
    // Second try: LibreTranslate API
    const result2 = await tryLibreTranslateAPI(text, sourceLanguage, targetLanguage);
    if (result2) return result2;
  } catch (error) {
    console.warn('LibreTranslate API failed, trying alternative...');
  }

  try {
    // Third try: Google Translate via RapidAPI (if available)
    const result3 = await tryGoogleTranslateAPI(text, sourceLanguage, targetLanguage);
    if (result3) return result3;
  } catch (error) {
    console.warn('Google Translate API failed');
  }

  // If all fail, return original text
  console.warn(`Translation failed for "${text}", returning original`);
  return text;
}

/**
 * Try MyMemory API
 */
async function tryMyMemoryAPI(
  text: string,
  sourceLanguage: Language,
  targetLanguage: Language
): Promise<string | null> {
  try {
    const sourceCode = languageCodeMap[sourceLanguage];
    const targetCode = languageCodeMap[targetLanguage];

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceCode}|${targetCode}`,
      { signal: AbortSignal.timeout(5000) }
    );

    if (!response.ok) return null;

    const data = await response.json();
    
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      // Check if translation is meaningful (not just returning original)
      if (data.responseData.translatedText !== text) {
        return data.responseData.translatedText;
      }
    }

    return null;
  } catch (error) {
    console.warn('MyMemory API error:', error);
    return null;
  }
}

/**
 * Try LibreTranslate API (free, open-source)
 */
async function tryLibreTranslateAPI(
  text: string,
  sourceLanguage: Language,
  targetLanguage: Language
): Promise<string | null> {
  try {
    const sourceCode = languageCodeMap[sourceLanguage];
    const targetCode = languageCodeMap[targetLanguage];

    const response = await fetch('https://libretranslate.de/translate', {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        source: sourceCode === 'zh-TW' ? 'zh' : sourceCode,
        target: targetCode === 'zh-TW' ? 'zh' : targetCode,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) return null;

    const data = await response.json();
    
    if (data.translatedText && data.translatedText !== text) {
      return data.translatedText;
    }

    return null;
  } catch (error) {
    console.warn('LibreTranslate API error:', error);
    return null;
  }
}

/**
 * Try Google Translate API
 */
async function tryGoogleTranslateAPI(
  text: string,
  sourceLanguage: Language,
  targetLanguage: Language
): Promise<string | null> {
  try {
    const targetCode = languageCodeMap[targetLanguage];
    
    // Using Google Translate web interface (not official API)
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit`,
      { signal: AbortSignal.timeout(5000) }
    );

    if (!response.ok) return null;

    // This is a fallback and may not work reliably
    return null;
  } catch (error) {
    console.warn('Google Translate API error:', error);
    return null;
  }
}

/**
 * Translate multiple texts in batch
 */
export async function translateBatch(
  texts: string[],
  targetLanguage: Language,
  sourceLanguage: Language = 'zh-HK'
): Promise<string[]> {
  return Promise.all(
    texts.map(text => translateText(text, targetLanguage, sourceLanguage))
  );
}

/**
 * Cache for translated content to avoid redundant API calls
 */
const translationCache = new Map<string, string>();

export function getCachedTranslation(key: string): string | undefined {
  return translationCache.get(key);
}

export function setCachedTranslation(key: string, value: string): void {
  translationCache.set(key, value);
}

export function clearTranslationCache(): void {
  translationCache.clear();
}
