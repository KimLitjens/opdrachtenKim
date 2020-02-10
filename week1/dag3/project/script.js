// naam vragen
name = prompt('Wat is je naam?', );

// begroeting
alert('Hoi ' + name);

// zelf nummer ingeven. 
smallestNum = parseInt(prompt('Voer hier het kleinste getal in:'));
biggestNum = parseInt(prompt('Voer hier het grootste nummer in:'));

for(;smallestNum >= biggestNum;) {
    biggestNum = parseInt(prompt('Dit nummer moet groter zijn dan: ' + smallestNum));
}

//nummer vragen
numberPlayer = parseInt(prompt('Voer een nummer in van ' + smallestNum + ' t/m ' + biggestNum + ' om te beginnen met raden. Je krijgt maximaal 5 pogingen',));
console.log(numberPlayer);

//nummer generator
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
const numberInput = getRandomInt(smallestNum, biggestNum - 1);
console.log(numberInput);
//const numberComputer = getRandomInt(0,27);
//console.log(numberComputer);

if(numberInput === numberPlayer) {
    alert('Gefeliciteerd je hebt gewonnen!');
    alert('Dag ' + name + '. Tot de volgende keer');
}
var i = 4
for(i ;numberInput !== numberPlayer; i--) {
    const input = parseInt(prompt('Dat is niet correct, probeer het nog een keer. Je hebt nog ' + i + ' pogingen over'));
    if(input === numberInput)  {
        alert('Gefeliciteerd je hebt gewonnen!');
        alert('Dag ' + name + '. Tot de volgende keer');
        break;
    }
    if( i === 1) {
        alert('Helaas niet gelukt, volgende keer beter');
        break;
    } 
}



    
