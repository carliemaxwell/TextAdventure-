//how do you know where the player is?
//make other players
//pick up other weapons from other players

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
	output.innerHTML = 'You went to a dinner party and have been trapped in the house by the owner';
	
	var title = document.querySelectorAll('header>h1');
	title[0].innerHTML = 'Clue take 2';

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

/* var connection = [
	[0,0,0],
];
map.connect('beach','jungle'); //connects the 3 to eachother
map.connect('jungle','cliff');
map.connect('cliff','beach');
*/

/*var map = {
	locations:[],
	connections: [..],
	connect: function(loc1,loc2){
		var loc1num = this.locations.indexOf(loc1);
		var loc2num = this.locations.indexOf(loc2);
		this.connections[loc1num][loc2num] = 1;
		this.connections[loc2num][loc1num] = 1;
	}
}
*/

//loop through properties of an object
	//for (propName in obj){
		//if( property is a function...)
			//do something...
		//else
			//dont do something...
//filters out properties that are actions ect.	

/*function report (){
	displayInventory(); //loops over what is in inventory
	displayActions();
	displayScene();
*/

/*player.location - shows where player (player object could contain a 
reference to a player location, everytime player moves we have to update 
new location into player location property...if statement)
*/
