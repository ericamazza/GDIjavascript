// var x = 0

// while (x < 5) {
// 	console.log(x)
// 	x++
// }

// for (initialize; condition; update) {
    // statements to repeat
// }
         

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// var awesomeAnimals = ['corgies', 'otters', 'octopi']
// awesomeAnimals[1] = 'koalas'
// document.write(awesomeAnimals);

// var emptyArray = [];
// emptyArray.push('erica')
// document.write(emptyArray);

// function calculatePennies(){
// var pennyWeight = 2.5;
// var totalPennies = pennyWeight * 50;

// alert("50 pennies weighs " + totalPennies + " grams");

// }

// function calculateQuarters(){
// var quarterWeight = 5.67;
// var totalQuarters = quarterWeight * 50;

// alert("50 quarters weighs " + totalQuarters + " grams")

// }



function favoriteThings(){

	var listOfFavs = [
		"chocolate",
		"money",
		"pugs"
	];

	var emptyString = "";

	for (var i = 0; i < listOfFavs.length; i++){
		if (i != listOfFavs.length - 1){
			emptyString+= listOfFavs[i] + ", ";
		}
		else {
			emptyString+= "and " + listOfFavs[i]
		}
		
	}

	alert("My favorite things are " + emptyString);


}




function myFriends(){
	var friendArray = [
		{	name: "Molly",
			hair: "brown"
		},
		{	name: "caity",
			hair: "blonde"
		}
	]

for (var i = 0; i < friendArray.length; i++){
	// alert(friendArray[i].name +  " has hair color " + friendArray[i].hair)
}

}


var newImg = document.createElement('img');
newImg.src = 'http://girldevelopit.com/assets/pink-logo.png';
document.body.appendChild(newImg);


































