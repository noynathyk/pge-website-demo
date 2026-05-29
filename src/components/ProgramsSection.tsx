import { motion } from 'motion/react';
import { memo, useState } from 'react';

const ProgramsSection = memo(function ProgramsSection({ t }: { t: any }) {
  const [activeTab, setActiveTab] = useState<'tots' | 'elt'>('tots');

  return (
    <section id="programs" className="py-24 bg-pingu-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl text-pingu-purple mb-6">{t.programs.title}</h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 font-bold">{t.programs.subtitle}</p>
        </div>

        {/* Dynamic Category Selector switcher */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-20">
          {/* Tots Program Tab */}
          <button
            onClick={() => setActiveTab('tots')}
            className={`flex items-center gap-6 p-6 rounded-[2.5rem] border-4 transition-all duration-300 text-left cursor-pointer ${
              activeTab === 'tots'
                ? 'border-orange-500 bg-orange-50/50 shadow-lg scale-102'
                : 'border-white/50 bg-white/40 backdrop-blur-sm hover:border-orange-200 hover:shadow-md'
            }`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-white rounded-3xl p-2 shadow-sm flex items-center justify-center">
              <img
                src="./pingu-images/Logo.1-Tots Program.webp"
                className="w-full h-full object-contain"
                alt="Tots Logo"
              />
            </div>
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-1 ${
                activeTab === 'tots' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100/80 text-slate-500'
              }`}>
                {t.programs.totsAge}
              </span>
              <h3 className="text-2xl text-slate-800 font-black tracking-tight">{t.programs.totsTab}</h3>
            </div>
          </button>

          {/* ELT Program Tab */}
          <button
            onClick={() => setActiveTab('elt')}
            className={`flex items-center gap-6 p-6 rounded-[2.5rem] border-4 transition-all duration-300 text-left cursor-pointer ${
              activeTab === 'elt'
                ? 'border-pingu-blue bg-pingu-blue/5 shadow-lg scale-102'
                : 'border-white/50 bg-white/40 backdrop-blur-sm hover:border-pingu-blue/30 hover:shadow-md'
            }`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-white rounded-3xl p-2 shadow-sm flex items-center justify-center">
              <img
                src="./pingu-images/Logo.2-ELT Program.webp"
                className="w-full h-full object-contain"
                alt="ELT Logo"
              />
            </div>
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-1 ${
                activeTab === 'elt' ? 'bg-pingu-blue/15 text-pingu-blue' : 'bg-slate-100/80 text-slate-500'
              }`}>
                {t.programs.eltAge}
              </span>
              <h3 className="text-2xl text-slate-800 font-black tracking-tight">{t.programs.eltTab}</h3>
            </div>
          </button>
        </div>

        {/* Tab Content Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === 'tots' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'tots' ? (
            /* Tots Program Section Detail */
            <div className="space-y-20">
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                <div className="w-48 sm:w-60 mb-8 select-none">
                  <img
                    src="./pingu-images/Logo.1-Tots Program.webp"
                    className="w-full h-auto object-contain"
                    alt="Tots Logo Large"
                  />
                </div>
                <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-medium text-justify">
                  {t.programs.tots.description}
                </p>
              </div>

              {/* Zigzag features */}
              <div className="space-y-24">
                {t.programs.tots.features.map((feature: any, idx: number) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                    >
                      {/* Text content side */}
                      <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-black text-xl shadow-md">
                          {idx + 1}
                        </div>
                        <p className="text-xl lg:text-2xl text-slate-800 leading-relaxed">
                          {feature.text}
                        </p>
                      </div>

                      {/* Image side */}
                      <div className="flex-1 w-full max-w-2xl">
                        <div className="bg-white rounded-[3.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-white">
                          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-50">
                            <img
                              src={feature.img}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              alt={`Tots Feature ${idx + 1}`}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* ELT Program (Original 4 Levels & 8 Activities) */
            <>
              {/* Four Levels header */}
              <div className="text-center mb-16">
                <h3 className="text-4xl text-pingu-purple mb-4 leading-none">{t.programs.eltTitle}</h3>
                <p className="max-w-2xl mx-auto text-lg text-slate-500 font-bold">{t.programs.eltSubtitle}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                {t.programs.levels.map((level: any, i: number) => (
                  <div key={i} className="bg-white rounded-[3rem] p-4 shadow-sm hover:shadow-2xl transition-all group">
                    <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-8 bg-pingu-bg">
                      <img
                        src={`./pingu-images/pingu-lvl-${i + 1}.webp`}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        alt={level.name}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="px-6 pb-6 text-center">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-pingu-purple/10 text-pingu-purple font-black text-xs uppercase mb-4 tracking-widest leading-none">
                        {level.badge}
                      </span>
                      <h4 className="text-2xl text-slate-800 mb-2 leading-snug py-1">{level.name}</h4>
                      <p className="text-pingu-blue font-black text-xs uppercase tracking-tighter">{level.stat}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Activities List */}
              <div className="space-y-6">
                <h3 className="text-4xl text-center text-pingu-purple mb-16">{t.programs.activitiesTitle}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {t.programs.activities.map((act: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={act.img}
                          alt={act.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute top-6 left-6 bg-pingu-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl" aria-hidden="true">
                          {act.num}
                        </div>
                      </div>
                      <div className="p-10">
                        <h4 className="text-2xl text-pingu-purple mb-4 leading-none">{act.title}</h4>
                        <p className="text-slate-500 leading-relaxed font-medium text-sm">
                          {act.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
});

export default ProgramsSection;
