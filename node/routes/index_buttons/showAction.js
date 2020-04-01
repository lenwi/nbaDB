module.exports = {
    getShowAction: (req, res) => {
        let query = "select * from teamplayers" //display players with teams

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