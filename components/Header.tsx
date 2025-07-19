'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from '@/components/LocaleProvider';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Phone, Globe, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const { locale } = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}#about` },
    { name: t('equipment'), href: `/${locale}#equipment` },
    { name: t('projects'), href: `/${locale}#projects` },
    { name: t('contact'), href: `/${locale}#contact` },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header
      className="bg-white shadow-lg sticky top-0 z-50"
      dir={locale === 'ar' ? 'ltr' : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Image src="/رفعات_نجد_الحديثه.png" alt="Najd Cranes logo" width={40} height={40} className="w-full h-full object-contain" priority />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-gray-900">
                  {locale === 'ar' ? 'رافعات نجد الحديثة' : 'Modern Najd Cranes'}
                </div>
                <div className="text-sm text-gray-600">
                  {locale === 'ar' ? 'MODERN NAJD CRANES' : 'رافعات نجد الحديثة'}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href && "text-orange-600 bg-orange-50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="inline-flex items-center h-9 px-3 rounded-md border border-orange-600 text-orange-600 hover:bg-orange-50 transition-colors space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>{locale === 'ar' ? 'EN' : 'عربي'}</span>
            </Button>
            
            <a
              href="tel:+966555403290"
              className="flex items-center space-x-2 text-orange-600 hover:text-orange-700"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+966555403290</span>
            </a>
            
            <a
               href="https://wa.me/966555403290"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center h-9 px-3 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm font-medium"
             >
               <MessageCircle className="h-4 w-4 mr-2" />
               {locale === 'ar' ? 'واتساب' : 'WhatsApp'}
             </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden" dir={locale === 'ar' ? 'rtl' : undefined}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium", locale === 'ar' ? 'text-right' : '' ,
                  pathname === item.href && "text-orange-600 bg-orange-50"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t pt-4 mt-4">
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className={cn("w-full mb-2 inline-flex items-center justify-center h-9 rounded-md border border-orange-600 text-orange-600 hover:bg-orange-50 transition-colors")}
              >
                <Globe className={cn("h-4 w-4", locale === 'ar' ? 'ml-2' : 'mr-2')} />
                {locale === 'ar' ? 'English' : 'عربي'}
              </Button>
              
              <a
                href="tel:+966555403290"
                className={cn("flex items-center px-3 py-2 text-orange-600 hover:text-orange-700", locale === 'ar' && 'flex-row-reverse') }
              >
                <Phone className="h-4 w-4 mr-2" />
                +966555403290
              </a>
              
              <a
                 href="https://wa.me/966555403290"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full mt-2 inline-flex items-center justify-center h-9 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm font-medium"
               >
                 <MessageCircle className={cn("h-4 w-4", locale === 'ar' ? 'ml-2' : 'mr-2')} />
                 {locale === 'ar' ? 'واتساب' : 'WhatsApp'}
               </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
