# lab-bonus
node beginner


# about
this document is to get you started with developing applications for Node.js.


# warning
can get a little tricky, but don't be discouraged.

"I’m really just the guy I talked about in the previous paragraph. I know a thing or two about developing backend web applications, but I’m still new to “real” JavaScript and still new to Node.js. I learned some of the more advanced aspects of JavaScript just recently. I’m not experienced.
Which is why this is no “from novice to expert” book. It’s more like “from novice to advanced novice”.
If I don’t fail, then this will be the kind of document I wish I had when starting with Node.js."


# server-side
defines what you can do with the language, but it doesn't say much about what the language itself can do. JavaScript is a "complete" language : may use it in many context and achieve about anything you request.


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
let's find out exactly what is going on;

a. first line requires the HTTP module that ships with Node.js and makes a pathway through the variable 'http'

b. then we call the functions the http module (server.js) offers : "create server" This function returns an object which has a method 'listen' which takes the numeric value (which is the port number being used) by our HTTP server.

c. There's two ways to create / open a server up (refer to the commented line in server.js)


# asynchronous callbacks
Let's assume that the db query is really slow (database query) and that it has to read a lot of rows. If there is a slow database query somewhere in the process, it'll slow down the ENTIRE performance, hence we use asynchronous callbacks.

HTTP server needs a function it can call upon incoming requests - if Node.js would start the server and then just pause waiting for another request, it'll be very inefficient. Also note that requests happen once the previous request is completed and answered for.

It's important to note that asynchronous models has its limitations. Node.js is just a single process and can run only one single CPU core. "Personally, I find this model quite approachable, because it allows to write applications that have to deal with concurrency in an efficient and relatively straightforward manner."


# how server handles requests
