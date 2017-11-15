'use strict';


var server = require("./server");
var router = require("./router");

server.start(router.route);


//we're passing a function
