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

	var resultDiv = document.getElementById('favoriteThings')

	resultDiv.innerHTML = "My favorite things are " + emptyString

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