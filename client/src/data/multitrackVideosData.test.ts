import { describe, it, expect } from 'vitest';
import { multitrackVideos, getVideoById, getAllVideos } from './multitrackVideosData';

describe('multitrackVideosData', () => {
  describe('multitrackVideos array', () => {
    it('should have 3 videos', () => {
      expect(multitrackVideos).toHaveLength(3);
    });

    it('should have correct video IDs', () => {
      const ids = multitrackVideos.map((v) => v.id);
      expect(ids).toEqual(['rightversion', 'final_video', 'climate_action']);
    });

    it('each video should have required properties', () => {
      multitrackVideos.forEach((video) => {
        expect(video).toHaveProperty('id');
        expect(video).toHaveProperty('title');
        expect(video).toHaveProperty('description');
        expect(video).toHaveProperty('videoUrl');
        expect(video).toHaveProperty('audioTracks');
        expect(video).toHaveProperty('subtitleTracks');
        expect(video).toHaveProperty('defaultAudioTrack');
        expect(video).toHaveProperty('defaultSubtitleTrack');
      });
    });

    it('each video should have 5 audio tracks', () => {
      multitrackVideos.forEach((video) => {
        expect(video.audioTracks).toHaveLength(5);
      });
    });

    it('each video should have correct audio track languages', () => {
      multitrackVideos.forEach((video) => {
        const langs = video.audioTracks.map((t) => t.lang);
        expect(langs).toEqual(['yue', 'en', 'ja', 'ko', 'zh-CN']);
      });
    });

    it('each video should have subtitle tracks', () => {
      multitrackVideos.forEach((video) => {
        expect(video.subtitleTracks.length).toBeGreaterThan(0);
      });
    });

    it('video URLs should be valid storage paths', () => {
      multitrackVideos.forEach((video) => {
        expect(video.videoUrl).toMatch(/^\/manus-storage\//);
        expect(video.videoUrl).toMatch(/\.mp4$/);
      });
    });
  });

  describe('getVideoById', () => {
    it('should return video by ID', () => {
      const video = getVideoById('rightversion');
      expect(video).toBeDefined();
      expect(video?.id).toBe('rightversion');
      expect(video?.title).toBe('一對一個人補習的力量');
    });

    it('should return undefined for invalid ID', () => {
      const video = getVideoById('invalid-id');
      expect(video).toBeUndefined();
    });

    it('should return all three videos by their IDs', () => {
      const ids = ['rightversion', 'final_video', 'climate_action'];
      ids.forEach((id) => {
        const video = getVideoById(id);
        expect(video).toBeDefined();
        expect(video?.id).toBe(id);
      });
    });
  });

  describe('getAllVideos', () => {
    it('should return all videos', () => {
      const videos = getAllVideos();
      expect(videos).toHaveLength(3);
    });

    it('should return videos in correct order', () => {
      const videos = getAllVideos();
      expect(videos[0].id).toBe('rightversion');
      expect(videos[1].id).toBe('final_video');
      expect(videos[2].id).toBe('climate_action');
    });

    it('should return a copy of the array', () => {
      const videos1 = getAllVideos();
      const videos2 = getAllVideos();
      expect(videos1).toEqual(videos2);
    });
  });

  describe('Audio tracks', () => {
    it('should have correct audio track labels', () => {
      const video = multitrackVideos[0];
      const labels = video.audioTracks.map((t) => t.label);
      expect(labels).toContain('粵語');
      expect(labels).toContain('English');
      expect(labels).toContain('日本語');
      expect(labels).toContain('한국어');
      expect(labels).toContain('普通話');
    });
  });

  describe('Subtitle tracks', () => {
    it('should have correct subtitle track labels', () => {
      const video = multitrackVideos[0];
      const labels = video.subtitleTracks.map((t) => t.label);
      expect(labels).toContain('粵語字幕');
      expect(labels).toContain('English Subtitles');
    });

    it('should have correct subtitle languages', () => {
      const video = multitrackVideos[0];
      const langs = video.subtitleTracks.map((t) => t.lang);
      expect(langs).toContain('yue');
      expect(langs).toContain('en');
    });
  });

  describe('Default tracks', () => {
    it('should have valid default audio track indices', () => {
      multitrackVideos.forEach((video) => {
        const index = parseInt(video.defaultAudioTrack);
        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThan(video.audioTracks.length);
      });
    });

    it('should have valid default subtitle track value', () => {
      multitrackVideos.forEach((video) => {
        expect(video.defaultSubtitleTrack).toBe('off');
      });
    });
  });
});
