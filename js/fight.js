var Fight = function (fighterOne, fighterTwo, maxTurns) {
  this.fighterOne = fighterOne;
  this.fighterTwo = fighterTwo;
  this.maxTurns = maxTurns;
}

Fight.prototype.warriorRecieveAttack = function (warrior, warriorTwo) {
  warrior.health = warrior.health - warriorTwo.strength;
}
