import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_DOMAIN } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Les-Transex.com - Informations sur l'éditeur et l'hébergeur.",
  robots: "noindex, nofollow",
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span>Mentions légales</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">Mentions Légales</h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-8">
              Dernière mise à jour : Janvier 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              1. Éditeur du Site
            </h2>
            <p>
              Le site {SITE_DOMAIN} est édité par :
            </p>
            <ul className="list-none space-y-2 my-4">
              <li><strong>Raison sociale :</strong> Digital Media SAS</li>
              <li><strong>Siège social :</strong> 15 rue de la Paix, 75002 Paris, France</li>
              <li><strong>Capital social :</strong> 10 000 euros</li>
              <li><strong>RCS :</strong> Paris B 123 456 789</li>
              <li><strong>SIRET :</strong> 123 456 789 00012</li>
              <li><strong>TVA intracommunautaire :</strong> FR12 123456789</li>
              <li><strong>Directeur de la publication :</strong> Jean Dupont</li>
              <li><strong>Email :</strong> contact@{SITE_DOMAIN}</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              2. Hébergement
            </h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul className="list-none space-y-2 my-4">
              <li><strong>Société :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              <li><strong>Site web :</strong> vercel.com</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              3. Propriété Intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est
              la propriété exclusive de {SITE_NAME}, à l&apos;exception des marques, logos ou contenus
              appartenant à d&apos;autres sociétés partenaires ou auteurs.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication
              de ces différents éléments est strictement interdite sans l&apos;accord exprès par écrit de {SITE_NAME}.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              4. Nature du Site
            </h2>
            <p>
              Ce site est un site affilié. Il présente des contenus relatifs aux rencontres trans
              et redirige les utilisateurs vers des sites partenaires. {SITE_NAME} perçoit une
              commission sur les inscriptions effectuées via les liens présents sur ce site.
            </p>
            <p>
              Les profils présentés sur ce site sont des exemples illustratifs et ne représentent
              pas nécessairement des utilisateurs réels du site partenaire.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              5. Limitation de Responsabilité
            </h2>
            <p>
              {SITE_NAME} ne saurait être tenu responsable des dommages directs ou indirects causés
              au matériel de l&apos;utilisateur lors de l&apos;accès au site, et résultant soit de l&apos;utilisation
              d&apos;un matériel ne répondant pas aux spécifications, soit de l&apos;apparition d&apos;un bug ou
              d&apos;une incompatibilité.
            </p>
            <p>
              {SITE_NAME} ne saurait également être tenu responsable des dommages indirects consécutifs
              à l&apos;utilisation des sites partenaires vers lesquels nous redirigeons nos visiteurs.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              6. Accès au Site
            </h2>
            <p>
              Ce site est réservé aux personnes majeures (18 ans et plus). En accédant à ce site,
              vous certifiez être majeur selon la législation de votre pays de résidence.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              7. Liens Hypertextes
            </h2>
            <p>
              Ce site peut contenir des liens vers d&apos;autres sites. {SITE_NAME} n&apos;est pas responsable
              du contenu de ces sites externes et ne saurait être tenu pour responsable des dommages
              ou préjudices pouvant en découler.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              8. Droit Applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              les tribunaux français seront seuls compétents.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter à
                l&apos;adresse : contact@{SITE_DOMAIN}
              </p>
              <div className="mt-4">
                <Link href="/politique-confidentialite" className="text-pink-600 hover:text-pink-700 font-medium">
                  Voir notre Politique de Confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
