import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Skeleton } from "@/components/ui/skeleton";
import { Translate } from '@/components/Translate';
import { MultilingualAudioVideoPlayer } from '@/components/MultilingualAudioVideoPlayer';
import {
  Users,
  Award,
  Clock,
  BookOpen,
  Zap,
  Target,
  TrendingUp,
  Heart,
  CheckCircle,
  Star,
  Play,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { exercisesData } from "@/data/exercisesData";
import { getCurrentWeekQuestions } from "@/data/exercisesDataExtended";
import { exercisesDataMultilingual, type Question as MultilingualQuestion, type GradeExercises as MultilingualGradeExercises } from "@/data/exercisesDataMultilingual";
import { testimonialsData, faqData, testimonialsSectionText, faqSectionText, faqSubtitleText, faqContactText, faqContactDescriptionText } from "@/data/testimonialsAndFaqData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/data/translations";

export function Home() {
  const { t, language } = useLanguage();
  const { data: tutors, isLoading: tutorsLoading } = trpc.tutors.list.useQuery();
  const [practiceState, setPracticeState] = useState<{
    selectedGrade: string | null;
    currentQuestionIndex: number;
    selectedAnswers: (number | null)[];
    submitted: boolean;
  }>({
    selectedGrade: null,
    currentQuestionIndex: 0,
    selectedAnswers: [],
    submitted: false,
  });

  const [trialFormState, setTrialFormState] = useState<{
    submitted: boolean;
    studentName: string;
  } | null>(null);

  const submitTrialForm = trpc.trialApply.submit.useMutation({
    onSuccess: (data, variables) => {
      setTrialFormState({
        submitted: true,
        studentName: variables.studentName,
      });
    },
  });

  // Scroll to section if hash exists
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const benefits = [
    { icon: "👨‍🏫", title: "名校級教學", description: "專業導師，擁有豐富教學經驗" },
    { icon: "🎯", title: "度身訂制", description: "根據學生程度制定個性化課程" },
    { icon: "⏰", title: "靈活時間", description: "自由選擇上課時間，配合學生日程" },
    { icon: "💻", title: "線上授課", description: "足不出戶，安全便捷的學習環境" },
    { icon: "📈", title: "成績提升", description: "98% 學生成績明顯進步" },
    { icon: "🤝", title: "一對一輔導", description: "全程關注，及時解答疑難" },
    { icon: "🏆", title: "成功案例", description: "超過 100+ 滿意學生" },
    { icon: "💬", title: "定期回饋", description: "每堂課後提供學習進度報告" },
  ];

  // Practice handler - uses weekly rotating questions
  const handleGradeSelect = (gradeId: string) => {
    const selectedGradeData = exercisesDataMultilingual.find(g => g.grade === gradeId);
    if (selectedGradeData && selectedGradeData.questions.length > 0) {
      const questionsToUse = selectedGradeData.questions.slice(0, 10);
      setPracticeState({
        selectedGrade: gradeId,
        currentQuestionIndex: 0,
        selectedAnswers: Array(questionsToUse.length).fill(null),
        submitted: false,
      });
      setTimeout(() => {
        document.querySelector("#practice-quiz")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (!practiceState.submitted) {
      const newAnswers = [...practiceState.selectedAnswers];
      newAnswers[practiceState.currentQuestionIndex] = 
        practiceState.selectedAnswers[practiceState.currentQuestionIndex] === optionIndex 
          ? null 
          : optionIndex;
      setPracticeState({ ...practiceState, selectedAnswers: newAnswers });
    }
  };

  const handleSubmitQuiz = () => {
    setPracticeState({ ...practiceState, submitted: true });
  };

  const handleRetryQuiz = () => {
    const gradeData = exercisesData.find(g => g.grade === practiceState.selectedGrade);
    if (gradeData) {
      setPracticeState({
        ...practiceState,
        currentQuestionIndex: 0,
        selectedAnswers: Array(gradeData.questions.length).fill(null),
        submitted: false,
      });
    }
  };

  const handleBackToPractice = () => {
    setPracticeState({
      selectedGrade: null,
      currentQuestionIndex: 0,
      selectedAnswers: [],
      submitted: false,
    });
  };

  // Get weekly questions for current grade (using multilingual data)
  const gradeData = practiceState.selectedGrade ? exercisesDataMultilingual.find(g => g.grade === practiceState.selectedGrade) : null;
  const weeklyQuestions = gradeData ? gradeData.questions.slice(0, 10) : [];
  
  const currentQuestion = gradeData?.questions[practiceState.currentQuestionIndex];
  const currentAnswer = practiceState.selectedAnswers[practiceState.currentQuestionIndex];
  
  // Helper function to get text in current language
  // subject param: when provided, English/English Math subjects stay in English under ja/ko
  const getLocalizedText = (translations: any, subject?: any): string => {
    if (typeof translations === 'string') return translations;
    if (translations && typeof translations === 'object') {
      // Determine subject name in English
      let subjectNameEn = '';
      if (typeof subject === 'string') {
        subjectNameEn = subject;
      } else if (subject && typeof subject === 'object' && subject.en) {
        subjectNameEn = subject.en;
      }
      // In Japanese or Korean mode, keep English/English Math content in English
      if ((language === 'ja' || language === 'ko') &&
          (subjectNameEn === 'English' || subjectNameEn === 'English Math' || subjectNameEn === 'English Mathematics')) {
        return translations['en'] || translations['zh-HK'] || (Object.values(translations) as string[]).find((v) => v) || '';
      }
      // Fallback chain: current language → en → zh-HK → any non-empty value
      const currentLangText = translations[language as Language];
      if (currentLangText) return currentLangText;
      const enText = translations['en'];
      if (enText) return enText;
      const zhHKText = translations['zh-HK'];
      if (zhHKText) return zhHKText;
      return (Object.values(translations) as string[]).find((v) => v) || '';
    }
    return '';
  };

  // Calculate results
  const correctCount = gradeData ? practiceState.selectedAnswers.filter(
    (ans, idx) => ans === gradeData.questions[idx]?.correctAnswer
  ).length : 0;

  return (
    <div className="min-h-screen">
      {/* ===== PAGE 1: HERO ===== */}
      <section
        id="hero"
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/manus-storage/coverpagecorrect_21a0270c_2276f374.jpg')",
          backgroundColor: "#87CEEB",
        }}
      >
        <div className="absolute inset-0" style={{backgroundColor: "rgba(135, 206, 235, 0.35)"}}></div>
        <div className="relative z-10 text-center px-4">
          <img
            src="/manus-storage/logo_d5b41505_398cfc68.jpg"
            alt="TrueBridge Logo"
            className="w-32 h-32 mx-auto mb-8 rounded-full shadow-lg"
          />
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold" style={{
              backgroundImage: "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              TrueBridge
            </h1>
            <p className="text-2xl text-white/90 mt-2">
              {t('site.name')}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button className="bg-brand-sky hover:bg-brand-sky/90 text-white font-bold py-3 px-8 rounded-full text-lg">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-white">
            <div>
              <p className="text-4xl font-bold">50K+</p>
              <p className="text-lg">{t('stats.studentsServed')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold">10K+</p>
              <p className="text-lg">{t('stats.certifiedTutors')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold">98%</p>
              <p className="text-lg">{t('stats.satisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAGE 1.5: VIDEOS ===== */}
      <section id="videos" className="w-full py-16" style={{ backgroundColor: "#99FFFF" }}>
        <div className="container max-w-5xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-white"><Translate>短片</Translate></h2>

          <div className="space-y-8">
            {/* Video 1: Rightversion */}
            <div>
              <h3 className="text-base font-bold text-center mb-4"><Translate>1對1私人輔導的優越</Translate></h3>
              <MultilingualAudioVideoPlayer videoId="rightversion" />
              <Card className="mt-2 p-3 bg-gray-200 text-center font-bold text-xs">
                <Translate>讓你了解1對1私人輔導的優越</Translate>
              </Card>
            </div>

            {/* Video 2: Final Video */}
            <div>
              <h3 className="text-base font-bold text-center mb-4"><Translate>遊戲提升孩子能力</Translate></h3>
              <MultilingualAudioVideoPlayer videoId="final_video" />
              <Card className="mt-2 p-3 bg-gray-200 text-center font-bold text-xs">
                <Translate>讓你了解遊戲也能提升孩子的能力</Translate>
              </Card>
            </div>

            {/* Video 3: Climate Action */}
            <div>
              <h3 className="text-base font-bold text-center mb-4"><Translate>Angie Mak - TED演講冠軍</Translate></h3>
              <MultilingualAudioVideoPlayer videoId="climate_action" />
              <Card className="mt-2 p-3 bg-gray-200 text-center font-bold text-xs">
                <Translate>麥可揚(Angie Mak)在澤橋平台(TrueBridge Platform)創辦人親自培育下, 於2026年TED風格演講比賽中榮獲總冠軍。以TED Talk形式進行的青少年公開演說比賽, 著重在有限時間內清晰, 有說服力地分享一個值得傳播的想法。</Translate>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAGE 2: GOALS ===== */}
      <section id="goals" className="min-h-screen py-16 px-4 flex items-center" style={{
        background: "linear-gradient(135deg, #FFB6C1 0%, #FFA07A 50%, #FFB347 100%)"
      }}>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold text-center mb-16" style={{
            backgroundImage: "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}><Translate>服務</Translate></h2>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Left Box */}
            <div className="rounded-2xl p-12 shadow-lg flex flex-col justify-center min-h-96" style={{
              backgroundImage: "linear-gradient(135deg, #FF0000, #FF7F00, #FFFF00, #00FF00)"
            }}>
              <div className="space-y-4 text-white">
                <div>
                  <p className="text-3xl font-bold"><Translate>1對1網上私人教授</Translate></p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-start gap-2"><span>⭐</span> <Translate>中國語文，文言文(粵/國語教授)</Translate></p>
                  <p className="flex items-start gap-2"><span>⭐</span> <Translate>英國語文, 拼音, 閱讀, 寫作, 文法</Translate></p>
                  <p className="flex items-start gap-2"><span>⭐</span> <Translate>數學(粵/英語教授)</Translate></p>
                  <p className="flex items-start gap-2"><span>⭐</span> {t('trial.target')}: <Translate>小一</Translate>至<Translate>中三</Translate>的中小學生</p>
                  <p className="flex items-start gap-2"><span>⭐</span> <Translate>其他級別及科目可另作安排</Translate></p>
                </div>
              </div>
            </div>

            {/* Right Box */}
            <div className="rounded-2xl p-12 shadow-lg flex flex-col justify-center min-h-96" style={{
              backgroundImage: "linear-gradient(135deg, #0000FF, #4B0082, #9400D3, #FF1493)"
            }}>
              <div className="space-y-4 text-white">
                <div>
                  <p className="text-3xl font-bold"><Translate>1對1網上成人實用商業普通話教授</Translate></p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2"><span>⭐</span> <Translate>專門針對在職人士</Translate></p>
                  <p className="flex items-start gap-2"><span>⭐</span> <Translate>直接提升普通話語言能力</Translate></p>
                  <p className="flex items-start gap-2"><span>⭐</span> <Translate>面對中國龐大市場, 無論商業交易, 旅遊購物, 各類餐飲服務行業, 能夠以純熟普通話溝通, 提供服務必定勝人一籌!</Translate></p>
                  <p className="flex items-start gap-2"><span>⭐</span> 💰 <Translate>3倍+提高升職機會</Translate></p>
                  <p className="flex items-start gap-2"><span>⭐</span> 💰 <Translate>80%+薪金倍升</Translate></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAGE 2: FEATURES ===== */}
      <section id="features" className="w-full py-16 bg-gradient-to-b from-orange-100 to-orange-50">
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12" style={{
            backgroundImage: "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}><Translate>我們的特色</Translate></h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Feature 1 */}
            <Card className="p-8 text-center font-bold text-xl md:text-2xl" style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)",
              backgroundColor: "#FFB6C1",
              border: "2px solid #FF69B4"
            }}>
              <p className="text-5xl mb-2">🌐</p>
              <p><Translate>網上1對1</Translate></p>
              <p className="text-base mt-2"><Translate>老師親切地以學生母語互動</Translate></p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 text-center font-bold text-xl md:text-2xl" style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)",
              backgroundColor: "#87CEEB",
              border: "2px solid #4169E1"
            }}>
              <p className="text-5xl mb-2">💻</p>
              <p><Translate>專頁軟件輔助</Translate></p>
              <p className="text-base mt-2"><Translate>毋須使用數據</Translate></p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 text-center font-bold text-xl md:text-2xl" style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)",
              backgroundColor: "#90EE90",
              border: "2px solid #228B22"
            }}>
              <p className="text-5xl mb-2">⏰</p>
              <p><Translate>時間任擇</Translate></p>
              <p className="text-base mt-2"><Translate>靈活安排上課時間</Translate></p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 text-center font-bold text-xl md:text-2xl" style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)",
              backgroundColor: "#FFD700",
              border: "2px solid #FFA500"
            }}>
              <p className="text-5xl mb-2">💰</p>
              <p><Translate>學好普通話</Translate></p>
              <p className="text-lg mt-2"><Translate>⬆️ 加薪 ⚡ ⬆️ 升職 ⚡ 定必成功</Translate></p>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== PAGE 3: BENEFITS ===== */}
      <section id="benefits" className="w-full py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-brand-sky"><Translate>好處</Translate></h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-base md:text-lg mb-3"><Translate>{benefit.title}</Translate></h3>
                <p className="text-sm text-gray-600"><Translate>{benefit.description}</Translate></p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAGE 5: PROMISES ===== */}
      <section id="promises" className="w-full py-16" style={{ backgroundColor: "#99FFFF" }}>
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-white"><Translate>承諾</Translate></h2>

          <Card className="p-8 bg-white">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 text-base"><span className="font-bold"><Translate>免費試堂</Translate></span>：<Translate>先試為快，零費用</Translate></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 text-base"><span className="font-bold"><Translate>嚴格篩選</Translate></span>：<Translate>每位老師經過審核</Translate></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 text-base"><span className="font-bold"><Translate>負責到底</Translate></span>：<Translate>持續跟進，家長放心</Translate>�</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 text-base"><span className="font-bold"><Translate>溝通為先</Translate></span>：<Translate>了解學生性格先教學</Translate></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 text-base"><span className="font-bold"><Translate>退款保證</Translate></span>：<Translate>不滿意就全額退款</Translate></p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ===== PAGE 6: TUTORS ===== */}
      <section id="tutors" className="w-full py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-brand-sky"><Translate>師資</Translate></h2>

          <div className="grid grid-cols-3 gap-3">
            {/* Teachers with CVs */}
            {[
              { id: 1, name: "鍾妙君", img: "/manus-storage/teacher1_cv_6ae2cb70_bd11d069.webp" },
              { id: 2, name: "程虹", img: "/manus-storage/teacher2_cv_3cd6d0a3_212ce960.webp" },
              { id: 3, name: "程鍵旻", img: "/manus-storage/teacher3_cv_60bc3c80_11c43984.webp" },
              { id: 4, name: "張佳琦", img: "/manus-storage/teacher4_cv_21a420e9_21f62adb.webp" },
              { id: 5, name: "盧麗華", img: "/manus-storage/teacher5_cv_4bf4382a_b4e88f0c.webp" },
              { id: 6, name: "盧智欣", img: "/manus-storage/lo_chi_yan_cv_42fef7df_be50e58e.jpg" },
            ].map((teacher) => (
              <Card
                key={teacher.id}
                className="p-3 cursor-pointer hover:shadow-lg transition-all bg-gradient-to-br from-blue-100 to-sky-100 border-2 border-blue-300"
                onClick={() => {
                  const modal = document.createElement("div");
                  modal.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4";
                  modal.innerHTML = `
                    <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
                      <div class="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                        <h3 class="font-bold text-lg">${teacher.name} - 履歷</h3>
                        <button class="text-2xl font-bold">&times;</button>
                      </div>
                      <img src="${teacher.img}" alt="${teacher.name}" class="w-full" />
                      <div class="p-4 flex gap-3">
                        <button class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">下載</button>
                      </div>
                    </div>
                  `;
                  const closeBtn = modal.querySelector("button");
                  closeBtn?.addEventListener("click", () => modal.remove());
                  modal.addEventListener("click", (e) => {
                    if (e.target === modal) modal.remove();
                  });
                  document.body.appendChild(modal);
                }}
              >
                <div className="h-[150px] bg-gradient-to-br from-purple-200 to-pink-200 rounded flex items-center justify-center">
                  <p className="font-bold text-center text-lg md:text-xl"><Translate>{teacher.name}</Translate><br/><Translate>老師</Translate></p>
                </div>
              </Card>
            ))}

            {/* Pending slots */}
            {[1, 2, 3, 4, 5].map((idx) => (
              <Card key={`pending-${idx}`} className="p-3 h-[150px] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <p className="text-gray-500 font-semibold"><Translate>待定</Translate></p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAGE 7: PRACTICE ===== */}
      <section id="practice" className="w-full py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="container max-w-4xl">
          {!practiceState.selectedGrade ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-4" style={{
                  backgroundImage: "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}><Translate>練習</Translate></h2>
                <p className="text-lg text-gray-600">選擇您的<Translate>年級</Translate>開始練習</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { id: "p1", color: "bg-red-100 hover:bg-red-200" },
                  { id: "p2", color: "bg-orange-100 hover:bg-orange-200" },
                  { id: "p3", color: "bg-yellow-100 hover:bg-yellow-200" },
                  { id: "p4", color: "bg-green-100 hover:bg-green-200" },
                  { id: "p5", color: "bg-blue-100 hover:bg-blue-200" },
                  { id: "p6", color: "bg-indigo-100 hover:bg-indigo-200" },
                  { id: "s1", color: "bg-purple-100 hover:bg-purple-200" },
                  { id: "s2", color: "bg-pink-100 hover:bg-pink-200" },
                  { id: "s3", color: "bg-rose-100 hover:bg-rose-200" },
                ].map((grade) => {
                  const gradeInfo = exercisesDataMultilingual.find(g => g.grade === grade.id);
                  return (
                    <Button
                      key={grade.id}
                      onClick={() => handleGradeSelect(grade.id)}
                      className={`${grade.color} h-24 text-lg font-bold text-gray-800 border-2 border-gray-300 transition-all hover:shadow-lg`}
                    >
                      {gradeInfo ? getLocalizedText(gradeInfo.gradeLabel) : grade.id}
                    </Button>
                  );
                })}
              </div>
            </>
          ) : gradeData ? (
            <div id="practice-quiz">
              {!practiceState.submitted ? (
                <>
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-600">
                        第 {practiceState.currentQuestionIndex + 1} / {gradeData.questions.length} 題
                      </span>
                      <span className="text-sm font-semibold text-gray-600">
                        {getLocalizedText(gradeData.gradeLabel)} - {getLocalizedText(currentQuestion?.subject)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${((practiceState.currentQuestionIndex + 1) / gradeData.questions.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Question */}
                  <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-300 min-h-[200px] flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-center text-gray-800">
                      {getLocalizedText(currentQuestion?.question, currentQuestion?.subject)}
                    </h2>
                  </Card>

                  {/* Answer Options */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {currentQuestion?.options.map((option, idx) => (
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
                          <span>{getLocalizedText(option, currentQuestion?.subject)}</span>
                          {currentAnswer === idx && (
                            <span className="absolute top-2 right-2 text-xl">✓</span>
                          )}
                        </div>
                      </Button>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-4 justify-between">
                    <Button
                      onClick={() => setPracticeState({
                        ...practiceState,
                        currentQuestionIndex: Math.max(0, practiceState.currentQuestionIndex - 1)
                      })}
                      disabled={practiceState.currentQuestionIndex === 0}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-6 py-2"
                    >
                      <Translate>上一題</Translate>
                    </Button>

                    <div className="flex gap-4">
                      {practiceState.currentQuestionIndex === gradeData.questions.length - 1 ? (
                        <Button
                          onClick={handleSubmitQuiz}
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-2 text-lg"
                        >
                          <Translate>提交答案</Translate>
                        </Button>
                      ) : (
                        <Button
                          onClick={() => setPracticeState({
                            ...practiceState,
                            currentQuestionIndex: practiceState.currentQuestionIndex + 1
                          })}
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2"
                        >
                          <Translate>下一題</Translate>
                        </Button>
                      )}
                      <Button
                        onClick={handleBackToPractice}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2"
                      >
                        <Translate>返回</Translate>
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Results Summary */}
                  <Card className="p-8 mb-8 bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-300">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-brand-sky mb-4"><Translate>答題結果</Translate></h2>
                      <div className="text-5xl font-bold text-blue-600 mb-2">
                        {correctCount}/{gradeData.questions.length}
                      </div>
                      <p className="text-lg text-gray-600">
                        {t('practice.accuracy')}：{Math.round((correctCount / gradeData.questions.length) * 100)}%
                      </p>
                    </div>
                  </Card>

                  {/* Answer Review */}
                  <Card className="p-8 mb-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800"><Translate>答題詳情</Translate></h3>
                    <div className="space-y-4">
                      {gradeData.questions.map((question, idx) => {
                        const isCorrect = practiceState.selectedAnswers[idx] === question.correctAnswer;
                        return (
                          <div key={idx} className="p-4 border-l-4 border-gray-300 bg-gray-50 rounded">
                            <div className="flex items-start gap-3">
                              {isCorrect ? (
                                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                              ) : (
                                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                              )}
                              <div className="flex-1">
                                <p className="font-semibold text-gray-800">
                                  第 {idx + 1} 題 ({getLocalizedText(question.subject, question.subject)})
                                </p>
                                <p className="text-gray-600 mt-1">{getLocalizedText(question.question, question.subject)}</p>
                                <p className="text-sm mt-2">
                                  {t('practice.yourAnswer')}：
                                  <span className={isCorrect ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                                    {practiceState.selectedAnswers[idx] !== null ? getLocalizedText(question.options[practiceState.selectedAnswers[idx]!], question.subject) : t('practice.notAnswered')}
                                  </span>
                                </p>
                                {!isCorrect && (
                                  <p className="text-sm text-green-600 font-bold">
                                    {t('practice.correctAnswer')}：{getLocalizedText(question.options[question.correctAnswer], question.subject)}
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
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">{t('practice.answerKey')}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {gradeData.questions.map((question, idx) => (
                        <div key={idx} className="p-3 bg-white rounded border-2 border-blue-300 text-center">
                          <p className="text-sm font-semibold text-gray-600">第 {idx + 1} 題</p>
                          <p className="text-lg font-bold text-blue-600">
                            {getLocalizedText(question.options[question.correctAnswer], question.subject).charAt(0)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={handleRetryQuiz}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 text-lg"
                    >
                      <Translate>重做</Translate>
                    </Button>
                    <Button
                      onClick={handleBackToPractice}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-8 py-3 text-lg"
                    >
                      <Translate>返回頁面</Translate>
                    </Button>
                  </div>
                </>
              )}
            </div>
          ) : null}
        </div>
      </section>

      {/* ===== PAGE 8: TESTIMONIALS ===== */}
      <section id="testimonials" className="w-full py-16" style={{ backgroundColor: "#99FFFF" }}>
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-white">{testimonialsSectionText[language as Language]}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((testimonial, idx) => (
              <Card key={idx} className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">\"{testimonial.comment[language as Language]}\"</p>
                <p className="font-bold text-gray-800">— {testimonial.name[language as Language]}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAGE 9: FREE TRIAL ===== */}
      <section id="trial" className="w-full py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="container max-w-4xl">
          {trialFormState ? (
            // Success page
            <div className="text-center">
              <div className="mb-8">
                <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
              </div>
              <h2 className="text-5xl font-bold text-center mb-4 text-brand-sky">{t('trial.successTitle')}</h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('trial.successDesc')}
              </p>
              <Button
                onClick={() => setTrialFormState(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
              >
                {t('trial.back')}
              </Button>
            </div>
          ) : (
            // Form
            <>
              <h2 className="text-5xl font-bold text-center mb-12 text-brand-sky">{t('trial.title')}</h2>

              <Card className="p-8 bg-white">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      {t('trial.studentName')} *
                    </label>
                    <input
                      type="text"
                      required
                      id="studentName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                      placeholder={t('trial.phStudentName')}
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      {t('trial.parentPhone')} *
                    </label>
                    <input
                      type="tel"
                      required
                      id="parentPhone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                      placeholder={t('trial.phParentPhone')}
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      {t('trial.parentEmail')} *
                    </label>
                    <input
                      type="email"
                      required
                      id="parentEmail"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                      placeholder={t('trial.phParentEmail')}
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      {t('trial.subject')} *
                    </label>
                    <select
                      required
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                    >
                      <option value="">{t('trial.selectSubject')}</option>
                      <option value="chinese">{t('subject.chinese')}</option>
                      <option value="english">{t('subject.english')}</option>
                      <option value="math">{t('subject.math')}</option>
                      <option value="mandarin">{t('subject.mandarin')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      {t('trial.grade')} *
                    </label>
                    <select
                      required
                      id="grade"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                    >
                      <option value="">{t('trial.selectGrade')}</option>
                      <option value="p1">{t('grade.p1')}</option>
                      <option value="p2">{t('grade.p2')}</option>
                      <option value="p3">{t('grade.p3')}</option>
                      <option value="p4">{t('grade.p4')}</option>
                      <option value="p5">{t('grade.p5')}</option>
                      <option value="p6">{t('grade.p6')}</option>
                      <option value="s1">{t('grade.s1')}</option>
                      <option value="s2">{t('grade.s2')}</option>
                      <option value="s3">{t('grade.s3')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      {t('trial.remarks')}
                    </label>
                    <textarea
                      id="remarks"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                      placeholder={t('trial.phRemarks')}
                      rows={4}
                    />
                  </div>

                  <Button
                    onClick={() => {
                      const studentName = (document.getElementById('studentName') as HTMLInputElement)?.value;
                      const parentPhone = (document.getElementById('parentPhone') as HTMLInputElement)?.value;
                      const parentEmail = (document.getElementById('parentEmail') as HTMLInputElement)?.value;
                      const subject = (document.getElementById('subject') as HTMLSelectElement)?.value;
                      const grade = (document.getElementById('grade') as HTMLSelectElement)?.value;
                      const remarks = (document.getElementById('remarks') as HTMLTextAreaElement)?.value;

                      if (!studentName || !parentPhone || !parentEmail || !subject || !grade) {
                        alert(t('trial.required'));
                        return;
                      }

                      submitTrialForm.mutate({
                        studentName,
                        parentPhone,
                        parentEmail,
                        subject,
                        grade,
                        remarks: remarks || undefined,
                      });
                    }}
                    disabled={submitTrialForm.isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg mt-4"
                  >
                    {submitTrialForm.isPending ? t('trial.submitting') : t('trial.submit')}
                  </Button>
                </form>
              </Card>
            </>
          )}
        </div>
      </section>
      {/* ===== PAGE 10: FAQ ===== */}
      <section id="faq" className="min-h-screen py-16 px-4" style={{ backgroundColor: "#99FFFF" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16">{faqSectionText[language as Language]}</h2>

          <Card className="p-8 bg-white">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-lg font-semibold text-brand-sky hover:text-brand-sky/80">
                    <div className="flex items-center gap-3 text-left">
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                      {faq.question[language as Language]}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pt-4">
                    {faq.answer[language as Language]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
          <div className="mt-12 text-center">
            <p className="text-white text-lg">
              <Translate>還有其他問題？請联絡我們</Translate> <a href="mailto:info@truebridge.asia" className="font-bold underline">info@truebridge.asia</a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">About TrueBridge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('footer.contact')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#hero" className="text-gray-300 hover:text-white transition">{t('nav.home')}</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition">{t('nav.services')}</a></li>
                <li><a href="#tutors" className="text-gray-300 hover:text-white transition">{t('nav.tutors')}</a></li>
                <li><a href="#practice" className="text-gray-300 hover:text-white transition">{t('nav.practice')}</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white transition">{t('nav.faq')}</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:info@truebridge.asia" className="text-gray-300 hover:text-white transition">info@truebridge.asia</a>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span>💬</span>
                    <a href="https://wa.me/85269511288" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">{t('footer.whatsapp')}: +852 6951 1288</a>
                  </div>
                  <p className="text-xs text-gray-500 pl-6">{t('footer.whatsappHint')}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔗</span>
                  <span className="text-gray-300">{t('footer.wechat')} ID: wxid_beto3vj28dox22</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="text-center text-gray-400 text-sm">
              <p>{t('footer.copyright')}</p>
              <p className="mt-2">24/7 Customer Service Available</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
