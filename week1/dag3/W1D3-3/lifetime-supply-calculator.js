function calculateSupply(age, AmountPD) {
    var oldAge = 110;
    var need = (AmountPD * 365) * (oldAge - age);
    var message = 'You will need ' + need + ' cups of tea to last you until the ripe old age of ' + oldAge;
    return(message);
}

console.log(calculateSupply(50, 2))
console.log(calculateSupply(27, 3))
console.log(calculateSupply(32, 5))