const Modele = {
    profil: {
        nom: "Amine Ksantini",
        titre: "Cybersécurité & Administration Réseau",
        bio: "Je m’appelle Amine Ksantini, étudiant en 2ᵉ année de BUT Informatique, parcours B Déploiement d'applications communicantes & sécurisées, à l’Université Paris-Saclay. Je suis actuellement à la recherche d’un stage en cybersécurité d’une durée de 12 semaines, du 20 avril au 10 juillet 2026, afin d’approfondir mes compétences dans ce domaine en constante évolution et de valider ma deuxième année de BUT.",
        email: "aminekst91@gmail.com",
        telephone: "07.69.96.47.40",
        linkedin: "http://www.linkedin.com/in/amine-ksantini-0b63a6395",
        github: "https://github.com/amine-ksantini",
        permis: "Permis B (Véhiculé)",
        cvPath: "documents/CV_Stage.pdf", 
        personnel: {
            sports: ["Musculation (pratique quotidienne)", "Football", "Basketball"],
            voyages: ["Thaïlande", "Qatar", "Guadeloupe", "Italie", "Espagne", "Belgique", "Pays-Bas", "Maroc", "Algérie", "Tunisie", "Turquie"],
            qualites: ["Rigueur analytique", "Esprit d'équipe", "Capacité d'adaptation", "Curiosité technique"]
        }
    },
    experiences: [
        { 
            id: "exp1", 
            poste: "Équipier de vente", 
            entreprise: "Carrefour", 
            type: "CDD",
            date: "Avril 2025 - Juin 2025 (3 mois)", 
            lieu: "Athis-Mons, Île-de-France (Sur site)",
            description: "Accueil et conseil aux clients, mise en rayon et gestion des stocks. Participation à l’entretien du point de vente et au bon déroulement des opérations commerciales. Travail en équipe pour assurer la satisfaction client et la bonne tenue du magasin.",
            competences: ["Travail d’équipe", "Service client", "Gestion des stocks"]
        },
        { 
            id: "exp2", 
            poste: "Convoyeur de véhicules", 
            entreprise: "AJ-GROUP", 
            type: "CDD",
            date: "Juin 2024 - Sept. 2024 (4 mois)", 
            lieu: "France (Hybride)",
            description: "Transport et livraison de véhicules entre différents sites dans le respect des délais et des consignes de sécurité. Réalisation des contrôles de base avant et après chaque déplacement. Sens des responsabilités et rigueur dans la conduite.",
            competences: ["Ponctualité", "Sens des responsabilités", "Rigueur", "Autonomie"]
        },
        { 
            id: "exp3", 
            poste: "Manutentionnaire entrepôt", 
            entreprise: "GXO Logistics, Inc.", 
            type: "Intérimaire",
            date: "Juin 2023 - Juil. 2023 (2 mois)", 
            lieu: "Le Coudray-Montceaux, Île-de-France (Sur site)",
            description: "Préparation et emballage des commandes selon les procédures internes. Gestion et organisation des produits dans l’entrepôt pour assurer un flux logistique efficace. Respect des délais et des normes de sécurité.",
            competences: ["Rapidité d’exécution", "Organisation logistique", "Respect des normes"]
        }
    ],

    competences: [
        {
            categorie: "Développement & Web",
            items: [
                "Langages de programmation : Java (IHM avec JavaFX), Python, Langage C (bases langage et systèmes : redirections, gestion de tube, sémaphore).",
                "Langages pour le Web : HTML, CSS, PHP, JavaEE (JSP, Servlet), Javascript (AJAX).",
                "Langages de programmation Mobile : Android (natif)."
            ]
        },
        {
            categorie: "Systèmes, Réseaux & Virtualisation",
            items: [
                "Systèmes d'exploitation : Windows, Linux (DEBIAN, CentOS) avec notions d'administration bas niveau (noyau, module, composants hardware, release, versioning, démarrage systemd), écriture de scripts, bash.",
                "Administration réseaux : éléments d'administration réseau sous Linux (CentOS et Debian), ssh (exploitation et mise en place tunnel sécurisé), Apache, Tomcat.",
                "Architecture réseaux : LAN (protocoles de la suite TCP/IP), WAN (notions), paramétrage IP et installations système linux, serveur web, API Java Network.",
                "Virtualisation : Utilisation et paramétrage hyperviseur (type 1 et 2), gestion par conteneur (Docker), virtualisation réseau (GNS3).",
                "Découverte du Raspberry Pi : administration système et réseau, mise en place de sécurité basique sur ssh, utilisation des Rpi à distance, mise en place d'une architecture monolithique web/mysql."
            ]
        },
        {
            categorie: "Bases de Données & Données Scientifiques",
            items: [
                "Système de gestion de bases de données : Oracle, MySql.",
                "Langages pour les bases de données : SQL, PL/SQL.",
                "Langages de structuration de données : Modèle relationnel, XML/JSON.",
                "Développement d'interfaces pour bases de données : JDBC, Python.",
                "Logiciel scientifique : Initiation au langage R et gestions de données, simulations et applications aux calculs de probabilités, méthodes de régressions."
            ]
        },
        {
            categorie: "Outils, Modélisation & Méthodologies",
            items: [
                "Environnement de test : Tests unitaires avec unittest (Python), JUnit (Java).",
                "Environnements de développement : IntelliJ (phpstorm, pycharm, android-studio, ultimate), NetBeans, Notepad++.",
                "Gestion de version décentralisée : Git et forge (gitlab, github, bitbucket).",
                "Logiciels et Langages de modélisation : UML, Power AMC, StarUML.",
                "Gestion de projet informatique : planification, calcul de charges, gestion de risques, méthodes agiles.",
                "Logiciel bureautique : OpenOffice et/ou LibreOffice, Rédaction de documentation avec Markdown."
            ]
        }
    ],

    projetsParSemestre: {
        "Semestre 1 (S1)" : [
            {
                id: "artefacts",
                titre: "Jeu de Collecte d'Artefacts",
                image: "images/jeu_artefacts.png",
                resume: "Un jeu de grille interactif développé en C++ pour collecter des artefacts uniques dans un environnement contraint.",
                descriptionDetailed: {
                    contexte: "Ce projet a été réalisé dans le cadre de la SAE 1.01 (Implémentation) et 1.02 (Comparaison d'algorithmes) du BUT Informatique.",
                    objectifs: "Concevoir un jeu de grille 10x10 où un collectionneur doit ramasser trois artefacts spécifiques tout en évitant les murs.",
                    fonctionnalites: "Déplacement du collectionneur (Z, Q, S, D), vérification des contraintes de déplacement, gestion de l'unicité des artefacts collectés, et lecture d'une configuration de niveau depuis un fichier texte.",
                    implementation: "Développement en C++ orienté objet (Classes : Collector, Artifact, Grid, Wall). Gestion dynamique de la mémoire (new/delete) et manipulation de fichiers d'entrée/sortie.",
                    technos: ["C++", "Algorithmique", "Programmation Orientée Objet", "Gestion Mémoire dynamique", "Logique de Jeu"]
                }
            }, 

            {
                id: "traitement_image",
                titre: "Logiciel de Traitement d'Images",
                resume: "Outil C++ d'édition et d'application de filtres mathématiques sur des images (matrices) au format PPM.",
                
                descriptionDetailed: {
                    contexte: "Projet d'algorithmique avancée développé en C++ lors du Semestre 1. L'objectif était de manipuler des données brutes sans utiliser de bibliothèques externes dédiées à l'image.",
                    objectifs: "Concevoir et implémenter une classe Image robuste pour charger, modifier mathématiquement, et sauvegarder des images au format ASCII PPM via la manipulation de vecteurs 2D (RGB).",
                    fonctionnalites: "Gestion colorimétrique (niveaux de gris, seuillage noir & blanc, luminosité, contraste), transformations géométriques (rotations, symétries, redimensionnement) et application de filtres de convolution (ex: détection de contours avec filtres de Sobel X et Y).",
                    implementation: "Programmation Orientée Objet en C++. Utilisation intensive de la Standard Template Library (vector, string) et gestion fine des flux de lecture/écriture (ifstream, ofstream). Calcul matriciel pour l'application des masques de convolution.",
                    technos: ["C++", "Algorithmique matricielle", "Mathématiques", "Filtres de convolution", "Flux de fichiers"]
                }
            },

           {
                id: "moteur_jeu_sdl2",
                titre: "Moteur de Jeu 2D (C++ / SDL2)",
                image: "images/moteur_jeu.png", // Pensez à ajouter une capture d'écran du jeu dans le dossier "images"
                resume: "Conception from-scratch d'un moteur de jeu d'aventure 2D et de son rendu graphique avec la bibliothèque SDL2.",
                
                descriptionDetailed: {
                    contexte: "Ce projet de fin de semestre visait à appliquer les concepts de la Programmation Orientée Objet pour créer une architecture logicielle interactive complète, capable de faire tourner un jeu vidéo en 2D.",
                    objectifs: "Développer un moteur de jeu modulaire (Game Engine) gérant le rendu à l'écran, la boucle de jeu temporelle, les entrées utilisateur (clavier/souris) et la physique basique du monde (collisions).",
                    fonctionnalites: "Rendu graphique par système de tuiles (Tilemapping), chargement dynamique des niveaux depuis des fichiers textes (niveau1.txt), gestion des entités interactives (Personnage, Coffres, Objets) et système d'états (Game Over, Victoire).",
                    implementation: "Programmation C++ fortement orientée objet (Classes : Moteur, Niveau, Personnage, Tuile...). Encapsulation propre de la bibliothèque externe SDL2 (SDL2_image) pour gérer les textures, les fenêtres et l'affichage fluide des sprites (assets).",
                    technos: ["C++", "Bibliothèque SDL2", "Programmation Orientée Objet", "Game Loop", "Tilemapping 2D"]
                }
            }
        ],

        "Semestre 2 (S2)" : [
            {
                id: "microprocesseur",
                titre: "Architecture d'un Microprocesseur",
                resume: "Conception du circuit logique d'un microprocesseur 16 bits et développement d'algorithmes en Assembleur personnalisé.", //
                
                descriptionDetailed: {
                    contexte: "Ce projet a été réalisé dans le cadre du module R204 (Communication et fonctionnement bas niveau) lors du Semestre 2 de BUT.", //
                    objectifs: "Comprendre et modéliser le fonctionnement interne d'un ordinateur en concevant un processeur 16 bits doté de son propre jeu d'instructions (ALU, multiplexeurs, registres).", //
                    fonctionnalites: "Création d'un jeu d'instructions sur mesure (LOADA, JMP conditionnels, etc.) et développement de programmes bas niveau testés sur l'architecture, tels que la détection de palindromes et la conversion de texte en majuscules.", //
                    implementation: "Modélisation complète du circuit numérique avec le logiciel Logisim. Écriture, assemblage et exécution du code Assembleur au sein d'un environnement émulé sous DOSBox.", //
                    technos: ["Assembleur", "Logisim", "Architecture Matérielle", "Logique Numérique", "Bas niveau"]
                }
            }, 

            {
                id: "bdd_jo",
                titre: "Architecture & Exploitation de Base de Données",
                resume: "Conception et exploitation avancée d'une base de données relationnelle pour la gestion des athlètes et résultats des Jeux Olympiques.", // [cite: 1]
                
                descriptionDetailed: {
                    contexte: "Ce projet a été réalisé dans le cadre du module S204 (Exploitation de bases de données) au cours du Semestre 2.", // [cite: 1]
                    objectifs: "Modéliser, créer et administrer une base de données complexe regroupant les informations des délégations (NOC), des athlètes, des disciplines et des médailles olympiques.", // [cite: 1]
                    fonctionnalites: "Développement de vues SQL analytiques (ex: MEDAILLES_ATHLETES), implémentation d'une dizaine de déclencheurs (triggers) pour garantir l'intégrité des données, et création de fonctions/procédures stockées (génération de biographies, ajout dynamique de résultats).", // [cite: 1]
                    implementation: "Écriture complète des scripts de création (DDL) et d'insertion (DML). Programmation avancée en PL/SQL sous Oracle Database pour automatiser le traitement des participations individuelles et en équipe, incluant la génération de formats JSON.", // [cite: 1]
                    technos: ["SQL", "PL/SQL", "Oracle Database", "Procédures Stockées", "Triggers"]
                }
            },

          {
                id: "jo_companion",
                titre: "JO Companion - Application Java",
                image: "images/jo_companion.png", // Pensez à ajouter une capture de l'interface de votre application
                resume: "Application de bureau en Java dotée d'une interface graphique pour la gestion globale des Jeux Olympiques (Athlètes, Épreuves, Médailles).", //
                
                descriptionDetailed: {
                    contexte: "Projet transversal de fin d'année (SAE S2) mêlant Programmation Orientée Objet, création d'IHM (Interfaces Homme-Machine) et analyse de qualité logicielle.", //
                    objectifs: "Concevoir une application logicielle robuste permettant à un utilisateur de gérer les entités complexes des Jeux Olympiques via une interface graphique intuitive.", //
                    fonctionnalites: "Gestion complète (Création, Lecture, Suppression) des athlètes, équipes, épreuves et sessions. Navigation via des menus interactifs. Sauvegarde et restauration persistante des données grâce à la sérialisation.", //
                    implementation: "Développement en Java natif avec une séparation stricte du code selon l'architecture logicielle MVC (Modèles pour les données, Vues pour l'interface graphique, Contrôleurs pour les Listeners/Événements).", //
                    technos: ["Java", "Architecture MVC", "IHM (Interface Graphique)", "Programmation Orientée Objet", "Sérialisation"]
                }
            }
        ],

        "Semestre 3 (S3)" : [
            {
                id: "sae301",
                titre: "Système Centralisé de Répartition (SAE 301)",
                image: "images/sae301.png", // Ajoutez une image (ex: diagramme de déploiement, maquette web ou logo de l'app)
                resume: "Architecture Full-Stack (Web, API PHP, Client Java, MySQL) automatisant la répartition d'étudiants sous contraintes complexes.", //
                
                descriptionDetailed: {
                    contexte: "Projet majeur et transversal du Semestre 3 mobilisant l'ensemble des pôles de l'informatique : recueil des besoins, modélisation de bases de données, développement web, algorithmique avancée et conception orientée objet.", //
                    objectifs: "Concevoir une plateforme complète d'assistance à la création de groupes académiques (TD/TP). L'algorithme devait satisfaire de nombreuses contraintes strictes : homogénéisation des niveaux, équilibrage par genre, types de baccalauréats, et gestion logistique du covoiturage.", //
                    fonctionnalites: "Le système est divisé en plusieurs couches : Une interface Web ergonomique (UI/UX) avec gestion des rôles (RBAC : Étudiants, Professeurs). Une API REST développée en PHP pour faire la passerelle avec la base de données. Enfin, un client lourd développé en Java (connecté via requêtes HTTP à l'API) pour l'exécution des algorithmes de répartition par l'administration.", //
                    implementation: "Modélisation UML exhaustive (cas d'utilisation, classes, déploiement). Serveur sous Apache hébergeant une base MySQL 8.0 et du PHP 8.5. Côté client web, application rigoureuse d'une charte graphique sur-mesure (palette Jade/Turquoise) avec intégration de principes UX modernes.", //
                    technos: [
                        "Java (Client Lourd)", 
                        "PHP (API REST)", 
                        "MySQL 8.0", 
                        "HTML/CSS/JS (UI/UX)", 
                        "Architecture MVC", 
                        "Modélisation UML"
                    ]
                }
            }
        ],

        "Semestre 4 (S4)" : [
            {
                id: "emoji_slither",
                titre: "Emoji Slither - Battle Royale",
                image: "images/emoji_slither.png", //
                resume: "Jeu multijoueur en temps réel de type Battle Royale, développé avec Node.js, Socket.IO et HTML5 Canvas.", //
                
                descriptionDetailed: {
                    contexte: "Projet SAE du Semestre 4 (2026) réalisé en équipe selon les méthodes agiles. L'objectif était de concevoir un jeu multijoueur compétitif capable de supporter plus de 30 joueurs simultanément dans une même arène.", //
                    objectifs: "Créer un jeu de survie compétitif où la zone de jeu se rétrécit. Le projet impliquait la programmation temps réel, la gestion de la concurrence réseau et l'équilibrage du gameplay (Top 5 en temps réel, apparition de coffres et de bonus).", //
                    fonctionnalites: "Architecture client-serveur authoritative pour garantir l'équité, détection de collisions 2D performante, et interfaces utilisateur adaptées pour les joueurs sur ordinateur (écran) et sur mobile.", //
                    implementation: "Développement du backend en Node.js avec Socket.IO pour la communication réseau. Mon rôle au sein de l'équipe s'est spécifiquement concentré sur le Frontend et le rendu graphique via HTML5 Canvas, garantissant la fluidité visuelle de l'action et des animations.", //
                    technos: [
                        "Node.js", 
                        "Socket.IO", 
                        "HTML5 Canvas", 
                        "WebSockets (Temps réel)", 
                        "Architecture Client-Serveur",
                        "Méthode Agile"
                    ] //
                }
            }
        ],

    },
    
    formations: [
        {
            id: "form1",
            etablissement: "IUT d'Orsay - Université Paris-Saclay",
            diplome: "BUT Informatique (2e année)",
            specialite: "Parcours B : Déploiement d'applications communicantes et sécurisées",
            date: "2024 - Présent", // Ajusté logiquement pour la 2e année en 2026
            mention: "En cours"
        },
        {
            id: "form2",
            etablissement: "Lycée Clément Ader, Athis-Mons",
            diplome: "Baccalauréat STI2D",
            specialite: "Option SIN (Systèmes d'Information et Numérique)",
            date: "2022 - 2023",
            mention: "Mention Assez Bien"
        }
    ],
    

    // LA FONCTION MANQUANTE EST ICI : Elle permet au clic de trouver le bon projet
    getProjetById: function(id) {
        for (let semestre in this.projetsParSemestre) {
            let projetTrouve = this.projetsParSemestre[semestre].find(p => p.id === id);
            if (projetTrouve) {
                return projetTrouve;
            }
        }
        return null;
    }
};