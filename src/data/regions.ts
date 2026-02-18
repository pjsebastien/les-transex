export interface Region {
  slug: string;
  name: string;
  departments: string[];
}

export const regions: Region[] = [
  { slug: "ile-de-france", name: "Île-de-France", departments: ["75", "77", "78", "91", "92", "93", "94", "95"] },
  { slug: "auvergne-rhone-alpes", name: "Auvergne-Rhône-Alpes", departments: ["01", "03", "07", "15", "26", "38", "42", "43", "63", "69", "73", "74"] },
  { slug: "bourgogne-franche-comte", name: "Bourgogne-Franche-Comté", departments: ["21", "25", "39", "58", "70", "71", "89", "90"] },
  { slug: "bretagne", name: "Bretagne", departments: ["22", "29", "35", "56"] },
  { slug: "centre-val-de-loire", name: "Centre-Val de Loire", departments: ["18", "28", "36", "37", "41", "45"] },
  { slug: "corse", name: "Corse", departments: ["2A", "2B"] },
  { slug: "grand-est", name: "Grand Est", departments: ["08", "10", "51", "52", "54", "55", "57", "67", "68", "88"] },
  { slug: "hauts-de-france", name: "Hauts-de-France", departments: ["02", "59", "60", "62", "80"] },
  { slug: "normandie", name: "Normandie", departments: ["14", "27", "50", "61", "76"] },
  { slug: "nouvelle-aquitaine", name: "Nouvelle-Aquitaine", departments: ["16", "17", "19", "23", "24", "33", "40", "47", "64", "79", "86", "87"] },
  { slug: "occitanie", name: "Occitanie", departments: ["09", "11", "12", "30", "31", "32", "34", "46", "48", "65", "66", "81", "82"] },
  { slug: "pays-de-la-loire", name: "Pays de la Loire", departments: ["44", "49", "53", "72", "85"] },
  { slug: "provence-alpes-cote-dazur", name: "Provence-Alpes-Côte d'Azur", departments: ["04", "05", "06", "13", "83", "84"] },
  { slug: "guadeloupe", name: "Guadeloupe", departments: ["971"] },
  { slug: "martinique", name: "Martinique", departments: ["972"] },
  { slug: "guyane", name: "Guyane", departments: ["973"] },
  { slug: "la-reunion", name: "La Réunion", departments: ["974"] },
  { slug: "mayotte", name: "Mayotte", departments: ["976"] },
];
