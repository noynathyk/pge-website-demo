import { motion } from 'motion/react';

export default function HeroSection({ t }: { t: any }) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-60 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black">
        <img 
          src="./pingu-images/Homepage-intro-banner.webp" 
          className="w-full h-full object-cover opacity-90" 
          alt="Hero Background"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl lg:text-3xl font-display text-pingu-blue-light mb-4 uppercase drop-shadow-lg">{t.hero.subtitle}</h2>
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
  );
}
