'use client';

import { useState, useEffect } from 'react';
import { AFFILIATE_LINK } from '@/lib/constants';

interface FloatingCTAProps {
  location?: string;
}

export default function FloatingCTA({ location }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showMinimized, setShowMinimized] = useState(false);

  useEffect(() => {
    // Afficher après un délai de scroll
    const handleScroll = () => {
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Afficher aussi après 3 secondes
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    setShowMinimized(true);
  };

  const handleReopen = () => {
    setShowMinimized(false);
    setIsVisible(true);
    setIsDismissed(false);
  };

  const locationText = location ? ` a ${location}` : '';

  // Bouton minimisé pour rouvrir
  if (showMinimized) {
    return (
      <button
        onClick={handleReopen}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all animate-bounce"
        aria-label="Voir les profils"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-4 md:p-6 relative">
          {/* Bouton fermer */}
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white/70 hover:text-white p-1"
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* Icône */}
            <div className="hidden md:flex w-16 h-16 bg-white/20 rounded-full items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>

            {/* Texte */}
            <div className="flex-grow text-center md:text-left pr-6 md:pr-0">
              <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                Envie de rencontres trans{locationText} ?
              </h3>
              <p className="text-pink-100 text-sm md:text-base">
                Des milliers de profils vérifiés vous attendent. Inscription gratuite !
              </p>
            </div>

            {/* CTA */}
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-6 py-3 rounded-full hover:bg-pink-100 transition-all hover:scale-105 shadow-lg"
            >
              <span className="hidden sm:inline">Voir les profils</span>
              <span className="sm:hidden">Voir</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Badge */}
          <div className="absolute -top-3 left-6 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            100% Gratuit
          </div>
        </div>
      </div>
    </div>
  );
}
