import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";

export function FloatingButtons() {
  const [showCTA, setShowCTA] = useState(false);
  const [showWechatQR, setShowWechatQR] = useState(false);

  // Show CTA button periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCTA(true);
      setTimeout(() => setShowCTA(false), 5000); // Hide after 5 seconds
    }, 30000); // Show every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "85269511288"; // +852 69511288 (WhatsApp Business)
  const wechatId = "wxid_beto3vj28dox22";

  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      {/* WhatsApp Business Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-32 right-4 z-40"
      >
        <div className="w-24 h-24 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer overflow-hidden">
          <img
            src="/manus-storage/whatsapp_business_icon_1ba1f7f7.jpeg"
            alt="WhatsApp Business"
            className="w-full h-full object-cover"
          />
        </div>
      </a>

      {/* WeChat Button - Opens QR Code popup */}
      <div
        className="fixed bottom-6 right-4 z-40 cursor-pointer"
        onClick={() => setShowWechatQR(true)}
      >
        <div className="w-24 h-24 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all overflow-hidden">
          <img
            src="/manus-storage/wechat-logo-text_9ac24e17_259a7ba7.png"
            alt="WeChat"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* WeChat QR Code Modal */}
      {showWechatQR && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setShowWechatQR(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 mx-4 max-w-xs w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-1">? æ???WeChat å¥½å?</h3>
            <p className="text-sm text-gray-500 mb-4">??WeChat ?ƒæ?ä»¥ä?äºŒç¶­ç¢?/p>
            <img
              src="/manus-storage/wechat_qr_8be3610f.png"
              alt="WeChat QR Code"
              className="w-56 h-56 mx-auto rounded-lg object-contain"
            />
            <p className="text-xs text-gray-400 mt-3 mb-3">
              WeChat IDï¼?span className="font-mono text-gray-600 select-all">{wechatId}</span>
            </p>
            <button
              className="text-xs text-green-600 underline mb-3 block mx-auto"
              onClick={() => {
                navigator.clipboard.writeText(wechatId);
                alert("WeChat ID å·²è?è£?);
              }}
            >
              è¤‡è£½ WeChat ID
            </button>
            <button
              className="mt-1 w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm transition-colors"
              onClick={() => setShowWechatQR(false)}
            >
              ?œé?
            </button>
          </div>
        </div>
      )}

      {/* CTA Button - "?³åˆ»?¶å?è²»è©¦?? */}
      {showCTA && (
        <a href="#trial" className="fixed bottom-56 right-4 z-50 animate-pulse">
          <Button className="bg-brand-sky hover:bg-brand-sky/90 text-white font-bold py-3 px-6 rounded-full shadow-xl text-lg">
            ?³åˆ»?¶å?è²»è©¦??
          </Button>
        </a>
      )}
    </>
  );
}
