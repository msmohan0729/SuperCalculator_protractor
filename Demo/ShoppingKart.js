describe('Shopping Kart', function(){
	var noOfItemsInCart=0;
	var myArray=[];
	var count=0;
	var temp = 0;

	
	function addToCart(itemName){
		element.all(by.tagName("app-card")).each(function(item){
			item.element(by.css("h4 a")).getText().then(function(text){
				if(text == itemName){
					item.element(by.css("button[class='btn btn-info']")).click();
					noOfItemsInCart++;
				}
			})
		})
	}
		
	function verifyTotalPriceInCart(){
		
		element.all(by.css("table[class='table table-hover'] tr td[class='col-sm-1 col-md-1 text-center'] strong")).each(function(rows){
			rows.getText().then(function(text){
				console.log("Raw Text: "+text);
				var sliced= text.split(" ");
				console.log(sliced);
				temp = Number(sliced[1]);
				console.log("Extracted number: "+temp);
			})
			myArray[count]= temp;
			
		})
	}
	
	
	it('Add To Cart', function(){
		browser.manage().window().maximize();
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.linkText("Shop")).click();
		
		addToCart("Samsung Note 8");
		addToCart("iphone X");
		addToCart("Blackberry");	
	})
	
	it('Checkout Test', function(){
		element(by.css("a[class='nav-link btn btn-primary']")).getText().then(function(text){
			console.log(text);
			var checkoutItems=noOfItemsInCart.toString();
			console.log("No. of items in cart: "+checkoutItems);
			if(text.includes(checkoutItems)) console.log("Script Passed");
			else console.log("Script Failed");
		})	
	})
	
	it('Cart Testing', function(){
		element(by.partialLinkText("Checkout")).click().then(function(){browser.sleep(2000)})
		//countNoOfItemsInCartScreen();
		verifyTotalPriceInCart();
		console.log(myArray);
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
})