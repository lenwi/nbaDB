module.exports = {
    getNewZscore: (req, res) => {
        var playerInput=req.body.findplayer;
        var zInput=req.body.zscoreinput;
        var inputValue = req.body.submit;

        let query = "";

        if (inputValue == ">=") {
            query = "select * from teamplayers " + "where zscore >= " + zInput; 
        } else if (inputValue == "Find") {
            query = "select * from teamplayers " + "where playername = " + "'" + playerInput + "'";
        } else {
            query = "select * from teamplayers " + "where zscore < " + zInput; 
        }

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            console.log("###########################")
            res.render('index.ejs', {
                title: "NBA DB | View Players", 
                players: result, 
            });
        });
    },
};