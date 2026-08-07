import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Volume2, Subtitles, Play, Pause, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { videosWithAudio } from '@/data/videosWithAudioData';

interface AudioTrack {
  label: string;
  lang: string;
}

interface SubtitleTrack {
  label: string;
  lang: string;
  url: string;
}

interface SubtitleCue {
  start: number;
  end: number;
  text: string;
}

interface MultitrackVideoPlayerProps {
  videoUrl: string;
  videoId?: string;
  audioTracks: AudioTrack[];
  subtitleTracks?: SubtitleTrack[];
  title?: string;
  poster?: string;
  defaultAudioTrack?: string;
  defaultSubtitleTrack?: string;
}

/**
 * 解析VTT字幕文件為時間碼數組
 */
function parseVTT(vttText: string): SubtitleCue[] {
  const cues: SubtitleCue[] = [];
  const lines = vttText.split('\n');
  let i = 0;

  // 跳過WEBVTT頭部
  while (i < lines.length && !lines[i].includes('-->')) {
    i++;
  }

  while (i < lines.length) {
    const line = lines[i];
    if (line.includes('-->')) {
      const [startStr, endStr] = line.split('-->').map(s => s.trim());
      const start = parseTimeToSeconds(startStr);
      const end = parseTimeToSeconds(endStr);

      // 收集字幕文本
      i++;
      const textLines: string[] = [];
      while (i < lines.length && lines[i].trim() !== '') {
        textLines.push(lines[i].trim());
        i++;
      }

      if (textLines.length > 0) {
        cues.push({ start, end, text: textLines.join('\n') });
      }
    } else {
      i++;
    }
  }

  return cues;
}

function parseTimeToSeconds(timeStr: string): number {
  const parts = timeStr.split(':');
  if (parts.length === 3) {
    const [h, m, s] = parts;
    return parseInt(h) * 3600 + parseInt(m) * 60 + parseFloat(s);
  } else if (parts.length === 2) {
    const [m, s] = parts;
    return parseInt(m) * 60 + parseFloat(s);
  }
  return 0;
}

/**
 * 多軌道視頻播放器組件
 * 通過切換視頻文件來實現多語言音軌切換
 * 使用自定義字幕渲染覆蓋層（避免CORS問題）
 */
export const MultitrackVideoPlayer: React.FC<MultitrackVideoPlayerProps> = ({
  videoUrl,
  videoId,
  audioTracks,
  subtitleTracks = [],
  title = 'Video',
  poster,
  defaultAudioTrack = '0',
  defaultSubtitleTrack = 'off',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedAudioTrack, setSelectedAudioTrack] = useState(defaultAudioTrack);
  const [selectedSubtitleTrack, setSelectedSubtitleTrack] = useState(defaultSubtitleTrack);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(videoUrl);
  const [subtitleCues, setSubtitleCues] = useState<SubtitleCue[]>([]);
  const [currentSubtitleText, setCurrentSubtitleText] = useState('');

  // 根據選擇的音軌獲取對應的視頻URL
  const getVideoUrlForTrack = useCallback((trackIndex: string): string => {
    if (!videoId) return videoUrl;

    const idx = parseInt(trackIndex);
    const track = audioTracks[idx];
    if (!track) return videoUrl;

    const video = videosWithAudio.find(v => v.id === videoId);
    if (!video) return videoUrl;

    const langData = video.languages[track.lang];
    if (!langData) return videoUrl;

    return langData.url;
  }, [videoId, videoUrl, audioTracks]);

  // 加載字幕文件
  const loadSubtitle = useCallback(async (trackIndex: string) => {
    setSubtitleCues([]);
    setCurrentSubtitleText('');

    if (trackIndex === 'off' || !subtitleTracks[parseInt(trackIndex)]) {
      return;
    }

    const track = subtitleTracks[parseInt(trackIndex)];
    if (!track.url) return;

    try {
      const response = await fetch(track.url);
      if (!response.ok) throw new Error(`Failed to fetch subtitles: ${response.status}`);
      const text = await response.text();
      const cues = parseVTT(text);
      setSubtitleCues(cues);
    } catch (err) {
      console.error('字幕加載失敗:', err);
    }
  }, [subtitleTracks]);

  // 當字幕選擇改變時加載字幕
  useEffect(() => {
    loadSubtitle(selectedSubtitleTrack);
  }, [selectedSubtitleTrack]);

  // 根據當前播放時間更新字幕文本
  useEffect(() => {
    if (subtitleCues.length === 0) {
      setCurrentSubtitleText('');
      return;
    }

    const activeCue = subtitleCues.find(
      cue => currentTime >= cue.start && currentTime <= cue.end
    );

    setCurrentSubtitleText(activeCue ? activeCue.text : '');
  }, [currentTime, subtitleCues]);

  // 處理音軌變更 - 切換視頻文件
  const handleAudioTrackChange = (trackIndex: string) => {
    const wasPlaying = isPlaying;
    const savedTime = currentTime;

    setSelectedAudioTrack(trackIndex);

    const newUrl = getVideoUrlForTrack(trackIndex);
    if (newUrl !== currentVideoUrl) {
      setCurrentVideoUrl(newUrl);

      // 直接修改video元素的src屬性
      if (videoRef.current) {
        const video = videoRef.current;
        video.src = newUrl;
        video.load();

        const onCanPlay = () => {
          video.removeEventListener('canplay', onCanPlay);
          video.currentTime = savedTime;
          if (wasPlaying) {
            video.play().catch(() => {});
          }
        };
        video.addEventListener('canplay', onCanPlay);
      }
    }
  };

  // 處理字幕變更
  const handleSubtitleTrackChange = (trackIndex: string) => {
    setSelectedSubtitleTrack(trackIndex);
  };

  // 播放/暫停
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // 全屏
  const handleFullscreen = () => {
    if (videoRef.current) {
      const container = videoRef.current.parentElement;
      if (container) {
        if (!document.fullscreenElement) {
          container.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    }
  };

  // 格式化時間
  const formatTime = (seconds: number) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden shadow-lg">
      {/* 視頻容器 */}
      <div className="relative bg-black">
        <video
          ref={videoRef}
          src={currentVideoUrl}
          className="w-full h-auto"
          poster={poster}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => {
            setDuration(e.currentTarget.duration);
          }}
          controls={false}
        >
          您的瀏覽器不支持HTML5視頻播放器
        </video>

        {/* 自定義字幕覆蓋層 */}
        {currentSubtitleText && (
          <div className="absolute bottom-16 left-0 right-0 flex justify-center pointer-events-none px-4">
            <div className="bg-black/80 text-white text-sm md:text-base px-4 py-2 rounded max-w-[90%] text-center leading-relaxed">
              {currentSubtitleText.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        )}

        {/* 控制欄 */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 space-y-2">
          {/* 進度條 */}
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => {
                if (videoRef.current) {
                  videoRef.current.currentTime = parseFloat(e.target.value);
                }
              }}
              className="flex-1 h-1 bg-gray-600 rounded cursor-pointer accent-blue-500"
            />
          </div>

          {/* 控制按鈕 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* 播放/暫停 */}
              <Button
                size="sm"
                variant="ghost"
                onClick={togglePlay}
                className="text-white hover:bg-white/20"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </Button>

              {/* 時間顯示 */}
              <span className="text-white text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* 音軌選擇 */}
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-white" />
                <select
                  value={selectedAudioTrack}
                  onChange={(e) => handleAudioTrackChange(e.target.value)}
                  className="bg-black/50 text-white text-xs px-2 py-1 rounded border border-white/20 hover:border-white/40"
                >
                  {audioTracks.map((track, index) => (
                    <option key={index} value={index.toString()}>
                      {track.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 字幕選擇 */}
              {subtitleTracks.length > 0 && (
                <div className="flex items-center gap-2">
                  <Subtitles className="w-4 h-4 text-white" />
                  <select
                    value={selectedSubtitleTrack}
                    onChange={(e) => handleSubtitleTrackChange(e.target.value)}
                    className="bg-black/50 text-white text-xs px-2 py-1 rounded border border-white/20 hover:border-white/40"
                  >
                    <option value="off">無字幕</option>
                    {subtitleTracks.map((track, index) => (
                      <option key={index} value={index.toString()}>
                        {track.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* 全屏 */}
              <Button
                size="sm"
                variant="ghost"
                onClick={handleFullscreen}
                className="text-white hover:bg-white/20"
              >
                <Maximize2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 標題 */}
      {title && (
        <div className="bg-gray-900 px-4 py-2">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default MultitrackVideoPlayer;
