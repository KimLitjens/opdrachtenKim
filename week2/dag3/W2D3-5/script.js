const superheroes = [
    {
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
  ]

//1
const namesSuperHeroes = superheroes.map(n => n.name)

console.log("De superhelden heten:", namesSuperHeroes)

//2
const lightSuperHeroes = superheroes.filter(function (x){
    if (x.weight < 190) {
        return x.weight;
}
})
console.log("Deze superhelden wegen minder dan 190 pond: ", lightSuperHeroes)
//3
const heavySuperHeroes = superheroes.filter(function (y) {
    if (y.weight === "200") {
        return y
}
})
const nameHeavySH = heavySuperHeroes.map(n => n.name);

console.log("Deze superhelden wegen 200 pund:", nameHeavySH)

//4
var sLen = superheroes.length;
var nameAndFirstAppearance = [];

for (i = 0; i < sLen; i++) {
  nameAndFirstAppearance.push(superheroes[i].name + " : " + superheroes[i].first_appearance);
}

console.log(nameAndFirstAppearance)

//5 
const DcComicsHeroes = superheroes.filter(function (x){
    if (x.publisher === "DC Comics") {
        return x;
}
})
console.log(DcComicsHeroes)

const MarvelComicsHeroes = superheroes.filter(function (x){
    if (x.publisher === "Marvel Comics") {
        return x;
}
})
console.log(MarvelComicsHeroes)

//6
const weightDcComics = DcComicsHeroes.map(n => n.weight).map(Number)
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(weightDcComics)
console.log(weightDcComics.reduce(reducer));

//7
const weightMarvelComics = MarvelComicsHeroes.map(n => n.weight).map(Number).filter(x =>  x > 0)

console.log(weightMarvelComics)
console.log(weightMarvelComics.reduce(reducer));


