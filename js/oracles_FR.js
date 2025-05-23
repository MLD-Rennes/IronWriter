/*
    IronWriter is an open-source writing tool for solo playthroughs of the free tabletop RPG Ironsworn.
    Copyright (C) 2019 Alex Larioza
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program. If not, see https://github.com/SHiLLySiT/IronWriter/blob/master/LICENSE.txt.
    */
window.ORACLE = {
    "Presque Certain": {
        10: "Non",
        100: "Oui"
    },

    "Probable": {
        25: "Non",
        100: "Oui"
    },

    "50/50": {
        50: "Non",
        100: "Oui"
    },

    "Improbable": {
        75: "Non",
        100: "Oui"
    },

    "Chance Infime": {
        90: "Non",
        100: "Oui"
    },

    "Actions": {
        1: "comploter",
        2: "fracasser",
        3: "affaiblir",
        4: "initier",
        5: "créer",
        6: "jurer",
        7: "venger",
        8: "garder",
        9: "vaincre",
        10: "contrôler",
        11: "briser",
        12: "risquer",
        13: "capituler",
        14: "inspecter",
        15: "piller",
        16: "esquiver",
        17: "agresser",
        18: "dévier",
        19: "menacer",
        20: "attaquer",
        21: "quitter",
        22: "préserver",
        23: "manipuler",
        24: "retirer",
        25: "éliminer",
        26: "priver",
        27: "reddition",
        28: "investiguer",
        29: "retenir",
        30: "concentrer",
        31: "découvrir",
        32: "rompre",
        33: "aider",
        34: "maintenir",
        35: "faiblir",
        36: "supprimer",
        37: "chasser",
        38: "partager",
        39: "détruire",
        40: "éviter",
        41: "rejeter",
        42: "demander",
        43: "explorer",
        44: "soutenir",
        45: "saisir",
        46: "déplorer",
        47: "révéler",
        48: "récolter",
        49: "défier",
        50: "transformer",
        51: "persévérer",
        52: "servir",
        53: "commencer",
        54: "déplacer",
        55: "coordonner",
        56: "résister",
        57: "attendre",
        58: "impressionner",
        59: "prendre",
        60: "opposer",
        61: "capturer",
        62: "envahir",
        63: "défier",
        64: "acquérir",
        65: "protéger",
        66: "finir",
        67: "renforcer",
        68: "restaurer",
        69: "avancer",
        70: "commander",
        71: "refuser",
        72: "trouver",
        73: "livrer",
        74: "cacher",
        75: "fortifier",
        76: "trahir",
        77: "sécuriser",
        78: "arriver",
        79: "affecter",
        80: "changer",
        81: "défendre",
        82: "débattre",
        83: "supporter",
        84: "suivre",
        85: "construire",
        86: "localiser",
        87: "endurer",
        88: "relâcher",
        89: "perdre",
        90: "réduire",
        91: "aggraver",
        92: "distraire",
        93: "voyager",
        94: "escorter",
        95: "apprendre",
        96: "communiquer",
        97: "partir",
        98: "fouiller",
        99: "charger",
        100: "invoquer"
    },

    "Thèmes": {
        1: "risque",
        2: "capacité",
        3: "prix",
        4: "allié",
        5: "bataille",
        6: "sécurité",
        7: "survie",
        8: "arme",
        9: "blessure",
        10: "abri",
        11: "meneur",
        12: "peur",
        13: "temps",
        14: "devoir",
        15: "secret",
        16: "innocence",
        17: "renommée",
        18: "direction",
        19: "mort",
        20: "honneur",
        21: "labeur",
        22: "solution",
        23: "outil",
        24: "équilibre",
        25: "amour",
        26: "barrière",
        27: "création",
        28: "déclin",
        29: "commerce",
        30: "lien",
        31: "espoir",
        32: "superstition",
        33: "paix",
        34: "tromperie",
        35: "histoire",
        36: "monde",
        37: "voeu",
        38: "protection",
        39: "nature",
        40: "opinion",
        41: "fardeau",
        42: "vengeance",
        43: "opportunité",
        44: "faction",
        45: "danger",
        46: "corruption",
        47: "liberté",
        48: "dette",
        49: "haine",
        50: "possession",
        51: "étranger",
        52: "passage",
        53: "territoire",
        54: "créature",
        55: "maladie",
        56: "avantage",
        57: "sang",
        58: "langage",
        59: "rumeur",
        60: "faiblesse",
        61: "cupidité",
        62: "famille",
        63: "ressource",
        64: "structure",
        65: "rêve",
        66: "communauté",
        67: "guerre",
        68: "présage",
        69: "récompense",
        70: "destin",
        71: "élan",
        72: "pouvoir",
        73: "mémoire",
        74: "ruine",
        75: "mysticisme",
        76: "rival",
        77: "problème",
        78: "idée",
        79: "représailles",
        80: "santé",
        81: "communauté",
        82: "ennemi",
        83: "religion",
        84: "esprit",
        85: "gloire",
        86: "désolation",
        87: "force",
        88: "connaissance",
        89: "vérité",
        90: "quête",
        91: "fierté",
        92: "perte",
        93: "loi",
        94: "voie",
        95: "avertissement",
        96: "relation",
        97: "richesse",
        98: "maison",
        99: "stratégie",
        100: "provisions"
    },

    "Régions": {
        10: "Les Îles-Barrières",
        20: "La Côte Déchirée",
        30: "Les Sylves Profondes",
        40: "Les Terres Inondées",
        50: "Les Havres",
        60: "L'Arrière-Pays",
        70: "Les Collines des Tempêtes",
        80: "Les Montagnes Voilées",
        90: "Le Désert Brisé",
        100: "Ailleurs"
    },

    "Lieux": {
        1: "Repaire",
        2: "Ruine",
        3: "Mine",
        4: "Désert",
        5: "Site Mystique",
        6: "Chemin",
        7: "Avant-poste",
        8: "Mur",
        9: "Champ de Bataille",
        10: "Taudis",
        11: "Source d'eau",
        12: "Antre",
        13: "Fort",
        14: "Pont",
        15: "Camp",
        16: "Cairn/Tombe",
        18: "Caravane",
        20: "Chute d'eau",
        22: "Caverne",
        24: "Marais",
        26: "Fange",
        28: "Ravin",
        30: "Route",
        32: "Arbre",
        34: "Étang",
        36: "Champs",
        38: "Marécage",
        40: "Ferme",
        42: "Rapides",
        44: "Col",
        46: "Piste",
        48: "Clairière",
        50: "Plaine",
        52: "Crête",
        54: "Falaise",
        56: "Bosquet",
        58: "Village",
        60: "Tourbière",
        62: "Broussailles",
        64: "Passage à gué",
        66: "Vallée",
        68: "Baie/Fjord",
        70: "Contreforts",
        72: "Lac",
        75: "Rivière",
        79: "Forêt",
        83: "Côte",
        88: "Colline",
        93: "Montagne",
        99: "Bois",
        100: "Anomalie"
    },

    "Eaux côtières": {
        1: "Flotte",
        2: "Banc d'algues sargasses",
        3: "Débris flottants",
        4: "Site Mystique",
        5: "Antre",
        10: "Épave",
        15: "Port",
        22: "Navire",
        30: "Récifs",
        38: "Fjord",
        46: "Estuaire",
        54: "Crique",
        62: "Baie",
        70: "Glace",
        85: "Île",
        99: "Eaux libres",
        100: "Anomalie"
    },

    "Descriptions de lieux": {
        2: "haut(e)",
        4: "isolé(e)",
        6: "exposé(e)",
        8: "petit(e)",
        10: "brisé(e)",
        12: "varié(e)",
        14: "grossier(e)",
        16: "sombre",
        18: "ténébreux(se)",
        20: "contesté(e)",
        22: "sinistre",
        24: "sauvage",
        26: "fertile",
        28: "bloqué(e)",
        30: "antique",
        32: "périlleux(se)",
        34: "caché(e)",
        36: "occupé(e)",
        38: "riche",
        40: "massif(ve)",
        42: "sauvage",
        44: "défendu(e)",
        46: "flêtri(e)",
        48: "mystique",
        50: "inaccessible",
        52: "protégé(e)",
        54: "abandonné(e)",
        56: "large",
        58: "répugnant(e)",
        60: "mort(e)",
        62: "dévasté(e)",
        64: "stérile",
        66: "froid(e)",
        68: "infesté(e)",
        70: "bas(se)",
        72: "magnifique",
        74: "abondant(e)",
        76: "verdoyant(e)",
        78: "inondé(e)",
        80: "vide",
        82: "étrange",
        84: "corrompu(e)",
        86: "paisible",
        88: "oublié(e)",
        90: "vaste",
        92: "colonisé(e)",
        94: "dense",
        96: "civilisé(e)",
        98: "désolé(e)",
        100: "enclavé(e)"
    },

    "Noms de villages": {
        15: {
            10: "Haut-mont",
            20: "Eau-saumâtre",
            30: "Bois-gelé",
            40: "Crête-rouge",
            50: "Arbre-mont",
            60: "Pierre-gué",
            70: "Eau-profonde",
            80: "Blanche-cascade",
            90: "Grise-falaise",
            100: "Trois-rivières"
        },
        30: {
            10: "Pont-blanc",
            20: "Fort-solitude",
            30: "Haut-cairn",
            40: "Hall-rouge",
            50: "Sombre-puits",
            60: "Bois-muraille",
            70: "Pierre-tour",
            80: "Hall-épine",
            90: "Blaise-foyer",
            100: "Friche-champ"
        },
        45: {
            10: "Falaise-corneille",
            20: "Ours-marque",
            30: "Roc-loup",
            40: "Aigle-pic",
            50: "Nid-wyverne",
            60: "Bois-sanglier",
            70: "Val-renard",
            80: "Primal-vigie",
            90: "Champ-d'élan",
            100: "Ombre-dragon"
        },
        60: {
            10: "Brise-épée",
            20: "Tombe-idiot",
            30: "Première-rencontre",
            40: "Brise-heaume",
            50: "Deuil-hantise",
            60: "La Résistance d'Olgar",
            70: "Eaux-perdues",
            80: "Les Lamentations de Rojirra",
            90: "Dernière-marche",
            100: "Chute-roc"
        },
        75: {
            10: "Abon",
            20: "Daveza",
            30: "Damula",
            40: "Essus",
            50: "Sina",
            60: "Kazeera",
            70: "Khazu",
            80: "Sova",
            90: "Nabuma",
            100: "Tiza"
        },
        90: {
            10: "Hiver-foyer",
            20: "Vent-refuge",
            30: "Halte-tempête",
            40: "Triste-givre",
            50: "Printemps-marée",
            60: "Tourbe-crépuscule",
            70: "Givre-roc",
            80: "Printemps-ruisseau",
            90: "Fend-la-glace",
            100: "Chant-d'été"
        },
        100: {
            10: "Une ressource commerciale (Fer-maison)",
            20: "Une ville du Vieux Monde (Nouvelle-Arkesh)",
            30: "Un fondateur ou un colon célèbre (Le Hall de Kei)",
            40: "Une déesse (Elisora)",
            50: "Un artefact historique (Noir-heaume)",
            60: "L'un des peuples premiers-nés (Elfe-ruisseau)",
            70: "Un nom ou un mot elfique (Nessana)",
            80: "Une croyance ou un lieu mythique (Marche-fantôme)",
            90: "Un terme positif (Espoir)",
            100: "Un terme négatif (Abandon)"
        }
    },

    "Noms de villages (générateur rapide)": [
        {
        4: "Triste",
        8: "Vert(e)",
        12: "Loup",
        16: "Corneille",
        20: "Gris(e)",
        24: "Rouge",
        28: "Hache",
        32: "Grand(e)",
        36: "Bois",
        40: "Bas(se)",
        44: "Blanc(he)",
        48: "Tempête",
        52: "Noir(e)",
        56: "Deuil",
        60: "Neuf(ve)",
        64: "Pierre",
        68: "Sinistre",
        72: "Perdu(e)",
        76: "Haut(e)",
        80: "Roche",
        84: "Bouclier",
        88: "Épée",
        92: "Givre",
        96: "Épine",
        100: "Long(ue)"
        },
        {
        4: "-tourbière",
        8: "-gué",
        12: "-roc",
        16: "-garde",
        20: "-espoir",
        24: "-bois",
        28: "-crête",
        32: "-pierre",
        36: "-havre",
        40: "-chute(s)",
        44: "-rivière",
        48: "-champ",
        52: "-colline",
        56: "-pont",
        60: "-marque",
        64: "-cairn",
        68: "-terre",
        72: "-hall",
        76: "-mont",
        80: "-roche",
        84: "-ruisseau",
        88: "-tumulus",
        92: "-ferme",
        96: "-maison",
        100: "-mèche"
        }
    ],

    "Troubles de villages": {
        2: "Les étrangers sont rejetés",
        4: "Dangereuse découverte",
        6: "Terrible présage",
        8: "Catastrophe naturelle",
        10: "De vieilles blessures sont rouvertes",
        12: "Un objet important est perdu",
        14: "Une personne est capturée",
        16: "Phénomène mystérieux",
        18: "Révolte contre une autorité",
        20: "Paria vengeur",
        22: "Village rival",
        24: "La nature riposte",
        26: "Quelqu’un a disparu",
        28: "Une production s’interrompt",
        30: "Série de meurtres mystérieux",
        32: "Une dette arrive à échéance",
        34: "Gouvernance injuste",
        36: "Accident désastreux",
        38: "De mèche avec l’ennemi",
        40: "Pillards s’attaquant aux plus faibles",
        42: "Passé maudit",
        44: "Un innocent est accusé",
        46: "Corrompu par la magie noire",
        48: "Isolé par le mauvais temps",
        50: "Les provisions sont rationnées",
        52: "Épidémie",
        54: "Des alliés deviennent des ennemis",
        56: "L’attaque est imminente",
        58: "Caravane égarée",
        60: "Un sombre secret est révélé",
        62: "Expédition urgente",
        64: "Un meneur tombe",
        66: "Conflit inter-familial",
        68: "Gouvernance incompétente",
        70: "Va-t-en-guerre irréfléchi",
        72: "Bête en chasse",
        74: "Trahi par les siens",
        76: "Violation de trêve",
        78: "Hantise déchaînée",
        80: "Conflit avec les premiers-nés",
        82: "Route commerciale bloquée",
        84: "Pris dans les tirs croisés",
        86: "Un étranger provoque une discorde",
        88: "Un événement important est menacé",
        90: "Dangereuse tradition", 
		100: "Relancer les dés"
    },

    "Rôles de personnage": {
        2: "Criminel",
        4: "Guérisseur",
        6: "Bandit",
        9: "Guide",
        12: "Saltimbanque",
        15: "Mineur",
        18: "Mercenaire",
        21: "Paria",
        24: "Vagabond",
        27: "Bûcheron",
        30: "Voyageur",
        33: "Mystique",
        36: "Prêtre",
        39: "Marin",
        42: "Pèlerin",
        45: "Voleur",
        48: "Aventurier",
        51: "Glaneur",
        54: "Meneur",
        58: "Garde",
        62: "Artisan",
        66: "Éclaireur",
        70: "Berger",
        74: "Pécheur",
        79: "Guerrier",
        84: "Chasseur",
        89: "Pillard",
        94: "Marchand",
        99: "Fermier",
        100: "Rôle inhabituel"
    },

    "Objectifs de personnage": {
        3: "Obtenir un objet",
        6: "Passer un accord",
        9: "Construire une relation",
        12: "Détruire une relation",
        15: "Chercher la vérité",
        18: "Régler une dette",
        21: "Réfuter un mensonge",
        24: "Nuire à un rival",
        27: "Guérir un malade",
        30: "Trouver une personne",
        33: "Trouver un foyer",
        36: "S'emparer du pouvoir",
        39: "Restaurer une relation",
        42: "Créer un objet",
        45: "Voyager vers un lieu",
        48: "S'emparer de provisions",
        51: "Se rebeller contre l'autorité",
        54: "Collecter une dette",
        57: "Protéger un secret",
        60: "Partager sa foi",
        63: "S'enrichir",
        66: "Protéger une personne",
        69: "Protéger lestatus quo",
        72: "Gagner en prestige",
        75: "Défendre un lieu",
        78: "Redresser un tort",
        81: "Assurer un devoir",
        84: "Acquérir un savoir",
        87: "Prouver sa valeur",
        90: "Trouver la rédemption",
        92: "Échapper à quelque chose",
        95: "Résoudre un différent",
		100: "Relancer les dés."
    },

    "Descriptions de personnage": {
        1: "Stoïque",
        2: "Attirant(e)",
        3: "Passif(ve)",
        4: "Hautain(e)",
        5: "Affectueux(se)",
        6: "Généreux(se)",
        7: "Arrogant(e)",
        8: "Armé(e)",
        9: "Malin(gne)",
        10: "Brave",
        11: "Laid(e)",
        12: "Sociable",
        13: "Condamné(e)",
        14: "Bien entouré(e)",
        15: "Audacieux(se)",
        16: "Jaloux(se)",
        17: "Colérique",
        18: "Actif(ve)",
        19: "Suspicieux(se)",
        20: "Hostile",
        21: "Cœur de pierre",
        22: "Prospère",
        23: "Talentueux(se)",
        24: "Expérimenté(e)",
        25: "Trompeur(se)",
        26: "Ambitieux(se)",
        27: "Agressif(ve)",
        28: "Vaniteux(se)",
        29: "Fier(e)",
        30: "Sévère",
        31: "Dépendant(e)",
        32: "Méfiant(e)",
        33: "Fort(e)",
        34: "Sagace",
        35: "Dangereux(se)",
        36: "Décalé(e)",
        37: "Joyeux(se)",
        38: "Défiguré(e)",
        39: "Intolérant(e)",
        40: "Compétent(e)",
        41: "Pingre",
        42: "Timide",
        43: "Impassible",
        44: "Sauvage",
        45: "Amer(e)",
        46: "Rusé(e)",
        47: "Repentant(e)",
        48: "Chaleureux(se)",
        49: "Charmant(e)",
        50: "Insouciant(e)",
        51: "Critique",
        52: "Prudent(e)",
        53: "Débrouillard(e)",
        54: "Fatigué(e)",
        55: "Blessé(e)",
        56: "Anxieux(se)",
        57: "Puissant(e)",
        58: "Athlétique",
        59: "Motivé(e)",
        60: "Cruel(le)",
        61: "Calme",
        62: "Honnête",
        63: "Infâme",
        64: "Mourant(e)",
        65: "Reclus(e)",
        66: "Artiste",
        67: "Invalide",
        68: "Confus(e)",
        69: "Manipulateur(trice)",
        70: "Relaxé(e)",
        71: "Discret(e)",
        72: "Confident(e)",
        73: "Faible",
        74: "Amical(e)",
        75: "Sage",
        76: "Influent(e)",
        77: "Jeune",
        78: "Aventureux(se)",
        79: "Opprimé(e)",
        80: "Vengeur(esse)",
        81: "Coopératif(ve)",
        82: "Armuré(e)",
        83: "Apathique",
        84: "Déterminé(e)",
        85: "Loyal(e)",
        86: "Malade",
        87: "Religieux(se)",
        88: "Égoïste",
        89: "Vieux(Vieille)",
        90: "Fervent(e)",
        91: "Violent(e)",
        92: "Agréable",
        93: "Impétueux(se)",
        94: "Obstiné(e)",
        95: "Incompétent(e)",
        96: "Cupide",
        97: "Couard(e)",
        98: "Obsédé(e)",
        99: "Imprudent(e)",
        100: "Fer-juré"
    },

    "Noms des Peuples du Fer": {
        1: "Solana",
        2: "Keelan",
        3: "Cadigan",
        4: "Sola",
        5: "Kodroth",
        6: "Kione",
        7: "Katja",
        8: "Tio",
        9: "Artiga",
        10: "Eos",
        11: "Bastien",
        12: "Elli",
        13: "Maura",
        14: "Haleema",
        15: "Abella",
        16: "Morter",
        17: "Wulan",
        18: "Mai",
        19: "Farina",
        20: "Pearce",
        21: "Wynne",
        22: "Haf",
        23: "Aeddon",
        24: "Khinara",
        25: "Milla",
        26: "Nakata",
        27: "Kynan",
        28: "Kiah",
        29: "Jaggar",
        30: "Beca",
        31: "Ikram",
        32: "Melia",
        33: "Sidan",
        34: "Deshi",
        35: "Tessa",
        36: "Sibila",
        37: "Morien",
        38: "Mona",
        39: "Padma",
        40: "Avella",
        41: "Naila",
        42: "Lio",
        43: "Cera",
        44: "Ithela",
        45: "Zhan",
        46: "Kaivan",
        47: "Valeri",
        48: "Hirsham",
        49: "Pemba",
        50: "Edda",
        51: "Lestara",
        52: "Lago",
        53: "Elstan",
        54: "Saskia",
        55: "Kabeera",
        56: "Caldas",
        57: "Nisus",
        58: "Serene",
        59: "Chenda",
        60: "Themon",
        61: "Erin",
        62: "Alban",
        63: "Parcell",
        64: "Jelma",
        65: "Willa",
        66: "Nadira",
        67: "Gwen",
        68: "Amara",
        69: "Masias",
        70: "Kanno",
        71: "Razeena",
        72: "Mira",
        73: "Perella",
        74: "Myrick",
        75: "Qamar",
        76: "Kormak",
        77: "Zura",
        78: "Zanita",
        79: "Brynn",
        80: "Tegan",
        81: "Pendry",
        82: "Quinn",
        83: "Fanir",
        84: "Glain",
        85: "Emelyn",
        86: "Kendi",
        87: "Althus",
        88: "Leela",
        89: "Ishana",
        90: "Flint",
        91: "Delkash",
        92: "Nia",
        93: "Nan",
        94: "Keeara",
        95: "Katania",
        96: "Morell",
        97: "Temir",
        98: "Bas",
        99: "Sabine",
        100: "Tallus",
        101: "Segura",
        102: "Gethin",
        103: "Bataar",
        104: "Basira",
        105: "Joa",
        106: "Glynn",
        107: "Toran",
        108: "Arasen",
        109: "Kuron",
        110: "Griff",
        111: "Owena",
        112: "Adda",
        113: "Euros",
        114: "Kova",
        115: "Kara",
        116: "Morgan",
        117: "Nanda",
        118: "Tamara",
        119: "Asha",
        120: "Delos",
        121: "Torgan",
        122: "Makari",
        123: "Selva",
        124: "Kimura",
        125: "Rhian",
        126: "Tristan",
        127: "Siorra",
        128: "Sayer",
        129: "Cortina",
        130: "Vesna",
        131: "Kataka",
        132: "Keyshia",
        133: "Mila",
        134: "Lili",
        135: "Vigo",
        136: "Sadia",
        137: "Malik",
        138: "Dag",
        139: "Kuno",
        140: "Reva",
        141: "Kai",
        142: "Kalina",
        143: "Jihan",
        144: "Hennion",
        145: "Abram",
        146: "Aida",
        147: "Myrtle",
        148: "Nekun",
        149: "Menna",
        150: "Tahir",
        151: "Sarria",
        152: "Nakura",
        153: "Akiya",
        154: "Talan",
        155: "Mattick",
        156: "Okoth",
        157: "Khulan",
        158: "Verena",
        159: "Beltran",
        160: "Del",
        161: "Ranna",
        162: "Alina",
        163: "Muna",
        164: "Mura",
        165: "Torrens",
        166: "Yuda",
        167: "Nazmi",
        168: "Ghalen",
        169: "Sarda",
        170: "Shona",
        171: "Kalidas",
        172: "Wena",
        173: "Sendra",
        174: "Kori",
        175: "Setara",
        176: "Lucia",
        177: "Maya",
        178: "Reema",
        179: "Yorath",
        180: "Rhoddri",
        181: "Shekhar",
        182: "Servan",
        183: "Reese",
        184: "Kenrick",
        185: "Indirra",
        186: "Giliana",
        187: "Jebran",
        188: "Kotama",
        189: "Fara",
        190: "Katrin",
        191: "Namba",
        192: "Lona",
        193: "Taylah",
        194: "Kato",
        195: "Esra",
        196: "Eleri",
        197: "Irsia",
        198: "Kayu",
        199: "Bevan",
        200: "Chandra"
    },

    "Noms elfiques": {
        2: "Arsula",
        4: "Naidita",
        6: "Belesunna",
        8: "Vidarna",
        10: "Ninsunu",
        12: "Balathu",
        14: "Dorosi",
        16: "Gezera",
        18: "Zursan",
        20: "Seleeku",
        22: "Utamara",
        24: "Nebakay",
        26: "Dismashk",
        28: "Mitunu",
        30: "Atani",
        32: "Kinzura",
        34: "Sumula",
        36: "Ukames",
        38: "Ahmeshki",
        40: "Ilsit",
        42: "Mayatanay",
        44: "Etana",
        46: "Gamanna",
        48: "Nessana",
        50: "Uralar",
        52: "Tishetu",
        54: "Leucia",
        56: "Sutahe",
        58: "Dotani",
        60: "Uktannu",
        62: "Retenay",
        64: "Kendalanu",
        66: "Tahuta",
        68: "Mattissa",
        70: "Anatu",
        72: "Aralu",
        74: "Arakhi",
        76: "Ibrahem",
        78: "Sinosu",
        80: "Jemshida",
        82: "Visapni",
        84: "Hullata",
        86: "Sidura",
        88: "Kerihu",
        90: "Ereshki",
        92: "Cybela",
        94: "Anunna",
        96: "Otani",
        98: "Ditani",
        100: "Faraza"
    },

    "Noms de Géants": {
        4: "Chony",
        8: "Banda",
        12: "Jochu",
        16: "Kira",
        20: "Khatir",
        24: "Chaidu",
        28: "Atan",
        32: "Buandu",
        36: "Javyn",
        40: "Khashin",
        44: "Bayara",
        48: "Temura",
        52: "Kidha",
        56: "Kathos",
        60: "Tanua",
        64: "Bashtu",
        68: "Jaran",
        72: "Othos",
        76: "Khutan",
        80: "Otaan",
        84: "Martu",
        88: "Baku",
        92: "Tuban",
        96: "Qudan",
        100: "Denua"
    },

    "Noms de Varous": {
        4: "Vata",
        8: "Zora",
        12: "Jasna",
        16: "Charna",
        20: "Tana",
        24: "Soveen",
        28: "Radka",
        32: "Zlata",
        36: "Leesla",
        40: "Byna",
        44: "Meeka",
        48: "Iskra",
        52: "Jarek",
        56: "Darva",
        60: "Neda",
        64: "Keha",
        68: "Zhivka",
        72: "Kvata",
        76: "Staysa",
        80: "Evka",
        84: "Vuksha",
        88: "Muko",
        92: "Dreko",
        96: "Aleko",
        100: "Vojan"
    },

    "Noms de Trolls": {
        4: "Rattle",
        8: "Scratch",
        12: "Wallow",
        16: "Groak",
        20: "Gimble",
        24: "Scar",
        28: "Cratch",
        32: "Creech",
        36: "Shush",
        40: "Glush",
        44: "Slar",
        48: "Gnash",
        52: "Stoad",
        56: "Grig",
        60: "Bleat",
        64: "Chortle",
        68: "Cluck",
        72: "Slith",
        76: "Mongo",
        80: "Creak",
        84: "Burble",
        88: "Vrusk",
        92: "Snuffle",
        96: "Leech",
        100: "Herk"
    },

    "Actions de combat": {
        3: "Contraindre à une reddition",
        6: "Se coordonner avec ses alliés",
        9: "Rameuter des renforts",
        13: "S’emparer de quelque chose ou de quelqu’un",
        17: "Provoquer une riposte imprudente",
        21: "Intimider ou effrayer",
        25: "Révéler une vérité surprenante",
        29: "Détourner l’attention sur quelqu’un ou quelque chose d’autre",
        33: "Détruire quelque chose ou le rendre inutile",
        39: "Agir de façon décisive",
        45: "Renforcer les défenses",
        52: "Préparer une action",
        60: "Utiliser le terrain pour gagner l’avantage",
        68: "Tirer avantage d’une arme ou d’une capacité",
        78: "Créer une opportunité",
        89: "Attaquer avec précision",
        99: "Attaquer avec force",
        100: "Agissez de façon totalement inattendue"
    },

    "Contrecoups Mystique": {
        4: "Votre rituel a un effet inverse à celui prévu.",
        8: "Vos forces sont sapées.",
        12: "Votre ami, votre allié ou votre compagnon est affecté négativement.",
        16: "Vous détruisez un objet important.",
        20: "Vous invoquez malgré vous une horreur.",
        24: "Vous perdez connaissance, pour sombrer dans un sommeil troublé.",
        28: "Un tourment physique laisse sa marque sur vous.",
        32: "Des voix fantomatiques vous murmurent de sombres présages.",
        36: "Vous êtes perdu dans les ténèbres, pour réapparaître dans un autre lieu sans aucun souvenir de la façon dont vous êtes arrivé là.",
        40: "Vous alertez quelqu’un ou quelque chose de votre présence.",
        44: "Vous n’êtes plus vous-même, ce qui vous pousse à agir contre un ami, un allié ou un compagnon.",
        48: "Vous affectez ou endommagez votre environnement, en provoquant une perturbation ou des dégâts potentiels.",
        52: "Vous gaspillez des ressources.",
        56: "Vous souffrez de la perte de l’un de vos sens pendant plusieurs heures.",
        60: "Vous perdez votre connexion à la magie pour une journée environ, ce qui vous interdit tout rituel.",
        64: "Votre rituel affecte sa cible d’une façon inattendue et problématique.",
        68: "Votre rituel révèle une vérité surprenante et troublante.",
        72: "Vous êtes tenté par des forces obscures.",
        76: "Vous avez une troublante vision de votre avenir.",
        80: "Vous ne pouvez plus répéter ce rituel jusqu’à ce que vous mettiez la main sur un ingrédient important.",
        84: "Vous développez une étrange peur ou pulsion.",
        88: "Votre rituel provoque un comportement agressif ou étrange chez certaines créatures.",
        92: "Vous êtes tourmenté par une apparition appartenant à votre passé.",
        96: "Vous êtes soudain affligé par la maladie.",
        100: "Relancez deux fois les dés dans ce tableau. Les deux résultats obtenus se produisent. S’ils sont identiques, faites empirer les choses."
    },

    "Rebondissements majeurs": {
        5: "Tout cela n’était qu’une diversion.",
        10: "Un sombre secret est révélé.",
        15: "Un piège est déclenché.",
        20: "Une supposition se révèle fausse.",
        25: "Une alliance secrète est révélée.",
        30: "Vos actions bénéficient à un ennemi.",
        35: "Quelqu’un revient de façon inopinée.",
        40: "Un ennemi plus dangereux est révélé.",
        45: "L’un de vos ennemis et vous partagez un objectif commun.",
        50: "Une véritable identité est révélée.",
        55: "Vous êtes trahi par une personne de confiance.",
        60: "Vous arrivez trop tard.",
        65: "Le véritable ennemi est révélé.",
        70: "L’ennemi gagne de nouveaux alliés.",
        75: "Un nouveau danger apparaît.",
        80: "Quelqu’un ou quelque-chose disparaît.",
        85: "La vérité d’une relation est révélée.",
        90: "Deux situations qui semblent sans rapport se révèlent être connectées.",
        95: "Des pouvoirs ou des capacités inattendues sont révélées.",
        100: "Relancez deux fois les dés dans ce tableau. Les deux résultats obtenus se produisent. S’ils sont identiques, faites empirer les choses."
    },

    "Rangs de défi": {
        20: "Pénible",
        55: "Dangereux",
        80: "Redoutable",
        93: "Extrême",
        100: "Épique"
    },

    "Subir un Stress": {
        10: "Le désespoir vous submerge.Faites Face à la Désolation.",
        25: "Vous renoncez : Abandonnez votre Vœu(si possible, celui en lien avec votre crise actuelle).",
        50: "Vous cédez à la peur ou à vos pulsions et agissez à l’encontre de vos propres intérêts.",
        100: "Vous persévérez."
    },

    "Subir des Dégâts": {
        10: "Les dégâts sont mortels.Faites Face à la Mort.",
        20: "Vous êtes mourant.Vous devrez parvenir àGuérirdans les deux heures qui suivent, pour ne pasFaire Face à la Mort.",
        35: "Vous tombez inconscient et êtes hors-jeu.Si l’on vous laisse tranquille, vous retrouverez vos esprits dans une heure ou deux. Si vous êtes à la merci d’un ennemi impitoyable, alorsFaites Face à la Mort.",
        50: "Vous êtes sous le choc et vous luttez pour garder conscience.Si vous persistez à agir vigoureusement (en courant ou en vous battant) avant d’avoir eu quelques minutes de répit, alors refaites un jet dans ce tableau (avant de résoudre l’action suivante) et appliquez le résultat obtenu.",
        100: "Vous êtes tuméfié mais toujours debout."
    },

    "Payer le Prix": {
        1: "Refaites un jet et appliquez son résultat mais en pire.Si vous obtenez deux fois le même résultat, visualisez quelque-chose de terrible qui change le cours de votre quête (en cas de doute,Consultez l’Oracle) et faites-le se produire.",
        2: "Refaites un jet et appliquez son résultat mais en pire.Si vous obtenez deux fois le même résultat, visualisez quelque-chose de terrible qui change le cours de votre quête (en cas de doute,Consultez l’Oracle) et faites-le se produire.",
        3: "Une personne ou une communauté en laquelle vous aviez confiance perd sa foi en vous ou œuvre contre vous.",
        4: "Une personne ou une communauté en laquelle vous aviez confiance perd sa foi en vous ou œuvre contre vous.",
        5: "Une personne ou une communauté en laquelle vous aviez confiance perd sa foi en vous ou œuvre contre vous.",
        6: "Une personne ou une communauté qui vous tient à cœur est exposée au danger.",
        7: "Une personne ou une communauté qui vous tient à cœur est exposée au danger.",
        8: "Une personne ou une communauté qui vous tient à cœur est exposée au danger.",
        9: "Une personne ou une communauté qui vous tient à cœur est exposée au danger.",
        10: "Quelque-chose de valeur est perdu ou détruit.",
        11: "Quelque-chose de valeur est perdu ou détruit.",
        12: "Quelque-chose de valeur est perdu ou détruit.",
        13: "Quelque-chose de valeur est perdu ou détruit.",
        14: "Quelque-chose de valeur est perdu ou détruit.",
        15: "Quelque-chose de valeur est perdu ou détruit.",
        16: "Quelque-chose de valeur est perdu ou détruit.",
        17: "Vous êtes séparé de quelque-chose ou de quelqu’un.",
        18: "Vous êtes séparé de quelque-chose ou de quelqu’un.",
        19: "Vous êtes séparé de quelque-chose ou de quelqu’un.",
        20: "Vous êtes séparé de quelque-chose ou de quelqu’un.",
        21: "Vous êtes séparé de quelque-chose ou de quelqu’un.",
        22: "Vous êtes séparé de quelque-chose ou de quelqu’un.",
        23: "Vous êtes séparé de quelque-chose ou de quelqu’un.",
        24: "Vous êtes séparé de quelque-chose ou de quelqu’un.",
        25: "Quelque-chose de valeur est perdu ou détruit.",
        26: "Quelque-chose de valeur est perdu ou détruit.",
        27: "Quelque-chose de valeur est perdu ou détruit.",
        28: "Quelque-chose de valeur est perdu ou détruit.",
        29: "Quelque-chose de valeur est perdu ou détruit.",
        30: "Quelque-chose de valeur est perdu ou détruit.",
        31: "Quelque-chose de valeur est perdu ou détruit.",
        32: "Quelque-chose de valeur est perdu ou détruit.",
        33: "La situation actuelle se met à empirer.",
        34: "La situation actuelle se met à empirer.",
        35: "La situation actuelle se met à empirer.",
        36: "La situation actuelle se met à empirer.",
        37: "La situation actuelle se met à empirer.",
        38: "La situation actuelle se met à empirer.",
        39: "La situation actuelle se met à empirer.",
        40: "La situation actuelle se met à empirer.",
        41: "La situation actuelle se met à empirer.",
        42: "Un nouveau danger ou un nouvel ennemi se révèle.",
        43: "Un nouveau danger ou un nouvel ennemi se révèle.",
        44: "Un nouveau danger ou un nouvel ennemi se révèle.",
        45: "Un nouveau danger ou un nouvel ennemi se révèle.",
        46: "Un nouveau danger ou un nouvel ennemi se révèle.",
        47: "Un nouveau danger ou un nouvel ennemi se révèle.",
        48: "Un nouveau danger ou un nouvel ennemi se révèle.",
        49: "Un nouveau danger ou un nouvel ennemi se révèle.",
        50: "Un nouveau danger ou un nouvel ennemi se révèle.",
        51: "Cela vous demande un délai ou vous impose un désavantage.",
        52: "Cela vous demande un délai ou vous impose un désavantage.",
        53: "Cela vous demande un délai ou vous impose un désavantage.",
        54: "Cela vous demande un délai ou vous impose un désavantage.",
        55: "Cela vous demande un délai ou vous impose un désavantage.",
        56: "Cela vous demande un délai ou vous impose un désavantage.",
        57: "Cela vous demande un délai ou vous impose un désavantage.",
        58: "Cela vous demande un délai ou vous impose un désavantage.",
        59: "Cela vous demande un délai ou vous impose un désavantage.",
        60: "C’est nocif.",
        61: "C’est nocif.",
        62: "C’est nocif.",
        63: "C’est nocif.",
        64: "C’est nocif.",
        65: "C’est nocif.",
        66: "C’est nocif.",
        67: "C’est nocif.",
        68: "C’est nocif.",
        77: "C’est stressant.",
        85: "Un développement surprenant complique votre quête.C’est troublant ou cela vous demande d’agir contre vos instincts: Vous subissez une pénalité d’esprit.",
        90: "C’est un gaspillage de ressources.",
        94: "Cela vous force a agir à l’encontre de vos intérêt.Un rebondissement ou une nouvelle menace complique votre quête actuelle.",
        98: "Un ami, un compagnon ou un allié est mis en danger(ou vous-même, si vous êtes seul).",
        100: "Refaites un jet dans ce tableau.Les deux résultats s’appliquent. Si vous obtenez deux fois le même, alors faites-le empirer."
    },

};