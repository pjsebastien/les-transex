export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bar-a-pute-dame-joelle",
    title: "Exploration du Bar à Putes de Dame Joëlle : Un Lieu de Rencontre et de Liberté",
    excerpt: "Découvrez ce lieu mythique de la vie nocturne parisienne, un espace de rencontres et de liberté où les personnes trans sont les bienvenues.",
    category: "Conseils",
    date: "2024-05-10",
    readTime: "8 min"
  },
  {
    slug: "personnalites-publiques-transgenres-inspirantes",
    title: "Personnalités Publiques Transgenres Inspirantes qui Façonnent Notre Monde",
    excerpt: "Découvrez les histoires inspirantes de personnalités transgenres célèbres comme Laverne Cox, Caitlyn Jenner et Elliot Page.",
    category: "Inspiration",
    date: "2023-07-08",
    readTime: "10 min"
  },
  {
    slug: "transgenre-libertin",
    title: "Les Rencontres Transgenres dans le Milieu Libertin : Guide Complet",
    excerpt: "Tout savoir sur les rencontres trans dans le milieu libertin : histoire, évolution, défis et conseils pratiques.",
    category: "Rencontres",
    date: "2023-07-08",
    readTime: "12 min"
  },
  {
    slug: "mythes-courant-transgenre",
    title: "Démasquer les Fictions : Mythes Courants sur les Personnes Transgenres",
    excerpt: "Démystifions les idées reçues sur les personnes trans avec des faits scientifiques et des témoignages.",
    category: "Education",
    date: "2023-07-08",
    readTime: "9 min"
  },
  {
    slug: "definition-transgenre-transsexuel-non-binaire",
    title: "Comprendre la Terminologie : Transgenre, Transsexuel, Non-Binaire",
    excerpt: "Guide complet pour comprendre les termes liés à l'identité de genre et respecter la diversité de chacun.",
    category: "Education",
    date: "2023-07-08",
    readTime: "11 min"
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  return blogPosts.filter(p => p.slug !== currentSlug).slice(0, limit);
}
