'use client';

import { useTranslations, useLocale } from '@/components/LocaleProvider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Construction, Truck, Forklift, Wrench, Building, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Services() {
  const t = useTranslations('services');
  const { locale } = useLocale();
  const isArabic = locale === 'ar';

  const services = [
    {
      icon: Construction,
      title: t('crane.title'),
      description: t('crane.description'),
      image: '/services/crane.jpg'
    },
    {
      icon: Building,
      title: t('manlift.title'),
      description: t('manlift.description'),
      image: '/services/manlift.jpg'
    },
    {
      icon: Zap,
      title: t('scissorlift.title'),
      description: t('scissorlift.description'),
      image: '/services/scissorlift.jpg'
    },
    {
      icon: Forklift,
      title: t('forklift.title'),
      description: t('forklift.description'),
      image: '/services/forklift.jpg'
    },
    {
      icon: Truck,
      title: t('boomtruck.title'),
      description: t('boomtruck.description'),
      image: '/services/boomtruck.jpg'
    },
    {
      icon: Wrench,
      title: t('telehandler.title'),
      description: t('telehandler.description'),
      image: '/services/telehandler.jpg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} ${isArabic ? 'تأجير رافعات، تأجير معدات ثقيلة، خدمات تركيب، صيانة، شركة رافعات في السعودية' : 'crane rental, heavy equipment rental, installation services, maintenance, crane company in Saudi Arabia'}`} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors"
                >
                  {isArabic ? 'اعرف المزيد' : 'Learn More'}
                  <ArrowRight className={cn("h-4 w-4", isArabic ? "mr-2" : "ml-2")} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            {isArabic ? 'هل تحتاج لخدمة مخصصة؟' : 'Need a Custom Service?'}
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            {isArabic 
              ? 'نحن نقدم حلول مخصصة لجميع احتياجات مشاريعكم. تواصل معنا للحصول على استشارة مجانية.'
              : 'We provide custom solutions for all your project needs. Contact us for a free consultation.'
            }
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-orange-600 hover:bg-orange-50 border-white"
          >
            {isArabic ? 'تواصل معنا' : 'Contact Us'}
            <ArrowRight className={cn("h-5 w-5", isArabic ? "mr-2" : "ml-2")} />
          </Button>
        </div>
      </div>
    </section>
  );
}
