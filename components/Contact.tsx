

'use client';

import { useTranslations, useLocale } from '@/components/LocaleProvider';
import { Button } from '@/components/ui/button';
import { Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
  const t = useTranslations('contact');
  const { locale } = useLocale();
  const isArabic = locale === 'ar';

  
  const contactInfo: any[] = [];

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('form.title')}
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.phone')}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={t('form.phonePlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.service')}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="">{t('form.servicePlaceholder')}</option>
                  <option value="crane">{isArabic ? 'رافعات' : 'Cranes'}</option>
                  <option value="manlift">{isArabic ? 'مان ليفت' : 'Man Lift'}</option>
                  <option value="scissorlift">{isArabic ? 'سيزر ليفت' : 'Scissor Lift'}</option>
                  <option value="forklift">{isArabic ? 'فوركليفت' : 'Forklift'}</option>
                  <option value="boomtruck">{isArabic ? 'بوم ترك' : 'Boom Truck'}</option>
                  <option value="telehandler">{isArabic ? 'تيليهاندلر' : 'Telehandler'}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                {t('form.submit')}
                <Send className={cn("h-5 w-5", isArabic ? "mr-2" : "ml-2")} />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div className={cn("flex-1", isArabic && "text-right")}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    {info.link.startsWith('#') ? (
                      <p className="text-gray-600">{info.value}</p>
                    ) : (
                      <a
                        href={info.link}
                        className="text-orange-600 hover:text-orange-700 font-medium"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">
                {isArabic ? 'اتصال سريع' : 'Quick Contact'}
              </h3>
              <p className="text-orange-100 mb-4">
                {isArabic 
                  ? 'للاستفسارات العاجلة والطوارئ'
                  : 'For urgent inquiries and emergencies'
                }
              </p>
              <a
                href="tel:+966568810306"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                <Phone className={cn("h-5 w-5", isArabic ? "ml-2" : "mr-2")} />
                +966 56 881 0306
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
