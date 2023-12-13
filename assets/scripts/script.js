let mangas = [{
    name : "Great Teacher Onizuka",
    editor : "Kazé",
    year : "2004",
    categories : ["comedy", "drama"],
    synopsis : "Un jeune enseignant de lycée, ancien voyou, se retrouve responsable d'une classe particulièrement difficile dont les élèves ne respectent plus aucun professeur.",
    thumbnailSrc : "",
    },
    {name : "Hunter X Hunter",
    editor : "Dybex",
    year : "2011",
    categories : ["action", "aventure", "drame", "fantasy"],
    synopsis : "Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter.",
    thumbnailSrc : "",
    },
    {name : "Elfen lied (VOSTFR)",
    editor : "Kazé",
    year : "2007",
    categories : ["horreur", "fantastique", "action", "drame"],
    synopsis : "Lucy, une diclonius, arrive à s'échapper du laboratoire en massacrant les gardes avant d'être touchée à la tête par un sniper, ce qui la précipite dans l'océan. Le lendemain, Kota découvre une jeune fille ayant perdu la mémoire, il le surnome Nyu car s'est le seule mot qu'elle sait dire.",
    thumbnailSrc : "",
    },
    {name : "Assasination classroom",
    editor : "Anime Digital Network",
    year : "2015",
    categories : ["Action", "comédie", "drame"],
    synopsis : "Koro Sensei devient enseignant de la classe 3-E de l'école de Kunugigaoka. Après avoir détruit la Lune et promis de faire exploser la Terre, ses élèves tentent de l'arrêter. Unis par un lien mystérieux, ils ont un an pour achever leur mission.",
    thumbnailSrc : "",
    },
    {name : "Psycho Pass",
    editor : "Netflix",
    year : "2019",
    categories : ["science-fiction", "thriller", "dystopie", "cyberpunk"],
    synopsis : "Au XXIIe siècle, le Japon a mis en place le Système Sibyl. Ce processus détecte le niveau de criminalité qui sommeille en chaque citoyen, permettant ainsi de prévenir la moindre menace pour la société.",
    thumbnailSrc : "",
    },
    {name : "Mai-Hime (VOSTFR)",
    editor : "Beez Entertainment",
    year : "2004",
    categories : ["action", "fantasy", "comédie romantique", "magical girl"],
    synopsis : "Tokiha Mai et son jeune frère malade Takumi viennent d'être transférés à la prestigieuse école privée de Fuuka Gakuen. Pendant leur traversée en ferry pour se rendre à l'école, celui-ci devient un véritable champ de bataille entre 2 jeunes filles possédant des pouvoirs surnaturels.",
    thumbnailSrc : "",
    },
    {name : "Kiba (VOSTFR)",
    editor : "Kaze",
    year : "2006",
    categories : ["action", "fantasy"],
    synopsis : "Zed, un adolescent aspirant à la liberté, rejette les règles de sa ville étouffante. Son professeur suggère qu'il pourrait devenir un « Shard Caster » indésirable, mais une porte inter-dimensionnelle s'ouvre devant lui, le transportant à Tempura. Dans ce monde parallèle, les Shard Casters utilisent des cristaux et des Spirit Shards pour combattre. Alors que Zed explore ses nouveaux pouvoirs, des tensions éclatent entre Tempura et les nations voisines, annonçant une imminente guerre.",
    thumbnailSrc : "",
    },    
    {name : "Tokyo Ghoul",
    editor : "Wakanim",
    year : "2014",
    categories : ["Action", "fantastique", "drame", "psychologie", "horreur"],
    synopsis : "Dans la ville de Tokyo, des créatures nommées goules sont apparues et se nourrissent de chair humaine pour survivre. Un jour, Ken Kaneki, jeune étudiant, se fait attaquer par l'une d'entre elles et subit une grave blessure.",
    thumbnailSrc : "",
    },
    // {name : "",
    // editor : "",
    // year : "",
    // categories : [""],
    // synopsis : "",
    // thumbnailSrc : "",
    // },
    // {name : "",
    // editor : "",
    // year : "",
    // categories : [""],
    // synopsis : "",
    // thumbnailSrc : "",
    // },
];
        
function GenerateCards(){
    mangas.forEach(element => {
        let section = document.getElementById("collectionSection");
        let article = document.createElement("article");
        let thumbnail = document.createElement("img");
        let ulCategories = document.createElement("ul");
        let liCategorie = document.createElement("li");
        let name = document.createElement("h2");
        let edition = document.createElement("p");
        let synopsis = document.createElement("p");

        article.classList.add("card");
        thumbnail.classList.add("card-thumbnail");
        ulCategories.classList.add("card-categoriesList");
        liCategorie.classList.add("card-categoriesList-item");
        name.classList.add("card-title");
        edition.classList.add("card-editionInfos");
        synopsis.classList.add("card-synopsis");

        section.appendChild(article);
            article.appendChild(thumbnail);
            thumbnail.setAttribute("src", element.thumbnailSrc);
            article.appendChild(ulCategories);
                // ulCategories.appendChild(liCategorie);

                    // liCategorie.appendChild(document.createTextNode(element.categories)); // <===== for each ???

            article.appendChild(name);
                name.appendChild(document.createTextNode(element.name));
            article.appendChild(edition);
                edition.appendChild(document.createTextNode(element.editor + ", " + element.year));
            article.appendChild(synopsis);
                synopsis.appendChild(document.createTextNode(element.synopsis));

    })
}
GenerateCards();