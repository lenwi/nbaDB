module.exports = {
    getTeams: (req, res) => {
        let query = "SELECT t.id AS id ,c.name AS city, c.country AS country, t.name AS teamname, t.logo AS logo, s.name AS arena\n" +
            "FROM TeamPlaysIn t, City c, Stadium s\n" +
            "WHERE c.id = t.cityID AND s.teamID = t.id\n" +
            "ORDER BY id ASC;" // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            console.log("###########################")
            console.log(res)
            res.render('viewTeams.ejs', {
                title: "NBA DB | Teams", teams: result
            });
        });
    },
};