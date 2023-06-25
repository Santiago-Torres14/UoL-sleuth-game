/*
201 - The case of Judge Hopper:
Stage 1 - Department of Justice

Officer: 1061178
CaseNum: 201-0-42816456-1061178

Judge Hopper has gone missing and we’ve been booked to investigate. This is the big time kid. Now I need you to head over to Hopper’s office at the Department of Justice and gather clues.

Draw a separate ellipse around 4 pieces of evidence:
Letter opener,
Death threat letters,
telephone,
and the AGOL leaflet

Each ellipse should cover the entire object whilst keeping as close to the edges as possible. You will need to use different values for the width and height arguments.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  ellipse ()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the evidence below

    const letterOpenerCoordinate = {x: 420, y: 295, w: 55, h: 126};
    noFill();
    ellipse(letterOpenerCoordinate.x, letterOpenerCoordinate.y, letterOpenerCoordinate.w, letterOpenerCoordinate.h);

    const deathThreatLettersCoordinate = {x: 256, y: 225, w: 120};
    ellipse(deathThreatLettersCoordinate.x, deathThreatLettersCoordinate.y, deathThreatLettersCoordinate.w);

    const telephoneCoordinate = {x: 271, y: 358, w: 180, h: 130};
    ellipse(telephoneCoordinate.x, telephoneCoordinate.y, telephoneCoordinate.w, telephoneCoordinate.h);

    const AGOLLeafleCoordinate = {x: 723, y: 356, w: 110, h: 116};
    ellipse(AGOLLeafleCoordinate.x, AGOLLeafleCoordinate.y, AGOLLeafleCoordinate.w, AGOLLeafleCoordinate.h);

    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}

function mouseClicked() {
    console.log(mouseX +", "+mouseY);
}
