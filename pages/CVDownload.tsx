import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export default function CVDownload() {
  // 示例導師 CV 數據 - 實際應從數據庫讀取
  const tutors = [
    { id: 1, name: "李老師", cvUrl: "#" },
    { id: 2, name: "王老師", cvUrl: "#" },
    { id: 3, name: "張老師", cvUrl: "#" },
    { id: 4, name: "陳老師", cvUrl: "#" },
    { id: 5, name: "劉老師", cvUrl: "#" },
    { id: 6, name: "黃老師", cvUrl: "#" },
  ];

  return (
    <div className="min-h-screen bg-brand-sky py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">導師履歷</h1>
          <p className="text-xl text-white/90">下載我們認證導師的完整履歷</p>
        </div>

        {/* CV Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <Card
              key={tutor.id}
              className="p-6 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-brand-sky" />
                <h3 className="text-xl font-bold text-brand-sky">{tutor.name}</h3>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                點擊下方按鈕下載 {tutor.name} 的完整履歷
              </p>

              <Button
                className="w-full bg-brand-sky hover:bg-brand-sky/90 text-white font-semibold"
                onClick={() => {
                  // TODO: 實現 CV 下載功能
                  alert(`下載 ${tutor.name} 的履歷`);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                下載履歷
              </Button>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-sm">
            所有導師均經過嚴格審核和認證
          </p>
        </div>
      </div>
    </div>
  );
}
