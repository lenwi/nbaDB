module.exports = {
    getHideArena: (req, res) => {
        let query = "SELECT t.id AS id ,c.name AS city, co.name AS coach, c.country AS country, t.name AS teamname, t.logo AS logo, s.name AS arena, count(*) sponsors\n" +
        "FROM TeamPlaysIn t LEFT JOIN Coach co ON co.teamID = t.id, City c, Funds f, Stadium s\n" +
        "WHERE c.id = t.cityID AND s.teamID = t.id AND f.teamID = t.id\n" +
        "group by id, city, coach, country, teamname, logo, arena\n" +
        "ORDER BY id ASC;";

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('hideArena.ejs', {
                title: "NBA DB | Teams", teams: result
            });
        });
    },
    postHideArena: (req, res) => {
        const teamID = req.body.teamID;
        const query = "DELETE FROM TeamPlaysIn WHERE id =" + teamID + ";";
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/hideArena');
                console.log(err);
            }
        });
        let query2 = "SELECT t.id AS id ,c.name AS city, co.name AS coach, c.country AS country, t.name AS teamname, t.logo AS logo\n" +
            "FROM TeamPlaysIn t LEFT JOIN Coach co ON co.teamID = t.id, City c\n" +
            "WHERE c.id = t.cityID\n" +
            "ORDER BY id ASC;"

        // execute query
        db.query(query2, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('hideArena.ejs', {
                title: "NBA DB | Teams", teams: result
            });
        });
    }
};