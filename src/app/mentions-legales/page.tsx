import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_DOMAIN } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Mentions Legales",
  description: "Mentions legales du site Les-Transex.com - Informations sur l'editeur et l'hebergeur.",
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
            <span>Mentions legales</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">Mentions Legales</h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-8">
              Derniere mise a jour : Janvier 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              1. Editeur du Site
            </h2>
            <p>
              Le site {SITE_DOMAIN} est edite par :
            </p>
            <ul className="list-none space-y-2 my-4">
              <li><strong>Raison sociale :</strong> Digital Media SAS</li>
              <li><strong>Siege social :</strong> 15 rue de la Paix, 75002 Paris, France</li>
              <li><strong>Capital social :</strong> 10 000 euros</li>
              <li><strong>RCS :</strong> Paris B 123 456 789</li>
              <li><strong>SIRET :</strong> 123 456 789 00012</li>
              <li><strong>TVA intracommunautaire :</strong> FR12 123456789</li>
              <li><strong>Directeur de la publication :</strong> Jean Dupont</li>
              <li><strong>Email :</strong> contact@{SITE_DOMAIN}</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              2. Hebergement
            </h2>
            <p>
              Le site est heberge par :
            </p>
            <ul className="list-none space-y-2 my-4">
              <li><strong>Societe :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              <li><strong>Site web :</strong> vercel.com</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              3. Propriete Intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icones, etc.) est
              la propriete exclusive de {SITE_NAME}, a l&apos;exception des marques, logos ou contenus
              appartenant a d&apos;autres societes partenaires ou auteurs.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication
              de ces differents elements est strictement interdite sans l&apos;accord expres par ecrit de {SITE_NAME}.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              4. Nature du Site
            </h2>
            <p>
              Ce site est un site affilie. Il presente des contenus relatifs aux rencontres trans
              et redirige les utilisateurs vers des sites partenaires. {SITE_NAME} percoit une
              commission sur les inscriptions effectuees via les liens presents sur ce site.
            </p>
            <p>
              Les profils presentes sur ce site sont des exemples illustratifs et ne representent
              pas necessairement des utilisateurs reels du site partenaire.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              5. Limitation de Responsabilite
            </h2>
            <p>
              {SITE_NAME} ne saurait etre tenu responsable des dommages directs ou indirects causes
              au materiel de l&apos;utilisateur lors de l&apos;acces au site, et resultant soit de l&apos;utilisation
              d&apos;un materiel ne repondant pas aux specifications, soit de l&apos;apparition d&apos;un bug ou
              d&apos;une incompatibilite.
            </p>
            <p>
              {SITE_NAME} ne saurait egalement etre tenu responsable des dommages indirects consecutifs
              a l&apos;utilisation des sites partenaires vers lesquels nous redirigeons nos visiteurs.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              6. Acces au Site
            </h2>
            <p>
              Ce site est reserve aux personnes majeures (18 ans et plus). En accedant a ce site,
              vous certifiez etre majeur selon la legislation de votre pays de residence.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              7. Liens Hypertextes
            </h2>
            <p>
              Ce site peut contenir des liens vers d&apos;autres sites. {SITE_NAME} n&apos;est pas responsable
              du contenu de ces sites externes et ne saurait etre tenu pour responsable des dommages
              ou prejudices pouvant en decouler.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              8. Droit Applicable
            </h2>
            <p>
              Les presentes mentions legales sont regies par le droit francais. En cas de litige,
              les tribunaux francais seront seuls competents.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Pour toute question concernant ces mentions legales, vous pouvez nous contacter a
                l&apos;adresse : contact@{SITE_DOMAIN}
              </p>
              <div className="mt-4">
                <Link href="/politique-confidentialite" className="text-pink-600 hover:text-pink-700 font-medium">
                  Voir notre Politique de Confidentialite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
