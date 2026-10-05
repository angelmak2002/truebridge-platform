import { describe, it, expect } from 'vitest';
import { exercisesData } from '../client/src/data/exercisesData';
import { exercisesDataExtended, getCurrentWeekQuestions, getAllQuestionsForGrade } from '../client/src/data/exercisesDataExtended';

describe('Exercises Data', () => {
  it('should have 9 grades of exercises', () => {
    expect(exercisesData).toHaveLength(9);
  });

  it('each grade should have 15 questions', () => {
    exercisesData.forEach(grade => {
      expect(grade.questions).toHaveLength(15);
    });
  });

  it('each grade should have questions covering 5 subjects', () => {
    const subjects = ['中文', '文言文', '英文', '數學', '英文數學'];
    
    exercisesData.forEach(grade => {
      const gradeSubjects = new Set(grade.questions.map(q => q.subject));
      subjects.forEach(subject => {
        expect(gradeSubjects.has(subject)).toBe(true);
      });
    });
  });

  it('each subject should have correct question count per grade', () => {
    const subjects = ['中文', '文言文', '英文', '數學', '英文數學'];
    
    exercisesData.forEach(grade => {
      subjects.forEach(subject => {
        const count = grade.questions.filter(q => q.subject === subject).length;
        // Each subject should have at least 2 questions
        expect(count).toBeGreaterThanOrEqual(2);
      });
      // Total should be 15 questions
      expect(grade.questions.length).toBe(15);
    });
  });

  it('each question should have valid structure', () => {
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

  it('should have extended data with weekly sets', () => {
    expect(exercisesDataExtended).toHaveLength(9);
    
    exercisesDataExtended.forEach(grade => {
      expect(grade.sets).toHaveLength(4); // 4 weeks
      grade.sets.forEach(set => {
        expect(set.length).toBe(10); // 10 questions per week
      });
    });
  });

  it('each weekly set should have 2 questions from each subject', () => {
    const subjects = ['中文', '文言文', '英文', '數學', '英文數學'];
    
    exercisesDataExtended.forEach(grade => {
      grade.sets.forEach(set => {
        subjects.forEach(subject => {
          const count = set.filter(q => q.subject === subject).length;
          expect(count).toBe(2);
        });
      });
    });
  });

  it('getCurrentWeekQuestions should return 10 questions', () => {
    exercisesData.forEach(grade => {
      const questions = getCurrentWeekQuestions(grade.grade);
      expect(questions.length).toBe(10);
    });
  });

  it('getAllQuestionsForGrade should return 15 questions', () => {
    exercisesData.forEach(grade => {
      const questions = getAllQuestionsForGrade(grade.grade);
      expect(questions).toHaveLength(15);
    });
  });

  it('all grades should have correct grade codes', () => {
    const expectedGrades = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 's1', 's2', 's3'];
    const actualGrades = exercisesData.map(g => g.grade);
    
    expectedGrades.forEach(grade => {
      expect(actualGrades).toContain(grade);
    });
  });

  it('all questions should have unique IDs within each grade', () => {
    exercisesData.forEach(grade => {
      const ids = grade.questions.map(q => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });
});
