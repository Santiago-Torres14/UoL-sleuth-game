/*

Officer: 1061178
CaseNum: 401-2-25458826-1061178

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When methanol dips below 0.68 and lead goes above 0.33, decrement aspirin by 0.03
	- When strychnine goes above 0.57 or botulinium goes above 0.52, increment aspirin by 0.02
	- If methanol dips below 0.53, whilst at the same time, arsenic goes above 0.74 or lead goes above 0.38, decrease ethanol by 0.04
	- If botulinium goes above 0.62 or strychnine goes above 0.48, increase ethanol by 0.05
	- When methanol dips below 0.51, arsenic goes above 0.56, and also botulinium dips below 0.62, decrease antivenom by 0.03
	- When strychnine goes above 0.33 or novichok goes above 0.61, try increasing antivenom by 0.05
	- When botulinium dips below 0.67 and methanol dips below 0.34, or on the other hand, arsenic dips below 0.45, try decreasing paracetamol by 0.03
	- When strychnine goes above 0.69, whilst at the same time, novichok dips below 0.73 or lead dips below 0.5, increase paracetamol by 0.02


Your conditional statements should consider the following poisons:

	- botulinium
	- arsenic
	- strychnine
	- novichok
	- lead
	- methanol


Your conditional statements should modify the following antidotes:

	- aspirin
	- ethanol
	- antivenom
	- paracetamol


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var botulinium;
var arsenic;
var strychnine;
var novichok;
var lead;
var methanol;


//Declare the antidote variables
var aspirin;
var ethanol;
var antivenom;
var paracetamol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	botulinium = 0.5;
	arsenic = 0.5;
	strychnine = 0.5;
	novichok = 0.5;
	lead = 0.5;
	methanol = 0.5;
	aspirin = 0.5;
	ethanol = 0.5;
	antivenom = 0.5;
	paracetamol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

    /*
	- When methanol dips below 0.68 and lead goes above 0.33, decrement aspirin by 0.03
	- When strychnine goes above 0.57 or botulinium goes above 0.52, increment aspirin by 0.02
	- If methanol dips below 0.53, whilst at the same time, arsenic goes above 0.74 or lead goes above 0.38, decrease ethanol by 0.04
	- If botulinium goes above 0.62 or strychnine goes above 0.48, increase ethanol by 0.05
	- When methanol dips below 0.51, arsenic goes above 0.56, and also botulinium dips below 0.62, decrease antivenom by 0.03
	- When strychnine goes above 0.33 or novichok goes above 0.61, try increasing antivenom by 0.05
	- When botulinium dips below 0.67 and methanol dips below 0.34, or on the other hand, arsenic dips below 0.45, try decreasing paracetamol by 0.03
	- When strychnine goes above 0.69, whilst at the same time, novichok dips below 0.73 or lead dips below 0.5, increase paracetamol by 0.02
    */

    if (methanol < 0.68 && lead > 0.33) {
        aspirin -= 0.03;
    }

    if (strychnine > 0.57 || botulinium > 0.52) {
        aspirin += 0.02;
    }

    if (methanol < 0.53 && (arsenic > 0.74 || lead > 0.38)) {
        ethanol -= 0.04;
    }

    if (botulinium > 0.62 || strychnine > 0.48) {
        ethanol += 0.05;
    }

    if (methanol < 0.51 && arsenic > 0.56 && botulinium < 0.62) {
        antivenom -= 0.03;
    }

    if (strychnine > 0.33 || novichok > 0.61) {
        antivenom += 0.05;
    }

    if ((botulinium < 0.67 && methanol < 0.34) || arsenic < 0.45) {
        paracetamol -= 0.03;
    }

    if (strychnine > 0.69 && (novichok < 0.73 || lead < 0.5)) {
        paracetamol += 0.02;
    }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	botulinium = nextValue(graphs[0],botulinium);
	arsenic = nextValue(graphs[1],arsenic);
	strychnine = nextValue(graphs[2],strychnine);
	novichok = nextValue(graphs[3],novichok);
	lead = nextValue(graphs[4],lead);
	methanol = nextValue(graphs[5],methanol);


	aspirin = constrain(aspirin, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('botulinium: ' + nf(botulinium,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('strychnine: ' + nf(strychnine,1,2), 20,60);
	fill(colors[3]);
	text('novichok: ' + nf(novichok,1,2), 20,80);
	fill(colors[4]);
	text('lead: ' + nf(lead,1,2), 20,100);
	fill(colors[5]);
	text('methanol: ' + nf(methanol,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(ethanol,200,'ethanol');
	drawBar(antivenom,350,'antivenom');
	drawBar(paracetamol,500,'paracetamol');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
