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
    title: "Exploration du Bar a Putes de Dame Joelle : Un Lieu de Rencontre et de Liberte",
    excerpt: "Decouvrez ce lieu mythique de la vie nocturne parisienne, un espace de rencontres et de liberte ou les personnes trans sont les bienvenues.",
    category: "Conseils",
    date: "2024-05-10",
    readTime: "8 min"
  },
  {
    slug: "personnalites-publiques-transgenres-inspirantes",
    title: "Personnalites Publiques Transgenres Inspirantes qui Faconnent Notre Monde",
    excerpt: "Decouvrez les histoires inspirantes de personnalites transgenres celebres comme Laverne Cox, Caitlyn Jenner et Elliot Page.",
    category: "Inspiration",
    date: "2023-07-08",
    readTime: "10 min"
  },
  {
    slug: "transgenre-libertin",
    title: "Les Rencontres Transgenres dans le Milieu Libertin : Guide Complet",
    excerpt: "Tout savoir sur les rencontres trans dans le milieu libertin : histoire, evolution, defis et conseils pratiques.",
    category: "Rencontres",
    date: "2023-07-08",
    readTime: "12 min"
  },
  {
    slug: "mythes-courant-transgenre",
    title: "Demasquer les Fictions : Mythes Courants sur les Personnes Transgenres",
    excerpt: "Demystifions les idees recues sur les personnes trans avec des faits scientifiques et des temoignages.",
    category: "Education",
    date: "2023-07-08",
    readTime: "9 min"
  },
  {
    slug: "definition-transgenre-transsexuel-non-binaire",
    title: "Comprendre la Terminologie : Transgenre, Transsexuel, Non-Binaire",
    excerpt: "Guide complet pour comprendre les termes lies a l'identite de genre et respecter la diversite de chacun.",
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
