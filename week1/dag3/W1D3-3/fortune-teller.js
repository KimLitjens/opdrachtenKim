function tellFortune(numberChildren, partnerName, geographicLocation, jobTitle) {
    return('You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partnerName + ' with ' + numberChildren + ' kids.')
}

console.log(tellFortune(4, 'Henk', 'Ede', 'Policeman'))
console.log(tellFortune(2, 'Clara', 'Sneek', 'teacher'))
console.log(tellFortune(5, 'Celine', 'Amsterdam', 'shop owner'))