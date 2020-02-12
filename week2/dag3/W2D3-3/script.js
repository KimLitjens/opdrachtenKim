
//Opdracht A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]

    const findSpiderMan = function (array) {
        return array.find(function (superhero){
            return superhero.name === "Spiderman"
        })
    }
    console.log(findSpiderMan(superheroes)) 


console.log(superheroes.find(function (superhero) {
    return superhero.name === "Spiderman"
}))

//Opdracht B

const doubleArrayValues = function(array) {
    const newArray = [];
    array.forEach(henk => {
      newArray.push(henk * 2);
    });
    return newArray;
  };

console.log(doubleArrayValues([1, 2, 3]))


const doubleArrayValuesShortHand = function(x) {
    return x.map(n => n * 2);
  }

  console.log(doubleArrayValuesShortHand([4, 1, 1, 1, 4]));

// Opdracht C
const containsNumberBiggerThan10 = function (array) {
    return array.some(function (x) {
        return x > 10;
    }
   )
};

const containsNumberBiggerThan10SH = arraySH =>  arraySH.some(x => x > 10);

 console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
 console.log(containsNumberBiggerThan10SH([1, 4, 3, 6, 9, 7, 11]));

// Opdracht D

 const isItalyInTheGreat7some = array => array.some(x => x === 'Italy');
 const isItalyInTheGreat7 = array => array.includes("Italy");
 console.log(
     "Italy is aanwezig: ",
     isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
 )
  console.log(
     "Italy is aanwezig: ",
     isItalyInTheGreat7some(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
 )

// Opdracht E:
const tenfold =  bart => {
    const tentimes = [];
    bart.forEach(dirk => {
        tentimes.push(dirk * 10)
    });
    return tentimes;
}
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))

// Opdracht F:

const isBelow100 = below100 => below100.every(x => x < 100)


console.log("Every number is below 100: ",
isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))


// Opdrach G Bonus:
const bigSum = items => items.reduce((currentTotal, items) =>  items + currentTotal, 0)

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))


