const age = 23;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 11;


if(age >= 18) {
    console.log(
        "Come on in"
    )} else {console.log(
        "Please go home"
)};

if(isFemale) {
    console.log(
        "Come on in pretty women"
    )}
    else {console.log(
        "Sorry, lady's only")};

if(driverStatus === "bob") {
    console.log(
        "Yeah, you can drive home"
    )}
    else {console.log(
        "Sorry can't let you drive home, please find your Bob")};

if( age >= 18 && age <= 25) {
    console.log(
        "You get 50% discount"
    )};

if( name === "Bram" || name === "Sarah") {
    console.log(
        "It is your lucky day, you get a free beer"
    )};

if(totalAmount > 25 && totalAmount <= 50) {
    console.log(
        "You get some free 'bitterballen' "
    )} 
    else if(totalAmount >50 && totalAmount <100) {
        console.log(
            "you get some free nachosssss"
        )}
    else if(totalAmount >= 100) {
        console.log(
            "You get a free bottle of Champagne"
        )};
