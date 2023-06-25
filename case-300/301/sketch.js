/*
The case of the Python Syndicate
Stage 1

Officer: 1061178
CaseNum: 301-0-26156666-1061178

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var countessHamiltonImg;
var pawelKarpinskiImg;
var robbieKrayImg;
var adaLovelaceImg;
var annaKarpinskiImg;
var cecilKarpinskiImg;



//declare your new variables below
var robbieKrayPosX = 701;
var robbieKrayPosY = 40;

var countessHamiltonPosX = 115;
var countessHamiltonPosY = 40;

var pawelKarpinskiPosX = 408;
var pawelKarpinskiPosY = 40;

var adaLovelacePosX = 115;
var adaLovelacePosY = 309;

var annaKarpinskiPosX = 408;
var annaKarpinskiPosY = 309;

var cecilKarpinskiPosX = 701;
var cecilKarpinskiPosY = 309;

// in my opinion this should be the real solution
//const countessHamiltonPos = {x: 115, y: 40};
//const pawelKarpinskiPos = {x:408, y:40};
//const adaLovelacePos = {x:115, y:309}; 
//const annaKarpinskiPos = {x:408, y:309};
//const cecilKarpinskiPos = {x:701, y:309};



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImg = loadImage("countessHamilton.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	adaLovelaceImg = loadImage("ada.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(robbieKrayImg, robbieKrayPosX, robbieKrayPosY);


	image(countessHamiltonImg, countessHamiltonPosX, countessHamiltonPosY);
	image(pawelKarpinskiImg, pawelKarpinskiPosX, pawelKarpinskiPosY);
	image(adaLovelaceImg, adaLovelacePosX, adaLovelacePosY);
	image(annaKarpinskiImg, annaKarpinskiPosX, annaKarpinskiPosY);
	image(cecilKarpinskiImg, cecilKarpinskiPosX, cecilKarpinskiPosY);

	//image(countessHamiltonImg, countessHamiltonPos.x, countessHamiltonPos.y);
	//image(pawelKarpinskiImg, pawelKarpinskiPos.x, pawelKarpinskiPos.y);
	//image(adaLovelaceImg, adaLovelacePos.x, adaLovelacePos.y);
	//image(annaKarpinskiImg, annaKarpinskiPos.x, annaKarpinskiPos.y);
	//image(cecilKarpinskiImg, cecilKarpinskiPos.x, cecilKarpinskiPos.y);
}
