module.exports = {
    addPlayerPage: (req, res) => {
        let teamsQuery = "SELECT name FROM teamplaysin" //get view of players

        // execute teamsQuery
        db.query(teamsQuery, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            console.log("###########################")
            console.log("Viewing add player page")
            res.render('addPlayer.ejs', {
                title: "NBA DB | Add Player", message:'',teams: result
            });
        });
    },
    addPlayer: (req, res) =>{
        console.log("Added player!")
        console.log(req)
        let name = req.body.first_name + " " + req.body.last_name;
        let number = req.body.number;
        let zscore = req.body.zscore;
        let position = req.body.position;
        let team = req.body.team;
        
        //Grab teamID from team;
        let teamIDQuery = "select id from teamplaysin where name='" + team + "'";
        let teamID = null;
        db.query(teamIDQuery, (err, res) => {
            if(err){
                console.log("Error grabbing teamID!");
                return res.status(500).send(err);
            }
            teamID = res[0].id;
            console.log("Team ID is: " + teamID);
          //  dasdasd
          let insertQuery = "INSERT INTO `playerplaysfor` (teamID, number, name, position, zscore) " +
            "VALUES (" + teamID + "," + number+",'" + name + "','" + position[0] + "'," + zscore + ")"
        console.log(insertQuery)
          db.query(insertQuery, (err, res) => {
              if(err){
                  return res.status(500).send(err);
              }
              console.log("Succesfully added player!")
            
          });
        });
        res.redirect("/");
    }
};
