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
                        console.log(map.locations[rowNum].name + " is connected to " + map.locations[x].name); //map.locations[rowNum].name gets name property of row as horizontal $
                }
        }
}
test(5); //put num 0 into the function for purpose of lab but how wouldi make it so it works for any input?


