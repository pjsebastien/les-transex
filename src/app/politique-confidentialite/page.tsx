import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_DOMAIN } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Politique de Confidentialite",
  description: "Politique de confidentialite du site Les-Transex.com - Protection des donnees personnelles.",
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
            <span>Politique de confidentialite</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">Politique de Confidentialite</h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-8">
              Derniere mise a jour : Janvier 2024
            </p>

            <p className="text-lg">
              Cette politique de confidentialite decrit comment {SITE_NAME} collecte, utilise et
              partage vos informations lorsque vous utilisez notre site {SITE_DOMAIN}.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              1. Informations que Nous Collectons
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              1.1 Informations collectees automatiquement
            </h3>
            <p>
              Lorsque vous visitez notre site, nous collectons automatiquement certaines informations
              sur votre appareil, notamment :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>Votre adresse IP</li>
              <li>Votre type de navigateur</li>
              <li>Votre systeme d&apos;exploitation</li>
              <li>Les pages que vous consultez</li>
              <li>La date et l&apos;heure de votre visite</li>
              <li>Le site web d&apos;ou vous venez</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              1.2 Cookies
            </h3>
            <p>
              Nous utilisons des cookies et technologies similaires pour ameliorer votre experience
              sur notre site. Ces cookies nous permettent de :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>Memoriser vos preferences</li>
              <li>Analyser le trafic du site</li>
              <li>Personnaliser le contenu</li>
              <li>Mesurer l&apos;efficacite de nos partenariats</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              2. Utilisation des Informations
            </h2>
            <p>
              Nous utilisons les informations collectees pour :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>Fournir et ameliorer notre site</li>
              <li>Analyser comment notre site est utilise</li>
              <li>Detecter et prevenir les fraudes</li>
              <li>Communiquer avec vous si necessaire</li>
              <li>Respecter nos obligations legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              3. Partage des Informations
            </h2>
            <p>
              Nous pouvons partager vos informations avec :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Nos partenaires affilies :</strong> lorsque vous cliquez sur un lien vers un site partenaire</li>
              <li><strong>Prestataires de services :</strong> qui nous aident a exploiter notre site (hebergement, analyse)</li>
              <li><strong>Autorites :</strong> si la loi l&apos;exige</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              4. Vos Droits (RGPD)
            </h2>
            <p>
              Conformement au Reglement General sur la Protection des Donnees (RGPD), vous disposez
              des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Droit d&apos;acces :</strong> obtenir une copie de vos donnees personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos donnees inexactes</li>
              <li><strong>Droit a l&apos;effacement :</strong> demander la suppression de vos donnees</li>
              <li><strong>Droit a la limitation :</strong> limiter le traitement de vos donnees</li>
              <li><strong>Droit a la portabilite :</strong> recevoir vos donnees dans un format structure</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos donnees</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous a : contact@{SITE_DOMAIN}
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              5. Conservation des Donnees
            </h2>
            <p>
              Nous conservons vos donnees personnelles aussi longtemps que necessaire pour les
              finalites decrites dans cette politique, sauf si une periode de conservation plus
              longue est requise par la loi.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              6. Securite des Donnees
            </h2>
            <p>
              Nous mettons en oeuvre des mesures de securite appropriees pour proteger vos donnees
              personnelles contre tout acces, modification, divulgation ou destruction non autorisee.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              7. Sites Tiers
            </h2>
            <p>
              Notre site contient des liens vers des sites partenaires. Nous ne sommes pas responsables
              des pratiques de confidentialite de ces sites. Nous vous encourageons a lire leurs
              politiques de confidentialite respectives.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              8. Modifications
            </h2>
            <p>
              Nous pouvons mettre a jour cette politique de confidentialite de temps a autre.
              La version la plus recente sera toujours disponible sur cette page avec la date
              de derniere mise a jour.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              9. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialite ou vos donnees
              personnelles, vous pouvez nous contacter :
            </p>
            <ul className="list-none space-y-2 my-4">
              <li><strong>Email :</strong> contact@{SITE_DOMAIN}</li>
              <li><strong>Adresse :</strong> 15 rue de la Paix, 75002 Paris, France</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="mt-4">
                <Link href="/mentions-legales" className="text-pink-600 hover:text-pink-700 font-medium">
                  Voir nos Mentions Legales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
