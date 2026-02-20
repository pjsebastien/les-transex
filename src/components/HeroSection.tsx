'use client';

import Image from 'next/image';
import { AFFILIATE_LINK, PROFILE_IMAGES } from '@/lib/constants';
import SearchBar from './SearchBar';

export default function HeroSection() {
  // Prendre les 20 premières images pour le fond
  const backgroundImages = PROFILE_IMAGES.slice(0, 20);

  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden">
      {/* Background avec miniatures de profils */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-pink-900">
        {/* Grille de miniatures */}
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1 opacity-40">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={`/images/profile/${image}`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 16vw"
              />
            </div>
          ))}
          {/* Répéter pour remplir */}
          {backgroundImages.map((image, index) => (
            <div
              key={`repeat-${index}`}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={`/images/profile/${image}`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 16vw"
              />
            </div>
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-600/70 via-purple-600/65 to-pink-700/75" />

        {/* Effet de vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 pb-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
              Site de rencontre trans N°1 en France
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Rencontre Trans en France
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Découvrez des milliers de profils vérifiés de femmes transgenres près de chez vous.
              Inscription gratuite, messagerie illimitée.
            </p>

            {/* Barre de recherche */}
            <div className="mb-8">
              <SearchBar />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-pink-100 transition-all hover:scale-105 shadow-xl"
              >
                Accéder aux profils
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#profiles"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/30"
              >
                Voir les profils
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Mini galerie de profils en avant - Plus visible */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 shadow-2xl max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Avatars avec effet */}
                <div className="flex -space-x-4">
                  {PROFILE_IMAGES.slice(0, 6).map((image, index) => (
                    <div
                      key={index}
                      className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-white overflow-hidden shadow-xl hover:scale-110 hover:z-10 transition-transform duration-300"
                      style={{ zIndex: 6 - index }}
                    >
                      <Image
                        src={`/images/profile/${image}`}
                        alt=""
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                      {/* Indicateur en ligne pour certains */}
                      {index < 3 && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Texte et badge */}
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 font-semibold text-sm">En ligne maintenant</span>
                  </div>
                  <p className="text-white font-bold text-lg">+15 000 profils actifs</p>
                  <p className="text-white/70 text-sm">Près de chez vous</p>
                </div>
              </div>
            </div>

            {/* Badges stats */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Profils vérifiés
              </div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                100% Discret
              </div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Inscription gratuite
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator - plus petite */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px]">
          <path d="M0 60L60 52.5C120 45 240 30 360 22.5C480 15 600 15 720 18.75C840 22.5 960 30 1080 33.75C1200 37.5 1320 37.5 1380 37.5L1440 37.5V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
  );
}
