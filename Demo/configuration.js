var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['SuperCalculator.js'],
  
  capabilities: {
	  'browserName': 'chrome'
  },
  
  onPrepare: function(){
	  browser.manage().window().maximize();
	  
	  //html report
	  jasmine.getEnv().addReporter(
		  new Jasmine2HtmlReporter({
		  savePath: 'target/screenshots'
		  })
	  );
  },
  
  jasmineNodeOpts: {
	    showColors: true, // Use colors in the command line report.
	  },
	 
 //suites to run multiple specs at a time	  
  suites: {
	  SmokeSuite : ['SuperCalculator.js', 'BasicForm.js'],
	  RegressionSuite : 'ShoppingKart.js'
  }
  
  
};