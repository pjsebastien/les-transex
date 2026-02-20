import { Metadata } from 'next';
import Link from 'next/link';
import { AFFILIATE_LINK, SITE_NAME, SITE_DOMAIN } from '@/lib/constants';
import { getRelatedPosts } from '@/data/blog';
import { ArticleSchema, BreadcrumbSchema } from '@/components/JsonLd';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

export const metadata: Metadata = {
  title: "Comprendre la Terminologie : Transgenre, Transsexuel, Non-Binaire",
  description: "Guide complet pour comprendre les termes liés à l'identité de genre : transgenre, transsexuel, non-binaire, cisgenre et plus encore.",
  keywords: ["transgenre definition", "transsexuel definition", "non binaire", "genre fluide", "terminologie trans", "cisgenre"],
  alternates: {
    canonical: '/definition-transgenre-transsexuel-non-binaire',
  },
  openGraph: {
    title: "Comprendre la Terminologie : Transgenre, Transsexuel, Non-Binaire",
    description: "Guide complet pour comprendre les termes liés à l'identité de genre.",
    url: `${BASE_URL}/definition-transgenre-transsexuel-non-binaire`,
    type: 'article',
    publishedTime: '2023-07-08',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Comprendre la Terminologie : Transgenre, Transsexuel, Non-Binaire",
    description: "Guide complet pour comprendre les termes liés à l'identité de genre.",
  },
};

export default function DefinitionTransgenrePage() {
  const relatedPosts = getRelatedPosts("definition-transgenre-transsexuel-non-binaire");

  return (
    <>
      <ArticleSchema
        title="Comprendre la Terminologie : Transgenre, Transsexuel, Non-Binaire"
        description="Guide complet pour comprendre les termes liés à l'identité de genre."
        slug="definition-transgenre-transsexuel-non-binaire"
        datePublished="2023-07-08"
        category="Éducation"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Blog', url: '/#blog' },
          { name: 'Terminologie transgenre', url: '/definition-transgenre-transsexuel-non-binaire' },
        ]}
      />
      {/* Hero Article */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-pink-200 mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/#blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span>Terminologie transgenre</span>
          </nav>

          <div className="inline-block bg-white/20 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Éducation
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Comprendre la Terminologie : Transgenre, Transsexuel, Non-Binaire
          </h1>

          <div className="flex items-center gap-4 text-pink-200">
            <span>8 juillet 2023</span>
            <span>-</span>
            <span>11 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Contenu Article */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-pink max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprendre la terminologie liée à l&apos;identité de genre est plus qu&apos;une simple question
              de vocabulaire. C&apos;est une étape essentielle pour respecter la diversité humaine et
              faciliter des <strong>rencontres trans</strong> basées sur le respect mutuel.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Transgenre
            </h2>

            <p>
              <strong>Transgenre</strong> est un terme parapluie qui englobe toutes les personnes dont
              l&apos;identité de genre diffère de celle qui leur a été assignée à la naissance.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-6 rounded-r-xl">
              <p className="text-purple-800 mb-0">
                <strong>Exemple :</strong> Une personne assignée homme à la naissance mais qui s&apos;identifie
                comme femme est une femme transgenre (ou femme trans).
              </p>
            </div>

            <p>
              Les femmes trans que vous pouvez rencontrer sur notre site partenaire, que ce soit à
              <Link href="/ville/paris" className="text-pink-600 hover:text-pink-700 font-medium"> Paris</Link>,
              <Link href="/ville/lyon" className="text-pink-600 hover:text-pink-700 font-medium"> Lyon</Link> ou
              <Link href="/ville/nice" className="text-pink-600 hover:text-pink-700 font-medium"> Nice</Link>,
              font partie de cette communauté diversifiée.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Transsexuel / Transsexuelle
            </h2>

            <p>
              Ce terme, historiquement associé aux personnes ayant subi une chirurgie de réaffirmation
              de genre, est aujourd&apos;hui considéré comme désuet par certains. Il peut être perçu comme
              médicalisant l&apos;expérience trans.
            </p>

            <p>
              Cependant, certaines personnes continuent de s&apos;identifier ainsi, et il est important
              de respecter le terme que chaque personne choisit pour elle-même.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Non-Binaire
            </h2>

            <p>
              Les personnes <strong>non-binaires</strong> ne s&apos;identifient ni exclusivement comme homme,
              ni exclusivement comme femme. Leur identité de genre se situe en dehors du cadre
              traditionnel masculin/féminin.
            </p>

            <ul className="list-disc list-inside space-y-2 my-6">
              <li>Certaines personnes non-binaires s&apos;identifient à un mélange des deux genres</li>
              <li>D&apos;autres ne s&apos;identifient à aucun genre</li>
              <li>D&apos;autres encore ont une identité de genre qui fluctue</li>
            </ul>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8 rounded-r-xl">
              <p className="text-pink-800 font-medium mb-0">
                Vous souhaitez faire des <strong>rencontres trans</strong> ? Notre site partenaire
                propose des profils vérifiés dans toute la France.
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
              Cisgenre
            </h2>

            <p>
              Une personne <strong>cisgenre</strong> est quelqu&apos;un dont l&apos;identité de genre correspond
              à celle qui lui a été assignée à la naissance. C&apos;est le contraire de transgenre.
            </p>

            <p>
              Par exemple, une personne assignée femme à la naissance qui s&apos;identifie comme femme
              est cisgenre. La majorité de la population est cisgenre.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Autres Termes Importants
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Genre Fluide (Genderfluid)
            </h3>

            <p>
              Les personnes au genre fluide ont une identité de genre qui peut changer au fil du temps.
              Certains jours, elles peuvent se sentir plus féminines, d&apos;autres jours plus masculines,
              ou ni l&apos;un ni l&apos;autre.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Agenre
            </h3>

            <p>
              Les personnes agenres ne s&apos;identifient à aucun genre. Elles se situent en dehors du
              spectre du genre tel qu&apos;il est traditionnellement conçu.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Intersexe
            </h3>

            <p>
              Ce terme désigne les personnes nées avec des caractéristiques sexuelles (chromosomes,
              hormones, organes génitaux) qui ne correspondent pas aux définitions typiques du masculin
              ou du féminin. L&apos;intersexuation concerne la biologie, pas l&apos;identité de genre.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Queer
            </h3>

            <p>
              Terme parapluie englobant toutes les identités de genre et orientations sexuelles
              qui sortent des normes hétérosexuelles et cisgenres. Autrefois péjoratif, il a été
              réapproprié par la communauté LGBTQ+.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              L&apos;importance des Pronoms
            </h2>

            <p>
              Utiliser les pronoms corrects est une affirmation puissante de l&apos;identité de genre
              d&apos;une personne. En français, les pronoms principaux sont :
            </p>

            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Elle/la</strong> - pour les femmes (y compris les femmes trans)</li>
              <li><strong>Il/lui</strong> - pour les hommes (y compris les hommes trans)</li>
              <li><strong>Iel</strong> - pronom neutre utilisé par certaines personnes non-binaires</li>
            </ul>

            <p>
              Lorsque vous faites des <strong>rencontres trans</strong> en
              <Link href="/region/provence-alpes-cote-dazur" className="text-pink-600 hover:text-pink-700 font-medium"> Provence-Alpes-Côte d&apos;Azur</Link>,
              en <Link href="/region/bretagne" className="text-pink-600 hover:text-pink-700 font-medium">Bretagne</Link> ou
              ailleurs, n&apos;hésitez pas à demander quels pronoms la personne préfère.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Dysphorie de Genre
            </h2>

            <p>
              La <strong>dysphorie de genre</strong> est un terme médical désignant le mal-être ressenti
              par certaines personnes trans en raison de l&apos;incompatibilité entre leur identité de genre
              et leur corps ou le genre qui leur a été assigné.
            </p>

            <p>
              Toutes les personnes trans ne ressentent pas de dysphorie, et son intensité varie
              considérablement d&apos;une personne à l&apos;autre.
            </p>

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-2xl my-10">
              <h3 className="text-xl font-bold mb-4">Prêt à faire des rencontres trans ?</h3>
              <p className="mb-6">
                Maintenant que vous maîtrisez la terminologie, pourquoi ne pas faire de belles
                rencontres ? Notre site partenaire propose des profils vérifiés dans toute la France.
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
              Comprendre ces termes est une première étape vers des interactions plus respectueuses
              avec les personnes trans. La langue évolue constamment, et il est normal de ne pas
              tout savoir - l&apos;important est de faire preuve de respect et d&apos;ouverture.
            </p>

            <p>
              Pour approfondir votre compréhension, consultez notre article sur les
              <Link href="/mythes-courant-transgenre" className="text-pink-600 hover:text-pink-700 font-medium"> mythes courants sur les personnes transgenres</Link>
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
