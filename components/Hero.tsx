'use client';

import { useState, useEffect } from 'react';

import { useTranslations, useLocale } from '@/components/LocaleProvider';
import { Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');
  const { locale } = useLocale();
  const [current, setCurrent] = useState(0);
  const images = ['/hero/hero1.jpg', '/hero/hero2.jpg', '/hero/hero3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  const isArabic = locale === 'ar';

  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${images[current]}")`,
          filter: 'brightness(0.8)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-orange-900/20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-32 md:pb-40 text-center">
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-3 md:mb-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
              <Image src="/رفعات_نجد_الحديثه.png" alt="تأجير_رافعات_تأجير_معدات_ثقيلة_رافعة_مان_ليفت_سيزر_ليفت_بوم_ترك_تيليهاندلر_خدمات_رفع،_إيجار_معدات_البناء،_شركة_رافعات_في_السعودية_رافعات_نجد_الحديثه_مشاريع_لافعات_نجد" width={96} height={96} className="w-full h-full object-contain" priority />
            </div>
          </div>
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 mb-2">
              {t('subtitle')}
            </p>
            <p className="text-lg text-gray-300 uppercase tracking-wider">
              MODERN NAJD CRANES
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-12">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <a
            href="https://wa.me/+966555403290"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-green-500 hover:bg-green-600 text-white rounded-md text-base md:text-lg font-semibold transition-colors"
          >
            <MessageCircle className={cn("h-5 w-5", isArabic ? "mr-2" : "ml-2")} />
            {isArabic ? 'واتساب' : 'WhatsApp'}
          </a>
          
          <a
            href="tel:+966555403290"
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 border border-white text-white hover:bg-white hover:text-gray-900 rounded-md text-sm md:text-base font-semibold transition-colors"
          >
            <Phone className={cn("h-5 w-5", isArabic ? "ml-2" : "mr-2")} />
            {isArabic ? 'اتصال بنا' : 'Call Us'}
          </a>
        </div>

        {/* Mobile Stats */}
        <div className="hidden">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">15+</div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">
              {isArabic ? 'سنوات خبرة' : 'Years'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">500+</div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">
              {isArabic ? 'مشاريع' : 'Projects'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">100+</div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">
              {isArabic ? 'معدات' : 'Equipment'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">1000+</div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">
              {isArabic ? 'عملاء' : 'Clients'}
            </div>
          </div>
        </div>

        {/* Stats (desktop) */}
        <div className="hidden">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">15+</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              {isArabic ? 'سنوات خبرة' : 'Years Experience'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              {isArabic ? 'مشروع منجز' : 'Projects Completed'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">100+</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              {isArabic ? 'معدة حديثة' : 'Modern Equipment'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">1000+</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              {isArabic ? 'عميل راضٍ' : 'Happy Clients'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
