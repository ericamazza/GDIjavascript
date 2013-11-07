// one penny is 2.5 grams
// one quarter is 5.67 grams

function calculatePennies(){
var pennyWeight = 2.5;
var totalPennies = pennyWeight * 50;

alert("50 pennies weighs " + totalPennies + " grams");

}

function calculateQuarters(){
var quarterWeight = 5.67;
var totalQuarters = quarterWeight * 50;

alert("50 quarters weighs " + totalQuarters + " grams")

}


// what I wish I could do with this...
// write one function that accepts the class of the button to determine how much to multiply
// and then...
// somehow give the user the option to input how many quarters or pennies they want to find the weight of