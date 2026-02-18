import { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/data/cities';
import { departments } from '@/data/departments';
import { AFFILIATE_LINK, SITE_NAME, SITE_DOMAIN } from '@/lib/constants';
import SearchBar from '@/components/SearchBar';
import { BreadcrumbSchema } from '@/components/JsonLd';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

export const metadata: Metadata = {
  title: `Rencontre Trans par Ville - Toutes les villes de France | ${SITE_NAME}`,
  description: 'Trouvez des rencontres trans dans toutes les villes de France. Liste complète des grandes villes françaises pour des rencontres transgenres près de chez vous.',
  alternates: {
    canonical: '/villes',
  },
  openGraph: {
    title: 'Rencontre Trans par Ville',
    description: 'Trouvez des rencontres trans dans toutes les villes de France.',
    url: `${BASE_URL}/villes`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rencontre Trans par Ville',
    description: 'Trouvez des rencontres trans dans toutes les villes de France.',
  },
};

export default function VillesPage() {
  // Grouper les villes par département
  const citiesByDepartment = departments
    .map(dept => ({
      department: dept,
      cities: cities.filter(c => c.departmentCode === dept.code).sort((a, b) => b.population - a.population)
    }))
    .filter(group => group.cities.length > 0)
    .sort((a, b) => {
      // Trier par population totale du département
      const popA = a.cities.reduce((sum, c) => sum + c.population, 0);
      const popB = b.cities.reduce((sum, c) => sum + c.population, 0);
      return popB - popA;
    });

  // Top villes par population
  const topCities = [...cities].sort((a, b) => b.population - a.population).slice(0, 12);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Villes', url: '/villes' },
        ]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-pink-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Rencontre Trans par Ville
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto mb-8">
            Trouvez des profils de femmes trans dans toutes les villes de France
          </p>
          <div className="max-w-xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Top villes */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Villes les plus populaires
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/ville/${city.slug}`}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <h3 className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {city.population.toLocaleString('fr-FR')} habitants
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des villes par département */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Toutes les villes par département</h2>
            <p className="text-gray-600">
              <span className="font-bold text-pink-600">{cities.length}</span> villes disponibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {citiesByDepartment.map(({ department, cities: deptCities }) => (
              <div key={department.slug} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono bg-pink-100 text-pink-600 px-2 py-1 rounded">
                    {department.code}
                  </span>
                  <Link
                    href={`/departement/${department.slug}`}
                    className="font-bold text-gray-800 hover:text-pink-600 transition-colors"
                  >
                    {department.name}
                  </Link>
                  <span className="text-sm text-gray-400 ml-auto">
                    {deptCities.length} ville{deptCities.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {deptCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/ville/${city.slug}`}
                      className="text-sm px-3 py-1.5 bg-gray-50 rounded-full hover:bg-pink-50 hover:text-pink-600 transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all hover:scale-105 shadow-lg"
            >
              Accéder à tous les profils
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
