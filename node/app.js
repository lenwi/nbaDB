
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const {getTeams} = require('./routes/viewTeams');
const {getPlayer} = require('./routes/addPlayer');
const {getHideArena} = require('./routes/hideArena');
const {getAddTeam} = require('./routes/hideArena');
const port = 9000;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'nbaDB'
  });

  db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');

  });

  global.db = db;


app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

app.get('/', getHomePage);
app.get('/viewTeams', getTeams);
app.get('/addPlayer', getPlayer);
app.get('/hideArena', getHideArena);
app.get('/addTeam', (req, res) => {
    res.render('addTeam.ejs', {
        title: "Add Team"
    });
});
app.post('/addTeam', (req, res) => {
    console.log(req.body);
    const team = req.body.team;
    const city = req.body.city;
    const country = req.body.country;
    const arena = req.body.arena;
    var cityquery = "INSERT INTO City (name, abbrev, country) VALUES ('" + city + "','" + city.substr(0,3) + "','"+ country +"');";
    console.log(cityquery);
    db.query(cityquery, (err, result) => {
        if (err) {
            res.redirect('/addTeam');
        }
    });
    var cityID;
    var cityIDQuery = "SELECT id FROM City WHERE name='"+city+"';";
    console.log(cityIDQuery);
    db.query(cityIDQuery, (err, result) => {
        if (err) {
            res.redirect('/addTeam');
        } else {
            cityID = result;
        }
    });
    var teamquery = "INSERT INTO TeamPlaysIn (name, cityID) VALUES ('"+ team + "',"+ cityID+");";
    console.log(teamquery);
    db.query(teamquery, (err, result) => {
        if (err) {
            res.redirect('/addTeam');
        }
    });
    var teamID;
    var teamIDQuery = "SELECT id FROM TeamPlaysIn WHERE name='"+team+"';";
    console.log(teamIDQuery);
    db.query(teamIDQuery, (err, result) => {
        if (err) {
            res.redirect('/addTeam');
        } else {
            teamID = result;
        }
    });
    var stadiumquery = "INSERT INTO Stadium (teamID, name) VALUES ("+ teamID + ",'"+ arena + "');";
    console.log(stadiumquery);
    db.query(stadiumquery, (err, result) => {
        if (err) {
            res.redirect('/addTeam');
        }
    });
    res.redirect('/viewTeams');
});
// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

