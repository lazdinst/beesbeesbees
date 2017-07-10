var ForagerBee = function() {
  // call the Bee superclass
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

var foragerBee = new ForagerBee();

ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure)
  return this.treasureChest;
}
