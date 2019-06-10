// file: index.js

var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');
const methodOverride = require('method-override');
var passport = require("passport");
var passportJWT = require("passport-jwt");
var mysql = require('mysql');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;


var users = [
    {
        id: 1,
        name: 'jonathanmh',
        password: '%2yx4'
    },
    {
        id: 2,
        name: 'test',
        password: 'test'
    }
];

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);
    // usually this would be a database call:
    var user = users[_.findIndex(users, { id: jwt_payload.id })];
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});

passport.use(strategy);
const pool = mysql.createPool({


    host: 'northside.in',
    user: 'shakir',
    password: 'shakir123',
    database: 'shakir_test'
});

var app = express();
app.use(passport.initialize());
app.use(methodOverride('_method'));
// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.json());       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json())

app.get("/", function (req, res) {
    res.json({ message: "Express is up!" });
});

app.post("/login", function (req, res) {
    if (req.body.name && req.body.password) {
        var name = req.body.name;
        var password = req.body.password;
    }
    // usually this would be a database call:
    var user = users[_.findIndex(users, { name: name })];
    if (!user) {
        res.status(401).json({ message: "no such user found" });
    }

    if (user.password === req.body.password) {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        var payload = { id: user.id };
        // var token = 'BEARER '+jwt.sign(payload, jwtOptions.secretOrKey);
        var token = jwt.sign(payload, jwtOptions.secretOrKey);

        res.json({ message: "ok", token: token });
    } else {
        res.status(401).json({ message: "passwords did not match" });
    }
});



app.get("/secret", passport.authenticate('jwt', { session: false }), function (req, res) {
    res.json({ message: "Success! You can not see this without a token" });
});



app.get('/employee', passport.authenticate('jwt', { session: false }), function (req, res, ) {
    console.log(req.query);

    pool.query('select * from employee where id=?', [req.query.id], function (error, results, fields) {
        var x = JSON.stringify(results);
        if (x === '[]') {
            res.end('<h1><a href="http://northside.in/restapi/">Click Here To Go Back</a></h1>' + '<h2>ERROR: No Such ID<h2>')
        }
        //res.end(JSON.stringify(results));
        res.end('<h1><a href="http://northside.in/restapi/">Click Here To Go Back</a></h1>' + JSON.stringify(results));




    });
});




/*
app.get("/secretDebug",
  function(req, res, next){
    console.log(req.get('Authorization'));
    next();
  }, function(req, res){
    res.json("debugging");
});




*/
var server = app.listen(process.env.PORT || 3000, function () {
    console.log('Your node js server is running');
});