import { AFFILIATE_LINK } from '@/lib/constants';

interface CTASectionProps {
  location?: string;
  variant?: 'primary' | 'secondary';
  profileCount?: number;
}

export default function CTASection({ location, variant = 'primary', profileCount }: CTASectionProps) {
  const isPrimary = variant === 'primary';
  const locationText = location ? ` à ${location}` : '';

  return (
    <section
      id="cta"
      className={`py-16 ${isPrimary
        ? 'bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600'
        : 'bg-gradient-to-r from-purple-700 to-pink-700'
        }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {profileCount
            ? `${profileCount}+ profils disponibles${locationText}`
            : `Trouvez votre rencontre trans${locationText}`
          }
        </h2>
        <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
          Accédez à des milliers de profils vérifiés sur notre site partenaire.
          Inscription gratuite, messagerie illimitée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group inline-flex items-center gap-2 bg-white text-pink-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-pink-100 transition-all hover:scale-105 shadow-lg"
          >
            <span>Voir tous les profils</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-sm text-pink-200">
          Inscription gratuite en 30 secondes
        </p>
      </div>
    </section>
  );
}

// CTA inline pour insérer dans le contenu
export function InlineCTA({ location }: { location?: string }) {
  const locationText = location ? ` ${location}` : '';

  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105 shadow-md"
    >
      <span>Découvrir les profils{locationText}</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );
}
