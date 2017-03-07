const connect = require("connect");
const serveStatic = require("serve-static");
const open = require("open");
const url = "http://localhost:3000/docs/index.htm";
connect().use(serveStatic(".")).listen(3000);
open(url);
console.info("App started on " + url + "\nThe system default browser should open automatically.");
