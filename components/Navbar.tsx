import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.video'), href: "#videos" },
    { label: t('nav.services'), href: "#goals" },
    { label: t('nav.features'), href: "#features" },
    { label: t('nav.benefits'), href: "#benefits" },
    { label: t('nav.promises'), href: "#promises" },
    { label: t('nav.tutors'), href: "#tutors" },
    { label: t('nav.practice'), href: "#practice" },
    { label: t('nav.testimonials'), href: "#testimonials" },
    { label: t('nav.trial'), href: "/apply" },
    { label: t('nav.faq'), href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-sky bg-white/95 backdrop-blur shadow-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-primary hover:opacity-80 transition-opacity whitespace-nowrap">
            <img src="/manus-storage/truebridge-logo_f8cfd9e2_fc154194.jpg" alt="TrueBridge" className="h-12 w-12 rounded-full object-cover brightness-110 flex-shrink-0" />
            <span className="hidden sm:inline text-sm md:text-lg font-bold text-brand-sky whitespace-nowrap">{t('site.name')}</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-semibold text-foreground hover:text-brand-sky transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Language Switcher - Desktop */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/apply" asChild>
            <Button className="bg-brand-sky hover:bg-brand-sky/90 text-white font-bold ml-4">
              {t('nav.trial')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button & Language Switcher */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border">
              <Link href="/apply" asChild>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  {t('nav.trial')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
