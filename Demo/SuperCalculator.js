describe("Super Calculator", function(){
	var locatorObj = require("./SuperCalculatorLocators.js");
	var using = require('jasmine-data-provider');
	var data = require("./data.js");
	
	beforeEach(function(){
		locatorObj.website;		
	});
	
	using(data.AdditionDatadriven, function(data, description){
		it('Addition Operation '+ description, function(){
			locatorObj.inputOne.sendKeys(data.firstInput);
			locatorObj.inputTwo.sendKeys(data.secondInput);
			locatorObj.goButton.click();
			
			//assertion
			expect(locatorObj.calcResult.getText()).toBe(data.result);
		
			locatorObj.calcResult.getText().then(function(text){
				console.log("Addition of "+data.firstInput+" and "+data.secondInput+" : "+text);
			})
		})
	});
	
	using(data.MultiplicationDatadriven, function(data, description){
		it('Multiplication Operation '+ description, function(){
			locatorObj.inputOne.sendKeys(data.firstInput);
			locatorObj.inputTwo.sendKeys(data.secondInput);
			locatorObj.operator.element(locatorObj.MULTIPLICATION).click();
			locatorObj.goButton.click();
			
			//assertion
			expect(locatorObj.calcResult.getText()).toBe(data.result);			
			
			locatorObj.calcResult.getText().then(function(text){
				console.log("Multiplication of "+data.firstInput+" and "+data.secondInput+" : "+text);
			})
		})
	});
	
	
	
	
	afterEach(function(){
		console.log("Test is completed!!!!!!")
	});
})