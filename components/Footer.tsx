'use client';

import { useTranslations, useLocale } from '@/components/LocaleProvider';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const { locale } = useLocale();
  const isArabic = locale === 'ar';

  const quickLinks = [
    { name: t('about'), href: `/${locale}#about` },
    { name: t('equipment'), href: `/${locale}#equipment` },
    { name: t('projects'), href: `/${locale}#projects` },
    { name: t('contact'), href: `/${locale}#contact` }
  ];

  const services = [
    { name: isArabic ? 'رافعات' : 'Cranes', href: `/${locale}#equipment` },
    { name: isArabic ? 'مان ليفت' : 'Man Lift', href: `/${locale}#equipment` },
    { name: isArabic ? 'سيزر ليفت' : 'Scissor Lift', href: `/${locale}#equipment` },
    { name: isArabic ? 'فوركليفت' : 'Forklift', href: `/${locale}#equipment` },
    { name: isArabic ? 'بوم ترك' : 'Boom Truck', href: `/${locale}#equipment` },
    { name: isArabic ? 'تيليهاندلر' : 'Telehandler', href: `/${locale}#equipment` }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Image src="/رفعات_نجد_الحديثه.png" alt="Najd Cranes logo" width={40} height={40} className="w-full h-full object-contain" priority />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold">
                  {isArabic ? 'رافعات نجد الحديثة' : 'Modern Najd Cranes'}
                </div>
                <div className="text-sm text-gray-400">
                  MODERN NAJD CRANES
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('description')}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{isArabic ? 'معداتنا' : 'Our Equipment'}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('contact')}</h3>
            <div className="space-y-4">
              <a href="https://maps.app.goo.gl/h4t8iC3NUdnt8nQV9?g_st=iwb" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 hover:text-orange-400">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {isArabic ? 'جدة المملكة العربية السعودية' : 'Jeddah, Saudi Arabia'}
                </span>
              </a>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a
                  href="tel:+966555403290"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  +966 56 881 0306
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a
                  href="tel:+966555403290"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  +966 55 540 3290
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:m.c.najd.est@gmail.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  m.c.najd.est@gmail.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-orange-400 mb-2">
                {isArabic ? 'ساعات العمل' : 'Working Hours'}
              </h4>
              <p className="text-sm text-gray-300">
                {isArabic ? 'الأحد - الخميس' : 'Sunday - Thursday'}
              </p>
              <p className="text-sm text-gray-300">
                7:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 {isArabic ? 'رافعات نجد الحديثة' : 'Modern Najd Cranes'}. {t('rights')}
            </div>    
           <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {isArabic ? 'تم تطويره بواسطة ياسر العروي' : 'Developed by Yasser Alerwi'}
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-orange-400 transition-colors">
                {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </Link>
              <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-orange-400 transition-colors">
                {isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
