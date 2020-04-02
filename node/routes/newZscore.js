module.exports = {
    getNewZscore: (req, res) => {
        var playerInput=req.body.findplayer;
        var zInput=req.body.zscoreinput;
        var inputValue = req.body.submit;

        let query = "";

        if (inputValue == ">=") {
            query = "select * from teamplayers " + "where zscore >= " + zInput; 
        } else if (inputValue == "Find") {
            query = "select * from teamplayers " + "where playername LIKE " + "'%" + playerInput + "%'";
        } else {
            query = "select * from teamplayers " + "where zscore < " + zInput; 
        }

        // execute query
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

                res.render('index.ejs', {
                    title: "NBA DB | View Players",
                    players: result,
                    pcount: count
                });
            });
        });
    },
};