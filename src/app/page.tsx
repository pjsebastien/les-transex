import { Metadata } from 'next';
import ProfileGrid from '@/components/ProfileGrid';
import RegionList from '@/components/RegionList';
import CTASection from '@/components/CTASection';
import HeroSection from '@/components/HeroSection';
import BlogSection from '@/components/BlogSection';
import { FAQSchema } from '@/components/JsonLd';
import { AFFILIATE_LINK, SITE_NAME, SITE_DOMAIN } from '@/lib/constants';

const BASE_URL = `https://www.${SITE_DOMAIN}`;

export const metadata: Metadata = {
  title: `Rencontre Trans - Site de rencontre transgenre en France | ${SITE_NAME}`,
  description: 'Le meilleur site de rencontre trans en France. Des milliers de profils vérifiés de femmes transgenres partout en France. Inscription gratuite et messagerie illimitée.',
  keywords: ['rencontre trans', 'site rencontre trans', 'rencontre transgenre', 'femme trans', 'trans France', 'rencontre travesti', 'site trans'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_NAME} - Site de rencontre trans en France`,
    description: 'Le meilleur site de rencontre trans en France. Des milliers de profils vérifiés.',
    url: BASE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Site de rencontre trans en France`,
    description: 'Le meilleur site de rencontre trans en France. Des milliers de profils vérifiés.',
  },
};

const faqs = [
  {
    question: "L'inscription est-elle vraiment gratuite ?",
    answer: "Oui, l'inscription sur notre site partenaire est 100% gratuite. Vous pouvez créer votre profil, parcourir les autres profils et envoyer des messages sans dépenser un centime."
  },
  {
    question: "Les profils sont-ils vérifiés ?",
    answer: "Notre partenaire met en place un système de vérification des profils pour limiter les faux comptes et garantir des rencontres authentiques. Les profils vérifiés sont identifiés par un badge."
  },
  {
    question: "Ma vie privée est-elle protégée ?",
    answer: "La discrétion est une priorité absolue. Vos données personnelles sont protégées et ne sont jamais partagées avec des tiers. Vous pouvez naviguer et échanger en toute confidentialité."
  },
  {
    question: "Puis-je utiliser le site sur mobile ?",
    answer: "Absolument ! Le site de notre partenaire est entièrement responsive et fonctionne parfaitement sur smartphone et tablette. Vous pouvez faire des rencontres où que vous soyez."
  }
];

export default function Home() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <HeroSection />

      {/* Section profils */}
      <div id="profiles">
        <ProfileGrid
          locationSlug="france"
          locationName="France"
          population={1000000}
        />
      </div>

      {/* Section avantages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pourquoi choisir notre partenaire ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des fonctionnalités pensées pour faciliter vos rencontres trans en toute sécurité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Profils vérifiés</h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque profil est vérifié pour garantir des rencontres authentiques. Fini les faux profils et les arnaques.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Discrétion assurée</h3>
              <p className="text-gray-600 leading-relaxed">
                Votre vie privée est notre priorité. Naviguez et échangez en toute confidentialité.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Messagerie illimitée</h3>
              <p className="text-gray-600 leading-relaxed">
                Échangez sans restriction avec tous les profils qui vous intéressent. Aucune limite de messages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Recherche géoloc</h3>
              <p className="text-gray-600 leading-relaxed">
                Trouvez des femmes trans près de chez vous grâce à notre système de recherche géographique avancé.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">100% gratuit</h3>
              <p className="text-gray-600 leading-relaxed">
                Inscription gratuite, création de profil gratuite, messagerie gratuite. Pas de frais cachés.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mobile friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Accédez à vos rencontres où que vous soyez depuis votre smartphone ou tablette.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section How it works */}
      <section id="how" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trois étapes simples pour commencer vos rencontres trans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Inscription gratuite</h3>
              <p className="text-gray-600 leading-relaxed">
                Créez votre profil en moins de 30 secondes sur notre site partenaire. Aucune carte bancaire requise.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-pink-300 to-transparent"></div>
            </div>

            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Parcourez les profils</h3>
              <p className="text-gray-600 leading-relaxed">
                Découvrez des milliers de profils de femmes trans près de chez vous. Utilisez les filtres pour affiner votre recherche.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Entrez en contact</h3>
              <p className="text-gray-600 leading-relaxed">
                Envoyez des messages et planifiez vos rencontres. La messagerie est 100% gratuite et illimitée.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105 shadow-lg"
            >
              Commencer maintenant
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section regions */}
      <RegionList />

      {/* Section temoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des milliers de personnes ont déjà fait de belles rencontres
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                &quot;Site très bien fait, des profils réels et des femmes charmantes. J&apos;ai fait plusieurs rencontres agréables. Je recommande !&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Marc, 42 ans</div>
                  <div className="text-sm text-gray-500">Paris</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                &quot;Enfin un site sérieux pour les rencontres trans ! L&apos;inscription est rapide et les profils sont vérifiés. Très satisfait.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Julien, 35 ans</div>
                  <div className="text-sm text-gray-500">Lyon</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                &quot;J&apos;apprécie la discrétion du site. J&apos;ai pu faire des rencontres en toute tranquillité. Merci pour ce service de qualité.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Pierre, 48 ans</div>
                  <div className="text-sm text-gray-500">Marseille</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Blog */}
      <BlogSection />

      {/* CTA Section */}
      <CTASection profileCount={15000} />

      {/* Section About / SEO */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Votre site de rencontre trans de confiance
          </h2>

          <div className="prose prose-lg text-gray-600 space-y-6">
            <p className="text-lg leading-relaxed">
              <strong>{SITE_NAME}</strong> est votre guide pour trouver des <strong>rencontres trans</strong> authentiques
              partout en France. Nous vous mettons en relation avec notre site partenaire de confiance,
              leader des <strong>rencontres transgenres</strong> en France depuis plusieurs années.
            </p>

            <p className="text-lg leading-relaxed">
              Les <strong>rencontres trans</strong> ont longtemps été difficiles à organiser. Les sites généralistes ne proposent
              pas toujours des filtres adaptés, et les communautés sont souvent dispersées. Notre partenaire a été conçu
              spécifiquement pour faciliter les rencontres entre personnes intéressées par les femmes transgenres.
            </p>

            <p className="text-lg leading-relaxed">
              Que vous recherchiez une <strong>rencontre trans à Paris</strong>, <strong>Lyon</strong>,
              <strong> Marseille</strong>, <strong>Toulouse</strong>, <strong>Bordeaux</strong> ou dans n&apos;importe quelle autre ville de France,
              vous trouverez des profils vérifiés de femmes transgenres près de chez vous.
            </p>

            <div className="bg-white rounded-2xl p-8 my-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Pourquoi choisir notre partenaire ?
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Plus de 15 000 profils actifs en France</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Inscription 100% gratuite</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Profils vérifiés pour plus de sécurité</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Messagerie illimitée</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Disponible sur mobile et ordinateur</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Service client réactif</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
              Comment faire une rencontre trans réussie ?
            </h3>

            <p className="text-lg leading-relaxed">
              Faire une <strong>rencontre trans</strong> réussie passe par le respect mutuel et une communication claire.
              Soyez honnête sur vos intentions et respectez toujours les limites de votre interlocutrice.
              Les femmes trans sont des personnes comme les autres, qui méritent d&apos;être traitées avec dignité.
            </p>

            <p className="text-lg leading-relaxed">
              Sur notre site partenaire, prenez le temps de lire les profils attentivement. Chaque femme trans a ses propres
              attentes et préférences. Certaines recherchent une relation sérieuse, d&apos;autres des rencontres plus
              occasionnelles. Assurez-vous que vos attentes correspondent avant d&apos;engager la conversation.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
              Rencontre trans dans toute la France
            </h3>

            <p className="text-lg leading-relaxed">
              Que vous habitiez en Île-de-France, en Provence-Alpes-Côte d&apos;Azur, en Auvergne-Rhône-Alpes ou dans
              n&apos;importe quelle autre région, vous trouverez des profils de femmes trans près de chez vous.
              Notre partenaire couvre l&apos;ensemble du territoire français, des grandes métropoles aux villes moyennes.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8 rounded-r-xl">
              <p className="text-pink-800 font-medium">
                <em>
                  Site affilié - Nous vous redirigeons vers notre partenaire de confiance pour
                  vous offrir la meilleure expérience de rencontre trans. L&apos;inscription est gratuite et sans engagement.
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                L&apos;inscription est-elle vraiment gratuite ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Oui, l&apos;inscription sur notre site partenaire est 100% gratuite. Vous pouvez créer votre profil,
                parcourir les autres profils et envoyer des messages sans dépenser un centime.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Les profils sont-ils vérifiés ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Notre partenaire met en place un système de vérification des profils pour limiter les faux comptes
                et garantir des rencontres authentiques. Les profils vérifiés sont identifiés par un badge.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Ma vie privée est-elle protégée ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                La discrétion est une priorité absolue. Vos données personnelles sont protégées et ne sont jamais
                partagées avec des tiers. Vous pouvez naviguer et échanger en toute confidentialité.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Puis-je utiliser le site sur mobile ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolument ! Le site de notre partenaire est entièrement responsive et fonctionne parfaitement
                sur smartphone et tablette. Vous pouvez faire des rencontres où que vous soyez.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
