import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProfileGrid from '@/components/ProfileGrid';
import CTASection from '@/components/CTASection';
import SearchBar from '@/components/SearchBar';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/JsonLd';
import { regions } from '@/data/regions';
import { departments } from '@/data/departments';
import { cities } from '@/data/cities';
import { AFFILIATE_LINK, SITE_NAME, SITE_DOMAIN } from '@/lib/constants';
import { getProfileCount } from '@/lib/utils';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return { title: 'Ville non trouvée' };
  }

  const dept = departments.find((d) => d.code === city.departmentCode);

  return {
    title: `Rencontre Trans ${city.name} - Femmes transgenres à ${city.name}`,
    description: `Rencontre trans à ${city.name}. Des profils vérifiés de femmes transgenres vous attendent. Inscription gratuite, messagerie illimitée. Trouvez votre rencontre à ${city.name}.`,
    keywords: [`rencontre trans ${city.name}`, `trans ${city.name}`, `transgenre ${city.name}`, `femme trans ${city.name}`, `travesti ${city.name}`],
    alternates: {
      canonical: `/ville/${slug}`,
    },
    openGraph: {
      title: `Rencontre Trans ${city.name}`,
      description: `Rencontre trans à ${city.name}. Des profils vérifiés de femmes transgenres vous attendent.`,
      url: `${BASE_URL}/ville/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Rencontre Trans ${city.name}`,
      description: `Rencontre trans à ${city.name}. Des profils vérifiés de femmes transgenres.`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  const dept = departments.find((d) => d.code === city.departmentCode);
  const region = dept ? regions.find((r) => r.slug === dept.regionSlug) : null;

  // Villes proches (même département)
  const nearbyCities = cities
    .filter((c) => c.departmentCode === city.departmentCode && c.slug !== city.slug)
    .sort((a, b) => b.population - a.population)
    .slice(0, 6);

  const profileCount = getProfileCount(city.population) * 10;
  const isLargeCity = city.population > 100000;

  // Préparer les items du fil d'Ariane
  const breadcrumbItems = [
    { name: 'Accueil', url: '/' },
  ];
  if (region) {
    breadcrumbItems.push({ name: region.name, url: `/region/${region.slug}` });
  }
  if (dept) {
    breadcrumbItems.push({ name: dept.name, url: `/departement/${dept.slug}` });
  }
  breadcrumbItems.push({ name: city.name, url: `/ville/${city.slug}` });

  return (
    <>
      <LocalBusinessSchema
        name={`Rencontre Trans ${city.name}`}
        description={`Site de rencontre pour femmes transgenres à ${city.name}. Profils vérifiés et inscription gratuite.`}
        url={`/ville/${city.slug}`}
        areaServed={city.name}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-pink-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-pink-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            {region && (
              <>
                <span className="mx-2">/</span>
                <Link href={`/region/${region.slug}`} className="hover:text-white">{region.name}</Link>
              </>
            )}
            {dept && (
              <>
                <span className="mx-2">/</span>
                <Link href={`/departement/${dept.slug}`} className="hover:text-white">{dept.name}</Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span>{city.name}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Rencontre Trans à {city.name}
          </h1>
          <p className="text-lg text-pink-100 max-w-2xl mb-6">
            {isLargeCity
              ? `${city.name} est l'une des grandes villes pour les rencontres trans. De nombreux profils vous attendent.`
              : `Trouvez des femmes transgenres près de ${city.name} et dans les environs.`
            }
          </p>

          {/* Barre de recherche */}
          <div className="mb-6 max-w-xl">
            <SearchBar />
          </div>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-6 py-3 rounded-full hover:bg-pink-100 transition-all hover:scale-105"
            >
              Voir les profils à {city.name}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <div className="text-pink-200">
              <span className="font-semibold text-white">{profileCount}+</span> profils actifs
            </div>
          </div>
        </div>
      </section>

      {/* Profils */}
      <ProfileGrid
        locationSlug={slug}
        locationName={city.name}
        population={city.population}
      />

      {/* CTA intermédiaire */}
      <section className="py-8 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg mb-4">
            Ces profils vous intéressent ? Accédez à tous les profils de {city.name}
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-6 py-3 rounded-full hover:bg-pink-100 transition-all hover:scale-105"
          >
            Inscription gratuite
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Villes proches */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Rencontre trans près de {city.name}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/ville/${nearbyCity.slug}`}
                  className="group p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all hover:shadow-md"
                >
                  <h3 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                    Trans {nearbyCity.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {nearbyCity.population.toLocaleString('fr-FR')} hab.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contenu enrichi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
            Faites des rencontres trans à {city.name}
          </h2>

          {/* Grille d'avantages */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Près de chez vous</h3>
              <p className="text-gray-600 text-sm">
                Des profils de femmes trans actives à {city.name} et dans les environs immédiats.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Profils vérifiés</h3>
              <p className="text-gray-600 text-sm">
                Chaque profil est vérifié pour garantir des rencontres authentiques et sécurisées.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Messagerie gratuite</h3>
              <p className="text-gray-600 text-sm">
                Échangez sans limite avec tous les profils qui vous plaisent. Aucun frais caché.
              </p>
            </div>
          </div>

          {/* Section informative avec design moderne */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-10">
                <span className="inline-block bg-pink-100 text-pink-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {city.name}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {isLargeCity
                    ? `Une communauté trans dynamique`
                    : `Des rencontres authentiques`
                  }
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {isLargeCity
                    ? `${city.name} accueille une communauté trans vivante et diverse. La ville offre de nombreuses opportunités de rencontres, que vous cherchiez une relation sérieuse ou des moments de complicité.`
                    : `À ${city.name}, les rencontres sont souvent plus personnelles et authentiques. Notre partenaire vous connecte avec des femmes trans de votre secteur et des alentours.`
                  }
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Les femmes transgenres inscrites sur notre site partenaire recherchent des personnes respectueuses pour partager des moments agréables. Créez votre profil gratuitement et commencez à échanger.
                </p>

                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full mt-6 hover:from-pink-600 hover:to-purple-600 transition-all"
                >
                  Commencer maintenant
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              <div className="md:w-1/2 bg-gradient-to-br from-pink-100 to-purple-100 p-8 md:p-10">
                <h4 className="font-bold text-gray-800 mb-6">Ce qui vous attend :</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Inscription en moins de 30 secondes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Recherche par ville et par critères</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Photos et descriptions détaillées</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Discrétion et confidentialité assurées</span>
                  </li>
                </ul>

                {dept && region && (
                  <div className="mt-8 p-4 bg-white/50 rounded-xl">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">{city.name}</span> • {dept.name} ({dept.code}) • {region.name}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Link href={`/departement/${dept.slug}`} className="text-xs text-pink-600 hover:underline">
                        Voir le département
                      </Link>
                      <span className="text-gray-300">•</span>
                      <Link href={`/region/${region.slug}`} className="text-xs text-pink-600 hover:underline">
                        Voir la région
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Disclaimer discret */}
          <p className="text-center text-sm text-gray-400 mt-8">
            Site affilié • Redirection vers notre partenaire de confiance
          </p>
        </div>
      </section>

      {/* CTA final */}
      <CTASection location={city.name} profileCount={profileCount} />
    </>
  );
}
