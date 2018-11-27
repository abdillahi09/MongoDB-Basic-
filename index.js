/* --- Setting up Server and Dependencies --- */
var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase1');


/* -- CODE for DB --db.employinfo.find().pretty();-*/

app.get('/', (req, res) => {
    console.log("We are live today from NY")
})

 /* 
 ANSWERS COMMENTS
 
Query this database: db.employinfo.find().pretty();

db.employinfo.find({"salary":{$gt:"7000"}}).pretty();
db.employinfo.find().("$orderby",{"salary":-1}).pretty();
db.employinfo.find().("$orderby",{"salary":1}).pretty()'
db.employinfo.count({ "salary":{'$gt':"5000",'$lt':"40000"}}).pretty();
db.employinfo.find({"designation":{$ne:"Developer"}}).pretty();
db.employinfo.find({$or:[{"city":"Singapore"},{"salary":{$gt:"8000"}}]}).pretty();
db.employinfo.remove({"ename":"Rice Time"},1);




*/
/* --- Server is listening on port 3000 --- */

 app.listen(3000);
