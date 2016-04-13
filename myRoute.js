var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

var users =[
        {id:1, fName:'Hege1', lName:"Pege" , title:"Software Engineer", sex:"female", age:"25" },
        {id:2, fName:'Kim',  lName:"Pim" ,title:"Staff Engineer", sex:"female", age:"52" },
        {id:3, fName:'Sal',  lName:"Smith", title:"UI Designer", sex:"male", age:"26" },
        {id:4, fName:'Jack', lName:"Jones", title:"Backend Engineer", sex:"male", age:"31" },
        {id:5, fName:'John', lName:"Doe", title:"Accountant", sex:"male", age:"35" },
        {id:6, fName:'Peter',lName:"Pan", title:"Free lancer", sex:"female", age:"28" }
        ];

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/users', function(req, res) {
	res.send(users);
});

app.listen(3000, function() {
	console.log('index.html is starting, with public saved static files. Iloveoov');
});
