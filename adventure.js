var button = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3")];
var gameBackground = document.getElementById("game-container");
var title = document.getElementById("title");
var storyDesc = document.getElementById("description");
var currentRoom;
var hasKey = "no";
var monkeyTextNormal = 0;

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
		//-----------------------Death types
		case "dead":
			titleScreen();
			break;
		//----------------------Beginning
		case "titleScreen":
			storyRecap();
			break;
		case "storyRecap":
			splitPath();
			break;
		//----------------------Right path
		case "splitPath":
			seeHouse();
			break;
		case "seeHouse":
			insideHouse();
			break;
		case "insideHouse":
			fridgeDeath();
			break;
		//----------------------Middle path
		case "door":
			dragonRealm();
			break;
		//----------------------コンビニ！！！
		case "forestPath":
			THECONVENIENCESTORE();
			break;
		case "THE CONVENIENCE STORE":
			storeText();
			break;
		case "storeText":
			storeText();
			break;
	}
}

function button2Events(){
	switch(currentRoom){
		//-------------------Right path
		case "seeHouse":
			splitPath();
			break;
		case "insideHouse":
			seeHouse();
			break;
		//--------------------Middle path
		case "splitPath":
			if(hasKey == "no"){
				closedDoor();
			}else{
				openDoor();
			}
			break;
		case "door":
			splitPath();
			break;
		//-------------------コンビニ！！！
		case "forestPath":
			splitPath();
			break;
		case "THE CONVENIENCE STORE":
			forestPath();
			break;
		case "storeText":
			storeText();
			break;
	}
}

function button3Events(){
	switch(currentRoom){
		//-------------------コンビニ！！！
		case "splitPath":
			forestPath();
			break;
	}
}

function itemEvents(){
	switch(currentRoom){
		case "insideHouse":
			document.getElementById("inventoryItem").style.display = "none";
			hasKey = "yes";
	}
}

//-------------------Beginning
function titleScreen(){
	hasKey = "no";
	monkeyTextNormal = 0;
	document.getElementById("inventoryItem").style.display = "none";
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

//-------------------Right path
function seeHouse(){
	document.getElementById("inventoryItem").style.display = "none";
	title.innerHTML = "You see a house in the woods!";
	description.innerHTML = "Will you enter the house or go back?";
	hideBtn(3, 3);
	document.body.style.backgroundImage = "url('images/seeHouse.jpg')";
	button[0].innerHTML = "Enter";
	button[1].innerHTML = "Go back";
	currentRoom = "seeHouse";
}

function insideHouse(){
	if(hasKey == "no"){
		document.getElementById("inventoryItem").style.display = "inline";
		inventoryItem.src = "images/key.png";
	}
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

//-------------------Middle path
function closedDoor(){
	title.innerHTML = "A huge door stands before you!";
	description.innerHTML = "You will need a key to open it";
	hideBtn(1, 3);
	showBtn(2, 2);
	document.body.style.backgroundImage = "url('images/closedDoor.jpg')";
	button[1].innerHTML = "Go back";
	currentRoom = "door";
}

function openDoor(){
	title.innerHTML = "The door opens!";
	description.innerHTML = "You use the key and the huge door opens before you";
	showBtn(1, 2);
	hideBtn(3, 3);
	document.body.style.backgroundImage = "url('images/openDoor.jpg')";
	button[0].innerHTML = "Go through";
	button[1].innerHTML = "Go back";
	currentRoom = "door";
}

function dragonRealm(){
	title.innerHTML = "You arived at the dragon's realm!";
	description.innerHTML = "You are finally nearing the end of your journey....except we have to cut it off here!";
	hideBtn(2, 2);
	document.body.style.backgroundImage = "url('images/dragonRealm.jpg')";
	button[0].innerHTML = "Back to title screen";
	currentRoom = "dead";
}

//-------------------コンビニ！！！
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
	description.innerHTML = "It seems that the evil dragon created a convenience store chain run by japanese monkeys!";
	document.body.style.backgroundImage = "url('images/convenienceStore.jpg')";
	button[0].innerHTML = "Continue";
	button[1].innerHTML = "Go back";
	currentRoom = "THE CONVENIENCE STORE";
}

function storeText(){
	switch(monkeyTextNormal){
		case 0:
			description.innerHTML = "The monkey asks you what you are doing as you try to continue";
			hideBtn(1, 1);
			document.body.style.backgroundImage = "url('images/convenienceStoreText.jpg')";
			currentRoom = "storeText";
			break;
		case 1:
			description.innerHTML = "'You're not leaving right?' The monkey says";
			showBtn(1, 1);
			hideBtn(2, 2);
			document.body.style.backgroundImage = "url('images/convenienceStoreText2.jpg')";
			break;
		case 2:
			description.innerHTML = "'Our bananas are cheap' The monkey tells you";
			document.body.style.backgroundImage = "url('images/convenienceStoreText3.jpg')";
			break;
		case 3:
			description.innerHTML = "'You can't miss it!' He says";
			document.body.style.backgroundImage = "url('images/convenienceStoreText4.jpg')";
			break;
	}
	monkeyTextNormal++;
}

document.getElementById("game-container").onload = titleScreen();
button[0].addEventListener("click", button1Events);
button[1].addEventListener("click", button2Events);
button[2].addEventListener("click", button3Events);
document.getElementById("inventoryItem").addEventListener("click", itemEvents);