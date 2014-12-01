var locations = [];
function Location (name,description){
	this.name = name;
	this.description = description;
	var items = [];
}
var location1 = new Location('kitchen', 'dirty dishes and old food');
var location2 = new Location('master bedroom', 'blood on the sheets');
var location3 = new Location('dining room', 'glasses shattered');
var location4 = new location('bathroom','blood on mirror and shower running');
var location5 = new location('ballroom','chandelier fell from ceiling');
var location6 = new location('living room','tv smashed');
var location7 = new location('hallway','muddy footprints everywhere');
var location8 = new location('basement','dark and cold, lights off, dead body frozen in icebox');
locations.push(location1);
locations.push(location2);
locations.push(location3);
locations.push(location4);
locations.push(location5);
locations.push(location6);
locations.push(location7);
locations.push(location8);
var connections = [ //would this make 8 different locations?
	[0,1,0,0,1,0,0,1],
	[1,0,1,1,1,0,0,1],
	[1,1,0,1,0,1,1,0],
	[0,0,0,1,1,0,1,0],
	[0,1,0,1,1,0,1,0],
	[0,0,1,1,0,0,1,0],
	[0,0,0,0,1,0,1,0],
	[0,1,1,1,1,0,1,0],
];
var map = {
	locations: locations,
	connections: connections
}
var test = function (rowNum){ //when given row num it will give you the horizontal number aka which row it is
	for(var x = 0; x < map.locations.length; x++){ //x is a counter for inside the row
		if(map.connections[rowNum][x] == 1){ //map.connections gets the property from the object, gets row with num, looks inside row with x loop
			console.log(map.locations[rowNum].name + " is connected to " + map.locations[x].name); //map.locations[rowNum].name gets name property of row as horizontal number and connects it to x row which is the vertical number, like a grid
		}
	}
}
test(0); //put num 0 into the function for purpose of lab but how wouldi make it so it works for any input?

var player = {
	loc : function(location){
	}		
	items = [];
	pickup : function(item){
		this.items.push(items.toLowerCase());
	}
	drop : function(item) {
	var i = this.items.indexOf(item.toLowerCase());
		if( i >= 0) {
			this.items.splice(x,1);
		}
	}
};

if(input == 'pickup'){ //how would i get these to run?
	pickup();
}

if(input == 'drop'){
	drop();
}

if(player.pickup == "knife") {  //would this be a sufficient if statement?
	var output = document.getElementById('scene');
        output.innerHTML = "You can now defend yourself";
}



var interpret = function(string){
	var objects = {};
	var firstString = string;
	var trimString = firstString.trim();
	var newString = trimString.split(" ");
	var action = newString.shift();
	objects.action = action; 
	var item = newString.join(" ");
	objects.object = item;
	return objects;
}

var execute = function(command) {
	var action = command.action;
	var target = command.target;
	player[action][target];
}

function gamestep (){
	var input = this.value;
	var cmd = interpret(input);
}

var gamestart = function(){
	var inputBox = document.querySelector('input');
	inputBox.addEventListener('keyup',gameStep);
}

var runSomeTests = function(){
	
	var descrip = document.getElementById('descrip');

	console.log(descrip.tagName);
	console.log(descrip.innerHMTL);
	console.log(descrip.parentNode.tagName);

	var headings = document.querySelectorAll('aside>h1');

	for (i=0; i<headings.length; i++){
		console.log(headings[i].innerHTML);
	}
	
	var output = document.getElementById('scene');
	output.innerHTML = 'You and 5 other friends are left on a mysterious island after a nearly fatal plane crash. What will you do to survive?';
	
	var title = document.querySelectorAll('header>h1');
	title[0].innerHTML = 'Lost';

	var listOfItems = document.querySelector('#inventory > ul');
        var item = document.createElement('li');
	var flashlight = document.createTextNode('flashlight');
	listOfItems.appendChild(item);
	item.appendChild(flashlight);

	var listOfItems = document.querySelector('#inventory > ul');
        var item = document.createElement('li');
        var knife = document.createTextNode('knife');
        listOfItems.appendChild(item);
        item.appendChild(knife);

	var listOfItems = document.querySelector('#inventory > ul');
        var item = document.createElement('li');
        var matches = document.createTextNode('matches');
        listOfItems.appendChild(item);
        item.appendChild(matches);

	var listOfActions = document.querySelector('#help > ul');
        var action = document.createElement('li');
        var yell = document.createTextNode('yell for help');
        listOfActions.appendChild(action);
        action.appendChild(yell);

	var listOfActions = document.querySelector('#help > ul');
        var action = document.createElement('li');
        var walk = document.createTextNode('walk towards plane and search for useful items');
        listOfActions.appendChild(action);
        action.appendChild(walk);

	var listOfActions = document.querySelector('#help > ul');
        var action = document.createElement('li');
        var food = document.createTextNode('look for food and water');
    	listOfActions.appendChild(action);
        action.appendChild(food);

	var listOfActions = document.querySelector('#help > ul');
        var action = document.createElement('li');
        var fire = document.createTextNode('make a fire');
        listOfActions.appendChild(action);
        action.appendChild(fire);

	var listOfActions = document.querySelector('#help > ul');
        var action = document.createElement('li');
        var pickup = document.createTextNode('pickup');
        listOfActions.appendChild(action);
        action.appendChild(pickup);

	var listOfActions = document.querySelector('#help > ul');
        var action = document.createElement('li');
        var take = document.createTextNode('take');
        listOfActions.appendChild(action);
        action.appendChild(take);

	var listOfActions = document.querySelector('#help > ul');
        var action = document.createElement('li');
        var walk = document.createTextNode('walk');
        listOfActions.appendChild(action);
        action.appendChild(walk);
};

window.onload = runSomeTests;
window.onload = gameStart;

