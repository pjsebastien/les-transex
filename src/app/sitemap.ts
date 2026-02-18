import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { regions } from '@/data/regions';
import { blogPosts } from '@/data/blog';

const BASE_URL = 'https://www.les-transex.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Pages principales
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/departements`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/villes`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Articles de blog
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Toutes les régions
  const regionPages: MetadataRoute.Sitemap = regions.map((region) => ({
    url: `${BASE_URL}/region/${region.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Top 50 villes par population
  const top50Cities = [...cities]
    .sort((a, b) => b.population - a.population)
    .slice(0, 50);

  const cityPages: MetadataRoute.Sitemap = top50Cities.map((city) => ({
    url: `${BASE_URL}/ville/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...blogPages, ...regionPages, ...cityPages];
}
