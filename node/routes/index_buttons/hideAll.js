module.exports = {
    getHideAll: (req, res) => {
        let query = "select teamname, playername, playernum, playerposition from teamplayers" //display players with teams

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            console.log("###########################")
            res.render('indexHiddenAll.ejs', {
                title: "NBA DB | View Players", 
                players: result, 
            });
        });
    },
};