'use strict';


var querystring = require("querystring"), fs = require ("fs");
var formidable = require("formidable");


function start(response) {
  console.log("request handler 'start' was called");

  var body =
 '<html>'+
 '<head>'+
 '<meta http-equiv="Content-Type" content="text/html; '+
 'charset=UTF-8" />'+
 '</head>'+
 '<body>'+
 '<form action="/upload" method="post">'+
 '<textarea name="text" rows="20" cols="60"></textarea>'+
 '<input type="submit" value="Submit text" />'+
 '</form>'+
 '</body>'+
 '</html>';

// exec("ls -lah", function(error, stdout, stderr) {
  response.writeHead(200, {"Content-Type" : "text / html"});
  response.write(body);
  response.end();
};


function upload(response, request) {
  console.log("request handler 'upload' was called");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");

    fs.rename(files.upload.path, "/tmp/test.png", function(err) {
      if(error) {
        fs.unlink("/tmp/test.png");
        fs.reanme(files.upload.path, "/tmp/test.png");
      }
    });

  response.writeHead(200, {"Content-Type" : "text / plain"});
  response.write("You've sent the text : " +
  querystring.parse(postData).text);
  response.end();
});


function show(response) {
  console.log("request handler 'show' was called");
  response.writeHead(200, {"Content-Type" : "image/png"});
  fs.createReadStream("/tmp/test.png").pipe(response);
}
}

exports.start = start;
exports.upload = upload;

//don't forget to update all it's routed to.









// this allows us to write the request handlers into the router,
// giving the router somewhere to go.
