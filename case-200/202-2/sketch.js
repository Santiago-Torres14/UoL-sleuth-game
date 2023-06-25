/*

Officer: 1061178
CaseNum: 202-1-38372379-1061178

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Dark Orchid filled text with a Blue outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(664,435);
	textFont(letterFont);
	textSize(29);
}

function draw()
{
	background(255);

	fill(255,69,0);
	stroke(25,25,112);
	//text("to", 371,152);
	fill(218,165,32);
	stroke(255,0,255);
	//text("again", 118,182);
	fill(240,230,140);
	stroke(46,139,87);
	//text("you", 193,116);
	fill(160,82,45);
	stroke(220,20,60);
	//text("this", 529,182);
	fill(173,255,47);
	stroke(255,69,0);
	//text("I", 46,87);
	fill(233,150,122);
	stroke(0,0,128);
	//text("arms.", 273,116);
	fill(128,0,0);
	stroke(0,0,255);
	//text("you.", 115,152);
	fill(0,0,205);
	stroke(165,42,42);
	//text("How", 7,87);
	fill(199,21,133);
	stroke(255,0,255);
	//text("I", 324,116);
	fill(240,128,128);
	stroke(0,139,139);
	//text("will", 608,152);
	fill(255,215,0);
	stroke(139,0,0);
	//text("on", 272,212);
	fill(250,128,114);
	stroke(46,139,87);
	//text("uni", 66,182);
	fill(0,128,0);
	stroke(25,25,112);
	//text("x", 56,328);
	fill(0,206,209);
	stroke(255,0,255);
	//text("we", 566,87);
	//text("you", 399,182);
	fill(127,255,212);
	stroke(255,69,0);
	//text("be", 42,182);
	fill(255,255,0);
	stroke(199,21,133);
	//text("the", 440,116);
	fill(255,99,71);
	stroke(139,69,19);
	//text("without", 330,182);
	fill(218,112,214);
	stroke(139,0,0);
	//text("your", 296,212);
	fill(0,255,127);
	stroke(0,250,154);
	//text("long", 95,116);
	fill(233,150,122);
	stroke(153,50,204);
	//text("many", 368,87);
	fill(0,0,128);
	stroke(160,82,45);
	//text("in", 223,182);
	fill(127,255,212);
	stroke(220,20,60);
	//text("sid", 486,182);
	fill(250,128,114);
	stroke(0,255,127);
	//text("si", 520,87);
	fill(219,112,147);
	stroke(160,82,45);
	//text("When", 558,152);
	fill(255,255,0);
	stroke(0,0,139);
	//text("?", 542,152);
	fill(233,150,122);
	stroke(0,0,128);
	//text("How", 329,87);
	fill(165,42,42);
	stroke(255,0,255);
	//text("I", 592,116);
	fill(107,142,35);
	stroke(50,205,50);
	//text("have", 328,152);
	fill(75,0,130);
	stroke(0,206,209);
	//text("this", 448,152);
	fill(128,0,0);
	stroke(25,25,112);
	//text("in", 225,116);
	fill(199,21,133);
	stroke(184,134,11);
	//text("miss", 61,87);
	fill(220,20,60);
	stroke(32,178,170);
	//text("my", 243,116);
	fill(25,25,112);
	stroke(0,206,209);
	//text("Bob,", 95,29);
	fill(238,130,238);
	stroke(148,0,211);
	//text("can", 607,116);
	fill(186,85,211);
	stroke(199,21,133);
	//text("last", 597,87);
	fill(128,128,0);
	stroke(148,0,211);
	//text("swift", 336,212);
	fill(238,130,238);
	stroke(255,255,0);
	//text("I'm", 179,212);
	fill(127,255,0);
	stroke(139,0,139);
	//text("we", 11,182);
	stroke(165,42,42);
	//text("I", 80,116);
	fill(34,139,34);
	//text("stare", 339,116);
	fill(0,255,255);
	stroke(128,128,0);
	//text("er", 264,152);
	fill(106,90,205);
	stroke(46,139,87);
	//text("?", 64,116);
	fill(128,128,0);
	stroke(0,0,128);
	//text("tore", 406,152);
	fill(255,140,0);
	stroke(255,0,0);
	//text("at", 431,182);
	fill(0,255,127);
	stroke(127,255,0);
	//text("lon", 486,152);
	fill(128,128,0);
	stroke(0,250,154);
	//text("my", 456,182);
	stroke(178,34,34);
	//text("feels", 55,212);
	fill(186,85,211);
	stroke(160,82,45);
	//text("around", 191,87);
	fill(139,0,0);
	stroke(50,205,50);
	//text("and", 559,116);
	fill(178,34,34);
	stroke(139,0,0);
	//text("the", 241,182);
	fill(75,0,130);
	stroke(153,50,204);
	//text("of", 90,152);
	fill(139,0,0);
	stroke(0,0,139);
	//text("ging", 506,152);
	fill(0,100,0);
	stroke(50,205,50);
	//text("hold", 156,116);
	stroke(255,140,0);
	//text("th", 9,152);
	fill(135,206,250);
	stroke(0,128,0);
	//text("months", 415,87);
	fill(0,0,128);
	stroke(255,0,255);
	//text("ink", 27,152);
	fill(0,250,154);
	stroke(160,82,45);
	//text("nce", 533,87);
	fill(139,0,139);
	stroke(0,250,154);
	//text("Even", 179,182);
	fill(218,165,32);
	stroke(0,0,128);
	//text("My", 7,29);
	stroke(107,142,35);
	//text("?", 163,182);
	fill(255,215,0);
	stroke(255,140,0);
	//text("only", 54,152);
	fill(238,130,238);
	stroke(255,215,0);
	//text("ing", 245,212);
	fill(144,238,144);
	stroke(255,69,0);
	//text("up", 391,116);
	fill(0,191,255);
	stroke(25,25,112);
	//text("e,", 508,182);
	fill(152,251,152);
	stroke(0,255,255);
	//text("having", 105,87);
	fill(0,0,139);
	stroke(0,0,255);
	//text("desolate.", 102,212);
	fill(32,178,170);
	stroke(46,139,87);
	//text("Forever", 7,270);
	fill(64,224,208);
	stroke(178,34,34);
	//text("night", 474,116);
	fill(25,25,112);
	stroke(154,205,50);
	//text("small", 567,182);
	fill(152,251,152);
	stroke(124,252,0);
	//text("darling", 39,29);
	fill(255,0,255);
	stroke(107,142,35);
	//text("return.", 390,212);
	fill(0,0,255);
	stroke(255,165,0);
	//text("I", 313,152);
	fill(255,105,180);
	stroke(128,128,0);
	//text("yours,", 75,270);
	fill(152,251,152);
	stroke(34,139,34);
	//text("do", 288,152);
	fill(50,205,50);
	stroke(124,252,0);
	//text("Daisy", 7,328);
	fill(64,224,208);
	stroke(218,165,32);
	//text("s", 396,152);
	fill(147,112,219);
	stroke(255,69,0);
	//text("to", 131,116);
	fill(25,25,112);
	stroke(210,105,30);
	//text("ki", 7,116);
	fill(176,224,230);
	stroke(128,0,0);
	//text("much", 189,152);
	fill(0,0,255);
	stroke(127,255,0);
	//text("How", 150,152);
	fill(100,149,237);
	stroke(0,0,205);
	//text("ted", 84,182);
	fill(0,0,128);
	stroke(255,0,0);
	//text("it", 501,87);
	fill(139,0,0);
	stroke(255,0,255);
	//text("long", 235,152);
	fill(205,133,63);
	stroke(0,0,255);
	//text("sky,", 519,116);
	fill(154,205,50);
	stroke(124,252,0);
	//text("ssed", 19,116);
	fill(139,69,19);
	stroke(255,69,0);
	//text("you", 159,87);
	fill(153,50,204);
	stroke(0,0,255);
	text("bank", 211,212);
	text("the", 248,87);
	text("is", 481,87);
	text("town", 9,212);
	text("at", 415,116);
	text("spring", 275,182);
	text("place", 282,87);



}
