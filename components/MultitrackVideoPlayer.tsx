import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Volume2, Subtitles, Play, Pause, Maximize2 } from 'lucide-react';
import { Button } from './components/ui/button';
import { videosWithAudio } from './data/videosWithAudioData';

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
 * è§??VTTå­—å??‡ä»¶?ºæ??“ç¢¼?¸ç?
 */
function parseVTT(vttText: string): SubtitleCue[] {
  const cues: SubtitleCue[] = [];
  const lines = vttText.split('\n');
  let i = 0;

  // è·³é?WEBVTT?­éƒ¨
  while (i < lines.length && !lines[i].includes('-->')) {
    i++;
  }

  while (i < lines.length) {
    const line = lines[i];
    if (line.includes('-->')) {
      const [startStr, endStr] = line.split('-->').map(s => s.trim());
      const start = parseTimeToSeconds(startStr);
      const end = parseTimeToSeconds(endStr);

      // ?¶é?å­—å??‡æœ¬
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
 * å¤šè??“è??»æ’­?¾å™¨çµ„ä»¶
 * ?šé??‡æ?è¦–é »?‡ä»¶ä¾†å¯¦?¾å?èªè??³è??‡æ?
 * ä½¿ç”¨?ªå?ç¾©å?å¹•æ¸²?“è??‹å±¤ï¼ˆé¿?CORS?é?ï¼?
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

  // ?¹æ??¸æ??„éŸ³è»Œç²?–å??‰ç?è¦–é »URL
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

  // ? è?å­—å??‡ä»¶
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
      console.error('å­—å?? è?å¤±æ?:', err);
    }
  }, [subtitleTracks]);

  // ?¶å?å¹•é¸?‡æ”¹è®Šæ?? è?å­—å?
  useEffect(() => {
    loadSubtitle(selectedSubtitleTrack);
  }, [selectedSubtitleTrack]);

  // ?¹æ??¶å??­æ”¾?‚é??´æ–°å­—å??‡æœ¬
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

  // ?•ç??³è?è®Šæ›´ - ?‡æ?è¦–é »?‡ä»¶
  const handleAudioTrackChange = (trackIndex: string) => {
    const wasPlaying = isPlaying;
    const savedTime = currentTime;

    setSelectedAudioTrack(trackIndex);

    const newUrl = getVideoUrlForTrack(trackIndex);
    if (newUrl !== currentVideoUrl) {
      setCurrentVideoUrl(newUrl);

      // ?´æ¥ä¿®æ”¹video?ƒç??„srcå±¬æ€?
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

  // ?•ç?å­—å?è®Šæ›´
  const handleSubtitleTrackChange = (trackIndex: string) => {
    setSelectedSubtitleTrack(trackIndex);
  };

  // ?­æ”¾/?«å?
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

  // ?¨å?
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

  // ?¼å??–æ???
  const formatTime = (seconds: number) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden shadow-lg">
      {/* è¦–é »å®¹å™¨ */}
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
          ?¨ç??è¦½?¨ä??¯æ?HTML5è¦–é »?­æ”¾??
        </video>

        {/* ?ªå?ç¾©å?å¹•è??‹å±¤ */}
        {currentSubtitleText && (
          <div className="absolute bottom-16 left-0 right-0 flex justify-center pointer-events-none px-4">
            <div className="bg-black/80 text-white text-sm md:text-base px-4 py-2 rounded max-w-[90%] text-center leading-relaxed">
              {currentSubtitleText.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        )}

        {/* ?§åˆ¶æ¬?*/}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 space-y-2">
          {/* ?²åº¦æ¢?*/}
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

          {/* ?§åˆ¶?‰é? */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* ?­æ”¾/?«å? */}
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

              {/* ?‚é?é¡¯ç¤º */}
              <span className="text-white text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* ?³è??¸æ? */}
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

              {/* å­—å??¸æ? */}
              {subtitleTracks.length > 0 && (
                <div className="flex items-center gap-2">
                  <Subtitles className="w-4 h-4 text-white" />
                  <select
                    value={selectedSubtitleTrack}
                    onChange={(e) => handleSubtitleTrackChange(e.target.value)}
                    className="bg-black/50 text-white text-xs px-2 py-1 rounded border border-white/20 hover:border-white/40"
                  >
                    <option value="off">?¡å?å¹?/option>
                    {subtitleTracks.map((track, index) => (
                      <option key={index} value={index.toString()}>
                        {track.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* ?¨å? */}
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

      {/* æ¨™é? */}
      {title && (
        <div className="bg-gray-900 px-4 py-2">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default MultitrackVideoPlayer;
