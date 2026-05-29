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

        <div className="grid md:grid-cols-3 gap-10">
          {t.parents.tips.map((tip: any, i: number) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-12 rounded-[4rem] border border-white/20 text-center group hover:bg-white hover:text-pingu-purple transition-all flex flex-col items-center">
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-[3rem] bg-pingu-blue mx-auto mb-10 overflow-hidden shadow-xl group-hover:scale-110 transition-transform">
                <img 
                  src={tip.img || "./pingu-images/pingu-logo.webp"} 
                  className="w-full h-full object-cover" 
                  alt="Parent Tip" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4 className="text-3xl mb-4 italic leading-tight">{tip.title}</h4>
              <p className="text-sm font-medium opacity-80 leading-relaxed uppercase tracking-widest">{tip.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-white rounded-[40px] text-pingu-purple flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="w-16 h-16 shrink-0 text-pingu-blue shadow-[0_0_40px_rgba(7,159,195,0.3)] rounded-full flex items-center justify-center border-4 border-pingu-blue" aria-hidden="true">
            <Star className="w-8 h-8 fill-pingu-blue" />
          </div>
          <p className="text-2xl lg:text-3xl italic font-medium leading-relaxed">"{t.parents.testimonial}"</p>
        </div>
      </div>
    </section>
  );
});

export default ParentsSection;
