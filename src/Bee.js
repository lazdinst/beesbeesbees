var Bee = function() {
  //Step 01: Call the Grub Super Class
  Grub.call(this);
  //Step 05: Set age to 5
  this.age = 5;
  //Step 06: Set color to yellow
  this.color = 'yellow';
  //Step 07: Set job to Keep on Growing
  this.job = 'keep on growing';
};
//Step 02: Set the Prototype
Bee.prototype = Object.create(Grub.prototype);
//Step 03: Set the Constructor
Bee.prototype.constructor = Bee;
//Step 04: Reference the constructor and create new object
var bee = new Bee();
