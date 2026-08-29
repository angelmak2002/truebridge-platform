import { useState } from "react";
import { Card } from "./components/ui/Card";
import { HelpCircle } from "lucide-react";
import { faqData, faqSectionText, faqSubtitleText, faqContactText, faqContactDescriptionText, faqWhatsAppHintText } from "./data/testimonialsAndFaqData";
import { useLanguage } from "./contexts/LanguageContext";
import type { Language } from "./data/translations";

export default function FAQ() {
  const { language } = useLanguage();
  const [showWechatQR, setShowWechatQR] = useState(false);
  const wechatId = "wxid_beto3vj28dox22";

  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: "#99FFFF" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="w-12 h-12" />
            {faqSectionText[language as Language]}
          </h1>
          <p className="text-xl text-white/90">
            {faqSubtitleText[language as Language]}
          </p>
        </div>

        {/* FAQ List - Static Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq) => (
            <Card
              key={faq.id}
              className="p-6 bg-white/95 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-sky text-white font-bold">
                    {faq.id}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-sky mb-2">
                    {faq.question[language as Language]}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {faq.answer[language as Language]}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-white/95">
            <p className="text-2xl font-bold text-brand-sky mb-4">
              {faqContactText[language as Language]}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {faqContactDescriptionText[language as Language]}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {/* WhatsApp Business Button */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="https://wa.me/85269511288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.206-.368-.067c-1.286-.23-2.428-.856-3.274-1.857-.584-.67-.96-1.51-1.115-2.406-.321-1.801.212-3.551 1.503-4.802 1.291-1.251 3.157-1.915 5.028-1.766 1.871.149 3.597.923 4.782 2.165 1.185 1.242 1.772 2.814 1.772 4.434 0 .694-.083 1.38-.248 2.03-.165.65-.413 1.283-.743 1.856-.33.573-.74 1.082-1.217 1.514-.477.432-1.009.788-1.586 1.06-.577.272-1.194.456-1.829.545-.635.089-1.285.089-1.933 0z" />
                  </svg>
                  WhatsApp Business
                </a>
                <p className="text-xs text-gray-500 text-center max-w-[180px]">
                  {faqWhatsAppHintText[language as Language]}
                </p>
              </div>

              {/* WeChat Button - Opens QR Code popup */}
              <div
                onClick={() => setShowWechatQR(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 5.58 2 10c0 2.54 1.19 4.85 3.1 6.36.12 1.78-.46 3.54-1.62 4.88.88-.26 2.24-.84 3.42-1.84 1.02.28 2.11.43 3.1.43 5.52 0 10-3.58 10-8s-4.48-8-10-8zm0 14c-.89 0-1.76-.15-2.6-.43l-.6-.2-1.32.88c-.78.52-1.54.84-2.24.94.26-.88.4-1.82.4-2.8l-.08-.72-.56-.48C4.5 13.78 3.5 11.99 3.5 10c0-3.86 3.86-7 8.5-7s8.5 3.14 8.5 7-3.86 7-8.5 7z" />
                </svg>
                WeChat
              </div>
            </div>
          </Card>
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
    </div>
  );
}
