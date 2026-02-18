import { Metadata } from 'next';
import Link from 'next/link';
import { AFFILIATE_LINK, SITE_NAME, SITE_DOMAIN } from '@/lib/constants';
import { getRelatedPosts } from '@/data/blog';
import { ArticleSchema, BreadcrumbSchema } from '@/components/JsonLd';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

export const metadata: Metadata = {
  title: "Exploration du Bar a Putes de Dame Joelle : Lieu de Rencontre et Liberte",
  description: "Decouvrez le mythique Bar a Putes de Dame Joelle, un espace de liberte ou les rencontres trans sont celebrees dans un cadre respectueux et convivial.",
  keywords: ["bar trans paris", "rencontre trans bar", "dame joelle", "sortie trans", "vie nocturne trans"],
  alternates: {
    canonical: '/bar-a-pute-dame-joelle',
  },
  openGraph: {
    title: "Exploration du Bar a Putes de Dame Joelle",
    description: "Decouvrez le mythique Bar a Putes de Dame Joelle, un espace de liberte ou les rencontres trans sont celebrees.",
    url: `${BASE_URL}/bar-a-pute-dame-joelle`,
    type: 'article',
    publishedTime: '2024-05-10',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Exploration du Bar a Putes de Dame Joelle",
    description: "Decouvrez le mythique Bar a Putes de Dame Joelle, un espace de liberte ou les rencontres trans sont celebrees.",
  },
};

export default function BarDameJoellePage() {
  const relatedPosts = getRelatedPosts("bar-a-pute-dame-joelle");

  return (
    <>
      <ArticleSchema
        title="Exploration du Bar a Putes de Dame Joelle : Un Lieu de Rencontre et de Liberte"
        description="Decouvrez le mythique Bar a Putes de Dame Joelle, un espace de liberte ou les rencontres trans sont celebrees dans un cadre respectueux et convivial."
        slug="bar-a-pute-dame-joelle"
        datePublished="2024-05-10"
        category="Conseils"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Blog', url: '/#blog' },
          { name: 'Bar a Putes de Dame Joelle', url: '/bar-a-pute-dame-joelle' },
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
            <span>Bar a Putes de Dame Joelle</span>
          </nav>

          <div className="inline-block bg-white/20 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Conseils
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Exploration du Bar a Putes de Dame Joelle : Un Lieu de Rencontre et de Liberte
          </h1>

          <div className="flex items-center gap-4 text-pink-200">
            <span>10 mai 2024</span>
            <span>-</span>
            <span>8 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Contenu Article */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-pink max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Dans l&apos;univers des <strong>rencontres trans</strong>, certains lieux se distinguent par leur atmosphere unique
              et leur engagement envers la liberte d&apos;expression. Le Bar a Putes de Dame Joelle est l&apos;un de ces endroits
              mythiques qui a marque l&apos;histoire de la vie nocturne parisienne.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Origines et Histoire d&apos;un Lieu Legendaire
            </h2>

            <p>
              Cree dans les annees 1970 par la charismatique Joelle Dupont, ce bar s&apos;est rapidement impose comme un
              carrefour de la vie nocturne parisienne. A une epoque ou les personnes transgenres etaient souvent marginalisees,
              Dame Joelle a cree un espace ou chacun pouvait s&apos;exprimer librement.
            </p>

            <p>
              L&apos;etablissement a ete temoin de nombreuses evolutions sociales, devenant un symbole de la lutte pour les
              droits des personnes LGBTQ+ en France. Aujourd&apos;hui, il reste un lieu emblematique pour ceux qui cherchent
              des <Link href="/region/ile-de-france" className="text-pink-600 hover:text-pink-700 font-medium">rencontres trans en Ile-de-France</Link>.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8 rounded-r-xl">
              <p className="text-pink-800 font-medium mb-0">
                Vous cherchez des <strong>rencontres trans</strong> ? Notre site partenaire propose des milliers de profils
                vérifiés dans toute la France.
              </p>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-pink-600 text-white font-semibold px-6 py-3 rounded-full mt-4 hover:bg-pink-700 transition-all"
              >
                Decouvrir les profils
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Une Atmosphere Unique
            </h2>

            <p>
              Le decor du bar melange habilement l&apos;esthetique des bistrots parisiens vintage avec des touches d&apos;art
              contemporain. Les interieurs en velours et bois sombre creent une ambiance chaleureuse et intimiste,
              ideale pour faire des rencontres.
            </p>

            <p>
              L&apos;eclairage tamise et la musique soigneusement selectionnee contribuent a creer un espace ou les personnes
              transgenres et leurs admirateurs peuvent se rencontrer dans un cadre respectueux. C&apos;est un lieu ou
              l&apos;authenticite est celebree.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Les Soirees a Theme
            </h2>

            <p>
              Le bar organise regulierement des evenements thematiques qui attirent une clientele diversifiee :
            </p>

            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Degustations de vins</strong> - Des soirees elegantes pour rencontrer des personnes cultivees</li>
              <li><strong>Soirees masquees</strong> - Pour ceux qui apprecient le mystere et la seduction</li>
              <li><strong>Brunchs culturels</strong> - Des moments conviviaux en journee</li>
              <li><strong>Soirees exploration sensuelle</strong> - Dans un cadre toujours respectueux</li>
            </ul>

            <p>
              Ces evenements sont l&apos;occasion ideale pour faire des <Link href="/ville/paris" className="text-pink-600 hover:text-pink-700 font-medium">rencontres trans a Paris</Link>
              dans un cadre securise et bienveillant.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Conseils pour une Premiere Visite
            </h2>

            <p>
              Si vous envisagez de decouvrir ce lieu mythique, voici quelques conseils :
            </p>

            <ol className="list-decimal list-inside space-y-3 my-6">
              <li>Adoptez une attitude respectueuse envers tous les clients</li>
              <li>Commencez par une soiree a theme pour vous familiariser avec l&apos;ambiance</li>
              <li>N&apos;hesitez pas a engager la conversation - la clientele est generalement tres accueillante</li>
              <li>Respectez les limites de chacun et demandez toujours le consentement</li>
            </ol>

            <p>
              Pour en savoir plus sur les <Link href="/transgenre-libertin" className="text-pink-600 hover:text-pink-700 font-medium">rencontres trans dans le milieu libertin</Link>,
              consultez notre article dedie.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Au-dela du Bar : Les Rencontres Trans en Ligne
            </h2>

            <p>
              Si les bars et lieux de rencontre physiques ont leur charme, les plateformes en ligne offrent aujourd&apos;hui
              une alternative pratique pour faire des <strong>rencontres transgenres</strong>. Vous pouvez echanger avec des
              personnes de <Link href="/region/provence-alpes-cote-dazur" className="text-pink-600 hover:text-pink-700 font-medium">Provence-Alpes-Cote d&apos;Azur</Link>,
              d&apos;<Link href="/region/auvergne-rhone-alpes" className="text-pink-600 hover:text-pink-700 font-medium">Auvergne-Rhone-Alpes</Link> ou
              de n&apos;importe quelle autre region de France.
            </p>

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-2xl my-10">
              <h3 className="text-xl font-bold mb-4">Pret a faire des rencontres trans ?</h3>
              <p className="mb-6">
                Inscrivez-vous gratuitement sur notre site partenaire et decouvrez des milliers de profils vérifiés
                dans toute la France.
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
              Conclusion
            </h2>

            <p>
              Le Bar a Putes de Dame Joelle reste un lieu emblematique de la culture trans parisienne. Que vous soyez
              a la recherche de rencontres ou simplement curieux de decouvrir un espace de liberte, cet etablissement
              offre une experience unique.
            </p>

            <p>
              Pour approfondir votre comprehension de la communaute trans, nous vous invitons a lire notre article sur
              la <Link href="/definition-transgenre-transsexuel-non-binaire" className="text-pink-600 hover:text-pink-700 font-medium">terminologie transgenre</Link>
              ou a decouvrir les <Link href="/personnalites-publiques-transgenres-inspirantes" className="text-pink-600 hover:text-pink-700 font-medium">personnalites trans inspirantes</Link>.
            </p>
          </div>
        </div>
      </article>

      {/* Articles Lies */}
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
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
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
