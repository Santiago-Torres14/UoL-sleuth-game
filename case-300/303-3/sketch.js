/*

Officer: 1061178
CaseNum: 303-2-15315367-1061178

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is being dragged:
	- Make Hidden_Box_Code0 equal to the value of mouseY
	- Use the 'min' function to prevent Hidden_Box_Code0 from going above 14

	When the mouse button is released:
	- Increment Hidden_Box_Code1 by 2
	- Use the 'constrain' function to prevent Hidden_Box_Code1 from falling below 2 and going above 10

	Whilst the mouse is moving:
	- Make Hidden_Box_Code2 equal to the value of mouseY
	- Use the 'min' function to prevent Hidden_Box_Code2 from going above 10

	Whilst the mouse is being dragged:
	- Decrement Hidden_Box_Code3 by 3
	- Use the 'constrain' function to prevent Hidden_Box_Code3 from falling below 3 and going above 14

	Whilst the mouse is being dragged:
	- Make Hidden_Box_Code4 equal to the value of mouseY
	- Use the 'max' function to prevent Hidden_Box_Code4 from falling below 13



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Hidden_Box_Code0;
var Hidden_Box_Code1;
var Hidden_Box_Code2;
var Hidden_Box_Code3;
var Hidden_Box_Code4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}


function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Hidden_Box_Code0 = 0;
	Hidden_Box_Code1 = 0;
	Hidden_Box_Code2 = 0;
	Hidden_Box_Code3 = 0;
	Hidden_Box_Code4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseDragged(){
    Hidden_Box_Code0 = min(mouseY, 14);
    Hidden_Box_Code3 -= 3;
    Hidden_Box_Code3 = constrain(Hidden_Box_Code3, 3, 14)
    Hidden_Box_Code4 = max(mouseY, 13);
}

function mouseReleased(){
    Hidden_Box_Code1 += 2;
    Hidden_Box_Code1 = constrain(Hidden_Box_Code1, 2, 10);
}

function mouseMoved() {
    Hidden_Box_Code2 = min(mouseY, 10);
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Hidden_Box_Code0, 20);
	pop();

	push();
	translate(120,380);
	drawDial(140,Hidden_Box_Code1, 14);
	pop();

	push();
	translate(280,170);
	drawDial(140,Hidden_Box_Code2, 13);
	pop();

	push();
	translate(280,380);
	drawDial(140,Hidden_Box_Code3, 20);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Hidden_Box_Code4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
