
	var http = require("http");
	var express = require('express');
	var app = express();
	var mysql      = require('mysql');
	var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
var connection = mysql.createConnection({
  host     : 'northside.in',
  user     : 'shakir',
  password : 'shakir123',
  database : 'shakir_test'
});
 
connection.connect();
 
app.param('id', function (req, res, next, id) {

    next()
  })


app.get('/users/get', (request, response) => {
  connection.query('SELECT * FROM emp', (error, result) => {
    if (error) throw error;

      response.send(result);
  });
});





// Add a new user
app.post('/users/post', (request, response) => {
    connection.query('INSERT INTO emp(id,name,phone,address) VALUES (2,"JHON","8742999555","srinagar");', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`User added SUCCESSFULLY`);
    });
});




// Update an existing user
/*
app.put('/users/put/:id', (request, response,bodyParser) => {
    var id = request.params.id;
 
    connection.query('UPDATE emp SET address=srinagar WHERE id = 2;', [request.bodyParser, id], (error, result) => {
        if (error) throw error;
 
        response.send('User updated successfully.');
    });
});
*/
//Method2
/*
app.put('/users/put', function (req, res) {
    let id = req.body.id;
    let name = req.body.name;
    if (!id || !name) {
      return res.status(400).send({ error: user, message: 'Please provide name and id' });
    }
    connection.query("UPDATE emp SET address = ? WHERE id = ?", [name, id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
     });
    });

*/

/*
app.delete('/users/delete/:id', (request, response,next) => {
    var id = request.params.id;
 
    connection.query('DELETE FROM emp WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send('User deleted.');
    });
});
*/
//METHOD2
//rest api to delete record from mysql database
app.delete('/users/delete/:id', function (req, res) {
   // console.log(req.body);
    connection.query('DELETE FROM customer WHERE Id=?', [req.body.Id], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });

app.get('/users/get/:id', (request, response,next) => {
    var id = request.params.id;
 
    connection.query('SELECT * FROM emp WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});







app.listen(3000, () => console.log('Listening on port 3000'));




//app.post()
//app,put()
//app.delete()