module.exports = {
    getHideZscore: (req, res) => {
        let query = "select teamname, playername, playernum, playerposition from teamplayers" //display players with teams

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            console.log("###########################")
            res.render('indexHiddenZ.ejs', {
                title: "NBA DB | View Players", 
                players: result, 
            });
        });
    },
};