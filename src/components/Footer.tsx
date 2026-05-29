import { MapPin, Phone, Mail } from 'lucide-react';
import { memo } from 'react';

const Footer = memo(function Footer({ t }: { t: any }) {
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
    <>
      {/* Banner Section */}
      <section className="w-full overflow-hidden">
        <img
          src="./pingu-images/pingu-footer.webp"
          alt="Let's Connect Banner"
          className="w-full h-auto object-cover"
          loading="lazy"
          decoding="async"
        />
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl shadow-white/10" aria-hidden="true">
                  <img 
                    src="./pingu-images/pingu-logo.webp" 
                    alt="Pingu Logo" 
                    className="w-full h-full object-contain" 
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-3xl leading-none uppercase">Pingu's <span className="text-pingu-blue">English</span></h4>

                </div>
              </div>
              <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-sm italic mb-8">"{t.footer.tagline}"</p>
              <div className="space-y-2 text-slate-500 text-sm font-medium">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-pingu-blue" aria-hidden="true" /> {t.contact.address}</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-pingu-blue" aria-hidden="true" /> {t.contact.phone}</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-pingu-blue" aria-hidden="true" /> {t.contact.email}</p>
              </div>
            </div>

            <nav aria-label="Footer Navigation">
              <h5 className="text-xs font-black uppercase tracking-[0.3em] text-pingu-blue mb-8">Navigation</h5>
              <div className="flex flex-col gap-4 font-bold text-slate-500">
                {navItems.map(item => (
                  <a key={item.name} href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                ))}
              </div>
            </nav>

            <nav aria-label="Social Connections">
              <h5 className="text-xs font-black uppercase tracking-[0.3em] text-pingu-blue mb-8">Connect</h5>
              <div className="flex flex-col gap-4 font-bold text-slate-500">
                <a href="https://www.facebook.com/pingusenglishlaos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
                <a href="https://www.instagram.com/pingusenglish.laos?igsh=MXJ6cjM0ZHcyNW8ycQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                <a href="https://www.youtube.com/@pingusenglishlaos?si=o-M2m7-H-Ad_sD03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
                <a href={t.footer.tiktok || "https://www.tiktok.com/@pingulaos"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
              </div>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left text-xs font-black uppercase tracking-widest text-slate-600">
            <p>{t.footer.rights}</p>
            <div className="flex items-center gap-6">
              <p>{t.footer.dev}</p>
              <div className="flex gap-2" aria-hidden="true">
                <div className="w-2 h-2 rounded-full bg-pingu-purple" />
                <div className="w-2 h-2 rounded-full bg-pingu-blue" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});

export default Footer;
