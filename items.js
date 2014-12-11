/*
NOTES:
    This file may not be required in your game!
    This is a suggestion in response to some students' questions, such as
    how to make some items have "limited uses" or how to have weapons with
    different power/damage values.
    Depending on your own vision for your game, you might be just fine
    using Strings for your items (as we have up until now) and not using
    the ideas from this file at all.
*/

/*
    Constructor for an Item object.
    Feel free to add/change/remove properties and parameters as needed for your game.
*/
function Item(name, numUses, power) {
    this.name = name;
    this.uses = numUses;
    this.power = power;
}

Item.prototype.use = function() {
    this.uses--;
}

Item.prototype.usable = function() {
    return this.uses > 0;
}
function Key(name, target) {
    this.name = name;
    this.room = target;

}

Key.prototype.unlock = function() {
    locNum = indexOfLocation(map, this.room);
    if(isConnected(map,indexOfLocation(map, player.location.name),locNum)) {
        map.locations[locNum].isLocked = false;
        displayFeedback(player.name+" has unlocked the "+this.room);
    }
    else
        displayFeedback("This key is used to unlock another room.")
}
//move this function to player object, type unlock bedroom - split it into action/target and execute if have key

// You might want to have some functions for your items... here are just a few suggestions.

function Weapon(name, target) {
    this.name = name;
    this.target = target;
}
var itemList = [
var keyBedroom = new Key("bedroom key", "bedroom");
var gun = new Weapon("gun", "wolf");
var knife = new Weapon("knife", "frankenstein");
var grenade = new Weapon("grenade", "cyclops");
]

var indexOfItem = function(list, itemNum) {
    var x;
    for (var i = 0; i < list.length; i ++){
        if(list[i].name === locName) {
            return i;
        }
    }
            return -1;
    // this should work like indexOf, but searches for a location whose name matches
}