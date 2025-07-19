'use client';

import { useTranslations, useLocale } from '@/components/LocaleProvider';

import { MessageCircle, Phone, Construction, Building, Zap, Forklift, Truck, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Equipment() {
  const t = useTranslations('equipment');
  const { locale } = useLocale();
  const isArabic = locale === 'ar';

  const equipment = [
    {
      icon: Construction,
      name: isArabic ? 'رافعات' : 'Cranes',
      nameEn: 'CRANE',
      image: '/equipment/crane.png',
      specs: isArabic ? 'قدرات مختلفة من 5 إلى 500 طن' : 'Various capacities from 5 to 500 tons',
       desc: isArabic ? 'مثالية لرفع الأحمال الثقيلة في مواقع البناء المختلفة.' : 'Ideal for heavy lifting on construction sites.'
    },
    {
      icon: Building,
      name: isArabic ? 'مان ليفت' : 'Man Lift',
      nameEn: 'MANLIFT',
      image: '/equipment/manlift.png',
      specs: isArabic ? 'ارتفاع يصل إلى 40 متر' : 'Height up to 40 meters',
       desc: isArabic ? 'توفر وصولاً آمناً للأعمال على الارتفاعات.' : 'Provides safe access for work at heights.'
    },
    {
      icon: Zap,
      name: isArabic ? 'سيزر ليفت' : 'Scissor Lift',
      nameEn: 'SCISSOR LIFT',
      image: '/equipment/scissorlift.png',
      specs: isArabic ? 'منصات مقصية للأعمال المتنوعة' : 'Scissor platforms for various work',
       desc: isArabic ? 'حل عملي للعمل في المساحات الضيقة.' : 'Practical solution for tight spaces.'
    },
    {
      icon: Forklift,
      name: isArabic ? 'فوركليفت' : 'Forklift',
      nameEn: 'FORKLIFT',
      image: '/equipment/forklift.jpg',
      specs: isArabic ? 'قدرات رفع من 1.5 إلى 25 طن' : 'Lifting capacity from 1.5 to 25 tons',
       desc: isArabic ? 'مثالي للمستودعات ونقل المواد.' : 'Ideal for warehouses and material handling.'
    },
    {
      icon: Truck,
      name: isArabic ? 'بوم ترك' : 'Boom Truck',
      nameEn: 'BOOM TRUCK',
      image: '/equipment/boomtruck.jpg',
      specs: isArabic ? 'شاحنات مجهزة برافعات متحركة' : 'Trucks equipped with mobile cranes',
       desc: isArabic ? 'رفع المعدات والمواد للأماكن المرتفعة.' : 'Lifts equipment and materials to elevated areas.'
    },
    {
      icon: Wrench,
      name: isArabic ? 'تيليهاندلر' : 'Telehandler',
      nameEn: 'TELEHANDLER',
      image: '/equipment/telehandler.jpg',
      specs: isArabic ? 'معدات متعددة الاستخدامات' : 'Multi-purpose equipment',
       desc: isArabic ? 'متعدد الاستخدامات في مواقع العمل المختلفة.' : 'Versatile in different job sites.'
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-white">
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
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} ${isArabic ? 'تأجير رافعات، تأجير معدات ثقيلة، رافعة، مان ليفت، سيزر ليفت، بوم ترك، تيليهاندلر، خدمات رفع، إيجار معدات البناء، شركة رافعات في السعودية' : 'crane rental, heavy equipment rental, crane, man lift, scissor lift, boom truck, telehandler, lifting services, construction equipment hire, crane company in Saudi Arabia'}`} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Equipment Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-orange-200 text-sm font-medium uppercase tracking-wider">
                      {item.nameEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-2">{item.specs}</p>
                <p className="text-gray-500 mb-4">{item.desc}</p>
                
                <div className="flex items-center justify-between">
                  <a
                    href={`https://wa.me/966555403290?text=${encodeURIComponent(isArabic ? 'أرغب في استئجار ' + item.name : 'I would like to rent ' + item.nameEn)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-green-600 text-green-600 rounded-md text-sm font-medium hover:bg-green-600 hover:text-white transition-colors"
                  >
                    {isArabic ? 'واتساب' : 'WhatsApp'}
                    <MessageCircle className={cn('h-4 w-4', isArabic ? 'mr-2' : 'ml-2')} />
                  </a>
                  
                  <a
                    href="tel:+966555403290"
                    className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700 transition-colors"
                  >
                    {isArabic ? 'اتصل الآن' : 'Call Now'}
                    <Phone className={cn('h-4 w-4', isArabic ? 'mr-2' : 'ml-2')} />
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/5 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Construction className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {isArabic ? 'معدات حديثة' : 'Modern Equipment'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'أحدث المعدات والتقنيات العالمية المعتمدة'
                  : 'Latest certified global equipment and technologies'
                }
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {isArabic ? 'صيانة دورية' : 'Regular Maintenance'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'صيانة دورية وفحص شامل لضمان الأداء الأمثل'
                  : 'Regular maintenance and comprehensive inspection for optimal performance'
                }
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {isArabic ? 'دعم فني' : 'Technical Support'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'دعم فني متخصص على مدار الساعة'
                  : 'Specialized technical support 24/7'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
