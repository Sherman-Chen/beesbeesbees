var ForagerBee = function(treasureChest) {
	Bee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = treasureChest || [];
	this.counter = 0;
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
	this.treasureChest[this.counter] = treasure;
	this.counter++;
};
