/*

Officer: 1061178
CaseNum: 202-3-46595790-1061178

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Dodger Blue filled text with a Dark Magenta outline in Ballpointprint font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(579,417);
	textSize(25);
}

function draw()
{
	background(255);

	fill(244,164,96);
	stroke(0,0,128);
	textFont(RonsFont);
	//text("I'm", 227,75);
	fill(139,69,19);
	stroke(139,0,139);
	//text("we", 14,191);
	fill(199,21,133);
	stroke(0,128,0);
	textFont(Diggity);
	//text("Daisy", 9,321);
	fill(32,178,170);
	stroke(0,128,128);
	textFont(Ballpointprint);
	//text("ing", 143,75);
	fill(178,34,34);
	stroke(50,205,50);
	//text("You", 305,105);
	fill(186,85,211);
	stroke(128,0,0);
	textFont(RonsFont);
	//text("I", 501,75);
	fill(220,20,60);
	stroke(0,139,139);
	//text("Are", 14,75);
	fill(0,206,209);
	stroke(50,205,50);
	//text("a", 227,191);
	push();
	fill(34,139,34);
	stroke(255,165,0);
	textFont(Melissa);
	//text("ignore", 293,134);
	pop();
	stroke(127,255,0);
	textFont(Diggity);
	//text("onship", 55,221);
	fill(72,209,204);
	stroke(0,139,139);
	textFont(Ballpointprint);
	//text("all", 411,191);
	fill(106,90,205);
	stroke(139,0,139);
	textFont(Melissa);
	//text("take", 6,105);
	push();
	fill(205,133,63);
	stroke(160,82,45);
	//text("me", 183,75);
	pop();
	fill(30,144,255);
	textFont(Ballpointprint);
	text("the", 201,105);
	text("can", 155,134);
	text("avoid", 100,75);
	text("go", 99,191);
	text("safe", 108,221);
	push();
	fill(218,112,214);
	stroke(46,139,87);
	textFont(Melissa);
	//text("are", 348,105);
	pop();
	text("you", 60,75);
	fill(0,191,255);
	stroke(153,50,204);
	textFont(Melissa);
	//text("Is", 481,191);
	push();
	fill(30,144,255);
	stroke(139,0,139);
	textFont(Ballpointprint);
	text("for", 186,191);
	text("guard", 402,105);
	pop();
	fill(205,133,63);
	stroke(184,134,11);
	textFont(Diggity);
	//text("?", 208,75);
	fill(255,69,0);
	stroke(255,69,0);
	//text("Are", 11,161);
	push();
	fill(0,100,0);
	stroke(32,178,170);
	textFont(RonsFont);
	//text("can", 335,161);
	pop();
	stroke(128,0,0);
	textFont(Melissa);
	//text("ling", 57,25);
	push();
	fill(250,128,114);
	stroke(0,255,255);
	textFont(Diggity);
	//text("Perhaps", 484,161);
	pop();
	fill(178,34,34);
	stroke(25,25,112);
	textFont(Diggity);
	//text("The", 70,105);
	fill(220,20,60);
	stroke(255,165,0);
	textFont(Melissa);
	//text("and", 312,191);
	fill(205,133,63);
	stroke(128,0,128);
	//text("x", 59,321);
	fill(255,0,0);
	stroke(0,128,128);
	textFont(Ballpointprint);
	//text("?", 42,105);
	fill(220,20,60);
	stroke(255,255,0);
	textFont(Diggity);
	//text("out.", 442,191);
	fill(148,0,211);
	stroke(128,0,128);
	textFont(Melissa);
	//text("this", 378,191);
	fill(0,206,209);
	stroke(184,134,11);
	textFont(Ballpointprint);
	//text("of", 140,161);
	fill(0,0,255);
	stroke(75,0,130);
	//text("money", 174,161);
	fill(240,230,140);
	stroke(32,178,170);
	//text("ed", 449,105);
	fill(152,251,152);
	stroke(255,255,0);
	textFont(Diggity);
	//text("I", 323,161);
	fill(148,0,211);
	textFont(Melissa);
	//text("My", 6,25);
	fill(154,205,50);
	stroke(0,0,205);
	textFont(Ballpointprint);
	//text("no", 195,134);
	fill(173,216,230);
	stroke(32,178,170);
	textFont(Diggity);
	//text("can", 523,75);
	fill(240,230,140);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("Bob,", 84,25);
	fill(30,144,255);
	stroke(139,0,139);
	text("I", 124,134);
	fill(135,206,235);
	stroke(25,25,112);
	textFont(Melissa);
	//text("more", 461,75);
	push();
	fill(34,139,34);
	stroke(139,0,139);
	textFont(Ballpointprint);
	//text("these", 339,134);
	pop();
	stroke(255,215,0);
	//text("dar", 34,25);
	fill(148,0,211);
	stroke(128,0,128);
	textFont(Diggity);
	//text("relati", 15,221);
	fill(30,144,255);
	stroke(46,139,87);
	//text("cash.", 435,161);
	fill(255,140,0);
	stroke(255,215,0);
	textFont(Ballpointprint);
	//text("how", 367,75);
	fill(127,255,212);
	stroke(0,206,209);
	textFont(RonsFont);
	//text("yours,", 79,271);
	push();
	fill(165,42,42);
	stroke(255,165,0);
	textFont(Ballpointprint);
	//text("sometimes.", 21,134);
	pop();
	fill(153,50,204);
	stroke(32,178,170);
	//text("send", 378,161);
	fill(176,224,230);
	stroke(0,100,0);
	textFont(Melissa);
	//text("sh", 51,191);
	fill(0,128,128);
	stroke(75,0,130);
	textFont(RonsFont);
	//text("so,", 289,161);
	push();
	fill(160,82,45);
	stroke(178,34,34);
	textFont(Melissa);
	//text("continual", 404,134);
	pop();
	fill(255,165,0);
	stroke(0,128,128);
	textFont(Melissa);
	//text("short", 95,161);
	fill(218,112,214);
	stroke(255,140,0);
	textFont(Diggity);
	//text("not", 273,75);
	fill(148,0,211);
	stroke(127,255,0);
	textFont(RonsFont);
	//text("?", 165,221);
	push();
	fill(0,0,128);
	stroke(165,42,42);
	textFont(Diggity);
	//text("much", 411,75);
	pop();
	fill(64,224,208);
	stroke(0,128,0);
	textFont(Diggity);
	//text("If", 268,161);
	fill(240,128,128);
	stroke(210,105,30);
	textFont(Melissa);
	//text("sort", 341,191);
	fill(244,164,96);
	stroke(0,128,128);
	textFont(RonsFont);
	//text("you", 51,161);
	fill(128,0,128);
	stroke(220,20,60);
	textFont(Diggity);
	//text("so", 376,105);
	fill(165,42,42);
	stroke(0,0,128);
	textFont(RonsFont);
	//text("break", 247,191);
	fill(128,0,128);
	stroke(0,191,255);
	textFont(Diggity);
	//text("Forever", 9,271);
	push();
	fill(240,230,140);
	stroke(0,0,205);
	textFont(RonsFont);
	//text("sure", 308,75);
	pop();
	fill(0,255,127);
	stroke(0,0,205);
	textFont(RonsFont);
	//text("secrets,", 109,105);
	fill(220,20,60);
	stroke(0,255,255);
	textFont(Diggity);
	//text("silence.", 245,105);
	push();
	fill(255,0,255);
	stroke(210,105,30);
	textFont(Ballpointprint);
	//text("delays.", 467,134);
	pop();
	fill(0,0,139);
	stroke(255,140,0);
	//text("our", 503,191);
	fill(65,105,225);
	stroke(218,165,32);
	textFont(RonsFont);
	//text("longer", 225,134);
	fill(75,0,130);
	stroke(220,20,60);
	textFont(Melissa);
	//text("ould", 68,191);
	fill(127,255,0);
	stroke(34,139,34);
	textFont(Ballpointprint);
	//text("?", 240,161);
	fill(75,0,130);
	stroke(32,178,170);
	//text("away", 131,191);



}
