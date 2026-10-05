/**
 * 多語言視頻數據源 - 包含完整配音的視頻
 */

export interface VideoWithAudio {
  id: string;
  title: string;
  description: string;
  duration: number;
  languages: {
    [key: string]: {
      name: string;
      url: string;
      subtitles?: string;
    };
  };
}

export const videosWithAudio: VideoWithAudio[] = [
  {
    id: 'rightversion',
    title: 'One-on-One Personal Tutoring',
    description: 'The Power of Personalized Education',
    duration: 130,
    languages: {
      'yue': {
        name: '粵語',
        url: '/manus-storage/rightversion_yue_4fa64e91_33b84d09.mp4',
        subtitles: '/manus-storage/rightversion_yue_5ec750fd_44680e57.vtt'
      },
      'en': {
        name: 'English',
        url: '/manus-storage/rightversion_en_22fe191e_763a1b0f.mp4',
        subtitles: '/manus-storage/rightversion_en_1c13142d_45579234.vtt'
      },
      'ja': {
        name: '日本語',
        url: '/manus-storage/rightversion_ja_b0bef7b8_1cef7985.mp4',
        subtitles: '/manus-storage/rightversion_ja_e967e0e8_f8fde6a9.vtt'
      },
      'ko': {
        name: '한국어',
        url: '/manus-storage/rightversion_ko_female_a541729b_7f82110f.mp4',
        subtitles: '/manus-storage/rightversion_ko_e7ff7629_5d6873fb.vtt'
      },
      'zh-CN': {
        name: '普通话',
        url: '/manus-storage/rightversion_zh_0b296a36_f840ef29.mp4',
        subtitles: '/manus-storage/rightversion_zh_6b0799a1_c40c80d0.vtt'
      }
    }
  },
  {
    id: 'final_video',
    title: 'Why Games Captivate Children',
    description: 'Understanding the Psychology of Engagement',
    duration: 773,
    languages: {
      'yue': {
        name: '粵語',
        url: '/manus-storage/game_yue_0694f8a4.mp4',
        subtitles: '/manus-storage/game_yue_aa427b3c.vtt'
      },
      'en': {
        name: 'English',
        url: '/manus-storage/game_en_female_3c52af4e.mp4',
        subtitles: '/manus-storage/game_en_1096cab5.vtt'
      },
      'ja': {
        name: '日本語',
        url: '/manus-storage/game_ja_female_6f94d721.mp4',
        subtitles: '/manus-storage/game_ja_v2_2cd5f4f9.vtt'
      },
      'ko': {
        name: '한국어',
        url: '/manus-storage/game_ko_female_14eba955.mp4',
        subtitles: '/manus-storage/game_ko_a6763f27.vtt'
      },
      'zh-CN': {
        name: '普通话',
        url: '/manus-storage/game_zh-CN_female_e4f7a344.mp4',
        subtitles: '/manus-storage/game_zh-CN_5cdab025.vtt'
      }
    }
  },
  {
    id: 'climate_action',
    title: 'Sustaining Peace for Future Generations',
    description: 'Climate Action and Global Responsibility',
    duration: 158,
    languages: {
      'yue': {
        name: '粵語',
        url: '/manus-storage/climate_yue_edge_f3f4584f_8a9d161a.mp4',
        subtitles: '/manus-storage/climate_action_yue_be3ccb38_e3076333.vtt'
      },
      'en': {
        name: 'English',
        url: '/manus-storage/1000059816_c6f165d6_0714b5b0.mp4',
        subtitles: '/manus-storage/climate_action_en_c5a7ee88_9279d90a.vtt'
      },
      'ja': {
        name: '日本語',
        url: '/manus-storage/climate_action_ja_d450a441_2b0cd08d.mp4',
        subtitles: '/manus-storage/climate_action_ja_c1701560_b70c0882.vtt'
      },
      'ko': {
        name: '한국어',
        url: '/manus-storage/climate_ko_female_edge_ba63cab1_e3b393b0.mp4',
        subtitles: '/manus-storage/climate_action_ko_f4d8501e_a048ba90.vtt'
      },
      'zh-CN': {
        name: '普通话',
        url: '/manus-storage/climate_action_zh_d44eb640_e7f4e009.mp4',
        subtitles: '/manus-storage/climate_action_zh_4f3195e7_992e5047.vtt'
      }
    }
  }
];

// 語言映射：將全局語言代碼映射到視頻數據中的語言鍵值
const LANGUAGE_MAP: Record<string, string> = {
  'zh-HK': 'yue',   // 繁體中文 → 粵語
  'zh-CN': 'zh-CN', // 簡體中文 → 普通話
  'en': 'en',
  'ja': 'ja',
  'ko': 'ko',
  'yue': 'yue',
};

export function getVideoByLanguage(videoId: string, language: string): string | null {
  const video = videosWithAudio.find(v => v.id === videoId);
  if (!video) return null;
  const mappedLang = LANGUAGE_MAP[language] || language;
  return video.languages[mappedLang]?.url || video.languages['yue']?.url || video.languages['en']?.url || null;
}

export function getSubtitlesByLanguage(videoId: string, language: string): string | null {
  const video = videosWithAudio.find(v => v.id === videoId);
  if (!video) return null;
  const mappedLang = LANGUAGE_MAP[language] || language;
  return video.languages[mappedLang]?.subtitles || null;
}
