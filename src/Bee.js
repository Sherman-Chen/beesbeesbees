var Bee = function(job) {
	// Grub.call(this);
	this.age = 5;
	this.color ='yellow';
	this.job = job || "keep on growing";
};

Bee.prototype = new Grub;
Bee.prototype.constructor = Bee;

