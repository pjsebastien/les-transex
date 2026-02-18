import { PROFILE_IMAGES } from './constants';
import { cities } from '@/data/cities';
import { departments } from '@/data/departments';
import { regions } from '@/data/regions';

// Génère un nombre pseudo-aléatoire basé sur une seed string
function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Sélectionne des profils aléatoires basés sur la localisation
export function getProfilesForLocation(locationSlug: string, count: number): string[] {
  const seed = seededRandom(locationSlug);
  const shuffled = [...PROFILE_IMAGES].sort((a, b) => {
    return seededRandom(a + locationSlug) - seededRandom(b + locationSlug);
  });
  return shuffled.slice(0, count);
}

// Calcule le nombre de profils en fonction de la population
export function getProfileCount(population: number): number {
  if (population > 500000) return 12;
  if (population > 200000) return 9;
  if (population > 100000) return 7;
  if (population > 50000) return 5;
  if (population > 20000) return 4;
  return 3;
}

// Génère un âge pseudo-aléatoire
export function getRandomAge(seed: string): number {
  return 22 + (seededRandom(seed) % 18);
}

// Génère si le profil est vérifié (environ 40% des profils)
export function isVerified(seed: string): boolean {
  return seededRandom(seed) % 10 < 4;
}

// Liste de prénoms pour les profils
const firstNames = [
  'Luna', 'Sofia', 'Valentina', 'Isabella', 'Camila', 'Natasha', 'Adriana', 'Bianca',
  'Carla', 'Diana', 'Elena', 'Fernanda', 'Gabriela', 'Helena', 'Iris', 'Julia',
  'Karina', 'Larissa', 'Mariana', 'Nicole', 'Paola', 'Rafaela', 'Sabrina', 'Tatiana'
];

export function getProfileName(seed: string): string {
  const index = seededRandom(seed) % firstNames.length;
  return firstNames[index];
}

// Descriptions courtes pour les profils
const descriptions = [
  'Douce et attentionnee',
  'Femme de caractere',
  'Sensuelle et raffinee',
  'Naturelle et spontanee',
  'Elegante et discrete',
  'Passionnee et authentique',
  'Charmante et complice'
];

export function getProfileDescription(seed: string): string {
  const index = seededRandom(seed) % descriptions.length;
  return descriptions[index];
}

// Bios détaillées pour les profils (face arrière des cartes)
const bios = [
  "Je suis une femme trans feminine et epanouie. Je recherche des rencontres sinceres avec des personnes respectueuses qui apprecient la beaute sous toutes ses formes. J'aime les sorties, les discussions profondes et les moments de complicite.",
  "Passionnee par la vie, je profite de chaque instant. Je cherche quelqu'un pour partager des moments uniques, que ce soit autour d'un verre ou lors d'une soiree. Discretion et respect sont essentiels pour moi.",
  "Trans assumee et fiere de qui je suis. Je recherche des hommes ou des couples ouverts d'esprit pour des rencontres sans prise de tete. Sensualite et complicite sont au rendez-vous.",
  "Feminine jusqu'au bout des ongles, j'aime prendre soin de moi et seduire. Je cherche des rencontres avec des personnes qui savent apprecier une femme trans. Premiere fois ? Je suis patiente et bienveillante.",
  "Je suis ici pour faire de belles rencontres. J'apprecie les hommes galants et attentionnes. Si tu es curieux ou experimente, n'hesite pas a me contacter. Je suis ouverte a toutes les propositions respectueuses.",
  "Nouvelle dans la region, je cherche a faire des rencontres. Je suis une femme trans douce et sensuelle. J'aime les moments de tendresse et les discussions interessantes. Contactez-moi pour en savoir plus.",
  "Trans feminine et epanouie, je recherche des rencontres discretes. J'apprecie les hommes qui savent ce qu'ils veulent. Respect et hygiene sont indispensables. Au plaisir de te lire."
];

export function getProfileBio(seed: string): string {
  const index = seededRandom(seed) % bios.length;
  return bios[index];
}

// Récupère les données de localisation
export function getRegionBySlug(slug: string) {
  return regions.find(r => r.slug === slug);
}

export function getDepartmentBySlug(slug: string) {
  return departments.find(d => d.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find(c => c.slug === slug);
}

export function getCitiesByDepartment(departmentCode: string) {
  return cities.filter(c => c.departmentCode === departmentCode);
}

export function getDepartmentsByRegion(regionSlug: string) {
  const region = getRegionBySlug(regionSlug);
  if (!region) return [];
  return departments.filter(d => d.regionSlug === regionSlug);
}
