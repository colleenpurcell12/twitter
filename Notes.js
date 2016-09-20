//branches off the pipeline
//express router
//express.Router()

///the resquest object's userHeader has whether the resquest is from a browser or Note
//request is alwasy the first and response is alwayds the 2nd no matter which order you call them in
var express = require('express');
var app = express();

//with express
//CRUD create R update and delete
//create and post

app.listen(1337, function(){
	console.log('the server is listening to 1337');
})
//.use is just for slash (/) v all which matches on everything
app.all(function(req, res, function(){
	var echoObj = {
		headers: req.headers ,
		method: req.method,
		url: req.url
	}
	res.json(echoObj);
})

//only AFTER it hasn't matched on everything, does it continue until it looks for just a partial match

//**order matters

//get route handler
app.get('/example',function(request, response, next){
	response.send('this is a response to a GET');
})

//post route handler
app.post('/example',function(request, response, next){
	response.send('this is a response to a POST');
})

//all ther routes handler
app.all('/example',function(request, response, next){
	response.send('this is a response to a any other type of resquests');
})

//would never get sent as a response
//one response handler per request
app.get('/example',function(req, res, next){
	response.send('oh and also....');
})



//curl http://localhost/1337/example -X GET -i
//also good:
//curl http://localhost/1337/example -i -X POST
//without the -i, you only get the message, rather than the object keys and values
//-X preceeds the type of request (get, post, put, etc.)

//**** Create/Read example
var dumbledores = [];
app.post('/data',function(req, res){
	dumbledores.push({
		name: 'dumbledores',
		id: id++; //increments each time
	});
	res.status(201).json(dumbledores[dumbledores.length-1]); //sucess code is 201	
															//returns most resently created dumbledore object														
})
//get request to read what we've created
app.get('/data',function(req, res, next){
	res.json(dumbledores);		//updated the app, cleared it. without database, info isn't persistent
		//JSON View is a chrome extension
		//can only run it while the server is still running
})

//**** HOW TO USE NEXT
app.get('/whogoesthere', function(req, res, next){
	if(request.headers['user-agen'].split('/')[0]==='curl'){
		response.status(401).send("this is as far as you go, curl...")
	} else { next();
	}
})

app.get('/whogoesthere', function(req, res, next){
	response.send("Hello, browser user!")
})

//**** Params
//how users can pass information
app.get('/times2/:number', function(req, res, next){
	var number = request.params.number;
	var result = number * 2;
	response.json(result);
})


app.get('/times2nums/:number1/:number2', function(req, res, next){
	var number1 = request.params.number1;
	var number2 = request.params.number2;
	var result = number1 * number2;
	response.json(result);
})

//question mark specifies the query string, aka params with the name specified in the code
// url: localhost:1337/times2/?number1=2&number2=3
// => result is 6


//**** BODY
//TCP packages, order and composition to see how to determine whether you have all the components
//body parse, install and require the module
//npm install body-parser
var bodyParser = require(body-parser);
//two types on bodies
//matches all verbs and does partial matches, without the url as the first, match for any url
app.use( bodyParser.urlencoded({extended: true}) );	//extended boiler plate, copy paste, standard thing 
app.use( bodyParser.json() );

app.post('/example', function(req, res, next){
	var resMessage = "Thank you for this: ", req.body.message;
	res.send(resMessage);
	// req.body;

})

//**** middleware*****
//the response from the user method will be passed to the next handler, pass control to next matchng handler
app.use(function ( req, res, next){
	console.log('This request\'s method:',request.method)
	respose.hi = "Hello";
	next();
});

app.use(function(req,res,next){
	res.sendStatus(201); //the .sendStatus method will have the 'hello' property fromt he former case
})

//ERRORS
app.get('/roulette',function(req,res,next){
	var n = Math.random()
	if (n>.5) {
		response.send('phew, now error this time');
	}
	else {
		var error = new Error();
		next(error);//NOW THE NEXT function will have a forth argument
	}

})

app.use(function (error,req,res, next){
	console.log('oh no', error);
	response.send(error);

})

//Router, mounting

var birdRouter = express.Router()

birdRouter.get('/hens', function(request, response, next){
	response.send('cluck');
})
birdRouter.get('/crows', function(request, response, next){
	response.send('caw');
}
})
app.use('/api', birdRouter);








