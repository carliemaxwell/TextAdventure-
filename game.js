var player = {
var items = [];
var pickUp = function(){
	this.items.push(item);
}
var drop = function(){
	var pos = this.items.indexOf(item);
	if(pos >=0){
		this.items.splice(pos,1);
		}
	}
}

var interpret = function(string){
	var action = [];
	var object = [];
	var t = string.trim();
	var s = t.split(" ");
	var shift = s.shift();
	action.first = shift;
	var new = s.join();
	object.rest = new;
	return object;
}

function execute(command){
	var action = command.action;
	var target = command.target;
	var func = player[action];
	func(target);
}

function report(result){
	for(var i = 0; i<items.length; i++){
		var item = document.querySelector('#inventory>ul');
}

function gameStep(){
	var input = this.value;
	var cmd = interpret(input);
}	

var gameStart = function(){
	var inputBox = document.querySelector('input');
	inputBox.addEventListener('keyup', gameStep);
}

window.onload = gameStart;	
	
		
/*
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
	output.innerHTML = 'Youre the lone survivor of a plane crash and are now left in the woods.';
	
	var title = document.querySelectorAll('header>h1');
	title[0].innerHTML = 'Greys Anatomy';

	var listOfItems = document.querySelector('#inventory > ul');
        var item = document.createElement('li');
	var flashlight = document.createTextNode('flashlight/knife');
	listOfItems.appendChild(item);
	item.appendChild(flashlight);

	var listOfActions = document.querySelector('#help > ul');
	var action = document.createElement('li');
	var lookaround = document.createTextNode('Look around');
	listOfActions.appendChild(action);
	action.appendChild(lookaround);
};

window.onload = runSomeTests;
*/
