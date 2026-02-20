import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME } from '@/lib/constants';
import { regions } from '@/data/regions';

export default function Footer() {
  const mainRegions = regions.slice(0, 13); // Régions métropolitaines

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1">
                <Image
                  src="/images/profile/favicon.png"
                  alt={SITE_NAME}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{SITE_NAME}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Votre guide pour des rencontres trans authentiques partout en France.
              Site partenaire officiel.
            </p>
            <p className="text-xs text-gray-500">
              Site affilié - Nous vous redirigeons vers notre partenaire de confiance.
            </p>
          </div>

          {/* Régions populaires */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Régions populaires</h4>
            <ul className="space-y-2 text-sm">
              {mainRegions.slice(0, 6).map((region) => (
                <li key={region.slug}>
                  <Link
                    href={`/region/${region.slug}`}
                    className="hover:text-pink-400 transition-colors"
                  >
                    Rencontre trans {region.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Grandes villes */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Grandes villes</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ville/paris" className="hover:text-pink-400">Rencontre trans Paris</Link></li>
              <li><Link href="/ville/lyon" className="hover:text-pink-400">Rencontre trans Lyon</Link></li>
              <li><Link href="/ville/marseille" className="hover:text-pink-400">Rencontre trans Marseille</Link></li>
              <li><Link href="/ville/toulouse" className="hover:text-pink-400">Rencontre trans Toulouse</Link></li>
              <li><Link href="/ville/bordeaux" className="hover:text-pink-400">Rencontre trans Bordeaux</Link></li>
              <li><Link href="/ville/nice" className="hover:text-pink-400">Rencontre trans Nice</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-pink-400">À propos</Link></li>
              <li><Link href="/#blog" className="hover:text-pink-400">Blog</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-pink-400">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-pink-400">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.</p>
          <p className="mt-2">Site réservé aux adultes (+18 ans) - Site affilié</p>
          <div className="mt-3 flex justify-center gap-4">
            <Link href="/mentions-legales" className="hover:text-pink-400">Mentions légales</Link>
            <span>|</span>
            <Link href="/politique-confidentialite" className="hover:text-pink-400">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
