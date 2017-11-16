# lab-bonus
node beginner


# about
This document is to get you started with developing applications for Node.js.


# warning
Can get a little tricky, but don't be discouraged.

"I’m really just the guy I talked about in the previous paragraph. I know a thing or two about developing backend web applications, but I’m still new to “real” JavaScript and still new to Node.js. I learned some of the more advanced aspects of JavaScript just recently. I’m not experienced.
Which is why this is no “from novice to expert” book. It’s more like “from novice to advanced novice”.
If I don’t fail, then this will be the kind of document I wish I had when starting with Node.js."


# server-side
Defines what you can do with the language, but it doesn't say much about what the language itself can do. JavaScript is a "complete" language : may use it in many context and achieve about anything you request.


# starting
1. open your editor  
2. create a file helloworld.js
3. console.log ('Hello World');
4. in your terminal, type = node helloworld.js
5. if set up accordingly, it should console log = Hello World


# application requirements
1. we need an HTTP SERVER
2. server will need to answer different to requests, depending on which URL is requesting for, hence a ROUTER is required in order to map requests accordingly.
3. REQUEST HANDLERS to fulfill / complete out the requests that arrived at the server.
4. ROUTER should also treat any incoming POST data and give it to the request handlers. ROUTER also needs to treat any incoming POST data and give it to the request handlers (REQUEST DATA HANDLING)
5. Not only do you want to handle requests for URLs, we also want to display content when URLs are requested requiring VIEW LOGIC (send content to browser)
6. Finally, an UPLOAD HANDLING for the user to upload files, images, etc.


* with Node.js, we not only implement our application, we also have to include the whole HTTP server.


# building
you may keep your code separated with MODULES.

so let's create a main file for HTTP to breathe in. Most case, you will see the index.js as the main, but we recommend you creating a server.js file for your HTTP server.

1. Create a file server.js in your directory and write the following code : (refer to server.js)

2. Run and test by typing in command = node server.js (it should give you no response if correct)

3. Open your browser and go to link http://localhost:8888/ to view your server and if correct, it shoud console log "Hello World"


# analyzing
Let's find out exactly what is going on;

a. first line requires the HTTP module that ships with Node.js and makes a pathway through the variable 'http'

b. then we call the functions the http module (server.js) offers : "create server" This function returns an object which has a method 'listen' which takes the numeric value (which is the port number being used) by our HTTP server.

c. There's two ways to create / open a server up (refer to the commented line in server.js)


# asynchronous callbacks
Let's assume that the db query is really slow (database query) and that it has to read a lot of rows. If there is a slow database query somewhere in the process, it'll slow down the ENTIRE performance, hence we use asynchronous callbacks.

HTTP server needs a function it can call upon incoming requests - if Node.js would start the server and then just pause waiting for another request, it'll be very inefficient. Also note that requests happen once the previous request is completed and answered for.

It's important to note that asynchronous models has its limitations. Node.js is just a single process and can run only one single CPU core. "Personally, I find this model quite approachable, because it allows to write applications that have to deal with concurrency in an efficient and relatively straightforward manner."


# how server handles requests
If you refer to server.js > the body of our callback function onRequest()

When the callback is requested and our onRequest() gets triggered, two parameters are passed into it : (request and response) > (req, res) whih are the objects in the method to handle details of the request made to HTTP.

Whenever a request is received, it uses the response.writeHead() function to send an HTTP status 200 (successful) and the Content-Type which is ('text') to the header of site. The response.write() function is set to console.log > Hello World.

* MAKE SURE TO response.end() TO END THE RESPONSE


# finding a place for our server module
You may use your server module just like any internal module : require its file and assign it to a variable.

Create a index.js file with the following content var server = require ("./server");

server.start();

* Make sure not to indent brackets for it will fuck your shit up.

Once you got that set, use command : node index.js in the terminal command line > to start server.

You can now add different parts of our application into different files and wire them together by making them modules.

* Making different HTTP request points at different parts of our code is called "routing"


# routing
"GET" "POST"

We need to look into the HTTP requests and extract the requested URL along with GET / POST params into our router.

All the information you need is available through the "request" object which is passed as the first param to our callback function (onRequest)

The url module provides methods which allow us to obtain the different parts of a URL (requested paths, query strings)

* querystring can be used to parse the query string for requested params.

* think of HTTP server and ROUTER requests as best friends. They need each other in order to function.

* If JavaScript objects are collections of name / value pairs, the values can be strings, numbers, etc. EVEN FUNCTIONS.

* It's simple to map different URLs to the request handler :
- ADD A KEY / VALUE PAIR "/" & requestHandlers.start,

- After defining our object, we pass it into the server as an additional param.

* "Handling request" means "answering requests"

* exec() executes a shell command from within Node.js. In example requestHandlers.js > we are going to use it to get a list of all files in the current directory ("ls -lah"), allowing us to display the full list in the browswer.

"What the code does is straightforward: create a new variable content (with an initial value of “empty”), execute “ls -lah”, fill the variable with the result, and return it."

* exec > execute


# handling POST requests
We need to tell Node.js which functions to call back to when these events occur. Add LISTENERS to the REQUEST object that's passing onRequest cb.


request.addListener("data", function(chunk) {
// called when a new chunk of data was received
});

request.addListener("end", function() {
// called when all chunks of data have been received
});


To implement this logic, it's the HTTP servers job to give the app all the data from a requests it needs to do its job so handle the POST data right in the server and pass the final data on the router and request handlers.


# Overview / Reference

As of now, The Node Craftsman Book contains the following chapters:
• Working with NPM and Packages • Object-Oriented JavaScript
• Test-Driven Node.js Development • Using and creating Event Emitters • Node.js and MySQL
• Node.js and MongoDB
