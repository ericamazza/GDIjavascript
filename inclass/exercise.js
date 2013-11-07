// age variable
// max age
// est amt per day
// how many would you eat the rest of your life?
// output would say "you will need 4000 twinkies to last you until 99"

function calculate(){
var age = 25;
var maxAge = 100;
var slices = 2;
var daysInYear = 365;

var remainingYears = maxAge - age;
var total =  (daysInYear * slices) * remainingYears;
var format = "you will eat " + total + " slices until the age of " + maxAge;


// alert (format);

// if total > 40,000 print alert

if (total > 40000)
{
alert("wow, that's alot");
}
else
{
alert("that seems reasonable");
}

}




function sayHi(name){
document.write("hi " + name + "! <br>");
document.write("hola ");
}


var name = "susie";
// sayHi(name);




function addNumbers(num1, num2){
var result = num1 + num2;
return result;
}

var sum = addNumbers(5,6)

// document.write(sum)

function subtractNumbers(num3, num4){
var difference = num3	- num4;
return difference;
}

// document.write("the difference is " + subtractNumbers(10,4));









