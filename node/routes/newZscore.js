module.exports = {
    getNewZscore: (req, res) => {
        var zInput=req.body.zscoreinput;
        let query = "select * from teamplayers " + "where zscore >= " + zInput; //display players with teams

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