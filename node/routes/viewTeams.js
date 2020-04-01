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
};