import { videos } from "../videoLinks";

// 取得字幕檔路徑
export function getSubtitlesByLanguage(videoId: string, lang: string): string {
  return videos[videoId]?.[lang]?.subtitles || "";
}

// 取得影片檔路徑
export function getVideoByLanguage(videoId: string, lang: string): string {
  return videos[videoId]?.[lang]?.src || "";
}
