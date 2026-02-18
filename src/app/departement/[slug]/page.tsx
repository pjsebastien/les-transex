import { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import ProfileGrid from '@/components/ProfileGrid';
import CTASection from '@/components/CTASection';
import SearchBar from '@/components/SearchBar';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/JsonLd';
import { regions } from '@/data/regions';
import { departments } from '@/data/departments';
import { cities } from '@/data/cities';
import { AFFILIATE_LINK, SITE_DOMAIN } from '@/lib/constants';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return departments.map((dept) => ({
    slug: dept.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);

  if (!dept) {
    return { title: 'Département non trouvé' };
  }

  return {
    title: `Rencontre Trans ${dept.name} (${dept.code}) - Site de rencontre transgenre`,
    description: `Rencontre trans dans le ${dept.name} (${dept.code}). Profils vérifiés de femmes transgenres. Trouvez votre rencontre près de chez vous. Inscription gratuite.`,
    keywords: [`rencontre trans ${dept.name}`, `trans ${dept.code}`, `transgenre ${dept.name}`, `rencontre travesti ${dept.name}`],
    alternates: {
      canonical: `/departement/${slug}`,
    },
    openGraph: {
      title: `Rencontre Trans ${dept.name} (${dept.code})`,
      description: `Rencontre trans dans le ${dept.name}. Profils vérifiés de femmes transgenres.`,
      url: `${BASE_URL}/departement/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Rencontre Trans ${dept.name} (${dept.code})`,
      description: `Rencontre trans dans le ${dept.name}. Profils vérifiés de femmes transgenres.`,
    },
  };
}

export default async function DepartmentPage({ params }: PageProps) {
  const { slug } = await params;

  // Paris (75) est à la fois une ville et un département, rediriger vers la page ville
  if (slug === 'paris-75' || slug === 'paris') {
    redirect('/ville/paris');
  }

  const dept = departments.find((d) => d.slug === slug);

  if (!dept) {
    notFound();
  }

  const region = regions.find((r) => r.slug === dept.regionSlug);
  const deptCities = cities
    .filter((c) => c.departmentCode === dept.code)
    .sort((a, b) => b.population - a.population);

  const totalPopulation = deptCities.reduce((sum, c) => sum + c.population, 0);

  // Préparer les items du fil d'Ariane
  const breadcrumbItems = [
    { name: 'Accueil', url: '/' },
  ];
  if (region) {
    breadcrumbItems.push({ name: region.name, url: `/region/${region.slug}` });
  }
  breadcrumbItems.push({ name: dept.name, url: `/departement/${dept.slug}` });

  return (
    <>
      <LocalBusinessSchema
        name={`Rencontre Trans ${dept.name}`}
        description={`Site de rencontre pour femmes transgenres dans le ${dept.name}. Profils vérifiés et inscription gratuite.`}
        url={`/departement/${dept.slug}`}
        areaServed={dept.name}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-pink-200 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            {region && (
              <>
                <Link href={`/region/${region.slug}`} className="hover:text-white">{region.name}</Link>
                <span className="mx-2">/</span>
              </>
            )}
            <span>{dept.name}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Rencontre Trans dans le {dept.name} ({dept.code})
          </h1>
          <p className="text-lg text-pink-100 max-w-2xl mb-6">
            Trouvez des profils de femmes transgenres dans le département {dept.name}.
            {deptCities.length > 0 && ` ${deptCities.length} villes disponibles.`}
          </p>

          {/* Barre de recherche */}
          <div className="mb-6 max-w-xl">
            <SearchBar />
          </div>

          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-6 py-3 rounded-full hover:bg-purple-100 transition-all hover:scale-105"
          >
            Voir les profils dans le {dept.code}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Profils */}
      <ProfileGrid
        locationSlug={slug}
        locationName={dept.name}
        population={Math.min(totalPopulation / 10, 200000)}
      />

      {/* Villes */}
      {deptCities.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Rencontre trans par ville dans le {dept.name}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {deptCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/ville/${city.slug}`}
                  className="group p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all hover:shadow-md"
                >
                  <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    Trans {city.name}
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
      <CTASection location={dept.name} variant="secondary" />

      {/* Contenu SEO */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <h2 className="text-2xl font-bold text-gray-800">
              Trouver une rencontre trans dans le {dept.name}
            </h2>

            <p>
              Le département du <strong>{dept.name} ({dept.code})</strong> offre de nombreuses
              opportunités pour des <strong>rencontres trans</strong>. Que vous habitiez
              {deptCities.length > 0 ? ` à ${deptCities[0].name}` : ''} ou dans une autre commune,
              notre partenaire vous propose des profils vérifiés de femmes transgenres.
            </p>

            <p>
              Les <strong>rencontres transgenres dans le {dept.code}</strong> n&apos;ont jamais été
              aussi simples. Inscrivez-vous gratuitement et commencez à échanger avec des
              profils près de chez vous.
            </p>

            {region && (
              <p>
                Le {dept.name} fait partie de la région {region.name}, qui compte de nombreux
                autres départements pour élargir vos recherches.
              </p>
            )}

            <p>
              <em>
                Site affilié - Nous vous redirigeons vers notre partenaire de confiance pour
                vos rencontres trans dans le {dept.name}.
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
