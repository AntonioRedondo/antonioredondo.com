const connect = require("connect");
const serveStatic = require("serve-static");
const opn = require("opn");

const url = "http://localhost:3000";

connect().use(serveStatic("docs", { index: "index.htm" })).listen(3000);
opn(url);

console.info("App started on " + url + "\nThe system default browser will open automatically."); // eslint-disable-line no-console
