/*
The case of the Python Syndicate
Stage 3


Officer: 1061178
CaseNum: 301-2-32935942-1061178

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Ada Lovelace has been declared and initialised
- Position each mugshot relative to Ada Lovelace
- Do this by modifying the x and y parameters of each image command to use the x and y properties from 
the Ada Lovelace object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Ada Lovelace 
- Do not add any additional commands

*/

var photoBoard;
var robbieKrayImg;
var countessHamiltonImg;
var adaLovelaceImg;
var annaKarpinskiImg;
var bonesKarpinskiImg;
var cecilKarpinskiImg;

var adaLovelaceObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImg = loadImage("krayBrothers2.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	adaLovelaceImg = loadImage("ada.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	adaLovelaceObj = {
		x: 701,
		y: 40,
		image: adaLovelaceImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(adaLovelaceObj.image, adaLovelaceObj.x, adaLovelaceObj.y);

	image(robbieKrayImg, adaLovelaceObj.x-586, adaLovelaceObj.y);
	image(countessHamiltonImg, adaLovelaceObj.x-293, adaLovelaceObj.y);
	image(annaKarpinskiImg, adaLovelaceObj.x-586, adaLovelaceObj.y+269);
	image(bonesKarpinskiImg, adaLovelaceObj.x-293, adaLovelaceObj.y+269);
	image(cecilKarpinskiImg, adaLovelaceObj.x, adaLovelaceObj.y+269);

}
