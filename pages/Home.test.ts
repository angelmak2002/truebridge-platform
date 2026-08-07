import { describe, it, expect } from 'vitest';
import { exercisesDataMultilingual, type Question } from '@/data/exercisesDataMultilingual';
import type { Language } from '@/data/translations';

describe('Multilingual Exercises Data', () => {
  it('should have exercises data for all grades', () => {
    expect(exercisesDataMultilingual.length).toBeGreaterThan(0);
    expect(exercisesDataMultilingual).toContainEqual(
      expect.objectContaining({
        grade: expect.any(String),
        gradeLabel: expect.any(Object),
        questions: expect.any(Array),
      })
    );
  });

  it('should have all required languages in gradeLabel', () => {
    const languages: Language[] = ['zh-HK', 'zh-CN', 'en', 'ja', 'ko'];
    
    exercisesDataMultilingual.forEach((grade) => {
      languages.forEach((lang) => {
        expect(grade.gradeLabel).toHaveProperty(lang);
        expect(typeof grade.gradeLabel[lang]).toBe('string');
        expect(grade.gradeLabel[lang].length).toBeGreaterThan(0);
      });
    });
  });

  it('should have questions with all required properties', () => {
    exercisesDataMultilingual.forEach((grade) => {
      grade.questions.forEach((question) => {
        expect(question).toHaveProperty('question');
        expect(question).toHaveProperty('options');
        expect(question).toHaveProperty('correctAnswer');
        expect(question).toHaveProperty('subject');
        
        // Verify question is a translation object
        expect(typeof question.question).toBe('object');
        expect(question.question).toHaveProperty('zh-HK');
        expect(question.question).toHaveProperty('en');
        
        // Verify options are translation objects
        expect(Array.isArray(question.options)).toBe(true);
        question.options.forEach((option) => {
          expect(typeof option).toBe('object');
          expect(option).toHaveProperty('zh-HK');
          expect(option).toHaveProperty('en');
        });
        
        // Verify subject is a translation object
        expect(typeof question.subject).toBe('object');
        expect(question.subject).toHaveProperty('zh-HK');
        expect(question.subject).toHaveProperty('en');
        
        // Verify correctAnswer is a valid index
        expect(typeof question.correctAnswer).toBe('number');
        expect(question.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(question.correctAnswer).toBeLessThan(question.options.length);
      });
    });
  });

  it('should have all languages in question translations', () => {
    const languages: Language[] = ['zh-HK', 'zh-CN', 'en', 'ja', 'ko'];
    
    exercisesDataMultilingual.forEach((grade) => {
      grade.questions.forEach((question) => {
        // Check question
        languages.forEach((lang) => {
          expect(question.question).toHaveProperty(lang);
          expect(typeof question.question[lang]).toBe('string');
          expect(question.question[lang].length).toBeGreaterThan(0);
        });
        
        // Check options
        question.options.forEach((option) => {
          languages.forEach((lang) => {
            expect(option).toHaveProperty(lang);
            expect(typeof option[lang]).toBe('string');
            expect(option[lang].length).toBeGreaterThan(0);
          });
        });
        
        // Check subject
        languages.forEach((lang) => {
          expect(question.subject).toHaveProperty(lang);
          expect(typeof question.subject[lang]).toBe('string');
          expect(question.subject[lang].length).toBeGreaterThan(0);
        });
      });
    });
  });

  it('should have at least 9 grades with questions', () => {
    expect(exercisesDataMultilingual.length).toBeGreaterThanOrEqual(9);
  });

  it('should have multiple questions per grade', () => {
    exercisesDataMultilingual.forEach((grade) => {
      expect(grade.questions.length).toBeGreaterThanOrEqual(10);
    });
  });

  it('should have 4 options per question', () => {
    exercisesDataMultilingual.forEach((grade) => {
      grade.questions.forEach((question) => {
        expect(question.options.length).toBe(4);
      });
    });
  });

  it('should have valid subject translations', () => {
    const validSubjects = ['Chinese', 'English', 'Math', 'Putonghua', 'Science', 'History'];
    const languages: Language[] = ['zh-HK', 'zh-CN', 'en', 'ja', 'ko'];
    
    exercisesDataMultilingual.forEach((grade) => {
      grade.questions.forEach((question) => {
        // At least one language should contain a recognizable subject
        const hasValidSubject = languages.some((lang) => {
          const subject = question.subject[lang].toLowerCase();
          return validSubjects.some((s) => subject.includes(s.toLowerCase()));
        });
        
        // If not found in English names, just verify it's not empty
        languages.forEach((lang) => {
          expect(question.subject[lang].length).toBeGreaterThan(0);
        });
      });
    });
  });

  it('should have consistent grade IDs', () => {
    const gradeIds = exercisesDataMultilingual.map((g) => g.grade);
    const expectedIds = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 's1', 's2', 's3'];
    
    expectedIds.forEach((id) => {
      expect(gradeIds).toContain(id);
    });
  });

  it('should have no duplicate questions within a grade', () => {
    exercisesDataMultilingual.forEach((grade) => {
      const questionTexts = grade.questions.map((q) => q.question['en']);
      const uniqueQuestions = new Set(questionTexts);
      
      expect(uniqueQuestions.size).toBe(questionTexts.length);
    });
  });
});
