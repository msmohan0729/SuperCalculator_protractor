describe('Shopping Cart', function(){
var noOfItemsInCart=0;
	
	function addToCart(itemName){
		element.all(by.tagName("app-card")).each(function(item){
			item.element(by.css("h4 a")).getText().then(function(text){
				if(text == itemName){
					item.element(by.css("button[class='btn btn-info']")).click().then(function(){browser.sleep(2000)})
					noOfItemsInCart++;
				}
			})
		})
	}
		
	function verifyTotalPriceInCart(){
		element.all(by.css("table[class='table table-hover'] tr td[class='col-sm-1 col-md-1 text-center'] strong")).each(function(rows){
			rows.getText().then(function(text){
				console.log(text);
				var sliced= text.split(" ");
				var temp = Number(sliced[1]);
				console.log(temp);
			})
		})	
	}
	
	it('Cart', function(){
		browser.manage().window().maximize();
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.linkText("Shop")).click();
		
		addToCart("Samsung Note 8");
		addToCart("iphone X");
		addToCart("Blackberry");
		
		element(by.partialLinkText("Checkout")).click().then(function(){browser.sleep(2000)})
		verifyTotalPriceInCart();
		
	})
})