/*MakeSandwich with 
    Get one slice of bread.
    Add with.
    Put a slice of bread on typeof.

    */
   //hier declareer ik de functie:
function MakeSandwich (filling) {
    console.log('Get one slice of bread');
    console.log('Add', filling);
    console.log('Put a slice of bread on top');
}
//hier call ik de functie
MakeSandwich('cheeses')
MakeSandwich('chicken')


function calculateDiscountedPrice1 (totalAmount, discount) {
    return Math.round(totalAmount - discount);
}

console.log(calculateDiscountedPrice1(100, 3.8));

function calculateDiscountedPrice (totalAmount, discount) {
    if(totalAmount > 25) {return Math.round(totalAmount - discount);}
    else { return totalAmount}
}

console.log(calculateDiscountedPrice(26, 3))