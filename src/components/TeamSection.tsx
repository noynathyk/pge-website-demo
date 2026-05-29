import { GraduationCap } from 'lucide-react';
import { memo } from 'react';

const TeamSection = memo(function TeamSection({ t }: { t: any }) {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl text-pingu-purple mb-6 uppercase leading-none">{t.team.title}</h2>
            <p className="text-xl text-slate-500 font-medium">{t.team.subtitle}</p>
          </div>
          <div className="w-20 h-20 bg-pingu-blue rounded-3xl flex items-center justify-center text-white rotate-12" aria-hidden="true">
            <GraduationCap className="w-10 h-10" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.team.members.map((member: any, i: number) => (
            <div key={i} className="bg-pingu-bg/40 rounded-[4rem] p-10 group hover:bg-pingu-purple transition-all border border-slate-100/50">
              <div className="relative mb-8">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-500">
                  <img
                    src={member.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-pingu-purple px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl group-hover:bg-pingu-blue group-hover:text-white transition-colors">
                  {member.role}
                </div>
              </div>
              <h4 className="text-3xl text-pingu-purple group-hover:text-white transition-colors mb-4 leading-none">{member.name}</h4>
              <p className="text-slate-500 group-hover:text-white/80 transition-colors font-medium leading-relaxed italic">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TeamSection;
