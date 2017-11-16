'use strict';


function route(handle, pathname, response, request) {
  console.log("about to route a request for " + pathname);

  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);

  } else {

    console.log("no request handler found for" + pathname);
    response.writeHead(404, {"Content-Type" : "text / plain"});
    response.write("404 Not Found");
    response.end();
  }
}


exports.route = route;


// what we're doing here is checking if a request handler for the given pathname exists.
// If so, call the function.

// handle[pathname](); expression = "please, handle this pathname"
