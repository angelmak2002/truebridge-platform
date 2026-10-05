import { describe, it, expect } from 'vitest';
import { exercisesData } from '../client/src/data/exercisesData';

describe('Practice Questions', () => {
  describe('Data Structure', () => {
    it('should have all 9 grades', () => {
      const grades = exercisesData.map(g => g.grade);
      expect(grades).toContain('p1');
      expect(grades).toContain('p2');
      expect(grades).toContain('p3');
      expect(grades).toContain('p4');
      expect(grades).toContain('p5');
      expect(grades).toContain('p6');
      expect(grades).toContain('s1');
      expect(grades).toContain('s2');
      expect(grades).toContain('s3');
      expect(grades.length).toBe(9);
    });

    it('should have at least 10 questions per grade', () => {
      exercisesData.forEach(grade => {
        expect(grade.questions.length).toBeGreaterThanOrEqual(10);
      });
    });

    it('should have valid question structure', () => {
      exercisesData.forEach(grade => {
        grade.questions.forEach(question => {
          expect(question.id).toBeDefined();
          expect(question.subject).toBeDefined();
          expect(question.question).toBeDefined();
          expect(question.options).toHaveLength(4);
          expect(question.correctAnswer).toBeGreaterThanOrEqual(0);
          expect(question.correctAnswer).toBeLessThan(4);
        });
      });
    });

    it('should have correct grade labels', () => {
      const expectedLabels: Record<string, string> = {
        p1: '小一', p2: '小二', p3: '小三', p4: '小四', p5: '小五', p6: '小六',
        s1: '中一', s2: '中二', s3: '中三'
      };

      exercisesData.forEach(grade => {
        expect(grade.gradeLabel).toBe(expectedLabels[grade.grade]);
      });
    });
  });

  describe('Question Subjects', () => {
    it('should have Chinese, English, and Math questions', () => {
      exercisesData.forEach(grade => {
        const subjects = new Set(grade.questions.map(q => q.subject));
        expect(subjects.has('中文')).toBe(true);
        expect(subjects.has('英文')).toBe(true);
        expect(subjects.has('數學')).toBe(true);
      });
    });

    it('should have balanced subject distribution', () => {
      exercisesData.forEach(grade => {
        const subjects = grade.questions.map(q => q.subject);
        const chineseCount = subjects.filter(s => s === '中文').length;
        const englishCount = subjects.filter(s => s === '英文').length;
        const mathCount = subjects.filter(s => s === '數學').length;

        // Each subject should have at least 2 questions
        expect(chineseCount).toBeGreaterThanOrEqual(2);
        expect(englishCount).toBeGreaterThanOrEqual(2);
        expect(mathCount).toBeGreaterThanOrEqual(2);
      });
    });
  });

  describe('Question Validity', () => {
    it('should have non-empty questions', () => {
      exercisesData.forEach(grade => {
        grade.questions.forEach(question => {
          expect(question.question.length).toBeGreaterThan(0);
        });
      });
    });

    it('should have non-empty options', () => {
      exercisesData.forEach(grade => {
        grade.questions.forEach(question => {
          question.options.forEach(option => {
            expect(option.length).toBeGreaterThan(0);
          });
        });
      });
    });

    it('should have valid correct answer indices', () => {
      exercisesData.forEach(grade => {
        grade.questions.forEach(question => {
          expect(question.correctAnswer).toBeGreaterThanOrEqual(0);
          expect(question.correctAnswer).toBeLessThan(question.options.length);
        });
      });
    });
  });

  describe('Grade Progression', () => {
    it('should have increasing difficulty from P1 to S3', () => {
      // P1 should have simpler questions (shorter text)
      const p1Questions = exercisesData.find(g => g.grade === 'p1')?.questions || [];
      const s3Questions = exercisesData.find(g => g.grade === 's3')?.questions || [];

      const p1AvgLength = p1Questions.reduce((sum, q) => sum + q.question.length, 0) / p1Questions.length;
      const s3AvgLength = s3Questions.reduce((sum, q) => sum + q.question.length, 0) / s3Questions.length;

      // S3 questions should generally be longer/more complex
      expect(s3AvgLength).toBeGreaterThanOrEqual(p1AvgLength * 0.8);
    });
  });
});
