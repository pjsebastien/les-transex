'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cities } from '@/data/cities';
import { regions } from '@/data/regions';
import { departments } from '@/data/departments';

interface SearchResult {
  type: 'city' | 'region' | 'department';
  name: string;
  slug: string;
  extra?: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Recherche
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Chercher dans les régions
    const matchingRegions = regions
      .filter(r => r.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchQuery))
      .slice(0, 3)
      .map(r => ({ type: 'region' as const, name: r.name, slug: `/region/${r.slug}` }));

    // Chercher dans les départements
    const matchingDepts = departments
      .filter(d => d.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchQuery) ||
                   d.code.includes(searchQuery))
      .slice(0, 3)
      .map(d => ({ type: 'department' as const, name: d.name, slug: `/departement/${d.slug}`, extra: d.code }));

    // Chercher dans les villes
    const matchingCities = cities
      .filter(c => c.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchQuery))
      .sort((a, b) => b.population - a.population)
      .slice(0, 5)
      .map(c => {
        const dept = departments.find(d => d.code === c.departmentCode);
        return {
          type: 'city' as const,
          name: c.name,
          slug: `/ville/${c.slug}`,
          extra: dept?.name
        };
      });

    setResults([...matchingRegions, ...matchingDepts, ...matchingCities]);
  }, [query]);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'region': return 'Region';
      case 'department': return 'Departement';
      case 'city': return 'Ville';
      default: return '';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'region': return 'bg-purple-100 text-purple-700';
      case 'department': return 'bg-pink-100 text-pink-700';
      case 'city': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Rechercher une ville, region..."
          className="w-full px-6 py-4 pl-14 text-gray-800 text-lg rounded-full border-0 shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300"
        />
        <div className="absolute left-5 top-1/2 -translate-y-1/2">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Résultats */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 max-h-80 overflow-y-auto">
          {results.map((result, index) => (
            <Link
              key={`${result.type}-${result.slug}-${index}`}
              href={result.slug}
              className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
            >
              <div className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(result.type)}`}>
                {getTypeLabel(result.type)}
              </div>
              <div className="flex-grow">
                <div className="font-medium text-gray-800">Trans {result.name}</div>
                {result.extra && (
                  <div className="text-sm text-gray-500">{result.extra}</div>
                )}
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      )}

      {/* Message si pas de résultats */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl p-6 text-center z-50">
          <div className="text-gray-500">Aucun resultat pour &quot;{query}&quot;</div>
          <p className="text-sm text-gray-400 mt-2">Essayez une autre ville ou region</p>
        </div>
      )}

      {/* Suggestions populaires quand vide */}
      {isOpen && query.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl p-4 z-50">
          <div className="text-sm text-gray-500 mb-3 px-2">Recherches populaires</div>
          <div className="flex flex-wrap gap-2">
            {['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux', 'Nice'].map((city) => {
              const cityData = cities.find(c => c.name === city);
              return cityData ? (
                <Link
                  key={city}
                  href={`/ville/${cityData.slug}`}
                  className="px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 text-gray-700 rounded-full text-sm hover:from-pink-100 hover:to-purple-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Trans {city}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
