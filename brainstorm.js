var player = {
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

