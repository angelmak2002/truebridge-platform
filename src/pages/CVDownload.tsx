import { Card } from "./components/ui/Card";
import { Button } from "./components/ui/button";
import { Download, FileText } from "lucide-react";

export default function CVDownload() {
  // ç¤ºä?å°å¸« CV ?¸æ? - å¯¦é??‰å??¸æ?åº«è???
  const tutors = [
    { id: 1, name: "?è€å¸«", cvUrl: "#" },
    { id: 2, name: "?‹è€å¸«", cvUrl: "#" },
    { id: 3, name: "å¼µè€å¸«", cvUrl: "#" },
    { id: 4, name: "?³è€å¸«", cvUrl: "#" },
    { id: 5, name: "?‰è€å¸«", cvUrl: "#" },
    { id: 6, name: "é»ƒè€å¸«", cvUrl: "#" },
  ];

  return (
    <div className="min-h-screen bg-brand-sky py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">å°å¸«å±¥æ­·</h1>
          <p className="text-xl text-white/90">ä¸‹è??‘å€‘è?è­‰å?å¸«ç?å®Œæ•´å±¥æ­·</p>
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
                é»æ?ä¸‹æ–¹?‰é?ä¸‹è? {tutor.name} ?„å??´å±¥æ­?
              </p>

              <Button
                className="w-full bg-brand-sky hover:bg-brand-sky/90 text-white font-semibold"
                onClick={() => {
                  // TODO: å¯¦ç¾ CV ä¸‹è??Ÿèƒ½
                  alert(`ä¸‹è? ${tutor.name} ?„å±¥æ­·`);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                ä¸‹è?å±¥æ­·
              </Button>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-sm">
            ?€?‰å?å¸«å?ç¶“é??´æ ¼å¯©æ ¸?Œè?è­?
          </p>
        </div>
      </div>
    </div>
  );
}
