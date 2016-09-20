//Colleen's edit at 10:!3

//4:40pm
//main


// npm init
// name: (twitter-js)
// version: (1.0.0)
// description: a cool tweet app


//questions:
//npm install express --save
//Check the package.json to confirm they were added as dependencies.

//touch .gitignore
//node_modules

//****initialize server with 'node app.js' CLI
var express = require( 'express' );
var morgan = require('morgan')
var app = express(); // creates an instance of an express application

//tell your app to listen for requests 
//on port 3000, and log the message 
//"server listening" upon connection.

app.listen(3000, function(){
	console.log('the server is listening to 3000');
})
//Try running your app.js file with the node terminal command.

// Does the app run without an error?
// Do you see your connection message?


//the all encompassing case
app.use(morgan('dev')) //developer
// 	function ( request, response, next){
//console.log('This request\'s method:',request.method,"\\",200) //"\'",	201;); //TERMINAL back end not int he browser
// 	//request method could be the get or post method
// 	response.hi = "Hello"; //unsure what this does
// 	next(); // call `next`, or else your app will be a black hole 
// });

//app.use()

//Add a GET handler to your app that sends back a 
//welcome message when the browser requests the / (or "root") URI
//WORKS

app.get('/',function(request, response, next){
	// var statusCode = response.status(200); //code to signla that get was sucessfully
	// console.log(statusCode);
	//response.sendStatus();
	response.send('Welcome to the page');
})
//control c, restart it with 'node app' in CLI
//network tab in dev tools, you should see a successful (200) status code

//WORKS
app.get('/news',function(request, response, next){
	response.send('News today');
})

//WORKS
app.get('/is-anybody-in-there',function(request, response, next){
	response.send('this is a response to a GET');
	next();
})

//post route handler
//you test the gets, with a url
//how do you test the posts? 
app.post('/modernism',function(request, response, next){
	response.send('this is a response to a POST');
})
//WORKS
app.get('/special/',function(request, response, next){
	//response.sendStatus(200);
	response.send("you reached the special area.");
})

//morgan

//does a request equal a verb?

//request object and method is a key: get, put, post, delete
//request methods are verbs

//what is the get, put, post, use group v the CRUD group
//Log at least each incoming verb and route?
//how do you test the posts? (know the gets) 
//return the status code only know of .status(###); but that 
//seems to be for assigning and not 
//response.status(###)
//incoming request is get post pull delete
//verb is CRUD

//curl locolhost/3000/ -X Get -i
//curl http://localhost/1337/example -X GET -i
