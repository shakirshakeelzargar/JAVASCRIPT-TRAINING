const express = require('express');
const app = express();
var mysql      = require('mysql');




var connection = mysql.createConnection({
    host     : '148.72.232.93',
    user     : 'shakir',
    password : 'shakir123',
    database : 'shakir_test'
  });
   
  connection.connect();
   
  connection.query('SELECT * FROM EMP', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
   
  connection.end();


  app.get('/customers', function (req, res) {
    connection.connect(sqlConfig, function() {
        var request = new connection.Request();
        request.query('select * from EMP', function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})




/*
app.get('/',(req, res) => {
res.send('Hello World');
});

app.get('/api/courses',(req, res) => {
    res.send([1,2,3]);
    });
*/
app.listen(3000, () => console.log('Listening on port 3000'));




//app.post()
//app,put()
//app.delete()