
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const {getTeams, postTeams} = require('./routes/viewTeams');
const {getHideArena, postHideArena} = require('./routes/hideArena');
const {addPlayer, addPlayerPage} = require('./routes/addPlayer');
const {getNewZscore} = require('./routes/newZscore');
const {getStanding} = require('./routes/viewStanding');
const {deletePlayer} = require('./routes/deletePlayer');
const {editPlayerPage, editPlayer} = require('./routes/editPlayer');
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
app.post('/viewTeams', postTeams);
app.get('/hideArena', getHideArena);
app.post('/hideArena', postHideArena);

app.get('/addPlayer', addPlayerPage);
app.get('/viewStanding', getStanding);
app.get('/delete/:id', deletePlayer);
app.get('/hideA', getHideAction);
app.get('/showA', getShowAction);
app.get('/hideZ', getHideZscore);
app.get('/hideAll', getHideAll);
app.get('/edit/:id', editPlayerPage);

app.post("/form", getNewZscore);
app.post("/addPlayer", addPlayer);
app.post("/edit/:id", editPlayer);
app.post("/standingForm", getStanding);


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

