import { Metadata } from 'next';
import Link from 'next/link';
import { AFFILIATE_LINK, SITE_NAME, SITE_DOMAIN } from '@/lib/constants';
import { getRelatedPosts } from '@/data/blog';
import { ArticleSchema, BreadcrumbSchema } from '@/components/JsonLd';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

export const metadata: Metadata = {
  title: "Rencontres Transgenres dans le Milieu Libertin : Guide Complet",
  description: "Tout savoir sur les rencontres trans dans le milieu libertin : histoire, évolution, conseils pratiques et adresses pour des rencontres respectueuses.",
  keywords: ["trans libertin", "rencontre trans libertin", "club libertin trans", "soirée trans", "couple trans"],
  alternates: {
    canonical: '/transgenre-libertin',
  },
  openGraph: {
    title: "Rencontres Transgenres dans le Milieu Libertin",
    description: "Tout savoir sur les rencontres trans dans le milieu libertin.",
    url: `${BASE_URL}/transgenre-libertin`,
    type: 'article',
    publishedTime: '2023-07-08',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rencontres Transgenres dans le Milieu Libertin",
    description: "Tout savoir sur les rencontres trans dans le milieu libertin.",
  },
};

export default function TransgenreLibertinPage() {
  const relatedPosts = getRelatedPosts("transgenre-libertin");

  return (
    <>
      <ArticleSchema
        title="Les Rencontres Transgenres dans le Milieu Libertin : Guide Complet"
        description="Tout savoir sur les rencontres trans dans le milieu libertin."
        slug="transgenre-libertin"
        datePublished="2023-07-08"
        category="Rencontres"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Blog', url: '/#blog' },
          { name: 'Transgenre libertin', url: '/transgenre-libertin' },
        ]}
      />
      {/* Hero Article */}
      <section className="bg-gradient-to-br from-purple-700 via-pink-600 to-purple-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-pink-200 mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/#blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span>Transgenre libertin</span>
          </nav>

          <div className="inline-block bg-white/20 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Rencontres
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Les Rencontres Transgenres dans le Milieu Libertin : Guide Complet
          </h1>

          <div className="flex items-center gap-4 text-pink-200">
            <span>8 juillet 2023</span>
            <span>-</span>
            <span>12 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Contenu Article */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-pink max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Les <strong>rencontres transgenres dans le milieu libertin</strong> représentent une intersection
              fascinante entre exploration de la sexualité et célébration de la diversité de genre. Ce guide
              complet vous aidera à comprendre ce monde et à y évoluer avec respect et sérénité.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Un Aperçu du Milieu Libertin Trans
            </h2>

            <p>
              À l&apos;intersection du libertinage et de la transidentité, les rencontres trans font tomber
              les barrières sociales traditionnelles. Le milieu libertin, historiquement ouvert à la diversité,
              accueille de plus en plus de personnes transgenres et celles qui souhaitent les rencontrer.
            </p>

            <p>
              Que vous soyez à <Link href="/ville/paris" className="text-pink-600 hover:text-pink-700 font-medium">Paris</Link>,
              <Link href="/ville/lyon" className="text-pink-600 hover:text-pink-700 font-medium"> Lyon</Link>,
              <Link href="/ville/bordeaux" className="text-pink-600 hover:text-pink-700 font-medium"> Bordeaux</Link> ou
              ailleurs en France, vous trouverez des espaces libertins accueillants pour les personnes trans.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Histoire et Évolution
            </h2>

            <p>
              Le libertinage a toujours été un terrain fertile pour les relations qui sortent des normes
              conventionnelles. Au cours des dernières décennies, la reconnaissance des personnes transgenres
              dans ce milieu n&apos;a cessé de croître.
            </p>

            <p>
              Autrefois marginalisées, les femmes trans sont aujourd&apos;hui souvent très recherchées dans les
              milieux libertins. Cette évolution reflète un changement plus large de la société vers plus
              d&apos;acceptation et de célébration de la diversité.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8 rounded-r-xl">
              <p className="text-pink-800 font-medium mb-0">
                Vous cherchez des <strong>rencontres trans</strong> discrètes ? Notre site partenaire propose
                des milliers de profils vérifiés dans toute la France, que ce soit pour des relations
                classiques ou libertines.
              </p>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-pink-600 text-white font-semibold px-6 py-3 rounded-full mt-4 hover:bg-pink-700 transition-all"
              >
                Découvrir les profils
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Les Différents Types de Rencontres
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Rencontres en Clubs Libertins
            </h3>

            <p>
              De nombreux clubs libertins en France accueillent les personnes trans et organisent parfois
              des soirées spéciales. Ces établissements offrent un cadre sécurisé et respectueux pour
              explorer sa sexualité.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Soirées Privées
            </h3>

            <p>
              Les soirées privées entre adultes consentants permettent des rencontres plus intimes.
              Elles sont souvent organisées via des plateformes en ligne ou des réseaux de confiance.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Rencontres en Ligne
            </h3>

            <p>
              Les sites de rencontres spécialisés facilitent les connexions entre personnes trans et
              celles qui souhaitent les rencontrer. Notre site partenaire propose des profils dans
              toutes les régions de France, de l&apos;
              <Link href="/region/ile-de-france" className="text-pink-600 hover:text-pink-700 font-medium">Île-de-France</Link> à la
              <Link href="/region/provence-alpes-cote-dazur" className="text-pink-600 hover:text-pink-700 font-medium"> Provence-Alpes-Côte d&apos;Azur</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Conseils pour des Rencontres Réussies
            </h2>

            <ol className="list-decimal list-inside space-y-4 my-6">
              <li>
                <strong>Respect absolu</strong> - Traitez chaque personne avec dignité, quel que soit son genre
                ou son orientation. Le consentement est primordial.
              </li>
              <li>
                <strong>Communication claire</strong> - Exprimez vos attentes et écoutez celles de votre partenaire.
                La communication est la clé d&apos;une expérience positive.
              </li>
              <li>
                <strong>Discrétion</strong> - Respectez la vie privée de vos partenaires. Ce qui se passe entre
                adultes consentants doit rester confidentiel.
              </li>
              <li>
                <strong>Hygiène et santé</strong> - Utilisez toujours une protection et faites-vous dépister
                régulièrement. La santé sexuelle est une responsabilité partagée.
              </li>
              <li>
                <strong>Éducation</strong> - Informez-vous sur les réalités des personnes trans. Lisez notre article sur
                les <Link href="/mythes-courant-transgenre" className="text-pink-600 hover:text-pink-700 font-medium">mythes courants sur les personnes transgenres</Link>.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Les Défis à Connaître
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Discrimination
            </h3>

            <p>
              Malgré l&apos;ouverture du milieu libertin, certaines personnes trans peuvent encore faire face
              à de la discrimination ou à des comportements inappropriés. Il est important de dénoncer
              ces comportements et de soutenir les victimes.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Sécurité
            </h3>

            <p>
              Comme pour toute rencontre, la sécurité doit être une priorité. Rencontrez toujours les
              nouvelles personnes dans des lieux publics d&apos;abord, et informez un proche de vos déplacements.
            </p>

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-2xl my-10">
              <h3 className="text-xl font-bold mb-4">Prêt à faire des rencontres trans ?</h3>
              <p className="mb-6">
                Que vous cherchiez des rencontres libertines ou des relations plus classiques, notre site
                partenaire propose des milliers de profils vérifiés dans toute la France.
              </p>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-6 py-3 rounded-full hover:bg-pink-100 transition-all"
              >
                Inscription gratuite
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              L&apos;Avenir des Rencontres Trans Libertines
            </h2>

            <p>
              L&apos;évolution sociale vers plus d&apos;acceptation laisse présager un avenir où les personnes
              transgenres seront encore mieux intégrées dans tous les milieux, y compris le libertinage.
              Les plateformes en ligne et les communautés continuent de se développer pour faciliter ces
              rencontres.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Conclusion
            </h2>

            <p>
              Les rencontres transgenres dans le milieu libertin reflètent une société qui valorise
              de plus en plus la diversité et l&apos;exploration consentie de la sexualité. Que vous soyez
              trans ou que vous souhaitiez rencontrer des personnes trans, le respect et la communication
              restent les clés d&apos;expériences positives.
            </p>

            <p>
              Pour mieux comprendre la communauté trans, consultez notre article sur la
              <Link href="/definition-transgenre-transsexuel-non-binaire" className="text-pink-600 hover:text-pink-700 font-medium"> terminologie transgenre</Link>
              ou découvrez les <Link href="/personnalites-publiques-transgenres-inspirantes" className="text-pink-600 hover:text-pink-700 font-medium">personnalités trans inspirantes</Link>.
            </p>
          </div>
        </div>
      </article>

      {/* Articles Liés */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Articles similaires</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all group"
              >
                <div className="text-sm text-pink-600 font-medium mb-2">{post.category}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">{post.readTime} de lecture</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trouvez votre rencontre trans
          </h2>
          <p className="text-pink-100 text-lg mb-8">
            Des milliers de profils vérifiés vous attendent sur notre site partenaire
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-pink-100 transition-all hover:scale-105 shadow-lg"
          >
            Voir les profils
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
