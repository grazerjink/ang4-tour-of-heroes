var express = require('express');
var app = express();
var port= process.env.PORT || 3000;
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/", express.static(__dirname + "/src"));
app.listen(port);
