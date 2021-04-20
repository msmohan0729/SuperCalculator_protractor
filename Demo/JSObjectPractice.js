function Car(){
	this.color = "red";
	this.engine = "turbo";
	this.brand = "Mercedes";
	this.getModel = function(){
		console.log("2021 model car");
	};
};

module.exports= new Car();
