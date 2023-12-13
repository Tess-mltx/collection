let mangas = [{
    name : "Great Teacher Onizuka",
    editorFr : "Kazé",
    yearFr : "2004",
    type : "Shonen",
    genre : ["comedy", "drama"],
    synopsis : "Un jeune enseignant de lycée, ancien voyou, se retrouve responsable d'une classe particulièrement difficile dont les élèves ne respectent plus aucun professeur.",
    //illustration : ,
    },
    {name : "Hunter X Hunter",
    editor : "Dybex",
    year : "2011",
    type : "Shonen",
    genre : ["action", "aventure", "drame", "fantasy"],
    synopsis : "Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter.",
    //illustration : ,
    },
    {name : "Elfen lied (VOSTFR)",
    editor : "Kazé",
    year : "2007",
    type : "Seinen",
    genre : ["horreur", "fantastique", "action", "drame"],
    synopsis : "Lucy, une diclonius, arrive à s'échapper du laboratoire en massacrant les gardes avant d'être touchée à la tête par un sniper, ce qui la précipite dans l'océan. Le lendemain, Kota découvre une jeune fille ayant perdu la mémoire, il le surnome Nyu car s'est le seule mot qu'elle sait dire.",
    //illustration : ,
    },
    {name : "Assasination classroom",
    editor : "Anime Digital Network",
    year : "2015",
    type : "Shonen",
    genre : ["Action", "comédie", "drame"],
    synopsis : "Koro Sensei devient enseignant de la classe 3-E de l'école de Kunugigaoka. Après avoir détruit la Lune et promis de faire exploser la Terre, ses élèves tentent de l'arrêter. Unis par un lien mystérieux, ils ont un an pour achever leur mission.",
    //illustration : ,
    },
    {name : "Psycho Pass",
    editor : "Netflix",
    year : "2019",
    type : "Shonen",
    genre : ["science-fiction", "thriller", "dystopie", "cyberpunk"],
    synopsis : "Au XXIIe siècle, le Japon a mis en place le Système Sibyl. Ce processus détecte le niveau de criminalité qui sommeille en chaque citoyen, permettant ainsi de prévenir la moindre menace pour la société.",
    //illustration : ,
    },
    {name : "Mai-Hime (VOSTFR)",
    editor : "Beez Entertainment",
    year : "2004",
    type : "Shonen",
    genre : ["action", "fantasy", "comédie romantique", "magical girl"],
    synopsis : "Tokiha Mai et son jeune frère malade Takumi viennent d'être transférés à la prestigieuse école privée de Fuuka Gakuen. Pendant leur traversée en ferry pour se rendre à l'école, celui-ci devient un véritable champ de bataille entre 2 jeunes filles possédant des pouvoirs surnaturels.",
    //illustration : ,
    },
    {name : "Kiba (VOSTFR)",
    editor : "Kaze",
    year : "2006",
    type : "Shonen",
    genre : ["action", "fantasy"],
    synopsis : "Zed, un adolescent aspirant à la liberté, rejette les règles de sa ville étouffante. Son professeur suggère qu'il pourrait devenir un « Shard Caster » indésirable, mais une porte inter-dimensionnelle s'ouvre devant lui, le transportant à Tempura. Dans ce monde parallèle, les Shard Casters utilisent des cristaux et des Spirit Shards pour combattre. Alors que Zed explore ses nouveaux pouvoirs, des tensions éclatent entre Tempura et les nations voisines, annonçant une imminente guerre.",
    //illustration : ,
    },    
    {name : "Tokyo Ghoul",
    editor : "Wakanim",
    year : "2014",
    type : "Seinen",
    genre : ["Action", "fantastique", "drame", "psychologie", "horreur"],
    synopsis : "Dans la ville de Tokyo, des créatures nommées goules sont apparues et se nourrissent de chair humaine pour survivre. Un jour, Ken Kaneki, jeune étudiant, se fait attaquer par l'une d'entre elles et subit une grave blessure.",
    //illustration : ,
    },
];
        
function GenerateCards(){
    mangas.forEach(element => {
        let section = document.getElementsByClassName("collectionSection");
        let article = document.createElement("article");
        let picture = document.createElement("img");
        let ulGenre = document.createElement("ul");
        let liGenre = document.createElement("li");
        let spanType = document.createElement("span");
        let name = document.createElement("h2");
        let editor = document.createElement("p");
        let year = document.createElement("p");
        let synopsis = document.createElement("p");




    })
}