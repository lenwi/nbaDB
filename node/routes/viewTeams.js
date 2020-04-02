module.exports = {
    getTeams: (req, res) => {
        let query = "SELECT t.id AS id ,c.name AS city, co.name AS coach, c.country AS country, t.name AS teamname, t.logo AS logo, s.name AS arena\n" +
            "FROM TeamPlaysIn t LEFT JOIN Coach co ON co.teamID = t.id, City c, Stadium s\n" +
            "WHERE c.id = t.cityID AND s.teamID = t.id\n" +
            "ORDER BY id ASC;";

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('viewTeams.ejs', {
                title: "NBA DB | Teams", teams: result
            });
        });
    },
    postTeams: (req, res) => {
        const teamID = req.body.teamID;
        const query = "DELETE FROM TeamPlaysIn WHERE id =" + teamID + ";";
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/viewTeams');
                console.log(err);
            }
        });
        let query2 = "SELECT t.id AS id ,c.name AS city, co.name AS coach, c.country AS country, t.name AS teamname, t.logo AS logo, s.name AS arena\n" +
            "FROM TeamPlaysIn t LEFT JOIN Coach co ON co.teamID = t.id, City c, Stadium s\n" +
            "WHERE c.id = t.cityID AND s.teamID = t.id\n" +
            "ORDER BY id ASC;";

        // execute query
        db.query(query2, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('viewTeams.ejs', {
                title: "NBA DB | Teams", teams: result
            });
        });
    }
};