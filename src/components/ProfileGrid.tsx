import ProfileCard from './ProfileCard';
import { AFFILIATE_LINK } from '@/lib/constants';
import { getProfilesForLocation, getProfileCount } from '@/lib/utils';

interface ProfileGridProps {
  locationSlug: string;
  locationName: string;
  population?: number;
}

export default function ProfileGrid({ locationSlug, locationName, population = 50000 }: ProfileGridProps) {
  const profileCount = getProfileCount(population);
  const profiles = getProfilesForLocation(locationSlug, profileCount);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Aperçu des profils à {locationName}
          </h2>
          <p className="text-gray-600">
            Exemples de profils disponibles sur notre site partenaire
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {profiles.map((image, index) => (
            <ProfileCard
              key={image}
              image={image}
              location={locationName}
              seed={locationSlug + index}
            />
          ))}
        </div>

        {/* Bouton voir plus */}
        <div className="text-center mt-8">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105 shadow-lg"
          >
            <span>Voir plus de profils à {locationName}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-3 text-sm text-gray-500">
            +{profileCount * 10} profils disponibles
          </p>
        </div>
      </div>
    </section>
  );
}
