import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Menu, 
  X, 
  BookOpen, 
  Star, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Heart,
  Facebook,
  Instagram,
  Youtube,
  Bird,
  Quote
} from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'lo' : 'en');
  };

  const navItems = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.programs, href: '#programs' },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.students, href: '#students' },
    { name: t.nav.parents, href: '#parents' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <div className={`min-h-screen selection:bg-pingu-purple/20 ${lang === 'lo' ? 'font-lao tracking-normal' : 'font-sans'}`}>
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white shadow-xl py-2' : 'bg-pingu-purple shadow-none py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-1 transition-all duration-300">
              <div className="w-14 h-14 lg:w-16 lg:h-16 relative z-10">
                <img src="/pingu-images/pingu-logo-1.webp" alt="Pingu Circular Logo" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <div className="w-20 h-10 lg:w-28 lg:h-14 relative z-20">
                <img src="/pingu-images/pingu-logo-2.webp" alt="Pingu Text Logo" className="w-full h-full object-contain drop-shadow-md" />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={`text-sm font-display tracking-wider hover:opacity-70 transition-opacity ${scrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {item.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-xs font-black transition-all ${
                scrolled ? 'border-pingu-purple text-pingu-purple hover:bg-pingu-purple hover:text-white' : 'border-white/40 text-white hover:bg-white hover:text-pingu-purple'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'en' ? 'ພາສາລາວ' : 'ENGLISH'}
            </button>
          </div>

          <button className={`lg:hidden p-2 rounded-lg ${scrolled ? 'bg-pingu-purple/10 text-pingu-purple' : 'bg-white/20 text-white'}`} onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-pingu-purple text-white p-8 flex flex-col items-center justify-center text-center"
          >
            <button className="absolute top-8 right-8 p-4 bg-white/10 rounded-full" onClick={() => setIsMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-4xl font-display uppercase tracking-widest hover:text-pingu-blue-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                className="mt-8 px-10 py-4 rounded-full border-2 border-white font-black uppercase text-xl"
              >
                {lang === 'en' ? 'ພາສາລາວ' : 'English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Modern Hero */}
        <section className="relative pt-40 pb-20 lg:pt-60 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src="/pingu-images/Homepage-intro-banner.webp" className="w-full h-full object-cover opacity-90" alt="Hero Background" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl lg:text-3xl font-display text-pingu-blue-light mb-4 uppercase tracking-[0.4em] drop-shadow-lg">{t.hero.subtitle}</h2>
              <h1 className="text-6xl lg:text-9xl mb-8 leading-tight drop-shadow-2xl">{t.hero.title}</h1>
              <p className="max-w-3xl mx-auto text-lg lg:text-2xl leading-relaxed opacity-95 mb-12 font-medium drop-shadow-lg">
                {t.hero.content}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#contact" className="bg-white text-pingu-purple px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center">
                  {t.hero.cta}
                </a>
                <a href="#about" className="bg-pingu-blue text-white px-10 py-5 rounded-full font-black text-xl hover:bg-pingu-blue/80 transition-colors">
                  {t.hero.learnMore}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-pingu-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.benefits.map((benefit, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform block">{benefit.icon}</div>
                  <h4 className="text-2xl text-pingu-purple mb-4">{benefit.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-semibold">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zigzag Intro Sections */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 space-y-32">
            {t.introSections.map((section, i) => (
              <div 
                key={i} 
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 space-y-8"
                >
                  <h2 className="text-5xl lg:text-7xl text-pingu-purple leading-none">{section.title}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    {section.desc}
                  </p>
                  <a 
                    href={section.link}
                    className="inline-flex items-center gap-2 bg-pingu-blue text-white px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform"
                  >
                    {section.cta} <ChevronRight className="w-5 h-5" />
                  </a>
                </motion.div>
                <motion.div 
                   initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="flex-1 w-full"
                >
                  <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-pingu-bg">
                    <img 
                      src={section.img} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                      alt={section.title} 
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section - History & School */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
              <div className="space-y-12">
                <div className="border-l-8 border-pingu-purple pl-8">
                  <h3 className="text-4xl text-pingu-purple mb-6">{t.about.historyTitle}</h3>
                  <p className="text-lg leading-relaxed text-slate-600 font-medium">{t.about.historyText}</p>
                </div>
                <div className="border-l-8 border-pingu-blue pl-8">
                  <h3 className="text-4xl text-pingu-blue mb-6">{t.about.schoolTitle}</h3>
                  <p className="text-lg leading-relaxed text-slate-600 font-medium">{t.about.schoolText}</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-pingu-bg">
                  <img src="/pingu-images/pingu-banner-1.webp" className="w-full h-full object-cover" alt="School Life" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full flex items-center justify-center p-6 shadow-xl border-4 border-pingu-purple animate-float">
                  <Bird className="w-full h-full text-pingu-purple" />
                </div>
              </div>
            </div>

            {/* CEO Message Row */}
            <div className="bg-pingu-purple text-white rounded-[4rem] overflow-hidden grid lg:grid-cols-2 min-h-[600px]">
              <div className="p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
                <Quote className="w-16 h-16 text-pingu-blue-light mb-8 opacity-50" />
                <h3 className="text-4xl lg:text-5xl mb-8 italic">{t.about.directorTitle}</h3>
                <p className="text-xl leading-relaxed font-semibold opacity-90">"{t.about.directorMessage}"</p>
              </div>
              <div className="relative order-1 lg:order-2 min-h-[400px]">
                <img 
                  src="/pingu-images/pingu-ceo-sm.webp" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt="Director May" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs / Course Section */}
        <section id="programs" className="py-24 bg-pingu-bg overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl text-pingu-purple mb-6">{t.programs.title}</h2>
              <p className="max-w-2xl mx-auto text-xl text-slate-500 font-bold">{t.programs.subtitle}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
              {t.programs.levels.map((level, i) => (
                <div key={i} className="bg-white rounded-[3rem] p-4 shadow-sm hover:shadow-2xl transition-all group">
                   <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-8 bg-pingu-bg">
                      <img 
                        src={`/pingu-images/pingu-lvl-${i+1}.webp`} 
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" 
                        alt={level.name} 
                      />
                   </div>
                   <div className="px-6 pb-6 text-center">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-pingu-purple/10 text-pingu-purple font-black text-xs uppercase mb-4 tracking-widest leading-none">
                        {level.badge}
                      </span>
                      <h4 className="text-2xl text-slate-800 mb-2 truncate leading-none">{level.name}</h4>
                      <p className="text-pingu-blue font-black text-xs uppercase tracking-tighter">{level.stat}</p>
                   </div>
                </div>
              ))}
            </div>

            {/* Detailed Activities List */}
            <div className="space-y-6">
               <h3 className="text-4xl text-center text-pingu-purple mb-16">{t.programs.activitiesTitle}</h3>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {t.programs.activities.map((act, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                     >
                        <div className="aspect-video relative overflow-hidden">
                           <img 
                              src={act.img} 
                              alt={act.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                           />
                           <div className="absolute top-6 left-6 bg-pingu-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">
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
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
              <div className="max-w-2xl">
                <h2 className="text-5xl lg:text-7xl text-pingu-purple mb-6 uppercase leading-none">{t.team.title}</h2>
                <p className="text-xl text-slate-500 font-bold">{t.team.subtitle}</p>
              </div>
              <div className="w-20 h-20 bg-pingu-blue rounded-3xl flex items-center justify-center text-white rotate-12">
                 <GraduationCap className="w-10 h-10" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {t.team.members.map((member, i) => (
                <div key={i} className="bg-pingu-bg/40 rounded-[4rem] p-10 group hover:bg-pingu-purple transition-all border border-slate-100/50">
                  <div className="relative mb-8">
                     <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-500">
                        <img 
                          src={member.img}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                          alt={member.name} 
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

        {/* Students Gallery Section */}
      <section id="students" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl text-pingu-purple mb-6">{t.students.title}</h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">{t.students.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.students.gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[3rem] aspect-square bg-gray-100 shadow-2xl"
              >
                <img 
                  src={item.img}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pingu-purple/90 via-pingu-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <h3 className="text-white font-bold text-3xl mb-2">{item.title}</h3>
                  <p className="text-white/80 text-lg leading-tight">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parents Tips Section */}
        <section id="parents" className="py-24 bg-pingu-purple text-white rounded-t-[5rem] lg:rounded-t-[10rem]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-5xl lg:text-7xl mb-6">{t.parents.tipsTitle}</h2>
               <div className="w-24 h-2 bg-pingu-blue mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {t.parents.tips.map((tip, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-12 rounded-[4rem] border border-white/20 text-center group hover:bg-white hover:text-pingu-purple transition-all flex flex-col items-center">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-[3rem] bg-pingu-blue mx-auto mb-10 overflow-hidden shadow-xl group-hover:scale-110 transition-transform">
                     <img src={tip.img || "/pingu-images/pingu-logo.webp"} className="w-full h-full object-cover" alt="Parent" />
                  </div>
                  <h4 className="text-3xl mb-4 italic leading-tight">{tip.title}</h4>
                  <p className="text-sm font-bold opacity-80 leading-relaxed uppercase tracking-widest">{tip.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-24 p-12 bg-white rounded-[40px] text-pingu-purple flex flex-col md:flex-row items-center gap-12 shadow-2xl">
               <div className="w-16 h-16 shrink-0 text-pingu-blue shadow-[0_0_40px_rgba(7,159,195,0.3)] rounded-full flex items-center justify-center border-4 border-pingu-blue">
                  <Star className="w-8 h-8 fill-pingu-blue" />
               </div>
               <p className="text-2xl lg:text-3xl italic font-semibold leading-relaxed">"{t.parents.testimonial}"</p>
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section id="contact" className="py-32 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-6xl lg:text-8xl text-pingu-purple mb-12 italic leading-none">{t.contact.title}</h2>
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-pingu-bg flex items-center justify-center text-pingu-blue group-hover:bg-pingu-blue group-hover:text-white transition-all">
                        <MapPin className="w-8 h-8" />
                     </div>
                     <div>
                       <p className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">Address</p>
                       <p className="text-2xl font-display text-slate-700">{t.contact.address}</p>
                     </div>
                  </div>
                  <div className="flex gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-pingu-bg flex items-center justify-center text-pingu-blue group-hover:bg-pingu-blue group-hover:text-white transition-all">
                        <Phone className="w-8 h-8" />
                     </div>
                     <div>
                       <p className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">Call Us</p>
                       <a href={`tel:${t.contact.phone}`} className="text-2xl font-display text-slate-700 hover:text-pingu-purple transition-colors">{t.contact.phone}</a>
                     </div>
                  </div>
                  <div className="flex gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-pingu-bg flex items-center justify-center text-pingu-blue group-hover:bg-pingu-blue group-hover:text-white transition-all">
                        <Mail className="w-8 h-8" />
                     </div>
                     <div>
                       <p className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">Email</p>
                       <a href={`mailto:${t.contact.email}`} className="text-xl font-display text-slate-700 hover:text-pingu-purple transition-colors">{t.contact.email}</a>
                     </div>
                  </div>
                </div>
                
                <div className="mt-12 flex gap-4">
                   <a 
                     href="https://www.facebook.com/pingusenglishlaos" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="w-14 h-14 rounded-2xl bg-pingu-blue text-white flex items-center justify-center hover:-translate-y-2 transition-transform shadow-lg shadow-pingu-blue/30"
                   >
                     <Facebook />
                   </a>
                   <a 
                      href="https://www.instagram.com/pingusenglish.laos?igsh=MXJ6cjM0ZHcyNW8ycQ%3D%3D&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 text-white flex items-center justify-center hover:-translate-y-2 transition-transform shadow-lg"
                    >
                      <Instagram />
                    </a>
                    <a 
                      href="https://www.youtube.com/@pingusenglish" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center hover:-translate-y-2 transition-transform shadow-lg shadow-red-500/30"
                    >
                      <Youtube />
                    </a>
                    <a 
                      href={t.footer.tiktok || "https://www.tiktok.com/@pingulaos"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center hover:-translate-y-2 transition-transform shadow-lg shadow-black/30"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                         <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.03 1.64-.17.47-.12.99.11 1.43.35.5.9.87 1.5.97 1.24.21 2.51-.5 2.97-1.67.12-.33.16-.7.16-1.06V.02z"/>
                      </svg>
                    </a>
                </div>
              </div>

              <div className="bg-pingu-bg p-8 lg:p-12 rounded-[5rem] border-4 border-white shadow-2xl relative min-h-[500px] flex flex-col overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-full flex items-center justify-center p-3 overflow-hidden border-4 border-pingu-bg shadow-2xl z-20">
                     <img src="/pingu-images/pingu-logo-1.webp" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-3xl text-pingu-purple mb-6 italic z-10">{t.contact.mapTitle}</h4>
                  <div className="flex-1 rounded-[3rem] overflow-hidden shadow-inner relative group border-4 border-white/50 bg-white/50">
                    <iframe 
                      src="https://maps.google.com/maps?q=Pingu's%20English%20School%20Laos&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                      className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="absolute bottom-6 right-6 z-10">
                      <a 
                        href="https://maps.app.goo.gl/cM7k2MXgQQWHg5FK8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-pingu-purple text-white px-8 py-4 rounded-2xl font-black text-sm shadow-2xl hover:scale-105 transition-transform uppercase tracking-widest flex items-center gap-3 ring-4 ring-white"
                      >
                        <MapPin className="w-4 h-4" />
                        {t.contact.direction}
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>

        {/* Banner Section */}
        <section className="w-full overflow-hidden">
          <img 
            src="/pingu-images/pingu-footer.webp" 
            alt="Let's Connect" 
            className="w-full h-auto object-cover" 
          />
        </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">
             <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl shadow-white/10">
                      <img src="/pingu-images/pingu-logo.webp" alt="Pingu Logo" className="w-full h-full object-contain" />
                   </div>
                   <div>
                      <h4 className="text-3xl leading-none uppercase">Pingu's <span className="text-pingu-blue">English</span></h4>
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2">Vientiane Official School</p>
                   </div>
                </div>
                <p className="text-lg text-slate-400 font-semibold leading-relaxed max-w-sm italic mb-8">"{t.footer.tagline}"</p>
                <div className="space-y-2 text-slate-500 text-sm font-medium">
                   <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-pingu-blue" /> {t.contact.address}</p>
                   <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-pingu-blue" /> {t.contact.phone}</p>
                   <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-pingu-blue" /> {t.contact.email}</p>
                </div>
             </div>
             
             <div>
                <h5 className="text-xs font-black uppercase tracking-[0.3em] text-pingu-blue mb-8">Navigation</h5>
                <div className="flex flex-col gap-4 font-bold text-slate-500">
                   {navItems.map(item => (
                      <a key={item.name} href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                   ))}
                </div>
             </div>

             <div>
                <h5 className="text-xs font-black uppercase tracking-[0.3em] text-pingu-blue mb-8">Connect</h5>
                <div className="flex flex-col gap-4 font-bold text-slate-500">
                   <a href="https://www.facebook.com/pingusenglishlaos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
                   <a href="https://www.instagram.com/pingusenglish.laos?igsh=MXJ6cjM0ZHcyNW8ycQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                   <a href="https://www.youtube.com/@pingusenglish" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
                   <a href={t.footer.tiktok || "https://www.tiktok.com/@pingulaos"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
                </div>
             </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left text-xs font-black uppercase tracking-widest text-slate-600">
             <p>{t.footer.rights}</p>
             <div className="flex items-center gap-6">
                <p>{t.footer.dev}</p>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-pingu-purple" />
                   <div className="w-2 h-2 rounded-full bg-pingu-blue" />
                </div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
