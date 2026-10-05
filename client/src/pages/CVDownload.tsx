import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export default function CVDownload() {
  // 示例導師 CV 數據 - 實際應從數據庫讀取
  const tutors = [
    { id: 1, name: "鐘老師", cvUrl: "/manus-storage/teacher1_cv_6ae2cb70_bd11d069.webp" },
    { id: 2, name: "程老師", cvUrl: "/manus-storage/teacher2_cv_3cd6d0a3_212ce960.webp" },
    { id: 3, name: "程老師", cvUrl: "/manus-storage/teacher3_cv_60bc3c80_11c43984.webp" },
    { id: 4, name: "張老師", cvUrl: "/manus-storage/teacher4_cv_21a420e9_21f62adb.webp" },
    { id: 5, name: "廖老師", cvUrl: "/manus-storage/teacher5_cv_4bf4382a_b4e88fpc.webp" },
    { id: 6, name: "盧老師", cvUrl: "/manus-storage/lo_chi_yan_cv_42fef7df_be50e58e.jpg" },
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
                  window.open(tutor.cvUrl, "_blank");
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
