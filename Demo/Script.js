describe('Protractor Test', function(){
	
	it('testDemo', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("10");
		element(by.id("gobutton")).click();
		
		//assertion
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("15");
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
		});
		
		//repeater
		element(by.repeater('result in memory')).element(by.css("td:nth-child(1)")).getText().then(function(text){
			console.log("text from table: "+text)
		})
		
		element(by.repeater('result in memory')).element(by.css("td:nth-child(2)")).getText().then(function(text){
			console.log("text from table: "+text)
		})
		
		element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log("text from table: "+text)
		})
		
		
		
		})
			
})