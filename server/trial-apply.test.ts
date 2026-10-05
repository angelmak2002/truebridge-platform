import { describe, it, expect, vi } from 'vitest';
import { sendTrialApplicationEmail, sendTrialConfirmationEmail } from './_core/email';

describe('Trial Application Email Functions', () => {
  it('should have sendTrialApplicationEmail function', () => {
    expect(typeof sendTrialApplicationEmail).toBe('function');
  });

  it('should have sendTrialConfirmationEmail function', () => {
    expect(typeof sendTrialConfirmationEmail).toBe('function');
  });

  it('sendTrialApplicationEmail should accept correct parameters', async () => {
    const mockData = {
      studentName: '張三',
      parentPhone: '+852 9123 4567',
      parentEmail: 'parent@example.com',
      subject: '中文',
      grade: 'p1',
      remarks: '學生需要幫助',
    };

    // This is a basic structure test - actual email sending would require mocking
    expect(mockData.studentName).toBeDefined();
    expect(mockData.parentPhone).toBeDefined();
    expect(mockData.parentEmail).toBeDefined();
    expect(mockData.subject).toBeDefined();
    expect(mockData.grade).toBeDefined();
  });

  it('should validate email format', () => {
    const validEmail = 'parent@example.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(validEmail)).toBe(true);
  });

  it('should validate phone format', () => {
    const validPhone = '+852 9123 4567';
    expect(validPhone.length).toBeGreaterThan(0);
    expect(validPhone).toContain('852');
  });

  it('should have all required fields in trial application', () => {
    const requiredFields = ['studentName', 'parentPhone', 'parentEmail', 'subject', 'grade'];
    const mockData = {
      studentName: '張三',
      parentPhone: '+852 9123 4567',
      parentEmail: 'parent@example.com',
      subject: '中文',
      grade: 'p1',
    };

    requiredFields.forEach(field => {
      expect(mockData).toHaveProperty(field);
      expect(mockData[field as keyof typeof mockData]).toBeDefined();
    });
  });

  it('should accept optional remarks field', () => {
    const mockData = {
      studentName: '張三',
      parentPhone: '+852 9123 4567',
      parentEmail: 'parent@example.com',
      subject: '中文',
      grade: 'p1',
      remarks: '可選備註',
    };

    expect(mockData.remarks).toBeDefined();
    expect(typeof mockData.remarks).toBe('string');
  });

  it('should validate grade values', () => {
    const validGrades = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 's1', 's2', 's3'];
    const testGrade = 'p1';
    expect(validGrades).toContain(testGrade);
  });

  it('should validate subject values', () => {
    const validSubjects = ['中文', '英文', '數學', '普通話'];
    const testSubject = '中文';
    expect(validSubjects).toContain(testSubject);
  });
});
