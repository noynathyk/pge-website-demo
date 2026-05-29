import { useState, Suspense, lazy } from 'react';
import { translations, Language } from './translations';

// Eagerly loaded components (above the fold or immediate visibility)
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';

// Lazy loaded components (below the fold)
import IntroSections from './components/IntroSections';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import TeamSection from './components/TeamSection';
import StudentsSection from './components/StudentsSection';
import ParentsSection from './components/ParentsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


export default function App() {
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'lo' : 'en'));
  };

  // Fallback for lazy loading
  const fallback = (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-pingu-purple border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className={`min-h-screen selection:bg-pingu-purple/20 ${lang === 'lo' ? 'lang-lo font-lao tracking-normal' : 'font-sans'}`}>
      
      <Navigation lang={lang} toggleLang={toggleLang} t={t} />

      <main>
        <HeroSection t={t} />
        <BenefitsSection t={t} />

        <Suspense fallback={fallback}>
          <IntroSections t={t} />
          <AboutSection t={t} />
          <ProgramsSection t={t} />
          <TeamSection t={t} />
          <StudentsSection t={t} />
          <ParentsSection t={t} />
          <ContactSection t={t} />
        </Suspense>
      </main>

      <Suspense fallback={fallback}>
        <Footer t={t} />
      </Suspense>
      
    </div>
  );
}
