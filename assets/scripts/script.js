let mangas = [{
    name : "Great Teacher Onizuka",
    editor : "Kazé",
    year : "2004",
    categories : ["comedy", "drama"],
    synopsis : "Un jeune enseignant de lycée, ancien voyou, se retrouve responsable d'une classe particulièrement difficile dont les élèves ne respectent plus aucun professeur.",
    thumbnailSrc : "assets/images/great-teacher-onizuka.webp",
    },
    {name : "Hunter X Hunter",
    editor : "Dybex",
    year : "2011",
    categories : ["action", "aventure", "drame", "fantasy"],
    synopsis : "Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter.",
    thumbnailSrc : "assets/images/hunter-hunter.webp",
    },
    {name : "Elfen lied (VOSTFR)",
    editor : "Kazé",
    year : "2007",
    categories : ["horreur", "fantastique", "action", "drame"],
    synopsis : "Lucy, une diclonius, arrive à s'échapper du laboratoire en massacrant les gardes avant d'être touchée à la tête par un sniper, ce qui la précipite dans l'océan. Le lendemain, Kota découvre une jeune fille ayant perdu la mémoire, il le surnome Nyu car s'est le seule mot qu'elle sait dire.",
    thumbnailSrc : "assets/images/elfen-lied.webp",
    },
    {name : "Assasination classroom",
    editor : "Anime Digital Network",
    year : "2015",
    categories : ["action", "comédie", "drame"],
    synopsis : "Koro Sensei devient enseignant de la classe 3-E de l'école de Kunugigaoka. Après avoir détruit la Lune et promis de faire exploser la Terre, ses élèves tentent de l'arrêter. Unis par un lien mystérieux, ils ont un an pour achever leur mission.",
    thumbnailSrc : "assets/images/assassination-classroom.webp",
    },
    {name : "Psycho Pass",
    editor : "Netflix",
    year : "2019",
    categories : ["science-fiction", "thriller", "dystopie", "cyberpunk"],
    synopsis : "Au XXIIe siècle, le Japon a mis en place le Système Sibyl. Ce processus détecte le niveau de criminalité qui sommeille en chaque citoyen, permettant ainsi de prévenir la moindre menace pour la société.",
    thumbnailSrc : "assets/images/psycho-pass.webp",
    },
    {name : "Mai-Hime (VOSTFR)",
    editor : "Beez Entertainment",
    year : "2004",
    categories : ["action", "fantasy", "comédie romantique", "magical girl"],
    synopsis : "Tokiha Mai et son jeune frère malade Takumi viennent d'être transférés à la prestigieuse école privée de Fuuka Gakuen. Pendant leur traversée en ferry pour se rendre à l'école, celui-ci devient un véritable champ de bataille entre 2 jeunes filles possédant des pouvoirs surnaturels.",
    thumbnailSrc : "assets/images/mai-hime.webp",
    },
    {name : "Kiba (VOSTFR)",
    editor : "Kaze",
    year : "2006",
    categories : ["action", "fantasy"],
    synopsis : "Zed, un adolescent aspirant à la liberté, rejette les règles de sa ville étouffante. Son professeur suggère qu'il pourrait devenir un « Shard Caster » indésirable, mais une porte inter-dimensionnelle s'ouvre devant lui, le transportant à Tempura. Dans ce monde parallèle, les Shard Casters utilisent des cristaux et des Spirit Shards pour combattre. Alors que Zed explore ses nouveaux pouvoirs, des tensions éclatent entre Tempura et les nations voisines, annonçant une imminente guerre.",
    thumbnailSrc : "assets/images/kiba.webp",
    },    
    {name : "Tokyo Ghoul",
    editor : "Wakanim",
    year : "2014",
    categories : ["Action", "fantastique", "drame", "psychologie", "horreur"],
    synopsis : "Dans la ville de Tokyo, des créatures nommées goules sont apparues et se nourrissent de chair humaine pour survivre. Un jour, Ken Kaneki, jeune étudiant, se fait attaquer par l'une d'entre elles et subit une grave blessure.",
    thumbnailSrc : "assets/images/tokyo-ghoul.webp",
    },
    {name : "Bastard!!",
    editor : "Netflix",
    year : "2022",
    categories : ["fantasy", "action", "aventure", "comédie", "ecchi"],
    synopsis : "Attaquée par une grande armée composée de magiciens, de Trolls et d'Orcs, la forteresse de MetaLicana est au bord de la destruction. Il ne leur reste qu'une seule solution : réveiller Dark Schneider, magicien légendaire et invincible, prisonnier dans le corps d'un enfant. Solution qui apportera pas mal de soucis puisque Dark Schneider était le chef de l'armée adverse !",
    thumbnailSrc : "assets/images/bastard!!.webp",
    },
    {name : "Yu yu hakusho",
    editor : "Dybex",
    year : "1992",
    categories : ["action", "aventure", "comédie", "drame", "fantasy", "horreur/épouvante", "mystère", "nekketsu", "surnaturel"],
    synopsis : "Yusuke Urameshi est un jeune vaurien de 14 ans. Il va pourtant sauver la vie d'un petit garçon et se faire écraser... Il y laisse sa vie. Pourtant, sa mort, imprévue, pose problème à Enma Jr, le fils du Juge des Enfers. Il décide alors de lui faire passer un test, pour juger de ses qualités. S'il réussit ce test, il pourra ressusciter et deviendra un détective du monde des esprits, afin de combattre avec son guide spirituel Botan, tous les démons trouvés sur Terre pour y faire du mal.",
    thumbnailSrc : "assets/images/yu-yu-hakusho.webp",
    },
];
        
function GenerateCards(){
    mangas.forEach(element => {
        let section = document.getElementById("collectionSection"); // <=== plusieur noms de variables peuvent être améliorés.
        let article = document.createElement("article");
        let thumbnail = document.createElement("img");
        let texte = document.createElement("section")
        let ulCategories = document.createElement("ul");
        let liCategorie;
        let hgroup = document.createElement("hgroup")
        let name = document.createElement("h2");
        let edition = document.createElement("p");
        let synopsis = document.createElement("p");

        article.classList.add("card");
        thumbnail.classList.add("card-thumbnail");
        texte.classList.add("card-textContent")
        ulCategories.classList.add("card-textContent-categoriesList"); 
        hgroup.classList.add("card-textContent-titleGroup")     
        name.classList.add("card-textContent-titleGroup-title");
        edition.classList.add("card-textContent-titleGroup-editionInfos");
        synopsis.classList.add("card-textContent-synopsis");

        section.appendChild(article);
            article.appendChild(thumbnail);
            thumbnail.setAttribute("src", element.thumbnailSrc);
            article.appendChild(texte);
                texte.appendChild(ulCategories);

                        element.categories.forEach(item => {
                            liCategorie = document.createElement("li");
                            liCategorie.classList.add("card-textContent-categoriesList-item");
                            liCategorie.setAttribute('data-categori', item)
                            liCategorie.appendChild(document.createTextNode(item));
                            ulCategories.appendChild(liCategorie);
                        })
                texte.appendChild(hgroup);
                    hgroup.appendChild(name);
                        name.appendChild(document.createTextNode(element.name));
                    hgroup.appendChild(edition);
                        edition.appendChild(document.createTextNode(element.editor + ", " + element.year));
                texte.appendChild(synopsis);
                    synopsis.appendChild(document.createTextNode(element.synopsis));

    })
}
GenerateCards();

function selectCategory(){
    let categoryItem
}