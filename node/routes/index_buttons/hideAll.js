module.exports = {
    getHideAll: (req, res) => {
        let query = "select teamname, playername, playernum, playerposition from teamplayers"; //display players with teams

        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            db.query("select count(*) as pcount from teamplayers", (err1, result1) => {
                if (err) {
                    res.redirect('/');
                }
                var count;
                if (result1.length < 1) {
                    count = 0;
                } else {
                    count = result1[0].pcount;
                }

                res.render('indexHiddenAll.ejs', {
                    title: "NBA DB | View Players",
                    players: result,
                    pcount: count
                });
            });
        });
    },
};