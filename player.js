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
player.unlock = function(locName) {
    var locNum = indexOfLocation(map, locName);
    var has = false;
    for(var i = 0; i < player.items.length; i ++) {
        token = player.items[i].split(" ");
        if(token[0] === locName){
            has = true; 
        }
    }
    if(isConnected(map,indexOfLocation(map, player.location.name),locNum) && has) {
        map.locations[locNum].isLocked = false;
        displayFeedback(player.name+" has unlocked the "+locName);
    }
    else
        displayFeedback("You must be outside the room to unlock the door.")
}

player.fightin = function(locName) {
    var has = false;
    var weapons = ["gun", "grenade", "knife", "pipe"];
    for(var i = 0; i < player.items.length; i++) {
        for(var j = 0; j<weapons.length; j++) {
            if(player.items[i] == weapons[j]) {
                has = true;
                var weaponName = player.items[i];
            }
        }
    }
    var locNum = indexOfLocation(map, locName);
    if(isConnected(map, indexOfLocation(map, player.location.name), locNum) && has) {
        map.locations[locNum].hasMonster = false;
        displayFeedback("You have defeated the monster and used up the "+weaponName);
        player.drop(weaponName);
        Location.prototype.remove(weaponName);
    }
}




player.pickup = function(item) {
        // check whether the current location has the item
    if(this.location.has(item)){
                 // remove the item from the current location
            this.location.remove(item);
            this.items.push(item);
            displayFeedback("You picked up the "+item);
    }
    // otherwise
        // display feedback indicating that the item is not present
    else {
        displayFeedback("The "+item+" is not in this location");
    }    

};

/*
  Put an item back into the world, removing it from the player.
  Helpful functions: Location.put, displayFeedback
*/
//fix text talking about description
player.drop = function(item) {
    var pos = this.items.indexOf(item);
    if (pos >= 0) {
        this.items.splice(pos, 1);
        this.location.put(item);
        // after removing item from the player, add it to the current location
    } else {
        displayFeedback(player.name+" doesn't have the "+item);
        // display feedback indicating that the player doesn't have item
    }
};

/*
    Move the player around the map.
    Helpful functions: indexOfLocation, isConnected, displayFeedback
*/
player.go = function(locName) {
    // set this to be the index of the new location
    var locNum = indexOfLocation(map, locName); 
    // check whether the desired location is in the list of locations in the map
    if(locNum === -1) {
        displayFeedback(locName+ " is not a valid location");
    }
    // check if the player is already at the location they asked for
            // display feedback indicating the player is already here
    else if(player.location.name === locName){
        displayFeedback("You are already in this location");
    }
        // otherwise check if the desired location is connected to the current location
    else if(! isConnected(map,indexOfLocation(map, player.location.name),locNum)){ //everytime i call index need map
        displayFeedback("These 2 rooms aren't connected");
    }

    else if(map.locations[locNum].hasMonster){
        displayFeedback("Monster inside the "+locName+". Go find a weapon.");
    }

    else if(map.locations[locNum].isLocked){
        displayFeedback("This door is locked. Find the key.");
    }
    //need to clear message if works
    //fix description, description property is a function so you want to call a function instead of just putting it in page as a string
    // if so, set the current location to be the new location
    else{
        player.location = map.locations[locNum];
        displayFeedback("You have successfully moved rooms")
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
