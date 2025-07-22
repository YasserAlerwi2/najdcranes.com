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

  // SEO JSON-LD graph including services and products
  const providerName = locale === 'ar' ? 'شركة نجد للرافعات الحديثة' : 'Modern Najd Cranes Company';
  const serviceTypes = locale === 'ar'
    ? ['تأجير رافعات','تأجير معدات ثقيلة','تأجير كرين متحرك','تأجير كرين البرج','تأجير كرين الزاحف','تأجير رافعة علوية','تأجير كرين بوابة','تأجير كرين ذاتي التركيب']
    : ['crane rental','heavy equipment rental','mobile crane rental','tower crane rental','crawler crane rental','overhead crane rental','gantry crane rental','self-erecting crane rental'];
  const servicesGraph = serviceTypes.map(service => ({
    '@type': 'Service',
    serviceType: service,
    provider: { '@type': 'Organization', name: providerName },
  }));
  const equipmentList = [
    { type: locale === 'ar' ? 'كرين متحرك' : 'Mobile Crane', model: 'X2000', capacity: '50 tons' },
    { type: locale === 'ar' ? 'كرين البرج' : 'Tower Crane', model: 'T500', capacity: '10 tons' },
    { type: locale === 'ar' ? 'كرين الزاحف' : 'Crawler Crane', model: 'C300', capacity: '80 tons' },
    { type: locale === 'ar' ? 'رافعة علوية' : 'Overhead Crane', model: 'O400', capacity: '20 tons' },
    { type: locale === 'ar' ? 'كرين بوابة' : 'Gantry Crane', model: 'G250', capacity: '30 tons' },
    { type: locale === 'ar' ? 'كرين ذاتي التركيب' : 'Self-Erecting Crane', model: 'S150', capacity: '15 tons' },
  ];
  const productsGraph = equipmentList.map(e => ({
    '@type': 'Product',
    name: `${e.type} ${e.model}`,
    category: e.type,
    description: locale === 'ar'
      ? `معد ${e.type} ${e.model} بسعة تحمل ${e.capacity}`
      : `${e.type} model ${e.model} suitable for heavy lifting up to ${e.capacity}`,
    brand: { '@type': 'Brand', name: providerName },
    offers: { '@type': 'Offer', priceCurrency: 'SAR', availability: 'https://schema.org/InStock' },
  }));
  const graphData = {
    '@context': 'https://schema.org',
    '@graph': [structuredData, ...servicesGraph, ...productsGraph],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graphData),
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
