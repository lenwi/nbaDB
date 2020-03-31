module.exports = {
    getHideAction: (req, res) => {
        let query = "select * from teamplayers" //display players with teams

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            console.log("###########################")
            console.log(res)
            res.render('indexHiddenA.ejs', {
                title: "NBA DB | View Players", 
                players: result, 
            });
        });
    },
};