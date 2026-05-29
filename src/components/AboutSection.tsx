import { Quote } from 'lucide-react';
import { memo } from 'react';

const AboutSection = memo(function AboutSection({ t }: { t: any }) {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* History Row */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="border-l-8 border-pingu-purple pl-8">
              <h3 className="text-4xl text-pingu-purple mb-6">{t.about.historyTitle}</h3>
              <p className="text-lg leading-relaxed text-slate-600 font-medium">{t.about.historyText}</p>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-pingu-bg">
              <img 
                src="./pingu-images/pingu-banner-1.webp" 
                className="w-full h-full object-cover" 
                alt="History" 
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pingu-logo-blue rounded-full flex items-center justify-center overflow-hidden shadow-xl border-4 border-pingu-purple animate-float">
              <img 
                src="./pingu-images/Pingu-about-icon.webp" 
                alt="Pingu" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* School Row */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative order-1 lg:order-1">
            <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-pingu-bg">
              <img 
                src="./pingu-images/pingu-banner-2.webp" 
                className="w-full h-full object-cover" 
                alt="School Activities" 
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pingu-logo-blue rounded-full flex items-center justify-center overflow-hidden shadow-xl border-4 border-pingu-blue animate-float" style={{ animationDelay: '1s' }}>
              <img 
                src="./pingu-images/Pingu-about-icon.webp" 
                alt="Pingu" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-2 lg:order-2">
            <div className="border-l-8 border-pingu-blue pl-8">
              <h3 className="text-4xl text-pingu-blue mb-6">{t.about.schoolTitle}</h3>
              <p className="text-lg leading-relaxed text-slate-600 font-medium">{t.about.schoolText}</p>
            </div>
          </div>
        </div>

        {/* CEO Message Row */}
        <div className="bg-pingu-purple text-white rounded-[4rem] overflow-hidden grid lg:grid-cols-2 min-h-[600px]">
          <div className="p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
            <Quote className="w-16 h-16 text-pingu-blue-light mb-8 opacity-50" aria-hidden="true" />
            <h3 className="text-4xl lg:text-5xl mb-8 italic">{t.about.directorTitle}</h3>
            <p className="text-xl leading-relaxed font-medium opacity-90">"{t.about.directorMessage}"</p>
          </div>
          <div className="relative order-1 lg:order-2 min-h-[400px]">
            <img
              src="./pingu-images/ping-ceo-message.webp"
              className="absolute inset-0 w-full h-full object-cover object-top"
              alt={t.about.directorName || "Director"}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
