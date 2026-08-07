/**
 * 多軌道視頻數據源
 * 包含所有3個短片的多語言版本信息
 */

export interface VideoData {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  poster?: string;
  audioTracks: Array<{
    label: string;
    lang: string;
  }>;
  subtitleTracks: Array<{
    label: string;
    lang: string;
    url: string;
  }>;
  defaultAudioTrack: string;
  defaultSubtitleTrack: string;
}

export const multitrackVideos: VideoData[] = [
  {
    id: 'rightversion',
    title: '一對一個人補習的力量',
    description: '探索一對一私人補習如何創造安全的學習空間，幫助學生充分發展潛力。',
    videoUrl: '/manus-storage/rightversion_final_47754133_c18a032f.mp4',
    audioTracks: [
      { label: '粵語', lang: 'yue' },
      { label: 'English', lang: 'en' },
      { label: '日本語', lang: 'ja' },
      { label: '한국어', lang: 'ko' },
      { label: '普通話', lang: 'zh-CN' },
    ],
    subtitleTracks: [
      { label: '粵語字幕', lang: 'yue', url: '/manus-storage/rightversion_yue_5ec750fd_44680e57.vtt' },
      { label: 'English Subtitles', lang: 'en', url: '/manus-storage/rightversion_en_1c13142d_45579234.vtt' },
      { label: '日本語字幕', lang: 'ja', url: '/manus-storage/rightversion_ja_e967e0e8_f8fde6a9.vtt' },
      { label: '한국어 자막', lang: 'ko', url: '/manus-storage/rightversion_ko_e7ff7629_5d6873fb.vtt' },
      { label: '普通话字幕', lang: 'zh-CN', url: '/manus-storage/rightversion_zh_6b0799a1_c40c80d0.vtt' },
    ],
    defaultAudioTrack: '0', // 粵語
    defaultSubtitleTrack: 'off',
  },
  {
    id: 'final_video',
    title: '遊戲如何幫助兒童發展能力',
    description: '了解遊戲在兒童社交、認知、創意和身體發展中的重要作用。',
    videoUrl: '/manus-storage/game_yue_0694f8a4.mp4',
    audioTracks: [
      { label: '粵語', lang: 'yue' },
      { label: 'English', lang: 'en' },
      { label: '日本語', lang: 'ja' },
      { label: '한국어', lang: 'ko' },
      { label: '普通話', lang: 'zh-CN' },
    ],
    subtitleTracks: [
      { label: '粵語字幕', lang: 'yue', url: '/manus-storage/game_yue_aa427b3c.vtt' },
      { label: 'English Subtitles', lang: 'en', url: '/manus-storage/game_en_1096cab5.vtt' },
      { label: '日本語字幕', lang: 'ja', url: '/manus-storage/game_ja_v2_2cd5f4f9.vtt' },
      { label: '한국어 자막', lang: 'ko', url: '/manus-storage/game_ko_a6763f27.vtt' },
      { label: '普通话字幕', lang: 'zh-CN', url: '/manus-storage/game_zh-CN_5cdab025.vtt' },
    ],
    defaultAudioTrack: '0', // 粵語
    defaultSubtitleTrack: 'off',
  },
  {
    id: 'climate_action',
    title: '氣候行動與可持續和平',
    description: '探討氣候行動如何為全球和平奠定基礎，減少衝突和不穩定。',
    videoUrl: '/manus-storage/climate_action_final_5f21576d_7f9130d1.mp4',
    audioTracks: [
      { label: '粵語', lang: 'yue' },
      { label: 'English', lang: 'en' },
      { label: '日本語', lang: 'ja' },
      { label: '한국어', lang: 'ko' },
      { label: '普通話', lang: 'zh-CN' },
    ],
    subtitleTracks: [
      { label: '粵語字幕', lang: 'yue', url: '/manus-storage/climate_action_yue_536d2955_fec36df5.vtt' },
      { label: 'English Subtitles', lang: 'en', url: '/manus-storage/climate_action_en_98494085_6f06ec55.vtt' },
      { label: '日本語字幕', lang: 'ja', url: '/manus-storage/climate_action_ja_e2ae842b_288f6ba5.vtt' },
      { label: '한국어 자막', lang: 'ko', url: '/manus-storage/climate_action_ko_10017cd9_dd9d9615.vtt' },
      { label: '普通话字幕', lang: 'zh-CN', url: '/manus-storage/climate_action_zh_f226487a_ee49a230.vtt' },
    ],
    defaultAudioTrack: '0', // 粵語
    defaultSubtitleTrack: 'off',
  },
];

/**
 * 根據ID獲取視頻數據
 */
export const getVideoById = (id: string): VideoData | undefined => {
  return multitrackVideos.find((video) => video.id === id);
};

/**
 * 獲取所有視頻
 */
export const getAllVideos = (): VideoData[] => {
  return multitrackVideos;
};
