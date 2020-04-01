module.exports = {
    editPlayerPage: (req, res) => {
        let playerID = req.params.id;
        let query = "select * from playerplaysfor where id =" + playerID;
          //Grab teamID from team;
          let teamsQuery ="SELECT name FROM teamplaysin";
          let selectedTeamQuery = "select teamplaysin.name from teamplaysin , playerplaysfor  where playerplaysfor.id=" + playerID + " AND teamplaysin.id = playerplaysfor.teamID";
          let teamID = null;

          let teams = null;
          let selectedTeamName = null;
          db.query(teamsQuery, (err, result) => {
              if(err){
                  console.log("Error grabbing team names!");
                  return res.status(500).send(err);
              }
              console.log("Grabbed team names!")
              teams = result;
              db.query(selectedTeamQuery, (err, result) => {
                if(err){
                    console.log("Error grabbing selected team name!");
                    return res.status(500).send(err);
                }
                console.log("Grabbed selected team name!")
                selectedTeamName = result[0];
                db.query(query, (err, result) => {
                    if(err){
                        return res.status(500).send(err);
                    }
                    console.log("Grabbed player information from id!")
                    res.render('editPlayer.ejs', {
                        title: "Edit Player",
                        player: result[0],
                        selectedTeamName: selectedTeamName,
                        teams: teams,
                        message: ''
                    });
                });
                
              });
            });
    },
    editPlayer: (req, res) => {
        let playerId = req.params.id;
        let name = req.body.name;
        let position = req.body.position;
        let number = req.body.number;
        let zscore = req.body.zscore;
       let updateQuery = "UPDATE playerplaysfor SET `name`='"+name+"', `position`='"+position+"',"+ "`number`=" + number + ", `zscore`="+zscore+" WHERE id =" + playerId;
       db.query(updateQuery, (err, result)=> {
           if(err){
            return res.status(500).send(err);
           }
           console.log("Succesfully edited player!");
           res.redirect("/");
       });
    }
};