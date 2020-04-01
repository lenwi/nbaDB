module.exports = {
    getStanding: (req, res) => {
        var placeInput = req.body.place;
        var yearInput = req.body.year;
        let query="";

        if (placeInput == null || yearInput == null) {
            query = "Select P.name As Player From playerplaysfor P Where not exists (Select S.teamID from seasonof S where S.year = 2012 and S.standing = 'First' and S.teamID not in (Select T.id from teamplaysin T where T.id=P.teamID));"
        } else {
            query = "Select P.name As Player From playerplaysfor P Where not exists (Select S.teamID from seasonof S where S.year = " + yearInput +" and S.standing = " + "'" + placeInput + "'" + " and S.teamID not in (Select T.id from teamplaysin T where T.id=P.teamID));"
        }


        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            console.log("###########################")
            res.render('viewStanding.ejs', {
                title: "NBA DB | Standing Data", 
                players: result, 
            });
        });
    },
};