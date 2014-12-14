/*
NOTES:
    All functions in this file are suggestions and use of the code below
is permissible and even encouraged. However, feel free to add/change/remove
anything you see here in your own games. And, if you decide you want to
write your own code from scratch, you are not required to use my code at all.
*/

/*
    Constructor used to create all the locations in the game.
    Notice that I have added an initialItems parameter so that
    we can start the location out with some items in it.
    You might need to add more parameters to this constructor
    if there are other properties that need initial values.
*/
function Location(name, descrip, initialItems, monster, locked) {
    this.name = name;
    this.description = function() {
        return descrip;
    }
    this.items = initialItems; //search command to show objects
    this.hasMonster = monster;
    this.isLocked = locked;
    // add any additional properties that you need, suggested ideas include:
    //  - a list of prerequisite items needed to enter the location
    //  - boolean variable to indicate locked/unlocked
    //  - boolean variable to indicate dark/illuminated
    //  - list of monsters/enemies/etc. in the location
    //  - anything else you can think of that work for your story!
}

// The Location functions below are a good start, buy you might well
// decide you need other functions to support additional properties,
// such as any prereqs, monsters, etc. that you add to your game.

Location.prototype.has = function(item) {
    return this.items.indexOf(item)>=0;
    // this will be like player.has from earlier examples
}

Location.prototype.remove = function(item) {
    var pos = this.items.indexOf(item);
    if (pos >= 0) {
        this.items.splice(pos, 1);
    }
    // this will be a lot like player.drop
    else {
        displayFeedback(location.name+" doesn't have the "+item.name);
    }
}

Location.prototype.put = function(item) {
    this.items.push(item);
    // this will be similar to the original version of player.pickup
}

/*
    NOTE: For the functions below, we could instead make them methods of our
    map object - then we could call them as map.connect(from,to)
*/ 

var indexOfLocation = function(map, locName) {
    var x;
    for (var i = 0; i < map.locations.length; i ++){
        if(map.locations[i].name === locName) {
            return i;
        }
    }
            return -1;
    // this should work like indexOf, but searches for a location whose name matches
}

function isConnected(map, from, to) {
    if(map.connections[from][to] === 1) {
            return true;
    }
    else
            return false;
    // check if there is a 1 in the corresponding cell of connections
}

// example - how to write a function that makes a path between two locations
function connect(map, from, to) {
    map.connections[from][to] = 1;
    map.connections[to][from] = 1;
}

function disconnect(map, from, to) {
    map.connections[from][to] = 0;
    map.connections[to][from] = 0;
}
// sample map - like the one you created during lab
var map = {
    locations: [
        new Location("bedroom", "You are in a bedroom. You can move to bathroom. There is a 'secret key' in the room", ["secret key"], false, true),
        new Location("bathroom", "You are in a bathroom. You can move to the bedroom or den. There is a 'bedroom key' and a 'pipe' in the room", ["bedroom key", "pipe"], false, false),
        new Location("den", "You are in a den. You can move to the bathroom or kitchen.", [""], true, false),
        new Location("kitchen", "You are in a kitchen. You can move to the den, hallway, or dining room. There is a knife in the room.", ["knife"], false, false),
        new Location("hallway", "You are in a hallway. You can move to the kitchen or living room.", [""], true, false),
        new Location("living room", "You are in a living room. You can move to the dining room or the hallway. There is a gun in the room.", ["gun"], false, false),
        new Location("dining room", "You are in a dining room. You can move to the living room, kitchen, or billiard room.", [""], true, false),
        new Location("billiard room", "You are in a billiard room. You can move to the dining room. There is a grenade in the room.", ["grenade"], false, false),
        new Location("secret", "You saved your friend! You win!", [""], false, true),
    ],
    //need to make the strings into the object constructors (keybedroom, knife, gun..)
        //changed for testing purposes
    //add in items.js to html file

    connections: [ [0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ] 
};

// example of a different way to build the adjacency matrix
connect(map, 0, 1);
connect(map, 1, 2);
connect(map, 2, 3);
connect(map, 3, 4);
connect(map, 3, 6);
connect(map, 4, 5);
connect(map, 5, 6);
connect(map, 6, 7);
connect(map, 7, 8);

// little test function so we can get used to the matrix and see if it works
function testMap() {
    var j;
    console.log("The " + map.locations[0].name + " is adjacent to:");
    for (j in map.connections[0]) {
        if (map.connections[0][j] === 1) {
            console.log(" the " + map.locations[j].name);
        }
    }
}

//testMap(); // no need to have this anymore once we've tested it
