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
};