
var express = require('express');
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'northside.in',
  user     : 'shakir',
  password : 'shakir123',
  database : 'shakir_test'
});
 
connection.connect();
 
connection.query('SELECT * from emp', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 


app.get('/users', (request, response) => {
  connection.query('SELECT * FROM emp', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});





app.listen(3000, () => console.log('Listening on port 3000'));




//app.post()
//app,put()
//app.delete()