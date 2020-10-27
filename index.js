const superHeroes = [{
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
];

let superHeroesNamen = superHeroes.map(item => item.name);
//console.log(superHeroesNamen);
for (let i = 1; i < superHeroesNamen.length; i++) console.log(superHeroesNamen[i]);
//console.log("Hieronder de helden met naam");
let lichteSuperhelden = superHeroes.filter(item => parseInt(item.weight) < 190);
//lichteSuperhelden.forEach(function(item) { console.log(item.name + " " + item.weight) });
let Superhelden200pondNamen = superHeroes.filter(item => parseInt(item.weight) === 200).map(item => item.name);
//Superhelden200pondNamen.forEach(item => console.log(item));
const firstAppearances = superHeroes.filter(item => item.firstAppearance != "");
console.log("aantal first apprearances : " + firstAppearances.length);
const marvelComicsArr = superHeroes.filter(item => item.firstAppearance != "").filter(item => item.publisher === "Marvel Comics");
console.log("aantal Marvel comics " + marvelComicsArr.length);

let totaalGewichten = superHeroes.reduce((totGewicht, item) => {
    if (isNaN(item.weight)) {
        return totGewicht + 0;
    } else return totGewicht + parseInt(item.weight);
}, 0);

console.log("totaal gewicht alle heroes " + totaalGewichten);

totaalGewichten = marvelComicsArr.reduce((totGewicht, item) => {
    if (isNaN(item.weight)) {
        return totGewicht + 0;
    } else return totGewicht + parseInt(item.weight)
}, 0);

console.log("totaal gewicht alle marvel comics heroes " + totaalGewichten);

let sortedMassas = superHeroes.sort(function(a, b) {
    //  console.log('massa a ' + a.weight + ' massa b ' + b.weight);
    if (isNaN(a.weight)) // bij een return wordt de functie afgebroken  
        return -1;
    let gewichtA = parseInt(a.weight);
    var gewichtB = parseInt(b.weight);
    if (gewichtA < gewichtB) {
        return -1;
    }
    if (gewichtA > gewichtB) {
        return 1;
    }
    // weights must be equal
    return 0;
});

//sortedMassas.forEach(item => console.log(item.name + " " + item.weight));
console.log("De zwaarste is " + sortedMassas[sortedMassas.length - 1].name);