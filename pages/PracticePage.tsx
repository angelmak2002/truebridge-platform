import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { exercisesDataMultilingual } from "@/data/exercisesDataMultilingual";
import QuizInterface from "@/components/QuizInterface";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PracticePage() {
  const { language } = useLanguage();
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  const grades = [
    { id: "p1", label: { "zh-HK": "小一", "en": "Grade 1", "ja": "小学1年", "ko": "초등학교 1학년", "zh-CN": "小学一年级" }, color: "bg-red-100 hover:bg-red-200" },
    { id: "p2", label: { "zh-HK": "小二", "en": "Grade 2", "ja": "小学2年", "ko": "초등학교 2학년", "zh-CN": "小学二年级" }, color: "bg-orange-100 hover:bg-orange-200" },
    { id: "p3", label: { "zh-HK": "小三", "en": "Grade 3", "ja": "小学3年", "ko": "초등학교 3학년", "zh-CN": "小学三年级" }, color: "bg-yellow-100 hover:bg-yellow-200" },
    { id: "p4", label: { "zh-HK": "小四", "en": "Grade 4", "ja": "小学4年", "ko": "초등학교 4학년", "zh-CN": "小学四年级" }, color: "bg-green-100 hover:bg-green-200" },
    { id: "p5", label: { "zh-HK": "小五", "en": "Grade 5", "ja": "小学5年", "ko": "초등학교 5학년", "zh-CN": "小学五年级" }, color: "bg-blue-100 hover:bg-blue-200" },
    { id: "p6", label: { "zh-HK": "小六", "en": "Grade 6", "ja": "小学6年", "ko": "초등학교 6학년", "zh-CN": "小学六年级" }, color: "bg-indigo-100 hover:bg-indigo-200" },
    { id: "s1", label: { "zh-HK": "中一", "en": "Form 1", "ja": "中学1年", "ko": "중학교 1학년", "zh-CN": "初中一年级" }, color: "bg-purple-100 hover:bg-purple-200" },
    { id: "s2", label: { "zh-HK": "中二", "en": "Form 2", "ja": "中学2年", "ko": "중학교 2학년", "zh-CN": "初中二年级" }, color: "bg-pink-100 hover:bg-pink-200" },
    { id: "s3", label: { "zh-HK": "中三", "en": "Form 3", "ja": "中学3年", "ko": "중학교 3학년", "zh-CN": "初中三年级" }, color: "bg-rose-100 hover:bg-rose-200" },
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
          <h2 className="text-4xl font-bold mb-4 text-brand-sky">練習</h2>
          <p className="text-lg text-gray-600">選擇您的年級開始練習</p>
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
