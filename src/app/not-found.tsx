import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { AFFILIATE_LINK, SITE_NAME, PROFILE_IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        {/* Illustration avec profils */}
        <div className="relative mb-8">
          <div className="flex justify-center -space-x-4 mb-6">
            {PROFILE_IMAGES.slice(0, 5).map((image, index) => (
              <div
                key={index}
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white overflow-hidden shadow-xl"
                style={{ zIndex: 5 - index }}
              >
                <Image
                  src={`/images/profile/${image}`}
                  alt=""
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            404
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Oups ! Cette page n&apos;existe pas
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Ne vous inquiétez pas, il y a encore des milliers de profils qui vous attendent !
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Retour à l&apos;accueil
          </Link>

          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 font-bold px-8 py-4 rounded-full hover:bg-pink-50 transition-all border-2 border-pink-200 hover:border-pink-300"
          >
            Voir les profils
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Liens utiles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4">Ou explorez nos pages populaires :</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/ville/paris" className="text-pink-600 hover:text-pink-700 hover:underline text-sm">
              Trans Paris
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/ville/lyon" className="text-pink-600 hover:text-pink-700 hover:underline text-sm">
              Trans Lyon
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/ville/marseille" className="text-pink-600 hover:text-pink-700 hover:underline text-sm">
              Trans Marseille
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/villes" className="text-pink-600 hover:text-pink-700 hover:underline text-sm">
              Toutes les villes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
