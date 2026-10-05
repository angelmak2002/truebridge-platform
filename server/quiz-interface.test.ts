import { describe, it, expect } from 'vitest';

// Test the language display logic for QuizInterface
describe('QuizInterface Language Display Logic', () => {
  // Helper function to simulate getDisplayText logic
  const getDisplayText = (
    text: string | Record<string, string>,
    currentLanguage: string,
    subject?: string | Record<string, string>
  ): string => {
    // If text is a string, return it directly
    if (typeof text === 'string') {
      return text;
    }

    // If text is an object (multilingual)
    if (typeof text === 'object' && text !== null) {
      // Check if we should use English for English subjects in Japanese/Korean
      const subjectName = typeof subject === 'string' ? subject : (subject as any)?.[currentLanguage] || '';
      
      if ((currentLanguage === 'ja' || currentLanguage === 'ko') && 
          (subjectName === '英語' || subjectName === '영어' || 
           subjectName === 'English' || subjectName === 'English Math' ||
           subjectName === '英語 数学' || subjectName === '영어 수학')) {
        // For English subjects in Japanese/Korean, use English version
        return text['en'] || text[currentLanguage] || '';
      }
      
      // Otherwise use the current language version
      return text[currentLanguage] || text['en'] || '';
    }

    return '';
  };

  describe('Chinese and Other Subjects in Japanese', () => {
    it('should display Chinese subject in Japanese when language is ja', () => {
      const subject = {
        'zh-HK': 'Chinese',
        'en': 'Chinese',
        'ja': '中国語',
        'ko': '중국어',
        'zh-CN': '中文'
      };

      const question = {
        'zh-HK': 'What is the meaning of this word?',
        'en': 'What is the meaning of this word?',
        'ja': 'この言葉の意味は何ですか？',
        'ko': '이 단어의 의미는 무엇입니까?',
        'zh-CN': '这个词的意思是什么？'
      };

      const result = getDisplayText(question, 'ja', subject);
      expect(result).toBe('この言葉の意味は何ですか？');
    });

    it('should display Chinese subject in Korean when language is ko', () => {
      const subject = {
        'zh-HK': 'Chinese',
        'en': 'Chinese',
        'ja': '中国語',
        'ko': '중국어',
        'zh-CN': '中文'
      };

      const question = {
        'zh-HK': 'What is the meaning of this word?',
        'en': 'What is the meaning of this word?',
        'ja': 'この言葉の意味は何ですか？',
        'ko': '이 단어의 의미는 무엇입니까?',
        'zh-CN': '这个词的意思是什么？'
      };

      const result = getDisplayText(question, 'ko', subject);
      expect(result).toBe('이 단어의 의미는 무엇입니까?');
    });
  });

  describe('English Subject in Japanese', () => {
    it('should display English question in English when subject is English and language is ja', () => {
      const subject = {
        'zh-HK': 'English',
        'en': 'English',
        'ja': '英語',
        'ko': '영어',
        'zh-CN': '英语'
      };

      const question = {
        'zh-HK': 'By the time you arrive, I _____ finished my homework.',
        'en': 'By the time you arrive, I _____ finished my homework.',
        'ja': 'あなたが到着するまでに、私は宿題を終えているだろう。',
        'ko': '당신이 도착할 때쯤이면, 나는 숙제를 끝냈을 것이다.',
        'zh-CN': '等你到达时，我将会完成我的作业。'
      };

      const result = getDisplayText(question, 'ja', subject);
      expect(result).toBe('By the time you arrive, I _____ finished my homework.');
    });

    it('should display English option in English when subject is English and language is ja', () => {
      const subject = {
        'zh-HK': 'English',
        'en': 'English',
        'ja': '英語',
        'ko': '영어',
        'zh-CN': '英语'
      };

      const option = {
        'zh-HK': 'A. will finish',
        'en': 'A. will finish',
        'ja': 'A. 終えるだろう',
        'ko': 'A. 끝낼 것이다',
        'zh-CN': 'A. 将会完成'
      };

      const result = getDisplayText(option, 'ja', subject);
      expect(result).toBe('A. will finish');
    });
  });

  describe('English Subject in Korean', () => {
    it('should display English question in English when subject is English and language is ko', () => {
      const subject = {
        'zh-HK': 'English',
        'en': 'English',
        'ja': '英語',
        'ko': '영어',
        'zh-CN': '英语'
      };

      const question = {
        'zh-HK': 'By the time you arrive, I _____ finished my homework.',
        'en': 'By the time you arrive, I _____ finished my homework.',
        'ja': 'あなたが到着するまでに、私は宿題を終えているだろう。',
        'ko': '당신이 도착할 때쯤이면, 나는 숙제를 끝냈을 것이다.',
        'zh-CN': '等你到达时，我将会完成我的作业。'
      };

      const result = getDisplayText(question, 'ko', subject);
      expect(result).toBe('By the time you arrive, I _____ finished my homework.');
    });

    it('should display English option in English when subject is English and language is ko', () => {
      const subject = {
        'zh-HK': 'English',
        'en': 'English',
        'ja': '英語',
        'ko': '영어',
        'zh-CN': '英语'
      };

      const option = {
        'zh-HK': 'B. will have finished',
        'en': 'B. will have finished',
        'ja': 'B. 終えているだろう',
        'ko': 'B. 끝냈을 것이다',
        'zh-CN': 'B. 将会已经完成'
      };

      const result = getDisplayText(option, 'ko', subject);
      expect(result).toBe('B. will have finished');
    });
  });

  describe('English Math Subject', () => {
    it('should display English Math question in English when language is ja', () => {
      const subject = {
        'zh-HK': 'English Mathematics',
        'en': 'English Mathematics',
        'ja': '英語 数学',
        'ko': '영어 수학',
        'zh-CN': '英文数学'
      };

      const question = {
        'zh-HK': 'Solve for x: 2x + 5 = 15',
        'en': 'Solve for x: 2x + 5 = 15',
        'ja': 'xを求めよ：2x + 5 = 15',
        'ko': 'x를 구하시오: 2x + 5 = 15',
        'zh-CN': '求解x: 2x + 5 = 15'
      };

      const result = getDisplayText(question, 'ja', subject);
      expect(result).toBe('Solve for x: 2x + 5 = 15');
    });

    it('should display English Math question in English when language is ko', () => {
      const subject = {
        'zh-HK': 'English Math',
        'en': 'English Math',
        'ja': '英語 数学',
        'ko': '영어 수학',
        'zh-CN': '英文数学'
      };

      const question = {
        'zh-HK': 'Calculate: 10 × 5 ÷ 2',
        'en': 'Calculate: 10 × 5 ÷ 2',
        'ja': '計算する：10 × 5 ÷ 2',
        'ko': '계산하시오: 10 × 5 ÷ 2',
        'zh-CN': '计算: 10 × 5 ÷ 2'
      };

      const result = getDisplayText(question, 'ko', subject);
      expect(result).toBe('Calculate: 10 × 5 ÷ 2');
    });
  });

  describe('String Input Handling', () => {
    it('should return string directly if text is already a string', () => {
      const result = getDisplayText('This is a plain string', 'ja');
      expect(result).toBe('This is a plain string');
    });

    it('should handle string text regardless of language', () => {
      const result = getDisplayText('Plain text question', 'ko');
      expect(result).toBe('Plain text question');
    });
  });

  describe('English in English Language Mode', () => {
    it('should display English question in English when language is en', () => {
      const subject = {
        'zh-HK': 'English',
        'en': 'English',
        'ja': '英語',
        'ko': '영어',
        'zh-CN': '英语'
      };

      const question = {
        'zh-HK': 'By the time you arrive, I _____ finished my homework.',
        'en': 'By the time you arrive, I _____ finished my homework.',
        'ja': 'あなたが到着するまでに、私は宿題を終えているだろう。',
        'ko': '당신が到着するまでに、私は宿題を終えているだろう。',
        'zh-CN': '等你到达时，我将会完成我的作业。'
      };

      const result = getDisplayText(question, 'en', subject);
      expect(result).toBe('By the time you arrive, I _____ finished my homework.');
    });
  });
});
