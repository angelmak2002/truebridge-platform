// Each grade has 15 questions covering 5 subjects: Chinese, Classical Chinese, English, Math, English Math
// Every week rotates 10 questions (2 from each subject)
// Updated: Every Monday (week 0 = Jan 1, 1970 Monday)

import { exercisesData } from './exercisesData';

export interface Question {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface GradeExercisesSet {
  grade: string;
  gradeLabel: string;
  sets: Question[][];
}

// Helper function to split 15 questions into 4 weekly sets of 10 questions each
// Each set contains 2 questions from each of the 5 subjects
function createWeeklySets(questions: Question[]): Question[][] {
  // Group questions by subject
  const subjects = ['中文', '文言文', '英文', '數學', '英文數學'];
  const questionsBySubject: { [key: string]: Question[] } = {};
  
  subjects.forEach(subject => {
    questionsBySubject[subject] = questions.filter(q => q.subject === subject);
  });

  // Create 4 sets, each with 2 questions from each subject (10 total)
  const sets: Question[][] = [[], [], [], []];
  
  subjects.forEach(subject => {
    const subjectQuestions = questionsBySubject[subject];
    // Each subject has 3 questions, rotate them across 4 weeks
    // Week 0: Q0, Q1
    // Week 1: Q1, Q2
    // Week 2: Q2, Q0
    // Week 3: Q0, Q1
    for (let week = 0; week < 4; week++) {
      const idx1 = week % subjectQuestions.length;
      const idx2 = (week + 1) % subjectQuestions.length;
      sets[week].push(subjectQuestions[idx1]);
      sets[week].push(subjectQuestions[idx2]);
    }
  });

  return sets;
}

// Build extended data from exercisesData
export const exercisesDataExtended: GradeExercisesSet[] = exercisesData.map(grade => ({
  grade: grade.grade,
  gradeLabel: grade.gradeLabel,
  sets: createWeeklySets(grade.questions),
}));

// Utility function to get current week's question set
// Rotates every Monday (week 0 = Jan 1, 1970 which was a Monday)
export function getCurrentWeekQuestions(grade: string): Question[] {
  const gradeData = exercisesDataExtended.find(g => g.grade === grade);
  if (!gradeData) return [];
  
  // Calculate weeks since epoch (Jan 1, 1970 was a Monday)
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % gradeData.sets.length;
  return gradeData.sets[weekNumber] || [];
}

// Utility function to get all available weeks for a grade
export function getAvailableWeeks(grade: string): number {
  const gradeData = exercisesDataExtended.find(g => g.grade === grade);
  return gradeData?.sets.length || 0;
}

// Utility function to get questions for a specific week
export function getWeekQuestions(grade: string, week: number): Question[] {
  const gradeData = exercisesDataExtended.find(g => g.grade === grade);
  if (!gradeData || week < 0 || week >= gradeData.sets.length) return [];
  return gradeData.sets[week] || [];
}

// Utility function to get all questions for a grade (all 15 questions)
export function getAllQuestionsForGrade(grade: string): Question[] {
  const gradeData = exercisesData.find(g => g.grade === grade);
  return gradeData?.questions || [];
}
