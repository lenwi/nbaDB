
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const {getTeams} = require('./routes/viewTeams');
const {getPlayer} = require('./routes/addPlayer');
const {getNewZscore} = require('./routes/newZscore');

//show/hide buttons
const {getHideAction} = require('./routes/index_buttons/hideAction');
const {getShowAction} = require('./routes/index_buttons/showAction');
const {getHideZscore} = require('./routes/index_buttons/hideZscore');
const {getHideAll} = require('./routes/index_buttons/hideAll');

const port = 9000;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'macbook123',
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

app.get('/hideA', getHideAction);
app.get('/showA', getShowAction);
app.get('/hideZ', getHideZscore);
app.get('/hideAll', getHideAll);

app.get("/form", function(req, res) {
  res.sendfile("./index.ejs");
})

app.post("/form", getNewZscore);


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

