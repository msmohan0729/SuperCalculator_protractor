describe('Form Practice', function(){
	it('Different Locators', function(){
		browser.manage().window().maximize();
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		//to get the page title
		browser.getTitle().then(function(text){
			console.log("The Title of the page is: "+text);
		})
		
		//name locator
		element.all(by.name("name")).get(0).sendKeys("No Name");
		element(by.name("email")).sendKeys("noname@gmail.com");
		
		//css locator
		element(by.css("input[type='password']")).sendKeys("Password@123");
		
		element(by.id("exampleCheck1")).click();
		
		//css containing text locator
		element(by.cssContainingText("select[class='form-control'] option", "Female")).click();
		
		//all locator
		element.all(by.name("inlineRadioOptions")).get(1).click();
		
		//buttonText locator
		element(by.buttonText("Submit")).click().then(function(){
			element(by.css("div[class*='success']")).getText().then(function(text){
				console.log(text);
			})
		})
		
		
		element.all(by.name("name")).get(0).clear()
		
		element.all(by.name("name")).get(0).sendKeys("M").then(function(){
			element(by.css("div[class*='danger']")).getText().then(function(text){
				console.log(text);
			})
		})
	
		})
	
})