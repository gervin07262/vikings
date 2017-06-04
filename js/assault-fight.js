var AssaultFight = function (teamOne, teamTwo) {
  var maxTurns = Math.floor((Math.random() *5) + 3);
  maxTurns = maxTurns < 5 ? 5 : maxTurns;
  Fight.call(this, teamOne, teamTwo, maxTurns);
  this.teamOne = teamOne;
  this.teamTwo = teamTwo;
}

AssaultFight.prototype = Object.create(Fight.prototype);

AssaultFight.prototype.constructor = AssaultFight;

AssaultFight.prototype.startFight = function () {
  console.log('********************* Start AssaultFight *********************');
  var i = 1;
  var randomSaxon = 0;
  while (i<=this.maxTurns && this.continueFight) {
    console.log('Turn: ' + i);
    randomSaxon = Math.floor((Math.random() * this.teamTwo.length));
    console.log(this.teamOne[0].name + ' attack to ' + (randomSaxon + 1) + ' Saxon');
    this.warriorRecieveAttack(this.teamTwo[randomSaxon], this.teamOne[0]);
    console.log('the health of ' + (randomSaxon + 1) + ' Saxon' + ' now is: ' +
    this.teamTwo[randomSaxon].health);

    console.log((randomSaxon + 1) + ' Saxon' + ' attack to ' + this.teamOne[0].name);
    this.warriorRecieveAttack(this.teamOne[0], this.teamTwo[randomSaxon]);
    console.log('the health of ' + this.teamOne[0].name + ' now is: '+ this.teamOne[0].health);

    // verify randomSaxon is die
    if (this.teamTwo[randomSaxon].health <= 0)
        this.teamTwo.splice(randomSaxon, 1);

    //verify viking is die
    if (this.teamOne[0].health <= 0)
        this.teamOne.splice(0, 1);

    randomSaxon = Math.floor((Math.random() * this.teamTwo.length));
    console.log(this.teamOne[1].name + ' attack to ' + (randomSaxon + 1) + ' Saxon');
    this.warriorRecieveAttack(this.teamTwo[randomSaxon], this.teamOne[1]);
    console.log('the health of ' + (randomSaxon + 1) + ' Saxon' + ' now is: ' +
    this.teamTwo[randomSaxon].health);

    console.log((randomSaxon + 1) + ' Saxon' + ' attack to ' + this.teamOne[0].name);
    this.warriorRecieveAttack(this.teamOne[1], this.teamTwo[randomSaxon]);
    console.log('the health of ' + this.teamOne[1].name + ' now is: '+ this.teamOne[1].health);

    // verify randomSaxon is die
    if (this.teamTwo[randomSaxon].health <= 0)
        this.teamTwo.splice(randomSaxon, 1);

    //verify viking is die
    if (this.teamOne[1].health <= 0)
        this.teamOne.splice(1, 1);

    i++;
  }
  console.log('********************* End AssaultFight *********************');
  console.log('The winners of the assault is: '+ this.decideWinner())
}

AssaultFight.prototype.continueFight = function () {
  return (this.teamOne.length >0 && this.teamTwo.length > 0) ? true :  false;
}

AssaultFight.prototype.decideWinner =  function () {
  var casualtieWarriorteamOne = 2 - this.teamOne.length;
  var casualtiewarriorteamTwo = 11 - this.teamTwo.length;
  return (casualtieWarriorteamOne < casualtiewarriorteamTwo) ? 'Vikings' : 'Saxons';
}
