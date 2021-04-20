describe('Chain Locators', function(){
	var a=10;
	var b=5;
	
	it('Start Browser', function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	})
	
	
	it('Addition', function(){
		//browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log("Addition of "+a+" and "+b+" : "+text);
		})
//		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
//			console.log("Result from table: "+text);
//		})
	})
	
	it('Subtraction', function(){
		//browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.model("operator")).element(by.css("option[value='SUBTRACTION']")).click();
		
		element(by.id("gobutton")).click();
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log("Subtraction of "+a+" and "+b+" : "+text);
		})
	})
	
		it('Multiplication', function(){
		//browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click();
		
		element(by.id("gobutton")).click();
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log("Subtraction of "+a+" and "+b+" : "+text);
		})

	})
	
		it('Result Table', function(){
			element.all(by.repeater("result in memory")).count().then(function(count){
				console.log("Total no. of element with (result in memory) tag in webpage: "+count);
			})
			
			element.all(by.repeater("result in memory")).each(function(item){
				item.element(by.css("td:nth-child(3)")).getText().then(function(text){
					console.log(text);
				})
			})
		})
})
