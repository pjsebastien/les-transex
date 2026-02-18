import { Metadata } from 'next';
import Link from 'next/link';
import { AFFILIATE_LINK, SITE_NAME, SITE_DOMAIN } from '@/lib/constants';
import { getRelatedPosts } from '@/data/blog';
import { ArticleSchema, BreadcrumbSchema } from '@/components/JsonLd';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

export const metadata: Metadata = {
  title: "Mythes Courants sur les Personnes Transgenres : Faits vs Fiction",
  description: "Demystifions les idees recues sur les personnes trans. Decouvrez la verite scientifique derriere les mythes les plus repandus.",
  keywords: ["mythes transgenre", "idees recues trans", "verite transgenre", "science transgenre", "prejuges trans"],
  alternates: {
    canonical: '/mythes-courant-transgenre',
  },
  openGraph: {
    title: "Mythes Courants sur les Personnes Transgenres : Faits vs Fiction",
    description: "Demystifions les idees recues sur les personnes trans.",
    url: `${BASE_URL}/mythes-courant-transgenre`,
    type: 'article',
    publishedTime: '2023-07-08',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mythes Courants sur les Personnes Transgenres",
    description: "Demystifions les idees recues sur les personnes trans.",
  },
};

export default function MythesTransgenrePage() {
  const relatedPosts = getRelatedPosts("mythes-courant-transgenre");

  return (
    <>
      <ArticleSchema
        title="Demasquer les Fictions : Mythes Courants sur les Personnes Transgenres"
        description="Demystifions les idees recues sur les personnes trans avec des faits scientifiques."
        slug="mythes-courant-transgenre"
        datePublished="2023-07-08"
        category="Education"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Blog', url: '/#blog' },
          { name: 'Mythes transgenres', url: '/mythes-courant-transgenre' },
        ]}
      />
      {/* Hero Article */}
      <section className="bg-gradient-to-br from-pink-700 via-purple-600 to-pink-600 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-pink-200 mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/#blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span>Mythes transgenres</span>
          </nav>

          <div className="inline-block bg-white/20 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Education
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Demasquer les Fictions : Mythes Courants sur les Personnes Transgenres
          </h1>

          <div className="flex items-center gap-4 text-pink-200">
            <span>8 juillet 2023</span>
            <span>-</span>
            <span>9 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Contenu Article */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-pink max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprendre l&apos;experience transgenre necessite de distinguer les faits des fictions.
              Demystifier les conceptions erronees est essentiel pour cultiver un monde plus inclusif
              et faciliter les <strong>rencontres trans</strong> respectueuses.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Mythe 1 : Les personnes transgenres sont confuses
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded-r-xl">
              <p className="text-red-800 font-medium mb-0">FAUX</p>
            </div>

            <p>
              Contrairement a cette idee recue, l&apos;identite transgenre ne releve pas de la confusion.
              Selon des etudes publiees dans <em>The Lancet Psychiatry</em>, l&apos;identite de genre est
              une experience profondement enracinee. La plupart des personnes transgenres comprennent
              clairement leur identite, souvent des leur plus jeune age.
            </p>

            <p>
              Cette certitude interieure est ce qui pousse de nombreuses personnes a entreprendre
              leur transition, malgre les defis sociaux. Si vous souhaitez faire des
              <Link href="/region/ile-de-france" className="text-pink-600 hover:text-pink-700 font-medium"> rencontres trans en Ile-de-France</Link> ou
              ailleurs, gardez a l&apos;esprit que les femmes trans que vous rencontrerez ont generalement
              une conscience tres claire de leur identite.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Mythe 2 : Etre transgenre est une mode recente
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded-r-xl">
              <p className="text-red-800 font-medium mb-0">FAUX</p>
            </div>

            <p>
              L&apos;histoire nous montre le contraire. Les identites transgenres existent depuis des
              millenaires dans de nombreuses cultures :
            </p>

            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Les Hijras</strong> en Asie du Sud - reconnues depuis des siecles</li>
              <li><strong>Les Two-Spirit</strong> dans les cultures autochtones americaines</li>
              <li><strong>Lili Elbe</strong> - l&apos;une des premieres femmes a avoir subi une chirurgie de reaffirmation de genre dans les annees 1930</li>
              <li><strong>Les Muxes</strong> au Mexique - une tradition millénaire</li>
            </ul>

            <p>
              Ce qui est nouveau, c&apos;est la visibilite et l&apos;acceptation croissante, pas l&apos;existence
              des personnes trans elles-memes.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8 rounded-r-xl">
              <p className="text-pink-800 font-medium mb-0">
                Vous souhaitez rencontrer des femmes trans ? Notre site partenaire propose des
                profils vérifiés dans toute la France, de <Link href="/ville/paris" className="text-pink-600 hover:text-pink-700">Paris</Link> a
                <Link href="/ville/marseille" className="text-pink-600 hover:text-pink-700"> Marseille</Link>.
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
              Mythe 3 : Les enfants ne peuvent pas connaitre leur identite de genre
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded-r-xl">
              <p className="text-red-800 font-medium mb-0">FAUX</p>
            </div>

            <p>
              Selon l&apos;Association Americaine de Psychologie, les enfants peuvent avoir une forte
              conscience de leur identite de genre des le plus jeune age. La plupart des enfants
              developpent une conscience de leur genre entre 3 et 5 ans.
            </p>

            <p>
              Cette comprehension precoce n&apos;est pas specifique aux enfants trans - tous les enfants
              developpent leur identite de genre tot dans leur vie. Les enfants trans expriment
              simplement une identite differente de celle qu&apos;on leur a assignee.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Mythe 4 : Les personnes trans sont toutes homosexuelles
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded-r-xl">
              <p className="text-red-800 font-medium mb-0">FAUX</p>
            </div>

            <p>
              L&apos;identite de genre et l&apos;orientation sexuelle sont deux choses distinctes.
              Une femme trans peut etre attirée par les hommes (heterosexuelle), par les femmes
              (lesbienne), par les deux (bisexuelle) ou par aucun des deux (asexuelle).
            </p>

            <p>
              Cette diversite se retrouve dans les <strong>rencontres trans</strong> : certaines femmes
              trans recherchent des partenaires masculins, d&apos;autres feminins, d&apos;autres encore
              sont ouvertes a differents types de relations.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Mythe 5 : Toutes les personnes trans veulent une chirurgie
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded-r-xl">
              <p className="text-red-800 font-medium mb-0">FAUX</p>
            </div>

            <p>
              La transition est un parcours personnel et unique pour chaque individu. Certaines
              personnes trans choisissent des interventions chirurgicales, d&apos;autres optent pour
              un traitement hormonal seul, et d&apos;autres encore ne souhaitent aucune modification
              medicale.
            </p>

            <p>
              Toutes ces experiences sont valides. L&apos;identite d&apos;une personne ne depend pas de son
              corps ou des procedures medicales qu&apos;elle a subies ou non.
            </p>

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-2xl my-10">
              <h3 className="text-xl font-bold mb-4">Pret a faire des rencontres trans ?</h3>
              <p className="mb-6">
                Maintenant que vous connaissez mieux la realite des personnes trans, pourquoi ne pas
                faire de belles rencontres ? Notre site partenaire propose des profils vérifiés dans
                toute la France.
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
              L&apos;importance de l&apos;education
            </h2>

            <p>
              Comprendre ces realites est essentiel pour des <strong>rencontres trans</strong>
              respectueuses et enrichissantes. Que vous soyez en
              <Link href="/region/auvergne-rhone-alpes" className="text-pink-600 hover:text-pink-700 font-medium"> Auvergne-Rhone-Alpes</Link>,
              en <Link href="/region/occitanie" className="text-pink-600 hover:text-pink-700 font-medium">Occitanie</Link> ou
              ailleurs, traiter les personnes trans avec respect commence par comprendre leur realite.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Conclusion
            </h2>

            <p>
              Demystifier ces mythes est une etape cruciale vers une societe plus inclusive.
              Les personnes transgenres meritent d&apos;etre comprises et respectees pour qui elles sont,
              pas jugees sur des stereotypes errones.
            </p>

            <p>
              Pour approfondir votre comprehension, consultez notre article sur la
              <Link href="/definition-transgenre-transsexuel-non-binaire" className="text-pink-600 hover:text-pink-700 font-medium"> terminologie transgenre</Link>
              ou decouvrez les <Link href="/personnalites-publiques-transgenres-inspirantes" className="text-pink-600 hover:text-pink-700 font-medium">personnalites trans inspirantes</Link>.
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
