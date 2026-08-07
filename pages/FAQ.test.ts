import { describe, it, expect } from 'vitest';
import { testimonialsData, faqData, testimonialsSectionText, faqSectionText, faqSubtitleText, faqContactText, faqContactDescriptionText } from '@/data/testimonialsAndFaqData';
import type { Language } from '@/data/translations';

describe('Testimonials and FAQ Data', () => {
  const languages: Language[] = ['zh-HK', 'zh-CN', 'en', 'ja', 'ko'];

  describe('Testimonials', () => {
    it('should have 4 testimonials', () => {
      expect(testimonialsData.length).toBe(4);
    });

    it('should have all required languages in testimonial names', () => {
      testimonialsData.forEach((testimonial) => {
        languages.forEach((lang) => {
          expect(testimonial.name).toHaveProperty(lang);
          expect(typeof testimonial.name[lang]).toBe('string');
          expect(testimonial.name[lang].length).toBeGreaterThan(0);
        });
      });
    });

    it('should have all required languages in testimonial comments', () => {
      testimonialsData.forEach((testimonial) => {
        languages.forEach((lang) => {
          expect(testimonial.comment).toHaveProperty(lang);
          expect(typeof testimonial.comment[lang]).toBe('string');
          expect(testimonial.comment[lang].length).toBeGreaterThan(0);
        });
      });
    });

    it('should have different translations for each language', () => {
      testimonialsData.forEach((testimonial) => {
        const translations = languages.map((lang) => testimonial.comment[lang]);
        const uniqueTranslations = new Set(translations);
        // Should have at least 3 different translations (some languages might have similar content)
        expect(uniqueTranslations.size).toBeGreaterThanOrEqual(3);
      });
    });

    it('should have valid testimonial names', () => {
      const validNames = ['李媽媽', '王爸爸', '陳媽媽', '黃爸爸', 'Mrs. Lee', 'Mr. Wang', 'Mrs. Chen', 'Mr. Huang'];
      testimonialsData.forEach((testimonial) => {
        const hasValidName = languages.some((lang) => {
          const name = testimonial.name[lang];
          return validNames.some((vn) => name.includes(vn) || vn.includes(name.substring(0, 3)));
        });
        expect(hasValidName).toBe(true);
      });
    });
  });

  describe('FAQ Data', () => {
    it('should have 8 FAQ items', () => {
      expect(faqData.length).toBe(8);
    });

    it('should have sequential FAQ IDs', () => {
      faqData.forEach((faq, index) => {
        expect(faq.id).toBe(index + 1);
      });
    });

    it('should have all required languages in FAQ questions', () => {
      faqData.forEach((faq) => {
        languages.forEach((lang) => {
          expect(faq.question).toHaveProperty(lang);
          expect(typeof faq.question[lang]).toBe('string');
          expect(faq.question[lang].length).toBeGreaterThan(0);
        });
      });
    });

    it('should have all required languages in FAQ answers', () => {
      faqData.forEach((faq) => {
        languages.forEach((lang) => {
          expect(faq.answer).toHaveProperty(lang);
          expect(typeof faq.answer[lang]).toBe('string');
          expect(faq.answer[lang].length).toBeGreaterThan(0);
        });
      });
    });

    it('should have different translations for each language', () => {
      faqData.forEach((faq) => {
        const questionTranslations = languages.map((lang) => faq.question[lang]);
        const uniqueQuestions = new Set(questionTranslations);
        expect(uniqueQuestions.size).toBeGreaterThanOrEqual(3);

        const answerTranslations = languages.map((lang) => faq.answer[lang]);
        const uniqueAnswers = new Set(answerTranslations);
        expect(uniqueAnswers.size).toBeGreaterThanOrEqual(3);
      });
    });

    it('should have reasonable answer lengths', () => {
      faqData.forEach((faq) => {
        languages.forEach((lang) => {
          // Answers should be at least 20 characters
          expect(faq.answer[lang].length).toBeGreaterThanOrEqual(20);
        });
      });
    });
  });

  describe('Section Text', () => {
    it('should have all languages in testimonialsSectionText', () => {
      languages.forEach((lang) => {
        expect(testimonialsSectionText).toHaveProperty(lang);
        expect(typeof testimonialsSectionText[lang]).toBe('string');
        expect(testimonialsSectionText[lang].length).toBeGreaterThan(0);
      });
    });

    it('should have all languages in faqSectionText', () => {
      languages.forEach((lang) => {
        expect(faqSectionText).toHaveProperty(lang);
        expect(typeof faqSectionText[lang]).toBe('string');
        expect(faqSectionText[lang].length).toBeGreaterThan(0);
      });
    });

    it('should have all languages in faqSubtitleText', () => {
      languages.forEach((lang) => {
        expect(faqSubtitleText).toHaveProperty(lang);
        expect(typeof faqSubtitleText[lang]).toBe('string');
        expect(faqSubtitleText[lang].length).toBeGreaterThan(0);
      });
    });

    it('should have all languages in faqContactText', () => {
      languages.forEach((lang) => {
        expect(faqContactText).toHaveProperty(lang);
        expect(typeof faqContactText[lang]).toBe('string');
        expect(faqContactText[lang].length).toBeGreaterThan(0);
      });
    });

    it('should have all languages in faqContactDescriptionText', () => {
      languages.forEach((lang) => {
        expect(faqContactDescriptionText).toHaveProperty(lang);
        expect(typeof faqContactDescriptionText[lang]).toBe('string');
        expect(faqContactDescriptionText[lang].length).toBeGreaterThan(0);
      });
    });

    it('should have different translations for section texts', () => {
      const textObjects = [
        testimonialsSectionText,
        faqSectionText,
        faqSubtitleText,
        faqContactText,
        faqContactDescriptionText
      ];

      textObjects.forEach((textObj) => {
        const translations = languages.map((lang) => textObj[lang]);
        const uniqueTranslations = new Set(translations);
        expect(uniqueTranslations.size).toBeGreaterThanOrEqual(3);
      });
    });
  });

  describe('Content Consistency', () => {
    it('should not have empty strings in any translation', () => {
      testimonialsData.forEach((testimonial) => {
        languages.forEach((lang) => {
          expect(testimonial.name[lang].trim().length).toBeGreaterThan(0);
          expect(testimonial.comment[lang].trim().length).toBeGreaterThan(0);
        });
      });

      faqData.forEach((faq) => {
        languages.forEach((lang) => {
          expect(faq.question[lang].trim().length).toBeGreaterThan(0);
          expect(faq.answer[lang].trim().length).toBeGreaterThan(0);
        });
      });
    });

    it('should have reasonable translation lengths', () => {
      testimonialsData.forEach((testimonial) => {
        languages.forEach((lang) => {
          // Comments should be between 30 and 500 characters
          expect(testimonial.comment[lang].length).toBeGreaterThanOrEqual(20);
          expect(testimonial.comment[lang].length).toBeLessThanOrEqual(500);
        });
      });
    });
  });
});
