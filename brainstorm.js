var runSomeTests = function(){
	
	var descrip = document.getElementById('descrip');

	console.log(descrip.tagName);
	console.log(descrip.innerHMTL);
	console.log(descrip.parentNode.tagName);

	var headings = document.querySelectorAll('aside>h1');

	for (i=0; i<headings.length; i++){
		console.log(headings[i].innerHTML);
	}
	
var location1 = new Location('kitchen', 'dirty dishes and old 
food');
var location2 = new Location('master bedroom', 'blood on the 
sheets');
var location3 = new Location('dining room', 'glasses shattered');

locations.push(location1);
locations.push(location2);
locations.push(location3);

var connections = [
	[0,1,0],
	[1,0,1],
	[1,1,0]
];

var map = {
	locations: locations,
	connections: connections
}

var test = function (rowNum){ //when given row num it will give you the 
horizontal number aka which row it is
	for(var x = 0; x < map.locations.length; x++){ //x is a counter 
for inside the row
		if(map.connections[rowNum][x] == 1){ //map.connections 
gets the property from the object, gets row with num, looks inside row 
with x loop
			console.log(map.locations[rowNum].name + " is 
connected to " + map.locations[x].name); //map.locations[rowNum].name 
gets name property of row as horizontal number and connects it to x row 
which is the vertical number, like a grid
		}
	}
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

//player[action](target)

