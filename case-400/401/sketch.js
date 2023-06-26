/*

Officer: 1061178
CaseNum: 401-0-49075539-1061178

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- When hemlock dips below 0.43, decrement protamine by 0.01
	- When warfarin goes above 0.44, raise protamine by 0.02
	- When spiderVenom goes above 0.41, decrement opioids by 0.02
	- When hemlock goes above 0.6, raise opioids by 0.02
	- When hemlock goes above 0.35, decrement glucagon by 0.02
	- If warfarin goes above 0.75, try increasing glucagon by 0.04


Your conditional statements should consider the following poisons:

	- spiderVenom
	- hemlock
	- warfarin


Your conditional statements should modify the following antidotes:

	- protamine
	- opioids
	- glucagon


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var spiderVenom;
var hemlock;
var warfarin;


//Declare the antidote variables
var protamine;
var opioids;
var glucagon;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	spiderVenom = 0.5;
	hemlock = 0.5;
	warfarin = 0.5;
	protamine = 0.5;
	opioids = 0.5;
	glucagon = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
	- When hemlock dips below 0.43, decrement protamine by 0.01
	- When warfarin goes above 0.44, raise protamine by 0.02
	- When spiderVenom goes above 0.41, decrement opioids by 0.02
	- When hemlock goes above 0.6, raise opioids by 0.02
	- When hemlock goes above 0.35, decrement glucagon by 0.02
	- If warfarin goes above 0.75, try increasing glucagon by 0.04
    */
    
    if (hemlock < 0.43) {
        protamine -= 0.01;
    }

    if (warfarin > 0.44) {
        protamine += 0.02;
    }

    if (spiderVenom > 0.41) {
        opioids -= 0.02;
    }

    if (hemlock > 0.6) {
        opioids += 0.02;
    }

    if (hemlock > 0.35) {
        glucagon -= 0.02;
    }

    if (warfarin > 0.75) {
        glucagon += 0.04;
    }

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	spiderVenom = nextValue(graphs[0],spiderVenom);
	hemlock = nextValue(graphs[1],hemlock);
	warfarin = nextValue(graphs[2],warfarin);


	protamine = constrain(protamine, 0, 1);
	opioids = constrain(opioids, 0, 1);
	glucagon = constrain(glucagon, 0, 1);


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
	text('spiderVenom: ' + nf(spiderVenom,1,2), 20,20);
	fill(colors[1]);
	text('hemlock: ' + nf(hemlock,1,2), 20,40);
	fill(colors[2]);
	text('warfarin: ' + nf(warfarin,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(protamine,50,'protamine');
	drawBar(opioids,200,'opioids');
	drawBar(glucagon,350,'glucagon');


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
