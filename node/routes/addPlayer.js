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
    addPlayer: (req, result) =>{
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
                return result.status(500).send(err);
            }
            teamID = res[0].id;
          //  dasdasd
          let insertQuery = "INSERT INTO `playerplaysfor` (teamID, number, name, position, zscore) " +
            "VALUES (" + teamID + "," + number+",'" + name + "','" + position[0] + "'," + zscore + ")"
          db.query(insertQuery, (err, res) => {
              if(err){
                  console.log("Error trying this query: "+ insertQuery);
                  return result.status(500).send(err);
              }
              console.log("Succesfully added player!")
            
          });
        });
        result.redirect("/");
    }
};
