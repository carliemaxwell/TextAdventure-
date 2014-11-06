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
