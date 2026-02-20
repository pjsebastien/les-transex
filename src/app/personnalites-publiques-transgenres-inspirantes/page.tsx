import { Metadata } from 'next';
import Link from 'next/link';
import { AFFILIATE_LINK, SITE_NAME, SITE_DOMAIN } from '@/lib/constants';
import { getRelatedPosts } from '@/data/blog';
import { ArticleSchema, BreadcrumbSchema } from '@/components/JsonLd';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

export const metadata: Metadata = {
  title: "Personnalités Transgenres Inspirantes : Laverne Cox, Elliot Page et Plus",
  description: "Découvrez les histoires inspirantes de personnalités transgenres célèbres qui façonnent notre monde : Laverne Cox, Caitlyn Jenner, Elliot Page.",
  keywords: ["personnalités trans", "laverne cox", "elliot page", "caitlyn jenner", "célébrités transgenres", "inspiration trans"],
  alternates: {
    canonical: '/personnalites-publiques-transgenres-inspirantes',
  },
  openGraph: {
    title: "Personnalités Transgenres Inspirantes",
    description: "Découvrez les histoires inspirantes de personnalités transgenres célèbres.",
    url: `${BASE_URL}/personnalites-publiques-transgenres-inspirantes`,
    type: 'article',
    publishedTime: '2023-07-08',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Personnalités Transgenres Inspirantes",
    description: "Découvrez les histoires inspirantes de personnalités transgenres célèbres.",
  },
};

export default function PersonnalitesTransPage() {
  const relatedPosts = getRelatedPosts("personnalites-publiques-transgenres-inspirantes");

  return (
    <>
      <ArticleSchema
        title="Personnalités Publiques Transgenres Inspirantes qui Façonnent Notre Monde"
        description="Découvrez les histoires inspirantes de personnalités transgenres célèbres."
        slug="personnalites-publiques-transgenres-inspirantes"
        datePublished="2023-07-08"
        category="Inspiration"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Blog', url: '/#blog' },
          { name: 'Personnalités transgenres', url: '/personnalites-publiques-transgenres-inspirantes' },
        ]}
      />
      {/* Hero Article */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-700 to-pink-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-pink-200 mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/#blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span>Personnalités transgenres</span>
          </nav>

          <div className="inline-block bg-white/20 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Inspiration
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Personnalités Publiques Transgenres Inspirantes qui Façonnent Notre Monde
          </h1>

          <div className="flex items-center gap-4 text-pink-200">
            <span>8 juillet 2023</span>
            <span>-</span>
            <span>10 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Contenu Article */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-pink max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Nous vivons à une époque passionnante où l&apos;acceptation et l&apos;ouverture d&apos;esprit prédominent
              sur l&apos;exclusion. Les personnalités transgenres jouent un rôle crucial dans cette évolution,
              brisant les barrières et inspirant des millions de personnes à travers le monde.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Laverne Cox : Pionnière et Icône
            </h2>

            <p>
              <strong>Laverne Cox</strong> est devenue la première personne transgenre nominée pour un Emmy Award
              grâce à son rôle mémorable de Sophia Burset dans <em>Orange Is the New Black</em>. Au-delà de son
              talent d&apos;actrice, elle est une militante infatigable pour les droits des personnes trans.
            </p>

            <p>
              Son parcours inspire des milliers de femmes transgenres à travers le monde, y compris en France.
              Si vous souhaitez faire des <Link href="/region/ile-de-france" className="text-pink-600 hover:text-pink-700 font-medium">rencontres trans en Ile-de-France</Link>,
              vous rencontrerez probablement des personnes qui citent Laverne Cox comme source d&apos;inspiration.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8 rounded-r-xl">
              <blockquote className="text-purple-800 font-medium italic mb-0">
                &quot;Chaque personne trans a le droit de vivre authentiquement et d&apos;être aimée pour qui elle est.&quot;
              </blockquote>
              <cite className="text-purple-600 text-sm mt-2 block">- Laverne Cox</cite>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Caitlyn Jenner : Un Coming Out Historique
            </h2>

            <p>
              Ancienne championne olympique du décathlon, <strong>Caitlyn Jenner</strong> (anciennement Bruce Jenner)
              a fait son coming out en 2015, devenant l&apos;une des personnalités transgenres les plus connues au monde.
              Sa transition publique a contribué à sensibiliser des millions de personnes aux réalités des personnes trans.
            </p>

            <p>
              Son courage a inspiré de nombreuses personnes à assumer leur identité, que ce soit à
              <Link href="/ville/paris" className="text-pink-600 hover:text-pink-700 font-medium"> Paris</Link>,
              <Link href="/ville/lyon" className="text-pink-600 hover:text-pink-700 font-medium"> Lyon</Link> ou
              <Link href="/ville/marseille" className="text-pink-600 hover:text-pink-700 font-medium"> Marseille</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Elliot Page : Authenticité et Courage
            </h2>

            <p>
              L&apos;acteur <strong>Elliot Page</strong>, célèbre pour son rôle dans <em>Juno</em>, a annoncé son identité
              d&apos;homme transgenre en 2020. Sa déclaration publique a été saluée pour son courage et a permis de
              mettre en lumière les expériences des hommes trans.
            </p>

            <p>
              Elliot Page continue de jouer des rôles importants à Hollywood tout en militant pour les droits LGBTQ+.
              Son parcours montre que l&apos;authenticité et le succès professionnel peuvent aller de pair.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8 rounded-r-xl">
              <p className="text-pink-800 font-medium mb-0">
                Vous souhaitez rencontrer des personnes transgenres près de chez vous ? Notre site partenaire
                propose des milliers de profils vérifiés dans toute la France.
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
              Impact sur la Société Française
            </h2>

            <p>
              Ces personnalités influencent également la perception des personnes trans en France. De plus en plus
              de Français sont ouverts aux <strong>rencontres trans</strong>, que ce soit en
              <Link href="/region/provence-alpes-cote-dazur" className="text-pink-600 hover:text-pink-700 font-medium"> Provence-Alpes-Côte d&apos;Azur</Link>,
              en <Link href="/region/nouvelle-aquitaine" className="text-pink-600 hover:text-pink-700 font-medium">Nouvelle-Aquitaine</Link> ou
              dans toutes les autres régions.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Acceptation Croissante
            </h3>

            <p>
              Les histoires de ces personnalités contribuent à normaliser l&apos;expérience transgenre. Les médias
              français accordent de plus en plus de visibilité aux personnes trans, ce qui facilite leur intégration
              sociale et leurs possibilités de rencontres.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Éducation et Sensibilisation
            </h3>

            <p>
              Grâce à ces figures publiques, de nombreuses personnes comprennent mieux ce que signifie être transgenre.
              Pour approfondir ce sujet, consultez notre article sur la
              <Link href="/definition-transgenre-transsexuel-non-binaire" className="text-pink-600 hover:text-pink-700 font-medium"> terminologie transgenre</Link>.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">
              Changement Politique
            </h3>

            <p>
              L&apos;influence de ces personnalités dépasse le cadre culturel. Elles contribuent à faire évoluer
              les lois et les politiques en faveur des droits des personnes trans, aussi bien aux États-Unis qu&apos;en France.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Autres Personnalités Inspirantes
            </h2>

            <ul className="list-disc list-inside space-y-3 my-6">
              <li><strong>Jazz Jennings</strong> - Militante et personnalité télévisuelle américaine</li>
              <li><strong>Janet Mock</strong> - Écrivaine, productrice et militante</li>
              <li><strong>Indya Moore</strong> - Actrice de la série Pose</li>
              <li><strong>Kim Petras</strong> - Chanteuse pop germano-américaine</li>
              <li><strong>Teddy Quinlivan</strong> - Mannequin de renommée internationale</li>
            </ul>

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-2xl my-10">
              <h3 className="text-xl font-bold mb-4">Faites de belles rencontres trans</h3>
              <p className="mb-6">
                Inspirez-vous de ces parcours et osez vivre vos propres expériences. Notre site partenaire
                vous permet de rencontrer des femmes trans dans toute la France.
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
              Les personnalités transgenres comme Laverne Cox, Caitlyn Jenner et Elliot Page sont des preuves
              vivantes de la diversité, de la résilience et de l&apos;authenticité humaine. Leurs histoires nous
              rappellent que chacun mérite de vivre sa vérité.
            </p>

            <p>
              Pour en savoir plus sur la communauté trans, découvrez notre article sur les
              <Link href="/mythes-courant-transgenre" className="text-pink-600 hover:text-pink-700 font-medium"> mythes courants sur les personnes transgenres</Link>
              ou explorez les possibilités de <Link href="/transgenre-libertin" className="text-pink-600 hover:text-pink-700 font-medium">rencontres trans dans le milieu libertin</Link>.
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
