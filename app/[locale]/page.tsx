import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectsGallery from '@/components/ProjectsGallery';
import Equipment from '@/components/Equipment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { generateStructuredData } from '@/lib/utils';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    metadataBase: new URL('https://najdcranes.com'),
    title: locale === 'ar' ? 'رافعات نجد الحديثة' : 'Modern Najd Cranes',
    description: locale === 'ar' 
      ? 'رافعات نجد الحديثة توفر خدمات تأجير الرافعات والمعدات الثقيلة مثل الرافعة، المان ليفت، السيزر ليفت، البوم ترك، التيليهاندلر وغيرها في جميع أنحاء المملكة العربية السعودية مع طاقم محترف وخبرة طويلة.'
      : 'Modern Najd Cranes offers crane and heavy equipment rental services including cranes, man lifts, scissor lifts, boom trucks, telehandlers and more across Saudi Arabia with professional crew and long experience.',
    keywords: locale === 'ar' 
      ? 'تأجير رافعات, تأجير معدات ثقيلة, رافعات, مان ليفت, سيزر ليفت, بوم ترك, تيليهاندلر, خدمات رفع, إيجار معدات البناء, شركة رافعات في السعودية, رافعات نجد الحديثة, هيفي ليفت, كرين, كرانات, سعودية'
      : 'crane rental, heavy equipment rental, cranes, man lift, scissor lift, boom truck, telehandler, lifting services, construction equipment hire, crane company in Saudi Arabia, Najd cranes, heavy lift, Saudi Arabia',
    openGraph: {
      url: `https://najdcranes.com/${locale}`,
      siteName: 'Najd Cranes',
      title: locale === 'ar' ? 'رافعات نجد الحديثة' : 'Modern Najd Cranes',
      description: locale === 'ar' 
        ? 'شركة رائدة في تأجير معدات البناء والرافعات في السعودية' 
        : 'Leading company in construction equipment and crane rental in Saudi Arabia',
      type: 'website',
      locale: locale,
    },
    alternates: {
      canonical: `https://najdcranes.com/${locale}`,
      languages: {
        'ar': '/ar',
        'en': '/en',
      },
    },
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  
  // Generate structured data for SEO
  const structuredData = generateStructuredData({
    type: 'Organization',
    name: locale === 'ar' ? 'رافعات نجد الحديثة' : 'Modern Najd Cranes',
    description: locale === 'ar' 
      ? 'شركة رائدة في تأجير معدات البناء والرافعات في السعودية'
      : 'Leading company in construction equipment and crane rental in Saudi Arabia',
    url: `https://najdcranes.com/${locale}`,
    logo: 'https://najdcranes.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966568810306',
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['Arabic', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: 'Riyadh',
      addressLocality: 'Riyadh'
    },
    sameAs: [
      'https://twitter.com/najdcranes',
      'https://linkedin.com/company/najdcranes'
    ]
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Equipment />
          <ProjectsGallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
