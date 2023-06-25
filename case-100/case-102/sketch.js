/*

Officer: 1061178
CaseNum: 101-1-72445292-1061178

Case 101 - The Case of Anna Lovelace
Stage 2 - The Smalltalk Speakeasy

Well well, things have gotten interesting already ! No sooner does Anna step foot
in Console City than she heads straight for Smalltalk’s. Now be careful kid, that
place is a den of iniquity. Find out who she’s meeting and then get out as soon as
you can.

First identify Anna by drawing a rectangle with a Deep Sky Blue outline around her.
She’s the woman in the red dress of course.

That woman with the cigarette and the feathered hat looks very familiar. Let’s identify her too by drawing
a rectangle with a Chocolate outline around her. 

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  stroke() - Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noFill();
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...



	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();

    const chocolateColor = [210, 105, 30];
    const cigaretteWoman = {x: 120, y: 300}

    const annaCoordinate = {x: 1120, y: 140};
    const deepSkyBlueColor = [0,191,255];
   
    stroke(...deepSkyBlueColor);
    rect(annaCoordinate.x, annaCoordinate.y, 120, 250);

    stroke(...chocolateColor);
    rect(cigaretteWoman.x, cigaretteWoman.y, 250, 417);
}
