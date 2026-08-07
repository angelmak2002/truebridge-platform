import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Volume2, Maximize2 } from 'lucide-react';

interface MultilingualVideoPlayerProps {
  videoId: string;
  title: string;
  description: string;
  videoUrl: string;
  audioTracks?: Array<{
    label: string;
    lang: string;
    index?: number;
  }>;
  defaultLanguage?: string;
}

const defaultAudioTracks = [
  { label: '粵語', lang: 'yue', index: 0 },
  { label: 'English', lang: 'en', index: 1 },
  { label: '日本語', lang: 'ja', index: 2 },
  { label: '한국어', lang: 'ko', index: 3 },
  { label: '普通話', lang: 'zh-CN', index: 4 }
];

export const MultilingualVideoPlayer: React.FC<MultilingualVideoPlayerProps> = ({
  videoId,
  title,
  description,
  videoUrl,
  audioTracks = defaultAudioTracks,
  defaultLanguage = 'en'
}) => {
  const [selectedAudioTrack, setSelectedAudioTrack] = useState(defaultLanguage);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 處理音軌變更
  useEffect(() => {
    if (videoRef.current) {
      const audioTracks = (videoRef.current as any).audioTracks;
      if (audioTracks) {
        const selectedTrack = audioTracks.find((track: any, idx: number) => {
          const trackLang = audioTracks[idx].language || '';
          return trackLang === selectedAudioTrack || idx === parseInt(selectedAudioTrack);
        });
        
        for (let i = 0; i < audioTracks.length; i++) {
          audioTracks[i].enabled = i === parseInt(selectedAudioTrack);
        }
      }
    }
  }, [selectedAudioTrack]);

  const handleLanguageChange = (lang: string) => {
    setSelectedAudioTrack(lang);
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch(() => {
          setIsFullscreen(true);
        });
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const formatTime = (seconds: number) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden shadow-xl">
      {/* Video Container */}
      <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : 'w-full'}`}>
        <video
          ref={videoRef}
          className="w-full h-auto bg-black"
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          controls
          controlsList="nodownload"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Controls */}
      <div className="bg-slate-900 p-4 space-y-4">
        {/* Title and Description */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-300">{description}</p>
        </div>

        {/* Audio Track Selector */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-white" />
            <label className="text-sm font-medium text-white">Audio Language:</label>
          </div>
          <Select value={selectedAudioTrack} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-48 bg-slate-800 border-slate-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              {audioTracks.map((track) => (
                <SelectItem 
                  key={`${track.lang}-${track.index}`} 
                  value={track.lang} 
                  className="text-white hover:bg-slate-700"
                >
                  {track.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Time Display and Fullscreen Button */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-slate-400">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <Button
            onClick={toggleFullscreen}
            variant="outline"
            size="sm"
            className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
          >
            <Maximize2 className="w-4 h-4 mr-2" />
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </Button>
        </div>
      </div>
    </div>
  );
};
