/*

Officer: 1061178
CaseNum: 101-2-90910534-1061178

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Forest Green filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Dodger Blue filled
rectangle around him.

Identify the man in the striped top by drawing a Magenta filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload() {
    img = loadImage('img.jpg');
}

function setup() {
    createCanvas(img.width, img.height);
    noStroke();
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

    const forestGreenColor = [34, 139, 34];
    const annaCoordinate = { x: 1140, y: 202, x2: 1243, y2: 412 };
    fill(...forestGreenColor);
    rect(annaCoordinate.x, 
        annaCoordinate.y, 
        annaCoordinate.x2 - annaCoordinate.x, 
        annaCoordinate.y2 - annaCoordinate.y
    );

    const dodgerBlueColor = [30, 144, 255];
    const heavySetMan = {x: 191, y: 446, x2: 622, y2: 918};
    fill(...dodgerBlueColor);
    rect(heavySetMan.x, heavySetMan.y, heavySetMan.x2 - heavySetMan.x, heavySetMan.y2 - heavySetMan.y);
    

    const magentaColor = [255, 0, 255];
    const stripedTopMan = {x: 802, y: 190, x2: 929, y2: 475};
    fill(...magentaColor);
    rect(stripedTopMan.x, stripedTopMan.y, stripedTopMan.x2 - stripedTopMan.x, stripedTopMan.y2 - stripedTopMan.y);
}
