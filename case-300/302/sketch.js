/*
The case of the Python Syndicate
Stage 2


Officer: 1061178
CaseNum: 301-1-67449213-1061178

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Ada Lovelace

- The variables for Ada Lovelace have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Ada Lovelace
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values 
 to the appropriate Ada Lovelace variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Ada Lovelace 
- Do not add any additional commands

*/

var photoBoard;
var countessHamiltonImg;
var rockyKrayImg;
var bonesKarpinskiImg;
var adaLovelaceImg;
var pawelKarpinskiImg;
var robbieKrayImg;


var adaLovelaceXCoordinate = 115;
var adaLovelaceYCoordinate = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImg = loadImage("countessHamilton.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	adaLovelaceImg = loadImage("ada.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	robbieKrayImg = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(adaLovelaceImg, adaLovelaceXCoordinate, adaLovelaceYCoordinate);

    40
	image(countessHamiltonImg, adaLovelaceXCoordinate, adaLovelaceYCoordinate-269);

    408,40
	image(rockyKrayImg, adaLovelaceXCoordinate+293, adaLovelaceYCoordinate-269);

    701,40
	image(bonesKarpinskiImg, adaLovelaceXCoordinate+586, adaLovelaceYCoordinate-269);

    408, 309
	image(pawelKarpinskiImg, adaLovelaceXCoordinate+293, adaLovelaceYCoordinate);

    701,309
	image(robbieKrayImg, adaLovelaceXCoordinate+586, adaLovelaceYCoordinate);

}
