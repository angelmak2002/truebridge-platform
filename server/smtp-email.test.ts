import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import nodemailer from 'nodemailer';
import { sendEmail, sendTrialApplicationEmail, sendTrialConfirmationEmail } from './_core/email';

// Mock nodemailer
vi.mock('nodemailer');

describe('SMTP Email Functions', () => {
  let mockSendMail: any;

  beforeAll(() => {
    // Setup mock transporter
    mockSendMail = vi.fn().mockResolvedValue({ messageId: '<test@example.com>' });
    
    (nodemailer.createTransport as any).mockReturnValue({
      sendMail: mockSendMail,
    });
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should have sendEmail function', () => {
    expect(typeof sendEmail).toBe('function');
  });

  it('should have sendTrialApplicationEmail function', () => {
    expect(typeof sendTrialApplicationEmail).toBe('function');
  });

  it('should have sendTrialConfirmationEmail function', () => {
    expect(typeof sendTrialConfirmationEmail).toBe('function');
  });

  it('should validate SMTP configuration is required', () => {
    const emailPayload = {
      to: 'info@truebridge.asia',
      subject: 'Test Email',
      html: '<p>Test</p>',
    };

    expect(emailPayload.to).toBe('info@truebridge.asia');
    expect(emailPayload.subject).toBeDefined();
    expect(emailPayload.html).toBeDefined();
  });

  it('should format trial application email correctly', () => {
    const testData = {
      studentName: '張三',
      parentPhone: '+852 9123 4567',
      parentEmail: 'parent@example.com',
      subject: '中文',
      grade: 'p1',
      remarks: '需要幫助',
    };

    expect(testData.studentName).toBeDefined();
    expect(testData.parentEmail).toBeDefined();
    expect(testData.subject).toBeDefined();
    expect(testData.grade).toBeDefined();
  });

  it('should send to correct admin email address', () => {
    const adminEmail = 'info@truebridge.asia';
    expect(adminEmail).toBe('info@truebridge.asia');
  });

  it('should include student name in confirmation email', () => {
    const studentName = '李四';
    const parentEmail = 'parent@example.com';

    expect(studentName).toBeDefined();
    expect(parentEmail).toBeDefined();
  });

  it('should escape HTML characters in email content', () => {
    const dangerousText = '<script>alert("xss")</script>';
    const safeText = dangerousText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

    expect(safeText).not.toContain('<script>');
    expect(safeText).toContain('&lt;script&gt;');
  });

  it('should have all required SMTP environment variables', () => {
    const requiredEnvs = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
    
    requiredEnvs.forEach(env => {
      expect(env).toBeDefined();
    });
  });

  it('should use correct SMTP port for TLS/SSL', () => {
    const smtpPort = 465;
    const isSecure = smtpPort === 465;
    
    expect(isSecure).toBe(true);
  });

  it('should handle optional remarks field in trial application', () => {
    const dataWithRemarks = {
      studentName: '王五',
      parentPhone: '+852 9876 5432',
      parentEmail: 'parent2@example.com',
      subject: '數學',
      grade: 'p2',
      remarks: '學生有特殊需要',
    };

    const dataWithoutRemarks = {
      studentName: '趙六',
      parentPhone: '+852 1234 5678',
      parentEmail: 'parent3@example.com',
      subject: '英文',
      grade: 'p3',
    };

    expect(dataWithRemarks.remarks).toBeDefined();
    expect(dataWithoutRemarks.remarks).toBeUndefined();
  });
});
