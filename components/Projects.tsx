'use client';

import { useTranslations, useLocale } from '@/components/LocaleProvider';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Projects() {
  const t = useTranslations('projects');
  const { locale } = useLocale();
  const isArabic = locale === 'ar';

  const projects = [
    {
      step: '01',
      title: isArabic ? 'فورمولا 1' : 'Formula 1',
      description: isArabic ? 'وصف بالعربية' : 'Description in English',
      image: '/projects/formula1-1.jpg'
    },
    {
      step: '02',
      title: isArabic ? 'نجم' : 'Name in English',
      description: isArabic ? 'وصف بالعربية' : 'Description in English',
      image: '/projects/neom.jpg'
    },
    {
      step: '03',
      title: isArabic ? 'اسم بالعربية' : 'Name in English',
      description: isArabic ? 'وصف بالعربية' : 'Description in English',
      image: '/projects/factory.jpg'
    },
    {
      step: '04',
      title: isArabic ? 'اسم بالعربية' : 'Name in English',
      description: isArabic ? 'وصف بالعربية' : 'Description in English',
      image: '/projects/hilal.jpg'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200 hidden lg:block" />

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col lg:items-center gap-6",
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center z-10 hidden lg:flex">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <div className={cn(
                  "w-full lg:w-5/12 bg-white rounded-xl shadow-lg p-6 lg:p-8",
                  index % 2 === 0 ? "lg:mr-auto lg:pr-16" : "lg:ml-auto lg:pl-16"
                )}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-orange-600">
                        {project.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Image */}
                <div className={cn(
                  "w-full lg:w-5/12",
                  index % 2 === 0 ? "lg:ml-auto lg:pl-16" : "lg:mr-auto lg:pr-16"
                )}>
                  <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">
                {isArabic ? 'مشروع منجز' : 'Completed Projects'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">
                {isArabic ? 'مدينة' : 'Cities'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-600">
                {isArabic ? 'عميل راضٍ' : 'Happy Clients'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">
                {isArabic ? 'دعم فني' : 'Technical Support'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
