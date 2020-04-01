module.exports = {
    deletePlayer: (req, res) => {
        console.log("Delete button pressed!")
        let playerID = req.params.id;
        let deleteQuery = "DELETE from playerplaysfor where id="+playerID;
        console.log(deleteQuery);
        db.query(deleteQuery, (err, result) => {
            if(err){
                console.log("Error in deleting player!")

                return;
            }
            console.log("Successfully deleted player!")

        });
        res.redirect("/");
    }
};