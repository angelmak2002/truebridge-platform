import React, { useState, useMemo } from 'react';
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { ChevronRight, CheckCircle, XCircle } from "lucide-react";
import type { GradeExercises as MultilingualGradeExercises } from "./data/exercisesDataMultilingual";
import { useLanguage } from "./contexts/LanguageContext";

interface QuizInterfaceProps {
  gradeData: MultilingualGradeExercises;
  onBack: () => void;
}

export default function QuizInterface({ gradeData, onBack }: QuizInterfaceProps) {
  const { language } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(gradeData.questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = gradeData.questions[currentQuestionIndex];
  const currentAnswer = selectedAnswers[currentQuestionIndex];

  // Helper function to get display text based on language and subject
  const getDisplayText = (textObj: any, subject: any): string => {
    // If textObj is a string, return it as is
    if (typeof textObj === 'string') {
      return textObj;
    }
    
    // If textObj is not an object, return empty string
    if (!textObj || typeof textObj !== 'object') {
      return '';
    }
    
    // Get subject name in English
    let subjectNameEn = '';
    if (typeof subject === 'string') {
      subjectNameEn = subject;
    } else if (subject && typeof subject === 'object' && subject.en) {
      subjectNameEn = subject.en;
    }
    
    // If language is Japanese or Korean, and subject is English or English Math
    if ((language === 'ja' || language === 'ko') && 
        (subjectNameEn === 'English' || subjectNameEn === 'English Math' || subjectNameEn === 'English Mathematics')) {
      // Return English version
      return textObj.en || textObj['zh-HK'] || '';
    }
    
    // Otherwise return the current language version
    return textObj[language] || textObj['en'] || textObj['zh-HK'] || '';
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (!submitted) {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestionIndex] = currentAnswer === optionIndex ? null : optionIndex;
      setSelectedAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(gradeData.questions.length).fill(null));
    setSubmitted(false);
  };

  const correctCount = useMemo(() => {
    return selectedAnswers.filter((ans, idx) => ans === gradeData.questions[idx].correctAnswer).length;
  }, [selectedAnswers, gradeData.questions]);

  if (submitted) {
    return (
      <section className="w-full py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="container max-w-4xl">
          {/* Results Summary */}
          <Card className="p-8 mb-8 bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-sky mb-4">Á≠îÈ?ÁµêÊ?</h2>
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {correctCount}/{gradeData.questions.length}
              </div>
              <p className="text-lg text-gray-600">
                Ê≠?¢∫?áÔ?{Math.round((correctCount / gradeData.questions.length) * 100)}%
              </p>
            </div>
          </Card>

          {/* Answer Review */}
          <Card className="p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Á≠îÈ?Ë©≥Ê?</h3>
            <div className="space-y-4">
              {gradeData.questions.map((question, idx) => {
                const isCorrect = selectedAnswers[idx] === question.correctAnswer;
                return (
                  <div key={idx} className="p-4 border-l-4 border-gray-300 bg-gray-50 rounded">
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          Á¨?{idx + 1} È°?({getDisplayText(question.subject, question.subject)})
                        </p>
                        <p className="text-gray-600 mt-1">{getDisplayText(question.question, question.subject)}</p>
                        <p className="text-sm mt-2">
                          ?®Á?Á≠îÊ?Ôº?
                          <span className={isCorrect ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                            {selectedAnswers[idx] !== null ? getDisplayText(question.options[selectedAnswers[idx]!], question.subject) : "?™‰?Á≠?}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-green-600 font-bold">
                            Ê≠?¢∫Á≠îÊ?Ôºö{getDisplayText(question.options[question.correctAnswer], question.subject)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Answer Key */}
          <Card className="p-8 mb-8 bg-blue-50 border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">ÂÆåÊï¥Á≠îÊ?</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {gradeData.questions.map((question, idx) => (
                <div key={idx} className="p-3 bg-white rounded border-2 border-blue-300 text-center">
                  <p className="text-sm font-semibold text-gray-600">Á¨?{idx + 1} È°?/p>
                  <p className="text-lg font-bold text-blue-600">
                    {getDisplayText(question.options[question.correctAnswer], question.subject).charAt(0)}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleRetry}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 text-lg"
            >
              ?çÂ?
            </Button>
            <Button
              onClick={onBack}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-8 py-3 text-lg"
            >
              ËøîÂ??ÅÈù¢
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <div className="container max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Á¨?{currentQuestionIndex + 1} / {gradeData.questions.length} È°?
            </span>
            <span className="text-sm font-semibold text-gray-600">
              {getDisplayText(gradeData.gradeLabel, gradeData.gradeLabel)} - {getDisplayText(currentQuestion.subject, currentQuestion.subject)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / gradeData.questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-300 min-h-[200px] flex items-center justify-center">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            {getDisplayText(currentQuestion.question, currentQuestion.subject)}
          </h2>
        </Card>

        {/* Answer Options Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {currentQuestion.options.map((option, idx) => (
            <Button
              key={idx}
              onClick={() => handleAnswerSelect(idx)}
              className={`h-24 text-lg font-bold relative transition-all ${
                currentAnswer === idx
                  ? "bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-700"
                  : "bg-white hover:bg-gray-100 text-gray-800 border-2 border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center justify-center w-full">
                <span>{getDisplayText(option, currentQuestion.subject)}</span>
                {currentAnswer === idx && (
                  <span className="absolute top-2 right-2 text-xl">??/span>
                )}
              </div>
            </Button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <Button
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-6 py-2"
          >
            ‰∏ä‰?È°?
          </Button>

          {currentQuestionIndex === gradeData.questions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-2 text-lg"
            >
              ?ê‰∫§Á≠îÊ?
            </Button>
          ) : (
            <Button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2"
            >
              ‰∏ã‰?È°?
            </Button>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={onBack}
            variant="outline"
            className="text-gray-600 hover:text-brand-sky"
          >
            ËøîÂ?Á∑¥Á??ÅÈù¢
          </Button>
        </div>
      </div>
    </section>
  );
}
