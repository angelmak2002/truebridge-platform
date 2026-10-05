import type { Language } from './translations';

export interface TranslatedText {
  'zh-HK': string;
  'zh-CN': string;
  'en': string;
  'ja': string;
  'ko': string;
}

export interface Testimonial {
  name: TranslatedText;
  comment: TranslatedText;
}

export interface FAQ {
  id: number;
  question: TranslatedText;
  answer: TranslatedText;
}

export const testimonialsData: Testimonial[] = [
  {
    name: {
      'zh-HK': '李媽媽',
      'zh-CN': '李妈妈',
      'en': 'Mrs. Lee',
      'ja': 'リーさん',
      'ko': '이 엄마'
    },
    comment: {
      'zh-HK': '我的孩子在澤橋補習後，成績進步了很多，特別是數學。導師很耐心，孩子也很喜歡上課。',
      'zh-CN': '我的孩子在澳门网上补习平台补习后，成绩进步了很多，特别是数学。导师很耐心，孩子也很喜欢上课。',
      'en': 'My child\'s grades have improved significantly after tutoring with TrueBridge, especially in Math. The tutor is very patient and my child enjoys the lessons.',
      'ja': '私の子どもはTrueBridgeで補習を受けた後、特に数学の成績が大幅に向上しました。講師はとても忍耐強く、子どもも授業を楽しんでいます。',
      'ko': '제 자녀는 TrueBridge에서 과외를 받은 후 특히 수학 성적이 크게 향상되었습니다. 강사는 매우 인내심이 있고 자녀도 수업을 즐기고 있습니다.'
    }
  },
  {
    name: {
      'zh-HK': '王爸爸',
      'zh-CN': '王爸爸',
      'en': 'Mr. Wang',
      'ja': 'ワンさん',
      'ko': '왕 아빠'
    },
    comment: {
      'zh-HK': '線上補習很方便，不用接送。導師的教學方法很有趣，孩子主動做功課了。',
      'zh-CN': '在线补习很方便，不用接送。导师的教学方法很有趣，孩子主动做功课了。',
      'en': 'Online tutoring is very convenient, no need for transportation. The tutor\'s teaching methods are interesting, and my child now actively does homework.',
      'ja': 'オンライン補習は非常に便利で、送迎が不要です。講師の教え方は興味深く、子どもは自主的に宿題をするようになりました。',
      'ko': '온라인 과외는 매우 편리하고 송영이 필요 없습니다. 강사의 교수법이 재미있어서 자녀가 자발적으로 숙제를 하고 있습니다.'
    }
  },
  {
    name: {
      'zh-HK': '陳媽媽',
      'zh-CN': '陈妈妈',
      'en': 'Mrs. Chen',
      'ja': 'チェンさん',
      'ko': '진 엄마'
    },
    comment: {
      'zh-HK': '普通話課程很實用，孩子的發音改善了很多。導師很專業，推薦給朋友。',
      'zh-CN': '普通话课程很实用，孩子的发音改善了很多。导师很专业，推荐给朋友。',
      'en': 'The Mandarin course is very practical and my child\'s pronunciation has improved significantly. The tutor is very professional and I recommend it to friends.',
      'ja': '普通話のコースは非常に実用的で、子どもの発音が大幅に改善されました。講師はとても専門的で、友人に勧めています。',
      'ko': '만다린 과정은 매우 실용적이고 자녀의 발음이 크게 개선되었습니다. 강사는 매우 전문적이고 친구들에게 추천하고 있습니다.'
    }
  },
  {
    name: {
      'zh-HK': '黃爸爸',
      'zh-CN': '黄爸爸',
      'en': 'Mr. Huang',
      'ja': 'ファンさん',
      'ko': '황 아빠'
    },
    comment: {
      'zh-HK': '一對一教學效果確實很好，孩子的學習進度很快。值得推薦！',
      'zh-CN': '一对一教学效果确实很好，孩子的学习进度很快。值得推荐！',
      'en': 'One-on-one tutoring is indeed very effective, and my child\'s learning progress is rapid. Highly recommended!',
      'ja': 'マンツーマン指導は本当に効果的で、子どもの学習進度は速いです。強くお勧めします！',
      'ko': '일대일 과외는 정말 효과적이고 자녀의 학습 진도가 빠릅니다. 강력히 추천합니다!'
    }
  }
];

export const faqData: FAQ[] = [
  {
    id: 1,
    question: {
      'zh-HK': 'TrueBridge 的課程適合哪些學生？',
      'zh-CN': 'TrueBridge 的课程适合哪些学生？',
      'en': 'Which students are suitable for TrueBridge courses?',
      'ja': 'TrueBridgeのコースはどの学生に適していますか？',
      'ko': 'TrueBridge 과정은 어떤 학생에게 적합합니까?'
    },
    answer: {
      'zh-HK': '我們的課程適合所有年級的學生，從小學到高中。無論您的孩子是想要提高成績、準備考試，還是想要深入學習某個科目，我們都有相應的課程。',
      'zh-CN': '我们的课程适合所有年级的学生，从小学到高中。无论您的孩子是想要提高成绩、准备考试，还是想要深入学习某个科目，我们都有相应的课程。',
      'en': 'Our courses are suitable for students of all grades, from primary school to high school. Whether your child wants to improve grades, prepare for exams, or study a subject in depth, we have corresponding courses.',
      'ja': '当社のコースはすべての学年の生徒に適しており、小学校から高校までです。お子さんが成績を向上させたい、試験に備えたい、または科目を深く学びたい場合でも、対応するコースがあります。',
      'ko': '당사의 과정은 초등학교부터 고등학교까지 모든 학년의 학생에게 적합합니다. 자녀가 성적을 향상시키거나 시험을 준비하거나 과목을 깊이 있게 학습하려는 경우 해당 과정이 있습니다.'
    }
  },
  {
    id: 2,
    question: {
      'zh-HK': '如何開始免費試堂？',
      'zh-CN': '如何开始免费试堂？',
      'en': 'How do I start a free trial class?',
      'ja': '無料体験授業を始めるにはどうすればよいですか？',
      'ko': '무료 체험 수업을 시작하려면 어떻게 해야 합니까?'
    },
    answer: {
      'zh-HK': '點擊「即刻搶免費試堂」按鈕，填寫簡單的表格，我們的顧問會在 24 小時內聯絡您安排試堂。',
      'zh-CN': '点击"立即抢免费试堂"按钮，填写简单的表格，我们的顾问会在 24 小时内联系您安排试堂。',
      'en': 'Click the "Get Free Trial Class Now" button, fill out a simple form, and our consultant will contact you within 24 hours to schedule the trial class.',
      'ja': '「今すぐ無料体験授業を取得」ボタンをクリックし、簡単なフォームに入力してください。当社のコンサルタントが24時間以内にご連絡して、体験授業をスケジュールします。',
      'ko': '"지금 무료 체험 수업 받기" 버튼을 클릭하고 간단한 양식을 작성하세요. 당사의 컨설턴트가 24시간 이내에 연락하여 체험 수업을 예약해 드립니다.'
    }
  },
  {
    id: 3,
    question: {
      'zh-HK': '試堂是完全免費的嗎？',
      'zh-CN': '试堂是完全免费的吗？',
      'en': 'Is the trial class completely free?',
      'ja': '体験授業は完全に無料ですか？',
      'ko': '체험 수업은 완전히 무료입니까?'
    },
    answer: {
      'zh-HK': '是的，免費試堂完全免費，無需任何費用。這是您了解我們教學方式和師資的最好機會。',
      'zh-CN': '是的，免费试堂完全免费，无需任何费用。这是您了解我们教学方式和师资的最好机会。',
      'en': 'Yes, the free trial class is completely free with no charges. This is the best opportunity for you to understand our teaching methods and faculty.',
      'ja': 'はい、無料体験授業は完全に無料で、料金はかかりません。これは当社の教授方法と教員について理解する最良の機会です。',
      'ko': '예, 무료 체험 수업은 완전히 무료이며 요금이 없습니다. 이것은 당사의 교수법과 교원에 대해 이해할 수 있는 최고의 기회입니다.'
    }
  },
  {
    id: 4,
    question: {
      'zh-HK': '課程可以如何進行？',
      'zh-CN': '课程可以如何进行？',
      'en': 'How can the courses be conducted?',
      'ja': 'コースはどのように実施できますか？',
      'ko': '과정은 어떻게 진행됩니까?'
    },
    answer: {
      'zh-HK': '我們提供 100% 網上私教，學生可以在家舒適地上課。我們使用專業的線上教學平台，確保最佳的學習體驗。',
      'zh-CN': '我们提供 100% 在线私教，学生可以在家舒适地上课。我们使用专业的在线教学平台，确保最佳的学习体验。',
      'en': 'We provide 100% online private tutoring, allowing students to study comfortably at home. We use professional online teaching platforms to ensure the best learning experience.',
      'ja': '当社は100%オンラインプライベートレッスンを提供し、学生は家で快適に勉強できます。当社は専門的なオンライン教育プラットフォームを使用して、最高の学習体験を確保します。',
      'ko': '당사는 100% 온라인 개인 과외를 제공하여 학생들이 집에서 편안하게 공부할 수 있습니다. 당사는 전문적인 온라인 교육 플랫폼을 사용하여 최고의 학습 경험을 보장합니다.'
    }
  },
  {
    id: 5,
    question: {
      'zh-HK': '導師都有什麼資格？',
      'zh-CN': '导师都有什么资格？',
      'en': 'What qualifications do the tutors have?',
      'ja': '講師はどのような資格を持っていますか？',
      'ko': '강사는 어떤 자격을 가지고 있습니까?'
    },
    answer: {
      'zh-HK': '所有導師都經過嚴格審核和認證。他們都擁有相關學位和豐富的教學經驗。您可以在我們的網站上查看每位導師的完整履歷。',
      'zh-CN': '所有导师都经过严格审核和认证。他们都拥有相关学位和丰富的教学经验。您可以在我们的网站上查看每位导师的完整履历。',
      'en': 'All tutors are strictly vetted and certified. They all have relevant degrees and extensive teaching experience. You can view each tutor\'s complete profile on our website.',
      'ja': 'すべての講師は厳密に審査および認定されています。彼らはすべて関連する学位と豊富な教授経験を持っています。当社のウェブサイトで各講師の完全なプロフィールを表示できます。',
      'ko': '모든 강사는 엄격하게 검증되고 인증됩니다. 그들은 모두 관련 학위와 풍부한 교수 경험을 가지고 있습니다. 당사 웹사이트에서 각 강사의 완전한 프로필을 볼 수 있습니다.'
    }
  },
  {
    id: 6,
    question: {
      'zh-HK': '課程費用是多少？',
      'zh-CN': '课程费用是多少？',
      'en': 'How much do the courses cost?',
      'ja': 'コースの費用はいくらですか？',
      'ko': '과정 비용은 얼마입니까?'
    },
    answer: {
      'zh-HK': '課程費用根據科目、年級和課程長度而異。我們提供靈活的定價方案，以滿足不同家庭的需求。請聯絡我們的顧問了解詳細信息。',
      'zh-CN': '课程费用根据科目、年级和课程长度而异。我们提供灵活的定价方案，以满足不同家庭的需求。请联系我们的顾问了解详细信息。',
      'en': 'Course fees vary depending on the subject, grade, and course duration. We offer flexible pricing plans to meet the needs of different families. Please contact our consultant for more information.',
      'ja': 'コース料金は、科目、学年、コース期間によって異なります。当社は、異なる家族のニーズを満たすための柔軟な価格設定プランを提供しています。詳細については、当社のコンサルタントにお問い合わせください。',
      'ko': '과정 비용은 과목, 학년 및 과정 기간에 따라 다릅니다. 당사는 다양한 가족의 필요를 충족하기 위해 유연한 가격 책정 계획을 제공합니다. 자세한 정보는 당사의 컨설턴트에게 문의하세요.'
    }
  },
  {
    id: 7,
    question: {
      'zh-HK': '可以更換導師嗎？',
      'zh-CN': '可以更换导师吗？',
      'en': 'Can I change tutors?',
      'ja': '講師を変更できますか？',
      'ko': '강사를 바꿀 수 있습니까?'
    },
    answer: {
      'zh-HK': '當然可以。如果您對導師不滿意，我們可以幫您更換。我們致力於為每位學生找到最合適的導師。',
      'zh-CN': '当然可以。如果您对导师不满意，我们可以帮您更换。我们致力于为每位学生找到最合适的导师。',
      'en': 'Of course. If you are not satisfied with your tutor, we can help you change. We are committed to finding the most suitable tutor for each student.',
      'ja': 'もちろんです。講師に満足していない場合は、変更をお手伝いします。当社は、各学生に最適な講師を見つけることに取り組んでいます。',
      'ko': '물론입니다. 강사에 만족하지 않으시면 변경을 도와드립니다. 당사는 각 학생에게 가장 적합한 강사를 찾는 데 최선을 다하고 있습니다.'
    }
  },
  {
    id: 8,
    question: {
      'zh-HK': '如何聯絡客服？',
      'zh-CN': '如何联系客服？',
      'en': 'How do I contact customer service?',
      'ja': 'カスタマーサービスにはどのように連絡しますか？',
      'ko': '고객 서비스에 어떻게 연락합니까?'
    },
    answer: {
      'zh-HK': '您可以透過 WhatsApp Business、WeChat 或電郵聯絡我們。我們的客服團隊 24/7 為您服務。',
      'zh-CN': '您可以通过 WhatsApp Business、WeChat 或电邮联系我们。我们的客服团队 24/7 为您服务。',
      'en': 'You can contact us via WhatsApp Business, WeChat, or email. Our customer service team is available 24/7 to serve you.',
      'ja': 'WhatsApp Business、WeChat、またはメールでお問い合わせください。当社のカスタマーサービスチームは24/7であなたにサービスを提供しています。',
      'ko': 'WhatsApp Business, WeChat 또는 이메일을 통해 문의하세요. 당사의 고객 서비스 팀이 24/7 서비스를 제공합니다.'
    }
  }
];

export const testimonialsSectionText: TranslatedText = {
  'zh-HK': '家長心聲',
  'zh-CN': '家长心声',
  'en': 'Parent Testimonials',
  'ja': '親の声',
  'ko': '학부모 후기'
};

export const faqSectionText: TranslatedText = {
  'zh-HK': '常見問題',
  'zh-CN': '常见问题',
  'en': 'Frequently Asked Questions',
  'ja': 'よくある質問',
  'ko': '자주 묻는 질문'
};

export const faqSubtitleText: TranslatedText = {
  'zh-HK': '找不到答案？歡迎聯絡我們的顧問',
  'zh-CN': '找不到答案？欢迎联系我们的顾问',
  'en': 'Can\'t find an answer? Feel free to contact our consultant',
  'ja': '答えが見つかりませんか？当社のコンサルタントにお気軽にお問い合わせください',
  'ko': '답변을 찾을 수 없으신가요? 당사의 컨설턴트에게 문의하세요'
};

export const faqContactText: TranslatedText = {
  'zh-HK': '仍有疑問？',
  'zh-CN': '仍有疑问？',
  'en': 'Still have questions?',
  'ja': 'まだ質問がありますか？',
  'ko': '여전히 질문이 있으신가요?'
};

export const faqContactDescriptionText: TranslatedText = {
  'zh-HK': '請透過 WhatsApp Business 或 WeChat 聯絡我們，我們很樂意為您解答。',
  'zh-CN': '请通过 WhatsApp Business 或 WeChat 联系我们，我们很乐意为您解答。',
  'en': 'Please contact us via WhatsApp Business or WeChat, we are happy to answer your questions.',
  'ja': 'WhatsApp BusinessまたはWeChatでお問い合わせください。ご質問にお答えします。',
  'ko': 'WhatsApp Business 또는 WeChat을 통해 문의하세요. 기꺼이 답변해 드리겠습니다.'
};

export const faqWhatsAppHintText: TranslatedText = {
  'zh-HK': '請使用 WhatsApp Business 應用程式聯絡，以確保訊息直接送達',
  'zh-CN': '请使用 WhatsApp Business 应用程序联系，以确保消息直接送达',
  'en': 'Please use the WhatsApp Business app to ensure your message reaches us directly',
  'ja': 'メッセージが確実に届くよう、WhatsApp Businessアプリをご利用ください',
  'ko': '메시지가 직접 전달되도록 WhatsApp Business 앱을 사용해 주세요'
};
