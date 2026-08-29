import React, { useState } from 'react';
import MultilingualVideoPlayer from "../components/MultilingualVideoPlayer";
import { multitrackVideos } from './data/multitrackVideosData';
import { Button } from './components/ui/button';
import { Card } from './components/ui/Card';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'wouter';
import { videos } from "../videolinks";


export function MultitrackVideos() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const selectedVideo = selectedVideoId
    ? multitrackVideos.find((v) => v.id === selectedVideoId)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* ?­éƒ¨ */}
      <div className="bg-slate-900 border-b border-slate-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-white">
              <ChevronLeft className="w-4 h-4 mr-2" />
              è¿”å?é¦–é?
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">å¤šè?è¨€è¦–é »</h1>
          <div className="w-24" />
        </div>
      </div>
<div className="container mx-auto px-4 py-8 space-y-4">
        {/* Game ¨t¦C */}
        <video src={videos.game_en} controls />
        <video src={videos.game_ja} controls />
        <video src={videos.game_ko} controls />
        <video src={videos.game_yue} controls />
        <video src={videos.game_zhCN} controls />

        {/* Rightversion ¨t¦C */}
        <video src={videos.rightversion_zh} controls />
        <video src={videos.rightversion_ko} controls />
        <video src={videos.rightversion_ja} controls />
        <video src={videos.rightversion_final} controls />
        <video src={videos.rightversion_en} controls />

{/* Climate ¨t¦C */}
        <video src={videos.climate_final} controls />
        <video src={videos.climate_ja} controls />
        <video src={videos.climate_zh} controls />
        <video src={videos.climate_ko} controls />
        <video src={videos.climate_yue} controls />
      </div>
    </div>
  );
}

      <div className="container mx-auto px-4 py-8">
        {!selectedVideo ? (
          // è¦–é »?—è¡¨è¦–å?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {multitrackVideos.map((video) => (
              <Card
                key={video.id}
                className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors cursor-pointer overflow-hidden"
                onClick={() => setSelectedVideoId(video.id)}
              >
                <div className="aspect-video bg-black relative group">
                  <video
                    src={video.videoUrl}
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => {
                      e.currentTarget.play();
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-4">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="bg-slate-700 px-2 py-1 rounded">
                      {video.audioTracks.length} ?³è?
                    </span>
                    <span className="bg-slate-700 px-2 py-1 rounded">
                      {video.subtitleTracks.length} å­—å?
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          // è¦–é »?­æ”¾è¦–å?
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => setSelectedVideoId(null)}
              className="mb-4 text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              è¿”å??—è¡¨
            </Button>

            <MultitrackVideoPlayer
              videoUrl={selectedVideo.videoUrl}
              videoId={selectedVideo.id}
              audioTracks={selectedVideo.audioTracks}
              subtitleTracks={selectedVideo.subtitleTracks}
              title={selectedVideo.title}
              defaultAudioTrack={selectedVideo.defaultAudioTrack}
              defaultSubtitleTrack={selectedVideo.defaultSubtitleTrack}
            />

            <Card className="bg-slate-800 border-slate-700 mt-6 p-6">
              <h2 className="text-xl font-bold text-white mb-2">
                {selectedVideo.title}
              </h2>
              <p className="text-slate-300 mb-4">{selectedVideo.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    ?¯ç”¨?³è?
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {selectedVideo.audioTracks.map((track, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        {track.label} ({track.lang})
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedVideo.subtitleTracks.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      ?¯ç”¨å­—å?
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-300">
                      {selectedVideo.subtitleTracks.map((track, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full" />
                          {track.label} ({track.lang})
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultitrackVideos;
