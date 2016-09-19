var connect = require("connect");
var serveStatic = require("serve-static");
var open = require("open");
var url = "http://localhost:3000/dist/index.htm";
connect().use(serveStatic(".")).listen(3000);
open(url);
console.info("App started on " + url + "\nThe system default browser should open automatically.");