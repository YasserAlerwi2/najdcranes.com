import '../globals.css';
import { generateStructuredData } from '@/lib/utils';
import { LocaleProvider } from '../../components/LocaleProvider';
import { enKeywords, arKeywords } from '@/lib/keywords';

const locales = ['ar', 'en'];

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  
  return {
    title: locale === 'ar' ? 'شركة نجد للرافعات الحديثة' : 'Modern Najd Cranes Company',
    description: locale === 'ar' 
      ? 'شركة نجد للرافعات الحديثة - رائدة في مجال خدمات الرافعات والمعدات الثقيلة في المملكة العربية السعودية'
      : 'Modern Najd Cranes Company - Leading provider of crane services and heavy equipment in Saudi Arabia',
    keywords: locale === 'ar' ? arKeywords : enKeywords,
    openGraph: {
      title: locale === 'ar' ? 'شركة نجد للرافعات الحديثة' : 'Modern Najd Cranes Company',
      description: locale === 'ar' 
        ? 'شركة نجد للرافعات الحديثة - رائدة في مجال خدمات الرافعات والمعدات الثقيلة في المملكة العربية السعودية'
        : 'Modern Najd Cranes Company - Leading provider of crane services and heavy equipment in Saudi Arabia',
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'ar': '/ar',
        'en': '/en',
      },
    },
    icons: {
      icon: '/رفعات_نجد_الحديثه.png'
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  
  const messages = (await import(`../../messages/${locale}.json`)).default;
  
  const structuredData = generateStructuredData({
    type: 'Organization',
    name: locale === 'ar' ? 'شركة نجد للرافعات الحديثة' : 'Modern Najd Cranes Company',
    description: locale === 'ar' 
      ? 'شركة نجد للرافعات الحديثة - رائدة في مجال خدمات الرافعات والمعدات الثقيلة في المملكة العربية السعودية'
      : 'Modern Najd Cranes Company - Leading provider of crane services and heavy equipment in Saudi Arabia',
    url: `https://najdcranes.com/${locale}`,
    logo: 'https://najdcranes.com/رفعات_نجد_الحديثه.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966555403290',
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['ar', 'en']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressLocality: locale === 'ar' ? 'جدة' : 'Jeddah',
      addressRegion: locale === 'ar' ? 'منطقة جدة' : 'Jeddah Region'
    },
    sameAs: [
      'https://www.facebook.com/najdcranes',
      'https://www.twitter.com/najdcranes',
      'https://www.linkedin.com/company/najdcranes'
    ]
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <LocaleProvider locale={locale} messages={messages}>
        <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col">
          {children}
        </div>
      </LocaleProvider>
    </>
  );
}
