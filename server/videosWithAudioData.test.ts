import { describe, it, expect } from 'vitest';
import { videosWithAudio, getVideoByLanguage } from './videosWithAudioData';

describe('videosWithAudioData', () => {
  it('should have 3 videos', () => {
    expect(videosWithAudio).toHaveLength(3);
  });

  it('should have all required video properties', () => {
    videosWithAudio.forEach(video => {
      expect(video).toHaveProperty('id');
      expect(video).toHaveProperty('title');
      expect(video).toHaveProperty('description');
      expect(video).toHaveProperty('duration');
      expect(video).toHaveProperty('languages');
    });
  });

  it('should have 5 languages for each video', () => {
    videosWithAudio.forEach(video => {
      expect(Object.keys(video.languages)).toHaveLength(5);
    });
  });

  it('should have correct language codes', () => {
    const expectedLanguages = ['yue', 'en', 'ja', 'ko', 'zh-CN'];
    videosWithAudio.forEach(video => {
      const videoLanguages = Object.keys(video.languages);
      expectedLanguages.forEach(lang => {
        expect(videoLanguages).toContain(lang);
      });
    });
  });

  it('should have valid URLs for all language versions', () => {
    videosWithAudio.forEach(video => {
      Object.entries(video.languages).forEach(([lang, data]) => {
        expect(data.url).toMatch(/^\/manus-storage\//);
        expect(data.url).toContain('.mp4');
      });
    });
  });

  it('getVideoByLanguage should return a valid URL for English', () => {
    const url = getVideoByLanguage('rightversion', 'en');
    expect(url).toBeTruthy();
    expect(url).toMatch(/^\/manus-storage\//);
    expect(url).toContain('.mp4');
  });

  it('getVideoByLanguage should return null for non-existent video', () => {
    const url = getVideoByLanguage('non-existent', 'en');
    expect(url).toBeNull();
  });

  it('getVideoByLanguage should fall back to yue or en if language not found', () => {
    const url = getVideoByLanguage('rightversion', 'non-existent-lang');
    // Falls back to yue first, then en
    expect(url).toBeTruthy();
    expect(url).toMatch(/^\/manus-storage\//);
  });

  it('should have correct video IDs', () => {
    const videoIds = videosWithAudio.map(v => v.id);
    expect(videoIds).toContain('rightversion');
    expect(videoIds).toContain('final_video');
    expect(videoIds).toContain('climate_action');
  });

  it('should have positive duration for all videos', () => {
    videosWithAudio.forEach(video => {
      expect(video.duration).toBeGreaterThan(0);
    });
  });

  it('should have subtitle URLs for all language versions', () => {
    videosWithAudio.forEach(video => {
      Object.entries(video.languages).forEach(([lang, data]) => {
        expect(data.subtitles).toBeDefined();
        expect(data.subtitles).toMatch(/^\/manus-storage\//);
        expect(data.subtitles).toContain('.vtt');
      });
    });
  });
});
