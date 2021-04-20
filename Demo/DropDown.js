describe('DropDown', function(){
	function calc(a,b,c){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(values){
				if(values == c){
					item.click();
				}
			})
		})
		element(by.id("gobutton")).click();
	}
	
	it('Calculation', function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		calc(10, 20, "ADDITION");
		calc(10, 20, "DIVISION");
		calc(10, 20, "MODULO");
		calc(10, 20, "MULTIPLICATION");
		calc(10, 20, "SUBTRACTION");
		
		element.all(by.repeater("result in memory")).each(function(items){
			items.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
		
	})
	
	
	
	
	
	
	
})