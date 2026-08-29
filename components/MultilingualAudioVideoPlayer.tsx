import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { videosWithAudio, getVideoByLanguage, getSubtitlesByLanguage } from './data/videosWithAudioData';

interface MultilingualAudioVideoPlayerProps {
  videoId: string;
}

export const MultilingualAudioVideoPlayer: React.FC<MultilingualAudioVideoPlayerProps> = ({ videoId }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [subtitleBlobUrl, setSubtitleBlobUrl] = useState<string | null>(null);

  const video = videosWithAudio.find(v => v.id === videoId);

  // ä½¿ç”¨fetch? è?å­—å??‡ä»¶ä¸¦å‰µå»ºBlob URLä»¥é¿?CORS?é?
  const loadSubtitles = useCallback(async (lang: string) => {
    // æ¸…é™¤?Šç?Blob URL
    if (subtitleBlobUrl) {
      URL.revokeObjectURL(subtitleBlobUrl);
      setSubtitleBlobUrl(null);
    }

    const subtitlesUrl = getSubtitlesByLanguage(videoId, lang);
    if (!subtitlesUrl) return;

    try {
      const response = await fetch(subtitlesUrl);
      if (!response.ok) throw new Error(`Failed to fetch subtitles: ${response.status}`);
      const text = await response.text();
      
      // ç¢ºä??¯VTT?¼å?
      let vttContent = text;
      if (!text.startsWith('WEBVTT')) {
        // å¦‚æ??¯SRT?¼å?ï¼Œè??›ç‚ºVTT
        vttContent = 'WEBVTT\n\n' + text.replace(/(\d+)\n(\d{2}:\d{2}:\d{2}),(\d{3}) --> (\d{2}:\d{2}:\d{2}),(\d{3})/g, '$1\n$2.$3 --> $4.$5');
      }
      
      const blob = new Blob([vttContent], { type: 'text/vtt' });
      const blobUrl = URL.createObjectURL(blob);
      setSubtitleBlobUrl(blobUrl);
    } catch (err) {
      console.error('å­—å?? è?å¤±æ?:', err);
    }
  }, [videoId, subtitleBlobUrl]);

  // ?¶è?è¨€?¹è??‚ï?? è?å°æ?å­—å?
  useEffect(() => {
    loadSubtitles(language);
  }, [language, videoId]);

  // ?¶å?å¹•Blob URL?´æ–°?‚ï?è¨­ç½®track?„mode
  useEffect(() => {
    if (videoRef.current && videoRef.current.textTracks.length > 0) {
      for (let i = 0; i < videoRef.current.textTracks.length; i++) {
        videoRef.current.textTracks[i].mode = showSubtitles ? 'showing' : 'hidden';
      }
    }
  }, [subtitleBlobUrl, showSubtitles]);

  // ?¶å…¨å±€èªžè??¹è??‚ï??´æ–°è¦–é »èªžè?
  useEffect(() => {
    setCurrentLanguage(language);

    if (videoRef.current) {
      const savedTime = currentTime;
      const videoUrl = getVideoByLanguage(videoId, language);

      if (videoUrl && videoRef.current.src !== window.location.origin + videoUrl) {
        videoRef.current.src = videoUrl;
        videoRef.current.currentTime = savedTime;

        if (isPlaying) {
          videoRef.current.play().catch(err => console.error('?­æ”¾?ºéŒ¯:', err));
        }
      }
    }
  }, [language, videoId]);

  // æ¸…ç?Blob URL
  useEffect(() => {
    return () => {
      if (subtitleBlobUrl) {
        URL.revokeObjectURL(subtitleBlobUrl);
      }
    };
  }, [subtitleBlobUrl]);

  if (!video) {
    return <div className="text-center py-8 text-gray-500">è¦–é »?ªæ‰¾??/div>;
  }

  const videoUrl = getVideoByLanguage(videoId, currentLanguage);

  if (!videoUrl) {
    return <div className="text-center py-8 text-gray-500">?¡æ?? è?è¦–é »</div>;
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(err => console.error('?­æ”¾?ºéŒ¯:', err));
        setIsPlaying(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      // ç¢ºä?å­—å?è»Œé?modeæ­?¢º
      if (videoRef.current.textTracks.length > 0) {
        for (let i = 0; i < videoRef.current.textTracks.length; i++) {
          videoRef.current.textTracks[i].mode = showSubtitles ? 'showing' : 'hidden';
        }
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleSubtitleToggle = () => {
    const newShowSubtitles = !showSubtitles;
    setShowSubtitles(newShowSubtitles);

    if (videoRef.current && videoRef.current.textTracks) {
      for (let i = 0; i < videoRef.current.textTracks.length; i++) {
        videoRef.current.textTracks[i].mode = newShowSubtitles ? 'showing' : 'hidden';
      }
    }
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden">
      {/* è¦–é »?­æ”¾??*/}
      <div className="relative bg-black aspect-video group">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-contain"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          controls={false}
          style={{ backgroundColor: '#000' }}
        >
          {/* ä½¿ç”¨Blob URL? è?å­—å?è»Œé? */}
          {subtitleBlobUrl && (
            <track
              key={subtitleBlobUrl}
              kind="subtitles"
              src={subtitleBlobUrl}
              srcLang={language === 'zh-CN' ? 'zh' : (language as string) === 'yue' ? 'zh-HK' : language}
              label={video.languages[language]?.name || language}
              default
            />
          )}
        </video>

        {/* ?­æ”¾?§åˆ¶æ¬?*/}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* ?²åº¦æ¢?*/}
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-gray-600 rounded cursor-pointer appearance-none hover:h-2 transition-all"
            style={{
              background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${duration ? (currentTime / duration) * 100 : 0}%, #4b5563 ${duration ? (currentTime / duration) * 100 : 0}%, #4b5563 100%)`
            }}
          />

          {/* ?§åˆ¶?‰é? */}
          <div className="flex items-center justify-between mt-3 text-white text-sm">
            <div className="flex items-center gap-3">
              {/* ?­æ”¾/?«å??‰é? */}
              <button
                onClick={handlePlayPause}
                className="hover:opacity-80 transition"
                title={isPlaying ? '?«å?' : '?­æ”¾'}
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* å­—å??‹é??‰é? */}
              <button
                onClick={handleSubtitleToggle}
                className={`hover:opacity-80 transition px-1.5 py-0.5 rounded text-xs font-bold border ${
                  showSubtitles
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white/60 border-white/40'
                }`}
                title={showSubtitles ? '?±è?å­—å?' : 'é¡¯ç¤ºå­—å?'}
              >
                CC
              </button>

              {/* ?‚é?é¡¯ç¤º */}
              <span className="text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* ?¨å??‰é? */}
            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.requestFullscreen?.().catch(err => console.error('?¨å??ºéŒ¯:', err));
                }
              }}
              className="hover:opacity-80 transition"
              title="?¨å?"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
