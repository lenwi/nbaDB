module.exports = {
    getNewZscore: (req, res) => {
        var zInput=req.body.zscoreinput;
        var inputValue = req.body.submit;

        let query = "";

        if (inputValue == ">=") {
            query = "select * from teamplayers " + "where zscore >= " + zInput; //display players with teams
        } else {
            query = "select * from teamplayers " + "where zscore < " + zInput; //display players with teams
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