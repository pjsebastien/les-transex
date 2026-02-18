'use client';

import { useState, useEffect } from 'react';

export default function Disclaimer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà vu le disclaimer
    const disclaimerSeen = sessionStorage.getItem('disclaimerSeen');
    if (!disclaimerSeen) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('disclaimerSeen', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold text-pink-600">18+</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Site reserve aux adultes
          </h2>
          <p className="text-gray-600 text-sm">
            Ce site contient du contenu destine a un public adulte.
            En continuant, vous certifiez avoir au moins 18 ans.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-xs text-gray-500">
          <p className="mb-2">
            <strong>Site affilie</strong> : Ce site vous redirige vers notre partenaire de confiance.
            Les profils presentes sont des exemples illustratifs.
          </p>
          <p>
            En continuant, vous acceptez nos{' '}
            <a href="/mentions-legales" className="text-pink-600 hover:underline">mentions legales</a> et notre{' '}
            <a href="/politique-confidentialite" className="text-pink-600 hover:underline">politique de confidentialite</a>.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://google.com"
            className="flex-1 py-3 border border-gray-200 rounded-xl text-center text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            Quitter
          </a>
          <button
            onClick={handleAccept}
            className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold hover:from-pink-600 hover:to-purple-600 transition-all"
          >
            J&apos;ai 18 ans, entrer
          </button>
        </div>
      </div>
    </div>
  );
}
