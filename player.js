/*
NOTES:
    All comments inside each function body should
map closely to individual JavaScript statements.
    Also provided are suggested helper functions that
make it easier to write the functions below.
    These are just suggestions - your specific game
may or may not have each function shown here - that
will depend on your vision for how the game will work.
*/

// Global player object (can you make this not global?)
var player = {
    name: "", // set this when the player enters a name
    location: null, // set this when game starts, or set it here
    items: [],
    // add any othe properties as necessary here
}

// player functions - these are commands in the game

/*
    Take an item from the world and add it to the player.
    Helpful functions: Location.has, Location.remove, displayFeedback
*/
player.pickup = function(item) {
        // check whether the current location has the item
    if(Location.has(item)){
                 // remove the item from the current location
            Location.remove(item);
            this.items.push(item);
    }
    // otherwise
        // display feedback indicating that the item is not present
    else {
        displayFeedback("The "+item.name+ "is not in this location");
    }    

};

/*
  Put an item back into the world, removing it from the player.
  Helpful functions: Location.put, displayFeedback
*/
player.drop = function(item) {
    var pos = this.items.indexOf(item);
    if (pos >= 0) {
        this.items.splice(pos, 1);
        Location.put(item);
        // after removing item from the player, add it to the current location
    } else {
        displayFeedback(player.name+" doesn't have the "+item.name);
        // display feedback indicating that the player doesn't have item
    }
};

/*
    Move the player around the map.
    Helpful functions: indexOfLocation, isConnected, displayFeedback
*/
player.go = function(locName) {
    // set this to be the index of the new location
    var locNum = Location.indexOfLocation(locName); 
    // check whether the desired location is in the list of locations in the map
    if(locNum === -1) {
        displayFeedback(locName+ " is not a valid location");
    }
    // check if the player is already at the location they asked for
            // display feedback indicating the player is already here
    if(player.location.name === locName){
        displayFeedback("You are already in this location");
    }
        // otherwise check if the desired location is connected to the current location
    if(! Location.isConnected(map,Location.indexOfLocation(player.location.name),locNum)){
        displayFeedback("These 2 rooms aren't connected");
    }
    // if so, set the current location to be the new location
    else{
        player.location = map[locNum];
    }
            // or... you might first perform other checks, like whether the player has the required items
        // otherwise
            // display feedback indicating that the new location is not reachable from the current location
    // otherwise
        // display feedback indicating that it is not a valid location
};

/*
    Uses and item in the player's possession.
    Examples might be using a crowbar to open a door, using a
    weapon to slay a zombie, using a key to unlock a door, etc.
*/
player.has = function(item){
    return this.items.indexOf(item) >=0;
}

    // check first that the user has the item
player.use = function(item) {
    if(player.has(item)) {
     //TODO add item functionality
    }   
    else {
        displayFeedback("You don't have the "+item.name);
    }
    
        // then "use" the item... what this means or how it works depends on your game
    // otherwise
        // display feedback indicating that the player doesn't have this item
}
