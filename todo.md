# TrueBridge Dynamic Platform - 遷移任務

## 已完成（程式碼遷移）
- [x] 複製 client/src 所有原始碼（頁面、組件、數據）
- [x] 複製 server 目錄（排除 _core）
- [x] 複製 drizzle、shared 目錄
- [x] 合併 package.json 依賴
- [x] 保留 FloatingButtons.tsx 修復（WhatsApp: 85269511288）
- [x] 保留 FAQ.tsx 修復（WeChat: wxid_beto3vj28dox22）
- [x] 補全 shared/const.ts 缺少的 OAuth exports
- [x] 補全 client/src/const.ts 缺少的 startLogin 函數
- [x] 複製 server/_core/email.ts
- [x] 執行 pnpm install 安裝依賴
- [x] 確認開發伺服器正常運作無錯誤
- [x] 建立 checkpoint 並發佈

## 新任務：替換第二個短片（遊戲主題）並製作多語言音軌
- [x] 轉錄新短片 final_video_no_logo_v7.mp4 的粵語原音
- [x] 翻譯文稿為普通話、英文、日文、韓文
- [x] 生成四種語言的配音音頻
- [x] 合成各語言版本影片（或多音軌方案）
- [x] 生成五種語言的 VTT 字幕
- [x] 上傳所有媒體檔案至新專案儲存空間
- [x] 更新短片頁面數據（第二個短片指向新檔案）
- [x] 驗證短片播放與導航欄語言切換（列表頁縮圖正常，測試 96/96 通過）
- [x] 建立 trial_applications 與 tutors 資料表（修復測試失敗）
- [x] 建立 checkpoint

## 待處理（媒體檔案遷移，用戶尚後決定）
- [x] 首頁 Logo、封面圖、師資照片遷移（含導航欄 Logo、WhatsApp/WeChat 按鈕圖片，已一併完成）

## 新任務：遷移其餘兩條短片的媒體檔案
- [x] 從舊網站下載 rightversion 短片的 5 條影片與 5 個字幕（含 multitrack 版本）
- [x] 從舊網站下載 climate_action 短片的 5 條影片與 5 個字幕（含 multitrack 版本）
- [x] 上傳全部檔案至本專案儲存空間（27 檔全部 SUCCESS）
- [x] 更新 videosWithAudioData.ts 與 multitrackVideosData.ts 的路徑
- [x] 驗證兩條短片可正常存取播放（全部 206/200）
- [x] 移除未使用的舊資料檔（languageVideosData.ts、videosMultilingualData.ts、LanguageAwareVideoPlayer.tsx）
- [x] 全站 48 個媒體引用驗證全部可存取，網站完全獨立於舊任務
- [x] 儲存 checkpoint

## 新任務：第二條短片（遊戲主題）翻譯配音改為女聲（300 積分硬上限，逐語言交付）
- [x] 取得原影片與各語言翻譯文稿/字幕時間軸素材（含修正 zh-CN 切分點）
- [x] 普通話女聲第 1 段生成完成（Sulafat）
- [x] 普通話女聲版完成並上線（game_zh-CN_female_e4f7a344.mp4）
- [x] 英文女聲版完成並上線（game_en_female_3c52af4e.mp4）
- [x] 日文女聲版完成並上線（game_ja_female_6f94d721.mp4，字幕同步重算 game_ja_v2_2cd5f4f9.vtt）
- [x] 韓文女聲版完成並上線（game_ko_female_14eba955.mp4）
- [x] 全部驗證可播放（206），測試 96/96 通過
- [x] 儲存 checkpoint 並回報完成狀態

## 新任務：改善 WhatsApp Business 與 WeChat 浮動按鈕（200 積分上限）
- [x] 裁切 WeChat QR Code 圖片並上傳至專案儲存空間（/manus-storage/wechat_qr_8be3610f.png）
- [x] WhatsApp 按鈕加入預設訊息（wa.me 連結帶 text 參數）
- [x] WeChat 按鈕改為彈出 QR Code 視窗（保留複製 ID 備用）
- [x] 驗證兩個按鈕功能，測試 96/96 通過，儲存 checkpoint

## 新任務：WhatsApp Business 按鈕圖示更換 + footer 文字更新
- [x] 上傳新 WhatsApp Business 圖示（/manus-storage/whatsapp_business_icon_1ba1f7f7.jpeg）
- [x] FloatingButtons.tsx 換用新圖示
- [x] translations.ts footer.whatsapp 所有 5 種語言改為 'WhatsApp Business'
- [x] translation.test.ts brandNames 白名單加入 'WhatsApp Business'（修復測試失敗）
- [x] 測試 96/96 全部通過
- [x] 儲存 checkpoint

## 新任務：FAQ 及 footer 加入多語言 WhatsApp Business 提示
- [x] testimonialsAndFaqData.ts：faqContactDescriptionText 改為 WhatsApp Business，新增 faqWhatsAppHintText（5 語言）
- [x] FAQ.tsx：WhatsApp 按鈕文字改為 WhatsApp Business，按鈕下方加入多語言提示
- [x] translations.ts：所有 5 種語言加入 footer.whatsappHint 翻譯
- [x] Home.tsx：footer WhatsApp 連結下方加入多語言提示文字
- [x] 測試 96/96 全部通過
- [x] 儲存 checkpoint

## 新任務：全站 WhatsApp Business 一致性更新（申請表單 + FAQ 第 8 題）
- [x] FAQ 第 8 題答案：WhatsApp 改為 WhatsApp Business（5 種語言）
- [x] translations.ts apply.whatsappHint：所有 5 種語言改為 WhatsApp Business
- [x] translations.ts apply.whatsappContact：所有 5 種語言改為 WhatsApp Business
- [x] translations.ts apply.successDesc：所有 5 種語言改為 WhatsApp Business
- [x] 測試 96/96 全部通過
- [x] 儲存 checkpoint

## 新任務：FAQ WeChat 按鈕改為 QR Code 彈窗
- [x] FAQ.tsx WeChat 按鈕改為彈出 QR Code 視窗（與浮動按鈕一致）
- [x] 測試 96/96 全部通過
- [x] 儲存 checkpoint
