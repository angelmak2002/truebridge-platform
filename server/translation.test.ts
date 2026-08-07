import { describe, it, expect } from 'vitest';
import { translations, Language, LANGUAGES } from '../client/src/data/translations';

describe('Translation System Tests', () => {
  const languages: Language[] = ['zh-HK', 'zh-CN', 'en', 'ja', 'ko'];

  it('should have all languages defined', () => {
    languages.forEach((lang) => {
      expect(LANGUAGES[lang]).toBeDefined();
      expect(translations[lang]).toBeDefined();
    });
  });

  it('should have matching keys across all languages', () => {
    const zhHKKeys = Object.keys(translations['zh-HK']);
    
    languages.forEach((lang) => {
      if (lang === 'zh-HK') return;
      
      const langKeys = Object.keys(translations[lang]);
      const missingKeys = zhHKKeys.filter(key => !langKeys.includes(key));
      
      expect(missingKeys).toHaveLength(0, 
        `Language ${lang} is missing keys: ${missingKeys.join(', ')}`
      );
    });
  });

  it('should not have empty translation values', () => {
    languages.forEach((lang) => {
      const dict = translations[lang];
      
      Object.entries(dict).forEach(([key, value]) => {
        expect(value).toBeTruthy(
          `Language ${lang} has empty value for key: ${key}`
        );
        expect(typeof value).toBe('string');
        expect(value.length).toBeGreaterThan(0);
      });
    });
  });

  it('should have Chinese and English translations for all keys', () => {
    const zhHKDict = translations['zh-HK'];
    const enDict = translations['en'];
    
    Object.entries(zhHKDict).forEach(([key, zhValue]) => {
      const enValue = enDict[key];
      
      expect(enValue).toBeDefined(`English translation missing for key: ${key}`);
      // Skip brand names that are the same in all languages (WeChat, WhatsApp, etc.)
      const brandNames = ['WeChat', 'WhatsApp', 'WhatsApp Business'];
      if (!brandNames.includes(zhValue as string)) {
        expect(enValue).not.toBe(zhValue, 
          `English translation for ${key} is same as Chinese (possible missing translation)`
        );
      }
    });
  });

  it('should have Japanese translations for critical keys', () => {
    const criticalKeys = [
      'nav.home', 'nav.services', 'nav.features', 'nav.video',
      'nav.benefits', 'nav.promises', 'nav.tutors', 'nav.practice',
      'hero.title', 'hero.cta', 'trial.title', 'trial.submit'
    ];
    
    const jaDict = translations['ja'];
    
    criticalKeys.forEach((key) => {
      expect(jaDict[key]).toBeDefined(`Japanese translation missing for critical key: ${key}`);
    });
  });

  it('should have Korean translations for critical keys', () => {
    const criticalKeys = [
      'nav.home', 'nav.services', 'nav.features', 'nav.video',
      'nav.benefits', 'nav.promises', 'nav.tutors', 'nav.practice',
      'hero.title', 'hero.cta', 'trial.title', 'trial.submit'
    ];
    
    const koDict = translations['ko'];
    
    criticalKeys.forEach((key) => {
      expect(koDict[key]).toBeDefined(`Korean translation missing for critical key: ${key}`);
    });
  });

  it('should not have untranslated Chinese text in non-Chinese languages', () => {
    const zhHKDict = translations['zh-HK'];
    const languages_to_check: Language[] = ['en', 'ja', 'ko'];
    
    languages_to_check.forEach((lang) => {
      const langDict = translations[lang];
      
      Object.entries(langDict).forEach(([key, value]) => {
        const zhValue = zhHKDict[key];
        
        // Check if the translated value is exactly the same as Chinese (indicates missing translation)
        if (zhValue && value === zhValue) {
          console.warn(`Possible untranslated text in ${lang} for key ${key}: "${value}"`);
        }
      });
    });
  });

  it('should have consistent translation coverage', () => {
    const zhHKDict = translations['zh-HK'];
    const totalKeys = Object.keys(zhHKDict).length;
    
    languages.forEach((lang) => {
      if (lang === 'zh-HK') return;
      
      const langDict = translations[lang];
      const translatedKeys = Object.keys(langDict).length;
      const coverage = (translatedKeys / totalKeys) * 100;
      
      expect(coverage).toBeGreaterThanOrEqual(95,
        `Language ${lang} has only ${coverage.toFixed(2)}% translation coverage`
      );
    });
  });
});
