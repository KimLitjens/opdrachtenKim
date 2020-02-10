//while
var colors = ['yellow', 'blue', 'red', 'orange'];
var i = 0; 
var myContent = '';

    while (i < colors.length) {
        myContent += colors[i] + " ";
        i++;
    }

    console.log(myContent)
//for
var colors = ['yellow', 'blue', 'red', 'orange'];
var i = 0; 
for (i; i < colors.length; i++) {
    console.log(colors[i])
}
// for each
var colors = ['yellow', 'blue', 'red', 'orange'];
colors.forEach(element => console.log(element));

/*
1. 3
2. 2
3. 1
4. */
var car = {type:"Fiat", model:"500", color:"white", wheels: "4", size:"small"};
console.log(car)

