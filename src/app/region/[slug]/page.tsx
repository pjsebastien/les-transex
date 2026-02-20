import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProfileGrid from '@/components/ProfileGrid';
import CTASection from '@/components/CTASection';
import SearchBar from '@/components/SearchBar';
import { ServiceSchema, BreadcrumbSchema } from '@/components/JsonLd';
import { regions } from '@/data/regions';
import { departments } from '@/data/departments';
import { cities } from '@/data/cities';
import { SITE_NAME, AFFILIATE_LINK, SITE_DOMAIN } from '@/lib/constants';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return regions.map((region) => ({
    slug: region.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = regions.find((r) => r.slug === slug);

  if (!region) {
    return { title: 'Région non trouvée' };
  }

  return {
    title: `Rencontre Trans ${region.name} - Femmes transgenres en ${region.name}`,
    description: `Rencontre trans en ${region.name}. Trouvez des profils de femmes transgenres dans tous les départements de ${region.name}. Inscription gratuite.`,
    keywords: [`rencontre trans ${region.name}`, `trans ${region.name}`, `transgenre ${region.name}`, `site rencontre trans ${region.name}`],
    alternates: {
      canonical: `/region/${slug}`,
    },
    openGraph: {
      title: `Rencontre Trans ${region.name}`,
      description: `Rencontre trans en ${region.name}. Trouvez des profils de femmes transgenres.`,
      url: `${BASE_URL}/region/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Rencontre Trans ${region.name}`,
      description: `Rencontre trans en ${region.name}. Trouvez des profils de femmes transgenres.`,
    },
  };
}

export default async function RegionPage({ params }: PageProps) {
  const { slug } = await params;
  const region = regions.find((r) => r.slug === slug);

  if (!region) {
    notFound();
  }

  const regionDepartments = departments.filter((d) => d.regionSlug === slug);
  const regionCities = cities.filter((c) =>
    regionDepartments.some((d) => d.code === c.departmentCode)
  );
  const topCities = regionCities.sort((a, b) => b.population - a.population).slice(0, 8);

  // Préparer les items du fil d'Ariane
  const breadcrumbItems = [
    { name: 'Accueil', url: '/' },
    { name: region.name, url: `/region/${region.slug}` },
  ];

  return (
    <>
      <ServiceSchema
        name={`Rencontre Trans ${region.name}`}
        description={`Site de rencontre pour femmes transgenres en ${region.name}. Profils vérifiés et inscription gratuite.`}
        url={`/region/${region.slug}`}
        areaServed={region.name}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-pink-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-pink-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span>Rencontre trans {region.name}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Rencontre Trans en {region.name}
          </h1>
          <p className="text-lg text-pink-100 max-w-2xl mb-6">
            Découvrez des profils de femmes transgenres dans toute la région {region.name}.
            {regionDepartments.length} départements, des centaines de profils actifs.
          </p>

          {/* Barre de recherche */}
          <div className="mb-6 max-w-xl">
            <SearchBar />
          </div>

          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-6 py-3 rounded-full hover:bg-pink-100 transition-all hover:scale-105"
          >
            Voir les profils en {region.name}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Profils */}
      <ProfileGrid
        locationSlug={slug}
        locationName={region.name}
        population={500000}
      />

      {/* Départements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Rencontre trans par département en {region.name}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {regionDepartments.map((dept) => (
              <Link
                key={dept.slug}
                href={`/departement/${dept.slug}`}
                className="group p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                  {dept.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {dept.code}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grandes villes */}
      {topCities.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Principales villes pour rencontre trans en {region.name}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/ville/${city.slug}`}
                  className="group p-4 bg-white rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {city.population.toLocaleString('fr-FR')} hab.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection location={region.name} />

      {/* Contenu SEO */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <h2 className="text-2xl font-bold text-gray-800">
              Rencontre trans en {region.name} : votre guide complet
            </h2>

            <p>
              Vous recherchez une <strong>rencontre trans en {region.name}</strong> ? Notre site partenaire
              vous propose des milliers de profils de femmes transgenres dans toute la région.
              Que vous soyez dans les grandes villes comme {topCities.slice(0, 3).map(c => c.name).join(', ')}
              ou dans des communes plus petites, vous trouverez des profils près de chez vous.
            </p>

            <p>
              La région {region.name} compte {regionDepartments.length} départements où vous pouvez
              faire des <strong>rencontres transgenres</strong>. Notre partenaire propose une inscription
              gratuite et une messagerie illimitée pour faciliter vos échanges.
            </p>

            <p>
              <em>
                Site affilié - En cliquant sur nos liens, vous serez redirigé vers notre partenaire
                de confiance pour les rencontres trans en {region.name}.
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
