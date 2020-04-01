module.exports = {
    getHideArena: (req, res) => {
        let query = "SELECT t.id AS id ,c.name AS city, co.name AS coach, c.country AS country, t.name AS teamname, t.logo AS logo\n" +
            "FROM TeamPlaysIn t LEFT JOIN Coach co ON co.teamID = t.id, City c\n" +
            "WHERE c.id = t.cityID\n" +
            "ORDER BY id ASC;"

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