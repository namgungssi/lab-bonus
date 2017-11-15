'use strict';


// creating server
var http = require("http");
var url = require("url");


function start(route) {
function onRequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log ("Request for " + pathname + " received.");

  route(pathname);

  response.writeHead (200, { "Content-Type" : "text / plain"});
  response.write ("Hello World");
  response.end ();
}

http.createServer(onRequest).listen (8888);
console.log("server has started");
}

exports.start = start;






/*
http.createServer (function (request, response) {
  response.writeHead (200, {"Content-Type" : "text / plain"});
  response.write ("Hello World");
  response.end ();
})
  .listen (8888);
*/


/* pass around functions. we pass function say as
the first param (parameter) to the execute function.
Not the return value of say, but SAY which then becomes
the local variable by expFunction */
/*
function say (word) {
  console.log (word);
}

function execute (expFunction, value) {
  expFunction (value);
}

execute (say, "Hi");
*/


//  alt way of creating server
/*
var http = require ('http');

var server = http.createServer ();
server.listen (8888);


// here is an example of an anonymous function (considered advanced js)
// we define the function we want to pass to execute right there at the place execute expects its first parameter.

execute (function (word) {
console.log (word) }. "Hello");
})
*/
