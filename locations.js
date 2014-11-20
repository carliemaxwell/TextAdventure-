var locations = [];

function Location (name,description){
	this.name = name;	
	this.description = description;
	var items = [];
}

var location1 = new Location('kitchen', 'dirty dishes and old food');
var location2 = new Location('bedroom', 'blood on the sheets');
var location3 = new Location('bathroom', 'shower running');
locations.push(location1);
locations.push(location2);
locations.push(location3);

var connections = [
	[0,1,1],
	[1,0,1],
	[1,1,0]
];

var map = {
	locations: locations,
	connections: connections
}

var test = function (num){
	for(var i = 0; i < map.locations.length; i++){ //i is a counter for inside the row
		if(map.connections[num][i] == 1){ //map.connections gets the property from the object, gets row with num, looks inside row with i loop
			console.log(map.locations[num].name + " is connected to " + map.locations[i].name); //map.locations[num].name gets name property of row and connects it to i room
		}
	}
}		

test(0); //put num 0 into the function for purpose of lab



