/*

Officer: 1061178
CaseNum: 101-3-68477086-1061178

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Dark Goldenrod filled rectangle with a Indigo outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Medium Aquamarine filled
rectangle with a Dark Magenta outline around him.

Identify the man reading the newspaper by drawing a Chocolate filled rectangle
with a Brown outline around him.

Identify the woman with the dog by drawing a Chartreuse filled rectangle with a
Light Sea Green outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload() {
    img = loadImage('img.jpg');
}

function setup() {
    createCanvas(img.width, img.height);
    strokeWeight(2);
}

function draw() {
    image(img, 0, 0);

    //Write your code below here ...



    //A helpful mouse pointer
    push();
    fill(0);
    noStroke();
    text(mouseX + "," + mouseY, mouseX, mouseY);
    pop();

    const darkGoldenrodColor = [184, 134, 11];
    const indigoColor = [75,0,130];
    const annaCoordinates = { x: 1334, y: 312, x2: 1585, y2: 811 };
    fill(...darkGoldenrodColor);
    stroke(...indigoColor);
    rect(annaCoordinates.x, annaCoordinates.y, annaCoordinates.x2 - annaCoordinates.x, annaCoordinates.y2 - annaCoordinates.y);

    const darkMagentaColor = [139, 0, 139];
    const mediumAquamarine = [102,205,170];
    const cigarManCoordinate = { x: 343, y: 406, x2: 472, y2: 578 };
    fill(...mediumAquamarine);
    stroke(...darkMagentaColor);
    rect(cigarManCoordinate.x, cigarManCoordinate.y, cigarManCoordinate.x2 - cigarManCoordinate.x, cigarManCoordinate.y2 - cigarManCoordinate.y);

    const chocolateColor = [210, 105, 30];
    const brownColor = [165,42,42];
    const newspaperMan = { x: 898, y: 349, x2: 1055, y2: 653 };
    fill(...chocolateColor);
    stroke(...brownColor);
    rect(newspaperMan.x, newspaperMan.y, newspaperMan.x2 - newspaperMan.x, newspaperMan.y2 - newspaperMan.y);
    

    const chartreuseColor = [127, 255, 0];
    const lightSeaGreenColor = [32,178,170];
    const womanWithDog = { x: 24, y: 288, x2: 199, y2: 664 };
    fill(...chartreuseColor);
    stroke(...lightSeaGreenColor);
    rect(womanWithDog.x, womanWithDog.y, womanWithDog.x2 - womanWithDog.x, womanWithDog.y2 - womanWithDog.y);

}

function mouseClicked() {
    console.log(mouseX, ", ", mouseY);
}
