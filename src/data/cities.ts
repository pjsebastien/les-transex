export interface City {
  slug: string;
  name: string;
  departmentCode: string;
  population: number;
}

export const cities: City[] = [
  // Paris et Île-de-France
  { slug: "paris", name: "Paris", departmentCode: "75", population: 2161000 },
  { slug: "boulogne-billancourt", name: "Boulogne-Billancourt", departmentCode: "92", population: 121334 },
  { slug: "saint-denis", name: "Saint-Denis", departmentCode: "93", population: 113073 },
  { slug: "argenteuil", name: "Argenteuil", departmentCode: "95", population: 110388 },
  { slug: "montreuil", name: "Montreuil", departmentCode: "93", population: 109914 },
  { slug: "nanterre", name: "Nanterre", departmentCode: "92", population: 96689 },
  { slug: "vitry-sur-seine", name: "Vitry-sur-Seine", departmentCode: "94", population: 94649 },
  { slug: "creteil", name: "Créteil", departmentCode: "94", population: 92265 },
  { slug: "asnieres-sur-seine", name: "Asnières-sur-Seine", departmentCode: "92", population: 90239 },
  { slug: "versailles", name: "Versailles", departmentCode: "78", population: 85862 },
  { slug: "colombes", name: "Colombes", departmentCode: "92", population: 85199 },
  { slug: "aubervilliers", name: "Aubervilliers", departmentCode: "93", population: 84587 },
  { slug: "aulnay-sous-bois", name: "Aulnay-sous-Bois", departmentCode: "93", population: 83584 },
  { slug: "courbevoie", name: "Courbevoie", departmentCode: "92", population: 81719 },
  { slug: "rueil-malmaison", name: "Rueil-Malmaison", departmentCode: "92", population: 79762 },
  { slug: "champigny-sur-marne", name: "Champigny-sur-Marne", departmentCode: "94", population: 77567 },
  { slug: "saint-maur-des-fosses", name: "Saint-Maur-des-Fossés", departmentCode: "94", population: 75661 },
  { slug: "drancy", name: "Drancy", departmentCode: "93", population: 72178 },
  { slug: "issy-les-moulineaux", name: "Issy-les-Moulineaux", departmentCode: "92", population: 69204 },
  { slug: "levallois-perret", name: "Levallois-Perret", departmentCode: "92", population: 65589 },
  { slug: "noisy-le-grand", name: "Noisy-le-Grand", departmentCode: "93", population: 67871 },
  { slug: "cergy", name: "Cergy", departmentCode: "95", population: 66322 },
  { slug: "evry-courcouronnes", name: "Évry-Courcouronnes", departmentCode: "91", population: 68620 },
  { slug: "meaux", name: "Meaux", departmentCode: "77", population: 55750 },
  { slug: "melun", name: "Melun", departmentCode: "77", population: 41372 },

  // Lyon et Rhône
  { slug: "lyon", name: "Lyon", departmentCode: "69", population: 522250 },
  { slug: "villeurbanne", name: "Villeurbanne", departmentCode: "69", population: 154781 },
  { slug: "venissieux", name: "Vénissieux", departmentCode: "69", population: 66859 },
  { slug: "saint-priest", name: "Saint-Priest", departmentCode: "69", population: 47018 },
  { slug: "vaulx-en-velin", name: "Vaulx-en-Velin", departmentCode: "69", population: 52510 },
  { slug: "bron", name: "Bron", departmentCode: "69", population: 42619 },
  { slug: "caluire-et-cuire", name: "Caluire-et-Cuire", departmentCode: "69", population: 43579 },

  // Marseille et Bouches-du-Rhône
  { slug: "marseille", name: "Marseille", departmentCode: "13", population: 870731 },
  { slug: "aix-en-provence", name: "Aix-en-Provence", departmentCode: "13", population: 147122 },
  { slug: "martigues", name: "Martigues", departmentCode: "13", population: 49443 },
  { slug: "aubagne", name: "Aubagne", departmentCode: "13", population: 47208 },
  { slug: "salon-de-provence", name: "Salon-de-Provence", departmentCode: "13", population: 45528 },
  { slug: "istres", name: "Istres", departmentCode: "13", population: 44234 },
  { slug: "vitrolles", name: "Vitrolles", departmentCode: "13", population: 36575 },
  { slug: "arles", name: "Arles", departmentCode: "13", population: 52439 },

  // Toulouse et Haute-Garonne
  { slug: "toulouse", name: "Toulouse", departmentCode: "31", population: 498003 },
  { slug: "colomiers", name: "Colomiers", departmentCode: "31", population: 40820 },
  { slug: "tournefeuille", name: "Tournefeuille", departmentCode: "31", population: 28760 },
  { slug: "muret", name: "Muret", departmentCode: "31", population: 26870 },
  { slug: "blagnac", name: "Blagnac", departmentCode: "31", population: 25178 },

  // Nice et Alpes-Maritimes
  { slug: "nice", name: "Nice", departmentCode: "06", population: 342669 },
  { slug: "cannes", name: "Cannes", departmentCode: "06", population: 74545 },
  { slug: "antibes", name: "Antibes", departmentCode: "06", population: 73438 },
  { slug: "grasse", name: "Grasse", departmentCode: "06", population: 51580 },
  { slug: "cagnes-sur-mer", name: "Cagnes-sur-Mer", departmentCode: "06", population: 51091 },
  { slug: "le-cannet", name: "Le Cannet", departmentCode: "06", population: 42464 },
  { slug: "saint-laurent-du-var", name: "Saint-Laurent-du-Var", departmentCode: "06", population: 30135 },
  { slug: "menton", name: "Menton", departmentCode: "06", population: 29975 },

  // Nantes et Loire-Atlantique
  { slug: "nantes", name: "Nantes", departmentCode: "44", population: 318808 },
  { slug: "saint-nazaire", name: "Saint-Nazaire", departmentCode: "44", population: 71359 },
  { slug: "saint-herblain", name: "Saint-Herblain", departmentCode: "44", population: 47702 },
  { slug: "reze", name: "Rezé", departmentCode: "44", population: 43505 },

  // Montpellier et Hérault
  { slug: "montpellier", name: "Montpellier", departmentCode: "34", population: 295542 },
  { slug: "beziers", name: "Béziers", departmentCode: "34", population: 78683 },
  { slug: "sete", name: "Sète", departmentCode: "34", population: 44270 },
  { slug: "lunel", name: "Lunel", departmentCode: "34", population: 27047 },

  // Strasbourg et Bas-Rhin
  { slug: "strasbourg", name: "Strasbourg", departmentCode: "67", population: 287228 },
  { slug: "haguenau", name: "Haguenau", departmentCode: "67", population: 35353 },
  { slug: "schiltigheim", name: "Schiltigheim", departmentCode: "67", population: 34939 },
  { slug: "illkirch-graffenstaden", name: "Illkirch-Graffenstaden", departmentCode: "67", population: 27435 },

  // Bordeaux et Gironde
  { slug: "bordeaux", name: "Bordeaux", departmentCode: "33", population: 260958 },
  { slug: "merignac", name: "Mérignac", departmentCode: "33", population: 73197 },
  { slug: "pessac", name: "Pessac", departmentCode: "33", population: 65447 },
  { slug: "talence", name: "Talence", departmentCode: "33", population: 43820 },
  { slug: "villenave-d-ornon", name: "Villenave-d'Ornon", departmentCode: "33", population: 37649 },
  { slug: "begles", name: "Bègles", departmentCode: "33", population: 30361 },
  { slug: "libourne", name: "Libourne", departmentCode: "33", population: 26126 },

  // Lille et Nord
  { slug: "lille", name: "Lille", departmentCode: "59", population: 236710 },
  { slug: "roubaix", name: "Roubaix", departmentCode: "59", population: 98828 },
  { slug: "tourcoing", name: "Tourcoing", departmentCode: "59", population: 98656 },
  { slug: "dunkerque", name: "Dunkerque", departmentCode: "59", population: 86279 },
  { slug: "villeneuve-d-ascq", name: "Villeneuve-d'Ascq", departmentCode: "59", population: 62308 },
  { slug: "wattrelos", name: "Wattrelos", departmentCode: "59", population: 40605 },
  { slug: "valenciennes", name: "Valenciennes", departmentCode: "59", population: 43336 },
  { slug: "douai", name: "Douai", departmentCode: "59", population: 39693 },
  { slug: "marcq-en-baroeul", name: "Marcq-en-Barœul", departmentCode: "59", population: 39851 },
  { slug: "cambrai", name: "Cambrai", departmentCode: "59", population: 32897 },
  { slug: "maubeuge", name: "Maubeuge", departmentCode: "59", population: 29944 },

  // Rennes et Ille-et-Vilaine
  { slug: "rennes", name: "Rennes", departmentCode: "35", population: 222485 },
  { slug: "saint-malo", name: "Saint-Malo", departmentCode: "35", population: 47384 },
  { slug: "fougeres", name: "Fougères", departmentCode: "35", population: 20418 },
  { slug: "vitre", name: "Vitré", departmentCode: "35", population: 18905 },

  // Reims et Marne
  { slug: "reims", name: "Reims", departmentCode: "51", population: 183042 },
  { slug: "chalons-en-champagne", name: "Châlons-en-Champagne", departmentCode: "51", population: 44246 },
  { slug: "epernay", name: "Épernay", departmentCode: "51", population: 22148 },

  // Saint-Étienne et Loire
  { slug: "saint-etienne", name: "Saint-Étienne", departmentCode: "42", population: 174082 },
  { slug: "roanne", name: "Roanne", departmentCode: "42", population: 34139 },
  { slug: "saint-chamond", name: "Saint-Chamond", departmentCode: "42", population: 35043 },

  // Toulon et Var
  { slug: "toulon", name: "Toulon", departmentCode: "83", population: 178745 },
  { slug: "frejus", name: "Fréjus", departmentCode: "83", population: 55070 },
  { slug: "hyeres", name: "Hyères", departmentCode: "83", population: 57302 },
  { slug: "la-seyne-sur-mer", name: "La Seyne-sur-Mer", departmentCode: "83", population: 65267 },
  { slug: "draguignan", name: "Draguignan", departmentCode: "83", population: 41133 },
  { slug: "six-fours-les-plages", name: "Six-Fours-les-Plages", departmentCode: "83", population: 36043 },
  { slug: "saint-raphael", name: "Saint-Raphaël", departmentCode: "83", population: 35809 },

  // Le Havre et Seine-Maritime
  { slug: "le-havre", name: "Le Havre", departmentCode: "76", population: 169733 },
  { slug: "rouen", name: "Rouen", departmentCode: "76", population: 114007 },
  { slug: "dieppe", name: "Dieppe", departmentCode: "76", population: 29080 },
  { slug: "sotteville-les-rouen", name: "Sotteville-lès-Rouen", departmentCode: "76", population: 29829 },
  { slug: "saint-etienne-du-rouvray", name: "Saint-Étienne-du-Rouvray", departmentCode: "76", population: 31041 },

  // Grenoble et Isère
  { slug: "grenoble", name: "Grenoble", departmentCode: "38", population: 158180 },
  { slug: "saint-martin-d-heres", name: "Saint-Martin-d'Hères", departmentCode: "38", population: 39522 },
  { slug: "echirolles", name: "Échirolles", departmentCode: "38", population: 36732 },
  { slug: "vienne", name: "Vienne", departmentCode: "38", population: 29274 },
  { slug: "voiron", name: "Voiron", departmentCode: "38", population: 20852 },
  { slug: "bourgoin-jallieu", name: "Bourgoin-Jallieu", departmentCode: "38", population: 28533 },

  // Dijon et Côte-d'Or
  { slug: "dijon", name: "Dijon", departmentCode: "21", population: 158002 },
  { slug: "beaune", name: "Beaune", departmentCode: "21", population: 21667 },
  { slug: "chenove", name: "Chenôve", departmentCode: "21", population: 14041 },
  { slug: "talant", name: "Talant", departmentCode: "21", population: 11254 },

  // Angers et Maine-et-Loire
  { slug: "angers", name: "Angers", departmentCode: "49", population: 157175 },
  { slug: "cholet", name: "Cholet", departmentCode: "49", population: 55150 },
  { slug: "saumur", name: "Saumur", departmentCode: "49", population: 26831 },

  // Nîmes et Gard
  { slug: "nimes", name: "Nîmes", departmentCode: "30", population: 151001 },
  { slug: "ales", name: "Alès", departmentCode: "30", population: 42034 },
  { slug: "bagnols-sur-ceze", name: "Bagnols-sur-Cèze", departmentCode: "30", population: 18701 },

  // Clermont-Ferrand et Puy-de-Dôme
  { slug: "clermont-ferrand", name: "Clermont-Ferrand", departmentCode: "63", population: 147865 },
  { slug: "chamalières", name: "Chamalières", departmentCode: "63", population: 17595 },
  { slug: "cournon-d-auvergne", name: "Cournon-d'Auvergne", departmentCode: "63", population: 19790 },
  { slug: "riom", name: "Riom", departmentCode: "63", population: 19170 },

  // Le Mans et Sarthe
  { slug: "le-mans", name: "Le Mans", departmentCode: "72", population: 145421 },
  { slug: "la-fleche", name: "La Flèche", departmentCode: "72", population: 15196 },

  // Aix-en-Provence déjà ajouté

  // Brest et Finistère
  { slug: "brest", name: "Brest", departmentCode: "29", population: 139619 },
  { slug: "quimper", name: "Quimper", departmentCode: "29", population: 63360 },
  { slug: "concarneau", name: "Concarneau", departmentCode: "29", population: 19520 },
  { slug: "morlaix", name: "Morlaix", departmentCode: "29", population: 14717 },
  { slug: "landerneau", name: "Landerneau", departmentCode: "29", population: 15776 },

  // Tours et Indre-et-Loire
  { slug: "tours", name: "Tours", departmentCode: "37", population: 138588 },
  { slug: "joue-les-tours", name: "Joué-lès-Tours", departmentCode: "37", population: 38615 },
  { slug: "saint-cyr-sur-loire", name: "Saint-Cyr-sur-Loire", departmentCode: "37", population: 16624 },
  { slug: "saint-pierre-des-corps", name: "Saint-Pierre-des-Corps", departmentCode: "37", population: 15908 },
  { slug: "amboise", name: "Amboise", departmentCode: "37", population: 14002 },

  // Limoges et Haute-Vienne
  { slug: "limoges", name: "Limoges", departmentCode: "87", population: 133968 },
  { slug: "saint-junien", name: "Saint-Junien", departmentCode: "87", population: 11382 },

  // Amiens et Somme
  { slug: "amiens", name: "Amiens", departmentCode: "80", population: 134706 },
  { slug: "abbeville", name: "Abbeville", departmentCode: "80", population: 22946 },

  // Perpignan et Pyrénées-Orientales
  { slug: "perpignan", name: "Perpignan", departmentCode: "66", population: 119188 },
  { slug: "canet-en-roussillon", name: "Canet-en-Roussillon", departmentCode: "66", population: 13594 },
  { slug: "saint-esteve", name: "Saint-Estève", departmentCode: "66", population: 11727 },

  // Metz et Moselle
  { slug: "metz", name: "Metz", departmentCode: "57", population: 120205 },
  { slug: "thionville", name: "Thionville", departmentCode: "57", population: 41699 },
  { slug: "montigny-les-metz", name: "Montigny-lès-Metz", departmentCode: "57", population: 21804 },
  { slug: "forbach", name: "Forbach", departmentCode: "57", population: 21101 },
  { slug: "sarreguemines", name: "Sarreguemines", departmentCode: "57", population: 20823 },

  // Besançon et Doubs
  { slug: "besancon", name: "Besançon", departmentCode: "25", population: 117836 },
  { slug: "montbeliard", name: "Montbéliard", departmentCode: "25", population: 25521 },
  { slug: "pontarlier", name: "Pontarlier", departmentCode: "25", population: 17603 },

  // Orléans et Loiret
  { slug: "orleans", name: "Orléans", departmentCode: "45", population: 117988 },
  { slug: "fleury-les-aubrais", name: "Fleury-les-Aubrais", departmentCode: "45", population: 22047 },
  { slug: "olivet", name: "Olivet", departmentCode: "45", population: 22249 },
  { slug: "saint-jean-de-braye", name: "Saint-Jean-de-Braye", departmentCode: "45", population: 21839 },
  { slug: "montargis", name: "Montargis", departmentCode: "45", population: 15020 },

  // Mulhouse et Haut-Rhin
  { slug: "mulhouse", name: "Mulhouse", departmentCode: "68", population: 108038 },
  { slug: "colmar", name: "Colmar", departmentCode: "68", population: 70284 },
  { slug: "saint-louis", name: "Saint-Louis", departmentCode: "68", population: 21271 },

  // Caen et Calvados
  { slug: "caen", name: "Caen", departmentCode: "14", population: 107229 },
  { slug: "herouville-saint-clair", name: "Hérouville-Saint-Clair", departmentCode: "14", population: 21984 },
  { slug: "lisieux", name: "Lisieux", departmentCode: "14", population: 20181 },
  { slug: "bayeux", name: "Bayeux", departmentCode: "14", population: 13669 },

  // Nancy et Meurthe-et-Moselle
  { slug: "nancy", name: "Nancy", departmentCode: "54", population: 105334 },
  { slug: "vandoeuvre-les-nancy", name: "Vandœuvre-lès-Nancy", departmentCode: "54", population: 29633 },
  { slug: "luneville", name: "Lunéville", departmentCode: "54", population: 19295 },
  { slug: "toul", name: "Toul", departmentCode: "54", population: 15538 },

  // Avignon et Vaucluse
  { slug: "avignon", name: "Avignon", departmentCode: "84", population: 93671 },
  { slug: "orange", name: "Orange", departmentCode: "84", population: 29475 },
  { slug: "carpentras", name: "Carpentras", departmentCode: "84", population: 29270 },
  { slug: "cavaillon", name: "Cavaillon", departmentCode: "84", population: 26891 },

  // Rouen déjà ajouté

  // Poitiers et Vienne
  { slug: "poitiers", name: "Poitiers", departmentCode: "86", population: 90340 },
  { slug: "chatellerault", name: "Châtellerault", departmentCode: "86", population: 31025 },

  // Pau et Pyrénées-Atlantiques
  { slug: "pau", name: "Pau", departmentCode: "64", population: 77251 },
  { slug: "bayonne", name: "Bayonne", departmentCode: "64", population: 52006 },
  { slug: "anglet", name: "Anglet", departmentCode: "64", population: 40256 },
  { slug: "biarritz", name: "Biarritz", departmentCode: "64", population: 25532 },

  // La Rochelle et Charente-Maritime
  { slug: "la-rochelle", name: "La Rochelle", departmentCode: "17", population: 79879 },
  { slug: "rochefort", name: "Rochefort", departmentCode: "17", population: 24318 },
  { slug: "saintes", name: "Saintes", departmentCode: "17", population: 25470 },
  { slug: "royan", name: "Royan", departmentCode: "17", population: 19348 },

  // Calais et Pas-de-Calais
  { slug: "calais", name: "Calais", departmentCode: "62", population: 68525 },
  { slug: "boulogne-sur-mer", name: "Boulogne-sur-Mer", departmentCode: "62", population: 41227 },
  { slug: "arras", name: "Arras", departmentCode: "62", population: 40830 },
  { slug: "lens", name: "Lens", departmentCode: "62", population: 31398 },
  { slug: "lievin", name: "Liévin", departmentCode: "62", population: 30997 },
  { slug: "henin-beaumont", name: "Hénin-Beaumont", departmentCode: "62", population: 26278 },
  { slug: "bethune", name: "Béthune", departmentCode: "62", population: 24980 },
  { slug: "bruay-la-buissiere", name: "Bruay-la-Buissière", departmentCode: "62", population: 21901 },

  // Ajaccio et Corse
  { slug: "ajaccio", name: "Ajaccio", departmentCode: "2A", population: 72280 },
  { slug: "porto-vecchio", name: "Porto-Vecchio", departmentCode: "2A", population: 12378 },
  { slug: "bastia", name: "Bastia", departmentCode: "2B", population: 48323 },

  // Bourges et Cher
  { slug: "bourges", name: "Bourges", departmentCode: "18", population: 66602 },
  { slug: "vierzon", name: "Vierzon", departmentCode: "18", population: 25903 },

  // Valence et Drôme
  { slug: "valence", name: "Valence", departmentCode: "26", population: 65296 },
  { slug: "montelimar", name: "Montélimar", departmentCode: "26", population: 40372 },
  { slug: "romans-sur-isere", name: "Romans-sur-Isère", departmentCode: "26", population: 33632 },

  // Quimper déjà ajouté

  // Lorient et Morbihan
  { slug: "lorient", name: "Lorient", departmentCode: "56", population: 57662 },
  { slug: "vannes", name: "Vannes", departmentCode: "56", population: 55383 },
  { slug: "lanester", name: "Lanester", departmentCode: "56", population: 22810 },
  { slug: "ploemeur", name: "Ploemeur", departmentCode: "56", population: 18063 },

  // Troyes et Aube
  { slug: "troyes", name: "Troyes", departmentCode: "10", population: 62045 },
  { slug: "romilly-sur-seine", name: "Romilly-sur-Seine", departmentCode: "10", population: 14009 },

  // Saint-Quentin et Aisne
  { slug: "saint-quentin", name: "Saint-Quentin", departmentCode: "02", population: 54187 },
  { slug: "soissons", name: "Soissons", departmentCode: "02", population: 28337 },
  { slug: "laon", name: "Laon", departmentCode: "02", population: 24903 },

  // Chartres et Eure-et-Loir
  { slug: "chartres", name: "Chartres", departmentCode: "28", population: 39273 },
  { slug: "dreux", name: "Dreux", departmentCode: "28", population: 30664 },
  { slug: "chateaudun", name: "Châteaudun", departmentCode: "28", population: 12702 },

  // Annecy et Haute-Savoie
  { slug: "annecy", name: "Annecy", departmentCode: "74", population: 130721 },
  { slug: "thonon-les-bains", name: "Thonon-les-Bains", departmentCode: "74", population: 36370 },
  { slug: "annemasse", name: "Annemasse", departmentCode: "74", population: 36348 },
  { slug: "cluses", name: "Cluses", departmentCode: "74", population: 18025 },

  // Chambéry et Savoie
  { slug: "chambery", name: "Chambéry", departmentCode: "73", population: 60592 },
  { slug: "aix-les-bains", name: "Aix-les-Bains", departmentCode: "73", population: 31654 },
  { slug: "albertville", name: "Albertville", departmentCode: "73", population: 19742 },

  // Niort et Deux-Sèvres
  { slug: "niort", name: "Niort", departmentCode: "79", population: 60988 },
  { slug: "bressuire", name: "Bressuire", departmentCode: "79", population: 20161 },
  { slug: "thouars", name: "Thouars", departmentCode: "79", population: 9437 },

  // Beauvais et Oise
  { slug: "beauvais", name: "Beauvais", departmentCode: "60", population: 57073 },
  { slug: "compiegne", name: "Compiègne", departmentCode: "60", population: 40860 },
  { slug: "creil", name: "Creil", departmentCode: "60", population: 36402 },
  { slug: "senlis", name: "Senlis", departmentCode: "60", population: 16017 },
  { slug: "nogent-sur-oise", name: "Nogent-sur-Oise", departmentCode: "60", population: 19816 },

  // Évreux et Eure
  { slug: "evreux", name: "Évreux", departmentCode: "27", population: 51158 },
  { slug: "vernon", name: "Vernon", departmentCode: "27", population: 24222 },
  { slug: "louviers", name: "Louviers", departmentCode: "27", population: 18559 },

  // Bourg-en-Bresse et Ain
  { slug: "bourg-en-bresse", name: "Bourg-en-Bresse", departmentCode: "01", population: 42742 },
  { slug: "oyonnax", name: "Oyonnax", departmentCode: "01", population: 22642 },
  { slug: "bellegarde-sur-valserine", name: "Valserhône", departmentCode: "01", population: 17356 },
  { slug: "amberieu-en-bugey", name: "Ambérieu-en-Bugey", departmentCode: "01", population: 14548 },

  // La Roche-sur-Yon et Vendée
  { slug: "la-roche-sur-yon", name: "La Roche-sur-Yon", departmentCode: "85", population: 57714 },
  { slug: "les-sables-d-olonne", name: "Les Sables-d'Olonne", departmentCode: "85", population: 47750 },
  { slug: "challans", name: "Challans", departmentCode: "85", population: 21882 },

  // Blois et Loir-et-Cher
  { slug: "blois", name: "Blois", departmentCode: "41", population: 47708 },
  { slug: "vendome", name: "Vendôme", departmentCode: "41", population: 17320 },
  { slug: "romorantin-lanthenay", name: "Romorantin-Lanthenay", departmentCode: "41", population: 17240 },

  // Chalon-sur-Saône et Saône-et-Loire
  { slug: "chalon-sur-saone", name: "Chalon-sur-Saône", departmentCode: "71", population: 45926 },
  { slug: "macon", name: "Mâcon", departmentCode: "71", population: 34523 },
  { slug: "le-creusot", name: "Le Creusot", departmentCode: "71", population: 21628 },
  { slug: "montceau-les-mines", name: "Montceau-les-Mines", departmentCode: "71", population: 18151 },

  // Laval et Mayenne
  { slug: "laval", name: "Laval", departmentCode: "53", population: 53718 },
  { slug: "mayenne", name: "Mayenne", departmentCode: "53", population: 12988 },
  { slug: "chateau-gontier", name: "Château-Gontier-sur-Mayenne", departmentCode: "53", population: 12561 },

  // Auxerre et Yonne
  { slug: "auxerre", name: "Auxerre", departmentCode: "89", population: 35151 },
  { slug: "sens", name: "Sens", departmentCode: "89", population: 25869 },
  { slug: "joigny", name: "Joigny", departmentCode: "89", population: 9786 },

  // Nevers et Nièvre
  { slug: "nevers", name: "Nevers", departmentCode: "58", population: 33424 },
  { slug: "cosne-cours-sur-loire", name: "Cosne-Cours-sur-Loire", departmentCode: "58", population: 10295 },

  // Saint-Brieuc et Côtes-d'Armor
  { slug: "saint-brieuc", name: "Saint-Brieuc", departmentCode: "22", population: 46178 },
  { slug: "lannion", name: "Lannion", departmentCode: "22", population: 20460 },
  { slug: "dinan", name: "Dinan", departmentCode: "22", population: 10903 },
  { slug: "lamballe", name: "Lamballe-Armor", departmentCode: "22", population: 15951 },

  // Cherbourg et Manche
  { slug: "cherbourg-en-cotentin", name: "Cherbourg-en-Cotentin", departmentCode: "50", population: 80959 },
  { slug: "saint-lo", name: "Saint-Lô", departmentCode: "50", population: 18958 },
  { slug: "granville", name: "Granville", departmentCode: "50", population: 13010 },

  // Charleville-Mézières et Ardennes
  { slug: "charleville-mezieres", name: "Charleville-Mézières", departmentCode: "08", population: 46611 },
  { slug: "sedan", name: "Sedan", departmentCode: "08", population: 17147 },

  // Albi et Tarn
  { slug: "albi", name: "Albi", departmentCode: "81", population: 51532 },
  { slug: "castres", name: "Castres", departmentCode: "81", population: 42044 },
  { slug: "gaillac", name: "Gaillac", departmentCode: "81", population: 16183 },

  // Tarbes et Hautes-Pyrénées
  { slug: "tarbes", name: "Tarbes", departmentCode: "65", population: 41518 },
  { slug: "lourdes", name: "Lourdes", departmentCode: "65", population: 13389 },

  // Carcassonne et Aude
  { slug: "carcassonne", name: "Carcassonne", departmentCode: "11", population: 47068 },
  { slug: "narbonne", name: "Narbonne", departmentCode: "11", population: 55749 },
  { slug: "castelnaudary", name: "Castelnaudary", departmentCode: "11", population: 13013 },

  // Agen et Lot-et-Garonne
  { slug: "agen", name: "Agen", departmentCode: "47", population: 33499 },
  { slug: "villeneuve-sur-lot", name: "Villeneuve-sur-Lot", departmentCode: "47", population: 22699 },
  { slug: "marmande", name: "Marmande", departmentCode: "47", population: 18721 },

  // Angoulême et Charente
  { slug: "angouleme", name: "Angoulême", departmentCode: "16", population: 42032 },
  { slug: "cognac", name: "Cognac", departmentCode: "16", population: 18706 },

  // Périgueux et Dordogne
  { slug: "perigueux", name: "Périgueux", departmentCode: "24", population: 30645 },
  { slug: "bergerac", name: "Bergerac", departmentCode: "24", population: 27348 },
  { slug: "sarlat-la-caneda", name: "Sarlat-la-Canéda", departmentCode: "24", population: 9127 },

  // Mont-de-Marsan et Landes
  { slug: "mont-de-marsan", name: "Mont-de-Marsan", departmentCode: "40", population: 32050 },
  { slug: "dax", name: "Dax", departmentCode: "40", population: 21805 },
  { slug: "biscarrosse", name: "Biscarrosse", departmentCode: "40", population: 14695 },

  // DOM-TOM
  { slug: "fort-de-france", name: "Fort-de-France", departmentCode: "972", population: 75734 },
  { slug: "le-lamentin", name: "Le Lamentin", departmentCode: "972", population: 40637 },
  { slug: "le-robert", name: "Le Robert", departmentCode: "972", population: 22825 },
  { slug: "schoelcher", name: "Schœlcher", departmentCode: "972", population: 19922 },
  { slug: "sainte-marie", name: "Sainte-Marie", departmentCode: "972", population: 16036 },

  { slug: "pointe-a-pitre", name: "Pointe-à-Pitre", departmentCode: "971", population: 15410 },
  { slug: "les-abymes", name: "Les Abymes", departmentCode: "971", population: 54806 },
  { slug: "baie-mahault", name: "Baie-Mahault", departmentCode: "971", population: 31901 },
  { slug: "le-gosier", name: "Le Gosier", departmentCode: "971", population: 27260 },
  { slug: "petit-bourg", name: "Petit-Bourg", departmentCode: "971", population: 24711 },
  { slug: "sainte-anne-guadeloupe", name: "Sainte-Anne", departmentCode: "971", population: 25018 },

  { slug: "saint-denis-reunion", name: "Saint-Denis", departmentCode: "974", population: 154765 },
  { slug: "saint-paul", name: "Saint-Paul", departmentCode: "974", population: 105240 },
  { slug: "saint-pierre-reunion", name: "Saint-Pierre", departmentCode: "974", population: 85007 },
  { slug: "le-tampon", name: "Le Tampon", departmentCode: "974", population: 80552 },
  { slug: "saint-louis-reunion", name: "Saint-Louis", departmentCode: "974", population: 53888 },
  { slug: "saint-andre", name: "Saint-André", departmentCode: "974", population: 57426 },
  { slug: "le-port", name: "Le Port", departmentCode: "974", population: 34411 },
  { slug: "saint-benoit", name: "Saint-Benoît", departmentCode: "974", population: 39271 },
  { slug: "saint-joseph", name: "Saint-Joseph", departmentCode: "974", population: 38449 },
  { slug: "sainte-marie-reunion", name: "Sainte-Marie", departmentCode: "974", population: 34298 },

  { slug: "cayenne", name: "Cayenne", departmentCode: "973", population: 64000 },
  { slug: "matoury", name: "Matoury", departmentCode: "973", population: 33500 },
  { slug: "saint-laurent-du-maroni", name: "Saint-Laurent-du-Maroni", departmentCode: "973", population: 49261 },
  { slug: "kourou", name: "Kourou", departmentCode: "973", population: 26221 },
  { slug: "remire-montjoly", name: "Rémire-Montjoly", departmentCode: "973", population: 27153 },

  { slug: "mamoudzou", name: "Mamoudzou", departmentCode: "976", population: 71437 },
  { slug: "koungou", name: "Koungou", departmentCode: "976", population: 32156 },
  { slug: "dzaoudzi", name: "Dzaoudzi", departmentCode: "976", population: 17831 },
];
