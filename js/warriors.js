var Warrior = function (health, strength) {
  this.health = health;
  this.strength = strength;
}

var Viking = function (name, health, strength) {
  Warrior.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Warrior.prototype);

Viking.prototype.constructor = Viking;

var Saxon = function () {
  var health = Math.floor((Math.random() * 50) + 10);
  var strength = Math.floor((Math.random() * 10) + 8);
  Warrior.call(this, health, strength);
}

Saxon.prototype = Object.create(Warrior.prototype);

Saxon.prototype.constructor = Saxon;
