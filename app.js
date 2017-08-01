var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/", express.static(__dirname + "/src"));
app.get("/",(req,res)=> {
    res.redirect("/index.html");
})
app.listen(port, (res)=> console.log("Server is listening on",port));