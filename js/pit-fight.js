var PitFight = function (fighterOne, fighterTwo, maxTurns) {
  Fight.call(this, fighterOne, fighterTwo, maxTurns);
}

PitFight.prototype = Object.create(Fight.prototype);

PitFight.prototype.constructor = PitFight;

PitFight.prototype.startFight = function () {
  console.log('********************* Start PitFight *********************');
  var i = 1;
  while (i<=this.maxTurns && this.continueFight) {
      console.log('Turn: ' + i);
      console.log(this.fighterOne.name + ' attack to ' + this.fighterTwo.name);
      this.warriorRecieveAttack(this.fighterTwo, this.fighterOne);
      console.log('the health of ' + this.fighterTwo.name + ' now is: '+ this.fighterTwo.health);

      console.log(this.fighterTwo.name + ' attack to ' + this.fighterOne.name);
      this.warriorRecieveAttack(this.fighterOne, this.fighterTwo);
      console.log('the health of ' + this.fighterOne.name + ' now is: '+ this.fighterOne.health);

    i++;
  }
  console.log('********************* End PitFight *********************');
  console.log('The winner of the pit is: ' + this.decideWinner(this.fighterOne, this.fighterTwo));
}

PitFight.prototype.continueFight = function () {
  return (this.fighterOne.health > 0 && this.fighterTwo.health > 0) ? true :  false;
}

PitFight.prototype.decideWinner =  function (fighterOne, fighterTwo) {
  return (this.fighterOne.health > this.fighterTwo.health) ? this.fighterOne.name : this.fighterTwo.name;
}
