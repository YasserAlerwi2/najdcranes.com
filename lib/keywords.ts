// lib/keywords.ts
// SEO keyword lists for English and Arabic locales

const services = [
  'crane rental',
  'crane hire',
  'heavy equipment rental',
  'heavy lifting services',
  'mobile crane rental',
  'tower crane rental',
  'crawler crane rental',
  'crane maintenance',
  'crane repair',
  'crane parts',
  'crane sales',
  'crane transport',
  'crane operator services',
  'crane inspection',
  'crane certification',
  'crane safety services',
  'crane logistics',
  'overhead crane',
  'gantry crane',
  'self-erecting crane',
];

const features = [
  '24/7 service',
  'emergency crane services',
  'temporary crane rental',
  'long-term crane hire',
  'short-term crane rental',
];

const industries = [
  'construction',
  'oil and gas',
  'manufacturing',
  'infrastructure',
  'power plants',
];

const cities = [
  'Riyadh',
  'Jeddah',
  'Dammam',
  'Mecca',
  'Medina',
  'Khobar',
  'Hofuf',
  'Buraidah',
];

export const enKeywords: string[] = [
  ...services,
  ...features,
  ...industries.map(ind => `${ind} crane services`),
  ...cities.flatMap(city => services.map(service => `${service} in ${city}`)),
  ...cities.flatMap(city => industries.map(ind => `${ind} crane services in ${city}`)),
];

const servicesAr = [
  'رافعات',
  'معدات ثقيلة',
  'شركة نجد',
  'تأجير رافعات',
  'كرين',
  'معدات البناء',
  'صيانة الرافعات',
  'إصلاح الرافعات',
  'قطع غيار رافعات',
  'بيع الرافعات',
  'خدمات الصيانة',
  'تأجير معدات ثقيلة',
  'خدمات رفع ثقيلة',
  'كرينات',
];

const industriesAr = [
  'الإنشاءات',
  'النفط والغاز',
  'التصنيع',
  'البنية التحتية',
  'محطات الطاقة',
];

const citiesAr = [
  'الرياض',
  'جدة',
  'الدمام',
  'مكة المكرمة',
  'المدينة المنورة',
  'الخبر',
  'الهفوف',
  'بريدة',
];

export const arKeywords: string[] = [
  ...servicesAr,
  ...citiesAr,
  ...industriesAr.map(ind => `خدمات رافعات ${ind}`),
  ...citiesAr.flatMap(city => servicesAr.map(service => `${service} في ${city}`)),
  ...citiesAr.flatMap(city => industriesAr.map(ind => `خدمات رافعات ${ind} في ${city}`)),
];
