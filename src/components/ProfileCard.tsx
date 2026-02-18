'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getProfileName, getRandomAge, isVerified, getProfileDescription, getProfileBio } from '@/lib/utils';
import { AFFILIATE_LINK } from '@/lib/constants';

interface ProfileCardProps {
  image: string;
  location: string;
  seed: string;
}

export default function ProfileCard({ image, location, seed }: ProfileCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const name = getProfileName(seed + image);
  const age = getRandomAge(seed + image);
  const verified = isVerified(seed + image);
  const description = getProfileDescription(seed + image);
  const bio = getProfileBio(seed + image);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative h-[420px] cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Face avant */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            {/* Image */}
            <div className="relative h-full overflow-hidden">
              <Image
                src={`/images/profile/${image}`}
                alt={`Profil ${name}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />

              {/* Badge vérifié */}
              {verified && (
                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verifie
                </div>
              )}

              {/* Indicateur pour retourner */}
              <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Cliquez
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Infos sur l'image */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold">{name}, {age} ans</h3>
                <p className="text-sm text-gray-200 flex items-center gap-1 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {location}
                </p>
                <p className="text-sm text-pink-200 mt-2 italic">{description}</p>

                {/* Status en ligne */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-green-400 font-medium">En ligne maintenant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Face arrière */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="relative h-full bg-gradient-to-br from-pink-600 via-purple-600 to-pink-700 rounded-2xl shadow-lg overflow-hidden p-3 md:p-5 flex flex-col">
            {/* En-tête */}
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0">
                <Image
                  src={`/images/profile/${image}`}
                  alt={name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-white min-w-0 flex-1">
                <h3 className="font-bold text-sm md:text-lg truncate">{name}, {age}</h3>
                <p className="text-pink-200 text-xs md:text-sm flex items-center gap-1 truncate">
                  <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="truncate">{location}</span>
                </p>
              </div>
              {verified && (
                <div className="flex-shrink-0 bg-green-500 text-white text-[10px] md:text-xs px-2 py-1 rounded-full">
                  OK
                </div>
              )}
            </div>

            {/* Bio */}
            <div className="flex-grow overflow-hidden">
              <h4 className="text-white/80 text-[10px] md:text-xs uppercase tracking-wide mb-1 md:mb-2">A propos</h4>
              <p className="text-white text-xs md:text-sm leading-relaxed line-clamp-4 md:line-clamp-5">
                {bio}
              </p>

              {/* Caractéristiques */}
              <div className="mt-2 md:mt-4 flex flex-wrap gap-1 md:gap-2">
                <span className="bg-white/20 text-white text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full">Feminine</span>
                <span className="bg-white/20 text-white text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full">Discrete</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-2 md:mt-4 space-y-2 md:space-y-3">
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                onClick={(e) => e.stopPropagation()}
                className="block w-full bg-white text-pink-600 font-bold text-center py-2 md:py-3 text-sm md:text-base rounded-full hover:bg-pink-100 transition-all hover:scale-105 shadow-lg"
              >
                Contacter
              </a>
              <p className="text-center text-white/70 text-[10px] md:text-xs">
                Inscription gratuite
              </p>
            </div>

            {/* Bouton retour */}
            <button
              className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/20 text-white p-1.5 md:p-2 rounded-full hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
            >
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
