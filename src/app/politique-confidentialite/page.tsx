import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_DOMAIN } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité du site Les-Transex.com - Protection des données personnelles.",
  robots: "noindex, nofollow",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span>Politique de confidentialité</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">Politique de Confidentialité</h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-8">
              Dernière mise à jour : Janvier 2024
            </p>

            <p className="text-lg">
              Cette politique de confidentialité décrit comment {SITE_NAME} collecte, utilise et
              partage vos informations lorsque vous utilisez notre site {SITE_DOMAIN}.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              1. Informations que Nous Collectons
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              1.1 Informations collectées automatiquement
            </h3>
            <p>
              Lorsque vous visitez notre site, nous collectons automatiquement certaines informations
              sur votre appareil, notamment :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>Votre adresse IP</li>
              <li>Votre type de navigateur</li>
              <li>Votre système d&apos;exploitation</li>
              <li>Les pages que vous consultez</li>
              <li>La date et l&apos;heure de votre visite</li>
              <li>Le site web d&apos;où vous venez</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              1.2 Cookies
            </h3>
            <p>
              Nous utilisons des cookies et technologies similaires pour améliorer votre expérience
              sur notre site. Ces cookies nous permettent de :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>Mémoriser vos préférences</li>
              <li>Analyser le trafic du site</li>
              <li>Personnaliser le contenu</li>
              <li>Mesurer l&apos;efficacité de nos partenariats</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              2. Utilisation des Informations
            </h2>
            <p>
              Nous utilisons les informations collectées pour :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>Fournir et améliorer notre site</li>
              <li>Analyser comment notre site est utilisé</li>
              <li>Détecter et prévenir les fraudes</li>
              <li>Communiquer avec vous si nécessaire</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              3. Partage des Informations
            </h2>
            <p>
              Nous pouvons partager vos informations avec :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Nos partenaires affiliés :</strong> lorsque vous cliquez sur un lien vers un site partenaire</li>
              <li><strong>Prestataires de services :</strong> qui nous aident à exploiter notre site (hébergement, analyse)</li>
              <li><strong>Autorités :</strong> si la loi l&apos;exige</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              4. Vos Droits (RGPD)
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
              des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : contact@{SITE_DOMAIN}
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              5. Conservation des Données
            </h2>
            <p>
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour les
              finalités décrites dans cette politique, sauf si une période de conservation plus
              longue est requise par la loi.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              6. Sécurité des Données
            </h2>
            <p>
              Nous mettons en oeuvre des mesures de sécurité appropriées pour protéger vos données
              personnelles contre tout accès, modification, divulgation ou destruction non autorisée.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              7. Sites Tiers
            </h2>
            <p>
              Notre site contient des liens vers des sites partenaires. Nous ne sommes pas responsables
              des pratiques de confidentialité de ces sites. Nous vous encourageons à lire leurs
              politiques de confidentialité respectives.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              8. Modifications
            </h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre.
              La version la plus récente sera toujours disponible sur cette page avec la date
              de dernière mise à jour.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              9. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données
              personnelles, vous pouvez nous contacter :
            </p>
            <ul className="list-none space-y-2 my-4">
              <li><strong>Email :</strong> contact@{SITE_DOMAIN}</li>
              <li><strong>Adresse :</strong> 15 rue de la Paix, 75002 Paris, France</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="mt-4">
                <Link href="/mentions-legales" className="text-pink-600 hover:text-pink-700 font-medium">
                  Voir nos Mentions Légales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
