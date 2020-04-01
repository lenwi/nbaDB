module.exports = {
    getPlayer: (req, res) => {
        let query = "SELECT * FROM teamplayers" //get view of players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            console.log("###########################")
            res.render('addPlayer.ejs', {
                title: "NBA DB | Add Player", viewPlayers: result
            });
        });
    },
};