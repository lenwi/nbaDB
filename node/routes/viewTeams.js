module.exports = {
    getTeams: (req, res) => {
        let query = "SELECT * FROM TeamPlaysIn ORDER BY id ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            console.log("###########################")
            res.render('viewTeams.ejs', {
                title: "NBA DB | View Teams", teams: result
            });
        });
    },
};