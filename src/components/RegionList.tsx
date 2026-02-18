import Link from 'next/link';
import { regions } from '@/data/regions';

export default function RegionList() {
  const metropolitanRegions = regions.filter(r => !['guadeloupe', 'martinique', 'guyane', 'la-reunion', 'mayotte'].includes(r.slug));
  const domTomRegions = regions.filter(r => ['guadeloupe', 'martinique', 'guyane', 'la-reunion', 'mayotte'].includes(r.slug));

  return (
    <section id="regions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Rencontre trans par région
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Trouvez des profils près de chez vous. Sélectionnez votre région pour découvrir
          les annonces de rencontres trans dans votre secteur.
        </p>

        {/* Régions métropolitaines */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {metropolitanRegions.map((region) => (
            <Link
              key={region.slug}
              href={`/region/${region.slug}`}
              className="group p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                {region.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {region.departments.length} départements
              </p>
            </Link>
          ))}
        </div>

        {/* DOM-TOM */}
        <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">
          DOM-TOM
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {domTomRegions.map((region) => (
            <Link
              key={region.slug}
              href={`/region/${region.slug}`}
              className="group p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all hover:shadow-md text-center"
            >
              <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors text-sm">
                {region.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
