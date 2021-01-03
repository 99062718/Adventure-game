var button = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3")];
var gameBackground = document.getElementById("game-container");
var title = document.getElementById("title");
var storyDesc = document.getElementById("description");
var currentRoom;
var hasKey = "no";

function hideBtn(num, num2){
	for(i = num; i <= num2; i++){
		document.getElementById("button" + i).style.display = "none";
	}
}

function showBtn(num, num2){
	for(i = num; i <= num2; i++){
		document.getElementById("button" + i).style.display = "inline";
	}
}

function button1Events(){
	switch(currentRoom){
		case "dead":
			titleScreen();
			break;
		case "titleScreen":
			storyRecap();
			break;
		case "storyRecap":
			splitPath();
			break;
		case "splitPath":
			seeHouse();
			break;
		case "seeHouse":
			insideHouse();
			break;
		case "insideHouse":
			fridgeDeath();
			break;
		case "forestPath":
			THECONVENIENCESTORE();
			break;
		case "THE CONVENIENCE STORE":
			storeText();
			break;
	}
}

function button2Events(){
	switch(currentRoom){
		case "splitPath":
			if(hasKey == "no"){
				closedDoor();
			}else{
				openDoor();
			}
			break;
		case "seeHouse":
			splitPath();
			break;
		case "insideHouse":
			seeHouse();
			break;
		case "door":
			splitPath();
			break;
		case "forestPath":
			splitPath();
			break;
	}
}

function button3Events(){
	switch(currentRoom){
		case "splitPath":
			forestPath();
			break;
	}
}

function titleScreen(){
	title.innerHTML = "MATH MARIO 2: ELECTRIC BOOGALOO";
	description.innerHTML = "PLEASE DON'T SUE ME NINTENDO!";
	hideBtn(2, 3);
	document.body.style.backgroundImage = "url('images/MARIOOOO.jpg')";
	button[0].innerHTML = "Start!";
	currentRoom = "titleScreen";
}

function storyRecap(){
	title.innerHTML = "Where the story left off";
	description.innerHTML = "The princes got taken away by the menacing dragon! After defeating the snakes we are close to the dragons realm.";
	document.body.style.backgroundImage = "url('images/dragon.jpg')";
	button[0].innerHTML = "Next";
	currentRoom = "storyRecap";
}

function splitPath(){
	title.innerHTML = "The road splits in 3!";
	description.innerHTML = "Will you go right, left or forward?";
	showBtn(1, 3);
	document.body.style.backgroundImage = "url('images/4way.jpg')";
	button[0].innerHTML = "Right";
	button[1].innerHTML = "Forward";
	button[2].innerHTML = "Left";
	currentRoom = "splitPath";
}

function seeHouse(){
	title.innerHTML = "You see a house in the woods!";
	description.innerHTML = "Will you enter the house or go back?";
	hideBtn(3, 3);
	document.body.style.backgroundImage = "url('images/seeHouse.jpg')";
	button[0].innerHTML = "Enter";
	button[1].innerHTML = "Go back";
	currentRoom = "seeHouse";
}

function insideHouse(){
	title.innerHTML = "The inside of the house looks full of stuff!";
	description.innerHTML = "Maybe take a look around";
	document.body.style.backgroundImage = "url('images/insideHouse.jpg')";
	button[0].innerHTML = "Look inside fridge";
	button[1].innerHTML = "Go back";
	currentRoom = "insideHouse"
}

function fridgeDeath(){
	title.innerHTML = "IT'S A TRAP!"
	description.innerHTML = "The fridge jumps up and eats you!"
	hideBtn(2, 2);
	document.body.style.backgroundImage = "url('images/evilFridge.jpg')";
	button[0].innerHTML = "Back to title screen";
	currentRoom = "dead";
}

function closedDoor(){
	title.innerHTML = "A huge door stands before you!";
	description.innerHTML = "You will need a key to open it";
	hideBtn(1, 3);
	showBtn(2, 2)
	document.body.style.backgroundImage = "url('images/closedDoor.jpg')";
	button[1].innerHTML = "Go back";
	currentRoom = "door";
}

function forestPath(){
	title.innerHTML = "A long path stretches out before you!";
	description.innerHTML = "With more forest around it!";
	hideBtn(3, 3);
	document.body.style.backgroundImage = "url('images/forestPath.jpg')";
	button[0].innerHTML = "Continue onwards";
	button[1].innerHTML = "Go back";
	currentRoom = "forestPath";
}

function THECONVENIENCESTORE(){
	title.innerHTML = "コンビニ!!!";
	description.innerHTML = "It seems that the evil dragon created a convience store chain run by japanese monkeys!";
	document.body.style.backgroundImage = "url('images/convenienceStore.jpg')";
	button[0].innerHTML = "Continue";
	button[1].innerHTML = "Go back";
	currentRoom = "THE CONVENIENCE STORE";
}

function storeText(){
	description.innerHTML = "The monkey asks you what you are doing as you try to continue"
	document.body.style.backgroundImage = "url('images/convenienceStoreText.jpg')";
}

document.getElementById("game-container").onload = titleScreen();
button[0].addEventListener("click", button1Events);
button[1].addEventListener("click", button2Events);
button[2].addEventListener("click", button3Events);