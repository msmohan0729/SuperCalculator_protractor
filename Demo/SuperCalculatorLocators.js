function Locators(){
	this.website= browser.get('http://juliemr.github.io/protractor-demo/');
	this.inputOne = element(by.model("first"));
	this.inputTwo = element(by.model("second"));
	this.goButton = element(by.id("gobutton"));
	this.calcResult = element(by.css("h2[class='ng-binding']"));
	this.operator = element(by.model("operator"));
	this.MULTIPLICATION = by.css("option[value='MULTIPLICATION']");
};

module.exports = new Locators();