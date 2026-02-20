'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Afficher après un court délai
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
          <div className="flex items-start gap-3">
            <div className="text-gray-400 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-600">
                Ce site utilise des cookies pour améliorer votre expérience.{' '}
                <Link href="/politique-confidentialite" className="text-pink-600 hover:underline">
                  En savoir plus
                </Link>
              </p>
            </div>
            <button
              onClick={acceptCookies}
              className="flex-shrink-0 bg-pink-600 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-pink-700 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
