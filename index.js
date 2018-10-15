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
 
Query this database: db.employinfo.find().pretty();


*/
/* --- Server is listening on port 3000 --- */

 app.listen(3000);