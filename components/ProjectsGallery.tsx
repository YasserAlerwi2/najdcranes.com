'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from '@/components/LocaleProvider';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProjectsGallery() {
  const t = useTranslations('projects');
  const { locale } = useLocale();
  const isArabic = locale === 'ar';

  // Define your projects with multiple images
  const projects = [
    {
      name: isArabic ? 'فورمولا 1' : 'Formula 1',
      images: [
        '/projects/formula1-1.jpg',
        '/projects/formula1-2.jpg',
        '/projects/formula1-3.jpg'
      ]
    },
    {
      name: isArabic ? 'توسعه الحرمين الشريفين مجموعه بن لادن السعوديه' : 'Development of the Two Holy Mosques, Saudi Bin Laden Group',
      images: [
        '/projects/رافعات_نجد_الحدثيه_تاجير_معدات_تاجير_رافعات.jpg',
        '/projects/رافعات_نجد_الحدثيه_تاجير_معدات_تاجير_رافعات1.jpg',
        '/projects/رافعات_نجد_الحدثيه_تاجير_معدات_تاجير_رافعات3.jpg'
      ]
    },
    {
      name: isArabic ? 'ملعب نادي الهلال الجديد' : 'New Al-Hilal Club Stadium',
      images: [
        '/projects/alhilal-1.jpg',
        '/projects/رافعات_نجد_الحدثيه_تاجير_معدات_تاجير_رافعات_الهلال.jpg',
      ]
    },
    
    {
      name: isArabic ? 'مركز الملك عبدالله المالي' : 'King Abdullah Financial Center',
      images: [
        '/projects/center-1.jpg',
        '/projects/center-2.jpg',
        '/projects/center-3.jpg',
      ]
    },
    {
      name: isArabic ? 'مشروع الدرعية' : 'Diriyah Project',
      images: [
        '/projects/رافعات_نجد_الحدثيه_تاجير_معدات_تاجير_رافعات_رافعات_رافعات.jpg',
        '/projects/رافعات_نجد_الحدثيه_تاجير_معدات_تاجير_رافعات_مشروع_درعه2.jpg',
        '/projects/رافعات_نجد_الحدثيه_تاجير_معدات_تاجير_رافعات_مشروع_درعه.jpg'
      ]
    },
  ];

  const [active, setActive] = useState<{ p: number; i: number } | null>(null);

  const close = () => setActive(null);
  const prev = () => {
    if (!active) return;
    const { p, i } = active;
    if (i > 0) setActive({ p, i: i - 1 });
  };
  const next = () => {
    if (!active) return;
    const { p, i } = active;
    if (i < projects[p].images.length - 1) setActive({ p, i: i + 1 });
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          {t('title')}
        </h2>

        {/* Project cards */}
        <div className="space-y-10">
          {projects.map((project, pIdx) => (
            <div key={pIdx} className="bg-white rounded-xl shadow-md">
              <h3 className="text-2xl font-bold py-3 text-center text-gray-900 border-b border-gray-200">
                {project.name}
              </h3>

              {/* Image scroller */}
              <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 snap-x md:snap-none snap-mandatory scroll-smooth px-0 py-4">
                {project.images.map((src, iIdx) => (
                  <div
                    key={iIdx}
                    className="flex-shrink-0 w-full md:w-full first:ml-4 last:mr-4 h-56 sm:h-72 snap-start rounded-xl overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`${project.name} ${isArabic ? 'تأجير رافعات، تأجير معدات ثقيلة، رافعة، مان ليفت، سيزر ليفت، بوم ترك، تيليهاندلر، خدمات رفع، إيجار معدات البناء، شركة رافعات في السعودية' : 'crane rental, heavy equipment rental, crane, man lift, scissor lift, boom truck, telehandler, lifting services, construction equipment hire, crane company in Saudi Arabia'}`} loading="lazy"
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setActive({ p: pIdx, i: iIdx })}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
          >
            <X className="h-7 w-7" />
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            disabled={active.i === 0}
            className={cn(
              'absolute left-4 text-white hover:text-orange-400 transition-colors',
              active.i === 0 && 'opacity-40 cursor-not-allowed'
            )}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Image */}
          <img
            src={projects[active.p].images[active.i]}
            alt="preview"
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
          />

          {/* Next */}
          <button
            onClick={next}
            disabled={active.i === projects[active.p].images.length - 1}
            className={cn(
              'absolute right-4 text-white hover:text-orange-400 transition-colors',
              active.i === projects[active.p].images.length - 1 && 'opacity-40 cursor-not-allowed'
            )}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  );
}
