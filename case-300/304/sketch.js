/*
The case of the Python Syndicate
Stage 4

Officer: 1061178
CaseNum: 301-3-98087176-1061178

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var cecilKarpinskiImg;
var countessHamiltonImg;
var pawelKarpinskiImg;
var adaLovelaceImg;
var annaKarpinskiImg;
var rockyKrayImg;

var annaKarpinskiObject;
var countessHamiltonObject;
var pawelKarpinskiObject;
var cecilKarpinskiObject;
var rockyKrayObject;
var adaLovelaceObject;


//declare your new objects below


var cecilKarpinskiLocationX = 115;
var cecilKarpinskiLocationY = 40;
var countessHamiltonLocationX = 408;
var countessHamiltonLocationY = 40;
var pawelKarpinskiLocationX = 701;
var pawelKarpinskiLocationY = 40;
var adaLovelaceLocationX = 115;
var adaLovelaceLocationY = 309;
var rockyKrayLocationX = 701;
var rockyKrayLocationY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	adaLovelaceImg = loadImage("ada.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	rockyKrayImg = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	annaKarpinskiObject = {
		x: 408,
		y: 309,
		image: annaKarpinskiImg
	};

	//define your new objects below
    cecilKarpinskiObject = {
        x: 115,
        y: 40,
        image: cecilKarpinskiImg
    };

    countessHamiltonObject = {
        x: 408,
        y: 40,
        image: countessHamiltonImg
    };

    pawelKarpinskiObject = {
        x: 701,
        y: 40,
        image: pawelKarpinskiImg
    };

    adaLovelaceObject = {
        x: 115,
        y: 309,
        image: adaLovelaceImg
    };

    rockyKrayObject = {
        x: 701,
        y: 309,
        image: rockyKrayImg
    };

}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiObject.image, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
	image(countessHamiltonObject.image, countessHamiltonObject.x, countessHamiltonObject.y);
	image(pawelKarpinskiObject.image, pawelKarpinskiObject.x, pawelKarpinskiObject.y);
	image(adaLovelaceObject.image, adaLovelaceObject.x, adaLovelaceObject.y);
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(rockyKrayObject.image, rockyKrayObject.x, rockyKrayObject.y);


}
