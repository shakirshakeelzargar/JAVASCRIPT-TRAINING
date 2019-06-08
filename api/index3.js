var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
    host     : 'northside.in',
    user     : 'shakir',
    password : 'shakir123',
    database : 'shakir_test'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log(" app listening at http://%s:%s", host, port)

});

//rest api to get all results
app.get('/employee', function (req, res) {
   connection.query('select * from employee', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to get a single employee data
app.get('/employee/:id', function (req, res) {
    console.log(req);
    connection.query('select * from employee where id=?', [req.params.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 

//rest api to create a new record into mysql database
app.post('/employee', function (req, res) {
   var postData  = req.body;
   connection.query('INSERT INTO employee SET id=?,`name`=?,`salary`=?,`age`=?', [ req.body.id,req.body.name,req.body.salary, req.body.age], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to update record into mysql database
app.put('/employee', function (req, res) {
   connection.query('UPDATE `employee` SET `name`=?,`salary`=?,`age`=? where `id`=?', [req.body.name,req.body.salary, req.body.age, req.body.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to delete record from mysql database
app.delete('/employee', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `employee` WHERE `id`=?', [req.body.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
});