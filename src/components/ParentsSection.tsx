import { Star } from 'lucide-react';
import { memo } from 'react';

const ParentsSection = memo(function ParentsSection({ t }: { t: any }) {
  return (
    <section id="parents" className="py-24 bg-pingu-purple text-white rounded-t-[5rem] lg:rounded-t-[10rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl mb-6">{t.parents.tipsTitle}</h2>
          <div className="w-24 h-2 bg-pingu-blue mx-auto rounded-full" />
        </div>

        <div className="flex flex-col gap-8">
          {t.parents.reviews.map((review: string, i: number) => (
            <div key={i} className="p-12 bg-white rounded-[40px] text-pingu-purple flex flex-col md:flex-row items-center gap-12 shadow-2xl">
              <div className="w-16 h-16 shrink-0 text-pingu-blue shadow-[0_0_40px_rgba(7,159,195,0.3)] rounded-full flex items-center justify-center border-4 border-pingu-blue" aria-hidden="true">
                <Star className="w-8 h-8 fill-pingu-blue" />
              </div>
              <p className="text-2xl lg:text-3xl italic font-medium leading-relaxed text-left">"{review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ParentsSection;
