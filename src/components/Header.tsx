'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME, AFFILIATE_LINK } from '@/lib/constants';
import { regions } from '@/data/regions';

const popularCities = [
  { name: 'Paris', slug: 'paris' },
  { name: 'Lyon', slug: 'lyon' },
  { name: 'Marseille', slug: 'marseille' },
  { name: 'Toulouse', slug: 'toulouse' },
  { name: 'Bordeaux', slug: 'bordeaux' },
  { name: 'Nice', slug: 'nice' },
  { name: 'Nantes', slug: 'nantes' },
  { name: 'Montpellier', slug: 'montpellier' },
];

const popularDepartments = [
  { name: 'Rhône', slug: 'rhone', code: '69' },
  { name: 'Bouches-du-Rhône', slug: 'bouches-du-rhone', code: '13' },
  { name: 'Nord', slug: 'nord', code: '59' },
  { name: 'Gironde', slug: 'gironde', code: '33' },
  { name: 'Haute-Garonne', slug: 'haute-garonne', code: '31' },
  { name: 'Alpes-Maritimes', slug: 'alpes-maritimes', code: '06' },
  { name: 'Loire-Atlantique', slug: 'loire-atlantique', code: '44' },
  { name: 'Hérault', slug: 'herault', code: '34' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Régions métropolitaines (exclure les DOM-TOM)
  const domTomSlugs = ['guadeloupe', 'martinique', 'guyane', 'la-reunion', 'mayotte'];
  const popularRégions = regions.filter(r => !domTomSlugs.includes(r.slug)).slice(0, 8);

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeDropdowns}>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1">
              <Image
                src="/images/profile/favicon.png"
                alt={SITE_NAME}
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">{SITE_NAME}</span>
          </Link>

          {/* Navigation Desktop */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm"
              onClick={closeDropdowns}
            >
              Accueil
            </Link>

            {/* Dropdown Régions */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('regions')}
                className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1 text-sm"
              >
                Régions
                <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'regions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'regions' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 text-gray-800">
                  {popularRégions.map((region) => (
                    <Link
                      key={region.slug}
                      href={`/region/${region.slug}`}
                      className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition-colors text-sm"
                      onClick={closeDropdowns}
                    >
                      Trans {region.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/#regions"
                      className="block px-4 py-2 text-pink-600 font-medium hover:bg-pink-50 transition-colors text-sm"
                      onClick={closeDropdowns}
                    >
                      Toutes les regions
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown Départements */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('departments')}
                className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1 text-sm"
              >
                Départements
                <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'departments' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'departments' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 text-gray-800">
                  {popularDepartments.map((dept) => (
                    <Link
                      key={dept.slug}
                      href={`/departement/${dept.slug}`}
                      className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition-colors text-sm"
                      onClick={closeDropdowns}
                    >
                      Trans {dept.name} ({dept.code})
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/departements"
                      className="block px-4 py-2 text-pink-600 font-medium hover:bg-pink-50 transition-colors text-sm"
                      onClick={closeDropdowns}
                    >
                      Tous les départements
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown Villes */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('cities')}
                className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1 text-sm"
              >
                Villes
                <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'cities' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'cities' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 text-gray-800">
                  {popularCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/ville/${city.slug}`}
                      className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition-colors text-sm"
                      onClick={closeDropdowns}
                    >
                      Trans {city.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/villes"
                      className="block px-4 py-2 text-pink-600 font-medium hover:bg-pink-50 transition-colors text-sm"
                      onClick={closeDropdowns}
                    >
                      Toutes les villes
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#blog"
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm"
              onClick={closeDropdowns}
            >
              Blog
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-white text-pink-600 font-semibold px-5 py-2.5 rounded-full hover:bg-pink-100 transition-all hover:scale-105 shadow-md text-sm"
            >
              Voir les profils
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>

              <div className="px-4 py-2 text-pink-200 text-sm font-medium">Villes populaires</div>
              <div className="grid grid-cols-2 gap-2 px-4">
                {popularCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/ville/${city.slug}`}
                    className="py-2 px-3 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {city.name}
                  </Link>
                ))}
              </div>

              <div className="px-4 py-2 text-pink-200 text-sm font-medium mt-2">Départements populaires</div>
              <div className="grid grid-cols-2 gap-2 px-4">
                {popularDepartments.slice(0, 6).map((dept) => (
                  <Link
                    key={dept.slug}
                    href={`/departement/${dept.slug}`}
                    className="py-2 px-3 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>

              <div className="px-4 py-2 text-pink-200 text-sm font-medium mt-2">Régions populaires</div>
              <div className="grid grid-cols-2 gap-2 px-4">
                {popularRégions.slice(0, 6).map((region) => (
                  <Link
                    key={region.slug}
                    href={`/region/${region.slug}`}
                    className="py-2 px-3 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {region.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/#blog"
                className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="pt-4 px-4">
                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center bg-white text-pink-600 font-bold px-6 py-3 rounded-full hover:bg-pink-100 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accéder aux profils
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
