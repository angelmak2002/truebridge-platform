import { describe, it, expect } from 'vitest';
import { videosWithAudio, getSubtitlesByLanguage } from '../client/src/data/videosWithAudioData';
import { multitrackVideos } from '../client/src/data/multitrackVideosData';

describe('字幕功能測試', () => {
  it('應該為所有視頻和語言提供字幕URL', () => {
    const languages = ['yue', 'en', 'ja', 'ko', 'zh-CN'];
    
    videosWithAudio.forEach(video => {
      languages.forEach(lang => {
        const subtitlesUrl = getSubtitlesByLanguage(video.id, lang);
        expect(subtitlesUrl).toBeDefined();
        expect(subtitlesUrl).toContain('manus-storage');
        expect(subtitlesUrl).toContain('.vtt');
      });
    });
  });

  it('應該為Rightversion提供所有語言的字幕', () => {
    const rightversion = videosWithAudio.find(v => v.id === 'rightversion');
    expect(rightversion).toBeDefined();
    expect(rightversion?.languages['yue'].subtitles).toBeDefined();
    expect(rightversion?.languages['en'].subtitles).toBeDefined();
    expect(rightversion?.languages['ja'].subtitles).toBeDefined();
    expect(rightversion?.languages['ko'].subtitles).toBeDefined();
    expect(rightversion?.languages['zh-CN'].subtitles).toBeDefined();
  });

  it('應該為Final Video (Game)提供所有語言的字幕', () => {
    const game = videosWithAudio.find(v => v.id === 'final_video');
    expect(game).toBeDefined();
    expect(game?.languages['yue'].subtitles).toBeDefined();
    expect(game?.languages['en'].subtitles).toBeDefined();
    expect(game?.languages['ja'].subtitles).toBeDefined();
    expect(game?.languages['ko'].subtitles).toBeDefined();
    expect(game?.languages['zh-CN'].subtitles).toBeDefined();
  });

  it('應該為Climate Action提供所有語言的字幕', () => {
    const climateAction = videosWithAudio.find(v => v.id === 'climate_action');
    expect(climateAction).toBeDefined();
    expect(climateAction?.languages['yue'].subtitles).toBeDefined();
    expect(climateAction?.languages['en'].subtitles).toBeDefined();
    expect(climateAction?.languages['ja'].subtitles).toBeDefined();
    expect(climateAction?.languages['ko'].subtitles).toBeDefined();
    expect(climateAction?.languages['zh-CN'].subtitles).toBeDefined();
  });

  it('字幕URL應該是有效的VTT格式S3路徑', () => {
    videosWithAudio.forEach(video => {
      Object.values(video.languages).forEach(lang => {
        if (lang.subtitles) {
          expect(lang.subtitles).toMatch(/^\/manus-storage\/.*\.vtt$/);
        }
      });
    });
  });

  it('韓文視頻URL應為有效的MP4路徑', () => {
    videosWithAudio.forEach(video => {
      const koUrl = video.languages['ko']?.url;
      expect(koUrl).toBeDefined();
      expect(koUrl).toMatch(/^\/manus-storage\//);
      expect(koUrl).toContain('.mp4');
    });
  });

  it('multitrackVideosData中每個視頻應有5個字幕軌道', () => {
    multitrackVideos.forEach(video => {
      expect(video.subtitleTracks.length).toBe(5);
      expect(video.audioTracks.length).toBe(5);
    });
  });

  it('multitrackVideosData中的videoId應與videosWithAudioData匹配', () => {
    multitrackVideos.forEach(mtVideo => {
      const matchingVideo = videosWithAudio.find(v => v.id === mtVideo.id);
      expect(matchingVideo).toBeDefined();
    });
  });

  it('multitrackVideosData中字幕URL應為有效的VTT格式', () => {
    multitrackVideos.forEach(video => {
      video.subtitleTracks.forEach(track => {
        expect(track.url).toMatch(/^\/manus-storage\/.*\.vtt$/);
        expect(track.label).toBeTruthy();
        expect(track.lang).toBeTruthy();
      });
    });
  });
});
