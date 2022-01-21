var express = require('express');
var app = express();
const path = require('path');



app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/indeks.html")
});


app.get('/admin',function(req,res){
    res.sendFile(__dirname + "/admin.html")
});


app.listen(8000, function () {
    console.log("Server çalıştı...")
})