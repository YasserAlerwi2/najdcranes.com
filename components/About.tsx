'use client';

import { useTranslations, useLocale } from '@/components/LocaleProvider';
import { Award, Users, Wrench, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  const t = useTranslations('about');
  const { locale } = useLocale();
  const isArabic = locale === 'ar';

  const features = [
    {
      icon: Award,
      title: isArabic ? 'خبرة واسعة' : 'Extensive Experience',
      description: isArabic 
        ? 'أكثر من 15 عاماً في مجال تأجير معدات البناء'
        : 'Over 15 years in construction equipment rental'
    },
    {
      icon: Users,
      title: isArabic ? 'فريق متخصص' : 'Specialized Team',
      description: isArabic 
        ? 'فريق من المهندسين والفنيين المدربين'
        : 'Team of trained engineers and technicians'
    },
    {
      icon: Wrench,
      title: isArabic ? 'معدات حديثة' : 'Modern Equipment',
      description: isArabic 
        ? 'أحدث المعدات والتقنيات العالمية'
        : 'Latest equipment and global technologies'
    },
    {
      icon: Shield,
      title: isArabic ? 'أمان وجودة' : 'Safety & Quality',
      description: isArabic 
        ? 'أعلى معايير الأمان والجودة'
        : 'Highest safety and quality standards'
    }
  ];

  const stats = [
    { number: '15+', label: t('experience') },
    { number: '500+', label: t('projects') },
    { number: '100+', label: t('equipment') },
    { number: '1000+', label: t('clients') }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-24 bg-gray-50">
      {/* Mobile background */}
      <div className="absolute inset-0 bg-cover bg-center lg:hidden" style={{ backgroundImage: 'url("/about/about-image.jpg")' }} />
      {/* Overlay for mobile */}
      <div className="absolute inset-0 bg-black/50 lg:hidden" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white lg:text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 lg:text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className={cn("", isArabic && "lg:order-2")}>
            <p className="text-base sm:text-lg text-gray-200 lg:text-gray-700 leading-relaxed mb-8">
              {t('description')}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div className={cn("", isArabic && "text-right")}>
                    <h3 className="text-base sm:text-lg font-semibold text-white lg:text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 lg:text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={cn("hidden lg:block", isArabic && "lg:order-1")}>
            <div className="relative">
              <img
                src="/about/about-image.jpg"
                alt={`${isArabic ? 'عن الشركة' : 'About Company'} ${isArabic ? 'رافعات، معدات ثقيلة، خبرة تأجير رافعات، شركة رافعات في السعودية' : 'cranes, heavy equipment, crane rental expertise, crane company in Saudi Arabia'}`} loading="lazy"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
