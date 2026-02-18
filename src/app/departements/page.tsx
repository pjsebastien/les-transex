import { Metadata } from 'next';
import Link from 'next/link';
import { departments } from '@/data/departments';
import { regions } from '@/data/regions';
import { AFFILIATE_LINK, SITE_NAME, SITE_DOMAIN } from '@/lib/constants';
import SearchBar from '@/components/SearchBar';
import { BreadcrumbSchema } from '@/components/JsonLd';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

export const metadata: Metadata = {
  title: `Rencontre Trans par Département - Tous les départements | ${SITE_NAME}`,
  description: 'Trouvez des rencontres trans dans tous les départements de France. Liste complète des 101 départements français pour des rencontres transgenres près de chez vous.',
  alternates: {
    canonical: '/departements',
  },
  openGraph: {
    title: 'Rencontre Trans par Département',
    description: 'Trouvez des rencontres trans dans tous les départements de France.',
    url: `${BASE_URL}/departements`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rencontre Trans par Département',
    description: 'Trouvez des rencontres trans dans tous les départements de France.',
  },
};

export default function DepartementsPage() {
  // Grouper les départements par région
  const departmentsByRegion = regions.map(region => ({
    region,
    departments: departments.filter(d => d.regionSlug === region.slug).sort((a, b) => a.name.localeCompare(b.name))
  })).filter(group => group.departments.length > 0);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Départements', url: '/departements' },
        ]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-pink-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Rencontre Trans par Département
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto mb-8">
            Trouvez des profils de femmes trans dans tous les départements de France
          </p>
          <div className="max-w-xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Liste des départements par région */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600">
              <span className="font-bold text-pink-600">{departments.length}</span> départements disponibles
            </p>
          </div>

          <div className="space-y-12">
            {departmentsByRegion.map(({ region, departments: depts }) => (
              <div key={region.slug} className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{region.name}</h2>
                    <p className="text-sm text-gray-500">{depts.length} département{depts.length > 1 ? 's' : ''}</p>
                  </div>
                  <Link
                    href={`/region/${region.slug}`}
                    className="ml-auto text-pink-600 hover:text-pink-700 text-sm font-medium hover:underline"
                  >
                    Voir la région →
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {depts.map((dept) => (
                    <Link
                      key={dept.slug}
                      href={`/departement/${dept.slug}`}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors group"
                    >
                      <span className="text-xs font-mono bg-pink-100 text-pink-600 px-2 py-0.5 rounded group-hover:bg-pink-200">
                        {dept.code}
                      </span>
                      <span className="text-sm truncate">{dept.name}</span>
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
