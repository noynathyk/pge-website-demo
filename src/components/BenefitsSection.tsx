import { memo } from 'react';

const BenefitsSection = memo(function BenefitsSection({ t }: { t: any }) {
  return (
    <section className="py-24 bg-pingu-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.benefits.map((benefit: any, i: number) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform block" aria-hidden="true">{benefit.icon}</div>
              <h4 className="text-2xl text-pingu-purple mb-4">{benefit.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default BenefitsSection;
