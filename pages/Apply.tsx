import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export function Apply() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    parentName: "",
    whatsapp: "",
    email: "",
    grade: "",
    subjects: [] as string[],
    painPoints: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const submitMutation = trpc.trialApply.submit.useMutation();

  const gradeKeys = [
    "grade.p1",
    "grade.p2",
    "grade.p3",
    "grade.p4",
    "grade.p5",
    "grade.p6",
    "grade.s1",
    "grade.s2",
    "grade.s3",
  ];

  const subjectKeys = [
    "subject.chinese",
    "subject.english",
    "subject.math",
    "subject.mandarin",
    "subject.classical",
    "subject.mathEnglish",
  ];

  const handleSubjectChange = (subjectKey: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      subjects: checked
        ? [...prev.subjects, subjectKey]
        : prev.subjects.filter((s) => s !== subjectKey),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.parentName.trim()) {
      toast.error(t("apply.errorParentName"));
      return;
    }
    if (!formData.whatsapp.trim()) {
      toast.error(t("apply.errorWhatsapp"));
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error(t("apply.errorEmail"));
      return;
    }
    if (!formData.grade) {
      toast.error(t("apply.errorGrade"));
      return;
    }
    if (formData.subjects.length === 0) {
      toast.error(t("apply.errorSubject"));
      return;
    }
    if (!formData.painPoints.trim()) {
      toast.error(t("apply.errorPainPoints"));
      return;
    }

    try {
      await submitMutation.mutateAsync({
        studentName: formData.parentName,
        parentPhone: formData.whatsapp,
        parentEmail: formData.email,
        grade: t(formData.grade),
        subject: formData.subjects.map((k) => t(k)).join("、"),
        remarks: formData.painPoints,
      });

      setSubmitted(true);
      toast.success(t("apply.successToast"));

      setFormData({
        parentName: "",
        whatsapp: "",
        email: "",
        grade: "",
        subjects: [],
        painPoints: "",
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      toast.error(t("apply.errorToast"));
      console.error(error);
    }
  };

  // Full-page success screen
  if (submitted) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        style={{
          background: "radial-gradient(ellipse at center, #d4f7d4 0%, #e8f5e9 40%, #fffde7 100%)",
        }}
      >
        {/* Animated checkmark */}
        <div className="mb-8" style={{ animation: "scaleIn 0.5s cubic-bezier(0.23,1,0.32,1) both" }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" stroke="#22c55e" strokeWidth="6" fill="none" opacity="0.25" />
            <circle cx="60" cy="60" r="44" stroke="#22c55e" strokeWidth="5" fill="none" opacity="0.5" />
            <circle cx="60" cy="60" r="32" stroke="#16a34a" strokeWidth="4" fill="none" />
            <path d="M40 61L54 75L80 47" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          {t("apply.successTitle")}
        </h1>
        <p className="text-xl text-gray-700 max-w-lg text-center mb-10 leading-relaxed">
          {t("apply.successDesc")}
        </p>
        <Link href="/">
          <a
            style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity"
          >
            {t("trial.back")}
          </a>
        </Link>
        <style>{`
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.7); }
            to   { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4" style={{ background: "linear-gradient(135deg, #FF9999 0%, #FFFACD 100%)" }}>
      <div className="container max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            {t("apply.title")}
          </h1>
          <p className="text-2xl text-white/90">
            {t("apply.subtitle")}
          </p>
        </div>

        {/* Form */}
        <Card className="p-8 bg-white/95 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Parent Name */}
            <div>
              <Label htmlFor="parentName" className="text-base font-semibold mb-2 block">
                1. {t("apply.parentName")} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="parentName"
                type="text"
                placeholder={t("apply.namePlaceholder")}
                value={formData.parentName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, parentName: e.target.value }))
                }
                className="text-base"
              />
            </div>

            {/* 2. WhatsApp */}
            <div>
              <Label htmlFor="whatsapp" className="text-base font-semibold mb-2 block">
                2. {t("apply.whatsapp")} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder={t("apply.whatsappPlaceholder")}
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))
                }
                className="text-base"
              />
              <p className="text-xs text-muted-foreground mt-2">
                {t("apply.whatsappHint")}
              </p>
            </div>

            {/* 3. Email */}
            <div>
              <Label htmlFor="email" className="text-base font-semibold mb-2 block">
                3. {t("apply.email")} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t("apply.emailPlaceholder")}
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="text-base"
              />
            </div>

            {/* 4. Grade */}
            <div>
              <Label htmlFor="grade" className="text-base font-semibold mb-2 block">
                4. {t("apply.grade")} <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.grade} onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, grade: value }))
              }>
                <SelectTrigger className="text-base">
                  <SelectValue placeholder={t("trial.selectGrade")} />
                </SelectTrigger>
                <SelectContent>
                  {gradeKeys.map((key) => (
                    <SelectItem key={key} value={key}>
                      {t(key)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 5. Subjects */}
            <div>
              <Label className="text-base font-semibold mb-4 block">
                5. {t("apply.subjects")} <span className="text-red-500">*</span>
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {subjectKeys.map((subjectKey) => (
                  <div key={subjectKey} className="flex items-center space-x-2">
                    <Checkbox
                      id={subjectKey}
                      checked={formData.subjects.includes(subjectKey)}
                      onCheckedChange={(checked) =>
                        handleSubjectChange(subjectKey, checked as boolean)
                      }
                    />
                    <Label htmlFor={subjectKey} className="font-normal cursor-pointer">
                      {t(subjectKey)}
                    </Label>
                  </div>
                ))}
              </div>
              {formData.subjects.length === 0 && (
                <p className="text-xs text-red-500 mt-2">{t("apply.selectAtLeastOne")}</p>
              )}
            </div>

            {/* 6. Pain Points */}
            <div>
              <Label htmlFor="painPoints" className="text-base font-semibold mb-2 block">
                6. {t("apply.painPoints")} <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="painPoints"
                placeholder={t("apply.painPointsPlaceholder")}
                value={formData.painPoints}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, painPoints: e.target.value }))
                }
                rows={5}
                className="text-base"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitMutation.isPending}
              style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
              className="w-full hover:opacity-90 disabled:opacity-60 font-bold py-4 text-lg rounded-lg transition-opacity"
            >
              {submitMutation.isPending ? t("apply.submitting") : t("apply.submit")}
            </button>

            {/* Info */}
            <div className="flex gap-3 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {t("apply.infoNote")}
              </p>
            </div>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-2xl text-white/90 mb-4">{t("apply.contact")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/85269511288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
            >
              💬 {t("apply.whatsappContact")}
            </a>
            <a
              href="mailto:info@truebridge.asia"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
            >
              📧 {t("apply.emailContact")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
