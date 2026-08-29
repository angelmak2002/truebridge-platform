import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/Card";
import { exercisesDataMultilingual } from "./data/exercisesDataMultilingual";
import QuizInterface from "./components/QuizInterface";
import { useLanguage } from "./contexts/LanguageContext";

export default function PracticePage() {
  const { language } = useLanguage();
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  const grades = [
    { id: "p1", label: { "zh-HK": "å°ä?", "en": "Grade 1", "ja": "å°å­¦1å¹?, "ko": "ì´ˆë“±?™ê? 1?™ë?", "zh-CN": "å°å­¦ä¸€å¹´çº§" }, color: "bg-red-100 hover:bg-red-200" },
    { id: "p2", label: { "zh-HK": "å°ä?", "en": "Grade 2", "ja": "å°å­¦2å¹?, "ko": "ì´ˆë“±?™ê? 2?™ë?", "zh-CN": "å°å­¦äºŒå¹´çº? }, color: "bg-orange-100 hover:bg-orange-200" },
    { id: "p3", label: { "zh-HK": "å°ä?", "en": "Grade 3", "ja": "å°å­¦3å¹?, "ko": "ì´ˆë“±?™ê? 3?™ë?", "zh-CN": "å°å­¦ä¸‰å¹´çº? }, color: "bg-yellow-100 hover:bg-yellow-200" },
    { id: "p4", label: { "zh-HK": "å°å?", "en": "Grade 4", "ja": "å°å­¦4å¹?, "ko": "ì´ˆë“±?™ê? 4?™ë?", "zh-CN": "å°å­¦?›å¹´çº? }, color: "bg-green-100 hover:bg-green-200" },
    { id: "p5", label: { "zh-HK": "å°ä?", "en": "Grade 5", "ja": "å°å­¦5å¹?, "ko": "ì´ˆë“±?™ê? 5?™ë?", "zh-CN": "å°å­¦äº”å¹´çº? }, color: "bg-blue-100 hover:bg-blue-200" },
    { id: "p6", label: { "zh-HK": "å°å…­", "en": "Grade 6", "ja": "å°å­¦6å¹?, "ko": "ì´ˆë“±?™ê? 6?™ë?", "zh-CN": "å°å­¦?­å¹´çº? }, color: "bg-indigo-100 hover:bg-indigo-200" },
    { id: "s1", label: { "zh-HK": "ä¸­ä?", "en": "Form 1", "ja": "ä¸­å­¦1å¹?, "ko": "ì¤‘í?êµ?1?™ë?", "zh-CN": "?ä¸­ä¸€å¹´çº§" }, color: "bg-purple-100 hover:bg-purple-200" },
    { id: "s2", label: { "zh-HK": "ä¸­ä?", "en": "Form 2", "ja": "ä¸­å­¦2å¹?, "ko": "ì¤‘í?êµ?2?™ë?", "zh-CN": "?ä¸­äºŒå¹´çº? }, color: "bg-pink-100 hover:bg-pink-200" },
    { id: "s3", label: { "zh-HK": "ä¸­ä?", "en": "Form 3", "ja": "ä¸­å­¦3å¹?, "ko": "ì¤‘í?êµ?3?™ë?", "zh-CN": "?ä¸­ä¸‰å¹´çº? }, color: "bg-rose-100 hover:bg-rose-200" },
  ];

  const selectedGradeData = exercisesDataMultilingual.find(g => g.grade === selectedGrade);

  if (selectedGrade && selectedGradeData) {
    return (
      <QuizInterface 
        gradeData={selectedGradeData}
        onBack={() => setSelectedGrade(null)}
      />
    );
  }

  const getGradeLabel = (labelObj: Record<string, string>) => {
    return labelObj[language] || labelObj['zh-HK'];
  };

  return (
    <section id="practice" className="w-full py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-brand-sky">ç·´ç?</h2>
          <p className="text-lg text-gray-600">?¸æ??¨ç?å¹´ç??‹å?ç·´ç?</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {grades.map((grade) => (
            <Button
              key={grade.id}
              onClick={() => setSelectedGrade(grade.id)}
              className={`${grade.color} h-24 text-lg font-bold text-gray-800 border-2 border-gray-300 transition-all hover:shadow-lg`}
            >
              {getGradeLabel(grade.label)}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
