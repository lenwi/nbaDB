--Displays players grouped by team, show when creating/deleting a new player
--Join
CREATE VIEW teamPlayers AS 
SELECT teamplaysin.name AS teamname, playerplaysfor.name AS playername, 
playerplaysfor.number AS playernum, playerplaysfor.position AS playerposition,
playerplaysfor.zscore AS zscore
FROM teamplaysin Inner JOIN playerplaysfor
ON teamplaysin.id=playerplaysfor.teamID
ORDER BY teamname

Go --remove Go in mysql

--Displays number of players per team
--Nested aggregation w group by
CREATE VIEW numPlayersPerTeam AS
SELECT teamplaysin.name AS Team, count(playerplaysfor.id) AS numPlayers
FROM teamplaysin, playerplaysfor
Group BY Team
Order by Team;

Go --remove Go in mysql

--Displays all players with a z-score higher than x
--Selection
--TODO// replace 1 with user input x
Select P.name AS Player, P.number AS Num, T.name AS Team, P.zscore AS 'Z-Score'
From playerplaysfor P inner join teamplaysin T
On P.teamID=T.id
Where P.zscore >= 1;

--Displays all players who placed x in year y
--Division
--TODO// replace 'First' with user input x, 2012 with user input y
--TODO// doesnt work
Select P.name As Player
From playerplaysfor P
Where not exists
(Select S.teamID
From seasonof S 
Where not exists
(Select T.id
From teamplaysin T
Where T.id = P.teamID AND T.id = S.teamID AND S.year = 2012 AND
S.standing = 'First'));

--TODO// except version, select is invalid error
-- Select P.name As Player
-- From playerplaysfor P
-- Where not exists (
-- (Select S.teamID from seasonof S)
-- Except
-- (Select T.id from teamplaysin T
-- where T.id=P.teamID and S.year = 2012 and
-- S.standing = 'First'));

--Displays teams with number of sponsors and total amount of $ funded by all 
--sponsors combined
--Aggregation
Select T.name As Team, count(Distinct F.sponsorID) As '# of Sponsors',
sum(Distinct F.amount) As 'Total Sponsorship$'
From funds F, teamplaysin T
where F.teamID=T.id
Group by Team
Order by sum(Distinct F.amount) DESC;

--TODO// Projection